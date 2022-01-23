const FS = require('../lib/fsDeal')

const portfolio = new FS('../model/portfolio.json')

module.exports = {
    GET: (_, res) => {
        try {
            const allImages = JSON.parse(portfolio.read())
            res.render('index', { images: allImages})
        } catch(err) {
            console.log(err)
        }
    },
    POST: (req, res) => {
        try {
            const { name, age } = req.body
            const allUsers = JSON.parse(users.read())

            allUsers.push({ id: allUsers.length + 1, name, age })

            users.write(allUsers)

            res.redirect('/users')
        } catch(err) {
            console.log(err)
        }
    }
}