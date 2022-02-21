import { Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';
import { TagService } from '@modules/tag/services/tag.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  submitted = false;

  hide = true;

  izin_verildi = false;

  stepOne = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tagService: TagService,
    private router: Router,
    private title: Title
  ) {
    this.form = formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.min(8)]]
      },
      {
        updateOn: 'submit'
      }
    );
  }

  ngOnInit(): void {
    this.title.setTitle(`Oturum Aç - ${environment.appTitle}`);
  }

  submit(): void {
    if (this.form.valid) {
      this.submitted = true;
      const { email, password } = this.form.value;

      this.authService
        .login(email, password)
        .pipe(
          catchError((err, caught) => {
            this.form.get('email')!.setErrors({
              emailNotFound: true
            });
            markDirty(this);
            this.submitted = false;
            return EMPTY;
          })
        )
        .subscribe((value) => {
          this.submitted = false;
          // @ts-ignore
          if (value.error) {
            alert('error');
            console.log(value);
          } else {
            // Redirect the user
            this.router.navigate([this.authService.redirectUrl]).then((value1) => {
              // Kullanicinin favori etiketlerini kaydet
              this.tagService.getFavoriteTags().subscribe((value2) => {
                if (value2) {
                  localStorage.setItem('watchedTags', JSON.stringify(value2));
                }
              });
            });
          }
        });
    }
  }
}
