import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixStdStudentsComponent } from './six-std-students.component';

describe('SixStdStudentsComponent', () => {
  let component: SixStdStudentsComponent;
  let fixture: ComponentFixture<SixStdStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SixStdStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SixStdStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
