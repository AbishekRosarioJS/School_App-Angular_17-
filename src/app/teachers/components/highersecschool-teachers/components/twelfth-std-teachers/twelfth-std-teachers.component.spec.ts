import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelfthStdTeachersComponent } from './twelfth-std-teachers.component';

describe('TwelfthStdTeachersComponent', () => {
  let component: TwelfthStdTeachersComponent;
  let fixture: ComponentFixture<TwelfthStdTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwelfthStdTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwelfthStdTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
