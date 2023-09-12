import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';
import { HOBBY, JS_FRAMEWORKS } from './form.constants';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})

export class ReactiveFormComponent implements OnInit {
  public group: FormGroup = new FormGroup({});
  public hobby = HOBBY;
  public jsFrameworks = JS_FRAMEWORKS;

  constructor(private apiService: ApiService) {}

  public ngOnInit(): void {
    this.group = new FormGroup ({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      framework: new FormControl('', [Validators.required]),
      frameworkVersion: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email], [(control) => this.asyncValidator(control)]),
      hobby: new FormControl([], [Validators.required])
    })
  }

  public sendForm(): void {
    console.log(this.group.value);
  }

  private asyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.apiService.checkEmail(control.value);
  }
}




