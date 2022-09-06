import { Injectable } from '@angular/core';
import { Email } from '../../assets/mail-api.datamodel';

@Injectable({
  providedIn: 'root'
})
export class MailAPIService {

  private readonly host: string = 'smtp.elasticemail.com';

  private readonly username: string = 'raffaelespinoni@gmail.com';

  private readonly mailAddressFrom: string = 'raffaele.spinoni@gmail.com';

  private readonly mailAddressTo: string = 'raffaele.spinoni@gmail.com';

  private readonly subject: string = 'Mail From Your Portfolio Website';

  private readonly timeout: number = 10000;


  constructor() { }

  sendMail(sender: string, content: string): Promise<any> {

    const body: string = this.buildBody(sender, content);

    const emailPromise: Promise<any> = Email.send({
      Host : this.host,
      Username : this.username,
      Password : 'CB7E5436E35FEDF4055157784B71CDEE68AC',
      To : this.mailAddressTo,
      From : this.mailAddressFrom,
      Subject : this.subject,
      Body : body
    }).then(res => {return res});

    const timeoutPromise: Promise<any> = new Promise((_) => setTimeout(() => {return "KO"}, this.timeout));

    return Promise.race([emailPromise, timeoutPromise]);
  }

  private buildBody(sender: string, content: string): string {
    return 'Message from <b>' + sender + '</b><br><br>' + content;
  }
}
