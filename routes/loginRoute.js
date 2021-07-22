const express = require("express")
const router = express.Router()
var path = require('path');

console.log(path.join(__dirname + '/login.html'))
router.get('/login', function (req, res) {
    res.sendFile('D:/WorkSpace/Demo/Join-Resign/public/login.html');
});

router.get('/signup', function (req, res) {
    res.sendFile('D:/WorkSpace/Demo/Join-Resign/public/signup.html');
});
module.exports = router