import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecommendComponent } from './recommend.component';

describe('RecommendComponent', () => {
  let component: RecommendComponent;
  let fixture: ComponentFixture<RecommendComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
