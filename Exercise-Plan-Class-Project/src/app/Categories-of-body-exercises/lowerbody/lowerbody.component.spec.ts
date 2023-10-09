import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerbodyComponent } from './lowerbody.component';

describe('LowerbodyComponent', () => {
  let component: LowerbodyComponent;
  let fixture: ComponentFixture<LowerbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LowerbodyComponent]
    });
    fixture = TestBed.createComponent(LowerbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
