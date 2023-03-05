const express = require('express');
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const featureRouter = require('./route/routes');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportSetup = require('./passport');
const authRoute = require('./route/authRoute');
const session = require('express-session')

// app.use(cookieSession({
//   name:"cookie_session",
//   keys:["Din"],
//   maxAge: 24 * 60 * 60 * 100

// }))

app.use(session({secret: "din862"}))
app.use(passport.initialize())
app.use(passport.session())
app.use(bodyParser.json())
app.use(express.json())
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    allowedHeaders: "Content-Type, Authorization",
  })
)
app.use('/auth', authRoute);

//
app.use('/api',featureRouter)


//connect mongoDB
mongoose.set("strictQuery", false);
const dbURI = "mongodb+srv://bd-blog23:01777128803@din1998.jh5lnjd.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family:4
}).then(
  (result) => app.listen("8000", () => {
    console.log('Server in running on port 8000')
  })
).catch((err) => console.log(err));