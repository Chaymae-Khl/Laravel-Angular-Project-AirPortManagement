import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoleditComponent } from './voledit.component';

describe('VoleditComponent', () => {
  let component: VoleditComponent;
  let fixture: ComponentFixture<VoleditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoleditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
