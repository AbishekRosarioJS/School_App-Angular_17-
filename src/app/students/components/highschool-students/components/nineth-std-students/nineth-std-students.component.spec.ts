import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinethStdStudentsComponent } from './nineth-std-students.component';

describe('NinethStdStudentsComponent', () => {
  let component: NinethStdStudentsComponent;
  let fixture: ComponentFixture<NinethStdStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NinethStdStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NinethStdStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
