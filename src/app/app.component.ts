import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { appRoutes } from './router.config';
import { LoaderService } from './shared/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-webapp';
  backGroundImagePath: string = '../assets/images/background_Home.png';
  headers= new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'Basic ' + btoa('3bcd35860e7b109e78aee3081e2cc625:e8e9d3bd0a79e4ad9d5944bf25c2180e')
  });
  body: string = '{"Messages":[{"From": {"Email": "raffaele.spinoni@gmail.com","Name": "Raffaele - Website"},"To": ' + 
  '[{"Email": "raffaele.spinoni@gmail.com","Name": "Raffaele"}],"Subject": ' +
  '"My first Mailjet email","TextPart": "Greetings from Mailjet.","HTMLPart": "<h3>Dear passenger 1, ' +
  'welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />","CustomID": "AppGettingStartedTest"}]}';

  constructor(
    public loaderService: LoaderService, 
    private http: HttpClient, 
    private router: Router) {}

  ngOnInit(): void {
    //fake request to show the loading process, to be update when a backend is used
    this.http.get('', {responseType: 'text'}).subscribe();
    //this.http.post('https://api.mailjet.com/v3.1/send', this.body, { headers: this.headers }).subscribe(res => {console.log(res)});

    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationStart && this.isValidUrl(ev.url)) {
        this.backGroundImagePath = '../assets/images/background_' + ev.url.substring(1) + '.png';
      }
    });
  }

  private isValidUrl(url: string): boolean {
    var isFound: boolean = false;
    appRoutes.forEach(route => {
      if (route.path === url.substring(1).replace('%20', ' ')) {
        isFound = true;
      }
    });
    return isFound;
  }
}
