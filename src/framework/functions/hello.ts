import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { schemaValidator } from '../middlewares/schema-validator';
import { ok } from '../utils/http-responses';
import { middyfy } from '../utils/middyfy';

export class Hello {
  async handler(_event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
    return ok({ message: 'Hello World!' });
  }
}

const hello = new Hello();

export const handler = middyfy(hello.handler.bind(hello), () =>
  schemaValidator({}),
);
