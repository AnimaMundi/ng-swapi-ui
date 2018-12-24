import { WeightPipe } from './weight.pipe';

describe('WeightPipe', () => {
  let pipe: WeightPipe;

  let decimalPipeMock: {
    transform: jasmine.Spy;
  };

  beforeEach(() => {
    decimalPipeMock = {
      transform: jasmine.createSpy('transform').and.callFake(param => param)
    };
  });

  beforeEach(() => {
    pipe = new WeightPipe(decimalPipeMock as any);
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should add weight units', () => {
    const value = 70;
    const result = pipe.transform(value);

    expect(result).toEqual(`${value} kg`);
  });
});
