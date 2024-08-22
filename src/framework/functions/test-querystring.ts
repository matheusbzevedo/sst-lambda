import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { schemaValidator } from '../middlewares/schema-validator';
import { ok } from '../utils/http-responses';
import { LambdaUtils } from '../utils/lambda';
import { middyfy } from '../utils/middyfy';

interface Input {
  name: string;
}

export class TestQueryString {
  async handler(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
    const { name } = LambdaUtils.parseQueryParameters<Input>(event);

    return ok(name);
  }
}

const testQueryString = new TestQueryString();

export const handler = middyfy(
  testQueryString.handler.bind(testQueryString),
  () => schemaValidator({}),
);
