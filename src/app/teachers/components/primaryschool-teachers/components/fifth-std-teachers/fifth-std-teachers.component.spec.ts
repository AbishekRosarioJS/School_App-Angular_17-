import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthStdTeachersComponent } from './fifth-std-teachers.component';

describe('FifthStdTeachersComponent', () => {
  let component: FifthStdTeachersComponent;
  let fixture: ComponentFixture<FifthStdTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FifthStdTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FifthStdTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
