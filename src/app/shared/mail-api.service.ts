import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailAPIService {

  private readonly baseUrl = 'https://portfolio-webapp-spinoniraffaele.vercel.app/api/sendMail';

  constructor(public http: HttpClient) { }

  sendMail(sender: string, content: string): Observable<any> {

    let params = new HttpParams();
    params = params.append('address', sender);
    params = params.append('body', this.whitelistContent(content));

    return this.http.post(
      this.baseUrl, 
      {textBody: this.whitelistContent(content), address: sender}, 
      {responseType: 'text' });
  }

  public isResponseGood(res: any): boolean {
    return JSON.parse(res)?.status === "success";
  }

  public whitelistContent(content: string): string {
   return content.replace('#', "_")
   .replace('?', "_")
   .replace('=', "_")
   .replace('&', "_")
   .replace('/', "_");
  }
}
