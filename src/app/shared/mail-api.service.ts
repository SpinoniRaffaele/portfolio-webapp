import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailAPIService {

  constructor() { }

  sendMail(sender: string, content: string): Promise<any> {

    const timeoutPromise: Promise<any> = new Promise((_) => setTimeout(() => {return "KO"}, 1000));

    return timeoutPromise;
  }

}
