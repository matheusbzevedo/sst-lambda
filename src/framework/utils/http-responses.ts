import { APIGatewayProxyResult } from 'aws-lambda';

const OK = 200;

const httpResponse = (
  content: any,
  statusCode: number = OK,
): APIGatewayProxyResult => ({
  statusCode,
  body: JSON.stringify(content),
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  },
});

export const ok = (content: any): APIGatewayProxyResult =>
  httpResponse(content);
