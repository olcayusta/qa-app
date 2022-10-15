import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export function getResolverData(name: string) {
  return inject(ActivatedRoute).snapshot.data[name];
}
