// var XMLHttpRequest = require('xhr2');
// const Email = { 
//     send: function (a) { 
//         return new Promise(function (n, e) { 
//             a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; 
//             var t = JSON.stringify(a); 
//             Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) 
//         }) 
//     }, 
//     ajaxPost: function (e, n, t) { 
//         var a = Email.createCORSRequest("POST", e); 
//         a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () {
//             var e = a.responseText; null != t && t(e) 
//         }, 
//         a.send(n) 
//     }, 
//     ajax: function (e, n) { 
//         var t = Email.createCORSRequest("GET", e); 
//         t.onload = function () { 
//             var e = t.responseText; 
//             null != n && n(e) 
//         }, t.send() 
//     }, 
//     createCORSRequest: function (e, n) { 
//         var t = new XMLHttpRequest; 
//         return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t 
//     } 
// };

// export default function handler(request, response) {

//     const host = 'smtp.elasticemail.com';

//     const username = 'raffaelespinoni@gmail.com';
  
//     const mailAddressFrom = 'raffaele.spinoni@gmail.com';
  
//     const mailAddressTo = 'raffaele.spinoni@gmail.com';
  
//     const subject = 'Mail From Your Portfolio Website';
  
//     const timeout = 10000;

//     const sender = request.body.sender;

//     const content = request.body.content;

//     const mailBody = 'Message from <b>' + sender + '</b><br><br>' + content;

//     const emailPromise = Email.send({
//       Host : host,
//       Username : username,
//       Password : process.env['MAIL_PWD'],
//       To : mailAddressTo,
//       From : mailAddressFrom,
//       Subject : subject,
//       Body : mailBody
//     });

//     const timeoutPromise = new Promise((_) => setTimeout(() => {return "KO"}, timeout));

//     const finalResult = Promise.race([emailPromise, timeoutPromise]);
//     finalResult.then(res => {
//         console.log(res);
//         if (res === 'OK') {
//             response.status(200).send('');
//         } else {
//             response.status(400).send('SMTP Server Error');
//         }
//     });
//     // const body = request.body;
//     // response.status(200).send(`Hello ${body}!`);
//   }

const mailjet = require('node-mailjet').connect('3bcd35860e7b109e78aee3081e2cc625', '3bcd35860e7b109e78aee3081e2cc625');

export default function handler(request, response) {
const mailRequest = mailjet.post("send", {'version': 'v3.1'}).request({
  "Messages":[
    {
      "From": {
        "Email": "raffaele.spinoni@gmail.com",
        "Name": "Raffaele"
      },
      "To": [
        {
          "Email": "raffaele.spinoni@gmail.com",
          "Name": "Raffaele"
        }
      ],
      "Subject": "Greetings from Mailjet.",
      "TextPart": "My first Mailjet email",
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
mailRequest.then((result) => {
    console.log(result.body);
    response.status(200).send(`ok`);
  }).catch((err) => {
    console.log(err.statusCode);
    response.status(500).send(`Mail Provider error`);
  })
}
