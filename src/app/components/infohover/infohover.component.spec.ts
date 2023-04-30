import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfohoverComponent } from './infohover.component';

describe('InfohoverComponent', () => {
  let component: InfohoverComponent;
  let fixture: ComponentFixture<InfohoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfohoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfohoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
