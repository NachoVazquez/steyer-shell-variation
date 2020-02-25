import { async, TestBed } from '@angular/core/testing';
import { BookingShellModule } from './booking-shell.module';

describe('BookingShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BookingShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BookingShellModule).toBeDefined();
  });
});
