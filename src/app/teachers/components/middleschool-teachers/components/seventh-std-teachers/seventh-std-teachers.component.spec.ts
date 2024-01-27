import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhStdTeachersComponent } from './seventh-std-teachers.component';

describe('SeventhStdTeachersComponent', () => {
  let component: SeventhStdTeachersComponent;
  let fixture: ComponentFixture<SeventhStdTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeventhStdTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeventhStdTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
