import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  @Output() onSubmitEvent = new EventEmitter<any>;
  @Input() submitLabel: any;

  email: any = new FormControl('', [Validators.required, Validators.email]);
  password: any = new FormControl('', [Validators.required]);


  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter your value'
    }

    return this.email.hasError('email') ? 'Not a valid Email' : ''
  }

  getPasswordErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter your value'
    }

    return '';
  }


  onSubmit() {
    this.onSubmitEvent.emit({
      email: this.email.value,
      password: this.password.value
    })
  }
}
