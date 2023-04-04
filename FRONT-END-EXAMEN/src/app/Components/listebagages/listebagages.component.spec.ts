import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListebagagesComponent } from './listebagages.component';

describe('ListebagagesComponent', () => {
  let component: ListebagagesComponent;
  let fixture: ComponentFixture<ListebagagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListebagagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListebagagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
