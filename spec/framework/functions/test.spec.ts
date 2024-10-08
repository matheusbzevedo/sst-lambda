import { APIGatewayProxyResult } from 'aws-lambda';
import { describe, expect, it } from 'vitest';
import { Test } from './../../../src/framework/functions/test'; // Substitua com o caminho correto
import { eventMock } from './../../mock/event';

describe('Test handler suit test', () => {
  const getInstance = () => new Test();

  it('Should return a successful response', async () => {
    const mockEvent = eventMock({});

    const result: APIGatewayProxyResult =
      await getInstance().handler(mockEvent);

    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(JSON.stringify({ test: 'test' }));
  });
});
