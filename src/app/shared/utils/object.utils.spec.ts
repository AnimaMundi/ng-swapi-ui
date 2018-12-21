import { isNil, prop } from './object.utils';

describe('ObjectUtils', () => {
  describe('prop', () => {
    it('should provide the correct property', () => {
      const key = 'key';
      const value = 'value';
      const obj = {
        key: value
      };

      const result = prop<any, any>(key)(obj);

      expect(result).toEqual(obj[key]);
    });
  });

  describe('isNil', () => {
    it('should return true is obj is undefined', () => {
      const result = isNil(undefined);

      expect(result).toBe(true);
    });

    it('should return true is obj is null', () => {
      const result = isNil(null);

      expect(result).toBe(true);
    });

    it('should return false is obj is an object', () => {
      const result = isNil({});

      expect(result).toBe(false);
    });

    it('should return false is obj is an array', () => {
      const result = isNil([]);

      expect(result).toBe(false);
    });
  });
});
