import { Component, OnInit } from '@angular/core';
import { AsyncDependencyService } from '../services/async-dependency.service';

@Component({
  selector: 'app-async-example',
  template: `<div>{{title}}</div>`,
  styleUrls: ['./async-example.component.scss']
})
export class AsyncExampleComponent implements OnInit {
  title: string;

  constructor(private service: AsyncDependencyService) {
    this.service.getData().then(data => this.title = data);
  }

  ngOnInit() {
  }

}
