import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightthStdStudentsComponent } from './eightth-std-students.component';

describe('EightthStdStudentsComponent', () => {
  let component: EightthStdStudentsComponent;
  let fixture: ComponentFixture<EightthStdStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EightthStdStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EightthStdStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
