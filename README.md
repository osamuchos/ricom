# 株式会社ライコム コーポレートサイト

https://ricom-techno.com/ のリニューアル版です。
静的 HTML + CSS + 最小限の JavaScript で構成しており、ビルド不要でそのままサーバーへアップロードできます。

## 構成

```
├── index.html            # トップページ
├── ricom/index.html      # 会社概要（旧サイトの URL を維持）
├── contact/index.html    # お問い合わせ
├── assets/
│   ├── css/style.css     # 共通スタイル
│   ├── js/main.js        # ナビ開閉・スクロール表示・メール保護
│   └── img/favicon.svg   # ファビコン
├── sitemap.xml           # 検索エンジン向けサイトマップ
├── robots.txt
└── .htaccess             # HTTPS/非www 統一・セキュリティヘッダー・キャッシュ
```

## 公開手順（さくらのレンタルサーバ）

1. ファイルマネージャまたは FTP/SFTP で、リポジトリの内容をドキュメントルート（例: `/home/xxxx/www/`）へアップロードします。
2. 旧サイトの静的ファイル（旧 `/ricom/` の画像・HTML など）は、新ファイルで上書きされる `index.html` 以外は残っていても動作に影響しませんが、整理のため削除を推奨します。
3. アップロード後、以下を確認してください。
   - `https://ricom-techno.com/` が新デザインで表示される
   - `http://` や `www.` 付き URL が `https://ricom-techno.com/` へリダイレクトされる
   - `/ricom/` `/contact/` が表示される
   - 「たすかるワーク」リンクが `https://taskall.work/` へ遷移する
   - 旧URL `/taskallwork/` が `https://taskall.work/` へ 301 リダイレクトされる

## 旧URLリダイレクト（.htaccess）

| 旧URL | リダイレクト先 |
|-------|----------------|
| `/taskallwork/` および配下 | `https://taskall.work/` |
| `/index.html` | `/` |
| `/ricom/index.html` | `/ricom/` |
| `/contact/index.html` | `/contact/` |
| `/ricom`（末尾スラッシュなし） | `/ricom/` |
| `/contact`（末尾スラッシュなし） | `/contact/` |

## 公開後にやること

- [Google Search Console](https://search.google.com/search-console) で `sitemap.xml` を再送信する
- Google Analytics を利用する場合は GA4 の計測タグを各ページの `</head>` 直前に追加する（旧 UA タグは廃止済みのため移行が必要）

## 更新方法

- 文言修正: 各 `index.html` を直接編集
- 色やデザインの調整: `assets/css/style.css` 冒頭の CSS 変数（`--color-primary` など）を変更
- ページ追加時: `sitemap.xml` に URL を追記
