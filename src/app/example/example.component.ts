import { Component, OnInit } from '@angular/core';
import { DependencyService } from '../services/dependency.service';

@Component({
  selector: 'app-example',
  template: `<div>{{title}}</div>`,
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  title: string;

  constructor(private dependency: DependencyService) {
    this.title = this.dependency.getData();
  }

  ngOnInit() {
  }

}
