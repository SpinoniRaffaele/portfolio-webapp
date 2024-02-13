export default function handler(request, response) {
    const Mailjet = require('node-mailjet');
    const mailjet = Mailjet.apiConnect(
        process.env["API_KEY"],
        process.env["API_SECRET"],
    );
    const mailjetRequest = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
            {
                From: {
                    Email: request.body.address,
                    Name: 'Sender',
                },
                To: [
                    {
                        Email: 'raffaelespinoni@gmail.com',
                        Name: 'Raffaele',
                    },
                ],
                Subject: 'Portfolio Webapp message',
                TextPart: 'New message from ' + request.body.address,
                HTMLPart: '<i>' + request.body.textBody + '</i>'
            },
        ],
    });
    mailjetRequest.then(result => { response.send(JSON.stringify({status: "success"})) }).catch(err => { response.send(JSON.stringify({status: "ko", error: err})) })
}