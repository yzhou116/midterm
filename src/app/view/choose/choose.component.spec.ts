import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ChooseComponent } from './choose.component';

describe('ChooseComponent', () => {
  let component: ChooseComponent;
  let fixture: ComponentFixture<ChooseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
