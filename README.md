# hono-learn3

hono の練習

## 開発

tsx (esbuild) で実行。

```sh
npm install
npm run dev
```

```sh
curl http://localhost:3000
```

## ビルドとデプロイ

tsc で ECMAScript にトランスパイルします。

```sh
npm run build
npm pack
# hono3-x.x.x.tar.gz がプロジェクトルートに出来る
```

```sh
npm i hono3-x.x.x.tar.gz -g
hono3 &
```
