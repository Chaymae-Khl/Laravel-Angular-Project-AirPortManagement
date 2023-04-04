import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbagagesComponent } from './showbagages.component';

describe('ShowbagagesComponent', () => {
  let component: ShowbagagesComponent;
  let fixture: ComponentFixture<ShowbagagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowbagagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowbagagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
