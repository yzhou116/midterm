import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YizhouComponent } from './yizhou.component';

describe('YizhouComponent', () => {
  let component: YizhouComponent;
  let fixture: ComponentFixture<YizhouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YizhouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YizhouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
