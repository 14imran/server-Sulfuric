const mongoose = require("mongoose");

let InvoiceSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
    invoiceName: {
      type: String,
    },
    invoiceNumber: {
      type: Number,
    },

  },
  {
    timestamps: true,
  }
);

let InvoiceModel = mongoose.model("invoice", InvoiceSchema);

module.exports = InvoiceModel;
