## このプロジェクトについて
YouTube Data API v3を利用して動画の検索、視聴ができます。  
React(JavaScript使用) + Redux + Material-UIで開発しています。

## バージョン情報
||  バージョン  |
| ---- | ---- |
|  React  |  16.12.0  |
|  Redux  |  4.0.5  |

## 起動手順

1. コンテナビルド

    ```
    docker-compose build
    ```

2. node_modulesインストール

    ```
    docker-compose run node yarn install
    ```

3. envファイル作成

    sourceディレクトリへ移動

    ```
    cp .env.example .env
    ```

    GCPでYouTube Data API v3を有効にしてAPIキーを.envに設定

4. コンテナ起動

    ```
    docker-compose up -d
    ```

## 接続

`http://localhost:3000`

## 備忘録：プロジェクト新規作成時コマンド

```
docker-compose build
```

```
docker-compose run --rm node sh -c 'cd /usr/src && create-react-app app'
```