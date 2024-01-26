import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryschoolTeachersComponent } from './primaryschool-teachers.component';

describe('PrimaryschoolTeachersComponent', () => {
  let component: PrimaryschoolTeachersComponent;
  let fixture: ComponentFixture<PrimaryschoolTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimaryschoolTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimaryschoolTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
