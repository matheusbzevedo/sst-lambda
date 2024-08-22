import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { getNameSchema } from "../middlewares/get-name-schema";
import { schemaValidator } from "../middlewares/schema-validator";
import { ok } from "../utils/http-responses";
import { LambdaUtils } from "../utils/lambda";
import { middyfy } from "../utils/middyfy";

interface Input {
	name: string;
	age: number;
}

export class GetName {
	async handler(event: APIGatewayEvent): Promise<APIGatewayProxyResult> {
		const { name, age } = LambdaUtils.parseBody<Input>(event);

		if (!name) {
			throw new Error("Não tem nome");
		}

		return ok({ name, age });
	}
}

const getName = new GetName();

export const handler = middyfy(getName.handler.bind(getName), () =>
	schemaValidator(getNameSchema),
);
