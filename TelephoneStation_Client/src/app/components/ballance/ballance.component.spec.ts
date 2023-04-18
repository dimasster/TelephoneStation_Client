import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallanceComponent } from './ballance.component';

describe('BallanceComponent', () => {
  let component: BallanceComponent;
  let fixture: ComponentFixture<BallanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BallanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
