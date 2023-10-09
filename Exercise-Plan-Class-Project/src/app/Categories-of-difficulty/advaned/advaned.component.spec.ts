import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanedComponent } from './advaned.component';

describe('AdvanedComponent', () => {
  let component: AdvanedComponent;
  let fixture: ComponentFixture<AdvanedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvanedComponent]
    });
    fixture = TestBed.createComponent(AdvanedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
