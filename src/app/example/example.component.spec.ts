import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponent } from './example.component';
import { DependencyService } from '../services/dependency.service';

class DependencyServiceStub {
  getData() { return 'stub'; }
}

describe('ExampleComponent', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;

  // using stub
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleComponent ],
      providers: [
        { provide: DependencyService, useClass: DependencyServiceStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // using stub
  it(`should have as title 'stub'`, async(() => {
    expect(component.title).toEqual('stub');
  }));
});

