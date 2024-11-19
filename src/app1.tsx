import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

export const app = new Hono();

const View = ({ title = "hello hono!" }: { title?: string }) => {
	return (
		<html lang="en">
			<head>
				<title>{title}</title>
			</head>
			<body>
				<h1>{title}</h1>
			</body>
		</html>
	);
};

app.get("/", (c) => {
	return c.html(<View />);
});

app.get("/hello", (c) => {
	return c.text("Hello Hono!");
});

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
