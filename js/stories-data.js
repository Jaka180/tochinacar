// Evergreen feature story bodies. Loaded ONLY by build.js (never shipped to the
// browser) — card metadata lives in js/data.js under SITE_DATA.features.
// Each entry: slug (must match a features[] entry), date (first published),
// html_en / html_zh article bodies.

const SITE_STORIES = [
  {
    slug: 'china-ev-battery-supply-chain',
    date: '2026-07-05',
    html_en: `
<p>More than half of every lithium-ion EV battery made on Earth now comes from just two companies, both Chinese: CATL and BYD. Add the rest of China's pack makers — CALB, Gotion, EVE, Sunwoda — and the country's share of global production comfortably clears two thirds. No other layer of the automotive industry is this concentrated, and none matters more: the battery is roughly a third of an electric car's cost. Whoever controls it controls the price of the car.</p>

<p>That control did not happen by accident, and it did not start at the factory gate. It was engineered over two decades, layer by layer, from the mine to the module.</p>

<h2>Start at the rock</h2>
<p>China itself mines a modest share of the world's lithium, cobalt and nickel. What it does is refine them. Roughly two thirds of the world's battery-grade lithium and cobalt is processed in Chinese refineries, and for battery-grade graphite — the anode in nearly every cell — the share is higher still. Chinese firms spent the 2010s buying what geology denied them: Tianqi Lithium took a major stake in Chile's SQM and Australia's Greenbushes mine; CMOC bought the Tenke Fungurume copper-cobalt complex in the DRC; CATL led a multi-billion-dollar nickel project in Indonesia. When Western automakers went shopping for battery metals in the 2020s, they discovered the shelves had been quietly reserved years earlier.</p>

<h2>The greenhouse years</h2>
<p>Downstream, the story is one of deliberate industrial policy. Beijing began subsidising electric vehicles in 2009 and, crucially, from 2015 tied those subsidies to a "white list" of approved battery suppliers that excluded the Korean and Japanese incumbents. For four formative years, LG, Samsung SDI and Panasonic were effectively locked out of the world's largest EV market. Inside that greenhouse, CATL — spun out of the Apple supplier ATL only in 2011 — grew from a start-up into the world's largest battery maker. The white list ended in 2019, but by then the game had changed: scale, cost and an entire domestic ecosystem of cathode, anode, electrolyte and separator producers now sat within a day's drive of the cell plants.</p>

<h2>The LFP counter-revolution</h2>
<p>China's second masterstroke was chemical. While Western and Korean makers chased ever-higher nickel content, Chinese engineers rehabilitated lithium iron phosphate — LFP — a chemistry the industry had written off as too low in energy density. BYD's Blade battery in 2020 and CATL's cell-to-pack designs clawed back that deficit at the pack level, while keeping LFP's advantages: no nickel, no cobalt, better thermal stability, longer cycle life and a dramatically lower cost per kilowatt-hour. LFP went from an also-ran to the majority chemistry in China's market, and it is the single biggest reason Chinese EVs reached price parity with petrol cars first. Tesla, Ford and Stellantis all now buy or license Chinese LFP technology.</p>

<h2>Speed as a moat</h2>
<p>The less visible advantage is iteration speed. A cathode tweak that takes a Western supplier a year of qualification can move from lab to production line in a quarter in Ningde or Shenzhen, because the customer, the equipment maker and the materials plant are often in the same city. That cadence produced fast-charging LFP cells, sodium-ion batteries for entry-level cars, and the semi-solid-state packs now appearing in premium Chinese models — each commercialised while competitors were still publishing roadmaps.</p>

<h2>What it means if you buy or import Chinese EVs</h2>
<p>For dealers and fleet buyers, the supply chain story translates into three practical facts. First, cost: Chinese-built EVs carry a structural battery-cost advantage measured in thousands of dollars per car, which is why they undercut rivals even after tariffs. Second, durability: LFP packs tolerate daily 100% charging and routinely outlast the vehicles around them — a meaningful argument in fleet economics. Third, continuity: the same two suppliers dominate cells for nearly every brand in this guide, from BYD to Zeekr to Volvo, so parts and chemistry expertise travel well across markets. The battery was the hardest part of the electric transition. China solved it first — and that, more than any badge or spec sheet, is what the rest of the industry is now racing to catch.</p>
`,
    html_zh: `
<p>如今全球每生产两块车用锂电池，就有一块以上出自两家中国公司：宁德时代与比亚迪。再加上中创新航、国轩高科、亿纬锂能、欣旺达等厂商，中国占全球动力电池产量的份额稳稳超过三分之二。汽车产业没有任何一个环节像电池这样高度集中，也没有任何一个环节如此关键——电池约占一台电动车成本的三分之一。谁掌握电池，谁就掌握整车的定价权。</p>

<p>这种掌控并非偶然，也不是从工厂大门口开始的。它是二十年间从矿山到模组、一层一层构建出来的。</p>

<h2>从矿石说起</h2>
<p>中国本土的锂、钴、镍开采量并不算大，但精炼几乎都在中国完成：全球约三分之二的电池级锂和钴在中国冶炼加工，而几乎每块电芯都要用到的电池级石墨，中国份额更高。整个 2010 年代，中国企业在全球买下了地质条件没有给予的资源：天齐锂业入股智利 SQM 与澳洲 Greenbushes 锂矿；洛阳钼业收购刚果（金）的 Tenke Fungurume 铜钴矿；宁德时代主导了印尼数十亿美元的镍项目。当西方车企在 2020 年代出门采购电池金属时，才发现货架早在多年前就被悄悄预订了。</p>

<h2>温室培育的岁月</h2>
<p>在下游，这是一个产业政策精心布局的故事。中国从 2009 年开始补贴电动车，更关键的是 2015 年起将补贴与动力电池「白名单」挂钩，把韩日巨头挡在门外。在那关键的四年里，LG、三星 SDI 和松下实际上被隔离在全球最大的电动车市场之外。在这座温室里，2011 年才从苹果供应商 ATL 分拆出来的宁德时代，从创业公司成长为全球最大的电池制造商。白名单 2019 年取消，但格局已定：规模、成本，以及正极、负极、电解液、隔膜的完整本土生态，全部聚集在电芯工厂一天车程之内。</p>

<h2>磷酸铁锂的翻身仗</h2>
<p>中国的第二记妙手在化学层面。当欧美韩厂商追逐越来越高的镍含量时，中国工程师让被业界判了「死刑」的磷酸铁锂（LFP）重获新生。2020 年比亚迪刀片电池与宁德时代 CTP 技术在电池包层面补回了能量密度的差距，同时保留了 LFP 的全部优势：不用镍、不用钴、热稳定性更好、循环寿命更长、每千瓦时成本大幅更低。LFP 从边缘技术变成中国市场的主流化学体系，也是中国电动车率先实现油电同价的最大功臣。如今特斯拉、福特、Stellantis 都在采购或引进中国的 LFP 技术。</p>

<h2>速度本身就是护城河</h2>
<p>更隐性的优势是迭代速度。一次正极配方调整，西方供应商可能需要一年验证，而在宁德或深圳，从实验室到产线往往只要一个季度——因为客户、设备商和材料厂常常就在同一座城市。这种节奏孕育了快充 LFP 电芯、面向入门车型的钠离子电池，以及正在高端车型上量产的半固态电池——每一项都在竞争对手还在发布路线图时就已商业化。</p>

<h2>对进口商和买家意味着什么</h2>
<p>对经销商和车队买家，这条供应链故事落到三个实际结论。其一是成本：中国产电动车带着以千美元计的结构性电池成本优势，这是它们在关税之后依然更便宜的根本原因。其二是耐用性：LFP 电池可以天天充满、循环寿命普遍超过整车寿命——这在车队经济账里分量很重。其三是延续性：从比亚迪到极氪再到沃尔沃，本站收录的几乎所有品牌都由同样两家供应商主导电芯供应，配件与技术经验在各市场之间高度通用。电池曾是电动化转型中最难的一环。中国最先解决了它——这一点，比任何车标或参数表都更能解释今天的行业格局。</p>
`
  },
  {
    slug: 'nio-battery-swap-bet',
    date: '2026-07-05',
    html_en: `
<p>Pull into the station. Park. Stay in your seat. Three minutes later you drive off with a full battery. This is NIO's battery swap — the boldest and most expensive bet any EV maker has placed on charging infrastructure, and after years of scepticism, the industry is quietly coming around to it.</p>

<h2>The scale of the bet</h2>
<p>NIO has built more than 3,000 Power Swap stations, the overwhelming majority across China's cities and highway network, with around 60 more operating in Europe from Norway to the Netherlands. Each station is a small robotic warehouse holding a dozen or more batteries, buffering them, checking their health, and slotting them into cars hundreds of times a day. Stations cost hundreds of thousands of dollars each; NIO has said one needs on the order of 60 swaps a day to break even. For a company that has yet to post a full-year profit, that capital burden is the core of the controversy.</p>

<h2>Why do it at all</h2>
<p>The answer is that swap changes what a battery is. With NIO's Battery-as-a-Service, buyers can purchase the car without the battery — cutting the sticker price by roughly 70,000 yuan — and rent the pack on a monthly subscription instead. The battery becomes an upgradeable, serviceable asset: subscribe to a bigger pack for a road-trip month, drop back down after. Degradation stops being the buyer's problem, which transforms resale values, and the packs themselves are monitored, balanced and maintained centrally in ways a home-charged battery never is. In winter, a swapped battery arrives pre-warmed; on a holiday highway, a three-minute swap sidesteps the charger queue entirely.</p>

<h2>From lonely bet to open standard</h2>
<p>For a decade NIO carried this idea alone. Then, within months, it stopped being alone: Changan and Geely signed battery-swap partnerships in late 2023, followed by JAC, Chery and Lotus. CATL — the world's largest battery maker, which also runs its own EVOGO swap venture — invested 2.5 billion yuan into NIO's Power unit in 2025 and threw its weight behind a shared swap standard. NIO's mass-market sub-brand Onvo launched with swap capability from day one, and its small-car brand Firefly extends the network logic down another segment. What looked like one company's obsession is consolidating into something closer to an industry utility.</p>

<h2>The case against</h2>
<p>Honesty requires the other side. Ultra-fast charging keeps improving: the latest 800V Chinese EVs add hundreds of kilometres in ten minutes, narrowing the convenience gap swap was built to close. Standardising packs across brands constrains vehicle design. And the accounting question never disappears — thousands of stations full of expensive batteries are a heavy asset in a price-war market. If 5C charging becomes universal, swap could end up a niche.</p>

<h2>Why it still matters to watch</h2>
<p>Even the sceptics concede the second-order effects. A swap network is also a distributed energy-storage grid — NIO's stations can trade electricity, buffering the grid at night and selling back at peaks. It is a battery-health database of unmatched depth. And for fleets — taxis, ride-hailing, logistics — minutes matter more than anything, which is why swap-first models keep winning commercial deals. For overseas dealers, the practical takeaway is narrower but real: NIO-family vehicles are engineered around a service ecosystem, and their value proposition is strongest where that ecosystem exists or is coming. Watch where the stations go; the cars will follow.</p>
`,
    html_zh: `
<p>驶入站内，停好车，人不用下车。三分钟后，你带着满电的电池开走。这就是蔚来换电——电动车企在补能基础设施上下过的最大胆、最烧钱的赌注。在经历多年的质疑之后，整个行业正在悄悄转向它。</p>

<h2>赌注有多大</h2>
<p>蔚来已建成超过 3,000 座换电站，绝大多数分布在中国的城市与高速公路网，另有约 60 座在欧洲运营，从挪威到荷兰。每座换电站都是一个小型机器人仓库：存放十余块电池，为它们缓冲调度、检测健康状态，每天为车辆完成数百次换电。单站造价数十万美元；蔚来曾表示日均约 60 单才能盈亏平衡。对一家尚未实现全年盈利的公司，这笔资本开支正是争议的核心。</p>

<h2>为什么非做不可</h2>
<p>答案在于：换电改变了电池的属性。通过 BaaS 电池租用方案，用户可以不含电池购车——车价直降约 7 万元——再按月订阅电池。电池变成可升级、可维护的资产：长途出行的月份订阅大电池，平时换回标准包。电池衰减不再是车主的问题，二手车残值逻辑随之改写；而集中管理的电池包能够被持续监测、均衡与养护，这是家充电池永远做不到的。冬天，换上的电池是预热好的；节假日的高速上，三分钟换电直接绕开了充电桩排队。</p>

<h2>从孤注一掷到开放标准</h2>
<p>十年里，蔚来独自扛着这个理念。然后在短短几个月内，它不再孤单：2023 年底长安、吉利先后签署换电合作，江淮、奇瑞、路特斯跟进。全球最大电池制造商宁德时代——自己也运营 EVOGO 换电业务——在 2025 年向蔚来能源注资 25 亿元，力推统一换电标准。蔚来的大众市场子品牌乐道从第一天起就支持换电，小车品牌萤火虫又把这套网络逻辑延伸到更低一级市场。曾经像是一家公司的执念，正在整合成接近行业公共设施的存在。</p>

<h2>反方观点</h2>
<p>诚实的分析需要呈现另一面。超快充在持续进步：最新的 800V 中国电动车十分钟即可补充数百公里续航，换电赖以立足的便利性差距正在收窄。跨品牌统一电池包会约束整车设计。而财务问题始终存在——数千座装满昂贵电池的场站，在价格战市场里是沉重的资产。如果 5C 快充全面普及，换电有可能沦为小众。</p>

<h2>为什么仍然值得关注</h2>
<p>连怀疑者也承认它的二阶效应。换电网络同时是一张分布式储能网——蔚来的场站可以参与电力交易，夜间为电网蓄能、高峰时段回售。它还是一个深度无可匹敌的电池健康数据库。而对出租车、网约车、物流等车队而言，时间就是一切，这正是换电车型不断赢下商用订单的原因。对海外经销商，实际的启示更聚焦：蔚来系车型是围绕服务生态设计的，它们的价值主张在生态所及之处最强。盯住换电站落在哪里——车会跟着到来。</p>
`
  },
  {
    slug: 'xiaomi-su7-design',
    date: '2026-07-05',
    html_en: `
<p>The most common first reaction to the Xiaomi SU7, in any language, is the same: "it looks like a Porsche." The long bonnet, the low teardrop roofline, the haunches over the rear wheels — the family resemblance to the Taycan is not subtle, and the internet noticed within minutes of the March 2024 reveal. What is more interesting than the resemblance is why it exists, and where, on closer inspection, it deliberately ends.</p>

<h2>The people behind the shape</h2>
<p>Xiaomi did not hand its first car to phone designers. The exterior was led by Li Tianyuan, previously a designer on BMW's i division, supported by a team recruited from German premium studios. Their brief, by CEO Lei Jun's own telling, was unapologetically benchmark-driven: study the cars people dream about, then build one that undercuts them. Lei stood on stage and compared the SU7 to the Taycan and the Model S by name. In a culture where most launches drown in vague superlatives, the transparency was almost disarming — Xiaomi never pretended the references weren't there.</p>

<h2>Physics pushes everyone together</h2>
<p>Part of the resemblance is simply what aerodynamics does to a fast electric sedan. The SU7's drag coefficient of 0.195 makes it one of the slipperiest production cars ever made, and the recipe for that number — low nose, curved roof, pinched tail, flush handles — is the same recipe Porsche, Lucid and Mercedes arrived at. Electric packaging pulls in the same direction: no engine to house, a flat floor to hide, wheels pushed to the corners. Design convergence is real, and it is strongest exactly in this class. Porsche's own design chief, asked about the SU7, responded with diplomatic amusement rather than lawyers — perhaps, he suggested, good ideas simply think alike.</p>

<h2>Where Xiaomi diverges</h2>
<p>Step inside and the borrowing stops. The SU7's cabin is organised around Xiaomi's HyperOS and a physical ecosystem no rival can match: magnetic mounting points for Xiaomi tablets and accessories, seamless handoff between phone, home and car, and a hardware bar of real buttons beneath the screen — a quiet rebuke to the all-touch orthodoxy. This is the actual design thesis of the car: not "a Chinese Porsche" but the first vehicle designed as a native citizen of a consumer-electronics ecosystem, by the company that owns that ecosystem. The lifestyle colour palette, the emphasis on chargeable accessories, the app-store logic of the cockpit — none of it comes from Stuttgart.</p>

<h2>Familiarity as strategy</h2>
<p>There is also a colder reading, and it is probably the correct one. A first-time carmaker asking families for 200,000-plus yuan needs to eliminate every possible reason to say no. A shape the eye already accepts as beautiful — because a slower, six-times-more-expensive German car taught it to — removes the biggest risk in car design for free. Xiaomi spent its novelty budget where it shows up in use, not in the showroom silhouette. The market has rendered its verdict on the trade-off: tens of thousands of orders locked within the first day, waiting lists stretching months, and an Ultra version that went on to set production-EV lap records at the Nürburgring. Plenty of brands have accused Chinese cars of borrowing their looks. The SU7 is what happens when the borrowing is confident, selective and paired with something the original cannot copy back.</p>
`,
    html_zh: `
<p>无论在哪种语言里，人们看到小米 SU7 的第一反应几乎相同：「这不是保时捷吗？」修长的前舱、低伏的水滴形车顶、后轮上方隆起的臀线——它与 Taycan 的神似毫不含蓄，2024 年 3 月发布后几分钟内互联网就炸了锅。但比「像」更有意思的问题是：为什么像，以及仔细看时，它在哪里刻意地不像了。</p>

<h2>造型背后的人</h2>
<p>小米没有把第一台车交给手机设计师。外观设计由曾任职宝马 i 系列的李田原主导，团队成员多来自德国高端品牌设计室。按雷军自己的说法，设计任务书就是毫不掩饰的对标：研究人们梦想中的车，然后造一台价格砍半的。雷军在发布会上直接点名对比 Taycan 与 Model S。在一个大多数发布会淹没在空洞形容词里的行业，这种坦率近乎缴械——小米从未假装那些参照不存在。</p>

<h2>物理规律让大家殊途同归</h2>
<p>相似的一部分原因，是空气动力学对高性能电动轿车的塑造。SU7 的风阻系数低至 0.195，是有史以来最「滑」的量产车之一，而实现这个数字的配方——低车头、弧形车顶、收窄的车尾、隐藏式门把手——正是保时捷、Lucid 和奔驰共同抵达的配方。电动车的布局逻辑也在推动趋同：没有发动机需要安置，平整的电池地板需要遮掩，车轮被推向四角。设计趋同是真实存在的，而且恰恰在这个级别最强烈。被问及 SU7 时，保时捷设计总监的回应是外交式的幽默而非律师函——他说，也许好的想法总是不谋而合。</p>

<h2>小米真正不同的地方</h2>
<p>坐进车内，「借鉴」戛然而止。SU7 的座舱围绕澎湃 OS 和一个对手无法复制的硬件生态组织：小米平板与配件的磁吸拓展点、手机—家居—汽车的无缝流转、屏幕下方一排实体按键——对全触屏教条的无声反驳。这才是这台车真正的设计论点：它不是「中国保时捷」，而是第一台作为消费电子生态原生公民而设计的汽车，出自拥有这个生态的公司之手。生活方式化的配色、可充电配件的强调、座舱的应用商店逻辑——这些都不来自斯图加特。</p>

<h2>熟悉感本身就是战略</h2>
<p>还有一种更冷静的解读，而它大概才是正确答案。一家首次造车的公司要让家庭掏出 20 多万元，就必须消灭一切说「不」的理由。一个眼睛早已认定为美的造型——因为一台慢一些、贵六倍的德国车早已完成了这场审美教育——零成本地移除了汽车设计中最大的风险。小米把「新」花在了使用中能感知的地方，而不是展厅里的剪影上。市场已对这笔交换给出裁决：上市首日锁单数以万计、等车周期以月计，Ultra 版本随后在纽博格林刷新量产电动车圈速纪录。许多品牌都指责过中国车借鉴它们的外观。而 SU7 展示的是：当借鉴足够自信、足够克制，并且配上一样原创者无法反向复制的东西时，会发生什么。</p>
`
  }
];

if (typeof module !== 'undefined') module.exports = SITE_STORIES;
