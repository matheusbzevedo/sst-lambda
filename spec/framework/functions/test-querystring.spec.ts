import { APIGatewayProxyResult } from 'aws-lambda';
import { describe, expect, it } from 'vitest';
import { eventMock } from '../../mock/event';
import { TestQueryString } from './../../../src/framework/functions/test-querystring';

describe('Test query string params handler suit test', () => {
  const getInstance = () => new TestQueryString();

  it('Should return a successful response', async () => {
    const mockEvent = eventMock({
      queryStringParameters: { name: 'John Doe' },
    });

    const result: APIGatewayProxyResult =
      await getInstance().handler(mockEvent);

    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(JSON.stringify('John Doe'));
  });
});
