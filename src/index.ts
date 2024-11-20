import { serve } from "@hono/node-server";
import { swaggerUI } from "@hono/swagger-ui";
import { OpenAPIHono } from "@hono/zod-openapi";
import { app as app1 } from "./app1.js";
import { app as app2 } from "./app2.js";
import { app as base1 } from "./base1.js"; // Import the app from app1.tsx

export const app = new OpenAPIHono();

app.route("/", base1);
app.route("/api", app1);
app.route("/api", app2);

const docs = "/docs";
// app.doc(docs, { openapi: "3.0.0", info: { version: "1.0.0", title: "hono5" } });
app.doc31(docs, { openapi: "3.1.0", info: { version: "1.0.0", title: "hono5" } });

app.get("/ui", swaggerUI({ url: docs }));

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
	fetch: app.fetch,
	port,
});
