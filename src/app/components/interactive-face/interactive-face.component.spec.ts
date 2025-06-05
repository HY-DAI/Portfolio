import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveFaceComponent } from './interactive-face.component';

describe('InteractiveFaceComponent', () => {
  let component: InteractiveFaceComponent;
  let fixture: ComponentFixture<InteractiveFaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveFaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
