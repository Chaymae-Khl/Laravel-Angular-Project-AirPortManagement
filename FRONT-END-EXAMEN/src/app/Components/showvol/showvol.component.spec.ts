import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowvolComponent } from './showvol.component';

describe('ShowvolComponent', () => {
  let component: ShowvolComponent;
  let fixture: ComponentFixture<ShowvolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowvolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowvolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
