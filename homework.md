create a  repository

initialize the repo
node_modules , package.json ,  package.lock.json
install express
create a server
listen to port 777
write a request handler for trest
start command in package.json
install nodemon and update scritps inside package.jsonn


initiallize git
.gitignore
difference bertween package.json and package.lock.json
create a remodete repo
and push the codeee to github
play with routes extensions
order of the routes matteres alot


HTTP --methods 
POST
PUT
GET

expolore routing ? , + ,/,
readign the query params
reading dynamic routes

<!-- lets start from the scratch -->

multiple route handlers --play wiht the code
next()
next funnction and errors along with res.send()
<!-- app.use("/route)" , rh , rh2 , rh3 , rh4 , rh5 , rh6); -->



what is middle warew and how express js handling middleware
 difference between the app.use and app.all

 create a free cluster
 install ongoose library
 connect to database
 then get th connection url
 caalll the connect db function and connect to database before the serve r started


 create a user schem in your laptop
 create /sinup to addd data in databse
 differene between js and json

 add the expressjson middle ware
 make the signup api dynamic from the end user
 user.findone duplixccate email ids , which object retured
 API-get user by email
 API- feed api -get/fees-get all the user from the database
 API-get user by ID
 createa delete api
 difference between patch and put
 api to update


 explore schema type option forma the doc

 add required , uniqque ,  lowercae , min , minLength , trim , add fefault , 
 create custom validators
 improve the DB schen=ma   , ,put all aappropriate validations
 add timestaps 


DATA SANITISATION
 API level validation in put and patch a

 install validator and use validator fiinction explore validatore library 

 it helps in sanitisartion also 
 use vaalidator for pass , email and image url



 validate data in sgnup apui and make helper function in utils 
install bcrypt 
creata password hash y
andsave the useer

install cookie parser
just send dummy cookie

install jsonwebtoken
in login api after email and password veirification create jwt token and send it to  user
resd the cookies inside the profile



userAuth middleware 
add the userAuth middleware in profile api amnd a new sendconnection request api

set the expiry of jwt  token and cookies to 7 days


create user schema method to create getJWT()

create Userschema method to comparepassword(passwordInputByUser)


<!-- go and explore tinder -->
create   list of apis
then maake a group for routers


read doc got express.ROuter
create routes fodler for managing auth,profile ,request , routers
create authRouter , profielROuter , requestRouter
import these routers in appjs