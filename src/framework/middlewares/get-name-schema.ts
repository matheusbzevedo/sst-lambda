import { number, object, string } from "zod";

export const getNameSchema = {
	body: object({
		name: string(),
		age: number().optional(),
	}),
};
