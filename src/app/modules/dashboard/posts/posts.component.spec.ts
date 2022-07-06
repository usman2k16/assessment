import { ComponentFixture, TestBed } from '@angular/core/testing';

import { cPostsComponent } from './posts.component';

describe('cPostsComponent', () => {
  let component: cPostsComponent;
  let fixture: ComponentFixture<cPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ cPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(cPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
