import { Injectable } from '@angular/core';
import { Email } from 'src/app/interfaces/email.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerConnectionService {

  constructor(private http: HttpClient) { }

 public postEmail(emailForm: Email): void {
   console.log(emailForm, 'emailForm');
   const url = 'https://localhost:3000/email';
   this.http.post(url, emailForm);
 }
}
