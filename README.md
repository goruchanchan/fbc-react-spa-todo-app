# fbc-react-spa-todo-app

[FBC](https://bootcamp.fjord.jp/) の 『React で SPA を作る』プラクティス実施用リポジトリ

## 何をするアプリ？

Todo を登録・編集・削除・閲覧できる SPA(Single Page Application) 形式のアプリです。

機能名|できること
---|---
一覧|登録した ToDo の一覧を確認できます。登録したテキストの一行目が表示されます。
追加|登録したい ToDo を追加できます。空入力を禁止しています。
編集|登録した ToDo を編集できます。空入力を禁止しています。
削除|登録した ToDo を削除できます。

## 事前準備

以下では、本アプリを実行するまでの流れを説明します。

1. アプリの実行環境を用意する

    Node.js, npm が入っている環境を用意してください([参考](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))。

2. 本アプリを任意の場所へクローンします

    ```bash
    git clone https://github.com/goruchanchan/fbc-react-spa-todo-app.git
    ```

3. 本アプリを実行します

    ```bash
    cd fbc-react-spa-todo-app/todo-app
    npm start
    ```

4. アプリが起動したら http://localhost:3000/ へアクセスしてください

    下記のような画面が表示されます。

    ![image.png](https://www.evernote.com/shard/s400/sh/5b5f1c85-c6d9-4223-b328-94baf1c1fefd/THp6Xyr7HggQA6ONeBRQDfpj08J5ooAkX2_18FQv8BW8sQ8Rd0ZETO1pmA/deep/0/image.png)

## 使い方

以下では ToDo アプリの使い方を説明します。

### 一覧

アプリのトップページです。

![image.png](https://www.evernote.com/shard/s400/sh/972f9c23-7de5-48ab-a3c6-ab5c510c342c/qRwezGZwONTuWs-hccZvPBi9g_YOohxEYaP76u03IkFX53W8Qdo7aU3Btg/deep/0/image.png)

### 追加

1. 一覧画面にて『＋』ボタンをクリック
2. テキストエリアへ入力
3. 『新規作成』ボタンをクリック

[![Image from Gyazo](https://i.gyazo.com/0678ced72068d8988d6148dbd2684990.gif)](https://gyazo.com/0678ced72068d8988d6148dbd2684990)

### 編集

1. 一覧画面にて編集したい ToDo ボタンをクリック
2. テキストエリアへ入力
3. 『編集』ボタンをクリック
  
[![Image from Gyazo](https://i.gyazo.com/a76ac38e0c6dad08a160a7c1cb88079c.gif)](https://gyazo.com/a76ac38e0c6dad08a160a7c1cb88079c)

### 削除

1. 一覧画面にて削除したい ToDo ボタンをクリック
2. 『削除』ボタンをクリック

[![Image from Gyazo](https://i.gyazo.com/b3bb4d0b569c0793a832ea6f5b1dc551.gif)](https://gyazo.com/b3bb4d0b569c0793a832ea6f5b1dc551)
