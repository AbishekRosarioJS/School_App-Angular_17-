import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighersecschoolStudentsComponent } from './highersecschool-students.component';

describe('HighersecschoolStudentsComponent', () => {
  let component: HighersecschoolStudentsComponent;
  let fixture: ComponentFixture<HighersecschoolStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighersecschoolStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighersecschoolStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
