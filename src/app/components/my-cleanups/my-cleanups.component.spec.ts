import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCleanupsComponent } from './my-cleanups.component';

describe('MyCleanupsComponent', () => {
  let component: MyCleanupsComponent;
  let fixture: ComponentFixture<MyCleanupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCleanupsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCleanupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
