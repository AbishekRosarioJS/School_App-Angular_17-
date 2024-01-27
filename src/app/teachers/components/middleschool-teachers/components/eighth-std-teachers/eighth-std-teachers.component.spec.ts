import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EighthStdTeachersComponent } from './eighth-std-teachers.component';

describe('EighthStdTeachersComponent', () => {
  let component: EighthStdTeachersComponent;
  let fixture: ComponentFixture<EighthStdTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EighthStdTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EighthStdTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
