const express = require("express")
const User = require("./userModel")
const path = require('path');

const router = express.Router()

router.get("/", (req, res) => {
    // res.send("Get SignUp")
    // res.sendFile(path.join(__dirname+'/signup.html'));
    res.render("signup")
})

router.post("/", (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        gendar: req.body.gendar,
        password: req.body.password,
        birthdate: req.body.birthdate,
    })
    try {
        const newAuthor =  author.save()
        res.redirect(`/login`)
      } catch {
        res.render('/login', {
          author: author,
          errorMessage: 'Error creating Author'
        })
      }
    // res.send("Post SignUp")
})
module.exports = router
