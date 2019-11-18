# IPATH
## 硬體規格
- screen size : 768*1024
## Script
- run : `npm start` in root
- deploy : `npm run-script deploy` in root, 會 deploy 到所屬 github 的 'gh-page' branch
## 目前能改進的地方
### 結構上
1. 把 Event.js 和 Shop.js 中各 state 對應的 page 以 components 的形式拉出去
### 功能上
1. 目前所有排版都是以固定的螢幕大小為基準做的, 無法做到 RWD
2. "智能運動地墊系統"中目前沒有真的與地墊遊戲聯動, 只是純粹去 database 撈資料而已
3. "智能運動地墊系統"中目前流程上還沒辦法跳到"已完成活動"的頁面
4. "踏溯台南點數系統"中的狀態目前是寫死的
5. 商品頁面中目前的商品資訊是直接寫死在前端, 應該要與商品相關後端做動態連結
6. 目前顯示商品的 Block 是固定兩個格子, 與商品相關後端連結後應該要動態產生對應數量的 Block
