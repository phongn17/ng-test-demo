import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsyncDependencyService {

  constructor() { }

  getData(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve('async data'); }, 3000);
    });
  }
}
