import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperbodyComponent } from './upperbody.component';

describe('UpperbodyComponent', () => {
  let component: UpperbodyComponent;
  let fixture: ComponentFixture<UpperbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpperbodyComponent]
    });
    fixture = TestBed.createComponent(UpperbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
