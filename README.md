# ql_project

API for movie with GraphQL

# required

- graphql-yoga: "^1.18.3"
- nodemon: "^2.0.4"
- babel
  - babel-cli: "^6.26.0",
  - babel-preset-env: "^1.7.0",
  - babel-preset-stage-3: "^6.24.1"
    or
  - @babel/cli: "^7.10.5",
  - @babel/core: "^7.11.4",
  - @babel/node": "^7.10.5",
  - @babel/preset-env": "^7.11.0"
- node-fetch: "^2.6.1"

# description

- schema.graphql
  - schema 定義
    - データー形式定義
    - Query：データーの return 型設定
    - Mutation: データーの更新
- resolvers.js
  - graphql を resolve する

## 以下の api 使用

https://yts.am/api/v2/list_movies.json
