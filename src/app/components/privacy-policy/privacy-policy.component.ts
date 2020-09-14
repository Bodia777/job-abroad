import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from "rxjs/operators";
import {IPrivacyPolicy} from "../../interfaces/language.interface";
import {Subject} from "rxjs";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit, OnDestroy {
  public content: IPrivacyPolicy;
  private unsubscribed = new Subject();

  constructor(private languageService: LanguageService) { }

    ngOnInit(): void {
        this.subscLanguage();
    }

    ngOnDestroy(): void {
        this.unsubscribed.next();
        this.unsubscribed.complete();
    }

    private subscLanguage(): void {
        this.languageService.content$
            .pipe(takeUntil(this.unsubscribed))
            .subscribe(({ privacyPolicy}) => this.content = privacyPolicy);
    }
}
