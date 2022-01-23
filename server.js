const express = require("express")
const app = express()
const ejs = require('ejs')
const PORT = 5000
const UserController = require('./controllers/userController')

app.use('/assets', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/users', UserController.GET)
// app.post('/users', UserController.POST)


app.listen(PORT, console.log(`server is running at ${PORT}`))