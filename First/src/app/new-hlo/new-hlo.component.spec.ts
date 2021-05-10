import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHloComponent } from './new-hlo.component';

describe('NewHloComponent', () => {
  let component: NewHloComponent;
  let fixture: ComponentFixture<NewHloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
