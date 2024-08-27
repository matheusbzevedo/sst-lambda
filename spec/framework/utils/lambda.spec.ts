import { beforeEach, describe, expect, it } from 'vitest';
import { LambdaUtils } from './../../../src/framework/utils/lambda';

let event;

describe('Lambda (utils) suit test', () => {
  beforeEach(() => {
    event = {
      body: { name: 'test' },
      pathParameters: { id: 1 },
      queryStringParameters: { name: 'test' },
    };
  });

  it('Should be able to return a parsed body', () => {
    const result = LambdaUtils.parseBody(event);

    expect(result).toEqual({ name: 'test' });
  });

  it('Should be able to return transformed body', () => {
    const result = LambdaUtils.parseBody(event, (value: any) => ({
      transformedBody: value.name,
    }));

    expect(result).toEqual({ transformedBody: 'test' });
  });

  it('Should be able to return a parsed pathParameters', () => {
    const result = LambdaUtils.parsePathParameters(event);

    expect(result).toEqual({ id: 1 });
  });

  it('Should be able to return a parsed queryStringParameters', () => {
    const result = LambdaUtils.parseQueryParameters(event);

    expect(result).toEqual({ name: 'test' });
  });

  it('Should be able to return empty object when there is no data on event', () => {
    event.body = null;
    event.pathParameters = null;
    event.queryStringParameters = null;

    expect(LambdaUtils.parseBody(event)).toEqual(null);
    expect(LambdaUtils.parsePathParameters(event)).toEqual({});
    expect(LambdaUtils.parseQueryParameters(event)).toEqual({});
  });
});
