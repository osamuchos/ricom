# 株式会社ライコム コーポレートサイト

https://ricom-techno.com/ のリニューアル版です。  
静的 HTML + CSS + 最小限の JavaScript で構成しており、ビルド不要です。

公開先: [GitHub Pages](https://osamuchos.github.io/ricom/)（カスタムドメイン `ricom-techno.com`）  
メール（`@ricom-techno.com`）とドメイン管理はさくらインターネット側で継続運用しています。

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
├── CNAME                 # カスタムドメイン（GitHub Pages が管理。通常は手動編集不要）
└── .htaccess             # 旧・さくら向け（GitHub Pages では無効）
```

## 公開・更新手順（GitHub Pages）

1. 変更を `master` にコミットして push します。
2. リポジトリの **Settings → Pages** で、公開元が `master` / `/ (root)` になっていることを確認します。
3. カスタムドメインに `ricom-techno.com` が設定され、**Enforce HTTPS** がオンであることを確認します。
4. 反映後、以下を確認してください。
   - `https://ricom-techno.com/` が新デザインで表示される
   - `http://` や `www.` 付き URL が `https://ricom-techno.com/` へ誘導される
   - `/ricom/` `/contact/` が表示される
   - 「たすかるワーク」リンクが `https://taskall.work/` へ遷移する

通常は push から数分以内に反映されます。

## DNS の役割分担（参考）

ドメインの DNS はさくらのゾーンで管理しています。

| 用途 | 設定の要点 |
|------|------------|
| Web（apex） | A / AAAA → GitHub Pages |
| Web（www） | CNAME → `osamuchos.github.io` |
| メール | MX → `www3449.sakura.ne.jp` など（さくら初期ドメイン） |
| 送信認証 | SPF / DKIM / DMARC の TXT（さくら案内どおり） |

Web の向き先だけを変える場合でも、**MX を apex（`@`）依存のままにしない**こと。apex の A を GitHub にするとメールが届かなくなります。

## GitHub Pages で効かないもの

`.htaccess` は Apache 用のため、GitHub Pages では無視されます。

| 旧さくらでの挙動 | GitHub Pages |
|------------------|--------------|
| HTTPS / 非 www 統一（`.htaccess`） | Pages の Enforce HTTPS と DNS で対応 |
| `/taskallwork/` → `https://taskall.work/` の 301 | **効かない**（必要なら別途対応） |

## 公開後にやること

- [Google Search Console](https://search.google.com/search-console) でドメイン所有確認（DNS TXT `google-site-verification=...` を SPF と別レコードで追加）し、`sitemap.xml` を送信する
- Google Analytics を利用する場合は GA4 の計測タグを各ページの `</head>` 直前に追加する（旧 UA タグは廃止済みのため移行が必要）

## 更新方法

- 文言修正: 各 `index.html` を直接編集
- 色やデザインの調整: `assets/css/style.css` 冒頭の CSS 変数（`--color-primary` など）を変更
- ページ追加時: `sitemap.xml` に URL を追記し、push する
