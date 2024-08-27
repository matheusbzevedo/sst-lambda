import { describe, expect, it } from 'vitest';
import { ok } from '../../../src/framework/utils/http-responses';

describe('Http Response suit test', () => {
  it('Should return response with status code 200', () => {
    try {
      const response = ok({ test: 'test' });

      expect(response.statusCode).toEqual(200);
      expect(response.body).toEqual(JSON.stringify({ test: 'test' }));
    } catch (error) {
      expect(error).toBeUndefined();
    }
  });
});
