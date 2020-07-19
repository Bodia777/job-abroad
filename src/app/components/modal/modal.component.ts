import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Text } from 'src/app/interfaces/language.interface';
import { LanguageService } from 'src/app/services/language.service';
import { ServerConnectionService } from 'src/app/services/server-connection.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  public content: Text | null;
  private unsubscribed = new Subject();
  public regExpForName = /^([^\s]+)([\s]*)([^\s]*)$/;
  public regExpForEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z]{2,4})$/i;
  public regExpForPhone = /^(\+38-0([1-9])([0-9])-([0-9]{3})-([0-9]{2})-([0-9]{2}))$/;
  public connectionForm: FormGroup;


  constructor(
    private fb: FormBuilder, public modalRef: BsModalRef, private serverConnectionService: ServerConnectionService,
    private modalService: BsModalService, private languageService: LanguageService
    ) { }

  ngOnInit(): void {
    this.createForm();
    this.subscLanguage();
  }

  ngOnDestroy(): void {
    this.unsubscribed.next();
    this.unsubscribed.complete();
  }

  public cancel(): void {
    this.connectionForm.reset();
    this.modalRef.hide();
  }

  public getErrorMessage(formControl, regExp): string | null {
    if (this.connectionForm.controls[formControl].hasError('required') ||  this.connectionForm.controls[formControl].value.match(/^(\+38-0__-___-__-__)$/)) {
      return this.content.modalMessage.requiredMessage;
    }
    if ( this.connectionForm.controls[formControl].dirty || this.connectionForm.controls[formControl].touched) {
    if (!this.connectionForm.controls[formControl].value.match(regExp)) {
      this.connectionForm.controls[formControl].setErrors({});
      return this.content.modalMessage.patternMessage;
    }
    return null;
  }
  }

  public aproveForm(): void {
    this.serverConnectionService.postEmail(this.connectionForm.value);
  }

  private createForm(): void {
    this.connectionForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.pattern]],
      phone: ['+38-0__-___-__-__', [Validators.required, Validators.pattern]],
      comment: [''],
    });
  }

  private subscLanguage(): void {
    this.languageService.content$
    .pipe(takeUntil(this.unsubscribed))
    .subscribe((value: Text) => this.content = value);
  }
}
