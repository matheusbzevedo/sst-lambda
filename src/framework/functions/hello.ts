import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { schemaValidator } from "../middlewares/schema-validator";
import { ok } from "../utils/http-responses";
import { middyfy } from "../utils/middyfy";

export class Hello {
	async handler(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
		console.log(event);

		return ok({ message: "hello world!" });
	}
}

const hello = new Hello();

export const handler = middyfy(hello.handler.bind(hello), () =>
	schemaValidator({}),
);