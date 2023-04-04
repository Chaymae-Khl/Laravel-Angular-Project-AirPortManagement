import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrerinfopassComponent } from './entrerinfopass.component';

describe('EntrerinfopassComponent', () => {
  let component: EntrerinfopassComponent;
  let fixture: ComponentFixture<EntrerinfopassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrerinfopassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrerinfopassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
