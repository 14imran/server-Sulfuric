# Sulfuric

## Description

Sulfuric an application that helps freelancers manage their projects/clients/payments/invoices/proposals/contracts.

## MVP

* Landing page
* Register
* Sign in
* Logout
* Dashboard for the user
* Clients  (CRUD)
* Projects (CRUD)
* Create proposals,contracts,invoice and send them      instantly.
* Time tracking



## Backlog
* Invite Team for collaboration
* Invite client
* Assign time to projects and define the work done.
* Receive the payments to the lead users stripe account and distribute it to the other team members automatically.





### Frontend

* /
* /signup
* /signin
* /logout
* /dashboard
* /clients/:id
* /clients/put
* /projects/:id
* /projects/edit
* /projects/proposal
* /projects/contract
* /projects/invoice
* /projects/finance
* /todo/:id
* /todo/put


### Backend
* /POST /signup
* /POST /login
* /POST /logout

* /GET /user/id
* /PATCH /user/id/edit
* /DELETE /user/id/edit

* /GET /app/clients
* /POST /app/clients
* /PATCH /app/clients/id
* /DELETE /app/clients/id


* /GET /app/projects
* /POST /app/projects
* /PATCH /app/projects/id
* /DELETE /app/projects/id

* /GET /app/todo
* /POST /app/todo
* /PATCH /app/todo/id
* /DELETE /app/todo/id




## Models

### User
  * username: string
  * email: string
  * password: string

### Client
  * username: ObjectId, ref: User
  * email: string
  * tag:string
 

### Project
  * name: ObjectId, ref: User
  * clientName :  ObjectId, ref: Client
  * title: string
  * startDate: string
  * dueDate: string
  * hours :number
  * amount : number
  * mark:string

### invoice
 * name: ObjectId, ref: User
 * clientName :  ObjectId, ref: Client
 



## Links

* [Trello](https://trello.com/b/UQ0iCAHL/sulfuric)
* [Client Repository](https://github.com/14imran/client-Sulfuric)
* [Server Repository](https://github.com/14imran/server-Sulfuric)
* [Deployment Link](https://sulfuric.herokuapp.com/)