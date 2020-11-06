const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const ProjectSchema = new Schema(
  {
    author :{
      type: Schema.Types.ObjectId, ref: 'User'
    },
      projectName: {
      type: String,
      required: [true, "Please enter projectname"],
    },
    title: {
      type: String,
      required: [true, "Please enter title"],
    },
    startDate: {
      type: Number,
      required: [true, "Please enter start date"],
    },
    endDate: {
      type: Number,
      required: [true, "Please enter end date"],
    },

    amount: {
      type: Number,
    },
    mark: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

let ProjectModel = mongoose.model("project", ProjectSchema);

module.exports = ProjectModel;
