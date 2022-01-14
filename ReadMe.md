# expressjsで特定のフォルダだけ認証したい。

##server.jsについて

参考サイトっていうかパクリ元。  
https://qiita.com/hoshimado/items/272fba1aeb728e14f278


```
yarn add express passport passport-http
```

起動  
```
node server.js
```

##server.auth.jsについて  
上を踏まえた上で、express-basic-authを使ってみた。  

```
yarn add express express-basic-auth
```

起動
```
node server.auth.js
```

