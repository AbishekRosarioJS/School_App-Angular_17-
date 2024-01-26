import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighschoolStudentsComponent } from './highschool-students.component';

describe('HighschoolStudentsComponent', () => {
  let component: HighschoolStudentsComponent;
  let fixture: ComponentFixture<HighschoolStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighschoolStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighschoolStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
