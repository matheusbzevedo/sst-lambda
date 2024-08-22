import { number, object, string } from 'zod';

export const testPostBodySchema = {
  body: object({
    name: string(),
    age: number().optional(),
  }),
};
