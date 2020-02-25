import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependencyService {

  constructor() { }

  getData() {
    return 'data from service';
  }
}
