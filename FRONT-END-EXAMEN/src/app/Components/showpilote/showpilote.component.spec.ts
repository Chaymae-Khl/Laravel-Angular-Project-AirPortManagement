import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpiloteComponent } from './showpilote.component';

describe('ShowpiloteComponent', () => {
  let component: ShowpiloteComponent;
  let fixture: ComponentFixture<ShowpiloteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowpiloteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowpiloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
