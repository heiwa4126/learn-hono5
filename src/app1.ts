import { OpenAPIHono, createRoute } from "@hono/zod-openapi";
import { z } from "zod";
import { ErrorSchema } from "./schema";

export const app = new OpenAPIHono();

const RequestSchema = z.object({
	name: z.string().min(3).openapi({
		example: "Naoki",
	}),
	age: z.number().min(0).max(150).openapi({
		example: 35,
	}),
});

const ResponseSchema = z.object({
	success: z.boolean(),
	message: z.string(),
});
type Response = z.infer<typeof ResponseSchema>;

const route = createRoute({
	method: "post",
	path: "/author",
	request: {
		body: {
			content: {
				"application/json": {
					schema: RequestSchema, // ここの書き方がややこしい
				},
			},
		},
	},
	responses: {
		200: {
			content: {
				"application/json": {
					schema: ResponseSchema,
				},
			},
			description: "Retrieve result",
		},
		400: {
			content: {
				"application/json": {
					schema: ErrorSchema,
				},
			},
			description: "Returns an error",
		},
	},
});

app.openapi(
	route,
	(c) => {
		const data = c.req.valid("json");
		const res: Response = {
			success: true,
			message: `${data.name} is ${data.age}`,
		};
		return c.json(res, 200);
	},
	// Hook
	(result, c) => {
		if (!result.success) {
			return c.json({ code: 400, message: "Validation Error" }, 400);
		}
	},
);
