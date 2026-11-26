# 推し活カレンダー

推し活の予定を、カレンダーでまとめて管理できるアプリ。

ページ・データの形・各ページの中身は [設計書](docs/design.md) にまとめてある。

## 動かし方

```bash
npm install
npm run dev
```

## 担当

| ページ | 担当 | ファイル | 担当シート |
| --- | --- | --- | --- |
| ログイン | （できている） | `src/pages/login/` | — |
| カレンダー | | `src/pages/home/` | [home.md](docs/tasks/home.md) |
| 予定の登録・編集 | | `src/pages/event-form/` | [event-form.md](docs/tasks/event-form.md) |
| 予定の詳細 | | `src/pages/event-detail/` | [event-detail.md](docs/tasks/event-detail.md) |
| 推しの登録・編集 | （2 周目） | `src/pages/oshis/` | |

## AI に書いてもらうとき

ChatGPT などにコードを書いてもらうときは、会話の最初に次の 2 つを貼ってください。

1. レシピのサイトのトップにある「コピー」で取ったもの（前提の文と書き方の見本）
2. 自分の担当シート（`docs/tasks/` の中）

レシピのサイト：https://webex-product-recipes.asahi-gaia1530.workers.dev
