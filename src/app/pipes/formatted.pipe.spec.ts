import { FormattedPipe } from './formatted.pipe';

describe('FormattedPipe', () => {
  let fixture: FormattedPipe;

  beforeEach(() => {
    fixture = new FormattedPipe();
  });

  it('create an instance', () => {
    expect(fixture).toBeTruthy();
  });

  it('should expose a transform() method', () => {
    expect(typeof fixture.transform).toEqual('function');
  });

  it('should produce expected result', () => {
    expect(fixture.transform('val')).toBe('bananaval');
  });
});
