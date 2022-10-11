import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const http = inject(HttpClient)

export function get<T>(url: string): Observable<T> {
  return inject(HttpClient).get<T>(url)
}

