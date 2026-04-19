<!-- DEVTINDER APIS -->

<!-- authRouter -->
POST /signup
POST /login
POST /logout

<!-- profileRouter -->
GET /profile/view
PATCH /profile/edit
PATCH /profile/password

<!-- connectionRequestRouter -->
POST/ request/send/interested/:userId
POST/ request/send/ingore/:userId

POST /request/review/accepted/:requestes
POST /request/review/rejected/:requestes


<!-- userRouter -->
GET /user/connections
GET /user/requestes/recieved
GET /user/feed

status : ignore , interested , accepted ,rejected