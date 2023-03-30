import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCleanupComponent } from './explore-cleanup.component';

describe('ExploreCleanupComponent', () => {
  let component: ExploreCleanupComponent;
  let fixture: ComponentFixture<ExploreCleanupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreCleanupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreCleanupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
