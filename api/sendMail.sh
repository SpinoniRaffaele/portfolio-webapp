handler() {
    curl -s -X POST --user "${API_KEY}:e8e9d3bd0a79e4ad9d5944bf25c2180e" https://api.mailjet.com/v3.1/send -H "Content-Type:application/json" -d '{"Messages":[{"From": {"Email": "raffaele.spinoni@gmail.com","Name": "Raffaele"},"To": [{"Email": "raffaelespinoni@gmail.com","Name": "Raffaele"}],"Subject": "My first Mailjet email","TextPart": "Greetings from Mailjet.","HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!","CustomID": "AppGettingStartedTest"}]}'
}
