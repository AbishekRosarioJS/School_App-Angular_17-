import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelfthStdStudentsComponent } from './twelfth-std-students.component';

describe('TwelfthStdStudentsComponent', () => {
  let component: TwelfthStdStudentsComponent;
  let fixture: ComponentFixture<TwelfthStdStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwelfthStdStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwelfthStdStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
