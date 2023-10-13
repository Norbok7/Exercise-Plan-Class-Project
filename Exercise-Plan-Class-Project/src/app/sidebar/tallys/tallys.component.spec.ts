import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallysComponent } from './tallys.component';

describe('TallysComponent', () => {
  let component: TallysComponent;
  let fixture: ComponentFixture<TallysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TallysComponent]
    });
    fixture = TestBed.createComponent(TallysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
