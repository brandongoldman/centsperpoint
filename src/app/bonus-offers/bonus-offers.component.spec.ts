import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusOffersComponent } from './bonus-offers.component';

describe('BonusOffersComponent', () => {
  let component: BonusOffersComponent;
  let fixture: ComponentFixture<BonusOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
