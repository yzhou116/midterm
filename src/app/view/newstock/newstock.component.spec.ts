import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewstockComponent } from './newstock.component';

describe('NewstockComponent', () => {
  let component: NewstockComponent;
  let fixture: ComponentFixture<NewstockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
