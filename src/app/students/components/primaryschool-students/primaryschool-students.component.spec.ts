import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryschoolStudentsComponent } from './primaryschool-students.component';

describe('PrimaryschoolStudentsComponent', () => {
  let component: PrimaryschoolStudentsComponent;
  let fixture: ComponentFixture<PrimaryschoolStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryschoolStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimaryschoolStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
