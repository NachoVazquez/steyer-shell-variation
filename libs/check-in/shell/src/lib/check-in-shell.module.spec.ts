import { async, TestBed } from '@angular/core/testing';
import { CheckInShellModule } from './check-in-shell.module';

describe('CheckInShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CheckInShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CheckInShellModule).toBeDefined();
  });
});
