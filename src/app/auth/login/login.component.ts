import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { User } from '@shared/models/user.model';

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

  ngOnInit(): void {}

  submit(): void {
    this.submitted = true;

    const { email, password } = this.form.value as { email: string; password: string };

    this.authService
      .login(email, password)
      .pipe(
        catchError((err) => {
          this.submitted = false;
          this.form.get('email')!.setErrors({
            emailNotFound: true
          });
          this.cd.markForCheck();
          return EMPTY;
        })
      )
      .subscribe((user: User) => {
        console.log('subscribe bitti');
        this.submitted = false;
        // Redirect the user
        this.router.navigate([this.authService.redirectUrl]).then((value) => {
          //this.saveFavoriteTagsToLocaleStorage();
        });
      });
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
