import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalComponent } from './mechanical.component';

describe('MechanicalComponent', () => {
  let component: MechanicalComponent;
  let fixture: ComponentFixture<MechanicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MechanicalComponent]
    });
    fixture = TestBed.createComponent(MechanicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
