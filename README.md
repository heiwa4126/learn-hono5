# hono-learn3

hono の練習#3

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
```

hono3-x.x.x.tar.gz がプロジェクトルートに出来るので、
このホスト、または別のホストで

```sh
npm i hono3-x.x.x.tar.gz -g
hono3 &
curl http://localhost:3000
```

TODO: PID ファイルとか作るべきかも。

## バンドル版

esbuild で全部を1個のファイルにする。

```sh
npm run bundle
# bundle/hono3.js ができる (build不要)
```

これを

```sh
node hono3.js
```

で実行。esbuildなので厳密な型チェックが無い。
`npm run build`でtsc通してからの方が安全。
