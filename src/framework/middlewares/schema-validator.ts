import middy from '@middy/core';
import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';
import { ZodObject, ZodSchema } from 'zod';

export const schemaValidator = (schema: {
  body?: ZodSchema<any>;
  queryStringParameters?: ZodObject<any>;
}): middy.MiddlewareObj<APIGatewayEvent, APIGatewayProxyResult> => {
  const before: middy.MiddlewareFn<
    APIGatewayEvent,
    APIGatewayProxyResult
  > = async (request) => {
    try {
      const { body, queryStringParameters } = request.event;

      if (schema.body) schema.body.parse(body);

      if (schema.queryStringParameters)
        schema.queryStringParameters.parse(queryStringParameters ?? {});

      return Promise.resolve();
    } catch (e: any) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          errors: e.errors,
        }),
      };
    }
  };

  return {
    before,
  };
};
