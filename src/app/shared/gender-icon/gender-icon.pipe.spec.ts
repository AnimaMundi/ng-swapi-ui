import { Gender } from '@shared/models';

import { GenderIconPipe } from './gender-icon.pipe';

describe('GenderIconPipe', () => {
  let pipe: GenderIconPipe;

  beforeEach(() => {
    pipe = new GenderIconPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return a male icon', () => {
    const result = pipe.transform(Gender.Male);

    expect(result).toBe('fas fa-mars');
  });

  it('should return a female icon', () => {
    const result = pipe.transform(Gender.Female);

    expect(result).toBe('fas fa-venus');
  });

  it('should return a genderless icon', () => {
    const result = pipe.transform(Gender.None);

    expect(result).toBe('fas fa-genderless');
  });

  it('should return a male icon by default', () => {
    const result = pipe.transform('' as Gender);

    expect(result).toBe('fas fa-mars');
  });
});
