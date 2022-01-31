const nodemailer = require('nodemailer')

module.exports = async(content, senderEmial) => {

    let transporter = nodemailer.createTransport({
        port: 465,
        service: 'gmail',
        auth: {
            user: 'shokhbozkaumutov@gmail.com',
            pass: 'shokhboz99'
        }
    })

    let info = await transporter.sendMail({
        from: `"Fred Foo 👻" ${senderEmial}`,
        to: 'shokhbozkaumutov@gmail.com',
        subject: "Hello ✔",
        text: "Hello world?",
        html: `
            <h1>${content}</h1>
        `
    })

    return info.messageId
}