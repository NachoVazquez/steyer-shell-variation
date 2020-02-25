import { async, TestBed } from '@angular/core/testing';
import { CheckInFeatureCheckInInfoModule } from './check-in-feature-check-in-info.module';

describe('CheckInFeatureCheckInInfoModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CheckInFeatureCheckInInfoModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CheckInFeatureCheckInInfoModule).toBeDefined();
  });
});
