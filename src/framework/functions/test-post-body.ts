import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { schemaValidator } from '../middlewares/schema-validator';
import { testPostBodySchema } from '../middlewares/test-post-body-schema';
import { ok } from '../utils/http-responses';
import { LambdaUtils } from '../utils/lambda';
import { middyfy } from '../utils/middyfy';

type Input = Record<string, string>;

export class TestPostBody {
  async handler(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
    const input = LambdaUtils.parseBody<Input>(event);

    return ok({ input });
  }
}

const testPostBody = new TestPostBody();

export const handler = middyfy(testPostBody.handler.bind(testPostBody), () =>
  schemaValidator(testPostBodySchema),
);
