import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddHabComponent } from './modal-add-hab.component';

describe('ModalHabComponent', () => {
  let component: ModalAddHabComponent;
  let fixture: ComponentFixture<ModalAddHabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddHabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddHabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
