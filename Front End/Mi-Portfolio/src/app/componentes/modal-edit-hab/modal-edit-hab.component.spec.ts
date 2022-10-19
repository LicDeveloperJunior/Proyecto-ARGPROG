import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditHabComponent } from './modal-edit-hab.component';

describe('ModalEditHabComponent', () => {
  let component: ModalEditHabComponent;
  let fixture: ComponentFixture<ModalEditHabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditHabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditHabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
