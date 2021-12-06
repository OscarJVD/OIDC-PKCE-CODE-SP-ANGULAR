import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaopenidComponent } from './tablaopenid.component';

describe('TablaopenidComponent', () => {
  let component: TablaopenidComponent;
  let fixture: ComponentFixture<TablaopenidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaopenidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaopenidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
