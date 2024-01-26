import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStdStudentsComponent } from './second-std-students.component';

describe('SecondStdStudentsComponent', () => {
  let component: SecondStdStudentsComponent;
  let fixture: ComponentFixture<SecondStdStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondStdStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondStdStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
