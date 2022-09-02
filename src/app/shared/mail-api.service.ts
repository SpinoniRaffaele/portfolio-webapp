import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailAPIService {

  basePath: string = 'https://api.mailjet.com/v3.1/send';

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'Basic ' + btoa('3bcd35860e7b109e78aee3081e2cc625:e8e9d3bd0a79e4ad9d5944bf25c2180e')
  });

  body: string = '{"Messages":[{"From": {"Email": "raffaele.spinoni@gmail.com","Name": "Raffaele - Website"},"To": ' + 
  '[{"Email": "raffaele.spinoni@gmail.com","Name": "Raffaele"}],"Subject": ' +
  '"My first Mailjet email","TextPart": "Greetings from Mailjet.","HTMLPart": "<h3>Dear passenger 1, ' +
  'welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />","CustomID": "AppGettingStartedTest"}]}';

  constructor(private http: HttpClient) { }

  sendMail() {
    this.http.post(
      this.basePath, 
      this.body, 
      { headers: this.headers }
      ).subscribe(res => {console.log(res)});
  }
}
