import { APIGatewayEvent } from 'aws-lambda';

export const eventMock = ({
  body,
  pathParameters,
  queryStringParameters,
  headers,
  path,
}: {
  body?: object;
  pathParameters?: object;
  queryStringParameters?: object;
  headers?: object;
  path?: string;
}): APIGatewayEvent => {
  return Object.create({
    body,
    pathParameters,
    queryStringParameters,
    headers,
    path,
  });
};
