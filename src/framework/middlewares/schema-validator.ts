import middy from "@middy/core";
import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { AnySchema, ObjectSchema } from "yup";

export const schemaValidator = (schema: {
	body?: AnySchema<any>;
	queryStringParameters?: ObjectSchema<any>;
}): middy.MiddlewareObj<APIGatewayEvent, APIGatewayProxyResult> => {
	const before: middy.MiddlewareFn<
		APIGatewayEvent,
		APIGatewayProxyResult
	> = async (request) => {
		try {
			const { body, queryStringParameters } = request.event;

			if (schema.body) schema.body.validateSync(body);

			if (schema.queryStringParameters)
				schema.queryStringParameters.validateSync(queryStringParameters ?? {});

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
