import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cUsersComponent } from './users.component';

describe('cUsersComponent', () => {
  let component: cUsersComponent;
  let fixture: ComponentFixture<cUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ cUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(cUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
