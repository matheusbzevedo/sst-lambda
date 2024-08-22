import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { ok } from "../utils/http-responses";

export const handler = async (
	event: APIGatewayEvent,
): Promise<APIGatewayProxyResult> => {
	return ok({ message: "hello world!" });
};
