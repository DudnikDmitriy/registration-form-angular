import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private invalidEmails = ['test@test.test']

  constructor() { }

  public checkEmail(email: string): Observable<ValidationErrors | null> {
    let observable: Observable<ValidationErrors | null>;
    if (this.invalidEmails.includes(email)) {
      observable = of({error: 'email is already exist'});
    } else {
      observable = of(null);
    }

    return observable.pipe(delay(2000));
  }
}
