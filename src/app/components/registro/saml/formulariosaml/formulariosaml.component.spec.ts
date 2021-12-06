import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosamlComponent } from './formulariosaml.component';

describe('FormulariosamlComponent', () => {
  let component: FormulariosamlComponent;
  let fixture: ComponentFixture<FormulariosamlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariosamlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosamlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
