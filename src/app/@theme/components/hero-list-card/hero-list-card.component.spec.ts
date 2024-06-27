import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListCardComponent } from './hero-list-card.component';

describe('HeroListCardComponent', () => {
  let component: HeroListCardComponent;
  let fixture: ComponentFixture<HeroListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroListCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
