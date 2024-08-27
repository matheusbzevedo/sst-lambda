import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { schemaValidator } from '../middlewares/schema-validator';
import { ok } from '../utils/http-responses';
import { middyfy } from '../utils/middyfy';

export class Test {
  async handler(_event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
    return ok({ test: 'test' });
  }
}

const test = new Test();

export const handler = middyfy(test.handler.bind(test), () =>
  schemaValidator({}),
);
