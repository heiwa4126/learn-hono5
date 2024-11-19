import { Hono } from "hono";

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
