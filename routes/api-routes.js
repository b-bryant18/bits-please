

// /////////////////////////////////////////////////////////////
// // as of now
// // delete this file
// // split api-routes into user and quiz
// // we can disregard this plan if it isn't easiest
// /////////////////////////////////////////////////////////////


// // Requiring our models and passport as we've configured it
// var db = require("../models")
// var passport = require("../config/passport")

// module.exports = function (app) {
//   // Using the passport.authenticate middleware with our local strategy.
//   // If the user has valid login credentials, send them to the members page.
//   // Otherwise the user will be sent an error
//   app.post("/api/login", passport.authenticate("local"), function (req, res) {
//     res.redirect("/main-menu")
//   })

//   // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
//   // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
//   // otherwise send back an error
//   app.post("/api/login", function (req, res) {
//     db.User.create({
//       username: req.body.username,
//       password: req.body.password
//     })
//       .then(function () {
//         res.redirect(307, "/api/login")
//       })
//       .catch(function (err) {
//         res.status(401).json(err)
//       })
//   })

//   // Route for logging user out
//   app.get("/logout", function (req, res) {
//     req.logout()
//     res.redirect("/")
//   })

//   // Route for getting some data about our user to be used client side
//   app.get("/api/user_data", function (req, res) {
//     if (!req.user) {
//       // The user is not logged in, send back an empty object
//       res.json({})
//     } else {
//       // Otherwise send back the user's email and id
//       // Sending back a password, even a hashed password, isn't a good idea
//       res.json({
//         username: req.user.username,
//         id: req.user.id
//       })
//     }
//   })
//   app.post("/api/new", function (req, res) {

//     console.log("User Data:")
//     console.log(req.body)

//     db.User.create({
//       name: req.body.name,
//       created_at: req.body.created_at
//     }).then(function (results) {
//       // `results` here would be the newly created user
//       console.log(results);
//       res.end()
//     })

//   })
// }

// Add User

