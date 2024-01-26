import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleschoolTeachersComponent } from './middleschool-teachers.component';

describe('MiddleschoolTeachersComponent', () => {
  let component: MiddleschoolTeachersComponent;
  let fixture: ComponentFixture<MiddleschoolTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiddleschoolTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiddleschoolTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
