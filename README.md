# learn-hono5

hono の練習 #5

Zod で OpenAPI で Swagger UI 付き。
body が JSON の POST の書き方がちょっと難しかった。(`src/app1.ts`)。

## 開発

tsx (esbuild) で実行。

```sh
npm install
npm run dev
```

```sh
curl http://localhost:3000
```

## パッケージのビルド

tsc で ECMAScript にトランスパイル。
tsc なのでエラーにうるさい。

```sh
npm run build
npm pack
# もしnpm.jsに発行するなら
npm publish
```

hono5-x.x.x.tar.gz がプロジェクトルートに出来るので、
このホスト、または別のホストで

```sh
npm i hono5-x.x.x.tar.gz -g
hono5 &
curl http://localhost:3000
```

## バンドル版

esbuild で全部を1個のファイルにする。

```sh
npm run bundle
# bundle/hono5.js ができる (build不要)
```

これを

```sh
node hono5.js
```

で実行。esbuild なので厳密な型チェックが無い。
`npm run build`でtsc通してからの方が安全。

## TODO

CLI つけて、ポートの変更や
PID ファイルとか作るべきかも。
