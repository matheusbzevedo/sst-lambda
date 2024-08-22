import { object, string } from 'zod';

export const testParamsRouteSchema = {
  pathParameters: object({
    id: string(),
  }),
};
