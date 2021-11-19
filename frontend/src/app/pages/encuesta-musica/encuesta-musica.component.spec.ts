import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaMusicaComponent } from './encuesta-musica.component';

describe('EncuestaMusicaComponent', () => {
  let component: EncuestaMusicaComponent;
  let fixture: ComponentFixture<EncuestaMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestaMusicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
