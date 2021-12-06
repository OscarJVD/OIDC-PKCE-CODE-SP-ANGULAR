import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasamlComponent } from './tablasaml.component';

describe('TablasamlComponent', () => {
  let component: TablasamlComponent;
  let fixture: ComponentFixture<TablasamlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablasamlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasamlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
