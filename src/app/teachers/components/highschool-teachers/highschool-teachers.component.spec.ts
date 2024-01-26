import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighschoolTeachersComponent } from './highschool-teachers.component';

describe('HighschoolTeachersComponent', () => {
  let component: HighschoolTeachersComponent;
  let fixture: ComponentFixture<HighschoolTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighschoolTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighschoolTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
