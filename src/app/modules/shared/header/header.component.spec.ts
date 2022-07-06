import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cHeaderComponent } from './header.component';

describe('cHeaderComponent', () => {
  let component: cHeaderComponent;
  let fixture: ComponentFixture<cHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ cHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(cHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
