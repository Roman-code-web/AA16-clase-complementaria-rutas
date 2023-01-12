import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBienvenidosComponent } from './section-bienvenidos.component';

describe('SectionBienvenidosComponent', () => {
  let component: SectionBienvenidosComponent;
  let fixture: ComponentFixture<SectionBienvenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBienvenidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBienvenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
