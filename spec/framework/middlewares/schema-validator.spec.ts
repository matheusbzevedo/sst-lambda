import { beforeEach, describe, expect, it } from 'vitest';
import { number, object, string } from 'zod';
import { schemaValidator } from './../../../src/framework/middlewares/schema-validator';

let schema: any;

describe('Schema validator suit test', () => {
  const createRequest = (body = {}, queryStringParameters = {}) =>
    Object.create({ event: { body, queryStringParameters } });

  beforeEach(() => {
    schema = {
      body: object({
        name: string(),
      }),
      queryStringParameters: object({
        id: number(),
      }),
    };
  });

  it('Should return a middleware object', () => {
    const middleware = schemaValidator(schema);

    expect(middleware).toHaveProperty('before');
  });

  it('Should return bad request when body is invalid', async () => {
    delete schema.queryStringParameters;

    const middleware = schemaValidator(schema);
    const request = createRequest();
    const response = await (middleware as any).before(request);

    expect(response).toHaveProperty('statusCode', 400);
  });

  it('Should return bad request when queryStringParameters is invalid', async () => {
    delete schema.body;

    const middleware = schemaValidator(schema) as any;
    const request = createRequest();
    const response = await middleware.before(request);

    expect(response).toHaveProperty('statusCode', 400);
  });

  it('Should return undefined when parameters are valid', async () => {
    const middleware = schemaValidator(schema) as any;
    const request = createRequest({ name: 'John Doe' }, { id: 1 });
    const response = await middleware.before(request);

    expect(response).toBeUndefined();
  });
});
