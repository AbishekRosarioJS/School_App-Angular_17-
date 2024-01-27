import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NinethStdTeacherComponent } from './nineth-std-teacher.component';

describe('NinethStdTeacherComponent', () => {
  let component: NinethStdTeacherComponent;
  let fixture: ComponentFixture<NinethStdTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NinethStdTeacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NinethStdTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
