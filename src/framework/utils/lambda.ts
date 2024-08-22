import { APIGatewayProxyEvent } from 'aws-lambda';

export class LambdaUtils {
  static parseBody<Body = unknown, Output = Body>(
    event: APIGatewayProxyEvent,
    transform?: (body: Body) => Output,
  ): Output {
    const body = event.body as unknown as Body;

    return transform ? transform(body) : (body as unknown as Output);
  }

  static parsePathParameters<T = unknown>(event: APIGatewayProxyEvent): T {
    return (event.pathParameters ?? {}) as T;
  }

  static parseQueryParameters<T = unknown>(event: APIGatewayProxyEvent): T {
    return (event.queryStringParameters ?? {}) as T;
  }
}
