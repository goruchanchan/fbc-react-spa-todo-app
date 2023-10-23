# fbc-react-spa-todo-app

[FBC](https://bootcamp.fjord.jp/) の 『React で SPA を作る』プラクティス実施用リポジトリ

## 何をするアプリ？

Todo を登録・編集・削除・閲覧できる SPA(Single Page Application) 形式のアプリです。

![image.png](https://www.evernote.com/shard/s400/sh/9584a84e-f584-4152-8cf8-ce32c3318068/PdNIIr3R8vgMqbfRtLwDrp__43Jb2y-qrlIXKv0RuikW5gZW9fmpCFrZCw/deep/0/image.png)

ログイン機能があり、ログインボタンの押下でログイン状態がトグルします。ログイン状態によってできることが変わります。

機能名|できること|ログイン有無
---|---|---
一覧|登録した ToDo の一覧を確認できます。登録したテキストの一行目が表示されます。|不要
追加|登録したい ToDo を追加できます。空入力を禁止しています。|必要
編集|登録した ToDo を編集できます。空入力を禁止しています。|必要
削除|登録した ToDo を削除できます。|必要

## 事前準備

以下では、本アプリを実行するまでの流れを説明します。

1. アプリの実行環境を用意する

    Node.js, npm が入っている環境を用意してください([参考](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))。

2. 本アプリを任意の場所へクローンします

    ```bash
    git clone -b feature_context https://github.com/goruchanchan/fbc-react-spa-todo-app.git
    ```

3. 本アプリを実行します

    ```bash
    cd fbc-react-spa-todo-app/todo-app
    npm start
    ```

4. アプリが起動したら http://localhost:3000/ へアクセスしてください

    下記のような画面が表示されます。

    ![image.png](https://www.evernote.com/shard/s400/sh/10f961a5-3d10-4f56-b034-69e2cda53225/t98jkZdWEObFvgqxaBhaDwU6xUIg0_ZZpOWYdO4B3o49NY2z5_zVw2UQnw/deep/0/image.png)

## 使い方

以下では ToDo アプリの使い方を説明します。

### 一覧（未ログイン時）

アプリのトップページです。

- 未ログイン時

    ![image.png](https://www.evernote.com/shard/s400/sh/10f961a5-3d10-4f56-b034-69e2cda53225/t98jkZdWEObFvgqxaBhaDwU6xUIg0_ZZpOWYdO4B3o49NY2z5_zVw2UQnw/deep/0/image.png)

- ログイン時

    ![image.png](https://www.evernote.com/shard/s400/sh/72106463-7f41-4344-97b5-00aefedae51d/Z5kNTBf4cCSYSorQZOn_PiVYy4Z3uthxf8yqtXjdh4orRzmHJdMNjnbUEw/deep/0/image.png)

### 追加

1. ログインしてなければ、ボタン押下前にログイン状態にします
2. 『＋』ボタンをクリック
3. テキストエリアへ入力
4. 『新規作成』ボタンをクリック

[![Image from Gyazo](https://i.gyazo.com/1bffd1c6febff6f29bcd4ec75a27fdc2.gif)](https://gyazo.com/1bffd1c6febff6f29bcd4ec75a27fdc2)

### 編集

1. ログインしてなければ、ボタン押下前にログイン状態にします
2. 編集したい ToDo ボタンをクリック
3. テキストエリアへ入力
4. 『編集』ボタンをクリック
  
[![Image from Gyazo](https://i.gyazo.com/4966db005848727684e8a38685a42ae5.gif)](https://gyazo.com/4966db005848727684e8a38685a42ae5)

### 削除

1. ログインしてなければ、ボタン押下前にログイン状態にします
2. 削除したい ToDo ボタンをクリック
3. 『削除』ボタンをクリック

[![Image from Gyazo](https://i.gyazo.com/bc81f9eb2eb54abff79554f685287ca1.gif)](https://gyazo.com/bc81f9eb2eb54abff79554f685287ca1)
