import { APIGatewayProxyResult } from 'aws-lambda';
import { describe, expect, it } from 'vitest';
import { eventMock } from '../../mock/event';
import { TestParamsRoute } from './../../../src/framework/functions/test-params-route';

describe('Test Params Route handler suit test', () => {
  const getInstance = () => new TestParamsRoute();

  it('Should return a successful response', async () => {
    const mockEvent = eventMock({ pathParameters: { id: 1 } });

    const result: APIGatewayProxyResult =
      await getInstance().handler(mockEvent);

    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual('1');
  });
});
