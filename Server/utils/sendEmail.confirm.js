const nodemailer = require('nodemailer');

// create transport object 
const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 587,
    secure: false, // use SSL
    auth: { // infor admin 
        user: '338563bfff364c',
        pass: '22ed0cc03cde76',
    }
})


// send email 
const sendEmailcomfirm = async (email , token) => {
const httpConfirm =  `http://localhost:8080/api/v1/varidate-email/${token}`
const buttonConfirmHTML = `
<h1>Xác nhận tài khoản</h1>
<p>Vui lòng nhấp vào liên kết sau để xác nhận tài khoản của bạn:</p>
<a href= "${httpConfirm}">
<button 
style="background-color: #4CAF50;
       border-radius: 8px;
       color: white;
        padding: 15px 32px; 
        text-align: center; 
        text-decoration: none;
         display: inline-block; 
         font-size: 16px;
          margin: 4px 2px;
           cursor: pointer;">
           confirm
           </button> 
</a>
 `
    const mailOptions = {
        from: 'admin@gmail.com',
        to: email,
        subject: "please comfirm this is your email ",
        html: buttonConfirmHTML
        }

    await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            throw new Error(`${err} at send Email `)
        }
        console.log(">>> email sent : " + info.response)
        return true
    })
}
module.exports = sendEmailcomfirm