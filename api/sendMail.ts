import Mailjet from "node-mailjet";

export default function handler(request: any, response: any) {
    const mailjet = Mailjet.apiConnect(
        process.env["API_KEY"]!,
        process.env["API_SECRET"]!,
    );
    const mailjetRequest = mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
            {
                From: {
                    Email: 'raffaele.spinoni@gmail.com',
                    Name: 'Raffaele',
                },
                To: [
                    {
                        Email: 'raffaelespinoni@gmail.com',
                        Name: 'Raffaele',
                    },
                ],
                Subject: 'Portfolio Webapp message',
                TextPart: '',
                HTMLPart: 'New message from ' + request.body.address + 
                '<br><i>' + request.body.textBody + '</i>'
            },
        ],
    });
    mailjetRequest
        .then((result: any) => {
            response.send(JSON.stringify({status: "success"}))})
        .catch((err: any) => {
            response.send(JSON.stringify({status: "ko", error: err}))});
}