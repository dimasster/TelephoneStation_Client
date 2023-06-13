import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpMessengerComponent } from './help-messenger.component';

describe('HelpMessengerComponent', () => {
  let component: HelpMessengerComponent;
  let fixture: ComponentFixture<HelpMessengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpMessengerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpMessengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
