import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenthStdStudentsComponent } from './tenth-std-students.component';

describe('TenthStdStudentsComponent', () => {
  let component: TenthStdStudentsComponent;
  let fixture: ComponentFixture<TenthStdStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenthStdStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TenthStdStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
