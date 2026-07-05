# 图片版权替换清单（2026-07-05 审计）

**问题**：仓库 `images/` 中约 30 张图片署名为媒体（Top Gear、Motor1、Car and Driver、Electrek 等）。
这些图很可能是从媒体报道抓取的，媒体自己也多是从 OEM 新闻稿转载，但署名媒体 ≠ 获得授权。
网站带 /quote 询价漏斗后已具商业属性，侵权索赔风险上升。

**解决办法**：全部换成 OEM 官方 newsroom / press kit 图片（车企 press 图明确允许编辑用途，
且画质更好）。下载后同名覆盖 `images/` 原文件即可，代码里只需把 `imageCredit` 改成品牌名。

## 官方图片来源

| 品牌 | Press 图库 |
|---|---|
| BYD / Denza / Yangwang / Fang Cheng Bao | bydglobal.com → News，或 byd.com 媒体中心 |
| Geely / Zeekr / Lynk & Co | zeekrlife.com/media、global.geely.com/news |
| Volvo / Polestar / Lotus | volvocars.com/media（正式 newsroom）、media.polestar.com、media.lotuscars.com |
| Great Wall (Haval/Tank/Wey/Ora) | gwm-global.com → News |
| SAIC / MG / Maxus / IM | mgmotor.eu/press、saicmaxus.com、immotors.com |
| Chery / Omoda / Jaecoo | cheryinternational.com、omodajaecoo.com → Media |
| NIO / Onvo / Firefly | nio.com → News（官图可下载） |
| Xpeng | heyxpeng.com / xpeng.com news |
| Li Auto | lixiang.com 新闻中心 |
| Leapmotor | media.stellantis.com（Leapmotor International 官图全在这里，授权明确） |
| Xiaomi EV | xiaomiev.com / mi.com 新闻 |
| Voyah / M-Hero | voyah.com.cn、东风官网媒体中心 |

## 待替换文件（按风险排序）

高优先（首页/高流量页可见）：
- images/xiaomi-su7-ultra.jpg — 现署名 Top Gear（首页 hero 卡 + 车型页 + 故事页）
- images/nio-et9.jpg — Car and Driver（首页 + 车型页 + 故事页）
- images/xpeng-g6.jpg — Top Gear（车型页）
- images/zeekr-001.jpg — Top Gear（车型页）
- images/liauto-mega.jpg — Electrek（车型页）
- images/hero-xiaomi.jpg — 首页大图 + 全站 og:image（若来源不明也应换官图）

品牌页图片：
- byd-brand.jpg（Wikipedia）、nio-brand.jpg（InsideEVs）、xpeng-brand.jpg（Electrek）、
  liauto-brand.jpg / chery-brand.jpg / dongfeng-brand.jpg / haval-brand.jpg / voyah-free.jpg /
  exeed-vx.jpg（Car News China）、zeekr-brand.jpg（Luxurious Magazine）、geely-brand.jpg（Electrek）、
  gwm-brand.jpg / volvo-ex90.jpg / tank-500.jpg / mhero-917.jpg（Motor1）、
  saic-brand.jpg / omoda-e5.jpg（The Driven）、wey-lanshan.jpg（CarExpert）、
  ora-good-cat.jpg / maxus-mifa9.jpg（Car and Driver）、im-ls6.jpg（CnEVPost）、
  lotus-eletre.jpg / denza-z9gt.jpg / yangwang-u8.jpg / fangchengbao-5.jpg / mg-cyberster.jpg /
  jaecoo-7.jpg（Top Gear）

已无风险（保留）：
- leapmotor-c10.png（Stellantis 官图）、xiaomi-brand.jpg（Xiaomi）、byd-seal.jpg（BYD）、
  lynkco-09.jpg / polestar-4.jpg（官方）

## 缺失的车型图片（目前显示 SVG 占位图）

从对应品牌 newsroom 下载官图后，按下面文件名存入 `images/`，然后告诉 Claude 一声即可接线
（约 1200×675，jpg，<300KB 为宜）：

- images/byd-seagull.jpg、byd-atto-3.jpg、byd-sealion-07.jpg、byd-han.jpg、byd-shark-6.jpg
- images/xiaomi-su7.jpg
- images/nio-et5.jpg、nio-onvo-l60.jpg、nio-firefly.jpg
- images/xpeng-mona-m03.jpg
- images/li-l6.jpg
- images/zeekr-7x.jpg
- images/geely-galaxy-e5.jpg、geely-starship-7.jpg
- images/tank-300.jpg（注意现有 tank-500.jpg 是坦克500，不能混用）
- images/mg-mg4.jpg
- images/leapmotor-b10.jpg（Stellantis media 有官图）
- images/volvo-ex30.jpg

## 替换后勿忘

1. `js/data.js` 中对应条目的 `imageCredit` 改为品牌名（如 'BYD'）
2. `node build.js` 重新生成
3. `bash mac/publish_site.sh "Replace media images with OEM press photos"`
