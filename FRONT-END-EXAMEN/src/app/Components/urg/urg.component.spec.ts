import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgComponent } from './urg.component';

describe('UrgComponent', () => {
  let component: UrgComponent;
  let fixture: ComponentFixture<UrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
