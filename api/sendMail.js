export default function handler(request, response) {
    console.log(request);

    const Mailjet = require('node-mailjet');
    const mailjet = Mailjet.apiConnect(
        process.env["API_KEY"],
        process.env["API_SECRET"],
    );
    const mailjetRequest = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
            {
                From: {
                    Email: '10575516@polimi.it',
                    Name: 'Polimi Raffaele',
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
    mailjetRequest.then(result => { response.send(JSON.stringify({status: "success"})) }).catch(err => { console.log("ko: " + err) })
}