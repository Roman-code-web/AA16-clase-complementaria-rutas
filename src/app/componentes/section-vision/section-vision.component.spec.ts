import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionVisionComponent } from './section-vision.component';

describe('SectionVisionComponent', () => {
  let component: SectionVisionComponent;
  let fixture: ComponentFixture<SectionVisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionVisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
