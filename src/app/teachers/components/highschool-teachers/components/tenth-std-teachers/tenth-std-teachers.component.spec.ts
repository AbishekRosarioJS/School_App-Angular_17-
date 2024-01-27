import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenthStdTeachersComponent } from './tenth-std-teachers.component';

describe('TenthStdTeachersComponent', () => {
  let component: TenthStdTeachersComponent;
  let fixture: ComponentFixture<TenthStdTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenthStdTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TenthStdTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
