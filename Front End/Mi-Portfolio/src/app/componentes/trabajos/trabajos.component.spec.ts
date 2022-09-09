import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajosComponent } from './trabajos.component';

describe('TrabajosComponent', () => {
  let component: TrabajosComponent;
  let fixture: ComponentFixture<TrabajosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse TrabajosComponent', () => {
    expect(component).toBeTruthy();
  });

  it('Debería renderizar los datos', () => {
    const fixture = TestBed.createComponent(TrabajosComponent);
    const trabajos = fixture.componentInstance;
    expect(trabajos.datos).toBeTruthy();
  });
});
