import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailAPIService {

  private readonly baseUrl = 'https://portfolio-webapp-spinoniraffaele.vercel.app/api/sendMail';

  constructor(private http: HttpClient) { }

  sendMail(sender: string, content: string): Observable<any> {

    let params = new HttpParams();
    params = params.append('address', sender);
    params = params.append('body', this.whitelistContent(content));

    return this.http.get(this.baseUrl, {responseType: 'text', params: params });
  }

  public isResponseGood(res: any): boolean {
    return JSON.parse(res)?.Messages[0]?.Status === "success";
  }

  public whitelistContent(content: string): string {
   return content.replace('#', "_")
   .replace('?', "_")
   .replace('=', "_")
   .replace('&', "_")
   .replace('/', "_");
  }
}
