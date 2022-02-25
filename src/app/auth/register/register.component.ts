import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private title: Title
  ) {
    this.form = fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
        displayName: [''],
        picture: [
          'https://resources.tidal.com/images/3f5fb645/46b8/44c4/9721/e60ec54c2fa1/320x320.jpg'
        ]
      },
      { updateOn: 'submit' }
    );
  }

  ngOnInit(): void {
    this.title.setTitle(`Kayıt ol - ${environment.appTitle}`);
  }

  submit(): void {
    const { email, password, displayName, picture } = this.form.value;
    this.registerService.createUser(email, password, displayName, picture).subscribe((value) => {
      console.log('Üye kaydedildi!');
    });
  }
}
