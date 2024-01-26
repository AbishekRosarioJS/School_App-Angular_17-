import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleschoolStudentsComponent } from './middleschool-students.component';

describe('MiddleschoolStudentsComponent', () => {
  let component: MiddleschoolStudentsComponent;
  let fixture: ComponentFixture<MiddleschoolStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiddleschoolStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiddleschoolStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
