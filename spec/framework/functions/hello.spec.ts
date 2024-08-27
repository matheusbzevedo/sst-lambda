import { APIGatewayProxyResult } from 'aws-lambda';
import { describe, expect, it } from 'vitest';
import { eventMock } from '../../mock/event';
import { Hello } from './../../../src/framework/functions/hello';

describe('Hello handler suit test', () => {
  const getInstance = () => new Hello();

  it('Should return a successful response', async () => {
    const mockEvent = eventMock({});

    const result: APIGatewayProxyResult =
      await getInstance().handler(mockEvent);

    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(JSON.stringify({ message: 'Hello World!' }));
  });
});
