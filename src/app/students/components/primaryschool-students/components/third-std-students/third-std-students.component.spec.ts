import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdStdStudentsComponent } from './third-std-students.component';

describe('ThirdStdStudentsComponent', () => {
  let component: ThirdStdStudentsComponent;
  let fixture: ComponentFixture<ThirdStdStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThirdStdStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdStdStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
