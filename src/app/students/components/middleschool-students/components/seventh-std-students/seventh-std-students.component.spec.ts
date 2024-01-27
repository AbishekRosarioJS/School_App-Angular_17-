import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhStdStudentsComponent } from './seventh-std-students.component';

describe('SeventhStdStudentsComponent', () => {
  let component: SeventhStdStudentsComponent;
  let fixture: ComponentFixture<SeventhStdStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeventhStdStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeventhStdStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
