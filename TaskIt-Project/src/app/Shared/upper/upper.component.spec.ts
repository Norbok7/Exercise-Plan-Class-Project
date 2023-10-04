import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperComponent } from './upper.component';

describe('UpperComponent', () => {
  let component: UpperComponent;
  let fixture: ComponentFixture<UpperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpperComponent]
    });
    fixture = TestBed.createComponent(UpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
