import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { IModal } from './modal.interface';
import { LanguageService } from 'src/app/services/language.service';
import { ServerConnectionService } from 'src/app/services/server-connection.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'application-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ApplicationModalComponent implements OnInit, OnDestroy {
  public content: IModal;
  private unsubscribed = new Subject();
  public regExpForName = /^([^\s]+)([\s]*)([^\s]*)([\s]*)([^\s]*)$/;
  public regExpForEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z]{2,4})$/i;
  public regExpForPhone = /^(\+38-0([1-9])([0-9])-([0-9]{3})-([0-9]{2})-([0-9]{2}))$/;
  public connectionForm: FormGroup;

  constructor(
    private fb: FormBuilder, private serverConnectionService: ServerConnectionService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.subscLanguage();
  }

  ngOnDestroy(): void {
    this.unsubscribed.next();
    this.unsubscribed.complete();
  }

  public aproveForm(): void {
     this.serverConnectionService.postEmail(this.connectionForm.value);
     const timeOut = setTimeout(() => {
     this.connectionForm.reset();
     clearTimeout(timeOut);
   });
  }

  public getErrorMessage(formControl, regExp): string | null {
    if (this.connectionForm.controls[formControl].hasError('required') || this.connectionForm.controls[formControl].value.match(/^(\+38-0__-___-__-__)$/)) {
      return this.content.modalMessage.requiredMessage;
    }
    if (this.connectionForm.controls[formControl].dirty || this.connectionForm.controls[formControl].touched) {
      if (!this.connectionForm.controls[formControl].value.match(regExp)) {
        this.connectionForm.controls[formControl].setErrors({});
        return this.content.modalMessage.patternMessage;
      }
      return null;
    }
  }

  public cancel(): void {
    this.connectionForm.reset();
  }

  private createForm(): void {
    this.connectionForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.pattern]],
      phone: ['+38-0', [Validators.required, Validators.pattern]],
      comment: [''],
      personalData: [false, [Validators.required]],
      docData: [false, [Validators.required]],
    });
  }

  private subscLanguage(): void {
    this.languageService.content$
      .pipe(takeUntil(this.unsubscribed))
      .subscribe(({ modalText }) => {
        this.content = modalText;
      });
  }

  public addRequiredFormatToNumber(event): void {
    const phoneNumber = this.connectionForm.controls.phone;
    if (!phoneNumber.value || phoneNumber.value.length < 5) {
      phoneNumber.setValue('+38-0');
    }
    if (phoneNumber.value.length >= 5 && phoneNumber.value.slice(0, 5) !== '+38-0') {
      phoneNumber.setValue(`+38-0${phoneNumber.value.slice(5)}`);
    }
    this.replaceNumberWithDash(phoneNumber, event);
  }

  private replaceNumberWithDash(phoneNumber, event): void {
    let result = phoneNumber.value.slice(0, 5) + phoneNumber.value.slice(5).split('-').join('');
    if (result.length > 7) {
      phoneNumber.setValue(`${result.slice(0, 7)}-${result.slice(7)}`);
  }
    result = phoneNumber.value;
    if (result.length > 11) {
      phoneNumber.setValue(`${result.slice(0, 11)}-${result.slice(11)}`);
  }
    result = phoneNumber.value;
    if (result.length > 14) {
      phoneNumber.setValue(`${result.slice(0, 14)}-${result.slice(14)}`);
  }
    if (phoneNumber.value.length > 17) {
      phoneNumber.setValue(`${phoneNumber.value.slice(0, 17)}`);
    }
    if (phoneNumber.value.length === 7 || phoneNumber.value.length === 11 || phoneNumber.value.length === 14) {
      if (event.keyCode !== 8) {
      phoneNumber.setValue(`${phoneNumber.value}-`);
    }
  }
  }
}
