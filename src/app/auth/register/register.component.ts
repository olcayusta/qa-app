import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from './services/register.service';
import { CommonModule } from '@angular/common';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MaterialModule } from '@modules/material/material.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'standard' }
    }
  ]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    displayName: FormControl<string | null>;
    picture: FormControl<string | null>;
  }>;

  constructor(private fb: FormBuilder, private registerService: RegisterService) {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
        displayName: ['', [Validators.required]],
        picture: ['https://resources.tidal.com/images/3f5fb645/46b8/44c4/9721/e60ec54c2fa1/320x320.jpg']
      },
      { updateOn: 'submit' }
    );
  }

  ngOnInit(): void {}

  submit(): void {
    const { email, password, displayName, picture } = this.registerForm.value;
    this.registerService.createUser(email!, password!, displayName!, picture!).subscribe((user) => {
      console.log('Üye kaydedildi!', user);
    });
  }
}
