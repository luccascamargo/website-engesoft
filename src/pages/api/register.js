// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const nodemailer = require('nodemailer')
const user = 'lucas.camagon@outlook.com'
const pass = 'C4m4rg03gg'

export default (req, res) => {
  const { name, email, phone, company, message } = req.body
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    auth: { user, pass }
  })

  transporter
    .sendMail({
      from: user,
      to: user,
      replyTo: email,
      subject: name + ' da empresa ' + company + ' entrou em contato conosco',
      text: message + ' Telefone para contato: ' + phone
    })
    .then((info) => {
      res.send(info)
    })
    .catch((err) => {
      res.send(err)
    })
}
