import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cUserDetailsComponent } from './user-details.component';

describe('cUserDetailsComponent', () => {
  let component: cUserDetailsComponent;
  let fixture: ComponentFixture<cUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ cUserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(cUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
