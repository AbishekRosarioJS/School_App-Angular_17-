import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthStdStudentsComponent } from './fourth-std-students.component';

describe('FourthStdStudentsComponent', () => {
  let component: FourthStdStudentsComponent;
  let fixture: ComponentFixture<FourthStdStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FourthStdStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourthStdStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
