const express = require("express")
const app = express()
const mailing = require('./lib/mail')
const autoReply = require('./lib/autoreply')
const ejs = require('ejs')
const PORT = 5000
const UserController = require('./controllers/userController')

app.use('/assets', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', async(req, res) => {
  const { name, email, text } = req.body

  const messageSent = await mailing(text, email)


  if(messageSent) {
      const messageSentToClient = await autoReply(email, name)

      if(messageSentToClient) {
          res.send('OK')
      }
  }
})

// app.get('/users', UserController.GET)


app.listen(PORT, console.log(`server is running at ${PORT}`))

