import esbuild from "esbuild";

esbuild
	.build({
		entryPoints: ["src/index.ts"],
		outfile: "bundle/hono5.js",
		bundle: true,
		platform: "node",
		format: "esm",
		minify: true,
		treeShaking: true,
		drop: ["debugger"],
	})
	.then(() => {
		console.log("Build completed successfully!");
	})
	.catch((error) => {
		console.error("Build failed:", error);
		process.exit(1);
	});
