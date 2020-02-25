import { async, TestBed } from '@angular/core/testing';
import { FlightTrackingShellModule } from './flight-tracking-shell.module';

describe('FlightTrackingShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FlightTrackingShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FlightTrackingShellModule).toBeDefined();
  });
});
