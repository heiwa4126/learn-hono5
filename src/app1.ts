import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

export const app = new Hono();

const AuthorSchema = z.object({
	name: z.string(),
	age: z.number(),
});

app.post("/author", zValidator("json", AuthorSchema), (c) => {
	const data = c.req.valid("json");
	return c.json({
		success: true,
		message: `${data.name} is ${data.age}`,
	});
});
