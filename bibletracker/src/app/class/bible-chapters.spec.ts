import { BibleChapters } from './bible-chapters';

describe('BibleChapters', () => {
  it('should create an instance', () => {
    expect(new BibleChapters("Genesis", 1)).toBeTruthy();
  });
});
