import { APIGatewayProxyResult } from 'aws-lambda';
import { describe, expect, it } from 'vitest';
import { eventMock } from '../../mock/event';
import { TestPostBody } from './../../../src/framework/functions/test-post-body';
describe('Test post body handler suit test', () => {
  const getInstance = () => new TestPostBody();

  it('Should return a successful response', async () => {
    const mockEvent = eventMock({ body: { name: 'John Doe' } });

    const result: APIGatewayProxyResult =
      await getInstance().handler(mockEvent);

    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(
      JSON.stringify({ input: { name: 'John Doe' } }),
    );
  });
});
