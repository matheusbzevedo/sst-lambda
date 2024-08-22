import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { schemaValidator } from '../middlewares/schema-validator';
import { ok } from '../utils/http-responses';
import { LambdaUtils } from '../utils/lambda';
import { middyfy } from '../utils/middyfy';

interface Input {
  id: string;
}

export class TestParamsRoute {
  async handler(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
    const { id } = LambdaUtils.parsePathParameters<Input>(event);

    return ok(id);
  }
}

const testParamsRoute = new TestParamsRoute();

export const handler = middyfy(
  testParamsRoute.handler.bind(testParamsRoute),
  () => schemaValidator({}),
);
