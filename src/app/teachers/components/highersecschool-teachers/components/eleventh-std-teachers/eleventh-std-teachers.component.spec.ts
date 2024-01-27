import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleventhStdTeachersComponent } from './eleventh-std-teachers.component';

describe('EleventhStdTeachersComponent', () => {
  let component: EleventhStdTeachersComponent;
  let fixture: ComponentFixture<EleventhStdTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EleventhStdTeachersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EleventhStdTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
