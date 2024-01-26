import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthStdStudentsComponent } from './fifth-std-students.component';

describe('FifthStdStudentsComponent', () => {
  let component: FifthStdStudentsComponent;
  let fixture: ComponentFixture<FifthStdStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FifthStdStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FifthStdStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
