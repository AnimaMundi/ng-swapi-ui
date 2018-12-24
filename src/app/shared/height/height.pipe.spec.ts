import { HeightPipe } from './height.pipe';

describe('HeightPipe', () => {
  let pipe: HeightPipe;

  let decimalPipeMock: {
    transform: jasmine.Spy;
  };

  beforeEach(() => {
    decimalPipeMock = {
      transform: jasmine.createSpy('transform').and.callFake(param => param)
    };
  });

  beforeEach(() => {
    pipe = new HeightPipe(decimalPipeMock as any);
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should add height units', () => {
    const value = 120;
    const result = pipe.transform(value);

    expect(result).toEqual(`${value} cm`);
  });
});
