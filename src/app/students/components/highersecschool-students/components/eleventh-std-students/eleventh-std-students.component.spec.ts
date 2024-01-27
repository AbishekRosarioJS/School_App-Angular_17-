import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleventhStdStudentsComponent } from './eleventh-std-students.component';

describe('EleventhStdStudentsComponent', () => {
  let component: EleventhStdStudentsComponent;
  let fixture: ComponentFixture<EleventhStdStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EleventhStdStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EleventhStdStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
