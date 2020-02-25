import { async, TestBed } from '@angular/core/testing';
import { FlightTrackingFeatureFlightSearchModule } from './flight-tracking-feature-flight-search.module';

describe('FlightTrackingFeatureFlightSearchModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FlightTrackingFeatureFlightSearchModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FlightTrackingFeatureFlightSearchModule).toBeDefined();
  });
});
