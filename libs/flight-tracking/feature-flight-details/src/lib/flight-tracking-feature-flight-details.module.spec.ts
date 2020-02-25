import { async, TestBed } from '@angular/core/testing';
import { FlightTrackingFeatureFlightDetailsModule } from './flight-tracking-feature-flight-details.module';

describe('FlightTrackingFeatureFlightDetailsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FlightTrackingFeatureFlightDetailsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FlightTrackingFeatureFlightDetailsModule).toBeDefined();
  });
});
