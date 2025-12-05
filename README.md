# learn-hono5

hono の練習 #5

Zod で OpenAPI で Swagger UI 付き。
body が JSON の POST の書き方がちょっと難しかった。(`src/app1.ts`)。

## 開発

tsx (esbuild) で実行。

```sh
pnpm install
pnpm run dev
```

```sh
# 簡単なテスト
curl http://localhost:3000
```

Swagger UI は <http://localhost:3000/ui>

## パッケージのビルド

tsc で ECMAScript にトランスパイル。
tsc なのでエラーにうるさい。

```sh
pnpm run build
pnpm pack
# もしnpm.jsに発行するなら
pnpm publish
```

hono5-x.x.x.tar.gz がプロジェクトルートに出来るので、
このホスト、または別のホストで

```sh
npm i hono5-x.x.x.tar.gz -g
hono5 &
curl http://localhost:3000
```

## バンドル版

esbuild で全部を 1 個のファイルにする。

```sh
pnpm run bundle
# bundle/hono5.js ができる (build不要)
```

これを

```sh
node bundle/hono5.js
```

で実行。esbuild なので厳密な型チェックが無い。
`npm run build`で tsc 通してからの方が安全。

## TODO

CLI つけて、ポートの変更や
PID ファイルとか作るべきかも。
