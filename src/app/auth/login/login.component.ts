import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { User } from '@shared/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  form: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
  }>;

  submitted = false;
  hide = true;

  userInfoAvailable = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    // private tagService: TagService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.form = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['123456', [Validators.required, Validators.min(8)]]
      },
      {
        updateOn: 'submit'
      }
    );
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    this.userInfoAvailable = !!user;
  }

  formSubmitted(): void {
    if (this.form.valid) {
      this.submitted = true;

      const { email, password } = this.form.controls;

      this.authService
        .login(email.value!, password.value!)
        .pipe(
          catchError((err: HttpErrorResponse) => {
            this.submitted = false;
            email.setErrors({
              emailNotFound: true
            });
            this.cd.markForCheck();
            return EMPTY;
          })
        )
        .subscribe(async (user: User) => {
          this.submitted = false;
          // Redirect the user
          await this.router.navigate([this.authService.redirectUrl]);
          //this.saveFavoriteTagsToLocaleStorage();
        });
    }
  }

  /**
   * Save favorite tags to local storage
   */
  saveFavoriteTagsToLocaleStorage() {
    /*this.tagService.getFavoriteTags().subscribe((value2) => {
      value2 && localStorage.setItem('watchedTags', JSON.stringify(value2));
    });*/
  }
}
