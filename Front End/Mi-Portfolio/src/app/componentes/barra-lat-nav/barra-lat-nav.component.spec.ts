import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraLatNavComponent } from './barra-lat-nav.component';

describe('BarraLatNavComponent', () => {
  let component: BarraLatNavComponent;
  let fixture: ComponentFixture<BarraLatNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraLatNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraLatNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
