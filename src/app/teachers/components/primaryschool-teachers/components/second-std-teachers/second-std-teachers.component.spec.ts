import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStdTeachersComponent } from './second-std-teachers.component';

describe('SecondStdTeachersComponent', () => {
  let component: SecondStdTeachersComponent;
  let fixture: ComponentFixture<SecondStdTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondStdTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondStdTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
