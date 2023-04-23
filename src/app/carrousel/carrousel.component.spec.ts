import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselComponent } from './carrousel.component';

describe('CarrouselComponent', () => {
  let component: CarrouselComponent;
  let fixture: ComponentFixture<CarrouselComponent>;
  let index: BigInteger;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  setImgIndex(idx: BigInt): void {
     this.index = idx;
  }
});
