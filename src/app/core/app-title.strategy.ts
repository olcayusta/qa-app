import { inject, Injectable } from '@angular/core';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';

@Injectable()
export class AppTitleStrategy extends TitleStrategy {
/*  constructor(private readonly title: Title) {
    super();
  }*/

  private title = inject(Title);

  override updateTitle(snapshot: RouterStateSnapshot) {

    const title = this.buildTitle(snapshot);
    if (title !== undefined) {
      this.title.setTitle(`${title} - ${environment.appTitle}`);
    } else {
      this.title.setTitle(environment.appTitle);
    }
  }
}
