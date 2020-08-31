import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import * as AOS from 'aos';
import {distinctUntilChanged, filter} from "rxjs/operators";
import {GoogleAnaliticsService} from "./services/google-analitics.service";

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'job-abroad';

    constructor(public router: Router, private googleAnaliticsService: GoogleAnaliticsService){
        this.router.events
            // @ts-ignore
            .pipe(filter(({ urlAfterRedirects }) => urlAfterRedirects))
            // @ts-ignore
            .pipe(distinctUntilChanged((prev, curr) => prev.urlAfterRedirects === curr.urlAfterRedirects))
            .subscribe(event => {
                if(event instanceof NavigationEnd){
                    gtag('config', 'UA-176290346-1',
                        {
                            'page_path': event.urlAfterRedirects
                        }
                    );
                }
            }
        )}

  ngOnInit() {
      AOS.init();
      this.getUserAgent()
  }

  private getUserAgent() {
      const userAgentString = window.navigator.userAgent;
      this.googleAnaliticsService
          .eventEmitter('user-agent', userAgentString, 'init');
  }
}
