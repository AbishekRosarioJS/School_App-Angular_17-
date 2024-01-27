import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthStdTeachersComponent } from './sixth-std-teachers.component';

describe('SixthStdTeachersComponent', () => {
  let component: SixthStdTeachersComponent;
  let fixture: ComponentFixture<SixthStdTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SixthStdTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SixthStdTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
