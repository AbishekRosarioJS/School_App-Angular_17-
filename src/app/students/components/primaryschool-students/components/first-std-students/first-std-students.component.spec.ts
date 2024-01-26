import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstStdStudentsComponent } from './first-std-students.component';

describe('FirstStdStudentsComponent', () => {
  let component: FirstStdStudentsComponent;
  let fixture: ComponentFixture<FirstStdStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstStdStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstStdStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
