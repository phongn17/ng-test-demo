import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { AsyncExampleComponent } from './async-example.component';
import { AsyncDependencyService } from '../services/async-dependency.service';

describe('AsyncExampleComponent', () => {
  let component: AsyncExampleComponent;
  let fixture: ComponentFixture<AsyncExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncExampleComponent ],
      providers: [AsyncDependencyService]
    });

    fixture = TestBed.createComponent(AsyncExampleComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain async data', async () => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(component.title).toBe('async data');
    });
  });

  // it('should contain spy data', fakeAsync(() => {
  //   fixture.detectChanges();
  //   fixture.tick();
  //   expect(component.title).toBe('spy Data');
  // }));
});
