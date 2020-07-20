// import { Injectable, OnDestroy } from '@angular/core';
// import { Email } from 'src/app/interfaces/email.interface';
// import { HttpClient } from '@angular/common/http';
// import { catchError, takeUntil } from 'rxjs/operators';
// import { throwError, Subject } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class ServerConnectionService implements OnDestroy {
//   private unsubscribed = new Subject();
//
//   constructor(private http: HttpClient) { }
//
//   ngOnDestroy(): void {
//     this.unsubscribed.next();
//     this.unsubscribed.complete();
//     }
//
//  public postEmail(emailForm: Email) {
//    const url = 'http://localhost:3000/email';
//    this.http.post(url, emailForm)
//    .pipe(
//     takeUntil(this.unsubscribed)
//     // catchError((err) => console.log(err))
//    )
//     .subscribe((result) => console.log(result));
//  }
// }
