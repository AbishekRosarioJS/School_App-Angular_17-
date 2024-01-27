import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthStdTeachersComponent } from './fourth-std-teachers.component';

describe('FourthStdTeachersComponent', () => {
  let component: FourthStdTeachersComponent;
  let fixture: ComponentFixture<FourthStdTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FourthStdTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourthStdTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
