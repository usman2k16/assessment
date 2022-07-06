import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cPostDetailsComponent } from './post-details.component';

describe('cPostDetailsComponent', () => {
  let component: cPostDetailsComponent;
  let fixture: ComponentFixture<cPostDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ cPostDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(cPostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
