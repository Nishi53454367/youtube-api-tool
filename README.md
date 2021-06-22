# youtube-api-tool
YouTube Data API v3を利用して動画の検索、視聴ができます。  

# 使用技術
- 言語：JavaScript
- ライブラリ、FW：React、Redux
- CSSフレームワーク：Material-UI

# ローカル環境構築手順

## ビルド
```
docker-compose build
```

## node_modulesインストール
```
docker-compose run node yarn install
```

## envファイル作成
sourceディレクトリへ移動
```
cp .env.example .env
```

GCPでYouTube Data API v3を有効にしてAPIキーを.envに設定

## コンテナ起動
```
docker-compose up -d
```

## 画面起動
`http://localhost:3000`

# 備忘録: アプリ新規作成手順

```
docker-compose build
```

```
docker-compose run --rm node sh -c 'cd /usr/src && create-react-app app'
```
