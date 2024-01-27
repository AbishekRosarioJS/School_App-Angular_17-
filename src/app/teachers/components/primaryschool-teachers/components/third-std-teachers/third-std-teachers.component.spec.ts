import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdStdTeachersComponent } from './third-std-teachers.component';

describe('ThirdStdTeachersComponent', () => {
  let component: ThirdStdTeachersComponent;
  let fixture: ComponentFixture<ThirdStdTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThirdStdTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdStdTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
