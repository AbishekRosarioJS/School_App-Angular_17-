import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtsStdTeachersComponent } from './firts-std-teachers.component';

describe('FirtsStdTeachersComponent', () => {
  let component: FirtsStdTeachersComponent;
  let fixture: ComponentFixture<FirtsStdTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirtsStdTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirtsStdTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
