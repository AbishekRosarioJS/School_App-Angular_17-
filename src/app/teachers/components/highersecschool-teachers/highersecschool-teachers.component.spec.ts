import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighersecschoolTeachersComponent } from './highersecschool-teachers.component';

describe('HighersecschoolTeachersComponent', () => {
  let component: HighersecschoolTeachersComponent;
  let fixture: ComponentFixture<HighersecschoolTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighersecschoolTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighersecschoolTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
