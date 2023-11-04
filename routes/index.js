var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
// router.get("/", function(req, res){
//   res.render("index");
// })


// router.get("/create", async function(req, res) {
//   const createduser = await userModel.create({
//     username: "stranger32",
//     name: "strange",
//     age: 24
//   });
//   res.send(createduser)
// })

// router.get("/allusers", async function(req, res) {
//   let allusers = await userModel.find();
//   res.send(allusers);
// })

// router.get("/oneuser", async function (req, res) {
//   let allusers = await userModel.findOne({ username: "stranger32"
//   });
//   res.send(allusers);
// });

// router.get("/deleteuser", async function (req, res) {
//   let deleteduser = await userModel.findOneAndDelete({
//     username: "stranger32"
//   });
//   res.send(deleteduser)
// });

// session starts here 

// router.get("/", function (req, res) {
//   req.session.ban = true;
//   req.session.hello = "world";
//   res.render("index");
// });

// router.get("/checkban", function (req, res) {
//   if(req.session.ban === true) {
//     res.send("You are banned");
//     console.log(req.session.hello);
//   }
// });

// router.get("/deleteban", function (req, res) {
//   req.session.destroy(function(err){
//     if (err) throw err;
//     res.send("ban removed");
//   })
// });

// session ends here


// cookie starts here

// router.get("/", function (req, res) {
//   res.cookie("age", 23);
//   res.render("index");
// })

// router.get("/read", function (req, res) {
//   console.log(req.cookies.age);
//   res.send("check");
// })

// router.get("/delete", function (req, res) {
//   res.clearCookie("age");
//   res.send("all deleted");
// })

// cookie ends here




module.exports = router;
