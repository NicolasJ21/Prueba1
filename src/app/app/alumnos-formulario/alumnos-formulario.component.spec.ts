import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosFormularioComponent } from './alumnos-formulario.component';

describe('AlumnosFormularioComponent', () => {
  let component: AlumnosFormularioComponent;
  let fixture: ComponentFixture<AlumnosFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnosFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnosFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
