import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qa-theme-togle',
  templateUrl: './theme-togle.component.html',
  styleUrls: ['./theme-togle.component.scss'],
})
export class ThemeTogleComponent implements OnInit {
  storageKey = 'theme-preference';
  theme = {
    value: 'light',
  };

  constructor() {
    // set early so no page flashes / CSS is made aware
    this.reflectPreference();
    // @ts-ignore
    this.theme.value = this.getColorPreference();
  }

  ngOnInit(): void {
    // set on load so screen readers can see latest value on the button

    this.reflectPreference();

    // sync with system changes
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({ matches: isDark }) => {
        this.theme.value = isDark ? 'dark' : 'light';
        this.setPreference();
      });
  }

  onClick() {
    // flip current value
    this.theme.value = this.theme.value === 'light' ? 'dark' : 'light';
    this.setPreference();
  }

  getColorPreference() {
    if (localStorage.getItem(this.storageKey)) {
      return localStorage.getItem(this.storageKey);
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
  }

  setPreference() {
    // @ts-ignore
    localStorage.setItem(this.storageKey, this.theme.value);
    this.reflectPreference();
  }

  reflectPreference() {
    // @ts-ignore
    document.firstElementChild.setAttribute('data-theme', this.theme.value);


    document
      .querySelector('#theme-toggle')
      // @ts-ignore
      ?.setAttribute('aria-label', this.theme.value);
  }
}
