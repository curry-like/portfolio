---
title: ブログ作りました。
image: example.jpg
tags: Nuxt
created_at: 2020-05-17
---

## 概要
コロナの外出自粛のおかげで暇になったのでポートフォリオを作ってみました。
機能としてはまだ最小限しかなく、ポートフォリオのトップページと、ブログページを作成しています。

このサイトは Nuxt.js で作成したサイトを Github Pages で公開しています。
今回は作ったサイトの開発に関して記事にして行こうと思います。

## セットアップ
使用している技術と開発環境構築について書いていきます。

### 使用している技術
以下の技術を使用しています。
- node 12.x
- TypeScript
- Nuxt.js
- Docker

NodeのバージョンはGithub Actionsで用意されているNodeを使おうと思ったため、その中で一番新しかった12系を使用しています。

### 開発
[こちら](https://github.com/curry-like/curry-like.github.io)のリポジトリをcloneし、以下のコマンドを実行すると開発環境が整います。
```shell script
$ docker-compose up
```

このコマンドで起動するコンテナは、npmのwatchタスクを動かすように設定しています。
docker-compose内でブログのディレクトリをコンテナにマウントしているので、localでソースコードを書き換えると自動で更新されます。
コマンド実行後、「localhost:3000」を開くとサービスが立ち上がっているかと思います。

デザインに関しては自分は特にこだわりがないので、 Bootstrap を使用しているのですが、文字の大きさやレイアウトについて一部みやすいように修正を加えてあります。

## 記事公開について
このサイトにはブログ機能をつけたわけなのですが、ブログというと日々記事を更新していく必要があります。
そこでここでは記事の公開方法について書いていきます。

### 記事の作成方法
記事は全て markdown で書くようにしています。
markdown を contents/md 以下に配置し、下記のコマンドを実行すると記事が反映されます。
```shell script
$ docker-compose run --rm nuxt npm run processmd
```

このジョブでは下記のことを行っています。
1. processmd で記事情報をjsonに変換
2. 記事のsummary をまとめた json を作成
3. 1, 2で作成したjsonを反映させる

はじめは processmd で作成したjsonをそのまま反映させようとしたのですが、一時的に json の形式がおかしくなってしまうため、一度下書きの json を作成し、その後に反映させるようにしました。

### 記事の本番公開の仕組みについて
記事を markdown で記述したのち、develop にプッシュするとGithub Actions が起動し、以下の処理が走ります。

1. Node のセットアップ
2. 各種依存関係の install
3. processmd コマンドで記事を作成
4. generate コマンドで静的ファイルの作成
5. masterにコミット

master へのコミットに関しては peaceiris/actions-gh-pages@v3 を使用しています。

Nuxt.js の公式ページでは Travis CI を使用する例が記載されていたのですが、Github Actions で完結させたかったためこのような作りとなりました。

Github Pages の場合、repository 名が 「<USER_NAME>.github.io」ではない場合は静的ファイルを配置する directory を指定できたり、master 以外のブランチを後悔できたりするので、master にマージされるとリリースのような流れにできるかなと思います。

### Google への indexについて
Google にインデックスさせるためには Search Console から URL を登録する必要があります。
今回は sitemap.xml を自動で生成するプラグインを導入し、そのプラグインを Search Console に登録することで Google Bot にクローリングしてもらうようにしています。

そのほかにも Google Analytics もプラグインを入れるだけで運用できます。

## 料金について
Github Pagesを使用しているので、特に料金はかかっていません。
独自のドメインを使用したり、自分でサーバーを立てたりするとその料金がかかりますが、ミニマムな構成で構築すればドメイン料金程度で運用できるかと思います。
