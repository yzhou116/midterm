import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TestphpComponent } from './testphp.component';

describe('TestphpComponent', () => {
  let component: TestphpComponent;
  let fixture: ComponentFixture<TestphpComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestphpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestphpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
