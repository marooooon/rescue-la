# デプロイ方法
## react deploy
- `$ npm start`

## laravel build & watch
- `$ npm run watch`

# style-component
```
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`
```

# styled-media-query
https://github.com/morajabi/styled-media-query

```
const Box = styled.div`
  background: black;

  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    background: red;
  `}

  ${media.between("medium", "large")`
    /* screen width is between 768px (medium) and 1170px (large) */
    background: green;
  `}

  ${media.greaterThan("large")`
    /* screen width is greater than 1170px (large) */
    background: blue;
  `}
`;
```



# 名前
- Rescue

# ビジネスモデル
- B to C

# ターゲット
- 趣味をしたいけど、お金も稼ぎたい人
- 例
    - 草野球の助っ人
    - ゴルフの人数集め
    - フットサルのメンバー集め

# サービス内容
- 趣味でお金を稼ぎたい人
- Uber Eatsのような感覚

# 参考サイト
https://store.healthcare.omron.co.jp/lp/hbf-702t/
- 色合い素敵
- ほぼこれパクろうかな

https://qiita.com/HorieH/items/8b4b1c4807e1eb6fcb0a
- 10分でできるReact+FirebaseのGoogleAuth

https://rescue-70fee.firebaseapp.com/
- firebaseURL



# 機能
- ログイン機能
    - まずはみんなログインできるように
    - 後々は管理人専用ログイン
- 管理人専用のフリーページを作る
    - 画像
    - チーム情報
    - 説明欄
- ツイート機能のように募集掲示板の作成
- 都道府県別に検索機能の作成

# ディレクトリ構成（優先順）
- トップページ
- ログインページ
- マイページ
- チームページ
- ツイート機能ページ
- ツイート一覧ページ
- paypalページ
- 都道府県一覧ページ（トップページ込みでもOK）
