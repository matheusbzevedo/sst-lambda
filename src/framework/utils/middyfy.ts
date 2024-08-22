import middy from "@middy/core";
import { Handler } from "aws-lambda";
import middyJsonBodyParser from "@middy/http-json-body-parser";

export const middyfy = (handler: Handler, schemaValidator: () => unknown) =>
	middy(handler).use(middyJsonBodyParser()).use(schemaValidator());
