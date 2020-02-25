import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponent } from './example.component';
import { DependencyService } from '../services/dependency.service';

describe('ExampleComponent', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;
  let dependency: DependencyService;
  let spy: jasmine.Spy<() => string>;

  // using spy
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleComponent ],
      providers: [DependencyService]
    });
    dependency = TestBed.get(DependencyService);
    spy = spyOn(dependency, 'getData').and.returnValue('spy value');

    fixture = TestBed.createComponent(ExampleComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // using spy
  it(`test our spy dependency`, async(() => {
    expect(spy.calls.any()).toBeTruthy();
  }));
  
  it(`should contain spy value`, async(() => {
    const component = fixture.componentInstance;
    expect(component.title).toEqual('spy value');
  }));
});

