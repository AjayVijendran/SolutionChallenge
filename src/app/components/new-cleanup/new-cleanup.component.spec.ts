import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCleanupComponent } from './new-cleanup.component';

describe('NewCleanupComponent', () => {
  let component: NewCleanupComponent;
  let fixture: ComponentFixture<NewCleanupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCleanupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCleanupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
