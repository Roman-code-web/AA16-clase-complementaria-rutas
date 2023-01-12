import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMisionComponent } from './section-mision.component';

describe('SectionMisionComponent', () => {
  let component: SectionMisionComponent;
  let fixture: ComponentFixture<SectionMisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionMisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
