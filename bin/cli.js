#!/usr/bin/env node
// わりと汎用のcli.js

// import { createRequire } from "node:module"; // CommonJS モジュールをインポートする場合に必要
// const require = createRequire(import.meta.url);

// ESMのファイルを実行
import("../dist/ems/index.js").catch((err) => {
	console.error("Failed to start the server:", err);
	process.exit(1);
});
