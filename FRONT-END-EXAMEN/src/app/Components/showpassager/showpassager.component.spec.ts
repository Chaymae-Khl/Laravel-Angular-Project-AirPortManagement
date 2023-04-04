import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpassagerComponent } from './showpassager.component';

describe('ShowpassagerComponent', () => {
  let component: ShowpassagerComponent;
  let fixture: ComponentFixture<ShowpassagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowpassagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowpassagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
