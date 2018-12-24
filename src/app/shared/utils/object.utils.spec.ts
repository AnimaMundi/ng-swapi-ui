import { isArray, isNil, prop } from './object.utils';

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

    it('should return undefined if the property does not exist', () => {
      const key2 = 'key2';
      const value = 'value';
      const obj = {
        key1: value
      };

      const result = prop<any, any>(key2)(obj);

      expect(result).toEqual(undefined);
    });

    it('should return undefined if the object is undefined', () => {
      const key = 'key';

      const result = prop<any, any>(key)(undefined);

      expect(result).toEqual(undefined);
    });

    it('should not return undefined if the property value is an empty string', () => {
      const key = 'key';
      const value = '';
      const obj = {
        key: value
      };

      const result = prop<any, any>(key)(obj);

      expect(result).not.toEqual(undefined);
      expect(result).toEqual(obj[key]);
    });

    it('should not return undefined if the property value is 0', () => {
      const key = 'key';
      const value = 0;
      const obj = {
        key: value
      };

      const result = prop<any, any>(key)(obj);

      expect(result).not.toEqual(undefined);
      expect(result).toEqual(obj[key]);
    });

    it('should not return undefined if the property value is an empty array', () => {
      const key = 'key';
      const value = [];
      const obj = {
        key: value
      };

      const result = prop<any, any>(key)(obj);

      expect(result).not.toEqual(undefined);
      expect(result).toEqual(obj[key]);
    });
  });

  describe('isNil', () => {
    it('should return true if the provided object is undefined', () => {
      const result = isNil(undefined);

      expect(result).toBe(true);
    });

    it('should return true if the provided object is null', () => {
      const result = isNil(null);

      expect(result).toBe(true);
    });

    it('should return false if the provided object is an empty object', () => {
      const result = isNil({});

      expect(result).toBe(false);
    });

    it('should return false if the provied object is an empty array', () => {
      const result = isNil([]);

      expect(result).toBe(false);
    });
  });

  describe('isArray', () => {
    it('should return true if the provided object is an empty array', () => {
      const result = isArray([]);

      expect(result).toBe(true);
    });

    it('should return false if the provided object is an empty object', () => {
      const result = isArray({} as any);

      expect(result).toBe(false);
    });

    it('should return true if the provided object is undefined', () => {
      const result = isArray(undefined);

      expect(result).toBe(false);
    });

    it('should return true if the provided object is null', () => {
      const result = isArray(null);

      expect(result).toBe(false);
    });
  });
});
