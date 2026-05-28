// ============ DATA ============
const SITE_DATA = {
  brands: [
    {
      id: 'byd', name: 'BYD', cn: '比亚迪', founded: 1995, hq: 'Shenzhen', focus: 'EV / Hybrid',
      category: 'group',
      colorA: '#d4302a', colorB: '#1a1a1a',
      desc_en: 'The world\'s largest new-energy vehicle maker. Vertically integrated from batteries to chips. Sells in 96 countries.',
      desc_zh: '全球最大新能源车企。从电池到芯片全产业链垂直整合。已进入 96 个国家。',
      subBrands_en: 'Denza, Yangwang, Fang Cheng Bao',
      subBrands_zh: '腾势、仰望、方程豹',
      image: 'images/byd-brand.jpg', imageCredit: 'Wikipedia'
    },
    {
      id: 'nio', name: 'NIO', cn: '蔚来', founded: 2014, hq: 'Shanghai', focus: 'Premium EV',
      category: 'startup',
      colorA: '#1d4ed8', colorB: '#0a0a0a',
      desc_en: 'Premium EV with battery-swap network. Europe push via Norway, Germany, Netherlands. Sub-brands Onvo and Firefly target lower segments.',
      desc_zh: '高端电动车，以换电网络著称。已在挪威、德国、荷兰开拓欧洲市场。乐道与萤火虫品牌覆盖中端。',
      image: 'images/nio-brand.jpg', imageCredit: 'InsideEVs'
    },
    {
      id: 'xpeng', name: 'Xpeng', cn: '小鹏', founded: 2014, hq: 'Guangzhou', focus: 'Smart EV / ADAS',
      category: 'startup',
      colorA: '#22c55e', colorB: '#1a1a1a',
      desc_en: 'Tech-first EV brand with the most advanced city-level autonomous driving in China. Mona and P7+ pushed scale in 2025.',
      desc_zh: '科技优先的电动车品牌，城市智驾领先国内。MONA 与 P7+ 在 2025 年实现规模化。',
      image: 'images/xpeng-brand.jpg', imageCredit: 'Electrek'
    },
    {
      id: 'li', name: 'Li Auto', cn: '理想', founded: 2015, hq: 'Beijing', focus: 'Family EREV / EV',
      category: 'startup',
      colorA: '#f59e0b', colorB: '#1a1a1a',
      desc_en: 'Family SUV specialist. EREV pioneer with the L-series; MEGA and i-series push pure EV. China\'s most profitable new-energy startup.',
      desc_zh: '家庭 SUV 专家。L 系列开创增程时代，MEGA 与 i 系列拓展纯电。中国最赚钱的新势力车企。',
      image: 'images/liauto-brand.jpg', imageCredit: 'Car News China'
    },
    {
      id: 'leapmotor', name: 'Leapmotor', cn: '零跑', founded: 2015, hq: 'Hangzhou', focus: 'Value Smart EV',
      category: 'startup',
      colorA: '#0ea5e9', colorB: '#0a0a0a',
      desc_en: 'Vertically-integrated value EV maker. 51% owned by Stellantis since 2023 — the only Chinese new-energy startup with a Western OEM partner driving global rollout.',
      desc_zh: '垂直整合的高性价比新势力。2023 年起 Stellantis 持股 51%，是唯一与西方车企集团合资出海的中国新势力。',
      image: 'images/leapmotor-c10.png', imageCredit: 'Stellantis'
    },
    {
      id: 'zeekr', name: 'Zeekr', cn: '极氪', founded: 2021, hq: 'Hangzhou', focus: 'Performance EV',
      category: 'subbrand', parent_en: 'Geely', parent_zh: '吉利',
      colorA: '#0ea5e9', colorB: '#0a0a0a',
      desc_en: 'Geely\'s premium EV arm. Performance-focused with the 001 shooting brake, 7X SUV and 009 luxury van. Listed on NYSE 2024.',
      desc_zh: '吉利旗下高端电动品牌。001 猎装、7X SUV 与 009 豪华 MPV。2024 年于纽交所上市。',
      image: 'images/zeekr-brand.jpg', imageCredit: 'Luxurious Magazine'
    },
    {
      id: 'geely', name: 'Geely', cn: '吉利', founded: 1986, hq: 'Hangzhou', focus: 'Multi-brand group',
      category: 'group',
      colorA: '#3b82f6', colorB: '#1a1a1a',
      desc_en: 'Parent of Volvo, Polestar, Lotus, Zeekr, Lynk & Co. The most diversified Chinese auto group with global footprint.',
      desc_zh: '沃尔沃、Polestar、路特斯、极氪、领克的母公司。中国最多元化、最具全球版图的汽车集团。',
      subBrands_en: 'Zeekr, Lynk & Co, Volvo, Polestar, Lotus',
      subBrands_zh: '极氪、领克、沃尔沃、Polestar、路特斯',
      image: 'images/geely-brand.jpg', imageCredit: 'Electrek'
    },
    {
      id: 'chery', name: 'Chery', cn: '奇瑞', founded: 1997, hq: 'Wuhu', focus: 'Mass-market export',
      category: 'group',
      colorA: '#ef4444', colorB: '#1a1a1a',
      desc_en: 'China\'s #1 passenger-car exporter. Strong in Russia, Middle East, Latin America. Sub-brands include Omoda, Jaecoo, Exeed.',
      desc_zh: '中国乘用车出口冠军。在俄罗斯、中东、拉美极具优势。旗下包含 Omoda、Jaecoo、星途等品牌。',
      subBrands_en: 'Omoda, Jaecoo, Exeed, iCar',
      subBrands_zh: 'Omoda、Jaecoo、星途、iCar',
      image: 'images/chery-brand.jpg', imageCredit: 'Car News China'
    },
    {
      id: 'xiaomi', name: 'Xiaomi', cn: '小米', founded: 2021, hq: 'Beijing', focus: 'Smart EV',
      colorA: '#f97316', colorB: '#0a0a0a',
      desc_en: 'Phone-maker turned car-maker. SU7 sedan and YU7 SUV ignited global attention with Porsche-rivalling performance at half the price.',
      desc_zh: '手机厂跨界造车。SU7 轿车与 YU7 SUV 以保时捷级性能、半价售价引爆全球关注。',
      category: 'startup',
      image: 'images/xiaomi-brand.jpg', imageCredit: 'Xiaomi'
    },
    {
      id: 'gwm', name: 'Great Wall', cn: '长城', founded: 1984, hq: 'Baoding', focus: 'SUV / Pickup',
      category: 'group',
      colorA: '#84cc16', colorB: '#1a1a1a',
      desc_en: 'Pickup and off-road SUV specialist. Brands include Haval, Tank, Wey, Ora. Major exporter to Australia, Thailand, Brazil.',
      desc_zh: '皮卡与越野 SUV 专家。旗下哈弗、坦克、魏牌、欧拉等品牌。澳洲、泰国、巴西重要出口商。',
      subBrands_en: 'Haval, Tank, Wey, Ora',
      subBrands_zh: '哈弗、坦克、魏牌、欧拉',
      image: 'images/gwm-brand.jpg', imageCredit: 'Motor1'
    },
    {
      id: 'saic', name: 'SAIC', cn: '上汽', founded: 1955, hq: 'Shanghai', focus: 'State automaker',
      category: 'group',
      colorA: '#8b5cf6', colorB: '#1a1a1a',
      desc_en: 'State-owned giant. Owns MG — the British marque now powering Europe expansion — plus Maxus, Roewe, IM Motors.',
      desc_zh: '国有汽车巨头。旗下 MG 品牌主攻欧洲，还包括大通、荣威、智己等。',
      subBrands_en: 'MG, Maxus, Roewe, IM Motors',
      subBrands_zh: 'MG、大通、荣威、智己',
      image: 'images/saic-brand.jpg', imageCredit: 'The Driven'
    },
    {
      id: 'dongfeng', name: 'Dongfeng', cn: '东风', founded: 1969, hq: 'Wuhan', focus: 'State automaker',
      category: 'group',
      colorA: '#06b6d4', colorB: '#1a1a1a',
      desc_en: 'State group with EV sub-brands Voyah (premium) and M-Hero (off-road). Strong Russia presence post-2022.',
      desc_zh: '国有集团，旗下高端品牌岚图与硬派品牌猛士。2022 年后在俄罗斯市场份额激增。',
      subBrands_en: 'Voyah, M-Hero, Aeolus, Nammi',
      subBrands_zh: '岚图、猛士、风神、纳米',
      image: 'images/dongfeng-brand.jpg', imageCredit: 'Car News China'
    },
    {
      id: 'haval', name: 'Haval', cn: '哈弗', founded: 2013, hq: 'Baoding', focus: 'SUV',
      category: 'subbrand', parent_en: 'Great Wall', parent_zh: '长城',
      colorA: '#eab308', colorB: '#1a1a1a',
      desc_en: 'Great Wall\'s mainstream SUV brand. Best-selling Chinese SUV brand globally — H6 is a phenomenon in emerging markets.',
      desc_zh: '长城旗下主流 SUV 品牌。全球销量最高的中国 SUV 品牌——H6 在新兴市场表现现象级。',
      image: 'images/haval-brand.jpg', imageCredit: 'Car News China'
    },

    // ===== Geely 旗下 =====
    {
      id: 'lynkco', name: 'Lynk & Co', cn: '领克', founded: 2016, hq: 'Hangzhou', focus: 'Crossover / Coupe',
      category: 'subbrand', parent_en: 'Geely', parent_zh: '吉利',
      colorA: '#0f766e', colorB: '#0a0a0a',
      desc_en: 'Co-developed with Volvo on the CMA platform. Subscription model in Europe; the 09 SUV and 03 sedan defined the brand\'s sharp, urban design language.',
      desc_zh: '与沃尔沃共用 CMA 平台的子品牌。在欧洲首推订阅制销售。09 SUV 与 03 轿车奠定了犀利都市的设计语言。',
      image: 'images/lynkco-09.jpg', imageCredit: 'Lynk & Co'
    },
    {
      id: 'polestar', name: 'Polestar', cn: '极星', founded: 2017, hq: 'Gothenburg', focus: 'Performance EV',
      category: 'subbrand', parent_en: 'Geely', parent_zh: '吉利',
      colorA: '#475569', colorB: '#0a0a0a',
      desc_en: 'Volvo\'s former tuning house turned standalone Swedish EV brand under Geely. Polestar 2 took on the Model 3; Polestar 4 introduced the rear-screen-instead-of-window cabin.',
      desc_zh: '原沃尔沃高性能部门，现为吉利旗下独立的瑞典电动品牌。Polestar 2 对标 Model 3，Polestar 4 首创以后视摄像头取代后窗。',
      image: 'images/polestar-4.jpg', imageCredit: 'Polestar'
    },
    {
      id: 'volvo', name: 'Volvo', cn: '沃尔沃', founded: 1927, hq: 'Gothenburg', focus: 'Safety / Premium',
      category: 'subbrand', parent_en: 'Geely', parent_zh: '吉利',
      colorA: '#1e3a8a', colorB: '#0a0a0a',
      desc_en: 'Swedish heritage brand owned by Geely since 2010. Pivoting fully electric with the EX90 flagship and the EX30 compact — built in China for global markets.',
      desc_zh: '瑞典传统豪华品牌，2010 年起归属吉利。以 EX90 旗舰与 EX30 紧凑车型全面电动化，在中国生产、销往全球。',
      image: 'images/volvo-ex90.jpg', imageCredit: 'Motor1'
    },
    {
      id: 'lotus', name: 'Lotus', cn: '路特斯', founded: 1948, hq: 'Hethel', focus: 'Sports / Hyper EV',
      category: 'subbrand', parent_en: 'Geely', parent_zh: '吉利',
      colorA: '#facc15', colorB: '#0a0a0a',
      desc_en: 'British sports-car legend revived by Geely. The Eletre hyper-SUV and Emeya GT mark the all-electric reinvention; the Evija remains its 2,000 hp halo.',
      desc_zh: '英国跑车传奇，由吉利复兴。Eletre 超级 SUV 与 Emeya GT 代表全电动转型，Evija 仍是 2,000 马力的品牌图腾。',
      image: 'images/lotus-eletre.jpg', imageCredit: 'Top Gear'
    },

    // ===== Great Wall 旗下 =====
    {
      id: 'tank', name: 'Tank', cn: '坦克', founded: 2021, hq: 'Baoding', focus: 'Off-road SUV',
      category: 'subbrand', parent_en: 'Great Wall', parent_zh: '长城',
      colorA: '#65a30d', colorB: '#1a1a1a',
      desc_en: 'Great Wall\'s off-road sub-brand. The boxy Tank 300, 500 and 700 channel Defender and G-Wagon DNA — and dominate China\'s overlanding boom.',
      desc_zh: '长城旗下硬派越野品牌。坦克 300、500、700 方盒子造型对标卫士与大 G，主导国内越野潮流。',
      image: 'images/tank-500.jpg', imageCredit: 'Motor1'
    },
    {
      id: 'wey', name: 'Wey', cn: '魏牌', founded: 2016, hq: 'Baoding', focus: 'Premium PHEV',
      category: 'subbrand', parent_en: 'Great Wall', parent_zh: '长城',
      colorA: '#b45309', colorB: '#1a1a1a',
      desc_en: 'Great Wall\'s premium PHEV brand named after founder Wei Jianjun. The Blue Mountain (Lanshan) flagship targets Li Auto\'s family-SUV territory.',
      desc_zh: '长城旗下高端插混品牌，得名于创始人魏建军。蓝山旗舰直接对标理想 L8，主攻家庭 SUV 市场。',
      image: 'images/wey-lanshan.jpg', imageCredit: 'CarExpert'
    },
    {
      id: 'ora', name: 'Ora', cn: '欧拉', founded: 2018, hq: 'Baoding', focus: 'Female-focused EV',
      category: 'subbrand', parent_en: 'Great Wall', parent_zh: '长城',
      colorA: '#ec4899', colorB: '#1a1a1a',
      desc_en: 'Retro-styled compact EV brand from Great Wall, positioned for younger and female drivers. The Good Cat became a viral success in Thailand and Australia.',
      desc_zh: '长城旗下复古风格的紧凑电动车品牌，主打年轻与女性用户。好猫在泰国、澳洲走红出圈。',
      image: 'images/ora-good-cat.jpg', imageCredit: 'Car and Driver'
    },

    // ===== BYD 旗下 =====
    {
      id: 'denza', name: 'Denza', cn: '腾势', founded: 2010, hq: 'Shenzhen', focus: 'Premium NEV',
      category: 'subbrand', parent_en: 'BYD', parent_zh: '比亚迪',
      colorA: '#9333ea', colorB: '#0a0a0a',
      desc_en: 'Originally a BYD–Mercedes joint venture, now fully under BYD. The N7 SUV, D9 luxury MPV and Z9GT shooting brake anchor the premium NEV push.',
      desc_zh: '原为比亚迪与奔驰合资品牌，现完全归属比亚迪。N7 SUV、D9 豪华 MPV 与 Z9GT 猎装锚定高端新能源阵地。',
      image: 'images/denza-z9gt.jpg', imageCredit: 'Top Gear'
    },
    {
      id: 'yangwang', name: 'Yangwang', cn: '仰望', founded: 2023, hq: 'Shenzhen', focus: 'Ultra-luxury NEV',
      category: 'subbrand', parent_en: 'BYD', parent_zh: '比亚迪',
      colorA: '#a16207', colorB: '#0a0a0a',
      desc_en: 'BYD\'s ultra-luxury halo brand. The U8 SUV can tank-turn and float on water; the U9 supercar hits 309 km/h. Quad-motor e4 platform showcases BYD\'s tech ceiling.',
      desc_zh: '比亚迪的超豪华图腾品牌。U8 SUV 可原地掉头与浮水，U9 超跑突破 309 km/h。四电机 e4 平台展示比亚迪技术天花板。',
      image: 'images/yangwang-u8.jpg', imageCredit: 'Top Gear'
    },
    {
      id: 'fangchengbao', name: 'Fang Cheng Bao', cn: '方程豹', founded: 2023, hq: 'Shenzhen', focus: 'Adventure SUV',
      category: 'subbrand', parent_en: 'BYD', parent_zh: '比亚迪',
      colorA: '#16a34a', colorB: '#1a1a1a',
      desc_en: 'BYD\'s personality-driven adventure brand. The boxy Bao 5 and Bao 8 PHEVs sit between Tank and Yangwang — built on the DMO super-hybrid off-road platform.',
      desc_zh: '比亚迪旗下个性化越野品牌。豹 5、豹 8 插混定位于坦克与仰望之间，基于 DMO 超级混动越野平台打造。',
      image: 'images/fangchengbao-5.jpg', imageCredit: 'Top Gear'
    },

    // ===== SAIC 旗下 =====
    {
      id: 'mg', name: 'MG', cn: '名爵', founded: 1924, hq: 'Shanghai', focus: 'Global affordable EV',
      category: 'subbrand', parent_en: 'SAIC', parent_zh: '上汽',
      colorA: '#dc2626', colorB: '#0a0a0a',
      desc_en: 'British sports-car heritage brand acquired by SAIC in 2007. Now China\'s most successful export brand in Europe — Cyberster revives the convertible roadster, electric.',
      desc_zh: '英国跑车传统品牌，2007 年被上汽收购。如今是中国在欧洲最成功的出口品牌，Cyberster 让敞篷跑车以电动形式重生。',
      image: 'images/mg-cyberster.jpg', imageCredit: 'Top Gear'
    },
    {
      id: 'maxus', name: 'Maxus', cn: '大通', founded: 2011, hq: 'Shanghai', focus: 'Commercial / MPV',
      category: 'subbrand', parent_en: 'SAIC', parent_zh: '上汽',
      colorA: '#0891b2', colorB: '#0a0a0a',
      desc_en: 'SAIC\'s commercial-vehicle and MPV arm. The Mifa 9 luxury electric people-mover and electric pickups have made it a major fleet export brand.',
      desc_zh: '上汽旗下商用与 MPV 品牌。Mifa 9 豪华电动 MPV 与电动皮卡使其成为重要的商用车出口品牌。',
      image: 'images/maxus-mifa9.jpg', imageCredit: 'Car and Driver'
    },
    {
      id: 'im', name: 'IM Motors', cn: '智己', founded: 2020, hq: 'Shanghai', focus: 'Smart Luxury EV',
      category: 'subbrand', parent_en: 'SAIC', parent_zh: '上汽',
      colorA: '#0369a1', colorB: '#0a0a0a',
      desc_en: 'A SAIC + Alibaba + Zhangjiang joint venture targeting smart-luxury EVs. The LS6 SUV and L6 sedan with semi-solid-state batteries showcase next-gen tech.',
      desc_zh: '上汽、阿里巴巴与张江高科合资的高端智能电动品牌。LS6 SUV 与搭载半固态电池的 L6 轿车展示下一代技术。',
      image: 'images/im-ls6.jpg', imageCredit: 'CnEVPost'
    },

    // ===== Dongfeng 旗下 =====
    {
      id: 'voyah', name: 'Voyah', cn: '岚图', founded: 2018, hq: 'Wuhan', focus: 'Premium NEV',
      category: 'subbrand', parent_en: 'Dongfeng', parent_zh: '东风',
      colorA: '#7c3aed', colorB: '#0a0a0a',
      desc_en: 'Dongfeng\'s premium new-energy brand. The Free SUV, Dreamer MPV and Zhuiguang sedan compete head-on with NIO and Li Auto in the 300-500k RMB segment.',
      desc_zh: '东风旗下高端新能源品牌。FREE SUV、梦想家 MPV 与追光轿车在 30-50 万元区间与蔚来、理想正面竞争。',
      image: 'images/voyah-free.jpg', imageCredit: 'Car News China'
    },
    {
      id: 'mhero', name: 'M-Hero', cn: '猛士', founded: 2022, hq: 'Wuhan', focus: 'Hardcore off-road',
      category: 'subbrand', parent_en: 'Dongfeng', parent_zh: '东风',
      colorA: '#78350f', colorB: '#1a1a1a',
      desc_en: 'Dongfeng\'s ultra-luxury off-road brand rooted in military vehicle heritage. The M-Hero 917 is a 4-motor 1,088 hp electric Defender-fighter.',
      desc_zh: '东风旗下超豪华越野品牌，源自军车血统。猛士 917 为四电机 1,088 马力电动硬派越野，对标卫士。',
      image: 'images/mhero-917.jpg', imageCredit: 'Motor1'
    },

    // ===== Chery 旗下 =====
    {
      id: 'omoda', name: 'Omoda', cn: '欧萌达', founded: 2022, hq: 'Wuhu', focus: 'Global crossover',
      category: 'subbrand', parent_en: 'Chery', parent_zh: '奇瑞',
      colorA: '#0d9488', colorB: '#0a0a0a',
      desc_en: 'Chery\'s global-first crossover brand. The Omoda 5 and electric E5 spearhead expansion into the UK, Australia, Latin America and the Middle East.',
      desc_zh: '奇瑞旗下面向全球市场的跨界品牌。Omoda 5 与纯电 E5 主攻英国、澳洲、拉美与中东市场。',
      image: 'images/omoda-e5.jpg', imageCredit: 'The Driven'
    },
    {
      id: 'jaecoo', name: 'Jaecoo', cn: '捷酷', founded: 2023, hq: 'Wuhu', focus: 'Rugged SUV',
      category: 'subbrand', parent_en: 'Chery', parent_zh: '奇瑞',
      colorA: '#365314', colorB: '#0a0a0a',
      desc_en: 'Chery\'s rugged-design SUV brand, a sister to Omoda. The Jaecoo 7 PHEV launched in the UK and Europe with 1,200 km combined range.',
      desc_zh: '奇瑞旗下硬派造型 SUV 品牌，与 Omoda 互为兄弟。Jaecoo 7 插混在英国与欧洲上市，综合续航达 1,200 公里。',
      image: 'images/jaecoo-7.jpg', imageCredit: 'Top Gear'
    },
    {
      id: 'exeed', name: 'Exeed', cn: '星途', founded: 2018, hq: 'Wuhu', focus: 'Premium SUV',
      category: 'subbrand', parent_en: 'Chery', parent_zh: '奇瑞',
      colorA: '#be123c', colorB: '#0a0a0a',
      desc_en: 'Chery\'s premium SUV brand. The Exeed VX flagship and Yaoguang/Lanyue line aim upmarket with E0X EV platform and Huawei smart-cabin integration.',
      desc_zh: '奇瑞旗下高端 SUV 品牌。星途 VX 旗舰与瑶光、揽月系列基于 E0X 平台、搭载华为座舱冲击高端市场。',
      image: 'images/exeed-vx.jpg', imageCredit: 'Car News China'
    }
  ],

  models: [
    {
      brand: 'BYD', name: 'Seal',
      tag_en: 'The Tesla Model 3 challenger that\'s winning Europe',
      tag_zh: '正在赢得欧洲市场的特斯拉 Model 3 挑战者',
      range: '570 km', accel: '3.8 s', price: '€44,990',
      colorA: '#d4302a', shape: 'sedan',
      image: 'images/byd-seal.jpg', imageCredit: 'BYD'
    },
    {
      brand: 'Xiaomi', name: 'SU7 Ultra',
      tag_en: 'Nürburgring-honed sedan with 1,548 hp. The supercar killer.',
      tag_zh: '在纽北赛道调校、1,548 马力的轿车。超跑杀手。',
      range: '630 km', accel: '1.98 s', price: '¥529,900',
      colorA: '#f97316', shape: 'sedan',
      image: 'images/xiaomi-su7-ultra.jpg',
      imageCredit: 'Top Gear'
    },
    {
      brand: 'NIO', name: 'ET9',
      tag_en: 'Flagship saloon with 925V architecture and steer-by-wire.',
      tag_zh: '搭载 925V 高压平台与线控转向的旗舰轿车。',
      range: '650 km', accel: '4.3 s', price: '¥788,000',
      colorA: '#1d4ed8', shape: 'sedan-long',
      image: 'images/nio-et9.jpg', imageCredit: 'Car and Driver'
    },
    {
      brand: 'Xpeng', name: 'G6',
      tag_en: 'Coupe-SUV with industry-leading 800V architecture and XNGP city autonomy.',
      tag_zh: '搭载行业领先 800V 高压架构与 XNGP 城市智驾的轿跑 SUV。',
      range: '755 km', accel: '3.9 s', price: '¥199,800',
      colorA: '#22c55e', shape: 'suv',
      image: 'images/xpeng-g6.jpg', imageCredit: 'Top Gear'
    },
    {
      brand: 'Li Auto', name: 'MEGA',
      tag_en: 'Bullet-train MPV. The most polarising design statement of the year.',
      tag_zh: '高铁造型 MPV。今年最具话题性的设计宣言。',
      range: '710 km', accel: '5.5 s', price: '¥559,800',
      colorA: '#f59e0b', shape: 'mpv',
      image: 'images/liauto-mega.jpg', imageCredit: 'Electrek'
    },
    {
      brand: 'Zeekr', name: '001',
      tag_en: 'Performance shooting brake. The Porsche Panamera Sport Turismo at 1/3 the price.',
      tag_zh: '高性能猎装车。三分之一价格的保时捷 Panamera Sport Turismo。',
      range: '750 km', accel: '3.3 s', price: '¥269,000',
      colorA: '#0ea5e9', shape: 'wagon',
      image: 'images/zeekr-001.jpg', imageCredit: 'Top Gear'
    }
  ],

  news: [
    {
      title_en: 'Chinese EVs Cross 4 Million Annual Exports in 2025',
      title_zh: '2025 年中国电动车出口突破 400 万辆大关',
      excerpt_en: 'China surpassed Japan as the world\'s largest auto exporter for the third consecutive year, with NEV exports growing 38%.',
      excerpt_zh: '中国连续三年超越日本成为全球第一大汽车出口国，新能源车出口同比增长 38%。',
      date: 'May 22, 2026', tag_en: 'Industry', tag_zh: '产业', accent: '#d4302a',
      image: 'images/byd-seal.jpg', imageCredit: 'BYD'
    },
    {
      title_en: 'BYD Opens First European Plant in Hungary',
      title_zh: '比亚迪首座欧洲工厂在匈牙利投产',
      excerpt_en: 'The Szeged facility starts production of the Dolphin and Atto 3 for the European market, bypassing tariffs.',
      excerpt_zh: '塞格德工厂开始为欧洲市场生产海豚与元 Plus，绕开关税壁垒。',
      date: 'May 18, 2026', tag_en: 'Export', tag_zh: '出海', accent: '#1d4ed8',
      image: 'images/byd-brand.jpg', imageCredit: 'BYD'
    },
    {
      title_en: 'Xpeng MONA M03 Crosses 200K Deliveries in 12 Months',
      title_zh: '小鹏 MONA M03 上市 12 个月交付突破 20 万',
      excerpt_en: 'The sub-$20K smart EV reshaped the entry-level market and proved L2++ autonomy can be democratised.',
      excerpt_zh: '这台不到 13 万元的智能车重塑了入门级市场，证明 L2++ 智驾可以普及。',
      date: 'May 10, 2026', tag_en: 'Launch', tag_zh: '新车', accent: '#22c55e',
      image: 'images/xpeng-brand.jpg', imageCredit: 'Electrek'
    },
    {
      title_en: 'Solid-State Batteries: CATL and BYD Both Target 2027',
      title_zh: '固态电池：宁德时代与比亚迪同步瞄准 2027',
      excerpt_en: 'Pilot lines are running. Energy density above 400 Wh/kg. The question is no longer "if" but "at what cost".',
      excerpt_zh: '中试线已运行，能量密度突破 400 Wh/kg。问题不再是「能否」，而是「成本」。',
      date: 'May 04, 2026', tag_en: 'Tech', tag_zh: '技术', accent: '#f59e0b',
      image: 'images/yangwang-u8.jpg', imageCredit: 'BYD Yangwang'
    },
    {
      title_en: 'NIO Power Swap Network Hits 3,000 Stations Globally',
      title_zh: '蔚来换电网络全球突破 3,000 座',
      excerpt_en: 'Including 60 stations in Europe. CATL, Geely, and Changan have joined the open swap standard.',
      excerpt_zh: '其中欧洲 60 座。宁德时代、吉利、长安已加入开放换电联盟。',
      date: 'April 28, 2026', tag_en: 'Infrastructure', tag_zh: '基建', accent: '#0ea5e9',
      image: 'images/nio-brand.jpg', imageCredit: 'NIO'
    }
  ],

  tech: [
    {
      num: '01', title_en: '800V High-Voltage Architecture', title_zh: '800V 高压平台',
      desc_en: 'China leapfrogged the industry. By 2026, more than 40 Chinese EV models ship with 800V systems enabling 10-minute fast charging. Xpeng, Zeekr, BYD, Li Auto all standardised.',
      desc_zh: '中国已实现弯道超车。到 2026 年，超过 40 款中国电动车型搭载 800V 系统，10 分钟快充成为常态。小鹏、极氪、比亚迪、理想均已普及。',
      tags: ['Silicon Carbide', '5C Charging', '10-Min Refill']
    },
    {
      num: '02', title_en: 'City-Level Autonomous Driving', title_zh: '城市领航辅助驾驶',
      desc_en: 'Xpeng XNGP, Huawei ADS 3.0, NIO NAD — point-to-point urban autonomy without HD maps. The technology that surprised Tesla.',
      desc_zh: '小鹏 XNGP、华为 ADS 3.0、蔚来 NAD——无图城市点到点智驾，让特斯拉感到压力的技术。',
      tags: ['No HD Map', 'BEV+Transformer', 'End-to-End']
    },
    {
      num: '03', title_en: 'Smart Cockpit Revolution', title_zh: '智能座舱革命',
      desc_en: 'Huawei HarmonyOS Cockpit, Xiaomi HyperOS, Li Auto OS — multi-screen, voice-first, app-rich interiors that make legacy infotainment feel a decade behind.',
      desc_zh: '华为鸿蒙座舱、小米澎湃 OS、理想 OS——多屏、语音优先、生态丰富，让传统车机系统瞬间显得落后十年。',
      tags: ['HarmonyOS', 'AI Assistant', 'Multi-Screen']
    },
    {
      num: '04', title_en: 'Blade & Cell-to-Body Batteries', title_zh: '刀片与 CTB 电池',
      desc_en: 'BYD\'s LFP Blade battery and CATL\'s cell-to-body designs deliver safety and density at lower cost. The reason Chinese EVs hit price parity with ICE first.',
      desc_zh: '比亚迪刀片磷酸铁锂电池与宁德时代 CTB 设计——以更低成本实现安全与能量密度，是中国电动车率先与燃油车同价的关键。',
      tags: ['LFP', 'CTB', 'Thermal Safety']
    }
  ]
};
