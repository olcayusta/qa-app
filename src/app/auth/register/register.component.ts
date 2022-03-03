import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService) {
    this.form = fb.group(
      {
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
        displayName: [null, [Validators.required]],
        picture: [
          'https://resources.tidal.com/images/3f5fb645/46b8/44c4/9721/e60ec54c2fa1/320x320.jpg'
        ]
      },
      { updateOn: 'submit' }
    );
  }

  ngOnInit(): void {}

  submit(): void {
    const { email, password, displayName, picture } = this.form.value;
    this.registerService.createUser(email, password, displayName, picture).subscribe((user) => {
      console.log('Üye kaydedildi!', user);
    });
  }
}
