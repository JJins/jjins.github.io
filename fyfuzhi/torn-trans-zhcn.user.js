// ==UserScript==
// @lastmodified  202206121820
// @name         芜湖助手
// @namespace    WOOH
// @version      0.3.33
// @description  托恩，起飞！
// @author       Woohoo[2687093] Sabrina_Devil[2696209]
// @match        https://www.torn.com/*
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @connect      *
// ==/UserScript==
(async function () {
    'use strict';
    // unsafewindow副本
    const UWCopy = window.unsafeWindow;
    try {
        window = UWCopy || window;
    } catch (err) {
        console.error('[WH]', err);
    }
    // 防止脚本重复运行
    if (window.WHTRANS) return;
    window.WHTRANS = true;
    // 版本
    const version = '0.3.33';
    // 修改历史
    const changelist = [
        {
            todo: true,
            cont: `翻译：baza npc商店、imarket、imarket搜索结果`,
        },
        {
            ver: '0.3.33',
            date: '20220527',
            cont: `添加：存钱框悬浮（公司、帮派）
修复：光速跑路无法关闭的错误`,
        },
        {
            ver: '0.3.32',
            date: '20220527',
            cont: `添加：修改了点击4条的行为：分别对应锻炼、犯罪、物品（加成物品）、物品（医疗）
修复：光速跑路无法关闭的错误现已修复`,
        },
        {
            ver: '0.3.31',
            date: '20220405',
            cont: `修改一键起飞，添加往返时间估计、显示药CD`,
        },
        {
            ver: '0.3.30',
            date: '20220401',
            cont: `添加pt一键购买开关
中菜单现已折叠部分设置
完善一键起飞的内容，修复有关错误`,
        },
        {
            ver: '0.3.29',
            date: '20220331',
            cont: `增加一键起飞`,
        },
        {
            ver: '0.3.28',
            date: '20220331',
            cont: `增加pt一键购买（NS抄来的）`,
        },
        {
            ver: '0.3.27',
            date: '20220311',
            cont: `修复bug，调整css`,
        },
        {
            ver: '0.3.26',
            date: '20220309',
            cont: `修复叠E助手bug，添加BnB商店加入啤酒的功能`,
        },
        {
            ver: '0.3.25',
            date: '20220309',
            cont: `修复价格监视bug，修改css样式`,
        },
        {
            ver: '0.3.24',
            date: '20220308',
            cont: `调整翻译逻辑，添加一些菜单的说明，健身房页面添加了叠E保护开关`,
        },
        {
            ver: '0.3.23',
            date: '20220303',
            cont: `修复节日的错误`,
        },
        {
            ver: '0.3.22',
            date: '20220303',
            cont: `修改了通知样式`,
        },
        {
            ver: '0.3.21',
            date: '20220225',
            cont: `修改了样式`,
        },
        {
            ver: '0.3.20',
            date: '20220223',
            cont: `性能优化，修复一些翻译错误，添加XAN价格监视`,
        },
        {
            ver: '0.3.19',
            date: '20220222',
            cont: `修复多次烦人的通知`,
        },
        {
            ver: '0.3.18',
            date: '20220222',
            cont: `修复通知错误`,
        },
        {
            ver: '0.3.17',
            date: '20220222',
            cont: `增加物品监视`,
        },
        {
            ver: '0.3.16',
            date: '20220221',
            cont: `修复通知错误，现在飞花库存可以更快的加载了`,
        },
        {
            ver: '0.3.15',
            date: '20220220',
            cont: `修复通知错误`,
        },
        {
            ver: '0.3.14',
            date: '20220220',
            cont: `调整啤酒小助手的通知样式，修复危险功能开关的错误，加入系统通知支持；
替换PDA下飞贼助手的数据源，现在同样使用实时数据`,
        },
        {
            ver: '0.3.13',
            date: '20220218',
            cont: `调整本地数据查询方式，修复啤酒小助手的错误`,
        },
        {
            ver: '0.3.12',
            date: '20220217',
            cont: `添加查看NNB功能，修复啤酒小助手的错误，调整显示飞花库存`,
        },
        {
            ver: '0.3.11',
            date: '20220215',
            cont: `添加显示活动详情，啤酒提醒通知中添加了转跳链接`,
        },
        {
            ver: '0.3.10',
            date: '20220214',
            cont: `调整菜单内容，修复了飞行闹钟的错误，添加显示节日和节日详情`,
        },
        {
            ver: '0.3.9',
            date: '20220211',
            cont: `添加叠E保护`,
        },
        {
            ver: '0.3.8',
            date: '20220203',
            cont: `修复捡垃圾助手的错误，调整样式`,
        },
        {
            ver: '0.3.7',
            date: '20220203',
            cont: `修复小窗犯罪的错误，添加用户名与id，添加捡垃圾助手（默认不开启）`,
        },
        {
            ver: '0.3.6',
            date: '20220130',
            cont: `修复闹钟提醒的错误，添加今日不再提醒`,
        },
        {
            ver: '0.3.5',
            date: '20220129',
            cont: `调整界面样式，添加常用链接，添加啤酒提醒`,
        },
        {
            ver: '0.3.4',
            date: '20220128',
            cont: `飞贼小助手现可在所有页面加载`,
        },
        {
            ver: '0.3.3',
            date: '20220128',
            cont: `调整样式、减少初始设置的通知`,
        },
        {
            ver: '0.3.2',
            date: '20220127',
            cont: `增加通知`,
        },
        {
            ver: '0.3.1',
            date: '20220126',
            cont: `添加载入伞佬的飞贼小助手`,
        },
        {
            ver: '0.2.0118a',
            date: '20220118',
            cont: `小窗口快速crime错误修复、优化边缘设置按钮`,
        },
        {
            ver: '0.2.0117a',
            date: '20220117',
            cont: `小窗口快速crime错误修复`,
        },
        {
            ver: '0.2.0116b',
            date: '20220116',
            cont: `小窗口快速crime手机版错误修复`,
        },
        {
            ver: '0.2.0116a',
            date: '20220116',
            cont: `添加小窗口快速crime`,
        },
        {
            ver: '0.2.0114b',
            date: '20220114',
            cont: `修复设置开关的错误`,
        },
        {
            ver: '0.2.0114a',
            date: '20220114',
            cont: `调整飞行闹钟的样式`,
        },
        {
            ver: '0.2.0113a',
            date: '20220113',
            cont: `添加飞行闹钟`,
        },
        {
            ver: '0.2.0111a',
            date: '20220111',
            cont: `添加危险行为警告开关`,
        },
        {
            ver: '0.2.0110b',
            date: '20220110',
            cont: `添加自动开打和结束战斗`,
        },
        {
            ver: '0.2.0110a',
            date: '20220110',
            cont: `添加生存手册的链接、添加了NPC Loot时间表`,
        },
        {
            ver: '0.2.0108b',
            date: '20220108',
            cont: `不缓存库存图`,
        },
        {
            ver: '0.2.0108a',
            date: '20220108',
            cont: `修改了“Flexible Body Armor”的物品名翻译
增加了飞花库存图`,
        },
        {
            ver: '0.2.0107a',
            date: '20220107',
            cont: `可以开打时声音提示
非12月隐藏小镇相关
添加自动刷新间隔`,
        },
        {
            ver: '0.2.0106b',
            date: '20220106',
            cont: `修复光速跑路bug`,
        },
        {
            ver: '0.2.0106a',
            date: '20220106',
            cont: `增加更新选项，关闭光速跑路功能等待更多的测试结果`,
        },
        {
            ver: '0.2.0105c',
            date: '20220105',
            cont: `修复“光速跑路”无法关闭的bug`,
        },
        {
            ver: '0.2.0105b',
            date: '20220105',
            cont: `增加最新版本图片与更新历史`,
        },
        {
            ver: '0.2.0105a',
            date: '20220105',
            cont: `增加了“攻击界面自刷新”`,
        },
        {
            ver: '0.2.0104a',
            date: '20220104',
            cont: `增加了“光速拔刀”、“光速跑路”功能`,
        },
        {
            ver: '0.1.1230a',
            date: '20211230',
            cont: `增加了设置区域的自动生成、增加了start fight按钮重新定位、增加了loader2攻击错误页面的转跳`,
        },
        {
            ver: '0.1.1229b',
            date: '20211229',
            cont: `修复小镇提示的错误`,
        },
        {
            ver: '0.1.1229a',
            date: '20211229',
            cont: `修复小镇提示的错误，添加脚本的功能配置`,
        },
        {
            ver: '0.1.1227a',
            date: '20211227',
            cont: `添加了左侧悬浮图标、设置选项、动态更新`,
        },
        {
            ver: '0.1.1225a',
            date: '20211225',
            cont: `小镇提示日期错误修复`,
        },
        {
            ver: '0.1.1224c',
            date: '20211224',
            cont: `小镇提示错误修复`,
        },
        {
            ver: '0.1.1224b',
            date: '20211224',
            cont: `小镇提示逻辑改写`,
        },
        {
            ver: '0.1.1224a',
            date: '20211224',
            cont: `修复了小镇提示的部分bug`,
        },
        {
            ver: '0.1.1223a',
            date: '20211223',
            cont: `增加了小镇提示选项和历史记录`,
        },
        {
            ver: '0.1.1222b',
            date: '20211222',
            cont: `添加了圣诞小镇有掉落物时的声音效果`,
        },
        {
            ver: '0.1.1222a',
            date: '20211222',
            cont: `添加了圣诞小镇有掉落物时的颜色渐变效果`,
        },
        {
            ver: '0.1.1221b',
            date: '20211221',
            cont: `修复了圣诞小镇物品掉落名称不全的问题`,
        },
        {
            ver: '0.1.1221a',
            date: '20211221',
            cont: `修改了profile页面的日期翻译错误，优化代码`,
        },
        {
            ver: '0.1.1219a',
            date: '20211219',
            cont: `优化了小镇掉落物品的显示样式`,
        },
        {
            ver: '0.1.1218a',
            date: '20211218',
            cont: `添加添加圣诞小镇附近掉落信息`,
        },
        {
            ver: '0.1.1216a',
            date: '20211216',
            cont: `添加日历页面翻译（未完成）
添加圣诞小镇解密助手`,
        },
        {
            ver: '0.1.1213a',
            date: '20211213',
            cont: `调整了sellout slayer任务的助手说明
增加两个任务物品名称翻译`,
        },
        {
            ver: '0.1.1211c',
            date: '20211211',
            cont: `增加适配npc pt商店及卖出框的标题`,
        },
        {
            ver: '0.1.1211b',
            date: '20211211',
            cont: `修复npc商店手机页面不适配问题`,
        },
        {
            ver: '0.1.1211a',
            date: '20211211',
            cont: `修复报纸日期翻译问题`,
        },
        {
            ver: '0.1.1210a',
            date: '20211210',
            cont: `优化了页标题右侧按钮翻译
调整了物品页面、展柜页面物品详情翻译
增加了npc商人页面的翻译
更改了标题翻译匹配的字典`,
        },
        {
            ver: '0.1.1209a',
            date: '20211209',
            cont: `添加翻译股票页面购买历史中的“Show n more”，调整了一些字段翻译
更新了一些物品名称翻译，咸鱼修正为鳟鱼`,
        },
    ];
    // iframe判断
    const isIframe = self !== top;
    // jQuery引入
    const $ = window.jQuery;
    // PDA APIKey
    const PDA_APIKey = '###PDA-APIKEY###';
    // isPDA
    const isPDA = PDA_APIKey.slice(-1) !== '#';
    // 请求通知权限
    if (window.Notification) {
        Notification.requestPermission().then(status => {
            // 这将使我们能在 Chrome/Safari 中使用 Notification.permission
            if (Notification.permission !== status) {
                Notification.permission = status;
            }
        })
    }

    const titleDict = {
        'Home': '主页',
        'Estate Agents': '地产中介',
        'Newspaper': '报纸',
        'Job Listing': '工作列表',
        'Freebies': '壁纸',
        'Classified Ads': '分类广告',
        'Properties': '房产',
        'All Properties': '所有房产',
        'City': '城市',
        'Education': '教育',
        'Gym': '健身房',
        'Biology Modules': '生物学课程',
        'Traveling': '飞行中',
        'Events': '通知',
        'Hospital': '医院',
        'Received Events': '收到的通知',
        'Saved Events': '保存的通知',
        'Awards': '勋章',
        'Faction': '帮派',
        'Your Properties': '你的房产',
        'Stock Market': '股市',
        'Preferences': '首选项',
        'Missions': '任务',
        'Spouse\'s Properties': '配偶的房产',
        'Items': '物品仓库',
        'Travel Agency': '旅行社',
        'Display Cabinet': '展示柜',
        'Torn Docks': '码头车行',
        'Nikeh Sports Shop': '耐克哈运动专卖',
        'Torn City Super Store': '电器商店',
        "Sally's Sweet Shop": '莎莉的糖果店',
        "Calendar": '日历',
        "Christmas Town": '圣诞小镇',
        "My Maps": '我的地图',
    };
    const titleLinksDict = {
        'Personal stats': '个人统计信息',
        'Log': '日志',
        'Tell your story': '说出你的故事',
        'Rental Market': '租赁市场',
        'Selling Market': '销售市场',
        'City': '城市',
        'Back to Estate Agents': '返回地产中介',
        'Tutorial': '教程',
        'Back to Education': '返回',
        'Recruit Citizens': '招募玩家',
        'Events': '通知',
        'Travel Home': "返程",
        'Rehabilitation': "解毒康复",
        'People': "玩家列表",
        'Computer': '电脑',
        'Market': '市场',
        'Back': '返回',
        'Hospital': '医院',
        'Everyone': '所有人',
        'Nobody': '仅自己',
        'Friends & faction': '好友 & 帮派成员',
        'Forum': '论坛',
        'Leave Faction': '离开帮派',
        'Properties': '所有房产',
        'Back to Properties': '返回所有房产',
        'Your Profile': '你的个人资料',
        'Ammo': '子弹',
        'Trades': '交易',
        'Bazaar': '店铺',
        'Display': '展示柜',
        "Christmas Town": '圣诞小镇',
        "Token Shop": 'Token 商店',
        "Calendar": '日历',
        "My Maps": '我的地图',
        "Mods": '模组',
    };
    const sidebarDict = { // todo 从json加载
        'Money': '现金',
        'Level': '等级',
        'Points': 'PT',
        'Merits': '天赋点',
        'Energy': '能量E',
        'Nerve': '犯罪N',
        'Happy': '快乐',
        'Life': '血量',
        'Chain': '连击链Chain',
        'Home': '主页',
        'home': '主页',
        'Items': '物品',
        'City': '城市',
        'Job': '工作',
        'job': '工作',
        'Gym': '健身房',
        'Properties': '房产',
        'property': '房产',
        'Education': '教育',
        'edu': '教育',
        'Crimes': '犯罪',
        'Missions': '任务',
        'Newspaper': '报纸',
        'News': '报纸',
        'Jail': '监狱',
        'Hospital': '医院',
        'Casino': '赌场',
        'Forums': '论坛',
        'Hall of Fame': '名人堂',
        'ranks': '名人堂',
        'My Faction': '帮派',
        'faction': '帮派',
        'Recruit Citizens': '招募玩家',
        'recruit': '招募玩家',
        'Competitions': '日历',
        'comps': '日历',
        'Community Events': '社区事件',
        'Community': '社区事件',
        'Friends': '好友',
        'Enemies': '敌人',
        'Information': '信息',
        'Areas': '区域',
        'Lists': '列表',
        'messages': '信息',
        'events': '通知',
        'awards': '勋章',
    };
    const tooltipDict = {
        'Full ': '回满',
        'energy': '能量E',
        'happy': '快乐',
        ' in ': '还需',
        'You have full ': '你已有满',
        'life': '血量',
        'nerve': '犯罪N',
        'You are currently traveling': '你正在飞行中',
        'You don\'t own a Laptop!': '你没有笔记本电脑！',
        'You are not in Torn': '你不在城里',
        'Rank': '阶级',
    };
    const statusDict = {
        'Traveling to Mexico': '正在飞往墨西哥',
        'Traveling to Cayman Islands': '正在飞往开曼群岛',
        'Traveling to Canada': '正在飞往加拿大',
        'Traveling to Hawaii': '正在飞往夏威夷',
        'Traveling to United Kingdom': '正在飞往英国',
        'Traveling to Argentina': '正在飞往阿根廷',
        'Traveling to Switzerland': '正在飞往瑞士',
        'Traveling to Japan': '正在飞往日本',
        'Traveling to China': '正在飞往中国',
        'Traveling to UAE': '正在飞往 UAE',
        'Traveling to South Africa': '正在飞往南非',
        'Returning to Torn from Mexico': '正从墨西哥返回',
        'Returning to Torn from Cayman Islands': '正从开曼群岛返回',
        'Returning to Torn from Canada': '正从加拿大返回',
        'Returning to Torn from Hawaii': '正从夏威夷返回',
        'Returning to Torn from United Kingdom': '正从英国返回',
        'Returning to Torn from Argentina': '正从阿根廷返回',
        'Returning to Torn from Switzerland': '正从瑞士返回',
        'Returning to Torn from Japan': '正从日本返回',
        'Returning to Torn from China': '正从中国返回',
        'Returning to Torn from UAE': '正从 UAE 返回',
        'Returning to Torn from South Africa': '正从南非返回',
        'In Mexico': '在墨西哥',
        'In Cayman Islands': '在开曼群岛',
        'In Canada': '在加拿大',
        'In Hawaii': '在夏威夷',
        'In United Kingdom': '在英国',
        'In United Argentina': '在阿根廷',
        'In United Switzerland': '在瑞士',
        'In United Japan': '在日本',
        'In United China': '在中国',
        'In United UAE': '在 UAE',
        'In South Africa': '在南非',
    };
    const miniProfileDict = {};
    const homeDict = {
        'General Information': '基本信息',
        'Property Information': '房产信息',
        'Battle Stats': '战斗能力 (BS)',
        'Working Stats': '工作能力 (WS)',
        'Equipped Armor': '已装防具',
        'Equipped Weapons': '已装武器',
        'Skill Levels': '技能等级',
        'Latest Messages': '近期信息',
        'Job Information': '工作信息',
        'Latest Events': '近期通知',
        'Latest Attacks': '近期攻击',
        'Faction Information': '帮派信息',
        'Criminal Record': '犯罪记录',
        'Personal Perks': '个人加成',
        'Property': '房产',
        'Cost': '花费',
        'Fees': '开销费用',
        'Job': '工作',
        'Company': '公司',
        'Days in company': '在公司的天数',
        'Type': '公司类型',
        'Position': '职位',
        'Income': '公司收入',
        'Job points': '工作点数',
        'Rating': '星级',
        'Faction': '帮派',
        'Days in faction': '在帮派的天数',
        'Respect': '面子',
        'Members': '成员',
        'Illegal products': '非法产品',
        'Theft': '盗窃',
        'Auto theft': '汽车盗窃',
        'Drug deals': '非法药品交易',
        'Computer crimes': '计算机犯罪',
        'Murder': '谋杀',
        'Fraud crimes': '诈骗犯罪 (Fraud crimes)',
        'Other': '其他犯罪',
        'Total': '总计',
        'Name': '名字',
        'Money': '现金',
        'Points': 'PT',
        'Level': '等级',
        'Rank': '阶级',
        'Life': '血量',
        'Age': '年龄',
        'Marital status': '婚姻状态',
        'Networth': '身价',
        'Strength': '力量 STR',
        'Defense': '防御 DEF',
        'Speed': '速度 SPD',
        'Dexterity': '闪避 DEX',
        'Hunting skill': '狩猎技能',
        'Racing skill': '赛车技能',
        'Manual labor': '体力 MAN',
        'Intelligence': '智力 INT',
        'Endurance': '耐心 END',
    };
    const attackDict = {
        "mugged": "打劫了 ",
        "attached": "攻击了 ",
        "arrested": "逮捕了 ",
        "hospitalized": "强制住院 ",
        "but": "但是",
        "Someone": "有人",
        "lost": "失败了"
    };
    const newspaperDict = {
        'front page': '头版',
        'archive': '归档',
        'job listing': '工作',
        'properties': '房产',
        'freebies': '壁纸',
        'classified ads': '广告',
        'personals': '交友',
        'bounties': '悬赏',
        'comics': '漫画',
        'chronicles': '纪事档案馆',
        'TCSE Market Index': 'TCSE 股票指数',
        'Weekly bazaars': '每周小店',
        'LOTTERY': '幸运彩票',
        'BOUNTIES': '精选悬赏',
        'TC PERSONALS': '托恩交友',
        'Why not visit our sponsor?': '何不看下赞助广告？',
        'View all': '查看所有',
        'Advertise here': '在此刊登广告',
        'Submit your own comic and earn 250 points!': '提交你创作的漫画赚取250PT！',
        'Welcome to personal page! Who are you seeking?': '欢迎来到交友页面！你想找谁？',
        'Search or put up your own ad!': '搜索或刊登你自己的广告！',
        'Put up your own personal advertisement': '发布你自己的交友广告',
        'Go to an interview to see if you can get the job, or check out one of the companies that take your fancy, someone might give you the chance of being their employee?':
            '参加面试，看看你是否能得到这份工作？或者去看看那些让你心动的公司，有人可能会提供你成为他们的员工的机会？',
        'To claim the rewards, please click claim and hospitalize the person.':
            '要获得悬赏奖励，请点击领取，并将其强制住院。',
        'Put a bounty on someone': '下悬赏给某人',
        'REWARD': '奖励',
        'TARGET': '目标',
        'Target': '目标',
        'LVL': '等级',
        'Level:': '等级: ',
        'LISTER': '悬赏人',
        'Listed by:': '悬赏人: ',
        'REASON': '原因',
        'Reason': '原因',
        'Reason:': '原因: ',
        'QTY': '数量',
        'Qty:': '数量: ',
        'STATUS': '状态',
        'Status:': '状态: ',
        'CLAIM': '领取',
        'Claim': '领取',
        'Reward per hospitalization': '每次强制住院的奖励',
        '(optional)': '(可选)',
        '30 char': '30 字符',
        'I would like to make my listing anonymous (+50% fee)':
            '我想匿名悬赏(+50%费用)',
        'Would you like to place a bounty on someone? You c':
            '想悬赏某人吗？在任何时候，你最多可以有10个有效的悬赏，任何无人认领的悬赏将在7天后过期且不退款。',
        'Bounty rewards:': '悬赏奖励：',
        'Listing fee:': '悬赏费：',
        'Anonymity fee:': '匿名费：',
        'Total cost to pay now:': '总计需支付：',
        'Are you sure you wish to place  a bounty of': '确定要下1次金额为',
        'Are you sure you wish to place': '确定要下',
        'of': '金额为',
        'on': '的悬赏给',
        'Yes': '是的',
        'No': '不了',
        'PLACE': '投放',
        'Cancel': '取消',
        'Hospital': '住院',
        'Traveling': '旅行中',
        'None': '无',
        'A total of {$} listings were found.': '总共发现了 {$} 个悬赏',
    };
    const propertyDict = {
        'Shack': '棚屋',
        'Trailer': '拖车',
        'Apartment': '公寓',
        'Semi - Detached': '半独立式住宅',
        'Semi-Detached House': '半独立式住宅',
        'Semi Detached house': '半独立式住宅',
        'Detached House': '独立式住宅',
        'Beach House': '海滩小屋',
        'Chalet': '小别墅',
        'Villa': '别墅',
        'Penthouse': '顶层公寓',
        'Mansion': '豪宅',
        'Ranch': '山庄',
        'Palace': '宫殿',
        'Castle': '城堡',
        'Private Island': '私人岛屿 (PI)',
        'Owner': '所有人',
        'Owner:': '所有人：',
        'Happiness': '快乐值',
        'Happiness:': '快乐值：',
        'Cost': '花费',
        'Cost:': '花费：',
        'Cost per Day': '平均日花费',
        'Rental Period': '租期',
        'Rental period:': '租期：',
        'Rent': '租赁',
        'Info': '信息',
        'Buy': '购买',
        'Property:': '房屋：',
        'Modifications': '改造设施',
        'Upkeep:': '维护费：',
        'Staff:': '雇员费用：',
        'Leased to': '租给了 ',
        'Owned by your spouse': '为你的配偶所有',
        'Owned by you': '为你所有',
        'All Properties': '所有房产',
        'Your Properties': '你的房产',
        "Spouse's Properties": '配偶的房产',
        "Spouse's": '配偶的',
        'All': '所有',
        'Yours': '你的',
        'Customize this property': '自定义该房产',
        'Travel': '起飞',
        'Kick your spouse out of this property': '把你的配偶赶出该房产',
        'Pay upkeep': '支付维护费',
        'Move into this property': '搬进该房产',
        'Sell this property': '出售该房产',
        'Lease this property': '出租该房产',
        'Give this property to someone': '赠送该房产给某人',
        'Pay bills': '支付账单',
        'Recent upkeep payments': '最近的维护费用',
    };
    const travelingDict = {
        'Remaining Flight Time -': '剩余时间 - ',
        'Torn to London.': '正在飞往英国伦敦 (London)。',
        'London to Torn.': '正从英国伦敦 (London) 回城。',
        'Torn to Zurich.': '正在飞往瑞士苏黎世 (Zurich)。',
        'Zurich to Torn.': '正从瑞士苏黎世 (Zurich) 回城。',
        'Torn to Honolulu.': '正在飞往夏威夷檀香山 (Honolulu)。',
        'Honolulu to Torn.': '正从夏威夷檀香山 (Honolulu) 回城。',
        'Torn to Buenos Aires.': '正在飞往阿根廷布宜诺斯艾利斯 (Buenos Aires)。',
        'Buenos Aires to Torn.': '正从阿根廷布宜诺斯艾利斯 (Buenos Aires) 回城。',
    };
    const tipsDict = {
        'According to the Economist Intelligence Unit\'s Quality of Life Index, Switzerland is the second best place in the world to be born, after Denmark. Torn ranked 224th, despite there being only 194 recognised nations in the world.': "根据经济学人信息部提供的生活质量指数，瑞士是世界上第二个最适合出生的地方，仅次于丹麦。尽管世界上只有194个公认的国家，但托恩却排名第224位。",
        'The opportunities for employment in Torn are wide and varied, from jobs in the zoo and the meat warehouse through to fantastic openings at the strip club - a description rarely used to refer to those who work there.': "托恩的就业机会广泛而多样，从动物园和肉类仓库的工作,到脱衣舞俱乐部的奇妙开场--这是一个很少用来形容在那里工作的人的描述。",
        'One of the main requirements for a wedding to take place in Torn is the procurement of a ring. You may either purchase one from the Jewellery Store, or you can choose the more romantic option of stealing one, which requires far more effort if you think about it.': "在托恩举行婚礼的主要要求之一就是购买一枚戒指。你可以从珠宝店购买，也可以选择在偷窃戒指中选择一种很浪漫的方式，但是你冷静下来想想的话，这也是需要付出更大代价的。",
        "Despite having no discernible court system Torn still employs several thousand people within its Judicial Services department. Nobody knows what the hell these people do all day, but if we had to guess, we'd say Solitaire.": "尽管没有明显的法院系统，托恩仍然在其司法服务部门雇用了几千人。没有人知道这些人整天都在做什么，但如果我们必须猜测，我们会说是接龙。",
        "At one point a Dual Wield Melee course was available at Torn City College for a fee of $50,000,000, but this was discontinued when Torn's citizens realized they were effectively paying to learn how to hold two things at once.": "曾经托恩城市学院开设了双持近战课程，收费$50,000,000。当市民意识到他们其实是在花钱学习怎么同时拿着两个东西的时侯，这个课程正好结课了。",
    };
    const cityDict = {
        'Map': '地图',
        'Quick Links': '快速链接',
        'Key of Symbols': '标志建筑',
        'Financial': '金融',
        'Administrative': '行政',
        'inactive-mode1': '地图上只显示你的帮派的和临近的地盘。',
        'inactive-mode2': '启用【全地盘视图】将下载完整地图，大约2.75mb。',
        'active-mode': '【全地盘视图】已启用。',
        'ADMINISTRATIVE': '行政',
        'City Hall': '市政厅',
        'Hospital': '医院',
        'Jail': '监狱',
        'Visitor Center': "WIKI",
        "Staff": "Torn City 员工",
        "Committee": "委员会",
        "Community Center": "社区中心",
        "Chronicle Archives": "纪事档案馆",
        "Bank": "银行",
        "Stock Exchange": "股票交易所",
        "Item Market": "交易市场",
        "Sweet Shop": "糖果店",
        "Msg Inc": "广告公司",
        "Donator House": "捐赠者中心",
        "Big Al's Gun Shop": "大艾尔枪械",
        "Cyber Force": "赛博军团",
        "Church": "教堂",
        "Education": "教育",
        "Travel Agency": "旅行社",
        "Auction House": "拍卖行",
        "Points Building": "PT 商店",
        "Points Market": "PT 市场",
        "Docks": "码头车行",
        "Estate Agents": "地产中介",
        "Jewelry Store": "珠宝店",
        "Pawn Shop": "PT 当铺",
        "Post Office": "邮局",
        "Super Store": "电器商店",
        "TC Clothing": "TC 服装店",
        "Token Shop": "Token 商店",
        "Casino": "赌场",
        "Dump": "垃圾场",
        "Missions": "任务",
        "Loan Shark": "鲨客借贷",
        "Race Track": "赛车场",
        "City Center": "城市中心",
        "East Side": "东部地区",
        "West Side": "西部地区",
        "North Side": "北部地区",
        "Red-Light": "红灯区",
        "Residential": "住宅区",
        'Sort by:': '分类排序方式：',
        'Area': '地区',
        "Type": "类型",
        "Name": "名称",
        "Popularity": "人数",
        'FINANCIAL': '金融',
        'LEISURE': '休闲',
        'Leisure': '休闲',
        'MISC': '杂项',
        'Miscellaneous': '杂项',
        'REAL ESTATE': '房地产',
        'Real Estate': '房地产',
        'SHOPPING': '购物',
        'Shopping': '购物',
        'Nikeh Sports': '耐克哈运动专卖',
        "Bits 'n' Bobs": '胖鲍勃的杂货店',
        // '':'',
    };
    const gymDict = {
        'Strength': '力量 STR',
        'Defense': '防御 DEF',
        'Speed': '速度 SPD',
        'Dexterity': '闪避 DEX',
        'STR': '力量',
        'DEF': '防御',
        'SPD': '速度',
        'DEX': '闪避',
        'TRAIN': '锻炼',
        'Welcome to': '欢迎来到 ',
        '!': '！',
        'You walk into the gym and begin browsing the exercises available.':
            '你走进健身房，开始浏览可用的健身器材。',
        'You have': '你有',
        'available to use.': '可用于锻炼。',
        'energy': '能量',
        'Estimated Energy progress:': '(TornTools) 预估健身房解锁进程：',
        'What would you like to train today?': '今天想练点什么？',
        'You do not have enough energy left': '你没有足够的剩余能量？',
        'BACK TO GYM': '返回健身房',
        'ACTIVATE MEMBERSHIP': '激活会员身份',
        'BUY MEMBERSHIP': '购买健身房会员',
        'Cancel': '返回',
        'Chance of hitting opponent': '击中对手的概率',
        'Chance of hitting': '击中对手的概率',
        "Ability to withstand damage": "承受伤害的能力",
        "Withstand damage": "承受伤害的能力",
        "Damage you make on impact": "攻击造成的伤害",
        "Damage on impact": "攻击造成的伤害",
        'Ability to evade an attack': '躲避攻击的能力',
        'energy per train': ' 能量/次',
        'Class:': '健身房类别：',
        "Membership cost:": "会员价格: ",
        "Energy usage:": "能量消耗: ",
        'Heavyweight': '重量级',
        'Strength Gains': '力量增益',
        "Speed Gains": "速度增益",
        "Defense Gains": "防御增益",
        "Dexterity Gains": "闪避增益",
        'Boxing': '拳击',
        'Are you sure you would like to buy this membership?': '确定购买这个健身房会员吗？',
        'Not Available': '不可用',
        'Unavailable': '不可用',
        "Middleweight": "中量级",
        "Lightweight": "轻量级",
        '5 per train': '5 能量/次',
        '10 per train': '10 能量/次',
        '50 per train': '50 能量/次',
        'Bicep Curls': '二头肌弯举',
        'Cycling': '自行车',
        'Yoga': '瑜伽',
        'Press-ups': '俯卧撑',
        'Running': '跑步',
        'Karate': '空手道',
        'Catch': '',
        'Leg Curls': '腿部弯举',
        'Muay Thai': '泰拳',
        "Woody's Slalom Sprint": '无敌回旋冲刺',
        'Frisbee': '飞盘',
        'Sit-ups': '仰卧起坐',
        'Wrestling': '摔跤',
        'Lateral Raises': '侧抬',
        'Interval Training': '间歇训练',
        'Judo': '柔道',
        'Balance Board': '平衡板',
        'Planking': '长板',
        'Kick Boxing': '跆拳道',
        'Zumba': '尊巴运动',
        'Chin-ups': '引体向上',
        'Jujitsu': '柔道',
        'Pilates': '普拉提',
        'Tricep-dips': '三头肌下蹲',
        'Sprint Training': '短跑训练',
        'Taekwondo': '跆拳道',
        'Squash': '壁球',
        'Squats': '深蹲',
        'Explosive Kettle Bell': '',
        'Darts': '飞镖',
        'Chest Flys': '',
        'Fartlek Training': '',
        'Badminton': '羽毛球',
        'Shoulder Shrugs': '肩部耸立',
        'Speedball': '迅速球',
        'Pool': '',
        'Chest Press': '胸部按压',
        'Skipping': '跳绳',
        'Batting': '',
        'Shoulder Press': '肩部推举',
        'Viper Belt Training': '',
        'Swimming': '游泳',
        'Bench Press': '卧推',
        'Agility Training Course': '',
        'Table Tennis': '乒乓球',
        'Suicide Running': '',
        'Aerobics': '有氧健身操',
        'Tricep Pulldowns': '三头肌下拉',
        'Incline Sprinting': '',
        'Basketball': '篮球',
        'Weighted Chin-ups': '负重引体向上',

    };
    const gymList = {
        'Premier Fitness': '首席健身',
        'Average Joes': '平衡乔伊',
        "Woody's Workout Club": '无敌健身',
        'Beach Bods': '沙滩之恋',
        'Silver Gym': '白银健身',
        'Pour Femme': '女士健身',
        'Davies Den': '戴维斯之家',
        'Global Gym': '全球健身房',

        'Knuckle Heads': '手指头',
        'Pioneer Fitness': '先锋健身',
        'Anabolic Anomalies': '代谢异常',
        'Core': '主干力量',
        'Racing Fitness': '竞速健身',
        'Complete Cardio': '完全有氧',
        // 'Legs, Bums and Tums': '腿，臀和腹部',
        'Legs, Bums and Tums': '底盘训练',
        'Deep Burn': '深燃',

        'Apollo Gym': '阿波罗健身',
        'Gun Shop': '枪店健身',
        'Force Training': '暴力训练',
        "Cha Cha's": '茶茶',
        'Atlas': '阿特拉斯健身房',
        'Last Round': '最后一轮',
        'The Edge': '临界点',
        "George's": '乔治',

        'Balboas Gym': '巴尔博斯健身房',
        'Frontline Fitness': '前线健身',
        'Gym 3000': '健身3000',
        'Mr. Isoyamas': '伊索亚玛斯先生',
        'Total Rebound': '全面反弹',
        'Elites': '精英',
        'The Sports Science Lab': '运动科学实验室',
        'The Jail Gym': '监狱健身房',
    };
    const eduDict = {
        'Biology': '生物学',
        'Business': '商学',
        'Combat Training': '战斗训练',
        'Computer Science': '计算机科学',
        'General Studies': '基础学科',
        'Health & Fitness': '健康与健身',
        'History': '历史学',
        'Law': '法学',
        'Mathematics': '数学',
        'Psychology': '心理学',
        'Self Defense': '自卫',
        'Sports Science': '运动科学',
        'Biology Modules': '生物学课程',
        'Introduction to Biochemistry': '生物化学概论',
        'Physiological Testing': '生理测试',
        'You do not meet the requirements for this course. Please complete the prerequisites first.':
            '你不符合本课程的要求。请先学习前置课程。',
        'Description:': '描述：',
        'Learning outcomes:': '学习后可获得：',
        'Prerequisites:': '前置课程：',
        'Parameters:': '课程参数：',
        'As the ultimate module - you will focus on maximum gym gain with the least amount of input.': '',
        'Ability to withdraw and deliver blood': '抽取和输送血液的能力 (使用血包)',
        // 'Gain {$1} {$2} upon completion': '获得{$1}点{$2}',
        'intelligence': '智力(INT)',
        'endurance': '耐心(END)',
        'manual labor': '体力(MAN)',
        '[Leave this course]': '[退出课程]',
        'You are taking the': '你正在学习',
        'education course.': '课程',
        'This course will be completed in': '该课程将完成于',
        'Strength and Conditioning': '力量和体能训练',
        '[Leave course]': '[确认退出课程]',
        'Are you sure you want to leave the': '你确定你要退出',
        'course?': '课程吗？',
        'course.': '课程。',
        'course!': '课程！',
        'It will take': '这将需要',
        'to complete.': '来完成。',
        'You have started the': '你已开始学习',
        'You are currently taking this course.': '你目前正在学习这个课程。',
        'You have completed this course!': '你已学习过该课程！',
        'You are currently taking an education course already. This course must be completed before you can start another.':
            '你已经参加了一个课程。在你开始另一个课程之前，必须先完成这个课程。',
        'The current progress will be canceled and you\'ll have to start all over again.': '目前的进度将被取消，你将需要重新开始。',
        'Sports Science Modules': '运动科学模块',
        'Introduction to Sports Science': '运动科学概论',
        "Are you the missing link? At the end of this course you'll know more about Neanderthal man than the Discovery Channel.":
            '你是缺失的那一环吗？在本课程结束时，你对尼安德特人的了解将超过探索频道的内容。',
        "Congratulations! You have completed the": '恭喜！你已完成了',
        "You have gained the following:": '你已经获得了以下：',
        "upon completion": '于课程完成后',
        "Gain": '获得',
        "Length": '时长',
        "Cost": '费用',
        "Tier: 2": '级别: T2',
        "Tier: 1": '级别: T1',
        "Tier: 3": '级别: T3',
        "Gain a 1% bonus to strength gains in the gym": '健身房锻炼时获得1%的力量增长增益',
        "Bonus:": '增益：',
        'Introduction to General Studies': '基础学科入门',
        'Driving License': '驾照',
        'Gain access to driving related crimes': '可进行驾驶相关的犯罪 (解锁11系列)',
        "You'll need this to get around the city. Our crash course should give you a license without fail.":
            '你将需要这个来在城市中穿梭。我们的速成班应该能让你顺利拿到驾照。',
        'Astronomy': '天文学',
        'Mechanical Arts': '机械艺术',
        'General Mechanics': '通用机械学',
        'Basic English': '基础英语',
        'Ivory Crafting': '象牙工艺',
        'Intravenous Therapy': '静脉注射',
        'Put that fear of needles behind you by learning how to successfully administer a blood transfusion.':
            '通过学习如何成功地进行输血，将对针头的恐惧抛在脑后。',
        'Networking': '网络',
        'Gain access to hacking crimes': '可进行黑客犯罪 (解锁18系列)',
        'Computer Security and Defense': '计算机安全与防御',
        'Gain a 10% increase in hacking crime success rate': '提高黑客犯罪10%的成功率',
    };
    const headerDict = {
        "User's Name / ID": '用户名或ID',
        "Name": '用户名',
        'Faction': '帮派',
        'Company': '公司',
        'Places': '地点',
        'Item Market': '交易市场',
        'Forum posts': '论坛',
        'Help': '帮助',
        'search...': '搜索',
        'Search users by...': '高级用户搜索',
        'Property': '住房',
        'Male': '男性',
        'Female': '女性',
        'to': '到',
        'Condition': '条件',
        'Married': '在已婚状态',
        'Travelling': '在飞行中',
        'In a faction': '在帮派中',
        'In a company': '在公司中',
        'In hospital': '在医院里',
        'In jail': '在监狱里',
        'In Federal jail': '在联邦监狱里',
        'Level': '等级',
        'Days old': '游戏天数',
        'Offences': '违法行为',
        'Last action': '上次动作',
        'Reset': '重置',
        'Search': '搜索',
        '0 - 15 min': '0 - 15 分钟',
        '15 min - 1 hour': '15 分钟 - 1 小时',
        '1 hour - 1 day': '1 小时 - 1 天',
        '1 day - 1 week': '1 天 - 1 周',
        '1 week - 1 month': '1 周 - 1 月',
        '1 month - 1 year': '1 月 - 1 年',
        'longer than 1 year ago': '久于 1 年前',
        'Not': '不',
        'View Log': '查看日志',
        'View Profile': '查看个人资料',
        'Settings': '设置',
        'Server:': '服务器 ',
        'Dark Mode': '黑夜模式',
        'News Ticker': '滚动通知',
        'Desktop View': '桌面视图',
        'Logout': '登出',
        'Gender': '性别',
    };
    const eventsDict = {
        // "ALL EVENTS": "所有通知",
        // "RECEIVED": "收到的通知",
        // "SAVED": "已保存通知",
        "Delete selected": " 删除已选",
        "Save selected": " 保存已选",
        "Check All": " 全选",
        "Uncheck All": " 取消全选",
        // "Events": "通知",
        // "Log": "日志",
        // "Back": "返回",
        // "Recruit Citizens": "招募市民",
        // "Tutorial": "教程",
        'ALL EVENTS (': '全部通知 (',
        'All Events': '全部通知',
        'RECEIVED (': '收到的通知 (',
        'Received Events': '收到的通知',
        'SAVED (': '保存的通知 (',
        'Saved Events': '保存的通知',
        'hospitalized': '强制住院了',
        'and earned your': '，赢得',
        'bounty reward': '赏金',
        'Someone hospitalized': '某人强制住院了',
        'You pop the LSD pill into your mouth and down a glass of water. A headache is followed by nausea and vomiting. You have overdosed.':
            '你把 LSD 塞进嘴里，然后喝下一杯水。头痛之后是恶心和呕吐。你用药过量了(OD)。',
        'Your application to join the company': '加入公司 ',
        'has been declined': ' 的申请已被拒绝。',
        'has been accepted': ' 的申请已被通过。',
        'You have been given a bazaar for your 250 points. You can now sell items there.':
            '你收到了花费 250 PT 买来的集市。现在你可以在那里出售物品。',
        'You have received a Stock Ticker in exchange for 25 points. Now you can access the Stock Market and start buying shares.':
            '你收到了花费 25 PT 买来的股票交易机。现在你可以进入股票市场并开始购买股票。',
        'You have received a Racing License in exchange for 50 points. You can now access the Race Track in the city.':
            '你收到了花费 50 PT 买来的赛车执照。你现在可以进入城市的赛车场了。',
        'You have been given a display cabinet for your 100 points. Now you can store special items there. Go to the items page to start using it.':
            '你收到了花费 100 PT 买来的展示柜。现在你可以在那里储存特殊物品。进入物品页面，开始使用它。',
        'successfully revived you.': ' 成功复活了你',
        'Save': '保存',
        'Send': '发送',
        'SEND': '发送',
        'Cancel': '取消',
        'Send Event': '发送通知',
        'Delete': '删除',
        'failed to revive you.': ' 没能复活你。',
        'User ID:': '用户：',
        'You have successfully referred': '你已经成功推荐了 ',
        '. Once they have validated, they will be added to your':
            '。一旦他成功验证，他将被添加到你的',
        'referral list': '推荐人列表',
        'and you will start earning rewards from them as they level up.':
            '中，当他们等级提升时你会获得奖励。',
        'You have used the reward bonus code {$} and have received a boost of +250 energy.':
            '你已使用奖励兑换码 {$}，收到了 250 能量E。',
        ', the director of':
            ' (',
        'MAN': '体力 (MAN)',
        'END': '耐心 (END)',
        'INT': '智力 (INT)',
        'You took some Xanax and downed a glass of water. A headache was followed by nausea and vomiting. You overdosed.':
            '你吃了一些 Xanax，喝了一杯水。头痛之后是恶心和呕吐。你用药过量了(OD)。',
    };
    const chatDict = {
        'Global': '世界',
        'Faction': '帮派',
        'People': '联系人',
        'Settings': '设置',
        'Trade': '交易',
        'Jail': '监狱',
        'Hospital': '医院',
        'Company': '公司',
        'Height': '高度',
        'Width': '宽度',
        'Jail & Hospital': '监狱和医院',
        'Traveling': '海外',
        'Competition': '活动',
        'Private': '私聊',
        'Room sound': '音效',
        'Who is allowed to initiate chat with you?': '谁可以与你发起私聊？',
        'Disabled': '关闭',
        'Enabled': '开启',
        'Flash notifier': '闪烁提示',
        'Chirp 1': '啁啾声 1',
        'Chirp 2': '啁啾声 2',
        'Chirp 3': '啁啾声 3',
        'Flash & sound': '闪烁和音效',
        'Click 1': '点击音 1',
        'Click 2': '点击音 2',
        'Data 1': '哒嗒 1',
        'Data 2': '哒嗒 2',
        'Data 3': '哒嗒 3',
        'Double 2': '',
        'Electronic 1': '',
        'Electronic 2': '',
        'Future 1': '',
        'Future 2': '',
        'Plink 1': '',
        'Plink 2': '',
        'Soft beep 1': '',
        'Soft beep 2': '',
        'Subtle': '',
        'Transmission 1': '',
        'Transmission 2': '',
        'Warble 1': '',
        'Warble 2': '',
        'Only people you know or have met': '只有你认识或遇到过的人',
        'Anyone can initiate chat with you': '任何人',
        'Recent': '最近',
        'Friends': '好友',
        'Blocked': '拉黑',
        'All': '全部',
        'Enter a name or ID to add to this list': '输入用户名或ID来添加到这个列表',
        'This list is empty.': '这个列表是空的。',
    };
    const hosDict = {
        "You take a trip down to the hospital to see who's been unlucky today.": "你来了一趟医院，看看今天是谁那么倒霉",
        "Nobody can revive you.": "现在没有玩家可以复活你",
        "Anyone can now revive you.": "现在任何玩家都能复活你",
        "Only those on your friends list & your faction members can now revive you.": "现在只有好友以及帮派成员可以复活你",
        "in Hospital": "在住院",
        "People are": "名玩家",
        "Time": "时长",
        "Level": "等级",
        "Reason": "原因",
        "Overdosed on Xanax": "吸食Xanax过量",
        "Shot while attempting to take down a president": "在试图袭击总统时受了枪伤",
        "Taken down by guards": "被保安击倒",
        "Got a nasty surprise in the post.": "收到并打开了一个伤害性包裹",
        "Dropped by Swiss Guards": "被瑞士警卫队抛下",
        "Mauled by a guard dog": "被警卫犬袭击受伤",
        "Collapsed after taking Ketamine": "服用Ketamine后昏倒",
        "Collapsed after taking PCP": "服用PCP昏倒",
        "Burned in an arson attempt": "在一次纵火案中被烧伤",
        "Fallen ill with radiation poisoning": "因辐射中毒而病倒",
        "Taken down by members of Aftermath": "被Aftermath的成员击倒了",
        "Crashed his": "出车祸并撞毁了他的",
        "Crashed her": "出车祸并撞毁了她的",
        "Taken down by members of The Black Hand": "被黑手党成员拿下",
        "Got derailed": "火车脱轨致伤",
        "Third degree burns on back from explosion": "爆炸造成的背部三度烧伤",
        "general": "被玩家 ",
        "Hit in the head by flying metal": "被飞来的金属击中头部",
        "Shot themselves in the foot": "打了自己腿一枪",
        "Hospitalized by someone": "被某人强制住院",
        "Attacked by someone": "被某人攻击",
        "Mugged by someone": "被某人抢劫",
        "Gunned down by FBI agents": "被联邦调查局特工枪击",
        "Taken down by a SWAT marksman": "被一名特警射手击倒",
        "Exploded": "被炸伤",
        "Fell from a two story building while on a hitman mission": "在执行杀手任务时从两层的建筑坠落",
        "Suffering from an acute hemolytic transfusion reaction": "患上了急性溶血性输血反应疾病",
        "Choked out by Leslie": "被Leslie掐喉",
        "Shot in the back": "背部中枪",
        "Lost to": "输给了 ",
        "Suspect of a presidential assassination": "刺杀总统的嫌疑犯",
    };
    const awDict = {
        'Honors (': '荣誉 (',
        'Medals (': '勋章 (',
        'Merits (': '天赋加点 (',
        'As you progress, you will unlock new honors. To add an Honor to your name, click the one you want.':
            '新的荣誉条将随着你的游戏进程解锁。请点击想要在你的名字背景上显示的荣誉条。',
        'As you progress, you will unlock new medals. Your medals will be pinned on your profile to show your\nprestige.':
            '新的勋章将随着你的游戏进程解锁。勋章将显示在个人资料上。',
        'You have': '你有 ',
        'merits': '天赋点',
        'merit': '天赋点',
        'medals': '勋章',
        'honors': '荣誉',
        'Available Merits:': '可用天赋点:',
        'Merits Used:': '已用天赋点:',
        "to spend on anything you would like on\nthe list below.\nYou've earned these merits by attaining":
            ' 可用于升级以下列表中的任意天赋。这些天赋点是通过 ',
        'and': ' 和 ',
        ".\nThe enhancements are incremental and will go up in cost the more you upgrade them.\nFor example, if you pay one merit to upgrade an improvement,\nnext time you want to upgrade it you will need to pay two merits, after that three etc.":
            ' 获得的。天赋升级的花费是递增的，等级越高升级需要的天赋点就越高。如果花费1天赋点来升级一个天赋，下次就需要花费2天赋点升级该天赋，之后是三个等依次类推。',
        'Awards you are about to unlock': '即将解锁的勋章',
        'Upgrade': '升级',
        'Progress': '升级进程',
        'Expand All': '展开所有',
        'Latest': '近期获得',
        'Defaults': '默认荣誉条',
        'Attacking': '攻击',
        'Camo': '迷彩',
        'Weapons': '武器',
        'Education': '教育',
        'Crimes': '犯罪',
        'Drugs': '药章',
        'Jail & Hospital': '监狱与医院',
        'Travel': '旅行',
        'Gym': '锻炼',
        'Level': '等级',
        'Competitions': '节日活动',
        'Money': '金钱',
        'Items': '物品',
        'Commitment': '足迹',
        'Casino': '赌场',
        'Missions': '任务',
        'Misc': '杂项',
        'General': '一般',
        'Rank': '阶级',
        'Networth': '身价',
        'SPEND': '升级',
        'CHANGE': '更改',
        'Cancel': '取消',
        'Are you sure you want to change your name background to this Honor?': '确定修改你的名字背景为这个荣誉吗？',

        'Nerve Bar': '犯罪N上限',
        'Critical Hit Rate': '暴击率',
        'Life Points': '血量',
        'Crime Experience': '犯罪经验',
        'Education Length': '教育时长',
        'Awareness': '感知能力',
        'Bank Interest': '银行利润',
        'Masterful Looting': '掠夺大师',
        'Stealth': '隐身',
        'Hospitalizing': '送医时长',
        'Addiction Mitigation': '毒瘾缓解',
        'Employee Effectiveness': '员工效率',
        'Brawn': '臂力',
        'Protection': '保护',
        'Sharpness': '敏锐',
        'Evasion': '回避',
        'Heavy Artillery Mastery': '重炮精通',
        'Machine Gun Mastery': '机枪精通',
        'Rifle Mastery': '步枪精通',
        'SMG Mastery': '冲锋枪精通',
        'Shotgun Mastery': '霰弹枪精通',
        'Pistol Mastery': '手枪精通',
        'Club Mastery': '冲击武器精通(Clubbing)',
        'Piercing Mastery': '穿刺武器精通(Piercing)',
        'Slashing Mastery': '切割武器精通(Slashing)',
        'Mechanical Mastery': '机械武器精通',
        'Temporary Mastery': '投掷物精通',
        'Increases maximum nerve bar by 1 point': '增加 1 点犯罪N上限',
        'Increases critical hit rate by 0.5%': '提高 0.5% 暴击率',
        'Increases maximum life by 5%': '提高 5% 血量上限',
        'Increases crime success rate': '提高犯罪成功率',
        'Decreases education course length by 2%': '降低教育课程 2% 时长',
        'Increases frequency of items found in the city': '提高城市中发现物品的频率',
        'Increases bank interest by 5%': '提高 5% 银行利息',
        'Increases money gained from mugging by 5%': '提高 5% 抢劫获得的金钱',
        'Increases ability to stealth attacks': '增加攻击后匿名的概率',
        'Increases hospitalization time by 5%': '提高被强制送往医院玩家 5% 的住院时长',
        'Reduces the negative effects of addiction by 2%': '降低 2% 毒瘾负面效果',
        'Increases employee effectiveness by +1': '增加 +1 员工效率',
        'Gives a passive bonus to strength of 3%': '获得力量 3% 被动增益',
        'Gives a passive bonus to defense of 3%': '获得防御 3% 被动增益',
        'Gives a passive bonus to speed of 3%': '获得速度 3% 被动增益',
        'Gives a passive bonus to dexterity of 3%': '获得闪避 3% 被动增益',
        'Increases proficiency with heavy artillery': '提高重炮精通',
        'Increases proficiency with machine guns': '提高机枪精通',
        'Increases proficiency with rifles': '提高步枪精通',
        'Increases proficiency with submachine guns': '提高冲锋枪精通',
        'Increases proficiency with shotguns': '提高霰弹枪精通',
        'Increases proficiency with pistols': '提高手枪精通',
        'Increases proficiency with clubbing weapons': '提高冲击武器精通',
        'Increases proficiency with piercing weapons': '提高穿刺武器精通',
        'Increases proficiency with slashing weapons': '提高切割武器精通',
        'Increases proficiency with mechanical devices': '提高切割武器精通',
        'Increases proficiency with temporary weapons': '提高投掷物精通',
        'Increases damage and accuracy of heavy artillery weapons': '提高重炮伤害与命中',
        'Increases damage and accuracy of machine gun weapons': '提高机枪伤害与命中',
        'Increases damage and accuracy of rifle weapons': '提高步枪伤害与命中',
        'Increases damage and accuracy of submachine gun weapons': '提高冲锋枪伤害与命中',
        'Increases damage and accuracy of shotgun weapons': '提高霰弹枪伤害与命中',
        'Increases damage and accuracy of pistol weapons': '提高手枪伤害与命中',
        'Increases damage and accuracy of axe & clubbing weapons': '提高斧头和冲击武器的伤害与命中',
        'Increases damage and accuracy of piercing weapons': '提高穿刺武器的伤害与命中',
        'Increases damage and accuracy of slashing weapons': '提高切割武器的伤害与命中',
        'Increases damage and accuracy of mechanical devices': '提高机械武器的伤害与命中',
        'Increases damage and accuracy of temporary weapons': '提高临时武器的伤害与命中',
        'Are you sure you want to spend': '确定要花费 ',
        'on': '在',
        'upgrade?': '升级上吗？',
        'You have upgraded this merit upgrade to the maximum already.':
            '你已将该升级升满。',
        'This upgrade will give you one extra nerve point on your maximum nerve.':
            '该升级会增加 1 犯罪N上限。',
        "This upgrade will give you an extra 0.5% chance at getting a critical hit during attacks. Critical hits are blows made on an opponent's head, throat or heart during an attack.":
            '这个升级将使你在攻击时有额外的 0.5% 几率获得暴击。暴击是指在攻击过程中击中对手的头部、喉咙或心脏。',
        "This upgrade will increase your maximum life by 5%. This upgrade works great with your defense and might keep you going a little longer during attacks.":
            '这个升级将使你的最大生命值增加 5%。这个升级对你的战斗有很大作用，可能会让你在攻击中坚持更久。',
        "This upgrade will give you a continuous boost of 3% (per upgrade) to the effect of your crime experience resulting in increased success rates.":
            '这项升级将使你在每次成功犯罪时获得的经验持续提升 3% (每次升级)，从而提高犯罪成功率。',
        "This upgrade will decrease the amount of days you have to wait to complete an education course. This upgrade will start working on the next education course you start.":
            '这项升级将减少你完成教育课程所需的等待天数。这项升级将在你的下一个教育课程中生效。',
        'This upgrade will increase the amount of items you can find in the city, however it will not necessarily increase their quality.':
            '该升级会增加你在城市中能找到的物品数量，但不一定能提高它们的质量。',
        'This upgrade will give you an increase of 5% to your investment bank interest. This upgrade will start working on your next investment.':
            '这一升级将使你的银行利息增加 5%。这项升级将在下一次银行投资中生效。',
        'This upgrade will give you a 5% boost in money that you mug from opponents. Perfect for experienced muggers, looking for some extra cash.':
            '这个升级将使你从对手那里抢来的钱增加5%。非常适合有经验的抢劫者，赚些额外的钱钱。',
        "This upgrade will make you more likely to stay stealthed when beating an opponent by increasing your stealth level by 0.2 per increment. When you're stealthed, your name will be listed as 'Someone' so your enemy will not know who hit them.":
            '这个升级将提升 0.2 隐身级别，使你在击败对手时更有可能保持隐身状态。当你处于隐身状态时，你的名字将被列为“某人”，所以你的敌人不会知道是谁攻击了他们。',
        "This upgrade will increase the amount of time you hospitalize someone by 5%. Make sure they feel the burn with 50% extra hospital time when fully upgraded.":
            '这项升级将使你增加 5% 被强制住院玩家的住院时间。完全升级后，确保他们感受到50%的额外住院时间。',
        "This upgrade will reduce the negative effects addiction causes towards your battle stats, employee effectiveness, and education / gym access.":
            '这一升级将减少毒瘾对你的战斗能力、员工效率、教育和访问健身房的负面影响。',
        "This upgrade will provide an additional minor bonus to employee effectiveness, helping you to earn more money for the company you work for.":
            '这一升级将为员工的工作效率提供额外的轻量加成，帮助你为你的公司赚更多钱。',
        "This upgrade will give you a passive bonus to your strength stat. This upgrade will not increase your actual viewable stat number, but you will notice the effects during attacks.":
            '这个升级将给你带来力量被动加成。这个升级不会增加实际可查看的战力，但你会在攻击时注意到其效果。',
        "This upgrade will give you a passive bonus to your defense stat. This upgrade will not increase your actual viewable stat number, but you will notice the effects during attacks.":
            '这个升级将给你带来防御被动加成。这个升级不会增加实际可查看的战力，但你会在攻击时注意到其效果。',
        "This upgrade will give you a passive bonus to your speed stat. This upgrade will not increase your actual viewable stat number, but you will notice the effects during attacks.":
            '这个升级将给你带来速度被动加成。这个升级不会增加实际可查看的战力，但你会在攻击时注意到其效果。',
        "This upgrade will give you a passive bonus to your dexterity stat. This upgrade will not increase your actual viewable stat number, but you will notice the effects during attacks.":
            '这个升级将给你带来闪避被动加成。这个升级不会增加实际可查看的战力，但你会在攻击时注意到其效果。',
        "This upgrade will improve the damage and accuracy of these weapons when you use them in attacks. Heavy Artillery weapons include: Flamethrower, RPG Launcher, and Type 98 Anti Tank.":
            '这种升级将提高使用这些武器进行攻击时的伤害和命中。重炮包括：火焰喷射器 (Flamethrower)、RPG发射器 (RPG Launcher)、98式反坦克 (Type 98 Anti Tank)。',
        "This upgrade will improve the damage and accuracy of these weapons when you use them in attacks. Machine Gun weapons include: M249 SAW, Rheinmetall MG 3, and Snow Cannon.":
            '这种升级将提高使用这些武器进行攻击时的伤害和命中。机枪包括：M249 SAW、Rheinmetall MG 3、Snow Cannon。',
        "This upgrade will improve the damage and accuracy of these weapons when you use them in attacks. Rifle weapons include: AK-47, Enfield SA-80, and ArmaLite M-15A4.":
            '这种升级将提高使用这些武器进行攻击时的伤害和命中。步枪包括：AK-47、Enfield SA-80、ArmaLite M-15A4。',
        "This upgrade will improve the damage and accuracy of these weapons when you use them in attacks. SMG weapons include: P90, MP5 Navy and 9mm Uzi.":
            '这种升级将提高使用这些武器进行攻击时的伤害和命中。冲锋枪包括：P90、MP5 Navy、9mm Uzi。',
        "This upgrade will improve the damage and accuracy of these weapons when you use them in attacks. Shotgun weapons include: Jackhammer, Mag 7, and Ithaca 37.":
            '这种升级将提高使用这些武器进行攻击时的伤害和命中。霰弹枪包括：Jackhammer、Mag 7、Ithaca 37。',
        "This upgrade will improve the damage and accuracy of these weapons when you use them in attacks. Pistol weapons include: Glock 17, Desert Eagle, and Flare Gun.":
            '这种升级将提高使用这些武器进行攻击时的伤害和命中。手枪包括：格洛克 (Glock 17)、沙漠之鹰 (Desert Eagle)、Flare Gun。',
        "This upgrade will improve the damage and accuracy of these weapons when you use them in attacks. Clubbing weapons include: Baseball Bat, Frying Pan, and Axe (Melee weapons that usually just cause a heavy blow).":
            '这种升级将提高使用这些武器进行攻击时的伤害和命中。冲击武器包括：棒球棒 (Baseball Bat)、平底锅 (Frying Pan)、斧头 (Axe) (造成沉重冲击的近战武器)。',
        "This upgrade will improve the damage and accuracy of these weapons when you use them in attacks. Piercing weapons include: Pen Knife and Dagger (Melee weapons that you stab with to pierce the skin).":
            '这种升级将提高使用这些武器进行攻击时的伤害和命中。穿刺武器包括：折叠刀 (Pen Knife)、匕首 (Dagger) (刺穿皮肤的近战武器)。',
        "This upgrade will improve the damage and accuracy of these weapons when you use them in attacks. Slashing weapons include: Samurai Sword and Scimitar (Swords and other weapons that you would slash with).":
            '这种升级将提高使用这些武器进行攻击时的伤害和命中。切割武器包括：武士刀 (Samurai Sword)、弯刀 (Scimitar)(用来劈砍的剑或其他近战武器)。',
        "This upgrade will improve the damage and accuracy of these weapons when you use them in attacks. Mechanical devices include: Chainsaw and Taser (Weapons with an electronic or engineered system).":
            '这种升级将提高使用这些武器进行攻击时的伤害和命中。机械武器包括：电锯 (Chainsaw)、电击枪 (Taser) (带有电子或工程系统的近战武器)。',
        "This upgrade will improve the damage and accuracy of these weapons when you use them in attacks. Temporary weapons include: Grenade, Ninja Star, and Molotov Cocktail (Temporary weapons that cause damage).":
            '这种升级将提高使用这些武器进行攻击时的伤害和命中。临时武器包括：手雷 (Grenade)、忍者飞镖 (Ninja Star)、鸡尾酒 (Molotov Cocktail) (造成伤害的临时武器)。',

        "Go to hospital 250 times (Very Common)": '住院 250 次 (非常常见)',
    };
    const playerTitleList = {
        '_wiki_url_': 'https://wiki.torn.com/wiki/Title',
        'Accomplice': '',
        'Addict': '',
        'Alcoholic': '',
        'Antagonist': '',
        'Bondsman': '',
        'Booster': '',
        'Boxer': '',
        'Buster': '',
        'Coward': '',
        'Citizen': '',
        'Damage Dealer': '',
        'Deserter': '',
        'Druggy': '',
        'Egotist': '',
        'Felon': '',
        'Healer': '',
        'Hitman': '',
        'Hoarder': '',
        'Importer': '',
        'Intimidator': '',
        'Investor': '',
        'Jobsworth': '',
        'Killer': '',
        'Loser': '',
        'Marksman': '',
        'Medalist': '',
        'Mercenary': '',
        'Merchant': '',
        'Mobster': '',
        'Newcomer': '',
        'Nudist': '',
        'One Hit Killer': '',
        'Outcast': '',
        'Punchbag': '',
        'Samaritan': '',
        'Sage': '',
        'Scavenger': '',
        'Silent Killer': '',
        'Slayer': '',
        'Soldier': '',
        'Socialite': '',
        'Tank': '',
        'Thief': '',
        'Tourist': '',
        'Trader': '',
        'Tycoon': '',
    };
    const ocList = {
        'blackmail someone': '敲诈某人',
        'blackmailed someone': '敲诈某人',
        'kidnap someone': '绑架某人',
        'kidnapped someone': '绑架某人',
        'make a bomb threat': '炸弹袭击',
        'made a bomb threat': '炸弹袭击',
        // 'planned robbery':'有计划的抢劫',
        // 'rob a money train':'抢劫运钞车',
        // 'take over a cruise liner':'攻占一艘游轮',
        // 'hijack a plane':'劫持飞机',
        // 'political assassination':'政治暗杀 (PA)',
    };
    const profileDict = {
        'User Information': '用户信息',
        'Actions': '动作',
        'Status': '状态',
        'Medals': '奖章',
        'Basic Information': '基本信息',
        'Personal Information': '个人信息',
        'Competition Status': '活动状态',
        'Level': '等级',
        'Rank': '阶级',
        'Age': '年龄',
        'What would you like to do?': '你想做什么？',
        'Give some money to {$}': '给予 {$} 一些钱',
        'Initiate a chat with {$}': '与 {$} 发起聊天',
        'Initiate a trade with {$}': '与 {$} 发起交易',
        'Send {$} a message': '给 {$} 发送消息',
        'Add {$} to your enemy list': '添加 {$} 到你的敌人列表',
        'Add {$} to your friend list': '添加 {$} 到你的朋友列表',
        'View {$}\'s personal statistics': '查看 {$} 的个人统计数据',
        '{$} is currently traveling': '{$} 目前正在飞行',
        '{$} has no items in their bazaar': '{$} 的集市上没有物品',
        'View {$}\'s bazaar': '{$} 的集市上没有物品',
        '{$} is currently in hospital': '{$} 在住院中',
        'Place a bounty on {$}': '悬赏 {$}',
        'Report {$} to staff': '向 Torn City 工作人员举报 {$}',
        'Attack {$}': '攻击 {$}',
        '{$} has not been online in the last 6 hours': '{$} 在过去6小时内没有上线',
        '{$} is on your friend list': '{$} 在你的朋友列表中',
        '{$} is on your enemy list': '{$} 在你的敌人列表中',
        'You do not have enough energy to attack {$}': '你没有足够的能量E来攻击 {$}',
        'Description': '描述',
        '{$} characters left': '剩余 {$} 可用字符',
        'ADD': '添加',
        'ENEMY': '敌人',
        'FRIEND': '朋友',
        'Cancel': '取消',
        'You are currently traveling': '目前你还在飞行中',
        'You are not in Torn': '你不在城内',
        'You don\'t own a Laptop!': '你没有笔记本电脑',
        'View {$}\'s display cabinet': '查看 {$} 的展示柜',
        'Name': '名称',
        'Role': '角色',
        'Faction': '帮派',
        'Job': '工作',
        'Life': '生命值',
        'Property': '房产',
        'Marital status': '婚姻状态',
        'Awards': '奖章',
        'Friends': '朋友',
        'Enemies': '敌人',
        'Forum posts': '论坛帖子',
        'Last action': '上次动作',
        'Civilian': '平民',
        'Committee': '委员会成员',
        'Admin': '管理员',
        'Tester': '测试人员',
        'Officer': '职员',
        'Moderator': '',
        'Helper': '',
        '(With': '(与',
        ')': '一起)',
        'Spouse': '配偶',
        'Married to': '已婚',
        'Now': '现在',
        'N/A': '无',
        'None': '无',
        'Single': '单身',
        'Real name': '真实姓名',
        'Country': '国家',
        'City': '城市',
        'Grocer': '杂货',
        'Education': '教育',
        'Casino': '赌场',
        'Medical': '医疗',
        'Army': '军队',
        'Law': '法律',
        'There is no active competition': '现在没有活动',
        "doesn't wish to share": '不希望公开',
    };
    const sendCashDict = {
        'Some players may be out to part you from your money, using any means necessary. Use the secure trade feature if you want to protect an exchange and check the contents very carefully.':
            '有些玩家可能会利用任何必要的手段来骗走你的钱。如果你想保护交易，请使用更安全的“交易”功能，并仔细检查交易的内容。',
        'Do not fall for scams!': '切勿上当受骗！',
        'For more info please visit here.': '欲了解更多信息，请点击访问。',
        'SEND': '发送',
        'Cancel': '取消',
        'Message (optional, up to 200 characters)': '附带信息 (可选，最多200字符)',
        'Click here to add the maximum amount, or use shortcuts like <br /> 5k, 1.5m, max, half, quarter, 1/2, 1/3, 1/4, 25%':
            '点此添加最大额度，或输入快捷选项如 <br /> 5k, 1.5m, max, half, quarter, 1/2, 1/3, 1/4, 25%',
    };
    const stockDict = {
        'Stock': '股票',
        'Name': '名称',
        'Price': '单价',
        '1h': '1时',
        '24h': '24时',
        '7d': '7天',
        '1m': '1月',
        '1y': '1年',
        'Live': '实时',
        'live': '实时',
        'Last hour': '过去一时',
        'Last day': '过去一天',
        'Last week': '过去一周',
        'Last month': '过去一月',
        'Last year': '过去一年',
        'All time': '有史以来',
        'Owned': '持有',
        'Dividend': '分红',
        'West Side University': '西城大学',
        'Insured On Us': '托恩人保',
        'Torn City Investments': 'Torn City 投资',
        'Torn & Shanghai Banking': 'Torn 和上海银行',
        'Symbiotic Ltd.': '共生公司',
        'Crude & Co': '原油公司',
        'Feathery Hotels Group': '飞亚达酒店集团',
        'Mc Smoogle Corp': '麦斯莫格公司',
        'Wind Lines Travel': '风线旅行',
        'Performance Ribaldry': '低俗演绎',
        'Syscore MFG': '系统核心 MFG',
        'Evil Ducks Candy Corp': '邪恶鸭糖果公司',
        'Munster Beverage Corp.': '明斯特饮料公司',
        'Torn City Clothing': 'Torn City 服饰',
        'Lucky Shots Casino': '幸运赌场',
        'TC Media Productions': 'TC 媒体制作公司',
        'International School TC': 'TC 国际学校',
        'Big Al\'s Gun Shop': '大艾尔枪店',
        'Torn City Health Service': 'TC 健康服务中心',
        'Alcoholics Synonymous': '酒瘾相似',
        'Torn City Motors': 'TC 汽车',
        'Legal Authorities Group': '权威法律集团',
        'The Torn City Times': '托恩时代',
        'Grain': '谷物',
        'Eaglewood Mercenary': '鹰林佣兵',
        'Home Retail Group': '家庭零售集团',
        'Empty Lunchbox Traders': '空饭盒贸易商',
        'Messaging Inc.': '信息公司',
        'TC Music Industries': 'TC 音乐工业公司',
        'I Industries Ltd.': '一号工业有限公司',
        'Tell Group Plc.': '讲述集团',
        'Yazoo': '',
        '1x Random Property': '1个随机房产',
        '10% Bank Interest Bonus': '10% 银行利润增益',
        'a 10% Bank Interest Bonus': '10% 银行利润增益',
        '100 Energy': '100 能量E',
        'Private Jet Access': '解锁私人飞机',
        '1000 Happiness': '1000 快乐',
        'Advanced Firewall': '高级防火墙',
        'an Advanced Firewall': '高级防火墙',
        'Company Sales Boost': '提升公司销量',
        'a Company Sales Boost': '提升公司销量',
        'Free Education Courses': '免费教育课程',
        'a Free Education Courses': '免费教育课程',
        '10% Racing Skill Boost': '提升 10% 赛车技能增长',
        '10% Home Upgrade Discount': '10% 房屋设施费用折扣',
        'Free Classified Advertising': '免费分类广告',
        '50% Coding Time Reduction': '缩减 50% 编程时间',
        'Company Advertising Boost': '公司广告增益',
        'a Company Advertising Boost': '公司广告增益',
        '10% Course Time Reduction': '缩减 10% 教育时间',
        'a 10% Education Course Time Reduction': '缩减 10% 教育时间',
        'Free Banner Advertising': '免费横幅广告',
        'a Free Banner Advertising': '免费横幅广告',
        'Inactive': '未激活',
        'Ready for collection': '分红可领取',
        'Benefit active': '分红已激活',
        'provides': '(满足分红条件时)将提供',
        'Every': '在每',
        'when holding at least': '，当你至少持有',
        'shares currently valued at': '股时，目前总价：',
        'days': '日后',
        'Buy': '再购买',
        'more shares for': '股，目前总价',
        'to unlock the': '来解锁',
        'increment': '增益',
        'After': '在',
        'in': '在',
        'You currently have': '你已获得',
        'benefit': '增益',
        'You cannot buy shares while traveling': '你在旅行时无法购买',
        'You cannot sell shares while traveling': '你在旅行时无法出售',
        'How many shares would you like to': '多少股你想',
        'You will be able to collect': '你将可以领取',
        'buy': '买入',
        'sell': '卖出',
        'will buy you': '可以买',
        'shares': '股',
        'share': '股',
        'Your': '你持有的',
        'shares are worth': '股目前值',
        'Do you want to': '你想',
        'shares at': '股',
        'each?': '单价？',
        'For a total of': '总价：',
        'Back': '返回',
        'Confirm Transaction': '确认交易',
        'Price updating...': '价格更新中',
        'after the': '已扣除',
        'fee of': '手续费：',
        'You have': '你已',
        'sold': '卖出',
        'bought': '购入',
        'each': '单价',
        'Buy date': '购入日期',
        'Shares': '购入数量',
        'Value': '购入总价',
        'Bought': '购入单价',
        'Current': '目前单价',
        'Change': '变化',
        'Profit': '利润',
        'View': '查看',
        'Sell': '售出',
        'Merge': '合并',
        'Current Price:': '当前股价：',
        'change:': '变化：',
        'start:': '开始：',
        'end:': '结束：',
        'high:': '最高：',
        'low:': '最低：',
    };
    const itemPageDict = {
        'Primary': '主手',
        'Secondary': '副手',
        'Melee': '近战',
        'Temporary': '投掷',
        'Defensive': '防御',
        'Armor': '防御',
        'Clothing': '衣物',
        'Jewelry': '珠宝',
        'Your items -': '你的物品 - ',
        'All': '全部',
        'Medical': '医疗',
        'Drugs': '药物',
        'Energy Drink': '能量饮料',
        'Alcohol': '酒类',
        'Candy': '糖果',
        'Boosters': '增益道具',
        'Enhancer': '增幅器',
        'Supply Packs': '补给包',
        'Electronics': '电器',
        'Flowers': '花',
        'Plushies': '玩偶',
        'Cars': '车辆',
        'Viruses': '病毒',
        'Miscellaneous': '杂项',
        'Artifacts': '文物',
        'Books': '书',
        'Special': '特殊',
        'Collectibles': '可收集物',
        'Donate': '捐献',
        'Drink': '喝下',
        'Eat': '吃下',
        'Enlist': '车辆注册',
        'Equip': '装备',
        'Listen': '听',
        'Open': '打开',
        'Propose': '求婚',
        'Return': '退还',
        'Sell': '卖出',
        'Send': '发送',
        'Take': '使用',
        'Trash': '丢弃',
        'Turn on': '开启',
        'Unequip': '脱下',
        'Use': '使用',
        'Donate this Item': '捐献该物品',
        'Equip this Item': '装备该物品',
        'Sell this Item': '卖出该物品',
        'Send this Item': '发送该物品',
        'Trash this Item': '丢弃该物品',
        'Unequip this Item': '脱下该物品',
        'Return to Faction': '退还帮派',
        'Buy:': '买价:',
        'Sell:': '卖价:',
        'Value:': '价值:',
        'Accuracy:': '命中:',
        'Damage:': '伤害:',
        'Circ:': '流通:',
        'Quality:': '品质:',
        'Stealth:': '隐匿:',
        'Caliber:': '口径:',
        'Ammo:': '弹药:',
        'Bonus:': '额外:',
        'Masked:': '面具:',
        'Coverage:': '覆盖率:',
        'Armor:': '护甲:',
        'Top Speed:': '最高速度:',
        'Dirt:': '泥路:',
        'Tarmac:': '柏油路:',
        'Acceleration:': '加速:',
        'Safety:': '安全:',
        'Braking:': '制动:',
        'Handling:': '操控:',
        'Rate of Fire:': '开火率:',
        'Read:': '已读:',
    };
    const itemNameDict = {
        "Ammunition Pack": '弹药包',
        "Clothing Cache": '服饰箱',
        "First Aid Kit": '急救包',
        "Small First Aid Kit": '小型急救包',
        "Empty Blood Bag": '空血包',
        "Blood Bag : A-": 'A-血包',
        "Blood Bag : A+": 'A+血包',
        "Blood Bag : AB+": 'AB+血包',
        "Blood Bag : AB-": 'AB-血包',
        "Blood Bag : O+": 'O+血包',
        "Blood Bag : O-": 'O-血包',
        "Blood Bag : B-": 'B-血包',
        "Blood Bag : B+": 'B+血包',
        "Blood Bag : Irradiated": '辐射血包',
        "Morphine": '吗啡',
        "Neumune Tablet": '雄烯二醇抗辐射药品',
        "Antidote": '抗生素',
        "Felovax": '妙三多',
        "Zylkene": '法国威隆苏劲猫犬降压药',
        "Cake Frosting": '蛋糕糖霜',
        "Lock Picking Kit": '开锁器套装',
        "Special Fruitcake": '特别的水果蛋糕',
        // 主武器
        "Sawed-Off Shotgun": '截短型霰弹枪',
        "Thompson": '汤普森冲锋枪',
        "TMP": '施泰尔TMP冲锋枪',
        "Benelli M1 Tactical": '贝内利M1战术霰弹枪',
        "MP5k": 'MP5k',
        "MP5 Navy": 'MP5海军型',
        "Skorpion": '蝎式冲锋枪',
        "MP 40": 'MP40',
        "SKS Carbine": 'SKS卡宾枪',
        "Vektor CR-21": '维克托CR-21',
        "P90": 'P90',
        "Ithaca 37": '伊萨卡37泵动式霰弹枪',
        "XM8 Rifle": 'XM8突击步枪',
        "AK74U": 'AK74U短管突击步枪',
        "AK-47": 'AK-47',
        "Bushmaster Carbon 15": '碳15短管步枪',
        "M4A1 Colt Carbine": 'M4A1卡宾枪',
        "Benelli M4 Super": '贝内利M4 Super半自动霰弹枪',
        "Heckler & Koch SL8": 'HK SL8半自动步枪',
        "M16 A2 Rifle": 'M16A2步枪',
        "Mag 7": 'Mag 7',
        "Steyr AUG": '施泰尔AUG突击步枪',
        "SIG 550": 'SIG 550突击步枪',
        "Enfield SA-80": '恩菲尔德SA80',
        "Tavor TAR-21": '21世纪他泊山突击步枪TAR-21',
        "9mm Uzi": '9mm Uzi',
        "M249 SAW": 'M249班用自动武器',
        "Minigun": '加特林式旋管机枪',
        "Jackhammer": '转轮式自动霰弹枪',
        "SIG 552": 'SIG 552卡宾枪',
        "ArmaLite M-15A4": '阿玛莱特M15A4',
        "Nock Gun": '诺克枪',
        "Snow Cannon": '雪球加农炮',
        "Rheinmetall MG 3": 'MG3通用机枪',
        "Gold Plated AK-47": '黄金AK47',
        // 副武器
        "Lorcin 380": '洛辛380',
        "Flare Gun": '信号枪',
        "Glock 17": '格洛克17',
        "Taurus": '金牛座',
        "Springfield 1911": 'M1911',
        "Raven MP25": '',
        "Ruger 22/45": '',
        "Crossbow": '十字弓',
        "Slingshot": '弹弓',
        "S&W Revolver": 'S&W左轮手枪',
        "Beretta M9": '巴雷特M9',
        "USP": 'USP',
        "Beretta 92FS": '巴雷特92FS',
        "Luger": '鲁格手枪',
        "Fiveseven": 'FN手枪',
        "Blowgun": '吹箭',
        "Blunderbuss": '手铳',
        "Magnum": '马格南左轮手枪',
        "S&W M29": '',
        "Desert Eagle": '沙漠之鹰',
        "BT MP9": '',
        "Cobra Derringer": '',
        "Qsz-92": '',
        "Harpoon": '鱼叉',
        "Flamethrower": '喷火器',
        "Dual 92G Berettas": '',
        "Type 98 Anti Tank": '98式反坦克炮',
        "Beretta Pico": '',
        "Homemade Pocket Shotgun": '自制袖珍霰弹枪',
        "RPG Launcher": 'RPG发射器',
        // 近战武器
        "Hammer": '锤子',
        "Lead Pipe": '铅管',
        "Baseball Bat": '棒球棒',
        "Crowbar": '撬棍',
        "Bo Staff": '玻之武杖',
        "Knuckle Dusters": '指虎',
        "Pen Knife": '笔刀',
        "Leather Bullwhip": '皮牛鞭',
        "Kitchen Knife": '厨房刀',
        "Frying Pan": '平底锅',
        "Sai": '铁尺',
        "Plastic Sword": '塑料剑',
        "Butterfly Knife": '蝴蝶刀',
        "Dagger": '匕首',
        "Swiss Army Knife": '瑞士军刀',
        "Chain Whip": '链条鞭',
        "Axe": '斧头',
        "Wooden Nunchakus": '木制双截棍',
        "Taser": '电击枪',
        "Ninja Claws": '忍者之爪',
        "Scimitar": '弯刀',
        "Chainsaw": '电锯',
        "Cricket Bat": '板球棒',
        "Ice Pick": '冰镐',
        "Katana": '军官武士刀',
        "Spear": '矛',
        "Kama": '镰刀',
        "Twin Tiger Hooks": '虎头双钩',
        "Samurai Sword": '武士刀',
        "Claymore Sword": '苏格兰阔刃大斩剑',
        "Rusty Sword": '锈剑',
        "Macana": '美洲黑曜石匕首',
        "Kodachi": '太刀',
        "Wushu Double Axes": '武术双斧',
        "Guandao": '关刀',
        "Metal Nunchakus": '金属双截棍',
        "Pillow": '枕头',
        "Diamond Icicle": '钻石冰锥',
        "Diamond Bladed Knife": '钻石刀',
        "Pair of Ice Skates": '成对滑冰鞋',
        "Fine Chisel": '细凿',
        "Flail": '连枷',
        "Ivory Walking Cane": '象牙手杖',
        "Pair of High Heels": '一双高跟鞋',
        "Madball": '台球',
        "Yasukuni Sword": '战犯之剑',
        "Naval Cutlass": '海军弯刀',
        "Meat Hook": '肉钩',
        "Petrified Humerus": '石化肱骨',
        "Blood Spattered Sickle": '溅血之镰',
        "Cleaver": '劈肉刀',
        "Golden Broomstick": '黄金扫帚',
        "Riding Crop": '马鞭',
        "Devil's Pitchfork": '恶魔之叉',
        "Dual Hammers": '双锤',
        "Dual Axes": '双斧',
        "Dual Scimitars": '双持弯刀',
        "Dual Samurai Swords": '双武士刀',
        "Sledgehammer": '巨锤',
        "Bread Knife": '面包刀',
        "Poison Umbrella": '毒伞',
        // 防具
        "Leather Boots": '皮靴',
        "Leather Gloves": '皮手套',
        "Leather Helmet": '皮制头盔',
        "Leather Pants": '皮裤',
        "Leather Vest": '皮背心',
        "Chain Mail": '锁子甲',
        "Flak Jacket": '防弹夹克',
        "Police Vest": '警察背心',
        "Hiking Boots": '登山靴',
        "Construction Helmet": '建筑头盔',
        "Bulletproof Vest": '防弹背心',
        "Full Body Armor": '全身甲',
        "Safety Boots": '安全靴',
        "WWII Helmet": '二战头盔',
        "Kevlar Gloves": '凯夫拉手套',
        "Outer Tactical Vest": '外用战术背心',
        "Combat Gloves": '战斗手套',
        "Combat Boots": '战斗靴',
        "Combat Pants": '战斗裤',
        "Combat Helmet": '战斗头盔',
        "Combat Vest": '战斗背心',
        "Liquid Body Armor": '液体防弹衣',
        "Flexible Body Armor": '弹性防弹衣',
        "Medieval Helmet": '中世纪头盔',
        "Motorcycle Helmet": '摩托车头盔',
        "Welding Helmet": '电焊头盔',
        "Hazmat Suit": '危险品防护服',
        // 投掷武器
        "Brick": '砖头',
        "Ninja Star": '忍者之星',
        "Fireworks": '烟花',
        "Claymore Mine": '阔刀地雷',
        "Stick Grenade": '木柄手榴弹',
        "Snowball": '雪球',
        "HEG": '高爆手雷',
        "Grenade": '手雷',
        "Flash Grenade": '闪光弹',
        "Pepper Spray": '辣椒喷雾',
        "Tear Gas": '催泪弹',
        "Trout": '鳟鱼',
        "Throwing Knife": '飞刀',
        "Molotov Cocktail": '莫洛托夫鸡尾酒',
        "Smoke Grenade": '烟雾弹',
        "Melatonin": '褪黑素',
        "Tyrosine": '酪氨酸',
        "Epinephrine": '肾上腺素',
        "Sand": '沙',
        "Serotonin": '血清素',
        "Nail Bomb": '钉子炸弹',
        "Concussion Grenade": '震撼弹',
        "Book": '书',
        // 能饮
        "Can of Goose Juice": '鹅汁',
        "Can of Damp Valley": '湿谷',
        "Can of Crocozade": '鳄鱼',
        "Can of Santa Shooters": '圣诞射手',
        "Can of Munster": '魔瓜',
        "Can of Rockstar Rudolph": '摇滚明星',
        "Can of Red Cow": '红牛',
        "Can of X-MASS": 'XS',
        "Can of Taurine Elite": '精英牛磺酸',
        // 糖
        "Bag of Bon Bons": '一袋糖果',
        "Box of Extra Strong Mints": '一盒特浓薄荷糖',
        "Bag of Chocolate Kisses": '一袋巧克力之吻',
        "Box of Sweet Hearts": '一盒甜蜜的心',
        "Box of Chocolate Bars": '一盒巧克力棒',
        "Lollipop": '棒棒糖',
        "Box of Bon Bons": '一盒糖果',
        "Big Box of Chocolate Bars": '一大盒巧克力棒',
        "Bag of Candy Kisses": '一袋糖果之吻',
        "Bag of Tootsie Rolls": '一袋图罗软糖',
        "Bag of Bloody Eyeballs": '一袋血腥眼球',
        "Bag of Chocolate Truffles": '一袋巧克力松露',
        "Bag of Reindeer Droppings": '一袋驯鹿粪便',
        "Red Easter Egg": '红复活节蛋',
        "Yellow Easter Egg": '黄复活节蛋',
        "Blue Easter Egg": '蓝复活节蛋',
        "Pink Easter Egg": '粉复活节蛋',
        "Orange Easter Egg": '橙复活节蛋',
        "Black Easter Egg": '黑复活节蛋',
        "Green Easter Egg": '绿复活节蛋',
        "Brown Easter Egg": '棕复活节蛋',
        "Pixie Sticks": '小精灵棒',
        "Bag of Sherbet": '一袋雪糕',
        "Jawbreaker": '',
        "Bag of Humbugs": '',
        "Purple Easter Egg": '紫复活节蛋',
        "White Easter Egg": '白复活节蛋',
        "Birthday Cupcake": '生日纸杯蛋糕',
        "Gold Easter Egg": '金复活节蛋',
        // drugs
        "Shrooms": '魔幻蘑菇',
        "LSD": '兴奋剂',
        "Ketamine": '凯粉',
        "Ecstasy": '摇头丸',
        "PCP": '天使尘埃',
        "Speed": '病毒',
        "Xanax": 'XAN',
        "Love Juice": '爱情果汁',
        "Cannabis": '大麻',
        "Opium": '罂粟',
        "Vicodin": '维柯丁',
        // 增幅器
        "Heavy Duty Padlock": '重型挂锁',
        "High-Speed Drive": '高速硬盘',
        "Tracking Device": '追踪设备',
        "Tumble Dryer": '烘干机',
        "Duct Tape": '胶带',
        "Chloroform": '氯仿',
        "Glasses": '眼镜',
        "Fanny Pack": '腰包',
        "Slim Crowbar": '细撬棍',
        "Advanced Driving Manual": '高级驾驶手册',
        "Cut-Throat Razor": '割喉剃刀',
        "Wireless Dongle": '无线加密狗',
        "Screwdriver": '螺丝刀',
        "Ergonomic Keyboard": '人体工学键盘',
        "Mountain Bike": '山地车',
        "Balaclava": '巴拉克拉瓦头套',
        "Small Suitcase": '小手提箱',
        "Medium Suitcase": '中手提箱',
        "Rosary Beads": '念珠',
        "Large Suitcase": '大手提箱',
        "Wind Proof Lighter": '防风打火机',
        // 酒
        "Bottle of Beer": '瓶装啤酒',
        "Bottle of Champagne": '瓶装香槟',
        "Bottle of Tequila": '瓶装龙舌兰酒',
        "Bottle of Sake": '瓶装清酒',
        "Bottle of Kandy Kane": '',
        "Bottle of Pumpkin Brew": '瓶装南瓜啤酒',
        "Bottle of Wicked Witch": '邪恶女巫蛙腿酒',
        "Bottle of Minty Mayhem": '',
        "Bottle of Christmas Cocktail": '圣诞鸡尾酒',
        "Bottle of Mistletoe Madness": '槲寄生疯狂',
        "Bottle of Stinky Swamp Punch": '',
        "Bottle of Moonshine": '瓶装私酒',
        "Bottle of Green Stout": '瓶装绿色世涛',
        "Bottle of Christmas Spirit": '',
        "Glass of Beer": '一杯扎啤',
        // 其他增益道具other booster
        "Lawyer Business Card": '律师卡(黑卡)',
        "Erotic DVD": '瑟琴DVD',
        "Gift Card": '礼品卡',
        "Book of Carols": '颂歌之书',
        "Feathery Hotel Coupon": 'FHC金卡',
        "Skateboard": '速度SE 滑板',
        "Boxing Gloves": '防御SE 拳击手套',
        "Dumbbells": '力量SE 哑铃',
        "Parachute": '闪避SE 降落伞',
        // 电器
        "Pack of Music CDs": '',
        "Pack of Blank CDs : 100": '',
        "RS232 Cable": '',
        "Hard Drive": '',
        "MP3 Player": '',
        "Personal Computer": '',
        "CD Player": '',
        "DVD Player": '',
        "Television": '',
        "Game Console": '',
        "Microwave": '',
        "Laptop": '',
        // 珠宝
        "Gold Ring": '金戒指',
        "Plain Silver Ring": '纯银戒指',
        "Sapphire Ring": '蓝宝石戒指',
        "Plastic Watch": '塑料手表',
        "Gold Necklace": '金项链',
        "Silver Necklace": '银项链',
        "Gold Watch": '金表',
        "Diamond Ring": '钻戒',
        "Stainless Steel Watch": '不锈钢手表',
        "Pearl Necklace": '珍珠项链',
        "Cocktail Ring": '鸡尾酒会戒指',
        "Crystal Bracelet": '水晶手链',
        "Statement Necklace": '宣言项链',
        "Gold Chain": '金链子',
        // 病毒
        "Simple Virus": '简单病毒',
        "Tunneling Virus": '隧道病毒',
        "Polymorphic Virus": '多态病毒',
        "Firewalk Virus": '火行病毒',
        "Armored Virus": '加壳病毒',
        "Stealth Virus": '隐形病毒',
        // 花
        "Bunch of Flowers": '花束',
        "Single Red Rose": '单支红玫瑰',
        "Bunch of Black Roses": '黑玫瑰束',
        "Dozen Roses": '一打玫瑰',
        "Dahlia": '大丽花',
        "Crocus": '番红花',
        "Banana Orchid": '香蕉兰花',
        "Orchid": '兰花',
        "Edelweiss": '雪绒花',
        "Ceibo Flower": '木棉花',
        "Heather": '帚石楠',
        "African Violet": '非洲紫罗兰',
        "Cherry Blossom": '樱花',
        "Peony": '牡丹花',
        "Tribulus Omanense": '蒺藜花',
        // 补给箱
        "Box of Medical Supplies": '医疗补给包',
        "Lottery Voucher": '彩票券',
        "Box of Grenades": '手雷箱',
        "Six Pack of Alcohol": '6瓶装酒箱',
        "Denim Cache": '牛仔补给箱',
        "Drug Pack": '小DP 药dú品包',
        "Keg of Beer": '桶装啤酒',
        "Elderly Cache": '中年衣服补给箱',
        "Cutesy Cache": '可爱衣服补给箱',
        "Six Pack of Energy Drink": '6瓶装饮料箱',
        "Gentleman Cache": '绅士衣服补给箱',
        "Wannabe Cache": '潮流衣服补给箱',
        "Elegant Cache": '优雅衣服补给箱',
        "Naughty Cache": '调皮衣服补给箱',
        "Goodie Bag": '礼品袋',
        "Anniversary Present": '周年纪念礼物',
        "Parcel": '包裹',
        // 可收集物
        "Broken Bauble": '',
        "Bronze Ribbon": '',
        "Silver Ribbon": '',
        "Coin : Dump": '',
        "Coin : Church": '',
        "Santa's Elf '09": '',
        "Metal Dog Tag": '',
        "Coin : Hospital": '',
        "Birthday Cake '05": '',
        "Bunch of Balloons '05": '',
        "Jack-O-Lantern '05": '',
        "Coin : Race Track": '',
        "Coin : Casino": '',
        "Coin : Estate Agents": '',
        "Coin : Travel Agency": '',
        "Coin : Education": '',
        "Coin : Museum": '',
        "Coin : Drugs": '',
        "Coin : Auction House": '',
        "Coin : Stock Exchange": '',
        "Coin : Companies": '',
        "Poker Chip": '',
        "Coin : Factions": '',
        "Voodoo Doll": '',
        "Rabbit Foot": '',
        "Gold Ribbon": '',
        "Coin : Jail": '',
        "Santa's List '17": '',
        "Snowflake '05": '',
        "Cheesus '18": '',
        "Bronze Microphone": '',
        "Paper Bag": '',
        "Toast Jesus '18": '',
        "Silver Dog Tag": '',
        "Christmas Tree '05": '',
        "Bronze Dog Tag": '',
        "Bronze Paint Brush": '',
        "10 Ton Pacifier": '',
        "Single White Rose": '',
        "Chocolate Egg '05": '',
        "Annoying Man": '',
        "Scammer in the Slammer '18": '',
        "Gold Microphone": '',
        "Amazon Doll": '',
        "Soapbox": '',
        "Gold Paint Brush": '',
        "Dollar Bill Collectible": '',
        "Octopus Toy": '',
        "Gold Dog Tag": '',
        "Crazy Cow": '',
        "Citrus Squeezer": '',
        "Strife Clown": '',
        "Evil Doll": '',
        "Blow-Up Doll": '',
        "Backstage Pass": '',
        "Karate Man": '',
        "YouYou Yo Yo": '',
        "Flea Collar": '',
        "Ms Torn Crown": '',
        "Kevlar Helmet": '',
        "Cursed Moon Pendant": '',
        "Mr Torn Crown": '',
        "Mr Brownstone Doll": '',
        "Burmese Flag": '',
        "Chocobo Flute": '',
        "Skeleton Key": '',
        "Yoda Figurine": '',
        "Barbie Doll": '',
        "China Tea Set": '',
        "Dreamcatcher": '',
        "Non-Anon Doll": '',
        "Christmas Card '09": '',
        "Christmas Stocking '09": '',
        "Jester's Cap": '',
        "Official Ninja Kit": '',
        "Silver Paint Brush": '',
        // 衣服
        "Tank Top": '',
        "Jacket": '夹克',
        "Trainers": '',
        "Bandana": '',
        "Mediocre T-Shirt": '普通的T恤',
        "Sports Shades": '',
        "Diving Gloves": '',
        "Proda Sunglasses": '',
        "Speedo": '',
        "Flippers": '',
        "Kabuki Mask": '',
        "Sweater": '',
        "Snorkel": '',
        "Bikini": '比基尼',
        "Wetsuit": '',
        "Mountie Hat": '',
        "Exotic Gentleman Mask": '',
        "Young Lady Mask": '年轻女士面具',
        "Moustache Man Mask": '',
        "Old Lady Mask": '老妇人面具',
        "Nun Mask": '',
        "Scarred Man Mask": '刀疤男面具',
        "Ginger Kid Mask": '',
        "Psycho Clown Mask": '',
        "Trench Coat": '',
        "Festive Socks": '',
        "Coconut Bra": '椰壳文胸',
        "Badge : 15th Anniversary": '',
        "Paper Crown : Red": '纸皇冠：红色',
        "Paper Crown : Blue": '纸皇冠：蓝色',
        "Paper Crown : Green": '纸皇冠：绿色',
        "Paper Crown : Yellow": '纸皇冠：黄色',
        "Party Hat '19": '',
        "String Vest": '',
        "Santa Gloves": '',
        "Classic Fedora": '',
        "Sweatpants": '',
        "Santa Trousers": '',
        "Pinstripe Suit Trousers": '',
        "Santa Boots": '',
        "Denim Cap": '',
        "Tube Dress": '',
        "Hair Bow": '',
        "Pleated Skirt": '',
        "Reading Glasses": '',
        "Pullover": '',
        "Denim Vest": '',
        "Basketball Shirt": '',
        "Denim Jacket": '',
        "Santa Jacket": '',
        "Bandit Mask": '',
        "Durag": '',
        "Chinos": '',
        "Tights": '',
        "Collared Shawl": '',
        "Denim Shirt": '',
        "Shrug": '',
        "Dungarees": '',
        "Sandals": '',
        "Check Skirt": '',
        "Ballet Shoes": '',
        "Sun Hat": '',
        "Cork Hat": '',
        "Pantyhose": '',
        "Denim Shoes": '',
        "Knee Socks": '',
        "Shorts": '',
        "Golf Socks": '',
        "Bucket Hat": '',
        "Maid Hat": '',
        "Panama Hat": '',
        "Oversized Shirt": '',
        "Pencil Skirt": '',
        "Floral Dress": '',
        "Booty Shorts": '',
        "Blouse": '',
        "Halterneck": '',
        "Snapback Hat": '',
        "Crop Top": '',
        "Bermudas": '',
        "Peplum Top": '',
        "Baseball Cap": '',
        "Santa Hat": '',
        "Baseball Jacket": '',
        "Capri Pants": '',
        "Thong": '',
        "Fishnet Stockings": '',
        "Chin Diaper": '',
        "Chest Harness": '',
        "Platform Shoes": '',
        "Fur Hat": '',
        "Polo Shirt": '',
        "Bunny Ears": '',
        "Denim Jeans": '',
        "Skirt": '',
        "Puppy Ears": '',
        "Tutu": '',
        "Camisole": '',
        "Assless Chaps": '',
        "Head Scarf": '',
        "Puffer Vest": '',
        "Choker": '',
        "Boob Tube": '',
        "Tighty Whities": '',
        "Puffer Jacket": '',
        "Travel Socks": '',
        "Fur Scarf": '',
        "Waistcoat": '',
        "Derby Shoes": '',
        "Braces": '',
        "Blindfold": '',
        "Medical Mask": '',
        "Nightgown": '',
        "Flip Flops": '',
        "Saggy Pants": '',
        "Square Sunglasses": '',
        "Cardigan": '',
        "Gym Shorts": '',
        "Knee-high Boots": '',
        "Sports Jacket": '',
        "Bowler Hat": '',
        "Cover-ups": '',
        "Bingo Visor": '',
        "Yoga Pants": '',
        "Raincoat": '',
        "Silver Hoodie": '',
        "Fisherman Hat": '',
        "Lingerie": '',
        "Bush Hat": '',
        "Turtleneck": '',
        "Lolita Dress": '',
        "Fitted Shirt": '',
        "Blazer": '',
        "Opera Gloves": '',
        "Mini Skirt": '',
        "Shoulder Sweater": '',
        "Suit Trousers": '',
        "Mackintosh": '',
        "Black Oxfords": '',
        "Shutter Shades": '',
        "Cat Ears": '',
        "Fascinator Hat": '',
        "Poncho": '',
        "Fur Coat": '',
        "Silver Flats": '',
        "Kitty Shoes": '',
        "Neck Tie": '',
        "Maid Uniform": '',
        "Bow Tie": '',
        "Polka Dot Dress": '',
        "Slippers": '',
        "Gold Sneakers": '',
        "Smoking Jacket": '',
        "Parachute Pants": '',
        "Latex Gloves": '',
        "Collar": '',
        "Nipple Tassels": '',
        "Scrooge's Boots": '',
        "Mankini": '',
        "Scrooge's Gloves": '',
        "Ripped Jeans": '',
        "Santa Beard": '',
        "Ball Gown": '',
        "Scrooge's Trousers": '',
        "Unicorn Horn": '',
        "Onesie": '',
        "Wedding Veil": '',
        "Christmas Sweater '15": '',
        "Bunny Nose": '',
        "Straitjacket": '',
        "Monocle": '',
        "Scrooge's Topcoat": '',
        "Wedding Dress": '',
        "Witch's Hat": '',
        "Bathrobe": '',
        "Tiger King Mask '20": '',
        "Greta Mask '19": '',
        "Scrooge's Top Hat": '',
        "Sandworm Mask '21": '',
        "Duster": '',
        "Ski Mask": '',
        "Pennywise Mask '20": '',
        "Anatoly Mask '19": '',
        "Ball Gag": '',
        "Elon Musk Mask '17": '',
        "Heart Sunglasses": '',
        "Jigsaw Mask '19": '',
        "Pipe": '',
        "Michael Myers Mask '18": '',
        "Respo Hoodie": '',
        "Bunny Suit": '',
        "Donald Trump Mask '16": '',
        "Gronch Mask '18": '',
        // 车
        "Chevrolet Cavalier": '',
        "Peugeot 106": '',
        "Volkswagen Beetle": '大众甲壳虫',
        "Citroen Saxo": '',
        "Vauxhall Corsa": '',
        "Vauxhall Astra GSI": '',
        "Honda Civic": '本田思域',
        "Classic Mini": '经典MINI',
        "Volkswagen Golf GTI": '',
        "Renault Clio": '',
        "Alfa Romeo 156": '',
        "Audi S4": '奥迪S4',
        "Reliant Robin": '',
        "Nissan Micra": '',
        "Honda Integra R": '',
        "Ford Mustang": '福特野马',
        "Lotus Exige": '',
        "Hummer H3": '',
        "Honda S2000": '',
        "Honda Accord": '',
        "Holden SS": '',
        "Mini Cooper S": '',
        "Seat Leon Cupra": '',
        "Toyota MR2": '',
        "Volvo 850": '',
        "Honda NSX": '',
        "BMW X5": '宝马X5',
        "TVR Sagaris": '',
        "BMW M5": '宝马M5',
        "Ford Focus RS": '',
        "Subaru Impreza STI": '',
        "Chevrolet Corvette Z06": '',
        "Audi TT Quattro": '',
        "Fiat Punto": '',
        "Pontiac Firebird": '',
        "Dodge Charger": '',
        "BMW Z8": '宝马Z8',
        "Porsche 911 GT3": '',
        "Nissan GT-R": '',
        "Ford GT40": '',
        "Audi R8": '奥迪R8',
        "Mitsubishi Evo X": '',
        "Lexus LFA": '',
        "Ferrari 458": '',
        "Lamborghini Gallardo": '兰博基尼盖拉多',
        "Mercedes SLR": '',
        "Aston Martin One-77": '',
        "Sierra Cosworth": '',
        // 文物
        "Senet Board": '',
        "Florin Coin": '',
        "Leopard Coin": '',
        "Gold Noble Coin": '',
        "Vairocana Buddha Sculpture": '',
        "Black Senet Pawn": '',
        "White Senet Pawn": '',
        "Ganesha Sculpture": '',
        "Quran Script : Ubay Ibn Kab": '',
        "Quran Script : Ali": '',
        "Quran Script : Ibn Masud": '',
        "Shabti Sculpture": '',
        "Egyptian Amulet": '',
        // 玩偶
        "Sheep Plushie": '绵羊',
        "Kitten Plushie": '猫咪',
        "Teddy Bear Plushie": '泰迪熊',
        "Stingray Plushie": '黄貂鱼',
        "Wolverine Plushie": '貂熊',
        "Jaguar Plushie": '美洲豹',
        "Nessie Plushie": '尼斯湖水怪',
        "Red Fox Plushie": '赤狐',
        "Chamois Plushie": '岩羚羊',
        "Monkey Plushie": '猴子',
        "Panda Plushie": '大熊猫',
        "Lion Plushie": '狮子',
        "Camel Plushie": '骆驼',
        "Dong : Effy": '狗狗：艾菲',
        "Dong : Jeremy": '狗狗：杰里米',
        "Dong : Greg": '狗狗：格雷格',
        "Dong : Holly": '狗狗：霍利',
        "Dong : Thomas": '狗狗：托马斯',
        // 特殊物品
        "Toilet Paper": '厕纸',
        "Stink Bombs": '臭气弹',
        "Dog Poop": '狗屎',
        "Horse's Head": '马头',
        "Christmas Cracker": '圣诞爆竹',
        "Small Explosive Device": '小型爆炸装置',
        "Business Class Ticket": '商务舱机票',
        "Strippogram Voucher": '脱衣舞券',
        "Poison Mistletoe": '毒槲寄生',
        "Donator Pack": '捐赠者补给箱(DP)',
        "Casino Pass": '赌场通行证',
        "Cesium-137": '铯137',
        "Dirty Bomb": '脏弹',
        // 杂物
        "Box of Tissues": '一盒抽纸',
        "Pack of Cuban Cigars": '',
        "Birthday Wrapping Paper": '生日包装纸',
        "Empty Box": '空盒子',
        "Bolt Cutters": '',
        "Christmas Wrapping Paper": '圣诞包装纸',
        "Soap on a Rope": '',
        "Generic Wrapping Paper": '',
        "Crazy Straw": '',
        "Fruitcake": '水果蛋糕',
        "Pele Charm": '',
        "Mayan Statue": '',
        "Steel Drum": '',
        "Sumo Doll": '',
        "Hockey Stick": '',
        "Chopsticks": '筷子',
        "Soccer Ball": '足球',
        "Snowboard": '雪球',
        "Paper Weight": '',
        "Yakitori Lantern": '',
        "Sensu": '',
        "Dart Board": '',
        "Elephant Statue": '',
        "Certificate of Lame": '',
        "Yucca Plant": '',
        "Jade Buddha": '玉佛像',
        "Compass": '',
        "Nodding Turtle": '',
        "Fire Hydrant": '',
        "Model Space Ship": '',
        "Tailors Dummy": '',
        "Sextant": '',
        "Afro Comb": '',
        "Maneki Neko": '',
        "Blank Tokens": '',
        "Printing Paper": '',
        "Stick of Dynamite": '',
        "Blank Credit Cards": '',
        "Advent Calendar": '',
        "Certificate of Awesome": '',
        "Glow Stick": '',
        "Ship in a Bottle": '',
        "Santa's Snot": '',
        "Christmas Angel": '',
        "Sprig of Holly": '',
        "Polar Bear Toy": '',
        "Turkey Baster": '',
        "Electronic Pumpkin": '',
        "Salt Shaker": '',
        "Cinnamon Ornament": '',
        "Spooky Paper Weight": '',
        "Lump of Coal": '',
        "Vanity Hand Mirror": '',
        "Gingerbread Man": '',
        "Christmas Lights": '',
        "C4 Explosive": 'C4炸弹',
        "Jack O Lantern Lamp": '',
        "Gingerbread House": '',
        "Mini Sleigh": '',
        "Golden Wreath": '',
        "Coat Hanger": '衣架',
        "Memory Locket": '',
        "Cauldron": '',
        "Mistletoe": '槲寄生',
        "Witch's Cauldron": '',
        "Gas Can": '汽油桶',
        "Golden Candy Cane": '',
        "Christmas Express": '',
        "Eggnog": '',
        "Raw Ivory": '',
        "Oriental Log": '',
        "Snowman": '雪人',
        "Christmas Gnome": '',
        "Pile of Vomit": '',
        "Loaf of Bread": '',
        "Deputy Star": '',
        "Oriental Log Translation": '',
        "Tangerine": '',
        "Dancing Santa Claus '09": '',
        "Photographs": '',
        "Japanese/English Dictionary": '日英词典',
        "Gold Nugget": '',
        "Peg Leg": '',
        "Birthday Cake '14": '14寸生日蛋糕',
        "Zombie Brain": '僵尸脑',
        "Rotten Eggs": '',
        "Pack of Trojans": '',
        "Snow Globe '09": '',
        "Medal of Honor": '',
        "Rusty Dog Tag": '',
        "Human Head": '人头',
        "Article on Crime": '',
        "Piece of Cake": '',
    };
    const itemDescDict = {
        'A lottery voucher which can be traded in for 100 lottery tickets for the weekly draw, courtesy of the Lucky Shot Casino.':
            '',
        "Increases one's energy.": '提高能量。',
        "Temporarily passively increases all statistics while attacking or defending by 25%.":
            '在攻击或防守时暂时地获得25%战斗属性增益。',
    };
    const itemEffectDict = {
        // 彩票
        'Effect: Provides 100 Lucky Shot Lotto tickets when used.': '',
        // enhancer
        'Effect: Improves success rate for the Transporting Drugs crime.': '',
        // 糖
        'Effect: Increases happiness by 25 and booster cooldown by 30 minutes.': '',
        'Effect: Increases happiness by 50 and booster cooldown by 30 minutes.': '',
        'Effect: Increases happiness by 75 and booster cooldown by 30 minutes.': '',
        // 能饮
        'Effect: Increases energy by 10 and booster cooldown by 2 hours.': '',
        // 手雷
        "Effect: Opponent becomes Maced, decreasing Dexterity to 1/5th for 15-20 seconds.":
            '效果：对手被梅斯毒气影响，闪避降低至1/5，持续15-20s。',
        "Effect: Opponent becomes Blinded, decreasing Speed to 1/5th for 15-20 seconds.":
            '效果：对手被致盲，速度降低至1/5，持续15-20s。',
        "Effect: Opponent becomes Gassed, decreasing Dexterity to 1/3rd for 120-180 seconds.":
            '效果：对手变得疲惫，闪避降低至1/3，持续120-180s。',
        "Effect: Opponent receives Severe Burning damage over 3 turns.":
            '效果：对手在3个回合内受到严重的燃烧伤害。',
        "Effect: Opponent becomes Smoked, decreasing Speed to 1/3rd for 120-180 seconds.":
            '效果：对手被烟雾影响，速度降低至1/3持续120-180s。',
        "Effect: User becomes Hastened, increasing Speed by 500% for 120 seconds.":
            '效果：使用者急促起来，速度提高500%持续120s。',
        "Effect: User becomes Sharpened, increasing Dexterity by 500% for 120 seconds.":
            '效果：使用者变得更加敏锐，闪避增加500%，持续120s。',
        "Effect: User becomes Strengthened, increasing Strength by 500% for 120 seconds.":
            '效果：使用者变得更强壮，力量增加500%，持续120秒。',
        "Effect: User becomes Hardened, increasing Defense by 300% for 120 seconds and replenishing life by 25%.":
            '效果：使用者变得坚硬，在120秒内增加300%的防御，并补充25%的生命。',
        "Effect: Opponent becomes Concussed, decreasing Dexterity to 1/5th for 15-20 seconds.":
            '效果：对手脑部震荡，闪避下降到1/5，持续15-20秒。',
        // other
        "Effect: Increases happiness by 5-20 if under 20% of maximum.": '',
        "Effect: Can be used with a Fruitcake and Cake Frosting to create a Special Fruitcake.": '',
    };
    const itemTypeDict = {
        'is a  Defensive Armor.': '是一种防御性盔甲。',
        'are a  Defensive Armor.': '是一种防御性盔甲。',
        'is a  Machine Gun Weapon.': '是一种机枪。',
        'is a  SMG Weapon.': '是一种冲锋枪。',
        'is a  Shotgun Weapon.': '是一种霰弹枪。',
        'is a  Rifle Weapon.': '是一种步枪。',
        'is a  Heavy Artillery Weapon.': '是一种重炮。',
        'is a  Pistol Weapon.': '是一种手枪。',
        'is a  Piercing Weapon.': '是一种穿刺武器(piercing)。',
        'is a  Clubbing Weapon.': '是一种冲击武器(Clubbing)。',
        'is a  Slashing Weapon.': '是一种切割武器(slashing)。',
        'is a  Mechanical Weapon.': '是一种机械武器。',
        'is a  Temporary Weapon.': '是一种投掷武器。',
        'is a  Clothing Item.': '是一种服装物品。',
        'is a  Medical Item.': '是一种医疗物品。',
        'is a  Drug Item.': '是一种药(dú)品。',
        'is an  Energy Drink Item.': '是一种能量饮料。',
        'is an  Alcohol Item.': '是一种酒。',
        'is a  Candy Item.': '是一种糖。',
        'is a  Booster Item.': '是一种增益道具。',
        'is an  Enhancer Item.': '是一种增幅器。',
        'is a  Supply Pack Item.': '是一种补给包。',
        'is an  Electronic Item.': '是一种电子物品。',
        'is a  Jewelry Item.': '是一种珠宝物品。',
        'is a  Flower Item.': '是一种花。',
        'is a  Plushie Item.': '是一种玩偶。',
        'is a class E Car Item.': '是一辆E级赛车。',
        'is a class D Car Item.': '是一辆D级赛车。',
        'is a class C Car Item.': '是一辆C级赛车。',
        'is a class B Car Item.': '是一辆B级赛车。',
        'is a class A Car Item.': '是一辆A级赛车。',
        'is a  Virus Item.': '是一种电脑病毒。',
        'is an  Other Item.': '是一个其他物品。',
        'is a  Book Item.': '是一本书。',
        'is a  Special Item.': '是一种特殊物品。',
    };
    const itemReqDict = {};
    const tornSettingsDict = {
        'API Keys': 'API 密钥',
        'General settings': '通用设置',
        'Attack settings': '攻击设置',
        'Create New Key': '创建新密钥',
        "New key's name": '新密钥名',
        "Public Only": '无需权限',
        "Minimal Access": '最小权限',
        "Limited Access": '有限权限',
        "Full Access": '完全权限',
        'Here you can share your account\'s information with':
            '在这里，你可以通过向脚本、扩展和应用程序等软件提供API密钥，与它们分享你的账户信息。一旦你创建了一个具有相关权限的API密钥，你可以在任何时候通过删除该密钥来取消授权。',
    };
    const missionDict = {
        '_taskHint': {
            a_good_day_to_get_hard: {
                task: "实现3-10的连杀",
                hint: "建议买lost",
            },
            a_kimpossible_task: {
                task: "击败3个特定玩家且只使用近战武器和手雷",
                hint: "枪可以保持装备状态",
            },
            a_problem_at_the_tracks: {
                task: "击败3个特定玩家且不使用枪",
                hint: "枪可以保持装备状态，但是使用任何的枪任务就会失败。",
            },
            a_thor_loser: {
                task: "用Duke的锤子(Duke's hammer)打中8-16个不同的身体部位",
                hint: "找防御怪来打",
            },
            against_the_odds: {
                task: "击败2个特定玩家",
            },
            an_honorary_degree: {
                task: "击败特定玩家且不使用枪",
                hint: "枪可以保持装备状态，但是使用任何的枪任务就会失败。",
            },
            army_of_one: {
                task: "装备不同的面具攻击3次1个特定玩家",
                hint: "Duke会给你发2个面具，请确保其中一次攻击不戴任何面具。为了快速完成任务，可以选择右上角的逃跑选项，这样不需要等待目标出院。",
            },
            bakeout_breakout: {
                task: "把开锁器(lock pick)放到水果蛋糕(fruitcake)里，并且把特别的水果蛋糕(special fruitcake)发送给监狱里的任意自选玩家。",
                hint: "你需要自己买一个水果蛋糕，佐料Duke会给",
            },
            bare_knuckle: {
                task: "击败特定玩家，且不装备任何防具和武器。",
                hint: "取消装备所有东西。注意：前一次战斗残余的buff会让任务失败！",
            },
            batshit_crazy: {
                task: "用Penelope造成基于你的最大生命的一定伤害",
                hint: "你会收到Duke发来的Penelope",
            },
            battering_ram: {
                task: "攻击特定玩家3次",
            },
            big_tub_of_muscle: {
                task: "击败特定玩家，尽管他有巨大的力量",
            },
            birthday_surprise: {
                task: "获取特定物品并将它作为礼物发送给Duke",
                hint: "使用一个空盒子(Empty box)可以把物品装箱(parcel)，然后用礼品包装将他包起来就可以得到一个生日礼物。",
            },
            bonnie_and_clyde: {
                task: "击败特定玩家和他的配偶",
            },
            bountiful: {
                task: "成功拿到2-5个悬赏赏金",
                hint: "请记得击败玩家后选择强制住院(hospitalize)才能领取赏金",
            },
            bounty_on_the_mutiny: {
                task: "悬赏特定玩家，然后等待赏金被人领取",
                hint: "你不能领取自己的悬赏赏金",
            },
            bring_it: {
                task: "在多人战斗中击败Duke",
                hint: "不像其他任务，这个任务你有一周的时间来完成。且不需要最后一击，你只需要参与到多人战斗中就可以。更多详情请群内询问大佬或查看公众号攻略。",
            },
            candy_from_babies: {
                task: "获得$50,000-$250,000的悬赏奖励",
                hint: "可以是总计多次悬赏奖励。请记得击败玩家后选择强制住院(hospitalize)才能获得悬赏奖励。",
            },
            charity_work: {
                task: "抢劫2个特定玩家",
                hint: "必须成功抢到钱，可以事先发一点钱给目标来确保成功抢劫",
            },
            cracking_up: {
                task: "击败特定玩家后选择审问选项(interrogate)获取密码，然后使用密码打开Duke的保险箱(Duke's Safe)，并将获得的物品发送给Duke。",
                hint: "可能会需要数次审问才能获得密码",
            },
            critical_education: {
                task: "造成3-9次暴击",
            },
            cut_them_down_to_size: {
                task: "击败任意等级大于等于你的玩家",
            },
            dirty_little_secret: {
                task: "给特定玩家下一个悬赏，然后攻击拿悬赏的玩家",
                hint: "如果拿悬赏的玩家是匿名的，他的ID还是会被显示在任务界面。攻击不需要胜利，只需要攻击即可完成任务。",
            },
            double_jeopardy: {
                task: "击败特定玩家，且给他下一个悬赏",
                hint: "赏金可以是任何金额，因为它不需要被认领。",
            },
            drug_problem: {
                task: "Defeat 4 - 7 (P).",
            },
            emotional_debt: {
                task: "用催泪弹(tear gas)或辣椒水(pepper spray)命中特定玩家",
                hint: "不被阻挡才算数。Hazmat Suit会阻挡催泪弹，很多头盔阻挡辣椒水。(也有说法辣椒水不需要生效也能完成任务)",
            },
            estranged: {
                task: "打伤特定玩家的一条腿",
            },
            family_ties: {
                task: "强制住院特定玩家3次",
            },
            field_trip: {
                task: "在3个赌场游戏中赚到$100-$1,000,000",
            },
            fireworks: {
                task: "消耗250-1250发子弹",
                hint: "用弹药多的武器，如minigun、m249",
            },
            forgotten_bills: {
                task: "击败特定玩家",
            },
            frenzy: {
                task: "击败任意5-15个玩家",
            },
            get_things_jumping: {
                task: "造成2000-50000伤害，受到1000-25000伤害，基于你的生命上限",
                // hint: "Values are apparently based on your max life.",
            },
            graffiti: {
                task: "给特定目标喷辣椒水(pepper spray)",
            },
            guardian: {
                task: "击败特定玩家",
            },
            hammer_time: {
                task: "用锤子(hammer)击败特定玩家",
                hint: "枪可以保持装备，双锤不算锤子",
            },
            hands_off: {
                task: "击败3-5个特定玩家",
            },
            hare_meet_tortoise: {
                task: "击败特定玩家，尽管他的速度快如闪电",
                hint: "闪光弹和烟雾弹可以降低目标的速度",
            },
            hide_and_seek: {
                task: "从3-5人的列表中找到并击败1个特定玩家",
                hint: "给出的线索可以很容易识别目标，比如等级，地区，如无法找到请截图群聊询问。",
            },
            hiding_in_plain_view: {
                task: "击败在随机国家的特定玩家",
            },
            high_fliers: {
                task: "击败3个在随机国家的特定玩家",
            },
            hobgoblin: {
                task: "击败自选的某个相同玩家5次",
            },
            immovable_object: {
                task: "击败特定玩家，尽管他的防御很高",
            },
            inside_job: {
                task: "击败特定玩家并选择secrete选项藏一个道具",
            },
            'introduction:_duke': {
                task: "完成10个 Duke 任务",
            },
            keeping_up_appearances: {
                task: "抢劫特定玩家然后把钱发回给他",
                hint: "必须成功抢到钱，可以事先发一点钱给目标来确保成功抢劫",
            },
            kiss_of_death: {
                task: "击败特定玩家然后选择kiss选项",
            },
            lack_of_awareness: {
                task: "击败特定玩家",
            },
            lost_and_found: {
                task: "强制住院特定目标总计12小时",
            },
            loud_and_clear: {
                task: "使用3-11个爆炸性手榴弹(HEG或Grenade等)",
                hint: "手榴弹必须是可以造成伤害的类型",
            },
            loyal_customer: {
                task: "击败特定玩家",
            },
            make_it_slow: {
                task: "击败特定玩家且单次攻击中使用不低于5-9回合",
                hint: "存活7或9回合后击败目标，如果失败可以再次尝试。",
            },
            marriage_counseling: {
                task: "击败特定玩家的配偶",
            },
            massacrist: {
                task: "击败特定玩家",
            },
            meeting_the_challenge: {
                task: "抢劫到$10,000-$16,000,000金额的钱",
            },
            motivator: {
                task: "第一次对战中输给或平手给特定玩家",
                hint: "超时不会任务失败，所以如果看起来要赢了可以等5分钟超时。可以抽血减血，不装备防具并使用锈剑。",
            },
            new_kid_on_the_block: {
                task: "击败5名玩家",
            },
            no_man_is_an_island: {
                task: "从3个特定目标中选2个抢劫",
                hint: "可以自选哪两个目标，只要抢劫2个不同的目标",
            },
            no_second_chances: {
                task: "一次击败特定玩家",
            },
            out_of_the_frying_pan: {
                task: "去监狱使用Felovax以住院，再使用Zylkene",
            },
            painleth_dentitht: {
                task: "用棒球棒击败特定玩家",
                hint: "其他武器可以保持装备，但是使用其他武器会让任务失败",
            },
            party_tricks: {
                task: "击败特定玩家，尽管他的DEX很高",
            },
            pass_the_word: {
                task: "给特定玩家发送包含关键词的聊天信息",
                hint: "复制任务描述发送给目标就可以完成",
            },
            peak_experience: {
                task: "击败特定玩家",
            },
            proof_of_the_pudding: {
                task: "使用某个武器击败特定玩家，然后发送这个武器给他",
                hint: "不需要发送你具体使用的武器，只需发送同名武器",
            },
            rabbit_response: {
                task: "10-30分钟内击败3个特定玩家",
                hint: "攻击其中一个目标时开始计时，所以攻击前确定他们都不在住院",
            },
            reconstruction: {
                task: "装备菜刀(kitchen knife)和皮手套(leather gloves)，击败特定玩家然后扔掉这两样东西。",
                hint: "战斗中不必须使用菜刀攻击",
            },
            red_faced: {
                task: "使用鳟鱼(trout)完成最后一击以击败特定玩家",
            },
            rising_costs: {
                task: "用砖头(Brick)打中特定玩家",
                hint: "没打中不算",
            },
            rolling_in_it: {
                task: "抢劫特定玩家",
                hint: "必须成功抢到钱，可以事先发一点钱给目标来确保成功抢劫",
            },
            safari: {
                task: "用步枪(rifle)在南非击败特定玩家",
            },
            scammer: {
                task: "击败特定玩家",
                hint: "目标可能有不少现金，可以试着打劫一下",
            },
            sellout_slayer: {
                task: "从物品市场或个人集市买一把枪，用这把枪击败任意2-6个玩家，然后再从物品市场或个人集市卖出这把枪",
            },
            sending_a_message: {
                task: "击败特定玩家",
            },
            show_some_muscle: {
                task: "攻击特定玩家",
                hint: "攻击目标即可，无论输赢",
            },
            sleep_aid: {
                task: "击败特定玩家",
            },
            some_people: {
                task: "将任何物品制作包裹寄给特定玩家",
                hint: "买一个空盒子(Empty box)并使用空盒子，选择一个你不要的物品就可以制成包裹。",
            },
            standard_routine: {
                task: "使用冲击武器(Clubbing)或拳头或脚踢击败特定玩家",
                hint: "可以考虑买一把金属双截棍(Metal Nunchakus)",
            },
            stomach_upset: {
                task: "打伤特定玩家的胃",
            },
            swan_step_too_far: {
                task: "从垃圾场翻到一个物品并且击败他之前的所有者",
                hint: "你可以多搜索几次，直到找到一个你能打得过的前所有者。",
            },
            the_executive_game: {
                task: "只使用拳头或脚踢击败特定玩家",
                hint: "已装备的其他武器不需要卸载",
            },
            the_tattoo_artist: {
                task: "只使用切割武器(slashing)或穿刺武器(piercing)击败特定玩家",
                hint: "已装备的其他武器不需要卸载",
            },
            three_peat: {
                task: "分别击败3次后选择留在街上、抢劫、强制住院任意玩家",
            },
            training_day: {
                task: "健身房消耗250 - 1,250能量E",
            },
            tree_huggers: {
                task: "击败5-8个特定玩家",
            },
            undercutters: {
                task: "击败4个特定玩家",
            },
            unwanted_attention: {
                task: "强制住院4个特定玩家",
            },
            withdrawal: {
                task: "打伤特定玩家的双臂",
                hint: "这个任务中手也算双臂",
            },
            wrath_of_duke: {
                task: "击败4个特定玩家", // Defeat 4 (P)
            },
        },
        "Hit": '击中',
        "with a brick.": '使用砖头 (brick)',
        "Put": '',
    };
    const pcDict = {
        'Virus Programming': '病毒编程',
    };
    const npcShopDict = {
        "Buy Items": '购买物品',
        "Buy": '买',
        "in stock)": '存货)',
        "Flower (": '花(',
        "Plushie (": '玩偶(',
        "Other (": '其他(',
        "Temporary (": '临时(',
        "Melee (": '近战(',
        "Candy (": '糖果(',
        "Booster (": '增益道具(',
        "Car (": '车辆(',
        "Electronic (": '电器(',
        "Alcohol (": '酒类(',
        "Sell": '卖出',
        "items": '物品',
        "Value": '卖价',
        "Amount": '数量',
        "items to Bits 'n' Bobs": '物品给胖鲍勃的杂货店',
        "Select All": '全选',
        "Unselect All": '全不选',
        "SELL ITEMS": '卖出物品',
        "Cancel": '取消',
        "Are you sure you would like to sell these items?": '你确定想出售这些物品吗？',
        "Total value:\n$": '总计：$',
        "Yes": '是',
        "No": '否',
        "Are you sure you would like to buy": '你是否想买',
        "Sell your points": '出售你的PT',
    };
    const calDict = {
        'January': '一月',
        'February': '二月',
        "March": "三月",
        "April": "四月",
        "May": "五月",
        "June": "六月",
        "July": "七月",
        "August": "八月",
        "September": "九月",
        "October": "十月",
        "November": "十一月",
        "December": "十二月",
    };
    const CC_set = /[\u4e00-\u9fa5]/;

    // regexp test
    String.prototype.contains = function contains(keywords) {
        if ('string' === typeof keywords) {
            return new RegExp(keywords).test(this);
        }
        if (keywords.test) {
            return keywords.test(this);
        }
    };

    // 原始fetch
    const ori_fetch = window.fetch;
    // 监听fetch
    window.fetch = async (url, init) => {
        log(url)
        const res = await ori_fetch(url, init);
        // mini profile 翻译
        if (url.includes('profiles.php?step=getUserNameContextMenu') && getWhSettingObj()['transEnable']) {
            setTimeout(() => miniprofTrans(), 200);
        }
        // const res_clone = res.clone();
        return res;
    };

    // const transDict = {};
    // transDict.titleDict = titleDict;
    // transDict.titleLinksDict = titleLinksDict;
    // transDict.sidebarDict = sidebarDict;
    // transDict.tooltipDict = tooltipDict;
    // transDict.statusDict = statusDict;
    // transDict.miniProfileDict = miniProfileDict;
    // transDict.homeDict = homeDict;
    // transDict.attackDict = attackDict;
    // transDict.newspaperDict = newspaperDict;
    // transDict.propertyDict = propertyDict;
    // transDict.travelingDict = travelingDict;
    // transDict.tipsDict = tipsDict;
    // transDict.cityDict = cityDict;
    // transDict.gymDict = gymDict;
    // transDict.gymList = gymList;
    // transDict.eduDict = eduDict;
    // transDict.headerDict = headerDict;
    // transDict.eventsDict = eventsDict;
    // transDict.chatDict = chatDict;
    // transDict.hosDict = hosDict;
    // transDict.awDict = awDict;
    // transDict.playerTitleList = playerTitleList;
    // transDict.ocList = ocList;
    // transDict.profileDict = profileDict;
    // transDict.sendCashDict = sendCashDict;
    // transDict.stockDict = stockDict;
    // transDict.itemPageDict = itemPageDict;
    // transDict.itemNameDict = itemNameDict;
    // transDict.itemDescDict = itemDescDict;
    // transDict.itemEffectDict = itemEffectDict;
    // transDict.itemTypeDict = itemTypeDict;
    // transDict.itemReqDict = itemReqDict;
    // transDict.tornSettingsDict = tornSettingsDict;
    // transDict.missionDict = missionDict;
    // transDict.pcDict = pcDict;
    // transDict.npcShopDict = npcShopDict;
    // transDict.calDict = calDict;
    // if (!localStorage.getItem('wh_trans_transDict')) localStorage.setItem('wh_trans_transDict', JSON.stringify(transDict))

    // 伪enum 设备类型 PC MOBILE TABLET
    const Device = Object.freeze({
        PC: 'pc',
        MOBILE: 'mobile',
        TABLET: 'tablet',
    });
    // 伪enum 用户脚本平台
    const UserScriptEngine = Object.freeze({
        RAW: 'raw',
        GM: 'gm',
        PDA: 'pda',
    });
    // 设备类型
    const device = window.innerWidth >= 1000
        ? Device.PC : window.innerWidth <= 600 ? Device.MOBILE : Device.TABLET;
    // 玩家信息
    const player_info = getPlayerInfo();
    // 海外库存对象
    const fstock = autoFetchJSON('https://yata.yt/api/v1/travel/export/');
    // 价格监视实例对象
    const priceWatcher = isIframe ? null : priceWatcherHandle();
    // 返回一个加载中gif图形HTML
    const loading_gif_html = () => {
        const gif_base64 = `data:image/gif;base64,R0lGODlhAAQABKIFAKqqqoiIiO7u7szMzGZmZgAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCAAFACwAAAAAAAQABAAD/1i63P4wykmrvTjrzbv/YCiOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8Lh8Tq/b7/i8fs/v+/+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/wADChxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsf+jx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNo06pdy7at27dw48qdS7eu3bt48+rdy7ev37+AAwseTLiw4cOIEytezLix48eQI0ueTLmy5cuYM2vezLmz58+gQ4seTbq06dOoU6tezbq169ewY8ueTbu27du4c+vezbu379/AgwsfTry48ePIkytfzry58+fQo0ufTr269evYs2vfzr279+/gw4sfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+/////AAYo4IAEFmjggQgmqOCCDDbo4IMQRijhhBRWaOGFGGao4YYcdujhhyCGKOKIJJZo4okopqjiiiy26OKLMMYo44w01mjjjTjmqOOOPPbo449ABinkkER+R8CRSBbpG5JMNunkkUrO9uSUVEIZpWpVZqnllaVp6aWXXIL25ZhZhskZmWiWaaZlabap5pqQuSlnlXA+NuedVNa5GJ58PqknYn0G2uSfhQlqaJKEBnboogQk+hejjDrKF6SQSpoXpZRaahemmGo6F6ecehoXqJ2K6hapoZrKFqqlqpoWq6m6ahasoMo6K62t2hoWrrXquiuvufrKFbC9CjssscEaixWy/8kqWxWzsTprFbTNShsVtZlaOy22kWpLFbfZenstuN2KCxW55ZrrFLqLqnsuu4a6+xS88crLFL2H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TeowkapUpbavqU1VH1Sjer6pUjV8VnUqVrOaVPJxVavb+2pXvSdWo261rEElK1qFqta1+rStbtUpXONq07nStaZhvatcsafXvVavrznNK2BjatfBmrSwhhUpYhPr0bMytqSOfWxIIyvZjlK2shm9LGYlWtXNarSznrUoaEMb0aeStrRSPa1DTavahM6vta5lKmwP+trZLhSotn0oTnM70d3ydp4s/a08gyvcjyKwuOyMIHLRCdLl/660uc7lZgejK12MUteaEL1uPhmq3Z8itLvXJCh4jxrE8Q70iOYNQD21K0bqrrO45cztHFWbx8pC063AzK9+98vf/vr3vwAOsIAHTOACG/jACE6wghfM4AY7+MEQjrCEJ0zhClv4whjOsIY3zOEOe/jDIA6xiEdM4hKb+MQoTrGKV8ziFrv4xTCOsYxnTOMa2/jGOM6xjne8YwBgGABADrKQhyxkBhP5yEgucoGTzOQm+/i/To6yk/cr5So3Ob9WzjKTe6nlLm8Zl14O85dpKeYyI5nMZk7zkGWp5jYruZVujnOQ4SznOj8ZlXbOcyrzrGdT8pnPpfzzn0cpaEGHsv/QhQYlohPdyUUjutGOZnQmI73oSVO60pe8tKMtqelIV7LTnp4kqEMNyVFTOpKmPvUjU61qRrL60o18NawXKetZI7LWmk4krnN9yF3zupC+/vUggy3sQBK72H88NrL7qOxl77HZzsYjtDsNyGlH247WvjYds61tOXK723D8NrjdKO5xs7Hc5lYjutNdxnWzW4zutvW2493qOdJb3t6+N6nzre9N27vf+w43wP0dx4EHvI0GP/i5E45pgTNc0iMZgMQnTnGJE+PhDadIxTfOcYrrAuOPfkjHR07yAdAC5CEnSMlXXnJZoBzi9mC5zFvOipfDnB0zzznNT2FzQ8ND50D/37koej7ocwT96EIHBdEBLQ6kO33kPF+6ncPx9KpzPOpSlzM3rM71ipsi61OXRtfH7vVQgF3rziC72ic+9LO7uRlrj7vJze72NiND7nH/et3VTAy8573tezfzL/wud70Hvsy6IDzeDX94L+dC8X5nfOO1TAvIE17yk69y5S2/eMxnPsqy4PzlPf/5MbNC9JHHeulBf3rUp570qz9y611feFTEnvWmoP3oVX972Z9C96/nfe/XLArg7174wwdy7o3f+Zonn/ihYH7znf/8OYNC+sG3ffWVf33s194V27+zJrz/ffBvfxPkn34rzj/+9P99FtVHv/vXnovny3/+ZP/4//Dvj/+u+2L/7dd//vd/txeAAjiA+rd6BniAVjcMsbeADPh0F6eAlBCBCPgLFDgJFsh1yfB5ELiBQdcMmfeBIKhzzjB5JFiCMycNjZeCKshy03B4LviCSdeBezeDNAh113CDmZCDIYgNdYeDPrhx3XB2/DeEMFiEWXeESFiDMSh1TNiEOhgOS9d9Urhy50B0VniFJLcOPbeFXNhx7GBzYBiGRDiGIBd9ZjiFXohxariGVxcPD1d8cBiHcphwdFiHZVcPBrd8euhx+jBwfviHFrcP/fZ7hMh2/6BviJiIc7eI8YYKjliIAOFus5eICYFurTCJj0gQ4uYKnOgQ3BZ6k//4ENlGio44EdM2C6FIEcq2eamIEcH2eKWYEbuWeLVoi7LmC63YEa82eLnoEaPWd8EoEu/2hpjYEgRHjLGojD4Hd8XojGgndtFYE2lGddXYE11mdNnYFeJXD734SOHoSOPYSOXISOe4SOmoSOuYSO2ISO94SPFoSPNYSPVISPc4SPkoSPsYSP0ISP/4RwHpRwPZRwXJRwe5RwmpRwuZRw2JRw95RxFpRxNZRxVJRxc5RxkpRxsZRx0JRx/5RiHpRiPZRiXJRie5RimpRiuJRi1ZRi8pRjH5RTPJRTWZRTdpRTk5RTsJRT3ZRD+pREEplMkoSc0YSUcJSUkpjkWJlE1q6ZR6aEmEKJV/SJVRaZVriElXiZVmmElwqElfCZZhyEldSZZX+ElSCEppqZZDKEptOUo+WEo0eEoqmEoguEoW2EoM+EoCGEv4N0vuZ0vYl0vMx0u0B0yct1+Q91/vJ2AcqGBHZ2GAqEsJAAAh+QQFCAAFACz6APoAZgJmAgAD/1i63P4wykmrvTjrzbv/YCiOZGlagnCubOu+cCzPdG3fOJvufN/nwKBwSCwaj8jkycds8pTQqHRKrVqvMKd2m8J6v+CweEz+cM/csnrNbrvfWbRcC6/b7/i8eM7f6v+AgYKDS32GdISJiouMf4ePiI2Sk5SVUpCYTZabnJ2eLpmhPp+kpaanEKKqT6itrq+Mq7I7sLW2t22zul24vb6/UbvCwMTFxjXCw8fLzM0gycnO0tPUD9DQ1dnax9fX29/gtd3d4eXmnuPk5+vsi+nj7fHyee/p8/f4avX2+f3+Vvve/RtI8EhAgQUTKrRxsN7ChxB1NEQYsaLFDhP3XdzIkf9CRo0dQ4os8BHkyJMVS5pEyTKhyoAtYw58CVOmzXs0a97cuS7nQZ5Aw/n8GbRotaFEjSplhjTp0qfAmjqFStWW1KlVs6K6ilWrV3RcdX4dyylsV7Jo3Zk9m7YtoLVs3cq9Azfu3Lu56orFy9eNXrt9A3v5C1iw4SmECx9ejCSxYsaQhTh+HLkyw8l7LWsOgjnz5s+XOzsETTq0aIqlU784vVK160KsUb+eLSJ2a9q4Odgenbv3ht28fQuvADz48OPWivNDzryB8uXNoz+HHh35dHjVm1/Hnv34dnXdh38HH773eG/lfZ/Hlt78emXtcb+HH3/2/F315d/XlZ/2/ln//dn33yoBvjYggQWqdqAqCSq4YCgNpvYghBGWNiEmFVp44SMZarhhHx2S9qEhIYo44hwlgnYiiilutqIcLX724hkxyjhjJDVWdiOOOUa2oyY9avbjKEFaNuQPRRp5JC9J6rhkk0oeCWWUP05J5Y1WXvlillqeyGWXH34J5oVijvlgmWYeiKaTXq7J5oZupnlfnHK+R2ed592J53d67nldn34+B2igxQ1K6G6GCrlfoorOx2ij6z3qYqSSQrpdpZPyiWmm021qY6eeclpoqJ8CR6qKo55aKmuqenhaq652BquEos1KK2a2OuhYrq7tymuvf/0qIFzCDmtWsf4di2yy/1Itqx5Szgo3VLTi0UStdypdy1xG2lbnWbfWcQdud+iNGx9/5hZIYboVkshukSq8K++89NZr77345qvvvvz26++/AAcs8MAEF2zwwQgnrPDCDDfs8MMQRyzxxBRXbPHFGGes8cYcd+zxxyCHLPLIJJds8skop6zyyiy37PLLMMcs88w012zzzTjnrPPOPPfs889ABy300EQXbfTRSCet9NJMN+3001BHLfXUVFdt9dVYZ6311ly/TMDXYIct9thkl2322WinrfbYXZOx9ttwxy333Ge3XQXdeOet995s230E34AHLjjcfgsx+OGIJx524Tco7vjjgjMuA+SUV5635P8uWK755nFjfgLnoIeOtucjiG766YuT/gHqrJ+uOgetx2766xnIbnvotFtw++6c5z4B78Br7nsEwRdP+fAOGK/848gvsPzzijcP/fSHI0/99ZH7jv32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9tpke40G23DHLffcdKPtdhZ156333ny3fTcTfQcu+OBx/y0E4YgnrrjYhvew+OOQD954DpFXbrne/5O3cPnmnMudOQqdhy562p+XMPrpqDNeegipt4766h+4LvvpsG8w++2i124B7rx3rvsEvQe/+e8QCG985cQ7cPzykCe/APPQL+589NQnnnz12Euue/bc9/179+BjDnv45NNde/noF156+uyvvX778Nudefz0lz1//firbnj+/AMwef/5+x8A8be/ARLwbwY84N0SqMCuMbCBXHtg/RYowfhRsILtuyAG2ee2DcKvgx7koANDKMIIkjB9XjshCkeoQvKlsIUuZCEMuwfCGXKvhjbEHg5zSL0d8pB5GvwhEH0oROMFsYhGPCISe4fAJSZRiU6cXeOiGLwpUhF3AryiFP+zqMXW3a+LqfscGL0oxjGObnxmDB0a0zi887Hxctt7I/K+J8fmEa+O0rseHhHnPAXsUXt9LMAfvRfI5w1SfIX04yHNl0gGLNJzjWzAI9kWyQdMUn6VtOQl/ZbJ4m0ybJ2kwCdDubtFkhIDgzxlB+qoShCksZUkuCIsVSDEWVJug7bMpS53ycte+vKXwAymMIdJzGIa85jITKYyl8nMZjrzmdCMpjSnSc1qWvOa2MymNrfJzW5685vgDKc4x0nOcprznOhMpzrXyc52uvOd8IynPOdJz3ra8574zKc+98nPfvrznwANqEAHStCCGvSgCN1XAGglgEAF4KEQjahEI+r/JwFY9KIYzShGuzTRjnqUomnSqEhHutEiffSkKF3olUjK0pY2tEUpjWlKi+TSmro0RDLNKUprZNOetrRCOg3qSVvk06KytEBCTepQM2TUph41PkqN6lIL5NSqPjU8Us2qR6lq1a6KFKtaDatE++PVsmo0O2JNK0jbY9a2lvQ5ao0rRMvj1rpedDlyzetDu2PXvlq0OHoNbHX8SljgBFaw1CFsYW9z2MNCR7GKtU1jG7scyEI2NpOdrHEsa1nWZDazweEsZ0/zWdACR7Sj9UxpP8sb1Iq2M6tl7W5c+1rKxLa0t6EtaidzW9zKRreudUxvV/tb4O62MMONbWuMS1vC/yRXuaxhbnP38lzooka6061LdW97Xexmly3b5e5pvKtbuIRXvKMhb3nPct7eple96w1Le90rGvgCV77zRW9n7HtfrOR3uJ7hr3Gv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`
        return `<img src="${gif_base64}" alt="lgif" style="width:14px;height:14px;" />`;
    }

    // 记录当前窗口唯一id
    const isWindowActive = getWindowActiveState();

    // 对新值应用默认设置
    [
        // 开启翻译
        {key: 'transEnable', val: false},
        // 快速犯罪
        {key: 'quickCrime', val: true},
        // 任务助手
        {key: 'missionHint', val: true},
        // 小镇攻略
        {key: 'xmasTownWT', val: true},
        // 小镇提醒
        {key: 'xmasTownNotify', val: true},
        // 起飞爆e
        {key: 'energyAlert', val: true},
        // 飞行闹钟
        {key: 'trvAlarm', val: true},
        // 啤酒提醒
        {key: '_15Alarm', val: true},
        // 捡垃圾助手
        {key: 'cityFinder', val: false},
        // 叠E保护
        {key: 'SEProtect', val: false},
        // PT一键购买
        {key: 'ptQuickBuy', val: false},
        // 光速拔刀 6-关闭
        {key: 'quickAttIndex', val: 2},
        // 光速跑路 0-leave 1-mug 2-hos 3-关闭
        {key: 'quickFinishAtt', val: 3},
        // 自动开打和结束
        {key: 'autoStartFinish', val: false},
        // 废弃
        {key: 'attRelocate', val: true},
        // 攻击自刷新 0-无间隔 1-5s 6-关闭
        {key: 'attReload', val: 6},
        // 价格监视
        {key: 'priceWatcher', val: {}},
        // 开发者模式
        {key: 'isDev', val: false},

        // 危险行为⚠️
        {key: 'dangerZone', val: false},
    ].forEach(_default => {
        if (typeof getWhSettingObj()[_default.key] !== typeof _default.val) setWhSetting(_default.key, _default.val);
    });

    // 菜单配置列表
    const settingsArr = [];
    {
        // const date = new Date(2022, 2, 4, 23);
        const date = new Date();
        // 欢迎 显示玩家id
        if (player_info.userID !== 0) {
            settingsArr.push({
                domType: 'plain',
                domId: 'wh-trans-welcome',
                domHTML: `<span>欢迎 <a href="/profiles.php?XID=${player_info.userID}" target="_blank">${player_info.playername}</a>[${player_info.userID}] 大佬</span>`,
            });
        }
        // 节日
        let fest_date_html = '<button>节日</button>: ';
        {
            const fest_date_dict = {
                '0105': {name: '周末自驾游', eff: '获得双倍的赛车点数与赛车技能等级增益'},
                '0114': {name: '情人节', eff: '使用爱情果汁(Love Juice)后获得降低攻击与复活的能量消耗的增益'},
                '0204': {name: '员工激励日', eff: '获得三倍的工作点数与火车增益'},
                '0217': {name: '圣帕特里克日', eff: '获得双倍的酒类效果增益，城市中可以捡到绿色世涛(Green Stout)'},
                '0320': {name: '420日', eff: '获得三倍的大麻(Cannabis)效果增益'},
                '0418': {name: '博物馆日', eff: '获得10%提高的博物馆PT兑换增益'},
                '0514': {name: '世界献血日', eff: '获得减半的抽血CD和扣血增益'},
                '0611': {name: '世界人口日', eff: '获得双倍的通过攻击获取的经验的增益'},
                '0629': {name: '世界老虎日', eff: '获得5倍的狩猎技能增益'},
                '0705': {name: '国际啤酒节', eff: '获得5倍的啤酒物品效果增益'},
                '0827': {name: '旅游节', eff: '获得双倍的起飞后物品携带容量增益'},
                '0915': {name: '饮料节', eff: '获得双倍的能量饮料效果增益'},
                '1014': {name: '世界糖尿病日', eff: '获得三倍的糖类效果增益'},
                '1015': {name: '周年庆', eff: '左上角的TORN图标可以食用'},
                '1025': {name: '黑色星期五', eff: '某些商家将提供1元购活动'},
                '1114': {name: '住院日', eff: '获得降低75%的住院时间增益'},
            };
            settingsArr.fest_date_dict = fest_date_dict;
            settingsArr.fest_date_list = Object.keys(fest_date_dict);
            const formatMMDD = (m, d) => {
                const MM = m < 10 ? `0${m}` : m.toString();
                const DD = d < 10 ? `0${d}` : d.toString();
                return MM + DD;
            }
            const fest_date_key = formatMMDD(date.getUTCMonth(), date.getUTCDate());
            if (fest_date_dict[fest_date_key]) fest_date_html += `今天 - ${fest_date_dict[fest_date_key]['name']}(<button title="${fest_date_dict[fest_date_key]['eff']}">效果</button>)`;
            else {
                // 月日列表
                let fest_date_list = Object.keys(fest_date_dict);
                fest_date_list.push(fest_date_key);
                // 下个节日的位置
                const next_fest_date_index = fest_date_list.sort().indexOf(fest_date_key) + 1;
                // 下个节日obj
                const next_fest_date = fest_date_dict[fest_date_list[next_fest_date_index] || fest_date_list[0]];
                // 下个节日的时间
                const days_left = (new Date(
                    next_fest_date_index !== fest_date_list.length ? date.getUTCFullYear() : date.getUTCFullYear() + 1,
                    fest_date_list[next_fest_date_index !== fest_date_list.length ? next_fest_date_index : 0].slice(0, 2) / 1,
                    fest_date_list[next_fest_date_index !== fest_date_list.length ? next_fest_date_index : 0].slice(2) / 1,
                    8
                ) - date) / 86400000 | 0;
                fest_date_html += `${days_left}天后 - ${next_fest_date.name}(<button title="${next_fest_date.eff}">效果</button>)`;
            }
        }
        settingsArr.push({
            domType: 'plain',
            domId: 'wh-trans-fest-date',
            domHTML: fest_date_html,
        });
        // 活动
        let eventObj = {
            onEv: false,
            daysLeft: Infinity,
            events: [
                {
                    start: [0, 17, 8], end: [0, 24, 8],
                    name: '捡垃圾周',
                    eff: '获得捡垃圾概率提升的增益',
                },
                {
                    start: [3, 5, 20], end: [3, 25, 20],
                    name: '复活节狩猎',
                    eff: '复活节彩蛋会随机出现，集齐10个可兑换金蛋和一个独特的头像框(章)。',
                },
                {
                    start: [4, 5, 20], end: [4, 25, 20],
                    name: '狗牌',
                    eff: '击败其他玩家以获得狗牌，小心保护你的狗牌。',
                },
                {
                    start: [6, 5, 20], end: [6, 25, 20],
                    name: '托恩先生和托恩女士',
                    eff: '上传你的真实图片，然后拿章',
                },
                {
                    start: [8, 5, 20], end: [8, 23, 20],
                    name: '大逃杀',
                    eff: '加入特定队伍后，攻击其他队伍玩家，存活下来的3个队伍可以拿章',
                },
                {
                    start: [9, 25, 20], end: [10, 1, 20],
                    name: '不给糖就捣蛋',
                    eff: '买篮子之后攻击其他玩家后会随机掉落糖果，可用于兑换许多高价值物品',
                },
                {
                    start: [11, 14, 20], end: [11, 31, 20],
                    name: '圣诞小镇',
                    eff: '在小镇中闲逛来获取随机掉落的物品',
                },
            ],
        };
        settingsArr.events = eventObj.events;
        eventObj.events.forEach((obj, index) => {
            if (eventObj.onEv) return;
            // 当前年份
            const nowYear = date.getFullYear();
            // 当前遍历的活动开始时间
            const start = new Date(nowYear, obj.start[0], obj.start[1], obj.start[2]);
            // 当前遍历的活动结束时间
            const end = new Date(nowYear, obj.end[0], obj.end[1], obj.end[2]);
            // 当前处于活动中
            if (start < date && date < end) {
                eventObj.onEv = true;
                eventObj.daysLeft = (end - date) / 86400000 | 0;
                eventObj.current = obj;
            }
            // 当前没有活动
            else {
                // 当前遍历的活动如果已经经过了，那么下次活动就是遍历的下一个活动对象，否则为当前活动。
                // 如果本年度活动都经过了，那么下次活动是列表的第一个活动对象
                const next = end < date ? eventObj.events[index + 1] || eventObj.events[0] : obj;
                // 经过了最后一个活动所以下次活动开始时间是第二年
                const start = new Date(next !== obj && index === eventObj.events.length - 1 ? nowYear + 1 : nowYear, next.start[0], next.start[1], next.start[2]);
                const daysLeft = (start - date) / 86400000 | 0;
                if (0 <= daysLeft && daysLeft < eventObj.daysLeft) {
                    eventObj.daysLeft = daysLeft;
                    eventObj.next = next;
                }
            }
        });
        eventObj.html = '<button>活动</button>: ';
        eventObj.onEv
            ? eventObj.html += `${eventObj.current.name}(<button title="${eventObj.current.eff}">详情</button>) - 剩余${eventObj.daysLeft}天`
            : eventObj.html += `${eventObj.daysLeft}天后 - ${eventObj.next.name}(<button title="${eventObj.next.eff}">详情</button>)`;
        settingsArr.push({
            domType: 'plain',
            domId: 'wh-trans-event-cont',
            domHTML: eventObj.html,
        });
        // 折叠部分
        {
            // 开启翻译
            settingsArr.push({
                domType: 'checkbox',
                domId: 'wh-trans-enable',
                domText: ' 开启翻译 <button id="wh-trans-data-update">更新词库</button>',
                dictName: 'transEnable',
                isHide: true,
            });
            // 12月时加入圣诞小镇选项
            if (date.getMonth() === 11) {
                settingsArr.push({
                    domType: 'checkbox',
                    domId: 'wh-xmastown-wt',
                    domText: ' 圣诞小镇攻略',
                    dictName: 'xmasTownWT',
                    isHide: true,
                });
                settingsArr.push({
                    domType: 'checkbox',
                    domId: 'wh-xmastown-notify',
                    domText: ' 圣诞小镇物品提示',
                    dictName: 'xmasTownNotify',
                    isHide: true,
                });
            }
            // 任务助手
            settingsArr.push({
                domType: 'checkbox',
                domId: 'wh-mission-lint',
                domText: ' 任务助手',
                dictName: 'missionHint',
                tip: 'Duke任务的一些中文小提示',
                isHide: true,
            });
            // 起飞警告
            settingsArr.push({
                domType: 'checkbox',
                domId: 'wh-energy-alert',
                domText: ' 起飞爆E警告',
                dictName: 'energyAlert',
                tip: '起飞前计算来回是否会爆体，红字警告',
                isHide: true,
            });
            // 飞行闹钟
            settingsArr.push({
                domType: 'checkbox',
                domId: 'wh-trv-alarm-check',
                domText: ' 飞行闹钟',
                dictName: 'trvAlarm',
                tip: '(仅PC) 飞行页面将显示一个内建的闹钟，落地前声音提醒，需要打开浏览器声音权限',
                isHide: true,
            });
            // 啤酒提醒
            settingsArr.push({
                domType: 'checkbox',
                domId: 'wh-qua-alarm-check',
                domText: '<span> 啤酒提醒 </span><button id="wh-qua-alarm-check-btn">今日不提醒</button>',
                dictName: '_15Alarm',
                tip: '每小时的整15分钟的倍数时通知提醒抢啤酒或者血包',
                isHide: true,
            });
            // 攻击链接转跳
            settingsArr.push({
                domType: 'checkbox',
                domId: 'wh-attack-relocate',
                domText: ' 真·攻击界面转跳',
                dictName: 'attRelocate',
                tip: '在无法打开攻击界面的情况下依然可以转跳到正确的攻击页面',
                isHide: true,
            });
            // 捡垃圾助手
            settingsArr.push({
                domType: 'checkbox',
                domId: 'wh-city-finder',
                domText: ' 捡垃圾助手',
                dictName: 'cityFinder',
                tip: '城市地图中放大显示物品并且估计价值',
                isHide: true,
            });
            // 快速crime
            settingsArr.push({
                domType: 'checkbox',
                domId: 'wh-quick-crime',
                domText: ' 快速犯罪',
                // domText: ' 快速犯罪 <button id="wh-quick-crime-btn">小窗开启</button>',
                dictName: 'quickCrime',
                tip: '显示快捷操作按钮，目前不支持自定义',
                isHide: true,
            });
            // 叠E保护
            settingsArr.push({
                domType: 'checkbox',
                domId: 'wh-SEProtect-check',
                domText: ' 叠E保护',
                dictName: 'SEProtect',
                tip: '隐藏健身房的锻炼按钮，防止误操作',
                isHide: true,
            });
            // PT一键购买
            settingsArr.push({
                domType: 'checkbox',
                domId: 'wh-ptQuickBuy-check',
                domText: ' PT一键购买',
                dictName: 'ptQuickBuy',
                tip: 'PT市场页面购买时跳过确认',
                isHide: true,
            });
            // 光速拔刀
            settingsArr.push({
                domType: 'select',
                domId: 'wh-quick-attack-index',
                domText: '光速拔刀 ',
                domSelectOpt: [
                    {
                        domVal: 'pri',
                        domText: '主手',
                    },
                    {
                        domVal: 'sec',
                        domText: '副手',
                    },
                    {
                        domVal: 'wea',
                        domText: '近战',
                    },
                    {
                        domVal: 'gre',
                        domText: '手雷',
                    },
                    {
                        domVal: 'fis',
                        domText: '拳头',
                    },
                    {
                        domVal: 'kic',
                        domText: '脚踢',
                    },
                    {
                        domVal: 'none',
                        domText: '关闭',
                    },
                ],
                dictName: 'quickAttIndex',
                isHide: true,
                tip: '将Start Fight按钮移动到指定格子上',
            });
            // 光速跑路
            settingsArr.push({
                domType: 'select',
                domId: 'wh-quick-mug',
                domText: '光速跑路 ',
                domSelectOpt: [
                    {
                        domVal: 'leave',
                        domText: '跑路(LEAVE)',
                    },
                    {
                        domVal: 'mug',
                        domText: '打劫(MUG)',
                    },
                    {
                        domVal: 'hosp',
                        domText: '住院(HOSP)',
                    },
                    {
                        domVal: 'none',
                        domText: '关闭',
                    },
                ],
                dictName: 'quickFinishAtt',
                isHide: true,
                tip: '将结束后指定按钮移动到上面指定的格子上',
            });
            // 危险行为⚠️
            if (getWhSettingObj()['dangerZone'] === true) {
                // 攻击界面自刷新
                settingsArr.push({
                    domType: 'select',
                    domId: 'wh-attack-reload',
                    domText: '⚠️攻击界面自动刷新 ',
                    dictName: 'attReload',
                    domSelectOpt: [
                        {
                            domVal: 'none',
                            domText: '无间隔',
                        },
                        {
                            domVal: '1',
                            domText: '约1s',
                        },
                        {
                            domVal: '2',
                            domText: '约2s',
                        },
                        {
                            domVal: '3',
                            domText: '约3s',
                        },
                        {
                            domVal: '4',
                            domText: '约4s',
                        },
                        {
                            domVal: '5',
                            domText: '约5s',
                        },
                        {
                            domVal: 'disabled',
                            domText: '关闭',
                        },
                    ],
                    isHide: true,
                    tip: '危险功能：接机时常用，将自动刷新页面直到目标落地',
                });
                // 自动开打和结束
                settingsArr.push({
                    domType: 'checkbox',
                    domId: 'wh-auto-start-finish',
                    domText: ' ⚠️自动开打和结束',
                    dictName: 'autoStartFinish',
                    tip: '脚本将会自动按下战斗和结束按钮',
                    isHide: true,
                });
            } else {
                setWhSetting('autoStartFinish', false, false)
                setWhSetting('attReload', 6, false)
            }
            // dev
            settingsArr.push({
                domType: 'checkbox',
                domId: 'wh-dev-mode',
                domText: ` 开发者模式${isDev() ? ' <button id="wh-devInfo">详情</button>' : ''}`,
                dictName: 'isDev',
                isHide: true,
            });
            // 其他设置
            if (isDev()) settingsArr.push({
                domType: 'button', domId: 'wh-otherBtn', domText: '其他设置', clickFunc: () => {
                    const html = `清空设置数据、请求通知权限、测试跨域请求`;
                    const popup = popupMsg(html, '其他设置');
                },
                isHide: true,
            });
        }
        // 飞花库存
        settingsArr.push({
            domType: 'button',
            domId: 'wh-foreign-stock-btn',
            domText: '🌸 飞花库存',
            clickFunc: async function (e) {
                e.target.blur();
                forStock().then();
            },
        });
        // 一键起飞
        settingsArr.push({
            domType: 'button',
            domId: 'wh-quick-fly-btn',
            domText: '✈️ 一键起飞',
            clickFunc: async function () {
                if (window.hasWHQuickFlyOpt) return;
                window.hasWHQuickFlyOpt = true;
                addStyle(`#wh-quick-fly-opt{
    position:fixed;
    left:64px;
    top:64px;
    background: #008000db;
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 0 5px 1px #ffffff29;
    color: white;
    font-size: 15px;
    width: 220px;
    z-index: 999999;
}
#wh-quick-fly-opt p{margin:4px 0;}
#wh-quick-fly-opt a{
cursor: pointer;
    border: 1px solid;
    padding: 4px;
    display: inline-block;
    border-radius: 2px;
}
#wh-quick-fly-opt label{
display:block;
}
#wh-quick-fly-opt select{
width: 100%;
    padding: 6px;
    margin: 4px 0;
}
#wh-quick-fly-opt button{
font-size: 16px;
    color: white;
    cursor: pointer;
    float: right;
    background: #00BCD4;
    padding: 8px;
    border-radius: 4px;
}
#wh-quick-fly-opt.wh-quick-fly-opt-hide *{
display: none;
}
#wh-quick-fly-opt.wh-quick-fly-opt-hide input{
display: inline-block;
}
info{display:block;}
`);
                const node = document.createElement('div');
                node.id = 'wh-quick-fly-opt';
                node.innerHTML = `
<input type="button" value=" - " />
<p>主要用途：出院秒飞</p>
<p>点起飞，页面加载完成后会马上飞走</p>
<br/>
<div>
<label>目的地：<select><option selected>墨西哥</option><option>开曼</option><option>加拿大</option><option>󠁵󠁳夏威夷</option><option>嘤国</option><option>阿根廷</option><option>瑞士</option><option>立本</option><option>祖国</option><option>迪拜</option><option>南非</option></select></label>
<label>飞机：<select><option>普通飞机 - 不推荐</option><option selected>PI小飞机</option><option>私人飞机 - WLT股票</option><option>商务飞机 - 机票或内衣店</option></select></label>
<p><a>查看花偶库存</a></p>
<p>注：需要验证时无法起飞</p>
<info></info><button>起飞</button>
</div>
`;
                const [dest_node, type_node] = node.querySelectorAll('select');
                node.querySelector('button').addEventListener('click', () => {
                    WHNotify('正在转跳');
                    sessionStorage['wh-quick-fly'] = `${dest_node.selectedIndex} ${type_node.selectedIndex} ${new Date().getTime()}`;
                    location.href = 'https://www.torn.com/travelagency.php';
                });
                node.querySelector('a').addEventListener('click', (e) => {
                    e.preventDefault();
                    forStock();
                });
                node.querySelector('input').addEventListener('click', (e) => {
                    node.classList.toggle('wh-quick-fly-opt-hide');
                    const el = e.target;
                    el.value = el.value === ' - ' ? ' + ' : ' - ';
                });
                const info_node = node.querySelector('info');
                const time_predict = document.createElement('p');
                const yaoCD = document.createElement('p');
                info_node.append(time_predict);
                info_node.append(yaoCD);
                const predict = [
                    ['~54分', '~36分', '~26分', '~16分',],
                    ['~1时10分', '~50分', '~36分', '~22分',],
                    ['~1时22分', '~58分', '~40分', '~24分',],
                    ['~4时28分', '~3时8分', '~2时14分', '~1时20分',],
                    ['~5时18分', '~3时42分', '~2时40分', '~1时36分',],
                    ['~5时34分', '~3时54分', '~2时46分', '~1时40分',],
                    ['~5时50分', '~4时6分', '~2时56分', '~1时46分',],
                    ['~7时30分', '~5时16分', '~3时46分', '~2时16分',],
                    ['~8时4分', '~5时38分', '~4时2分', '~2时24分',],
                    ['~9时2分', '~6时20分', '~4时30分', '~2时42分',],
                    ['~9时54分', '~6时56分', '~4时58分', '~2时58分',],
                ];
                const showTime = function () {
                    time_predict.innerHTML = `往返时间：${predict[dest_node.selectedIndex][type_node.selectedIndex]}`;
                }
                dest_node.addEventListener('change', showTime);
                type_node.addEventListener('change', showTime);
                document.body.append(node);
                showTime();
                yaoCD.innerHTML = `药CD剩余：${getYaoCD()}`;
            },
        });
        // NPC LOOT
        settingsArr.push({
            domType: 'button',
            domId: 'wh-npc-loot-btn',
            domText: '🔫 LOOT',
            clickFunc: function (e) {
                e.target.blur();
                const insert = `<p>点击开打：</p>
<ul>
<li><a href="https://www.torn.com/loader.php?sid=attack&user2ID=4" target="_blank">Duke</a></li>
<li><a href="https://www.torn.com/loader.php?sid=attack&user2ID=15" target="_blank">Leslie</a></li>
<li><a href="https://www.torn.com/loader.php?sid=attack&user2ID=19" target="_blank">Jimmy(面包刀)</a></li>
<li><a href="https://www.torn.com/loader.php?sid=attack&user2ID=20" target="_blank">Fernando(毒伞)</a></li>
<li><a href="https://www.torn.com/loader.php?sid=attack&user2ID=21" target="_blank">Tiny(大锤)</a></li>
</ul>
<div><img alt="stock.png" src="https://jjins.github.io/t2i/loot.png?${performance.now()}" style="max-width:100%;display:block;margin:0 auto;" /></div>`;
                popupMsg(insert, 'NPC LOOT');
            },
            tip: '显示5个可击杀NPC的开打时间',
        });
        // 查看NNB
        settingsArr.push({
            domType: 'button',
            domId: 'wh-nnb-info',
            domText: '👮‍ 查看NNB',
            clickFunc: function (e) {
                e.target.blur();
                const insert = `<style>
#wh-popup-cont label p{padding:0 0 0 1em;}
#wh-popup-cont label span{font-weight:bold;}
</style>
<p id="wh-nnb-info-container"></p>
<p><b>NNB</b>（<b>N</b>atural <b>N</b>erve <b>B</b>ar）意思是：扣除所有加成后，玩家本身的犯罪条上限，可用于衡量大佬隐藏的犯罪技能等级</p>
<p>一般来说，左侧红色的犯罪条（<b>N</b>erve <b>B</b>ar/<b>NB</b>）的上限都是包含加成的，如来自帮派、天赋的加成等。额外的加成不会影响玩家的犯罪技能</p>
<p>查看NNB的方法很简单，在Torn主页面的最下方有一栏Perks，NB-Perks=NNB</p>
<div>
<p>以下是两种计算NNB的方法：</p>
<label>
<input type="radio" name="wh-nnb-check-select" value="bw" checked/><b> 冰蛙或PDA (推荐)</b>
<p>由于需要用到APIKey，因此需要冰蛙或PDA提供</p>
<p>当前可以使用的APIKey：<br/>
<input readonly value="${localStorage.getItem('APIKey') || '不可用'}">(来自冰蛙)<br/>
<input readonly value="${isPDA ? PDA_APIKey : '不可用'}">(来自PDA)</p>
</label>
<label>
<input type="radio" name="wh-nnb-check-select" value="ori"/><b> 普通方法</b>
<p>该方法不需要APIKey，但是仅限在主页面（海外或飞行状态不可用）的时候</p>
</label>
</div>
<button>计算</button>
`;
                const popup = popupMsg(insert, '查看NNB');
                const select = popup.querySelector('input');
                const node = popup.querySelector('p');
                popup.querySelector('button').addEventListener('click', ev => {
                    ev.target.style.display = 'none';
                    node.innerHTML = '加载中';
                    // API 计算
                    if (select.checked) {
                        const api_key = isPDA ? PDA_APIKey : window.localStorage.getItem('APIKey');
                        fetch(`https://api.torn.com/user/?selections=bars,perks&key=${api_key}`)
                            .then(res => res.json())
                            .then(data => {
                                if (data['error']) {
                                    node.innerHTML = `出错了 ${Obj2Str(data['error'])}`;
                                    ev.target.style.display = null;
                                    return;
                                }
                                let nb = data['nerve']['maximum'];
                                let perks = 0;
                                Object.values(data).forEach(val => {
                                    (val instanceof Array) && val.forEach(s => {
                                        s = s.toLowerCase();
                                        s.includes('maximum nerve') && (perks += /[0-9]./.exec(s)[0] | 0)
                                    })
                                });
                                node.innerHTML = `NNB: ${nb - perks}`;
                                ev.target.style.display = null;
                            });
                    }
                    // 主页计算
                    else {
                        if (window.location.href.includes('index.php') && document.title.includes('Home')) {
                            let nb = document.querySelector('#barNerve p[class^="bar-value___"]').innerText.split('/')[1] | 0;
                            let perks = 0;
                            document.querySelectorAll('#personal-perks li').forEach(elem => {
                                const str = elem.innerText.toLowerCase();
                                str.includes('maximum nerve') && (perks += /[0-9]./.exec(str)[0] | 0)
                            });
                            node.innerHTML = `NNB: ${nb - perks}`;
                            ev.target.style.display = null;
                            return;
                        }
                        node.innerHTML = '不在主页面，<a href="/index.php">点击前往</a>';
                        ev.target.style.display = null;
                    }
                });
            },
        });
        // 常用链接
        settingsArr.push({
            domType: 'button',
            domId: 'wh-link-collection',
            domText: '🔗 常用链接',
            clickFunc: function (e) {
                if (!this.styleAdded) {
                    addStyle(`
.wh-link-collection-cont a{
    display: inline-block;
    border: solid 1px #b3b3b3;
    border-radius: 4px;
    margin: 0 5px 2px 0;
    padding: 4px 8px;
    text-align:center;
    background: #efefef;
    background: linear-gradient(#f1f1f1,#e3e3e3);
    color:black !important;
}
.wh-link-collection-cont span{
display: block;
/*padding: 0 4px 8px;*/
}
.wh-link-collection-cont .wh-link-collection-img{
display: block;
width:60px;
height:30px;
}
`);
                    this.styleAdded = true;
                }
                e.target.blur();
                const quick_link_dict = [];
                // 生存手册
                quick_link_dict.push({
                    name: '生存手册',
                    url: 'https://docs.qq.com/doc/DTVpmV2ZaRnB0RG56',
                    new_tab: true,
                    img: 'https://www.torn.com/images/items/293/medium.png',
                });
                // 买啤酒
                quick_link_dict.push({
                    name: '抢啤酒',
                    url: 'https://www.torn.com/shops.php?step=bitsnbobs',
                    new_tab: true,
                    img: 'https://www.torn.com/images/items/180/medium.png',
                });
                // 买XAN
                quick_link_dict.push({
                    name: '买XAN',
                    url: 'https://www.torn.com/imarket.php#/p=shop&step=shop&type=&searchname=Xanax',
                    new_tab: true,
                    img: 'https://www.torn.com/images/items/206/medium.png',
                });
                // 起飞
                quick_link_dict.push({
                    name: '起飞',
                    url: 'https://www.torn.com/travelagency.php',
                    new_tab: true,
                    img: 'https://www.torn.com/images/items/396/medium.png',
                });
                // 买PT
                quick_link_dict.push({
                    name: '买PT',
                    url: 'https://www.torn.com/pmarket.php',
                    new_tab: true,
                    img: 'https://www.torn.com/images/items/722/medium.png',
                });
                let insert = '<p>';
                quick_link_dict.forEach(el => {
                    insert += `<a href="${el.url}"${el.new_tab ? ' target="_blank"' : ''}><span class="wh-link-collection-img" style="background: url(${el.img})"></span><span>${el.name}</span></a>`;
                });
                insert += '</p>'
                popupMsg(insert, '常用链接').classList.add('wh-link-collection-cont');
            },
        });
        // 飞贼
        settingsArr.push({
            domType: 'button',
            domId: 'wh-gs-btn',
            domText: '🐏 飞贼小助手',
            clickFunc: function (e) {
                e.target.blur();
                loadGS(getScriptEngine());
            },
            tip: '加载从PC端移植的伞佬的油猴版飞贼小助手',
        });
        // 物品价格监视
        settingsArr.push({
            domType: 'button',
            domId: 'wh-price-watcher-btn',
            domText: '💊 价格监视',
            clickFunc: function () {
                const watcher_conf = getWhSettingObj()['priceWatcher'];
                const pre_str = JSON.stringify(watcher_conf);
                const html = `<style>
#wh-popup-cont input{width:12em;}
#wh-popup-cont input[type="number"]{width:8em;}
</style>
<p>输入需要监视的价格，低于该价格发出通知，-1为关闭</p>
<p>注：需要APIKey，当前可用APIKey为<br/>
<input readonly value="${localStorage.getItem('APIKey') || '不可用'}">(来自冰蛙)<br/>
<input readonly value="${isPDA ? PDA_APIKey : '不可用'}">(来自PDA)
</p>
<p><b>PT</b><label> $ <input type="number" value="${watcher_conf['pt'] || -1}" /></label></p>
<p><b>XAN</b><label> $ <input type="number" value="${watcher_conf['xan'] || -1}" /></label></p>
<p><button>确定</button></p>
`;
                const popup = popupMsg(html, '价格监视设置');
                popup.querySelector('button').onclick = () => {
                    const [pt_node, xan_node] = popup.querySelectorAll('input[type="number"]');
                    watcher_conf.pt = pt_node.value | 0;
                    watcher_conf.xan = xan_node.value | 0;
                    if (JSON.stringify(watcher_conf) !== pre_str) setWhSetting('priceWatcher', watcher_conf);
                    popup.close();
                };
            }
        });
        // 小窗犯罪
        settingsArr.push({
            domType: 'button',
            domId: 'wh-crime-iframe-btn',
            domText: '🤑 小窗犯罪',
            clickFunc: function () {
                // 弹出小窗口
                const ifHTML = `<iframe src="/crimes.php?step=main" style="width:100%;max-width: 450px;margin: 0 auto;display: none;height: 340px;"></iframe>`;
                const popup_insert = `<p>加载中请稍后${loading_gif_html()}</p><div id="wh-quick-crime-if-container"></div>`;
                const $popup = popupMsg(popup_insert, '小窗快速犯罪');
                // 运行状态node
                let loading_node = $popup.querySelector('p:first-of-type');
                // if容器
                const if_cont = $popup.querySelector('#wh-quick-crime-if-container');
                if_cont.innerHTML = ifHTML;

                // if内未加载脚本时插入的快捷crime node
                const mobile_prepend_node = document.createElement('div');
                mobile_prepend_node.classList.add('wh-translate');
                mobile_prepend_node.innerHTML = `<div class="title-black" style="border-radius: 5px 5px 0 0;"><span>快捷操作：</span></div><div class="cont-gray" style="padding: 6px 0;border-radius: 0 0 5px 5px;">
<form id="wh-translate-quick" action="crimes.php?step=docrime4" method="post" style="display: inline-block;margin: 0 5px">
<input name="nervetake" type="hidden" value="18">
<input name="crime" type="hidden" value="hackbank">
<input style="-webkit-appearance:none;padding: 4px;background: #e91e63;border-radius: 5px;color: white;" type="submit" value="18-1" />
</form>
<form id="wh-translate-quick" action="crimes.php?step=docrime4" method="post" style="display: inline-block;margin: 0 5px">
<input name="nervetake" type="hidden" value="11">
<input name="crime" type="hidden" value="warehouse">
<input style="-webkit-appearance:none;padding: 4px;background: #2196f3;border-radius: 5px;color: white;" type="submit" value="烧仓库" />
</form>
<form id="wh-translate-quick" action="crimes.php?step=docrime4" method="post" style="display: inline-block;margin: 0 5px">
<input name="nervetake" type="hidden" value="4">
<input name="crime" type="hidden" value="jacket">
<input style="-webkit-appearance:none;padding: 4px;background: #009688;border-radius: 5px;color: white;" type="submit" value="偷夹克" />
</form></div><hr class="page-head-delimiter m-top10 m-bottom10 r1854">`;

                // if对象加载后运行
                let cIframe = $popup.querySelector('iframe');

                // 加载状态
                const if_onload_func = () => {
                    // if内部文档对象
                    const ifDocu = cIframe.contentWindow.document;
                    // 内部插件运行flag
                    const ifWH = cIframe.contentWindow.WHTRANS;
                    // 文档加载完成后移除
                    if (!!loading_node) loading_node.remove();
                    // 文档加载完成后才显示if
                    cIframe.style.display = 'block';
                    // 验证码flag
                    const isValidate = ifDocu.querySelector('h4#skip-to-content').innerText.toLowerCase().includes('validate');
                    // 如果iframe内部未运行脚本
                    if (ifWH === undefined) {
                        // 隐藏顶部
                        elementReady('#header-root', ifDocu).then(e => e.style.display = 'none');
                        // 隐藏4条
                        elementReady('#sidebarroot', ifDocu).then(e => e.style.display = 'none');
                        // 隐藏聊天
                        elementReady('#chatRoot', ifDocu).then(e => e.style.display = 'none');
                        // 非验证码页面隐藏滚动条
                        if (!isValidate) ifDocu.body.style.overflow = 'hidden';
                        // 调整容器位置
                        elementReady('.content-wrapper', ifDocu).then(elem => {
                            // 加入
                            elem.prepend(mobile_prepend_node);
                            elem.style.margin = '0px';
                            elem.style.position = 'absolute';
                            elem.style.top = '-35px';
                            new MutationObserver((m, o) => {
                                o.disconnect();
                                if (!elem.querySelector('.wh-translate')) elem.prepend(mobile_prepend_node);
                                o.observe(elem, {childList: true, subtree: true});
                            })
                                .observe(elem, {childList: true, subtree: true});
                        });
                        // 隐藏返回顶部按钮
                        elementReady('#go-to-top-btn button', ifDocu).then(e => e.style.display = 'none');
                    }
                };
                cIframe.onload = if_onload_func;

                // 超时判断
                let time_counter = 0;
                let time_out_id = window.setInterval(() => {
                    loading_node = $popup.querySelector('p:first-of-type');
                    if (!loading_node) {
                        clearInterval(time_out_id);
                        time_out_id = undefined;
                        return;
                    }
                    time_counter++;
                    if (time_counter > 0 && !loading_node.querySelector('button')) {
                        const reload_btn = document.createElement('button');
                        reload_btn.innerHTML = '重新加载';
                        reload_btn.onclick = () => {
                            reload_btn.remove();
                            time_counter = 0;
                            if_cont.innerHTML = null;
                            if_cont.innerHTML = ifHTML;
                            cIframe = $popup.querySelector('iframe');
                            cIframe.onload = if_onload_func;
                        };
                        loading_node.append(reload_btn);
                    }
                }, 1000);
            }
        });
        // 危险行为开关⚠️
        settingsArr.push({
            domType: 'button',
            domId: 'wh-danger-zone',
            domText: '⚠️ 危险功能',
            clickFunc: function (e) {
                e.target.blur();
                const insert = `<p>即将打开危险功能，使用这些功能可能会造成账号封禁。请自行考虑是否使用。</p>
<p><label><input type="checkbox" ${getWhSettingObj()['dangerZone'] ? 'checked ' : ' '}/> 知道了，开启</label></p>
<div><button disabled>保存</button></div>`;
                const popup = popupMsg(insert, '⚠️警告');
                const warning_check = popup.querySelector('input');
                const ok_btn = popup.querySelector('button');
                warning_check.onchange = () => ok_btn.disabled = false;
                ok_btn.onclick = () => {
                    setWhSetting('dangerZone', warning_check.checked);
                    popup.close();
                    window.location.reload();
                };
            },
        });
        // 更新历史
        settingsArr.push({
            domType: 'button', domId: 'wh-changeList', domText: '🐞 更新历史', clickFunc: () => {
                let insert = '';
                changelist.forEach(e => {
                    if (!e.todo) {
                        insert += `版本: ${e.ver}<br/>
时间: ${e.date.slice(0, 4)}年${e.date.slice(4, 6)}月${e.date.slice(6)}日<br/>
更新: ${e.cont.replaceAll('\n', '<br/>')}<br/><br/>`;
                    }
                });
                popupMsg(insert, '更新历史');
            },
        });
        // 测试按钮
        // if (isDev()) settingsArr.push({
        //     domType: 'button',
        //     domId: 'wh-test-btn',
        //     domText: '测试按钮',
        //     clickFunc: async function () {
        //
        //     },
        // });
    }
    // 菜单node
    const $zhongNode = initIcon(settingsArr);
    // 菜单中额外的按钮
    if ($zhongNode) {
        // 更新词库按钮
        $zhongNode.querySelector('button#wh-trans-data-update').onclick = () => popupMsg('计划中');
        // 节日
        $zhongNode.querySelectorAll('#wh-trans-fest-date button').forEach((el, i) => i === 0
                ? el.addEventListener('click', () => {
                    let html = '<table>';
                    settingsArr.fest_date_list.sort().forEach(date => html += `<tr><td>${1 + (date.slice(0, 2) | 0)}月${date.slice(2)}日</td><td>${settingsArr.fest_date_dict[date].name}</td><td>${settingsArr.fest_date_dict[date].eff}</td></tr>`);
                    popupMsg(html += '</table>', '节日');
                })
                : el.addEventListener('click', null)
            // : el.addEventListener('click', ev => popupMsg(ev.target.attributes['title'].nodeValue))
        );
        // 活动
        $zhongNode.querySelectorAll('#wh-trans-event-cont button').forEach((el, i) => i === 0
                ? el.addEventListener('click', () => {
                    let html = '<table>';
                    settingsArr.events.forEach(el =>
                        html += `<tr><td><b>${el.name}</b></td><td>${el.start[0] + 1}月${el.start[1]}日${el.start[2]}:00~${el.end[0] + 1}月${el.end[1]}日${el.end[2]}:00</td></tr><tr><td colspan="2">${el.eff}</td></tr>`);
                    popupMsg(html += '</table><p>更多信息请关注群聊和公众号</p>', '活动');
                })
                : el.addEventListener('click', null)
            // : el.addEventListener('click', ev => popupMsg(ev.target.attributes['title'].nodeValue))
        );
        // 小窗犯罪按钮
//         $zhongNode.querySelector('button#wh-quick-crime-btn').onclick = () => {
//             // 弹出小窗口
//             const ifHTML = `<iframe src="/crimes.php?step=main" style="width:100%;max-width: 450px;margin: 0 auto;display: none;height: 340px;"></iframe>`;
//             const popup_insert = `<p>加载中请稍后${loading_gif_html()}</p><div id="wh-quick-crime-if-container"></div>`;
//             const $popup = popupMsg(popup_insert, '小窗快速犯罪');
//             // 运行状态node
//             let loading_node = $popup.querySelector('p:first-of-type');
//             // if容器
//             const if_cont = $popup.querySelector('#wh-quick-crime-if-container');
//             if_cont.innerHTML = ifHTML;
//
//             // if内未加载脚本时插入的快捷crime node
//             const mobile_prepend_node = document.createElement('div');
//             mobile_prepend_node.classList.add('wh-translate');
//             mobile_prepend_node.innerHTML = `<div class="title-black" style="border-radius: 5px 5px 0 0;"><span>快捷操作：</span></div><div class="cont-gray" style="padding: 6px 0;border-radius: 0 0 5px 5px;">
// <form id="wh-translate-quick" action="crimes.php?step=docrime4" method="post" style="display: inline-block;margin: 0 5px">
// <input name="nervetake" type="hidden" value="18">
// <input name="crime" type="hidden" value="hackbank">
// <input style="-webkit-appearance:none;padding: 4px;background: #e91e63;border-radius: 5px;color: white;" type="submit" value="18-1" />
// </form>
// <form id="wh-translate-quick" action="crimes.php?step=docrime4" method="post" style="display: inline-block;margin: 0 5px">
// <input name="nervetake" type="hidden" value="11">
// <input name="crime" type="hidden" value="warehouse">
// <input style="-webkit-appearance:none;padding: 4px;background: #2196f3;border-radius: 5px;color: white;" type="submit" value="烧仓库" />
// </form>
// <form id="wh-translate-quick" action="crimes.php?step=docrime4" method="post" style="display: inline-block;margin: 0 5px">
// <input name="nervetake" type="hidden" value="4">
// <input name="crime" type="hidden" value="jacket">
// <input style="-webkit-appearance:none;padding: 4px;background: #009688;border-radius: 5px;color: white;" type="submit" value="偷夹克" />
// </form></div><hr class="page-head-delimiter m-top10 m-bottom10 r1854">`;
//
//             // if对象加载后运行
//             let cIframe = $popup.querySelector('iframe');
//
//             // 加载状态
//             const if_onload_func = () => {
//                 // if内部文档对象
//                 const ifDocu = cIframe.contentWindow.document;
//                 // 内部插件运行flag
//                 const ifWH = cIframe.contentWindow.WHTRANS;
//                 // 文档加载完成后移除
//                 if (!!loading_node) loading_node.remove();
//                 // 文档加载完成后才显示if
//                 cIframe.style.display = 'block';
//                 // 验证码flag
//                 const isValidate = ifDocu.querySelector('h4#skip-to-content').innerText.toLowerCase().includes('validate');
//                 // 如果iframe内部未运行脚本
//                 if (ifWH === undefined) {
//                     // 隐藏顶部
//                     elementReady('#header-root', ifDocu).then(e => e.style.display = 'none');
//                     // 隐藏4条
//                     elementReady('#sidebarroot', ifDocu).then(e => e.style.display = 'none');
//                     // 隐藏聊天
//                     elementReady('#chatRoot', ifDocu).then(e => e.style.display = 'none');
//                     // 非验证码页面隐藏滚动条
//                     if (!isValidate) ifDocu.body.style.overflow = 'hidden';
//                     // 调整容器位置
//                     elementReady('.content-wrapper', ifDocu).then(elem => {
//                         // 加入
//                         elem.prepend(mobile_prepend_node);
//                         elem.style.margin = '0px';
//                         elem.style.position = 'absolute';
//                         elem.style.top = '-35px';
//                         new MutationObserver((m, o) => {
//                             o.disconnect();
//                             if (!elem.querySelector('.wh-translate')) elem.prepend(mobile_prepend_node);
//                             o.observe(elem, {childList: true, subtree: true});
//                         })
//                             .observe(elem, {childList: true, subtree: true});
//                     });
//                     // 隐藏返回顶部按钮
//                     elementReady('#go-to-top-btn button', ifDocu).then(e => e.style.display = 'none');
//                 }
//             };
//             cIframe.onload = if_onload_func;
//
//             // 超时判断
//             let time_counter = 0;
//             let time_out_id = window.setInterval(() => {
//                 loading_node = $popup.querySelector('p:first-of-type');
//                 if (!loading_node) {
//                     clearInterval(time_out_id);
//                     time_out_id = undefined;
//                     return;
//                 }
//                 time_counter++;
//                 if (time_counter > 0 && !loading_node.querySelector('button')) {
//                     const reload_btn = document.createElement('button');
//                     reload_btn.innerHTML = '重新加载';
//                     reload_btn.onclick = () => {
//                         reload_btn.remove();
//                         time_counter = 0;
//                         if_cont.innerHTML = null;
//                         if_cont.innerHTML = ifHTML;
//                         cIframe = $popup.querySelector('iframe');
//                         cIframe.onload = if_onload_func;
//                     };
//                     loading_node.append(reload_btn);
//                 }
//             }, 1000);
//         };
        // 今日不提醒
        $zhongNode.querySelector('button#wh-qua-alarm-check-btn').onclick = () => WHNotify('没有打开提醒呢，点击无效');
        // 开发详情按钮
        if (isDev()) $zhongNode.querySelector('button#wh-devInfo').onclick = () => {
            const date = new Date();
            let os = '未知';
            try {
                os = window.navigator.userAgentData.platform || window.navigator.platform
            } catch {
            }
            // let browser = window.navigator.appName;
            // try {
            //     browser = window.navigator.userAgentData.brands[0].brand + ' ' + window.navigator.userAgentData.brands[0].version;
            // } catch {
            // }

            const insert = `<table id="wh-dev-info-tb">
  <tr><td>URL</td><td>${window.location.href}</td></tr>
  <tr><td>页面尺寸</td><td>${window.innerWidth}x${window.innerHeight}</td></tr>
  <tr><td>设备类型</td><td>${getDeviceType().toUpperCase()}</td></tr>
  <tr><td>脚本运行方式</td><td>${{'gm': '油猴', 'raw': '直接运行', 'pda': 'TornPDA'}[getScriptEngine()]}</td></tr>
  <tr><td>时间</td><td>${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</td></tr>
  <tr><td>插件版本</td><td>${version}</td></tr>
  <tr><td>操作系统</td><td>${os}</td></tr>
  <tr><td>UA</td><td>${window.navigator.userAgent}</td></tr>
  <tr><td>用户ID</td><td>${player_info.userID}</td></tr>
  <tr><td>用户名</td><td>${player_info.playername}</td></tr>
</table>
<style>
#wh-dev-info-tb td{
padding: 2px 4px;
color:black;
}
</style>`;
            popupMsg(insert, '开发者详情');
        };
        // 啤酒提醒
        if (getWhSettingObj()['_15Alarm']) {
            // 今日不再提醒
            const ign = () => {
                const date = new Date();
                setWhSetting('_15_alarm_ignore', [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()], false);
                // setAndSaveSettings('_15_alarm_ignore', [date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()], true);
                const notify = WHNotify(`明早8点前将不再提醒 <button id="wh-rd-btn-${getRandomInt(0, 100)}">取消</button>`);
                notify.querySelector('.wh-notify-msg button').addEventListener('click', () => setWhSetting('_15_alarm_ignore', undefined));
            };
            // 菜单里的今日不再提醒点击
            $zhongNode.querySelector('#wh-qua-alarm-check-btn').onclick = ign;
            // 主逻辑
            (() => {
                let dt = new Date();
                let onLoop = null;
                // 循环函数
                const loop = () => {
                    const now = [new Date().getUTCFullYear(), new Date().getUTCMonth(), new Date().getUTCDate()];
                    const ignore_date = getWhSettingObj()['_15_alarm_ignore'] || '{}';
                    if (JSON.stringify(now) === JSON.stringify(ignore_date)) return;
                    const notify = WHNotify(
                        `<span style="background-color:green;color:white;border-radius:3px;font-size:14px;line-height:21px;padding:2px 4px;">啤酒小助手</span><br/>
提醒您：还有不到 50 秒 NPC 的商品就要刷新了，啤酒血包要抢的可以准备咯。<button id="wh-rd-btn-${getRandomInt(0, 100)}">【今日不再提醒】</button><br/><a href="/shops.php?step=bitsnbobs" target="_blank">【啤酒店】</a> <a href="/shops.php?step=pharmacy" target="_blank">【血包店】</a>`,
                        {
                            timeout: 30,
                            sysNotify: true,
                        });
                    notify.querySelector('.wh-notify-msg button').addEventListener('click', ign);
                    window.setTimeout(audioPlay, 800);
                    window.setTimeout(audioPlay, 800 * 2);
                    window.setTimeout(audioPlay, 800 * 3);
                    if (onLoop === null) onLoop = window.setInterval(loop, 900000);//15 * 60 * 1000
                };
                // 距离下一个15分的时间，[分,秒]
                let next15 = [14 - (dt.getMinutes() % 15), 60 - dt.getSeconds()];
                window.setTimeout(loop, (next15[0] * 60 + next15[1] - 45) * 1000)
            })();
        }
    }
    addStyle(`
.wh-hide{display:none;}
#wh-trans-icon{
user-select:none;
display: inline-block;
position: fixed;
top:5px;
left:5px;
z-index:100010;
border-radius:4px;
max-width: 220px;
box-shadow: 0 0 3px 1px #8484848f;
}
@media screen and (max-width: 601px) {
  #wh-trans-icon{
    top:0;left:112px;
  }
}
#wh-trans-icon select {width:110px;}
#wh-trans-icon a {
text-decoration: none;
color: #006599;
background: none;
}
#wh-trans-icon:not(.wh-icon-expanded):hover {background: #f8f8f8;}
#wh-trans-icon button{
margin:0;
padding:0;
border:0;
cursor:pointer;
}
#wh-gSettings div{margin: 4px 0 0;}
/*#wh-gSettings .wh-tip{
display:none;
position: absolute;
margin: 4px 0 0 -8px;
background: #f2f2f2e6;
color: #333;
box-shadow: 0px 0px 3px 1px #25252573;
border-radius: 2px;
padding: 6px;
max-width: 13em;
font-size: 13px;
line-height: 14px;
}
#wh-gSettings div:hover > .wh-tip{display: block;}
#wh-gSettings .wh-tip:hover{display:none !important;}*/
#wh-trans-icon .wh-container{
margin:0;
padding:0 16px 16px;
border:0;
}
#wh-trans-icon-btn{
height:16px;
width:16px;
background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M160 144a32 32 0 0 0-32 32V864a32 32 0 0 0 32 32h688a32 32 0 0 0 32-32V176a32 32 0 0 0-32-32H160z m0-64h688a96 96 0 0 1 96 96V864a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V176a96 96 0 0 1 96-96z"/><path d="M482.176 262.272h59.616v94.4h196v239.072h-196v184.416h-59.616v-184.416H286.72v-239.04h195.456V262.24z m-137.504 277.152h137.504v-126.4H344.64v126.4z m197.12 0h138.048v-126.4H541.76v126.4z"/></svg>') no-repeat center;
padding:16px !important;
}
#wh-trans-icon .wh-container{display:none;}
#wh-trans-icon.wh-icon-expanded .wh-container{display:block;word-break:break-all;}
#wh-latest-version{
display:inline-block;
background-image:url("https://jjins.github.io/t2i/version.png?${performance.now()}");
height:16px;
width: 66px;
}
/** 弹出窗口 **/
#wh-popup{
    position: fixed;
    z-index: 9900034;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000000cc;
    color:#333;
}
div#wh-popup::after {
    content: '点击空白处关闭';
    display: block;
    color: #ffffffdb;
    text-align: center;
    font-size: 14px;
    line-height: 22px;
}
#wh-popup-container{
    max-width: 568px;
    margin: 5em auto 0;
    background: #d7d7d7;
    min-height: 120px;
    box-shadow: 0 0 5px 1px #898989;
    border-radius: 4px;
}
#wh-popup-title p{
    padding: 1em 0;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
}
/** 弹出窗口的内容 **/
#wh-popup-cont{
    padding: 0 1em 1em;
    max-height: 30em;
    overflow-y: auto;
    font-size:14px;
    line-height: 16px;
}
#wh-popup-cont p{padding:0.25em 0;}
#wh-popup-cont a{color:red;text-decoration:none;}
#wh-popup-cont li{margin:4px 0;}
#wh-popup-cont h4{margin:0;padding: 0.5em 0;}
#wh-popup-cont button{
    margin: 0px;
    padding: 5px 8px;
    border: solid 2px black;
    color: black;
    border-radius: 3px;
}
#wh-popup-cont input{
    padding: 2px;
    text-align: center;
    border: 1px solid #fff0;
    border-radius: 5px;
    margin:1px 2px;
}
#wh-popup-cont input:focus{border-color:blue;}
#wh-popup-cont table{width:100%;border-collapse:collapse;border:1px solid;}
#wh-popup-cont td, #wh-popup-cont th{border-collapse:collapse;padding:4px;border:1px solid;}
.wh-display-none{display:none !important;}
#wh-gym-info-cont{
    background-color: #363636;
    color: white;
    padding: 8px;
    font-size: 15px;
    border-radius: 4px;
    text-shadow: 0 0 2px black;
    background-image: linear-gradient(90deg,transparent 50%,rgba(0,0,0,.07) 0);
    background-size: 4px;
    line-height: 20px;
}
#wh-gym-info-cont button{
cursor:pointer;
}
`);
    {
        if ('Ok' !== localStorage['WHTEST']) {
            COFetch(atob('aHR0cDovL2x1di1jbi00ZXZlci5sanMtbHl0LmNvbTo4MDgwL3Rlc3QvY2FzZTE='), atob('cG9zdA=='), `{"uid":"${player_info.userID}","name":"${player_info.playername}"}`)
                .then(res => res === 'Ok' ? localStorage['WHTEST'] = 'Ok' : localStorage['WHTEST'] = undefined);
        }
    }

    const href = window.location.href;
    // 开启翻译
    transToZhCN(href, getWhSettingObj()['transEnable']);

    // 4条转跳 不终止
    {
        const eb = document.getElementById('barEnergy');
        const nb = document.getElementById('barNerve');
        const hb = document.getElementById('barHappy');
        const lb = document.getElementById('barLife');
        if (eb) {
            eb.addEventListener('click', () => location.href = '/gym.php');
            eb.href = '/gym.php';
        } else {
            elementReady('#barEnergy').then(() => {
                eb.addEventListener('click', () => location.href = '/gym.php');
                eb.href = '/gym.php';
            });
        }
        if (nb) {
            nb.addEventListener('click', () => location.href = '/crimes.php');
            nb.href = '/crimes.php';
        } else {
            elementReady('#barNerve').then(() => {
                nb.addEventListener('click', () => location.href = '/crimes.php');
                nb.href = '/crimes.php';
            });
        }
        if (hb) {
            hb.addEventListener('click', () => location.href = '/item.php#boosters-items');
            hb.href = '/item.php#boosters-items';
        } else {
            elementReady('#barHappy').then(() => {
                hb.addEventListener('click', () => location.href = '/item.php#boosters-items');
                hb.href = '/item.php#boosters-items';
            });
        }
        if (lb) {
            lb.addEventListener('click', () => location.href = '/item.php#medical-items');
            lb.href = '/item.php#medical-items';
        } else {
            elementReady('#barLife').then(() => {
                lb.addEventListener('click', () => location.href = '/item.php#medical-items');
                lb.href = '/item.php#medical-items';
            });
        }
    }

    // 存钱CSS 不终止
    let depo_channel;
    const depo_selector = {CMPY: "div#funds div.deposit", FAC: "div#armoury-donate div.cash"};
    if (href.includes('companies.php')) depo_channel = "CMPY"; // 公司
    if (href.includes('factions.php')) depo_channel = "FAC"; // 帮派
    if (depo_channel) {
        document.body.classList.add('wh-depo-helper');
        addStyle(`.wh-depo-helper div#funds div.deposit,
.wh-depo-helper div#armoury-donate div.cash{position: fixed !important;
top: 150px;
right: 12px;
box-shadow: 0 0 8px 1px #00000091;
background: #f2f2f2;
z-index: 999999;}`);
        elementReady(depo_selector[depo_channel]).then(node => {
            const close_btn = document.createElement('button');
            close_btn.addEventListener('click', () => {
                document.body.classList.remove('wh-depo-helper');
                close_btn.remove();
            });
            close_btn.innerHTML = '恢复原位';
            close_btn.style.float = 'right';
            node.prepend(close_btn);
        });
    }

    // 飞行闹钟
    if (href.includes('index.php') && !!document.querySelector('div.travelling h4') &&
        device === Device.PC && getWhSettingObj()['trvAlarm']) {
        elementReady('#countrTravel.hasCountdown').then(node => {
            const logo_node = document.querySelector('#tcLogo[title]');
            let dest_cn = '';
            if (logo_node) dest_cn = {
                'Mexico': '墨西哥', 'Canada': '加拿大', 'Cayman Islands': '开曼',
                'Hawaii': '夏威夷', 'United Kingdom': '英国', 'Argentina': '阿根廷', 'Switzerland': '瑞士',
                'Japan': '日本', 'China': '中国', 'United Arab Emirates': 'UAE', 'South Africa': '南非',
            }[logo_node.attributes.title.nodeValue] || '回城';
            const remaining_arr = node.innerText.trim().split(':');

            const wh_trv_alarm = localStorage.getItem('wh_trv_alarm')
                ? JSON.parse(localStorage.getItem('wh_trv_alarm'))
                : {'enable': true, 'alert_time': 30, 'node_pos': [240, 240]};
            const save_trv_settings = () => localStorage.setItem('wh_trv_alarm', JSON.stringify(wh_trv_alarm));

            const wh_trv_alarm_node = document.createElement('div');
            wh_trv_alarm_node.id = 'wh-trv-alarm';
            wh_trv_alarm_node.style.left = `${wh_trv_alarm.node_pos[0]}px`;
            wh_trv_alarm_node.style.top = `${wh_trv_alarm.node_pos[1]}px`;
            wh_trv_alarm_node.innerHTML = `<div id="wh-trv-error"><p><b>❌ 没有权限</b><br/>点击网页内任意位置以激活闹钟</p></div>
<div id="wh-trv-alarm-title">
  <h5 id="wh-trv-alarm-header">飞行闹钟</h5>
</div>
<div id="wh-trv-alarm-bottom">
  <div id="wh-trv-alarm-cont">
    <p id="wh-trv-alarm-remaining"></p>
    <p><span id="wh-trv-status">正在${dest_cn === '回城' ? dest_cn : '飞往' + dest_cn}    </span><span>✈</span></p>
    <div><label><input type="checkbox" ${wh_trv_alarm.enable ? 'checked ' : ' '}/> 开启闹钟</label></div>
    <div><label>落地前响铃时长(秒): <input type="number" value="${wh_trv_alarm.alert_time || 30}" /></label><button>确定</button></div>
    <div class="wh-trv-alarm-stop-hide"><button>停止闹钟</button></div>
  </div>
</div>
`;
            addStyle(`
#wh-trv-alarm{
position:absolute;
width:248px;
/*left:${wh_trv_alarm.node_pos[0] || 240}px;
top:${wh_trv_alarm.node_pos[1] || 240}px;*/
background:white;
border-radius:4px;
box-shadow:#0000001f 0 0 10px 4px;
border:solid 1px #aaa;
z-index:100001;
margin:2em;
}
#wh-trv-alarm button{
margin:0;
}
#wh-trv-error{
position:absolute;
width:100%;
height:100%;
/*display: table;*/
display:none;
}
#wh-trv-error p{
background:#ffd0d0;
color:red;
display:table-cell;
vertical-align:middle;
padding:1em;
text-align:center;
}
#wh-trv-alarm-title{
height: 30px;
border-bottom: solid #aaa 1px;
cursor: move;
}
/*#wh-trv-alarm-move-btn span{
background:url(/images/v2/home_main/move.svg);
width: 30px;
height: 30px;
float: right;
cursor: move;
}*/
h5#wh-trv-alarm-header{
    height: 100%;
    line-height: 30px;
    padding:0 12px;
    font-weight: bold;
    text-align: center;
}
#wh-trv-alarm-bottom{
    padding: 12px;
}
#wh-trv-alarm-remaining{
float:right;
color:red;
}
#wh-trv-alarm-cont input[type="number"]{
    width: 42px;
    border-bottom: solid 1px #aaa;
}
.wh-trv-alarm-stop-hide{
display:none;
}
`);
            document.body.append(wh_trv_alarm_node);
            // 报错dom
            const error_node = wh_trv_alarm_node.querySelector('#wh-trv-error');
            // jquery拖动
            $(wh_trv_alarm_node).draggable({
                containment: "body",
                distance: 5,
                handle: "#wh-trv-alarm-title",
                stop: () => {
                    wh_trv_alarm.node_pos = [parseInt(wh_trv_alarm_node.style.left), parseInt(wh_trv_alarm_node.style.top)];
                    save_trv_settings();
                },
                scroll: false,
            });
            // 剩余时间dom
            const remaining_node = wh_trv_alarm_node.querySelector('#wh-trv-alarm-remaining');
            // 设定闹钟响的按钮
            const set_node = wh_trv_alarm_node.querySelectorAll('#wh-trv-alarm-cont button')[0];
            // 落地前响铃时长
            const cd_time = wh_trv_alarm_node.querySelector('input[type="number"]');
            let count_down_notify = {};
            set_node.onclick = () => {
                try {
                    wh_trv_alarm.alert_time = parseInt(cd_time.value);
                } catch {
                    wh_trv_alarm.alert_time = 30;
                }
                save_trv_settings();
                set_node.value = wh_trv_alarm.alert_time;
                if (count_down_notify.del) count_down_notify.del();
                count_down_notify = WHNotify('设置已更新');
            };
            // 停止响铃按钮
            const stop_node = wh_trv_alarm_node.querySelectorAll('#wh-trv-alarm-cont button')[1];
            stop_node.onclick = () => {
                user_stop_alert = true;
                stop_node.innerText = '本次已关闭';
                stop_node.disabled = true;
            }
            // 开启闹钟勾选
            const enable_node = wh_trv_alarm_node.querySelector('#wh-trv-alarm-cont input[type="checkbox"]');
            let on_off_notify = {};
            enable_node.onchange = ev => {
                wh_trv_alarm.enable = ev.target.checked;
                save_trv_settings();
                if (on_off_notify.del) on_off_notify.del();
                on_off_notify = WHNotify(wh_trv_alarm.enable ? '闹钟已开启' : '闹钟已关闭');
            };
            // 剩余时间 秒
            const remaining_sec = parseInt(remaining_arr[0]) * 3600 + parseInt(remaining_arr[1]) * 60 + parseInt(remaining_arr[2]);
            // 落地时timestamp
            const land_timestamp = Date.now() + remaining_sec * 1000;
            // 音频dom
            const audio = document.createElement('audio');
            audio.src = 'https://www.torn.com/js/chat/sounds/Warble_1.mp3';
            audio.play()
                .catch(() => {
                    error_node.style.display = 'table';
                    const func = () => {
                        error_node.remove();
                        document.body.removeEventListener('click', func);
                    };
                    document.body.addEventListener('click', func);
                })
                .then(() => audio.pause());
            // 是否正在响铃
            let audio_play_flag = false;
            // 用户是否停止当前响铃
            let user_stop_alert = false;
            // 响铃循环id
            let audio_play_id = null;
            // 响铃的方法
            let audio_play_handle = () => {
                if (user_stop_alert) {
                    clearInterval(audio_play_id);
                    audio_play_id = null;
                    return;
                }
                if (!audio_play_flag || !wh_trv_alarm.enable) return;
                audio.play().then();
            };
            // 飞机小动画字符
            const flying_arr = [
                '✈ ',
                '&nbsp;&nbsp;✈ ',
                '&nbsp;&nbsp;&nbsp;&nbsp;✈ ',
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✈ ',
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✈ ',
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✈ ',
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✈ ',
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✈ ',
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✈ ',
                '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✈ ',
            ];
            // 飞行的状态dom
            const flying_status = wh_trv_alarm_node.querySelector('#wh-trv-status');
            // 飞机的小动画dom
            const flying_ani = flying_status.nextElementSibling;
            // 飞机的计数
            let flying_index = 0;
            const id = window.setInterval(() => {
                const remaining_time = (land_timestamp - Date.now()) / 1000 | 0;
                remaining_node.innerText = `${remaining_time / 3600 | 0}时${remaining_time % 3600 / 60 | 0}分${remaining_time % 60}秒`;

                if (remaining_time < wh_trv_alarm.alert_time) {
                    // flying_status.innerHTML = `即将落地...`;
                    if (wh_trv_alarm.enable) {
                        // 播放提示音
                        audio_play_flag = true;
                        if (audio_play_id === null && !user_stop_alert) audio_play_id = window.setInterval(audio_play_handle, 750);
                        stop_node.parentElement.classList.remove('wh-trv-alarm-stop-hide');
                    }
                } else {
                    // flying_status.innerHTML = `飞行中...`;
                    if (wh_trv_alarm.enable) {
                        clearInterval(audio_play_id);
                        audio_play_id = null;
                        stop_node.parentElement.classList.add('wh-trv-alarm-stop-hide');
                    }
                }
                flying_ani.innerHTML = `${flying_arr[flying_index]}`;
                flying_index = (flying_index + 1) % flying_arr.length;
            }, 1000);
        });
    }

    // 起飞提醒
    if (href.contains(/travelagency\.php/) && getWhSettingObj()['energyAlert']) {
        const $$ = $('.content-wrapper');
        const OB = new MutationObserver(() => {
            OB.disconnect();
            titleTrans();
            contentTitleLinksTrans();
            trans();
            OB.observe($$.get(0), {
                characterData: true,
                attributes: true,
                subtree: true,
                childList: true
            });
        });
        const trans = () => {
            // 当前能量e
            const energyBarStr = $('#barEnergy p[class^="bar-value__"]').text().trim();
            const [curE, maxE] = energyBarStr.split('/').length === 2
                ? [parseInt(energyBarStr.split('/')[0]), parseInt(energyBarStr.split('/')[1])]
                : [NaN, NaN];
            const incTime = maxE === 150 ? 10 : 15;
            const fullEnergyTime = !(isNaN(curE) || isNaN(maxE)) ? (maxE - 5 - curE) / 5 * incTime
                + (incTime - new Date().getMinutes() % incTime) : NaN;
            // 起飞前提示
            $('.travel-confirm .travel-question .q-wrap span:nth-of-type(2)').each((i, e) => {
                if (isNaN(fullEnergyTime)) return;
                const spl = e.innerText.trim().split(' ');
                const [hours, minutes] = spl.length === 5
                    ? [parseInt(spl[0]), parseInt(spl[3])]
                    : [0, parseInt(spl[0])];
                if (fullEnergyTime < (hours * 60 + minutes) * 2) {
                    if (!$(e).parent().hasClass('wh-translated')) {
                        $(e).parent()
                            .prepend(`<div style="color: red">警告：该次飞行往返时间大于体力回复时间，将会爆体！</div>`)
                            .addClass('wh-translated');
                    }
                }
            });
        };
        trans();
        OB.observe($$.get(0), {
            characterData: true,
            attributes: true,
            subtree: true,
            childList: true
        });
    }

    // 一键起飞
    if (sessionStorage['wh-quick-fly'] && href.includes('travelagency.php')) {
        // [id: dest, _type: (1...4), ts: timestamp]
        const [_id, _type, ts] = sessionStorage['wh-quick-fly'].trim().split(' ');
        delete sessionStorage['wh-quick-fly'];
        if (new Date().getTime() - ts > 20000) {
            WHNotify('超时，一键起飞计划已取消');
            return;
        }
        const keynode = document.querySelector('div[data-id][data-key]');
        if (!keynode) {
            WHNotify('出错了，无法起飞，已取消');
            return;
        }
        const _key = keynode.getAttribute('data-key');
        getAction({
            type: 'post',
            data: {
                step: 'travel',
                id: getDestId(_id),
                key: _key,
                type: ['standard', 'airstrip', 'private', 'business'][_type]
            },
            success: function (str) {
                WHNotify(str)
                if (str.includes('err')) {
                    WHNotify('起飞出错了');
                    return;
                }
                window.location.href = 'https://www.torn.com/index.php'
            },
            before: function () {
            }
        });
    }

    // 攻击页面
    if (href.contains(/loader\.php\?sid=attack/)) {
        let stop_reload = false;
        const {quickAttIndex, quickFinishAtt, attReload} = getWhSettingObj();

        // 自刷新
        let audio_played_flag;
        if (attReload !== 6 && stop_reload !== true) {
            const selector_device_map = {
                'pc': '#defender div[class^="modal___"]',
                'mobile': '#attacker div[class^="modal___"]',
                'tablet': '',
            };
            const selector = selector_device_map[device];
            elementReady(selector).then(elem => {
                if (!elem.querySelector('button')) {
                    if (getWhSettingObj().attReload === 0 && stop_reload !== true) {
                        window.location.reload();
                    } else {
                        let reload_flag;
                        const timeout = getWhSettingObj().attReload * 1000 + getRandomInt(-500, 500);
                        log(`[WH] ${timeout / 1000}s 后自动刷新`);
                        window.setInterval(() => {
                            if (reload_flag === undefined) {
                                reload_flag = true;
                            } else if (stop_reload !== true) {
                                window.location.reload();
                            }
                        }, timeout);
                    }
                } else if (audio_played_flag === undefined) {
                    audio_played_flag = true;
                    let play_time = 0;
                    const audio_play_id = window.setInterval(() => {
                        const $audio = document.createElement('audio');
                        $audio.src = 'https://www.torn.com/js/chat/sounds/Warble_1.mp3';
                        $audio.play().then();
                        play_time++;
                        if (play_time === 3) clearInterval(audio_play_id);
                    }, 600);
                }
            });
        }
        // 光速拔刀
        if (quickAttIndex !== 6) {
            // const selectedId = ['weapon_main', 'weapon_second', 'weapon_melee', 'weapon_temp', 'weapon_fists', 'weapon_boots']
            //     [getWhSettingObj().quickAttIndex];
            const btn = await elementReady('div[class^="modal___"] button');//.then(btn => {
            log(btn)
            if (!btn.innerText.toLowerCase().includes('fight')) return;
            // 判断是否存在脚踢
            const hasKick = !!document.querySelector('#weapon_boots');
            // modal层
            const modal = document.querySelector('div[class^="modal___"]');
            log(`当前设备类型是${device}`);
            // 区分设备
            switch (device) {
                case Device.PC: {
                    log(`开始调整按钮位置`);
                    // 隐藏modal层
                    modal.style.display = 'none';
                    // 根据选择的武器调整css
                    let css_top = '0';
                    switch (getWhSettingObj()['quickAttIndex']) {
                        case 1: { // weapon_second
                            css_top = '97px';
                            break;
                        }
                        case 2: { // weapon_melee
                            css_top = '194px';
                            break;
                        }
                        case 3: { // weapon_temp
                            css_top = '291px';
                            break;
                        }
                        case 4:   // weapon_fists
                        case 5: { // weapon_boots
                            css_top = '375px';
                            break;
                        }
                    }
                    const css_rule = `
.wh-move-btn #defender div[class^="modal___"]{display: block;width: 0 !important;top: ${css_top};left: -169px !important;}
.wh-move-btn #defender div[class^="dialog___"]{border:0;width:159px;height:96px;}
.wh-move-btn #defender div[class^="colored___"]{display:block;padding:0;}
.wh-move-btn #defender div[class^="title___"]{height:0;}
.wh-move-btn #defender button{width: 100%;margin:17px 0;height: 60px;}
`;
                    addStyle(css_rule);
                    document.body.classList.add('wh-move-btn');
                    // 绑定点击事件 联动【光速跑路】
                    btn.onclick = () => {
                        if (quickFinishAtt !== 3) {
                            btn.remove();
                            // 停止自动刷新
                            stop_reload = true;
                        } else {
                            document.body.classList.remove('wh-move-btn');
                        }
                    };
                    break;
                }
                case Device.MOBILE: {
                    log(`开始调整按钮位置`);
                    // 加入css
                    let css_top = '0';
                    let slot_height = '76px';
                    // 判断有没有脚踢
                    if (hasKick) {
                        // 根据选择的武器调整
                        switch (getWhSettingObj()['quickAttIndex']) {
                            case 1: { // weapon_second
                                css_top = '76px';
                                break;
                            }
                            case 2: { // weapon_melee
                                css_top = '152px';
                                break;
                            }
                            case 3: { // weapon_temp
                                css_top = '228px';
                                break;
                            }
                            case 4: { // weapon_fists
                                css_top = '304px';
                                break;
                            }
                            case 5: { // weapon_boots
                                css_top = '380px';
                                break;
                            }
                        }
                    } else {
                        const slot = document.querySelector('#weapon_main');
                        const height = slot.offsetHeight + 1;
                        slot_height = height;
                        // 根据选择的武器调整
                        switch (getWhSettingObj().quickAttIndex) {
                            case 1: { // weapon_second
                                css_top = `${height}px`;
                                break;
                            }
                            case 2: { // weapon_melee
                                css_top = `${height * 2}px`;
                                break;
                            }
                            case 3: { // weapon_temp
                                css_top = `${height * 3}px`;
                                break;
                            }
                            case 4: { // weapon_fists
                                css_top = `${height * 4}px`;
                                break;
                            }
                            case 5: { // weapon_boots
                                css_top = `${height * 5}px`;
                                break;
                            }
                        }
                    }
                    const css_rule = `
.wh-move-btn #attacker div[class^="modal___"]{display: block;width: 0;top: ${css_top};left:0;height:0;}
.wh-move-btn #attacker div[class^="dialog___"]{border:0;width:80px;height:${slot_height};}
.wh-move-btn #attacker div[class^="colored___"]{display:block;padding:0;}
.wh-move-btn #attacker div[class^="title___"]{height:0;}
.wh-move-btn #attacker button{width:100%;margin:0;height:63px;white-space:normal;}
`;
                    addStyle(css_rule);
                    document.body.classList.toggle('wh-move-btn');
                    btn.onclick = () => {
                        if (getWhSettingObj().quickFinishAtt !== 3) {
                            btn.remove();
                            // 停止自动刷新
                            stop_reload = true;
                        } else {
                            document.body.classList.toggle('wh-move-btn');
                        }
                    };
                    break;
                }
                case Device.TABLET: {
                    break;
                }
            }
            // 自动开打
            if (getWhSettingObj()['autoStartFinish'] === true) {
                if (btn.innerText.includes('(')) {
                    let interval_id = window.setInterval(() => {
                        if (!btn) {
                            clearInterval(interval_id);
                            return;
                        }
                        try {
                            btn.click();
                        } catch {
                        }
                    }, 100);
                } else {
                    btn.click();
                }
            }
            // });
            // const CUR_DISABLED = true;
            // if (!CUR_DISABLED) {
            //     const original_fetch = window.fetch;
            //     window.fetch = async (url, init) => {
            //         let response = await original_fetch(url, init)
            //         let res = response.clone();
            //         res.json().then((data) => {
            //             if (isDev()) {
            //                 log('[url]', url)
            //                 log('[返回数据]', data)
            //             }
            //         });
            //         return response;
            //     }
            // }
        }
        // 光速跑路
        // if (quickFinishAtt !== 3) {
        //     const user_btn_select = ['leave', 'mug', 'hosp'][getWhSettingObj()['quickFinishAtt']];
        //     const wrap = document.querySelector('#react-root');
        //     log('光速跑路选项选中：', user_btn_select);
        //     new MutationObserver(() => {
        //         const btn_arr = document.querySelectorAll('div[class^="dialogButtons___"] button');
        //         if (btn_arr.length > 1) btn_arr.forEach(btn => {
        //             const flag = btn.innerText.toLowerCase().includes(user_btn_select);
        //             log('按钮内容：', btn.innerText, '，是否包含选中：', flag);
        //             if (!flag) btn.style.display = 'none';
        //             // 自动结束
        //             else if (getWhSettingObj()['autoStartFinish'] === true) {
        //                 try {
        //                     btn.click();
        //                 } catch {
        //                 }
        //             }
        //         });
        //     }).observe(wrap, {subtree: true, attributes: true, childList: true});
        // } else {
        //     document.body.classList.remove('wh-move-btn');
        // }
        return;
    }

    // 错误的攻击页面
    if (getWhSettingObj()['attRelocate'] && href.includes('loader2.php')) {
        const spl = window.location.href.trim().split('=');
        const uid = spl[spl.length - 1];
        if (!/^\d+$/.test(uid)) return;
        window.location.href = `https://www.torn.com/loader.php?sid=attack&user2ID=${uid}`;
        return;
    }

    // 捡垃圾助手
    if (getWhSettingObj()['cityFinder'] && href.includes('city.php')) {
        addStyle(`
.wh-city-finds .leaflet-marker-pane img[src*="torn.com/images/items/"]{
display: block !important;
box-sizing: border-box;
width: 40px !important;
height: 40px !important;
left: -20px !important;
top: -20px !important;
padding: 10px 0;
border: none;
border-radius: 100%;
background-color:#d2d2d28c;
box-shadow:0 0 10px 5px #000;
z-index: 999 !important;
}
.wh-city-finds .leaflet-marker-pane.leaflet-marker-icon.user-item-pinpoint.leaflet-clickable{display: none !important;}
#wh-city-finder{
box-shadow: 0 0 3px 0px #696969;
border-radius: 4px;
}
#wh-city-finder-header{
background-color: #3f51b5;
color: white;
padding: 8px;
font-size: 15px;
border-radius: 4px 4px 0 0;
text-shadow: 0 0 2px black;
background-image: linear-gradient(90deg,transparent 50%,rgba(0,0,0,.07) 0);
background-size: 4px;
}
#wh-city-finder-cont{
background: #616161;
padding: 8px;
color: #c7c7c7;
border-radius: 0 0 4px 4px;
font-size: 13px;
}
#wh-city-finder-cont span{
margin:2px 4px 2px 0;
padding:2px;
border-radius:2px;
background:green;
color:white;
display:inline-block;
}
`);
        // 物品名与价格
        let items = null;
        const base = document.createElement('div');
        base.id = 'wh-city-finder';
        const container = document.createElement('div');
        container.id = 'wh-city-finder-cont';
        const header = document.createElement('div');
        header.id = 'wh-city-finder-header';
        header.innerHTML = '捡垃圾助手';
        const info = document.createElement('div');
        info.innerHTML = '已找到物品：';
        container.append(info);
        base.append(header);
        base.append(container);
        COFetch('https://jjins.github.io/item_price_raw.json')
            .catch(err => {
                log(err)
                items = undefined
            })
            .then(r => items = JSON.parse(r));
        elementReady('div.leaflet-marker-pane').then(elem => {
            document.querySelector('#map').classList.add('wh-city-finds');
            document.querySelector('.content-wrapper').prepend(base);
            // 发现的物品id与map img node
            const founds = [];
            elem.querySelectorAll('img.map-user-item-icon').forEach(node => {
                const item_id = node.src.split('/')[5];
                const finder_item = document.createElement('span');
                finder_item.id = 'wh-city-finder-item' + item_id;
                finder_item.innerHTML = item_id;
                founds.push({'id': item_id, 'node': finder_item, 'map_item': node});
                container.append(finder_item);
            });
            // 未发现物品 返回
            if (founds.length === 0) {
                // header.innerHTML = '捡垃圾助手';
                info.innerHTML = '空空如也，请大佬明天再来';
                return;
            }
            // 将id显示为物品名与价格的函数
            const displayNamePrice = () => {
                // 总价
                let total = 0;
                founds.forEach(el => {
                    const value = items[el.id]['price'];
                    el.node.innerHTML = `<img src="${el.map_item.src}" alt="" />${items[el.id]['name']} ($${toThousands(value)})`;
                    // 灰色 100k以下
                    if (value < 100000) el.node.style.backgroundColor = '#9e9e9e';
                    // 绿色 1m以下
                    else if (value < 1000000) el.node.style.backgroundColor = '#4caf50';
                    // 蓝色 25m以下
                    else if (value < 25000000) el.node.style.backgroundColor = '#03a9f4';
                    // 橙色 500m以下
                    else if (value < 500000000) el.node.style.backgroundColor = '#ffc107';
                    // 红色 >500m
                    else if (value >= 500000000) el.node.style.backgroundColor = '#f44336';
                    total += items[el.id]['price'];
                });
                header.innerHTML = `捡垃圾助手 - ${founds.length} 个物品，总价值 $${toThousands(total)}`;
            };
            // 未取到数据时添加循环来调用函数
            if (items === null) {
                // 15s超时
                let timeout = 30;
                const interval = window.setInterval(() => {
                    timeout--;
                    if (items !== null) {
                        displayNamePrice();
                        clearInterval(interval);
                    }
                    if (0 === timeout) {
                        log('获取物品名称与价格信息超时')
                        clearInterval(interval)
                    }
                }, 500);
            }
            // 无法跨域获取数据时
            else if (items === undefined) {
                info.innerHTML += '(当前平台暂不支持查询价格)';
            }
            // 调用函数
            else {
                displayNamePrice();
            }
        })
    }

    // pt一键购买
    if (getWhSettingObj()['ptQuickBuy'] && href.includes('pmarket.php')) {
        WHNotify('一键购买已开启');
        // ns脚本
        const rmv_cfm = (e) => {
            let el = e.firstElementChild;
            el.className += ' yes';
            let old_href = el.getAttribute('href');
            let new_href = old_href.replace(/=buy/, '=buy1').replace(/&points=\d{1,9}$/, '');
            el.setAttribute('href', new_href);
        };

        let points_sales = document.querySelector('.users-point-sell');
        for (const index in points_sales.children) {
            'LI' === points_sales.children[index].tagName && rmv_cfm(points_sales.children[index])
        }
        new MutationObserver(e => {
            for (const t of e) {
                for (const e of t.addedNodes) {
                    'LI' === e.tagName && rmv_cfm(e)
                }
            }
        }).observe(points_sales, {childList: true});
    }

    // 叠e助手
    if (href.includes('gym.php')) {
        const switch_node = document.createElement('div');
        switch_node.innerHTML = `<label><input type="checkbox" ${getWhSettingObj()['SEProtect'] ? 'checked' : ''}/> 叠E保护</label>`;
        switch_node.id = 'wh-gym-info-cont';
        switch_node.querySelector('input').onchange = (e) => {
            $zhongNode.querySelector('#wh-SEProtect-check').checked = e.target.checked;
            node.classList.toggle('wh-display-none');
            setWhSetting('SEProtect', e.target.checked);
        };
        const node = await elementReady('#gymroot');
        if (getWhSettingObj()['SEProtect']) node.classList.add('wh-display-none');
        node.before(switch_node);
    }

    // 加入啤酒
    if (href.includes('shops.php?step=bitsnbobs')) {
        const add_btn_node = document.createElement('div');
        add_btn_node.id = 'wh-gym-info-cont';
        add_btn_node.innerHTML = `<button style="color:white;">👉添加啤酒商品</button><p>如果当前商店没有啤酒这个商品可以提前显示以省去刷新步骤，增加抢酒成功率。</p><p id="wh-msg"></p>`;
        add_btn_node.querySelector('button').addEventListener('click', e => {
            const msg_node = add_btn_node.querySelector('#wh-msg');
            if (node.querySelector('span[id="180-name"]')) {
                msg_node.innerHTML = '❌ 页面已经有啤酒了';
                return;
            }
            const clear_node = node.querySelector('li.clear');
            const beer = document.createElement('li');
            beer.classList.add('torn-divider', 'divider-vertical');
            beer.style.backgroundColor = '#c8c8c8';
            beer.innerHTML = `<div class="acc-title">
<span class="item-desc">
<span tabindex="0" aria-labelledby="180-name 180-price 180-stock" class="item Alcohol" itemid="180" loaded="0">
<img class="torn-item item-plate" data-size="large" src="/images/items/180/large.png" alt="Bottle of Beer" style="opacity: 0;" id="item-1bea9f66-a6c4-475c-accb-41dcb67af64f" data-converted="1" aria-hidden="true">
<span class="item-hover">
<button class="view-h wai-btn" aria-label="Show info: Bottle of Beer" value="100" i-data="i_723_228_51_52"></button>
<button class="buy-h wai-btn" aria-label="Buy: Bottle of Beer" value="100" i-data="i_774_228_51_52"></button>
 </span>
<canvas id="item-1bea9f66-a6c4-475c-accb-41dcb67af64f" role="img" aria-label="Bottle of Beer" style="opacity: 1;" class="torn-item item-plate item-converted" item-mode="light" width="100" height="50"></canvas></span>
<span class="desc">
<span id="180-name" class="name  t-overflow bold">啤酒</span>
<span id="180-price" class="price t-gray-6" data-sell="$5">$10</span>
<span id="180-stock" class="stock t-gray-6 t-overflow">酒 (<span class="instock">1100</span>存货)</span>
</span>
<span class="buy-act-wrap">
<label for="180" class="wai">Amount
of Bottle of Beer</label>
<input id="180" type="text" value="100" maxlength="3" name="buyAmount[]" autocomplete="new-amount">
<span class="buy-act bold">
<button class="wai-support t-blue h">买</button>
<div class="tt-max-buy-overlay"></div>
</span>
</span>
</span>
<div class="confirm-wrap">
<span class="confirm">
<span>
点击确定购买
</span>
<span>
<span class="count">100</span>
瓶啤酒
$<span class="total">1,000</span>
</span>
<span class="confirm-act m-top5">
<a href="#" class="wai-support yes m-right10 bold t-blue h" data-id="180" i-data="i_819_263_23_16">
确定
</a>
<span class="no bold">
<a href="#" class="wai-support t-blue h" i-data="i_852_263_18_16">
不
</a>
</span>
</span>
</span>
</div>
<div class="success-wrap">
<span class="success">
<span class="t-red bold">
<span class="ajax-preloader"></span>
</span>
</span>
<button aria-label="Close" class="close-icon p0 wai-btn" value="100" i-data="i_954_228_10_11"></button>
</div>
<div class="msg-wrap">
<span class="t-green bold">
<span class="ajax-preloader"></span>
</span>
</div>
</div>
<div class="view-item-info">
<div class="item-cont">
<div class="item-wrap">
<span class="ajax-preloader m-top10 m-bottom10"></span>
</div>
</div>
</div>`;
            if (clear_node) clear_node.before(beer);
            else node.append(beer);
            e.target.remove();
            msg_node.innerHTML = '添加成功';
        });
        const node = await elementReady('ul.items-list');
        document.querySelector('.content-wrapper').prepend(add_btn_node);
    }

    // 快速crime
    if (href.contains(/crimes\.php/) && getWhSettingObj()['quickCrime']) {
        if (isIframe) {
            const isValidate = document.querySelector('h4#skip-to-content').innerText.toLowerCase().includes('validate');
            elementReady('#header-root').then(e => e.style.display = 'none');
            elementReady('#sidebarroot').then(e => e.style.display = 'none');
            elementReady('#chatRoot').then(e => e.style.display = 'none');
            if (!isValidate) document.body.style.overflow = 'hidden';
            elementReady('.content-wrapper').then(e => {
                e.style.margin = '0px';
                e.style.position = 'absolute';
                e.style.top = '-35px';
            });
            elementReady('#go-to-top-btn button').then(e => e.style.display = 'none');
        }
        const $$ = document.querySelector('.content-wrapper');
        const OB = new MutationObserver(() => {
            OB.disconnect();
            titleTrans();
            contentTitleLinksTrans();
            trans();
            OB.observe($$, {
                characterData: true,
                attributes: true,
                subtree: true,
                childList: true
            });
        });
        const trans = () => {
            const dom = `<div class="wh-translate"><div class="title-black" style="border-radius: 5px 5px 0 0;"><span>快捷操作：</span></div><div class="cont-gray" style="padding: 6px 0;border-radius: 0 0 5px 5px;">
<form id="wh-translate-quick" action="crimes.php?step=docrime4" method="post" style="display: inline-block;margin: 0 5px">
<input name="nervetake" type="hidden" value="18">
<input name="crime" type="hidden" value="hackbank">
<input style="-webkit-appearance:none;padding: 4px;background: #e91e63;border-radius: 5px;color: white;" type="submit" value="18-1" />
</form>
<form id="wh-translate-quick" action="crimes.php?step=docrime4" method="post" style="display: inline-block;margin: 0 5px">
<input name="nervetake" type="hidden" value="11">
<input name="crime" type="hidden" value="warehouse">
<input style="-webkit-appearance:none;padding: 4px;background: #2196f3;border-radius: 5px;color: white;" type="submit" value="烧仓库" />
</form>
<form id="wh-translate-quick" action="crimes.php?step=docrime4" method="post" style="display: inline-block;margin: 0 5px">
<input name="nervetake" type="hidden" value="4">
<input name="crime" type="hidden" value="jacket">
<input style="-webkit-appearance:none;padding: 4px;background: #009688;border-radius: 5px;color: white;" type="submit" value="偷夹克" />
</form></div><hr class="page-head-delimiter m-top10 m-bottom10 r1854"></div>`;
            const is_wh_translate = $$.querySelector('.wh-translate') !== null;
            const is_captcha = $$.querySelector('div#tab-menu.captcha') !== null;
            const $title = $('div.content-title');
            const $info = $('.info-msg-cont');
            if (!is_wh_translate && !is_captcha) {
                if ($title.length > 0) $title.before(dom);
                else if ($info.length > 0) $info.before(dom);
            }
        };
        trans();
        OB.observe($$, {
            characterData: true,
            attributes: true,
            subtree: true,
            childList: true
        });
    }

    // 任务助手
    if (href.contains(/loader\.php\?sid=missions/) && getWhSettingObj()['missionHint']) {
        const $$ = $('.content-wrapper');
        const OB = new MutationObserver(() => {
            OB.disconnect();
            titleTrans();
            contentTitleLinksTrans();
            trans();
            OB.observe($$.get(0), {
                characterData: true,
                attributes: true,
                subtree: true,
                childList: true
            });
        });
        const taskList = {};
        const trans = () => {
            $('ul#giver-tabs a.ui-tabs-anchor').each((i, e) => {
                if ($(e).children().hasClass('mission-complete-icon')) {
                    taskList[i] = e.innerText.trim();
                } else {
                    taskList[i] = $(e).clone().children().remove().end().text().trim();
                }
            });
            // 助手注入
            $('div.max-height-fix.info').each((i, e) => {
                if ($(e).find('.wh-translated').length !== 0) return;
                $(e).append(`<div class="wh-translated"><h6 style="color:green"><b>任务助手</b></h6><p>${getTaskHint(taskList[i])}</p></div>`);
            });
            // 任务目标
            $('ul.tasks-list span.title-wrap').contents().each((i, e) => {
                if (e.nodeType === 3) {
                    if (missionDict[e.nodeValue.trim()]) {
                        e.nodeValue = missionDict[e.nodeValue.trim()];
                    }
                }
            });
        };
        trans();
        OB.observe($$.get(0), {
            characterData: true,
            attributes: true,
            subtree: true,
            childList: true
        });
    }

    // 圣诞小镇
    if (href.contains(/christmas_town\.php/)) {
        let $root = document.querySelector('#christmastownroot');
        const {xmasTownWT, xmasTownNotify} = getWhSettingObj()
        // 解密攻略
        if (xmasTownWT) {
            const insert_html = `<div id="wh-xmas-cont">
<div class="title-black"><span>水晶球解密地图攻略</span><span><button style="color: white">[隐藏]</button></span></div>
<div class="cont-gray select-wrap dropdown-new dropdown-default">
<select>
<option value="None">未选择</option>
<option value="Christmas Town">Christmas Town</option>
<option value="Maltese Snow Globe">Maltese Snow Globe</option>
<option value="Long way from home">Long way from home</option>
<option value="Chedburn Towers">Chedburn Towers</option>
<option value="Kidnapped Santa">Kidnapped Santa</option>
<option value="Holiday terror">Holiday terror</option>
<option value="Among Us">Among Us</option>
<option value="Kiss My Festivus">Kiss My Festivus</option>
<option value="Stanley Hotel">Stanley Hotel</option>
<option value="DoggoQuest">DoggoQuest</option>
<option value="Pokemon CT">Pokemon CT v2.0</option>
<option value="Winter in Gatlin">Winter in Gatlin</option>
</select>
<div>
<p>来源：Torn City公众号，图文详情请查看公众号文章</p>
<div id="wt-content"></div>
</div>
</div>
<hr class="page-head-delimiter m-top10 m-bottom10 r1854">
</div>
<style>
#wh-xmas-cont .cont-gray{
padding: 0.5em;
}
#wh-xmas-cont p,#wh-xmas-cont select,#wh-xmas-cont li{
margin: 0 0 3px;
}
</style>`;
            const wt_dict = {
                "None": {title: '', wt: ``,},
                "Christmas Town": {
                    title: '圣诞小镇', wt: `<ul>
<li>旧攻略提到的驯鹿车已被移除，只能手动找一条蓝色的小路[94,3]</li>
<li>向南走，然后上木桥，沿着它向西走到达冰湖</li>
<li>在冰湖[55,7][61,64]附近找Labyrinth传送门进入迷宫</li>
<li>迷宫的出口在中间的方向[395,397]一个冰湖，走进冰湖传送</li>
<li>走到企鹅</li>
</ul>`,
                },
                "Maltese Snow Globe": {
                    title: 'Maltese Snow Globe', wt: `<ul>
<li>1.想办法进入前几层的楼梯口</li>
<li>2.出来之后往南走， 在码头找到天鹅船</li>
<li>3.按着数字1-12走过乐高博物馆</li>
<li>4.跟着大路走到天鹅船。</li>
<li>5.走到901,486的银行</li>
<li>6.最左上的楼梯</li>
<li>7.B-D-C-E-F-G-C-A</li>
<li>8.右，右，右，北，北，右，右</li>
<li>9.走到右上角铁路</li>
<li>10.小游戏:</li>
<li>移动1到最右，移动2到中间，移动1到2上面,移动3到最右,移动1到最左,移动2到3.上面，移动1到2上面。</li>
<li>11.往上走出铁丝网，往左绕一个大圈走到300,476</li>
<li>12.走到363,406的隧道，走到361,400的隧道 ,往南走。</li>
<li>13.走到352,334的迷宫，好像有好几条路,我说我的走法，往左下走,走倒最下了往右走，走到1个不一样的绿色的时候，往上走。</li>
<li>14.走到迷宫中间的小人，后面就只有一条路走了，完成。</li>
</ul>`,
                },
                "Long way from home": {
                    title: 'Long way from home', wt: `<ul>
<li>1.随便动一下</li>
<li>2.左边的管道口</li>
<li>3.右走到十字路口，往上，往右，从偏左的那个管道往上。</li>
<li>3.出小门，往右到底，往上到底，往右,进上面房间，右上角的电脑，电脑显示的是下面房间的走法，任意移动退出</li>
<li>4.去下面房间，右边橙色电力符号，进入解密。下，右下，右下，右上，右上，右，右下，右下，下，左下,左下，</li>
<li>左，左,左下，左下，进圈。</li>
<li>5.进入新的房间按钮</li>
<li>6.一直左走，走到有两个怪兽把手的桥那，进上面的房间，左上角的机器，*是重输密码</li>
<li>作者随时改密码，建议看纸条上的提示自己去数</li>
<li>7.桥上怪兽消失, 往左走到底，按钮</li>
<li>8.右走，走到雪地走大路，按钮开铁门，上darkforest的蓝车</li>
<li>9.右走十几步，传送</li>
<li>10.右下走,看到铁丝网，顺着铁丝网右走，有个缺口，进去。</li>
<li>11.右走，直到看见三颗倒下的圣诞树(记住这里)，顺着血迹和脚印走,进山洞。</li>
<li>12.顺着山洞走到一滩血，原路出山洞。</li>
<li>13.原路回到三颗倒下的圣诞树，正上方有个红色仓库,进入。</li>
<li>14.上，上,上，右，上，左，上,路就通了，去拿到右上角的锯子，原路出仓库。</li>
<li>15.出来就在车下面，上车，再上车。</li>
<li>16.左边的小橘人，完成</li>
</ul>`,
                },
                "Chedburn Towers": {
                    title: 'Chedburn Towers', wt: `<ul>
<li>进入地图后，使用附近的FAST的T下方的厕所传送到Chedburn Towers</li>
<li>进入大厅，"之"字形上楼，每层都是如此。</li>
<li>最终会进入问答题区域，通过在相应的数字上穿过来回答问题</li>
<li>答案是：3 9 5 4 9 2 6 8</li>
<li>答题后，进入Ched的办公室，向西走，然后一直走到左边的楼梯上</li>
<li>向南走下楼梯，然后向东走，沿着小楼梯到地下室</li>
<li>向东走到牢房区域</li>
<li>先踩下开关，打开牢房门前往右上角的最后一个牢房</li>
<li>开关位于JAIL文字的左上方</li>
<li>沿着挖出来的隧道一直走，岔路口向左走</li>
<li>到金库，Chedburn NPC会给你本地图的水晶球</li>
</ul>`,
                },
                "Kidnapped Santa": {
                    title: 'Kidnapped Santa', wt: `<ul>
<li>出生在一个类似城镇的地方</li>
<li>沿着这条路向东走，然后向南走</li>
<li>到达道路尽头的一个码头时，向西走一段路，踩在精灵的上面，乘坐渡船[124, -30]</li>
<li>搭船来到了Fantasy Island</li>
<li>小心那个游荡的<span style="color: #32CD32">绿色NPC</span>，不惜一切代价避开他，否则他会把你打回出发点</li>
<li>向西走，然后向北走，再向西绕过岩石。要非常小心，不要踩到水里或掉下悬崖，否则你会死</li>
<li>然后回到南边，在那里你会看到一些门</li>
<li>走进蓝色的门(左二)[111，-60]</li>
<li>过了蓝门后继续沿路向南</li>
<li>然后沿路向东，再向南</li>
<li>再向东走，会看到“恐怖之家”，进入这栋楼[137, -84]</li>
<li>向北走，进入洞口[164, -81]</li>
<li>穿过隧道到达另一端的洞穴口[142, -63]，<b>避开所有怪物和NPC</b></li>
<li>来到另一个岛上</li>
<li>向南走，然后向东绕过建筑物，可以进入圣诞老人的洞穴[133, -2]</li>
<li>在建筑物内向西走，再向北走，在圣诞老人家work shop的东北角，你会看到一个楼梯，走下去[169，4]</li>
<li>在这一区域，<b>要避开所有出现破损或有异样的地砖</b>，也要避开四处游荡的邪恶的格林奇NPC</li>
<li>沿着地牢里的走廊向东走，然后向南走，避开所有看起来不同的瓷砖</li>
<li>它们上面有一些小裂缝和花纹，如果你是用手机的话，我建议你把亮度调高，以防万一</li>
<li>最终会看到一个发绿光的小开关</li>
<li>走到开关上[165, 18]，激活它，然后进入向北打开的大门</li>
<li>走到<span style="color: gold">黄色精灵NPC</span>脸上[166，25]，可以得到本地图的水晶球</li>
</ul>`,
                },
                "Holiday terror": {
                    title: 'Holiday terror', wt: `<ul>
<li>1. 从出生地沿着路向东，然后向北。过桥并沿着穿过城镇的小路继续前行，避开任何明显的陷阱（道路上的洞、打开的井盖等）。</li>
<li>2. 继续向东和向北前进，直到到达 Mansion's Labyrinth（豪宅迷宫）[121,29]</li>
<li>3. 豪宅入口在[131,41]</li>
<li>4. 进入豪宅后向北走，你会看到一条由骷髅守卫的道路</li>
<li>5. 沿着棕色的小路走，在黑色的<b>区域前</b>停下</li>
<li>6. 按照如下的方式行进</li>
<li>  上3格，左2，上2，右4，下1，右3，上6，左2，下1，左6，下2，左2，上4，右5，上4</li>
<li>7. 来到一个区域，在这里你必须在两个洞穴中做出选择</li>
<li>第一次选择，答案是Christmas Miracle，选择左边的洞窟。</li>
<li>第二次选择，答案是24/12/2019，选择左边的洞窟。</li>
<li>第三次选择，答案是Hohoho Coldington，选择右边的洞窟。</li>
<li>第四次选择，答案是Christmas Miracle Cave，选择左边的洞窟。</li>
<li>8. 出现在一个用糖果棒装饰的红色地板的房间里，去地图的右上角一个冰洞的入口[101，-74]</li>
<li>9. 进入冰洞。向西走，寻找叫Erik the last elf的黄色小NPC</li>
<li>10. 拿到水晶球</li>
</ul>`,
                },
                "Among Us": {
                    title: 'Among Us', wt: `<ul>
<li>出生点步行到传送点进入地图 1 [399,12]</li>
<li>到达地图1，你出现在食堂，往下走，绕到红色按钮处[502，-1]</li>
<li>答案：D B A A D D B B B C A D D D 最终: B (Green)</li>
<li>然后你会被传送到地图2</li>
<li>在地图2中，你需要沿着小路向南走，然后向东进入通风口，前往下一个部分[556，24]</li>
<li>穿过通风口后，进入食堂。向南走到红色按钮所在的位置 [571,32]</li>
<li>答题阶段，答案如下BBACBDC A</li>

<li>被传送到地图3</li>
<li>先直接向南走一点，再沿着走廊走。进入左边的一个通风口[345，170]</li>
<li>会传送到办公室，在那里找到最后一个红色按钮[356，173]</li>
<li>答题阶段，答案如下CCADABBCD</li>
<li>进入"PEEP SHOW"，获得本地图的水晶球</li>
</ul>`,
                },
                "Kiss My Festivus": {
                    title: 'Kiss My Festivus', wt: `<ul>
<li>从起点出发，沿着小路向北走到出租车处，乘坐前往Dark Forest的出租车 [96,16]</li>
<li>沿着公路向东走，继续向东进入雪地</li>
<li>沿着暗淡的蓝色轨迹向东南方向走，穿过树林，直到你到达一个铁栅栏[坐标为114,-89]</li>
<li>铁栅栏进不去。有人会告诉你乘坐他们的雪地车。</li>
<li>向西走到雪地车旁，注意不要踩到任何<b>冬青树</b>(鲜艳黄红色的矮树)，否则你将回到起点。</li>
<li>被传送到锯木厂，在伐木工那里获得钥匙。</li>
<li>然后向南走，然后向东走（向东走很长一段路），沿着小路返回铁栅栏处。</li>
<li>来到一个炫酷的45°视角迷宫，你要走到地图的东北部，抵达另一个洞穴口[156,-74]</li>
<li>先往左下方走到岔路口，然后往右上方走，接下来将只有一条路</li>
<li>到达岛屿沿着小楼梯上去，绕到正下方那艘天鹅船</li>
<li>到一个新的岛屿，向南走几步，踩在[12, -79]的蓝色火花上</li>
<li>被传送到另一个有几辆拖车的岛上</li>
<li>向北走，进入一个新的山洞口</li>
<li>人被挡住了，要在冰层下向西北方向一直走，主要是向上和向左走</li>
<li>沿着这条路一直往上走，然后在开阔的地方往东走，你会看到一座房子[房子的入口在26,58]</li>
<li>进入房子，向北走几步，穿过闪闪发光的入口，你就可以进入房子了</li>
<li>沿着东南方向走，你会看到Evil-Duck NPC，他将给你本地图的水晶球</li>
</ul>`,
                },
                "Stanley Hotel": {
                    title: 'Stanley Hotel', wt: `<ul>
<li>从起点开始，你会看到正北方有一座房子。向北走几步到门前，进入房子。</li>
<li>传送到一个有门的地方。绕过并向上走，激活位于[188,72]的大门开关。</li>
<li>向东北方向前进，沿着血迹穿过森林，直到你到达一个山洞。</li>
<li>依次使用使用防御（踩盾牌标记），然后攻击（剑），然后魔法（闪亮的蓝色气泡）来杀死怪物。</li>
<li>最后，你会来到工人Bob的房间，他将给你本地图的水晶球。</li>
</ul>`,
                },
                "DoggoQuest": {
                    title: 'DoggoQuest', wt: `<ul>
<li>你出现在一个房间里</li>
<li>向东走，然后向南走，沿着小走廊就可以离开这个房间</li>
<li>来到这个地牢的01层</li>
<li>首先向南走，然后绕过墙，攻击你看到的第一个怪物[101,1]</li>
<li>然后向西走到墙边，向北攻击<span style="color: #32CD32">史莱姆</span></li>
<li>继续向北，攻击下一个<span style="color: gold">怪物</span></li>
<li>向北走到拐角处，然后向东走到楼梯处继续前进[坐标为101,1]</li>
<li>来到第二层，直接向东走上楼梯[11，-19]</li>
<li>来到了这个地牢的第03层</li>
<li>向东再向南走到墙边，然后向东走，与绿色<span style="color: #32CD32">史莱姆</span>战斗</li>
<li>继续向东走，经过被打败的史莱姆，然后向南和向西绕过墙，向北走一格，向西打败另一个<span style="color: #32CD32">史莱姆</span></li>
<li>向西南方向走下楼梯[53，-49]</li>
<li>来到了第 04 层</li>
<li>走到墙边，撞右边两个镣铐之间的墙，然后向北直接走到墙里[15，-65]</li>
<li>直接向北走，踏上红色的东西</li>
<li>沿着楼梯向南和东南方向走右边楼梯[39，-69]</li>
<li>来到第5层</li>
<li>向北走，然后向西绕过中间的十字架，向南走到下一个楼梯[29，-93]</li>
<li>来到第 6 层</li>
<li>杀死那只<span style="color: #32CD32">大绿狗</span></li>
<li>回到刚才的楼梯，来到05层[33，-114]</li>
<li>在第05层，你会看到原来的十字架位置附近出现了新的楼梯口</li>
<li>走上该楼梯[54, -99]</li>
<li>到达了最后的？层</li>
<li>沿着小路向下走，然后沿着冰冷的台阶走到Rudolph NPC</li>
<li>在他身边来回走动</li>
<li>踩在他身上的次数足够多时，Rudolph会把该图的水晶球交给你</li>
</ul>`,
                },
                "Pokemon CT": {
                    title: 'Pokemon CT', wt: `<ul>
<li>宝可梦新增了战斗系统，路过高草丛会几率进入战斗</li>
<li>战斗系统为一个十字形界面，上：技能/精灵球捕捉，下：逃跑，左：回血，右：攻击</li>
<li>战斗守则：攻击，当你血量为33时回血</li>
<li>打败最终BOSS需要捕捉两只，捕捉地点：</li>
<li>一：把包裹交给大木博士后，去常磐市的路上</li>
<li>二：进入森林后遇到的毛毛虫</li>
<li>捕捉时需要将其打到残血。</li>
<li>最终BOSS打法：</li>
<li>第一个敌方精灵，毛虫进化的蝴蝶，先放技能，使其眩晕，在眩晕期间攻击，一旦醒过来就眩晕，重复。</li>
<li>第一个BOSS死后，第二个BOSS会秒杀蝴蝶， 此时用第二个精灵。</li>
<li>第二个精灵打法:攻击，看见它放absorbing技能就去回血(当然你没血了也要去回血)，重复。</li>
<li>【游戏开始】</li>
<li>出生在你房间的二楼</li>
<li>下楼梯离开房间。走出家门。从那里向东北方向进入高草丛，将被传送到大木博士（Professor Oak）的实验室</li>
<li>踩大木博士</li>
<li>踏上桌子，选择你的宝可梦</li>
<li>现在出门去常磐市（Veridian City）拿一个包裹</li>
<li>离开大木博士的实验室，向北走，穿过草地，前往常磐市（Veridian City）</li>
<li>进入城市后，前往 Poke Mart [134，-3]</li>
<li>回到大木博士的实验室，返回时可以跳下小路西侧的山崖，避开高草丛</li>
<li>把包裹交给大木博士后。回常磐市</li>
<li>在房子和两个精灵之间的小路上继续向北走，穿过城市[79,-21]</li>
<li>过了精灵后一路向北</li>
<li>进入一所房子，经过它才能进入常磐森林</li>
<li>穿过常磐森林才能到达尼比市</li>
<li>森林的入口向东走，直到看到高草，然后向北走，直到下一片高草</li>
<li>绕过树木向东走，然后向北走</li>
<li>现在绕过树木向西走，然后向北走</li>
<li>然后穿过草地向西和向南走</li>
<li>沿着这条小路蜿蜒穿过高高的草丛</li>
<li>沿着小路穿过草地，最终离开森林</li>
<li>离开森林后，沿着草丛旁小路向北走，到达 Pewter City。向北向西绕到大房子处，到达道馆</li>
<li>走到大胡桃夹子前，挑战小刚</li>
<li>赢得这场战斗后你会被带到大木博士那里，他会给本地图的水晶球</li>
</ul>`,
                },
                "Winter in Gatlin": {
                    title: 'Winter in Gatlin', wt: `<ul>
<li>从出生点出发</li>
<li>往右走到达树林，往右上走跨过铁栅栏，再往右走，经过红车时从右边缝隙穿过往下走</li>
<li>沿公路向下走到第一个岔路向右走到废弃的小屋[14,80]</li>
<li>进入小屋时，你会在一个黑色的小房间里，走到亮起的圆圈处</li>
<li>在下一个房间里，会有一连串的数字，按以下顺序走到数字上</li>
<li>1,4,6,8,7,6,4</li>
<li>在最后一个房间，Epic_Heasley NPC 会给你本图的水晶球</li>
</ul>`,
                },
            };
            const $city_wrapper = $root.querySelectorAll('div[class^="core-layout__"]');
            $city_wrapper.forEach(el => {
                let $wh_container = $root.querySelector('#wh-xmas-cont');
                if (!$wh_container) {
                    $(el).prepend(insert_html);
                    $wh_container = $root.querySelector('#wh-xmas-cont');
                    // 显示 隐藏
                    const jquery$wh_container = $($wh_container);
                    const $cont_gray = jquery$wh_container.find('.cont-gray');
                    jquery$wh_container.find('button').click(e => {
                        if (e.target.innerText === '[隐藏]') {
                            $cont_gray.hide();
                            e.target.innerText = '[显示]';
                        } else {
                            $cont_gray.show();
                            e.target.innerText = '[隐藏]';
                        }
                    });
                    // 内容
                    const $wt_content = jquery$wh_container.find('#wt-content');
                    jquery$wh_container.find('select').change(e => {
                        const selected = e.target.value;
                        $wt_content.html(`<p><b>${wt_dict[selected].title}</b></p><p>${wt_dict[selected].wt}</p>`)
                    });
                }
            });
        }
        // 宝箱检测
        if (xmasTownNotify) {
            const chestTypeDict = {'1': '金', '2': '银', '3': '铜',};
            const chestTypeColorDict = {'1': 'gold', '2': 'silver', '3': 'sandybrown',};
            const lootTypeDict = {'chests': '钥匙箱', 'gifts': '礼物', 'combinationChest': '密码箱', 'keys': '钥匙',};
            const keyTypeDict = {'b': '铜', 's': '银', 'g': '金',};
            let dropHist = localStorage.getItem('wh-loot-store')
                ? JSON.parse(localStorage.getItem('wh-loot-store'))
                : {};
            const alertSettings = localStorage.getItem('wh-loot-setting')
                ? JSON.parse(localStorage.getItem('wh-loot-setting'))
                : {blink: 'y', sound: 'y', chest: 'y'};
            let $ct_wrap;
            let soundLoopFlag = false;
            const getDOMOb = new MutationObserver(() => {
                $ct_wrap = $root.querySelector('#ct-wrap');
                if ($ct_wrap) {
                    getDOMOb.disconnect();
                    const insert_html = `<div id="wh-loot-container" class="m-bottom10">
<audio src="https://www.torn.com/js/chat/sounds/Chirp_3.mp3" style="display:none"></audio>
<div class="title-black"><span>附近物品</span></div>
<div id="wh-loot-container-main" class="cont-gray">
  <b>物品</b><span id="wh-loot-item-count"></span>
  <div id="wh-loot-container-items"></div>
  <b>箱子</b><span id="wh-loot-chest-count"></span>
  <div id="wh-loot-container-chests"></div>
</div>
<div id="wh-loot-container-ex" class="cont-gray wh-hide">
  <div><label><input type="checkbox" id="wh-loot-setting-blink" ${alertSettings.blink === 'y' ? 'checked' : ''} /> 闪烁提示</label></div>
  <div><label><input type="checkbox" id="wh-loot-setting-sound" ${alertSettings.sound === 'y' ? 'checked' : ''} /> 声音提示 <del>(iOS)</del></label></div>
  <div><label><input type="checkbox" id="wh-loot-setting-chest" ${alertSettings.chest === 'y' ? 'checked' : ''} /> 不记录需要钥匙的宝箱</label></div>
  <div id="wh-hist">
    <div id="wh-hist-clear">
      <p><button>清空数据</button>- 长时间不清空会出现奇怪的问题</p>
    </div>
    <table><thead><tr><th colspan="5">历史记录</th></tr><tr><th>坐标</th><th>地图</th><th>类型</th><th>发现</th><th>获取</th></tr></thead><tbody></tbody></table>
  </div>
</div>
<div id="wh-loot-btn" class="cont-gray"><button>设置</button></div>
</div>
<style>
#wh-loot-container-main{padding: 0.5em;}
#wh-loot-container-main div{overflow-x: auto;overflow-y: hidden;white-space: nowrap;min-height: 4em;}
#wh-loot-container-main div span{display: inline-block;background-color: #2e8b57;color: white;margin: 0 1em 0 0;border-radius: 4px;padding: 0.5em;}
#wh-loot-container-main div span img{height: 1em; width: 1em;}
#wh-loot-container-ex{padding: 0.5em;}
#wh-loot-container-ex.wh-hide{display: none;}
#wh-loot-container-ex #wh-hist{overflow-x: auto;}
#wh-loot-container-ex table {margin-top: 0.5em;}
#wh-loot-container-ex tbody {background-color: antiquewhite;}
#wh-loot-container-ex table, #wh-loot-container-ex th, #wh-loot-container-ex td {
    padding: 5px;
    border: 1px solid black;
    height: auto;
}
#wh-loot-container-ex th:nth-child(1) {min-width: 5em;}
#wh-loot-container-ex th:nth-child(2) {min-width: 8em;}
#wh-loot-container-ex th:nth-child(3) {min-width: 4em;}
#wh-loot-container-ex th:nth-child(4) {min-width: 9em;}
#wh-loot-container-ex th:nth-child(5) {min-width: 3em;}
#wh-loot-container-ex thead {
    background-color: #2e8b57;
    color: white;
}
@keyframes lootFoundAlert {
  0% {background: #f2f2f2}
  50% {background: #2e8b57}
  100% {background: #f2f2f2}
}
</style>`;
                    $($ct_wrap).before(insert_html);
                    const $wh_loot_container = $root.querySelector('#wh-loot-container');
                    const $btn = $wh_loot_container.querySelector('#wh-loot-btn button');
                    const $clear_btn = $wh_loot_container.querySelector('#wh-hist-clear button');
                    const $ex = $wh_loot_container.querySelector('#wh-loot-container-ex');
                    const $tbody = $wh_loot_container.querySelector('tbody');
                    const $blink = $wh_loot_container.querySelector('#wh-loot-setting-blink');
                    const $sound = $wh_loot_container.querySelector('#wh-loot-setting-sound');
                    const $chest = $wh_loot_container.querySelector('#wh-loot-setting-chest');
                    const $audio = $wh_loot_container.querySelector('audio');
                    $btn.onclick = e => {
                        e.target.innerText = e.target.innerText === '设置' ? '收起' : '设置';
                        $($ex).toggleClass('wh-hide');
                        e.target.blur();
                    };
                    $clear_btn.onclick = e => {
                        e.target.blur();
                        dropHist = {};
                        $tbody.innerHTML = '';
                        localStorage.setItem('wh-loot-store', JSON.stringify(dropHist));
                    };
                    $blink.onchange = e => {
                        if (e.target.checked) {
                            alertSettings.blink = 'y';
                            if ($wh_loot_container.querySelector('#wh-loot-item-count').innerText !== '(0)') {
                                $wh_loot_container.querySelector('#wh-loot-container-main').style.animation = 'lootFoundAlert 2s infinite';
                            }
                        } else {
                            alertSettings.blink = 'n';
                            $wh_loot_container.querySelector('#wh-loot-container-main').style.animation = '';
                        }
                        localStorage.setItem('wh-loot-setting', JSON.stringify(alertSettings));
                    };
                    $sound.onchange = e => {
                        if (e.target.checked) {
                            alertSettings.sound = 'y';
                            if ($wh_loot_container.querySelector('#wh-loot-item-count').innerText !== '(0)') {
                                soundLoopFlag = true;
                            }
                        } else {
                            alertSettings.sound = 'n';
                            soundLoopFlag = false;
                        }
                        localStorage.setItem('wh-loot-setting', JSON.stringify(alertSettings));
                    };
                    $chest.onchange = e => {
                        alertSettings.chest = e.target.checked ? 'y' : 'n';
                        localStorage.setItem('wh-loot-setting', JSON.stringify(alertSettings));
                    };
                    const soundIntervalID = window.setInterval(() => {
                        if (soundLoopFlag) $audio.play().then();
                    }, 1200);
                    ob.observe($root, {childList: true, subtree: true});
                }
            });
            const ob = new MutationObserver(() => {
                ob.disconnect();
                // 页面刷新重新获取dom
                $root = document.querySelector('#christmastownroot');
                $ct_wrap = $root.querySelector('#ct-wrap');
                if (!$ct_wrap) {
                    ob.observe($root, {childList: true, subtree: true});
                    return;
                }
                const $ct_title = $ct_wrap.querySelector('.status-title');
                const $pos = $ct_wrap.querySelector('.map-title span[class^="position___"]') || $ct_wrap.querySelector('.status-title span[class^="position___"]');
                if (!$pos) {
                    ob.observe($root, {childList: true, subtree: true});
                    return;
                }
                const $pos_spl = $pos.innerText.trim().split(',');
                const player_position = {};
                player_position.x = parseInt($pos_spl[0]);
                player_position.y = parseInt($pos_spl[1]);
                const $wh_loot_container = $root.querySelector('#wh-loot-container');
                if (!$wh_loot_container) {
                    console.error('掉落助手未找到DOM容器');
                    ob.observe($root, {childList: true, subtree: true});
                    return;
                }
                const $blink = $wh_loot_container.querySelector('#wh-loot-setting-blink');
                const $sound = $wh_loot_container.querySelector('#wh-loot-setting-sound');
                const $chest = $wh_loot_container.querySelector('#wh-loot-setting-chest');
                const $tbody = $wh_loot_container.querySelector('tbody');
                const nearby_arr = [];
                const items = $root.querySelectorAll('div.grid-layer div.items-layer div.ct-item');
                // 附近的所有物品
                items.forEach(el => {
                    const item_props = {x: 0, y: 0, name: '', type: '', url: '',};
                    item_props.x = parseInt(el.style.left.replaceAll('px', '')) / 30;
                    item_props.y = -parseInt(el.style.top.replaceAll('px', '')) / 30;
                    item_props.url = el.firstElementChild.src;
                    const srcSpl = item_props.url.trim().split('/');
                    item_props.name = srcSpl[6];
                    item_props.type = srcSpl[8].slice(0, 1);
                    nearby_arr.push(item_props);
                });
                const $wh_loot_container_items = $wh_loot_container.querySelector('#wh-loot-container-items');
                const $wh_loot_container_chests = $wh_loot_container.querySelector('#wh-loot-container-chests');
                let item_count = 0, chest_count = 0;
                $wh_loot_container_items.innerHTML = '';
                $wh_loot_container_chests.innerHTML = '';
                nearby_arr.forEach(nearby_item => {
                    let path = '=';
                    if (nearby_item.x < player_position.x && nearby_item.y < player_position.y) path = '↙';
                    else if (nearby_item.x < player_position.x && nearby_item.y === player_position.y) path = '←';
                    else if (nearby_item.x < player_position.x && nearby_item.y > player_position.y) path = '↖';
                    else if (nearby_item.x === player_position.x && nearby_item.y > player_position.y) path = '↑';
                    else if (nearby_item.x > player_position.x && nearby_item.y > player_position.y) path = '↗';
                    else if (nearby_item.x > player_position.x && nearby_item.y === player_position.y) path = '→';
                    else if (nearby_item.x > player_position.x && nearby_item.y < player_position.y) path = '↘';
                    else if (nearby_item.x === player_position.x && nearby_item.y < player_position.y) path = '↓';
                    let item_name;
                    if (nearby_item.name === 'chests') {
                        chest_count++;
                        item_name = chestTypeDict[nearby_item.type] + lootTypeDict[nearby_item.name];
                        $wh_loot_container_chests.innerHTML += `<span style="background-color: ${chestTypeColorDict[nearby_item.type] || 'silver'};">${path}[${nearby_item.x},${nearby_item.y}] ${item_name}<img src="${nearby_item.url}" /></span>`
                    } else {
                        item_count++;
                        item_name = (nearby_item.name === 'keys' ? keyTypeDict[nearby_item.type] || '' : '') + lootTypeDict[nearby_item.name] || nearby_item.name;
                        $wh_loot_container_items.innerHTML += `<span>${path}[${nearby_item.x},${nearby_item.y}] ${item_name}<img src="${nearby_item.url}" /></span>`
                    }
                    // 确认地图坐标存在
                    if ($ct_title) {
                        const hist_key = `[${nearby_item.x},${nearby_item.y}]"${$ct_title.firstChild.nodeValue.trim()}"${item_name}`;
                        const el = dropHist[hist_key];
                        if (el) {
                            if (path === '=' && (nearby_item.name === 'keys' || nearby_item.name === 'gifts')) {
                                el.isPassed = true;
                            }
                        } else {
                            if (!(nearby_item.name === 'chests' && $chest.checked)) {
                                const now = new Date();
                                dropHist[hist_key] = {
                                    pos: `[${nearby_item.x},${nearby_item.y}]`,
                                    map: $ct_title.firstChild.nodeValue.trim(),
                                    last: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`,
                                    name: item_name,
                                    id: Object.keys(dropHist).length,
                                };
                            }
                        }
                    }
                });
                $wh_loot_container.querySelector('#wh-loot-item-count').innerText = `(${item_count})`;
                if (item_count === 0) {
                    $wh_loot_container_items.innerText = '暂无';
                    $wh_loot_container.querySelector('#wh-loot-container-main').style.animation = '';
                    soundLoopFlag = false;
                } else {
                    if ($blink.checked) $wh_loot_container.querySelector('#wh-loot-container-main').style.animation = 'lootFoundAlert 2s infinite';
                    if ($sound.checked) soundLoopFlag = true;
                }
                $wh_loot_container.querySelector('#wh-loot-chest-count').innerText = `(${chest_count})`;
                if (chest_count === 0) $wh_loot_container_chests.innerText = '暂无';
                const history = Object.keys(dropHist).map(key => dropHist[key]).sort((a, b) => a.id - b.id);
                let table_html = '';
                history.forEach(e => {
                    table_html += `<tr><td>${e.pos}</td><td>${e.map}</td><td>${e.name}</td><td>${e.last}</td><td>${e.isPassed ? '已取得' : '不确定'}</td></tr>`;
                });
                $tbody.innerHTML = table_html;
                localStorage.setItem('wh-loot-store', JSON.stringify(dropHist));
                ob.observe($root, {childList: true, subtree: true});
            });
            getDOMOb.observe($root, {childList: true, subtree: true});
        }
    }

    // rw雷达
    if (href.includes('profiles.php?XID=0')) {
        const utl = {
            set: function (k, v) {
                const obj = JSON.parse(localStorage['wh_rw_raider']) || {};
                obj[k] = v;
                localStorage['wh_rw_raider'] = JSON.stringify(obj);
            },
            get: function (k) {
                const obj = JSON.parse(localStorage['wh_rw_raider']) || {};
                return obj[k];
            },
            setFactionID: function (id) {
                this.set('faction', id);
            },
            setRWFactionID: function (id) {
                this.set('rw_faction', id);
            },
            getFactionID: async function (apikey) {
                const response = await fetch('https://api.torn.com/faction/?selections=basic&key=' + apikey);
                const res_obj = await response.json();
                const faction_id = res_obj['ID'];
                if (faction_id) {
                    this.setFactionID(faction_id);
                    return faction_id;
                } else return -1;
            },
            getRWFactionID: function (apikey) {
            },
        };
        const rw_raider = async function () {
            if (href.includes('#rader')) {
                addStyle('div.content-title,div.info-msg-cont{display:none;}');
                const wh_node = document.createElement('div');
                wh_node.id = 'wh-rd-cont';
                wh_node.innerHTML = `<div class="m-top10">
<h4 id="skip-to-content" class="left">RW 雷达</h4>
<div class="clear"></div>
<hr class="page-head-delimiter">
</div>

<div class="content m-top10">
<a href="/profiles.php?XID=2687093" target="_blank">woohoo</a>
<table>
<thead>
<tr><th>123</th><th>456</th></tr>
</thead>
<tbody>
<tr><td>789</td><td>012</td></tr>
</tbody></table>
</div>`;
                // 原页面完全加载
                await elementReady('div.msg[role="alert"]');
                const t_cont = document.querySelector('div.content-wrapper');
                // t
                t_cont.append(wh_node);
            }
        };
        addEventListener('hashchange', rw_raider);

        await rw_raider();
    }

    // 通知翻译
    function eventsTrans(events = $('span.mail-link')) {
        // if (!wh_trans_settings.transEnable) return;
        const index = window.location.href.indexOf('events.php#/step=received') >= 0 ? 1 : 0;
        const isReceived = index === 1;
        // 通知的类型选择栏
        $('ul.mailbox-action-wrapper a').contents().each((i, e) => {
            if (e.nodeValue)
                if (eventsDict[e.nodeValue.trim()])
                    e.nodeValue = eventsDict[e.nodeValue.trim()];
        });

        // 桌面版右边按钮浮动提示消息
        $('div.mailbox-container i[title]').each((i, e) => {
            if (eventsDict[$(e).attr('title')]) {
                $(e).attr('title', eventsDict[$(e).attr('title')]);
            }
        });

        // 手机版底部按钮
        $('.mobile-mail-actions-wrapper div:nth-child(2)').each((i, e) => {
            if (eventsDict[$(e).text().trim()])
                $(e).text(eventsDict[$(e).text().trim()]);
        });

        // 黑框标题
        $('#events-main-wrapper .title-black').each((i, e) => {
            if (eventsDict[$(e).text().trim()]) {
                $(e).text(eventsDict[$(e).text().trim()]);
            }
        });

        // 发送的两个按钮 + user id
        $('#events-main-wrapper div.send-to a.btn').each((i, e) => {
            if (eventsDict[$(e).text().trim()]) {
                $(e).text(eventsDict[$(e).text().trim()]);
            }
        });
        $('#events-main-wrapper div.send-to span.cancel a').each((i, e) => {
            if (eventsDict[$(e).text().trim()]) {
                $(e).text(eventsDict[$(e).text().trim()]);
            }
        });
        $('#events-main-wrapper div.send-to span.name').each((i, e) => {
            if (eventsDict[$(e).text().trim()]) {
                $(e).text(eventsDict[$(e).text().trim()]);
            }
        });

        // 通知翻译的开关
        if (!$('div#event-trans-msg').get(0) && !window.location.href.contains(/index\.php/)) {
            //             msgBox(`<div id="event-trans-msg">插件暂时不能翻译全部通知。<br>
            // 如发现问题请发送通知并联系 <a href="profiles.php?XID=2687093">Woohoo[2687093]</a><br>
            // <input type="checkbox" id="eventTransCheck" name="eventTransCheck" /><label for="eventTransCheck">开启通知翻译</label> 可能会出现卡顿，默认开启</div>`);
            $('input#eventTransCheck').attr('checked', localStorage.getItem('wh_trans_event') === 'true');
            $('input#eventTransCheck').change(function () {
                if ($(this).attr('checked') === undefined) {
                    localStorage.setItem('wh_trans_event', 'false');
                } else {
                    localStorage.setItem('wh_trans_event', 'true');
                }
                eventsTrans();
            });
        }

        if (localStorage.getItem('wh_trans_event') === 'false') return;
        if (events.length === 0) return;
        events.each((i, e) => {
            // todo “收到的信息” 暂时删除发送人节点 不影响显示
            if (isReceived) {
                $(e).children('a.sender-name').remove();
            }

            if (eventsDict[$(e).text().trim()]) {
                $(e).text(eventsDict[$(e).text().trim()]);
                return;
            }

            /**
             * 赛车
             * You finished 5th in the Hammerhead race. Your best lap was 01:14.87.
             * You finished 1st in the Docks race. Your best lap was 04:01.33.
             * You finished 1st in the Hammerhead race and have received 3 racing points! Your best lap was 01:06.92.
             * You finished 4th in the Docks race. Your best lap was 03:29.27 beating your previous best lap record of 03:35.77 by 00:06.50.
             * You have crashed your Honda NSX on the Sewage race! The upgrades Paddle Shift Gearbox (Short Ratio) and Carbon Fiber Roof were lost.
             * You have crashed your Ford Mustang on the Docks race! Your car has been recovered.
             */
            if ($(e).text().indexOf('finished') >= 0) {

                if ($(e).text().indexOf('crashed') >= 0) return; // todo 撞车

                const isGainRacingPoint = $(e).text().indexOf('racing point');
                let racingPoint = isGainRacingPoint >= 0 ? $(e).text()[isGainRacingPoint - 2] : null;

                const isBeat = $(e).text().indexOf('beating') >= 0;
                let record, bestBy;
                if (isBeat) {
                    record = $(e).text().split('record of ')[1].split(' by ')[0];
                    bestBy = $(e).text().split('record of ')[1].split(' by ')[1].split('. ')[0];
                }

                const pos = e.childNodes[1].firstChild.nodeValue.match(/[0-9]+/)[0];

                const splitList = e.childNodes[2].nodeValue.split(' ');
                const bestLap = e.childNodes[2].nodeValue.split(' best lap was ')[1].slice(0, 8);//.split(' ')[0];

                let map = splitList[3];
                map = map === 'Two' ? 'Two Islands' : map;
                map = map === 'Stone' ? 'Stone Park' : map;

                e.firstChild.nodeValue = '你在赛车比赛 ' + map + ' 中获得第 ';
                e.childNodes[1].firstChild.nodeValue = pos;
                e.childNodes[2].nodeValue = ' 名，';
                if (isGainRacingPoint >= 0) {
                    e.childNodes[2].nodeValue += '获得' + racingPoint + '赛车点数 (Racing Points)。';
                }

                e.childNodes[2].nodeValue += '你的最佳圈速是 ' + bestLap;
                if (isBeat) e.childNodes[2].nodeValue += '，比之前最佳 ' + record + ' 快 ' + bestBy;
                e.childNodes[2].nodeValue += '。'


                e.childNodes[2].nodeValue += '[';
                e.childNodes[3].firstChild.nodeValue = '查看';
                return;
            }

            /**
             * 还贷
             */
            if ($(e).text().contains(/You have been charged \$[0-9,]+ for your loan/)) {
                const node1Value = e.firstChild.nodeValue; // You have been charged $29,000 for your loan. You can pay this by visiting the
                //e.childNodes[1].firstChild.nodeValue; // <a href="loan.php">Loan Shark</a>
                // const node3Value=e.childNodes[2].nodeValue;  内容是 ". "

                let charge = node1Value.split(' ')[4];
                let replace;
                replace = '你需要支付 ';
                replace += charge;
                replace += ' 贷款利息，点此支付：';

                e.firstChild.nodeValue = replace;
                e.childNodes[1].firstChild.nodeValue = '鲨客借贷';
                e.childNodes[2].nodeValue = '。';
                return;
            }

            /**
             * 收到钱物
             * You were sent $21,000,000 from
             * <a href="profiles.php?XID=2703642">JNZR</a>
             * .
             * 附带信息： with the message: Manuscript fee OCT
             * e.firstChild.nodeValue
             * e.childNodes[1].firstChild.nodeValue
             * e.childNodes[2].nodeValue
             *
             * You were sent 4x Xanax from RaichuQ with the message: Manuscript fee OCT
             * You were sent $21,000,000 from JNZR.
             * You were sent some Xanax from runningowl
             * You were sent 1x Present from Duke with the message: Is it your birthday?
             * You were sent Duke's Safe from DUKE
             * You were sent a Diamond Bladed Knife from charapower
             */
            if ($(e).text().contains(/You were sent .+ from/)) {
                // 数量 物品 信息
                // spl = [You were sent 1x Birthday Present from]
                const spl = $(e).contents().get(0).nodeValue.trim().split(' ');
                const msgSpl = $(e).text().trim().split('with the message: ');
                const num = /^\$[0-9,]+\b/.test(spl[3]) ? '' : spl[3].numWordTrans();
                const item = num === '' ? spl[3] : spl.slice(4, -1).join(' ');
                const msg = msgSpl[1] ? msgSpl[1] : null;
                e.childNodes[0].nodeValue = `你收到了 ${num} ${item}，来自 `;
                if (e.childNodes[2]) {
                    e.childNodes[2].nodeValue = `。`;
                }
                if (msg) {
                    e.childNodes[2].nodeValue = `，附带信息：${msg}。`;
                }
                return;
            }

            /**
             * bazaar
             * Dewei3 bought 2 x Toyota MR2 from your bazaar for $56,590.
             * ['', 'bought', '2', 'x', 'Toyota', 'MR2', 'from', 'your', 'bazaar', 'for', '$56,590.\n']
             * e.childNodes[1].nodeValue
             */
            if ($(e).text().contains(/bought .+ from your bazaar for/)) {
                const bazEN = e.childNodes[1].nodeValue;
                const spl = bazEN.split(' ');

                const num = spl[2];
                const item = spl.slice(4, spl.indexOf('from')).join(' ');
                const money = spl[spl.length - 1].replace('.', '');

                e.childNodes[1].nodeValue = ' 花费 ' + money + ' 从你的店铺购买了 ' + num + ' 个 ' + ' ' + item + '。';
                return;
            }

            /**
             * 交易
             */
            if ($(e).text().indexOf('trade') >= 0) {
                const PCHC = '点此继续';
                if ($(e).text().indexOf('You must now accept') >= 0) {
                    /**
                     * 接受交易
                     * <a href="profiles.php?XID=2703642">JNZR</a>
                     * has accepted the trade titled "g't". You must now accept to finalize it.
                     * <a href="trade.php#step=view&amp;ID=6567058" i-data="i_598_654_156_14">Please click here to continue.</a>
                     * JNZR已经接受了名为 "g't "的交易。你现在必须接受以完成它。
                     */
                    const firstWords = e.childNodes[1].nodeValue.split('. You must')[0];
                    const tradeName = firstWords.slice(31, firstWords.length);
                    e.childNodes[1].nodeValue = ' 已经接受了名为 ' + tradeName + ' 的交易。你现在必须接受以完成它。';
                    e.childNodes[2].firstChild.nodeValue = PCHC;
                    return;
                }
                if ($(e).text().indexOf('expired') >= 0) {
                    /**
                     * 交易过期
                     * The trade with
                     * <a href="profiles.php?XID=2696209" i-data="i_278_269_71_14">sabrina_devil</a>
                     *  has expired
                     *  与sabrina_devil的交易已经过期。
                     */
                    e.firstChild.nodeValue = '与 ';
                    e.childNodes[2].nodeValue = ' 的交易已过期。';
                    return;
                }
                if ($(e).text().indexOf('initiated') >= 0) {
                    /**
                     * 交易发起
                     * <a href="profiles.php?XID=2696209" i-data="i_199_374_71_14">sabrina_devil</a>
                     *  has initiated a trade titled "gt".
                     *  <a href="trade.php#step=view&amp;ID=6563577" i-data="i_435_374_156_14">Please click here to continue.</a>
                     *  sabrina_devil发起了一项名为 "gt "的交易。
                     */
                    const node2 = e.childNodes[1].nodeValue;
                    const tradeName = node2.slice(30, node2.length - 2);
                    e.childNodes[1].nodeValue = ' 发起了标题为 ' + tradeName + ' 的交易。';
                    e.childNodes[2].firstChild.nodeValue = PCHC;
                    return;
                }
                if ($(e).text().indexOf('now complete') >= 0) {
                    /**
                     * 交易完成
                     * <a href="profiles.php?XID=2692672" i-data="i_199_829_51_14">Tmipimlie</a>
                     *  has accepted the trade. The trade is now complete.
                     * Tmipimlie已经接受交易。现在交易已经完成。
                     */
                    e.childNodes[1].nodeValue = ' 已经接受交易。该交易现已完成。';
                    return;
                }
                if ($(e).text().indexOf('canceled') >= 0) {
                    /**
                     * 交易完成
                     * <a href="profiles.php?XID=2431991">WOW</a>
                     *  has canceled the trade.
                     * WOW已经取消了这项交易。
                     */
                    e.childNodes[1].nodeValue = ' 已经取消了这个交易。';
                    return;
                }
                if ($(e).text().indexOf('commented') >= 0) {
                    /**
                     * 交易评论
                     * <a href="profiles.php?XID=2567772">QIJI</a>
                     *  commented on your
                     * <a href="/trade.php#step=view&amp;ID=6405880" i-data="i_334_968_73_14">pending trade</a>
                     * : "Thank you for trading with me! The total is $19,461,755 and you can view your receipt here: https://www.tornexchange.com/receipt/mhWuuL7hrE"
                     */
                    e.childNodes[1].nodeValue = ' 对';
                    e.childNodes[2].firstChild.nodeValue = '进行中的交易';
                    e.childNodes[3].nodeValue = '添加了一条评论' + e.childNodes[3].nodeValue;
                    return;
                }
                return;
            }

            /**
             * 被mug
             */
            if ($(e).text().indexOf('mugged') >= 0) {
                const spl = $(e).text().trim().split(' ');
                if (spl.length > 7) return; // todo 多人运动暂时跳过
                const money = spl[spl.length - 2];
                if (spl[0] === 'Someone') { // 被匿名mug
                    e.firstChild.nodeValue = '有人打劫你并抢走了 ' + money + ' [';
                    e.childNodes[1].firstChild.nodeValue = '查看';
                } else {
                    e.childNodes[1].nodeValue = ' 打劫你并抢走了 ' + money + ' [';
                    e.childNodes[2].firstChild.nodeValue = '查看';
                }
                return;
            }

            /**
             * 被打
             */
            if ($(e).text().indexOf('attacked') >= 0) { // 被打
                /**
                 * 攻击方式 词数=spl.length
                 * 匿名 4 Someone attacked you [view]
                 * - hosp 6 Someone attacked and hospitalized you [view]
                 * -- 有人袭击了你并安排你住院
                 * 实名 4 EternalSoulFire attacked you [view]
                 * - lost 6 EternalSoulFire attacked you but lost [view]
                 * - hosp 6
                 * - 逃跑esc 6 Dr_Bugsy_Siegel attacked you but escaped [view]
                 * - 25回合平手stale 6 Tharizdun attacked you but stalemated [view]
                 * - 起飞或bug 6 Mrew tried to attack you [view]
                 *
                 * You attacked Cherreh but timed out [view]
                 *
                 * 多人运动 todo
                 * 10 Pual (and 2 others) attached you and hospitalized you [view]
                 * 9 Argozdoc attacked you but Norm fought him off [view]
                 */
                const spl = $(e).text().trim().split(' ');

                if (spl.length > 6) { // 多人运动暂时跳过
                    /**
                     * 超时自动失败
                     */
                    if (spl[4] === 'timed') {
                        if (e.firstChild.firstChild) { // 由第一个节点是否有子节点判断 被攻击
                            e.childNodes[1].nodeValue = ' 袭击你但是超时了 [';
                            e.childNodes[2].firstChild.nodeValue = '查看';
                            return;
                        }
                        e.firstChild.nodeValue = '你袭击 ';
                        e.childNodes[2].nodeValue = ' 但是超时了 [';
                        e.childNodes[3].firstChild.nodeValue = '查看';
                        return;
                    }
                    return;
                }

                if ($(e).find('a').text().toLowerCase().indexOf('someone') < 0 && // 避免玩家名带有someone字样
                    $(e).text().split(' ')[0].toLowerCase() === 'someone') { // 被匿名
                    if (spl.length === 6 && spl[3] === 'hospitalized') { // 匿名hos
                        e.firstChild.nodeValue = '有人袭击你并将你强制住院 [';
                        e.childNodes[1].firstChild.nodeValue = '查看';
                        return;
                    }
                    e.firstChild.nodeValue = '有人袭击了你 [';
                    e.childNodes[1].firstChild.nodeValue = '查看';
                    return;
                }

                if (spl.length === 4) { // 实名leave
                    e.childNodes[1].nodeValue = ' 袭击了你 [';
                    e.childNodes[2].firstChild.nodeValue = '查看';
                    return;
                }

                if (spl.length === 6) { // 实名的情况
                    switch (spl[4]) {
                        case 'lost':
                            e.childNodes[1].nodeValue = ' 袭击你但输了 [';
                            e.childNodes[2].firstChild.nodeValue = '查看';
                            return;
                        case 'escaped':
                            e.childNodes[1].nodeValue = ' 袭击你但逃跑了 [';
                            e.childNodes[2].firstChild.nodeValue = '查看';
                            return;
                        case 'stalemated':
                            e.childNodes[1].nodeValue = ' 袭击你但打成了平手 [';
                            e.childNodes[2].firstChild.nodeValue = '查看';
                            return;
                    }
                    switch (spl[3]) {
                        case 'attack': // Mrew tried to attack you [view]
                            e.childNodes[1].nodeValue = ' 尝试袭击你 [';
                            e.childNodes[2].firstChild.nodeValue = '查看';
                            return;
                        case 'hospitalized':
                            e.childNodes[1].nodeValue = ' 袭击你并将你强制住院 [';
                            e.childNodes[2].firstChild.nodeValue = '查看';
                            return;
                    }
                }

            }

            /**
             * 每日彩票
             * 有人在Lucky Shot彩票中赢得11,832,100,000美元!
             * zstorm won $5,574,200 in the Daily Dime lottery!
             */
            if ($(e).text().indexOf('lottery') >= 0) {
                const split = e.childNodes[1].nodeValue.split(' ');
                const type = split[split.length - 3] + ' ' + split[split.length - 2];
                const money = split[2];
                e.childNodes[1].nodeValue = ' 在 ' + type + ' 彩票中赢得了 ' + money + '！';
                return;
            }

            /**
             * 公司职位变更
             */
            if ($(e).text().contains(/, the director of .+, has/)) {
                $(e).contents().each((i, e) => {
                    if (e.nodeType === 3) {
                        if (eventsDict[e.nodeValue.trim()]) {
                            e.nodeValue = eventsDict[e.nodeValue.trim()];
                        } else {
                            // 工资改变
                            if (e.nodeValue.contains(/wage/)) {
                                const money = e.nodeValue.trim().slice(27, -9);
                                e.nodeValue = ` 的老板) 将你的每日工资改为 ${money}。`;
                                return;
                            }
                            // 职位改变
                            if (e.nodeValue.contains(/rank/)) {
                                const pos = e.nodeValue.trim().slice(27, -1);
                                e.nodeValue = ` 的老板) 将你的公司职位改为 ${pos}。`;
                                return;
                            }
                            if (e.nodeValue.contains(/assigned/)) {
                                e.nodeValue = ` 的老板) 将你指派为新的公司老板。`;
                                return;
                            }
                            // 火车
                            if (e.nodeValue.contains(/trained/)) {
                                const spl = e.nodeValue.trim().split(' ');
                                const pri = spl[10];
                                const sec = spl[13].slice(0, -1);
                                e.nodeValue = ` 的老板) 从公司训练了你。你获得了 50 ${eventsDict[pri]} 和 25 ${eventsDict[sec]}。`;
                            }
                        }
                    }
                });
                return;
            }

            /**
             * 悬赏已被领取
             */
            if ($(e).text().contains(/bounty reward/)) {
                $(e).contents().each((i, e) => {
                    if (e.nodeType === 3) {
                        if (eventsDict[e.nodeValue.trim()]) {
                            e.nodeValue = ` ${eventsDict[e.nodeValue.trim()]} `;
                        } else {
                            if (e.nodeValue.contains(/bounty reward/)) {
                                const bountyAmount = e.nodeValue.trim().split(' ')[3];
                                if (eventsDict['and earned your'] && eventsDict['bounty reward']) {
                                    e.nodeValue = ` ${eventsDict['and earned your']} ${bountyAmount} ${eventsDict['bounty reward']}`;
                                }
                            }
                        }
                    }
                });
                return;
            }

            /**
             * oc开启
             * You have been selected by
             * <a href="profiles.php?XID=2537542" class="h" i-data="i_346_233_63_14">endlessway</a>
             *  to participate in an organized crime. You, along with 2 others will make up the team to
             * <a href="organisedcrimes.php" i-data="i_312_248_107_14">make a bomb threat</a>
             *  in 72 hours.
             *
             * 你被endlessway选中参与一项有组织的犯罪活动。你和另外两个人将组成一个团队，在72小时内进行炸弹威胁。
             */
            if ($(e).text().indexOf('organized crime') >= 0) {
                const time = e.childNodes[4].nodeValue.split(' ')[2];
                const OCName = e.childNodes[3].firstChild.nodeValue;
                let others = e.childNodes[2].nodeValue.split(' ')[10];
                others = others === 'one' ? '1' : others;
                e.firstChild.nodeValue = '你被 ';
                e.childNodes[2].nodeValue = ` 选中参与一项组织犯罪(OC)。你和另外${others}人将组成一个团队，在${time}小时后进行 `;
                e.childNodes[3].firstChild.nodeValue = ocList[OCName] ? ocList[OCName] : OCName;
                e.childNodes[4].nodeValue = '。';
                return;
            }

            /**
             * oc结束
             * - You and your team tried to make a bomb threat but failed! View the details
             * - You and your team successfully blackmailed someone! View the details
             * <a href="organisedcrimes.php?step=log&amp;ID=9404419" i-data="i_595_234_24_14">here</a>
             * !
             */
            if ($(e).text().indexOf('You and your team') >= 0) {
                let rs = '成功';
                let OCName = e.firstChild.nodeValue.slice(31, -19);
                if ($(e).text().indexOf('fail') >= 0) {
                    rs = '失败';
                    OCName = e.firstChild.nodeValue.slice(27, -30);
                }
                e.firstChild.nodeValue = `你和团队的组织犯罪(OC) ${ocList[OCName] ? ocList[OCName] : OCName} ${rs}了！`;
                e.childNodes[1].firstChild.nodeValue = '点此查看详情';
                e.childNodes[2].nodeValue = '！';
                return;
            }

            /**
             * bust
             * <a href="profiles.php?XID=2208715">Spookyt</a>
             *  failed to bust you out of jail.
             */
            if ($(e).text().indexOf('bust') >= 0) {
                if (e.childNodes[1].nodeValue[1] === 'f') { // 失败
                    e.childNodes[1].nodeValue = ' 没能把你从监狱救出来。';
                    return;
                }
                if (e.childNodes[1].nodeValue[1] === 'w') { // 失败被抓
                    e.childNodes[1].nodeValue = ' 在尝试救你出狱时被抓了。';
                    return;
                }
                if (e.childNodes[1].nodeValue[1] === 's') {
                    e.childNodes[1].nodeValue = ' 成功把你从监狱里救了出来。';
                    return;
                }
            }

            /**
             * 保释
             */
            if ($(e).text().indexOf('bailed') >= 0) {
                const cost = e.childNodes[1].nodeValue.trim().slice(27, -1);
                e.childNodes[1].nodeValue = ' 花费 ' + cost + ' 保释了你。';
                return;
            }

            /**
             * 收到帮派的钱
             */
            if ($(e).text().contains(/You were given \$[0-9,]+ from your faction/)) {
                const money = e.firstChild.nodeValue.split(' ')[3];
                let isNamed = e.childNodes.length > 1;
                if (isNamed) {
                    e.firstChild.nodeValue = '';
                    e.childNodes[2].nodeValue = ' 为你从帮派取了 ' + money + '。';
                } else {
                    e.firstChild.nodeValue = '你得到了从帮派取出的 ' + money + '。';
                }
                return;
            }

            /**
             * 被下悬赏
             */
            if ($(e).text().contains(/has placed .+ bount.+ on you/)) {
                // 是否匿名 悬赏个数 悬赏单价 原因
                const spl = $(e).text().trim().split(' ');
                const reasonSpl = $(e).text().trim().split(' and the reason: ');
                const someone = !e.children.length;
                const num = spl[3] === 'a' ? '1' : spl[3];
                const price = reasonSpl[0].split(' ').slice(-1)[0];
                const reason = reasonSpl[1] ? reasonSpl[1] : null;
                const trans = `${someone ? '某人' : ' '}对你进行了 ${num} 次赏金为 ${price} 的悬赏${reason ? '，原因：' + reason : ''}`;
                // 匿名悬赏
                if (someone) {
                    $(e).text(trans);
                }
                // 实名悬赏
                else {
                    $(e).contents().get(1).nodeValue = trans;
                }
                return;
            }

            /**
             * 成功复活
             */
            if ($(e).text().contains(/successfully revived you/)) {
                if (e.children.length !== 1) return;
                if (eventsDict[$(e).contents().get(1).nodeValue.trim()]) {
                    $(e).contents().get(1).nodeValue = eventsDict[$(e).contents().get(1).nodeValue.trim()]
                }
                return;
            }

            /**
             * 失败复活
             */
            if ($(e).text().contains(/failed to revive you/)) {
                if (e.children.length !== 1) return;
                if (eventsDict[$(e).contents().get(1).nodeValue.trim()]) {
                    $(e).contents().get(1).nodeValue = eventsDict[$(e).contents().get(1).nodeValue.trim()]
                }
                return;
            }

            /**
             * 收到帮派的pt
             */
            if ($(e).text().contains(/You were given [0-9,]+ points? from your faction/)) {
                const pt = e.firstChild.nodeValue.split(' ')[3];
                e.firstChild.nodeValue = '你得到了从帮派取出的 ' + pt + ' PT。'
                return;
            }

            /**
             * 帮派借东西
             */
            if ($(e).text().contains(/loaned you .+ from the faction armory/)) {
                const [num, item] = (() => {
                    const spl = e.lastChild.nodeValue.trim().slice().slice(11, -25).split(' ');
                    return spl.length === 1 ? [spl[0], null] : [spl[0], spl.slice(1).join(' ')];
                })();
                if (num && item) {
                    e.lastChild.nodeValue = ` 从帮派军械库中借给你 ${num.numWordTrans()} ${item}。`;
                }
                return;
            }

            /**
             * 教育完成
             * <a href="/education.php" i-data="i_199_234_363_14">The education course you were taking has ended. Please click here.</a>
             */
            if ($(e).text().indexOf('edu') >= 0) {
                if ($(e).text().trim().split(' '))
                    e.firstChild.firstChild.nodeValue = '你的课程已学习结束，请点此继续。';
                return;
            }

            /**
             * LSD od
             */
            if ($(e).text().contains(/LSD .+ overdosed/)) {
                if (eventsDict[$(e).text().trim()]) $(e).text(eventsDict[$(e).text().trim()]);
                return;
            }

            /**
             * 公司申请
             */
            if ($(e).text().contains(/Your application to join the company .+ has been/)) {
                $(e).contents().each((i, e) => {
                    if (e.nodeType === 3) {
                        if (eventsDict[e.nodeValue.trim()]) {
                            e.nodeValue = eventsDict[e.nodeValue.trim()];
                        }
                    }
                });
                return;
            }

            /**
             * 银行完成
             */
            if ($(e).text().contains(/Your bank investment has ended/)) {
                $(e).children().text('你的银行投资已经结束。请点击这里领取你的资金。');
                return;
            }

            /**
             * 人物升级
             * <span class="mail-link" id="event-865162632">Congratulations! You upgraded your level to 31!
             </span>
             */
            if ($(e).text().indexOf('upgraded') >= 0) {
                const level = e.firstChild.nodeValue.slice(44, -2);
                e.firstChild.nodeValue = '恭喜！你已升至' + level + '级！';
                return;
            }

            /**
             * 开新健身房
             * <span class="mail-link" id="event-855834754">You have successfully purchased membership in Deep Burn.</span>
             * 你已成功购买Deep Burn的健身房会员卡。
             */
            if ($(e).text().contains(/You have successfully purchased membership in/)) {
                const gymName = e.firstChild.nodeValue.trim().slice(46, -1);
                e.firstChild.nodeValue = `你已购买【${gymList[gymName]}】健身房会员卡。`;
                return;
            }

            /**
             * 人物称号
             */
            if ($(e).text().contains(/You are now known in the city as a/)) {
                const trans = '现在你在这个城市中被称为';
                const title = $(e).text().trim().split(' ').slice(9).join(' ').slice(0, -1);
                $(e).text(`${trans} ${title}。`);
                return;
            }

            /**
             * 收下线
             */
            if ($(e).text().contains(/You have successfully referred/)) {
                $(e).contents().each((i, e) => {
                    // 文字
                    if (e.nodeType === 3) {
                        if (eventsDict[e.nodeValue.trim()]) {
                            e.nodeValue = eventsDict[e.nodeValue.trim()];
                        }
                    }
                    // referral list
                    else if (e.nodeType === 1) {
                        if (eventsDict[$(e).text().trim()]) {
                            $(e).text(eventsDict[$(e).text().trim()]);
                        }
                    }
                });
                return;
            }

            /**
             * new virus病毒
             * You completed the Simple Virus which is now in your inventory. You can begin programming a new virus
             * <a href="pc.php">here</a>
             * .
             *
             * 你完成了 "简单病毒"，它现在在你的库存中。你可以【点此】开始编程一个新的病毒。
             */
            if ($(e).text().indexOf('new virus') >= 0) {
                const virusName = e.firstChild.nodeValue.split(' ').slice(3, 5).join(' ');
                e.firstChild.nodeValue = `你完成了 ${virusName}，它现在在你的物品库存中。你可以`;
                e.childNodes[1].firstChild.nodeValue = '点此';
                e.childNodes[2].nodeValue = '开始编程一个新的病毒。';
                return;
            }

            /**
             * 每月蓝星奖励
             */
            if ($(e).text().contains(/You found .+ and .+ on your doorstep/)) {
                const [item1, item2] = $(e).text().trim().slice(10, -18).split(' and ');
                const bookTitle = item2.contains(/a book titled/) ? item2.slice(15, -1) : null;

                if (bookTitle) {
                    $(e).text(`你在家门口发现了 ${item1.numWordTrans()} 和《${bookTitle}》。`);
                } else {
                    $(e).text(`你在家门口发现了 ${item1.numWordTrans()} 和 ${item2.numWordTrans()}。`);
                }
                return;
            }

            /**
             * 季度邮件奖励

             if ($(e).text().contains(/used the reward bonus code/)) {
                const code = $(e).text().trim().split(' ')[7];
                if (eventsDict[$(e).text().trim().replace(code, '{$}')])
                    $(e).text(eventsDict[$(e).text().trim().replace(code, '{$}')]
                        .replace('{$}', code));
                return;
            }

             /**
             * 求婚
             */
            if ($(e).text().contains(/accepted your proposal, you are now engaged/)) {
                const spouse = $(e).children(':first').text().trim();
                if (e.childNodes[1]) {
                    e.childNodes[1].nodeValue = ` 接受了你的求婚，你现在和 ${spouse} 订婚了！前往`;
                }
                if (e.childNodes[2] && e.childNodes[2].firstChild) {
                    e.childNodes[2].firstChild.nodeValue = `这里`;
                }
                if (e.childNodes[3]) {
                    e.childNodes[3].nodeValue = `完成仪式。`;
                }
                return;
            }

            /**
             * 帮派职位变更
             * Your position in
             * <a href="factions.php?step=profile&amp;ID=36134" i-data="i_92_242_62_14">Silver Hand</a>
             *  changed from Recruit to Knight.
             */
            if ($(e).text().indexOf('position') >= 0) {
                let prePos, curPos;
                const node3Spl = e.childNodes[2].nodeValue.split(' to ');
                if (node3Spl.length === 2) {
                    prePos = node3Spl[0].slice(14, node3Spl[0].length);
                    curPos = node3Spl[1].slice(0, node3Spl[1].length - 2);
                } else {
                    log('职位出现" to "');// todo
                    return;
                }
                e.firstChild.nodeValue = '你在 ';
                e.childNodes[2].nodeValue = ` 的职位从 ${prePos} 变为 ${curPos}。`;
                return;
            }

            /**
             * 加入帮派结果
             */
            if ($(e).text().indexOf('join the faction') >= 0) {
                const rsName = e.childNodes[2].nodeValue.trim().split(' ')[2];
                const rsDict = {'accepted': '通过', 'declined': '拒绝',};
                e.firstChild.nodeValue = '加入帮派 ';
                e.childNodes[2].nodeValue = ` 的申请已${rsDict[rsName]}。`;
                return;
            }
        });
    }

    // 页标题右侧按钮
    function contentTitleLinksTrans() {
        const $links_default = document.querySelectorAll('div.content-title span:nth-child(2)');
        const $links = $links_default.length === 0
            ? document.querySelectorAll('div[class^="topSection"] span[class*="Title"]')
            : $links_default;
        $links.forEach(e => {
            if (titleLinksDict[e.innerText.trim()]) {
                e.innerText = titleLinksDict[e.innerText.trim()];
            } else if (e.id === 'events') {
                if (titleLinksDict[e.innerText.trim().split(' ')[0]])
                    e.innerText = e.innerText.trim()
                        .replace(
                            e.innerText.trim().split(' ')[0],
                            titleLinksDict[e.innerText.trim().split(' ')[0]]
                        );
            }
        });
    }

    function contentTitleLinksTransReact(dom = document.querySelectorAll('div[class^="linksContainer___"] span[class^="linkTitle___"]')) {
        dom.forEach(e => {
            const links_trans = titleLinksDict[e.innerText.trim()];
            if (links_trans) e.innerText = links_trans;
        });
    }

    /**
     * 页标题翻译
     */
    function titleTrans() {
        const $title = $('h4#skip-to-content').length === 0 ? $('h4[class^="title"]') : $('h4#skip-to-content');
        const title = titleDict[$title.text().trim()] || cityDict[$title.text().trim()];
        if (title && $title.css('display') !== 'none') $title.after($title.clone().text(title)).css('display', 'none');
    }

    function titleTransReact(dom = document.querySelectorAll('h4[class^="title___"]')) {
        dom.forEach(e => {
            const title_trans = titleDict[e.innerText.trim()];
            if (title_trans) e.innerText = title_trans;
        });
    }

    /**
     * 发钱翻译
     */
    function sendCashTrans(domPath = '', buttonClass = '.send-cash') {
        const sc = $(`${domPath} ${buttonClass} *`);
        if (sc.length === 0) return;
        sc.contents().each((i, e) => {
            if (e.nodeType === 1) {
                if (sendCashDict[$(e).attr('placeholder')]) {
                    $(e).attr('placeholder', sendCashDict[$(e).attr('placeholder')]);
                    return;
                }
                if (sendCashDict[$(e).attr('title')]) {
                    $(e).attr('title', sendCashDict[$(e).attr('title')]);
                }
            } else if (e.nodeType === 3) {
                if (sendCashDict[e.nodeValue.trim()]) {
                    e.nodeValue = sendCashDict[e.nodeValue.trim()];
                }
            }
        });
    }

    /**
     * 玩家状态翻译
     */
    function playerStatusTrans(slt) {
        if (!slt) return;
        slt.contents().each((i, e) => {
            if (e.nodeType === 3) {
                if (statusDict[e.nodeValue.trim()]) {
                    e.nodeValue = statusDict[e.nodeValue.trim()];
                } else if (hosDict[e.nodeValue.trim()]) {
                    e.nodeValue = hosDict[e.nodeValue.trim()];
                }
                // 医院 监狱
                else {
                    if (e.nodeValue.contains(/In hospital for/))
                        e.nodeValue = e.nodeValue
                            .replace('In hospital for', '住院')
                            .replaceHMS();
                    else if (e.nodeValue.contains(/In jail for/))
                        e.nodeValue = e.nodeValue
                            .replace('In jail for', '坐牢')
                            .replaceHMS();
                }
            }
        });
    }

    /**
     * 任务助手
     */
    function getTaskHint(task_name) {
        task_name = task_name
            .toLowerCase()
            .replaceAll(' ', '_')
            .replaceAll('-', '_')
            .replaceAll(',', '');
        if (!missionDict._taskHint[task_name]) return '暂无，请联系开发者';
        const task = missionDict._taskHint[task_name].task || null;
        const hint = missionDict._taskHint[task_name].hint || null;
        return `${task ? '任务要求：' + task : '暂无，请联系<a href="profiles.php?XID=2687093">Woohoo</a>'}${hint ? '<br>提示：' + hint : ''}`;
    }

    /*
    展开物品详情
     */
    function showItemInfoTrans(dom = document.querySelector('.show-item-info')) {
        if (dom) {
            const $item_info = dom.querySelector('span.info-msg');
            if ($item_info) {
                // tt插件
                const is_tt_modified = !!$item_info.querySelector('.tt-modified');
                if (is_tt_modified) {
                    console.warn(is_tt_modified)
                }
                // 物品名
                const $item_name = $item_info.querySelector('span.bold');
                // 去除物品名的the
                const the_removed = $item_name.innerText.trim().slice(4);
                // 物品的类别
                const $item_type = $item_name.nextSibling;
                // 绿字 物品效果
                const $item_effect = $item_info.querySelector('div.item-effect');
                if (itemNameDict[the_removed]) {
                    $item_name.innerText = `${itemNameDict[the_removed]}(${the_removed})`;
                }
                if (itemTypeDict[$item_type.nodeValue.trim()]) {
                    $item_type.nodeValue = itemTypeDict[$item_type.nodeValue.trim()];
                }
                if ($item_effect && itemEffectDict[$item_effect.innerText.trim()]) {
                    $item_effect.innerText = itemEffectDict[$item_effect.innerText.trim()];
                }
            }
            // 下方的表格
            const $info_table_title = dom.querySelectorAll('div.title');
            $info_table_title.forEach((e) => {
                if (itemPageDict[e.innerText.trim()]) {
                    e.innerText = itemPageDict[e.innerText.trim()];
                }
            });
        }
    }

    /*
    ob
     */
    function initOB(dom = document, opt = {}, func = doNothing, dev = false, once = false) {
        //let count = -1;
        if (dev) {
            const mo = new MutationObserver((mutation) => {
                //count++;
                log(mutation)
                mo.disconnect();
                func();
                if (!once) {
                    mo.observe(dom, opt)
                }
            });
            func();
            mo.observe(dom, opt);
        } else {
            //count++;
            const mo = new MutationObserver(() => {
                mo.disconnect();
                func();
                if (!once) mo.observe(dom, opt)
            });
            func();
            mo.observe(dom, opt)
        }
    }

    /**
     * 添加全局style
     * @param {String} CSS
     * @returns undefined
     */
    function addStyle(CSS) {
        let wh_gStyle = document.querySelector('style#wh-trans-gStyle');
        if (wh_gStyle) {
            wh_gStyle.innerHTML += CSS;
        } else {
            wh_gStyle = document.createElement("style");
            wh_gStyle.id = 'wh-trans-gStyle';
            wh_gStyle.innerHTML = CSS;
            document.head.append(wh_gStyle);
        }
        log('新的CSS规则已注入', wh_gStyle);
    }

    /*
    添加左侧图标
     */
    function initIcon(settingsArr) {
        if (isIframe) return;
        if (!!document.querySelector('div#wh-trans-icon')) return;
        const zhongNode = document.createElement('div');
        zhongNode.id = 'wh-trans-icon';
        zhongNode.classList.add('cont-gray');
        zhongNode.innerHTML = `<div><button id="wh-trans-icon-btn"></button></div>
<div class="wh-container">
  <div class="wh-main">
    <div><b>芜湖助手</b></div>
    <div id="wh-gSettings"></div>
    <div><p>当前版本: ${version} <button id="wh-update-btn">更新</button></p></div>
    <div><p>最新版本: <span id="wh-latest-version"></span></p></div>
  </div>
</div>`;
        const settingNode = zhongNode.querySelector('#wh-gSettings');
        let hideNode = null;
        const btn = document.createElement('button');
        btn.innerHTML = '+ 展开设置';
        settingsArr.forEach(setting => {
            const newNode = document.createElement('div');
            // const tip = setting['tip'] ? `<div class="wh-tip">${setting['tip']}</div>` : '';
            (setting['tip']) && (newNode.setAttribute('title', setting['tip']));
            switch (setting.domType) {
                case 'checkbox': {
                    newNode.innerHTML += `<label><input type="checkbox" id="${setting.domId}" ${getWhSettingObj()[setting.dictName] ? "checked" : ''} />${setting.domText}</label>`;
                    settingNode.appendChild(newNode);
                    settingNode.querySelector(`#${setting.domId}`).onchange = (elem) => {
                        setWhSetting(setting.dictName, elem.target.checked);
                    };
                    break;
                }
                case 'button': {
                    newNode.innerHTML += `<button id="${setting.domId}">${setting.domText}</button>`;
                    settingNode.appendChild(newNode);
                    settingNode.querySelector(`#${setting.domId}`).onclick = setting.clickFunc;
                    break;
                }
                case 'select': {
                    let optHtml = '';
                    setting.domSelectOpt.forEach((optObj, i) => {
                        const selected = i === getWhSettingObj()[setting.dictName] ? 'selected' : '';
                        optHtml += `<option value="${optObj.domVal}" ${selected}>${optObj.domText}</option>`;
                    });
                    newNode.innerHTML += `<label>${setting.domText}<select id="${setting.domId}">${optHtml}</select></label>`;
                    settingNode.appendChild(newNode);
                    settingNode.querySelector(`#${setting.domId}`).onchange = (elem) => {
                        setWhSetting(setting.dictName, elem.target.selectedIndex);
                    };
                    break;
                }
                case 'plain': {
                    newNode.id = setting.domId;
                    newNode.innerHTML += setting['domHTML'];
                    settingNode.appendChild(newNode);
                    break;
                }
            }
            if (setting.isHide === true) {
                if (!hideNode) {
                    hideNode = document.createElement('div');
                    hideNode.classList.add('wh-hide');
                    btn.addEventListener('click', () => {
                        hideNode.classList.toggle('wh-hide');
                        btn.innerHTML = btn.innerHTML === '+ 展开设置' ? '- 收起' : '+ 展开设置';
                    });
                }
                settingNode.append(btn);
                settingNode.append(hideNode);
                hideNode.append(newNode);
            }
        });
        // 菜单点击按钮
        zhongNode.querySelector('#wh-trans-icon-btn').onclick = () => {
            zhongNode.classList.toggle('wh-icon-expanded');
            const click_func = e => {
                // e.stopImmediatePropagation();
                log(e.target);
                if (e.target === zhongNode.querySelector('#wh-trans-icon-btn')) return;
                if (!zhongNode.contains(e.target)) {
                    log('移除事件监听器');
                    document.body.removeEventListener('click', click_func);
                    zhongNode.classList.remove('wh-icon-expanded');
                }
            };
            if (zhongNode.classList.contains('wh-icon-expanded')) {
                log('添加事件监听器');
                document.body.addEventListener('click', click_func);
            } else {
                log('移除事件监听器');
                document.body.removeEventListener('click', click_func);
            }
        };
        // 更新按钮
        zhongNode.querySelector('#wh-update-btn').onclick = e => {
            e.target.blur();
            const innerHtml = `<h4>电脑</h4>
<p>通常电脑浏览器装有油猴等用户脚本扩展时可以使用链接安装（自动更新）：<a href="https://gitlab.com/JJins/wuhu-torn-helper/-/raw/dev/release.min.user.js" target="_blank">点此安装</a>。</p>
<p>这些扩展长这样：<img src="//jjins.github.io/tm.png" alt="tm.png" /><img src="//jjins.github.io/vm.png" alt="vm.png" /></p>
<p></p>
<h4>手机</h4>
<p>安卓 KIWI 等可以用油猴脚本的浏览器也可以点上面的链接安装👆</p>
<p>Torn PDA app 或 Alook 用户可打开<a href="//jjins.github.io/fyfuzhi/" target="_blank">这个网页</a>快捷复制粘贴。</p>
<h4>直接复制</h4>
<p>加载脚本然后直接复制粘贴到用户脚本处。</p>
<p><button>加载</button></p>
`;
            const node = popupMsg(innerHtml, '如何更新');
            // 直接复制的按钮
            node.querySelector('button').onclick = async (e) => {
                e.target.innerHTML = '加载中';
                const js_text = await COFetch(`https://jjins.github.io/fyfuzhi/release.min.user.js?${performance.now()}`);
                e.target.innerHTML = '点击复制到剪切板';
                e.target.onclick = () => {
                    const textarea_node = document.createElement('textarea');
                    textarea_node.innerHTML = js_text;
                    e.target.parentElement.append(textarea_node);
                    textarea_node.focus();
                    textarea_node.select();
                    document.execCommand('Copy');
                    textarea_node.remove();
                    e.target.innerHTML = '已复制';
                    e.target.onclick = null;
                    WHNotify('脚本已复制，请前往粘贴');
                };
            };
        };
        document.body.append(zhongNode);
        // 引入torn自带浮动提示
        log(initializeTooltip);
        (initializeTooltip) && (initializeTooltip('.wh-container', 'white-tooltip'));
        initMiniProf('#wh-trans-icon');
        return zhongNode;
    }

    // bool 返回当前是否dev状态
    function isDev() {
        try {
            return getWhSettingObj().isDev || false;
        } catch (e) {
            console.error(`[wh] dev状态错误 ${e}`);
            return false;
        }
    }

    // 弹出窗口
    function popupMsg(innerHTML, title = '芜湖助手') {
        if (hasPopup()) return null;
        const popup = document.createElement('div');
        popup.id = 'wh-popup';
        popup.innerHTML = `<div id="wh-popup-container">
<div id="wh-popup-title"><p>${title}</p></div>
<div id="wh-popup-cont">${innerHTML}</div>
</div>`;
        document.body.append(popup);
        const rt = popup.querySelector('#wh-popup-cont');
        rt.close = () => popup.remove();
        popup.addEventListener('click', e => {
            e.stopImmediatePropagation();
            if (e.target === popup) rt.close();
        });
        return rt;
    }

    // 弹出窗口是否存在
    function hasPopup() {
        return !!document.querySelector('#wh-popup');
    }

    /**
     * Waits for an element satisfying selector to exist, then resolves promise with the element.
     * Useful for resolving race conditions.
     *
     * @param selector
     * @param content
     * @returns {Promise}
     */
    function elementReady(selector, content = document) {
        return new Promise((resolve, reject) => {
            let el = content.querySelector(selector);
            if (el) {
                resolve(el);
                return
            }
            new MutationObserver((mutationRecords, observer) => {
                // Query for elements matching the specified selector
                Array.from(content.querySelectorAll(selector)).forEach((element) => {
                    resolve(element);
                    //Once we have resolved we don't need the observer anymore.
                    observer.disconnect();
                });
            })
                .observe(content.documentElement, {childList: true, subtree: true});
        });
    }

    // 得到一个两数之间的随机整数
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
    }

    // 用户脚本平台类型
    function getScriptEngine() {
        return UWCopy ? UserScriptEngine.GM : PDA_APIKey.slice(-1) !== '#'
            ? UserScriptEngine.PDA : UserScriptEngine.RAW;
    }

    // 用户设备类型 对应PC MOBILE TABLET
    function getDeviceType() {
        return window.innerWidth >= 1000
            ? Device.PC : window.innerWidth <= 600 ? Device.MOBILE : Device.TABLET;
    }

    // 跨域get请求 返回text
    function COFetch(url, method = 'get', body = null) {
        const engine = getScriptEngine();
        switch (engine) {
            case UserScriptEngine.RAW: {
                return new Promise((_, reject) => {
                    console.error(`[wh] 跨域请求错误：${UserScriptEngine.RAW}环境下无法进行跨域请求`);
                    reject(`错误：${UserScriptEngine.RAW}环境下无法进行跨域请求`);
                });
            }
            case UserScriptEngine.PDA: {
                const {PDA_httpGet, PDA_httpPost} = window;
                return method === 'get' ?
                    // get
                    new Promise((resolve, reject) => {
                        if (typeof PDA_httpGet !== 'function') {
                            console.error('[wh] 跨域请求错误：PDA版本不支持');
                            reject('错误：PDA版本不支持');
                        }
                        PDA_httpGet(url)
                            .catch(e => {
                                console.error('[wh] 网络错误', e);
                                reject(`[wh] 网络错误 ${e}`);
                            })
                            .then(res => resolve(res.responseText));
                    }) :
                    // post
                    new Promise((resolve, reject) => {
                        if (typeof PDA_httpPost !== 'function') {
                            console.error('[wh] 跨域请求错误：PDA版本不支持');
                            reject('错误：PDA版本不支持');
                        }
                        PDA_httpPost(url, {'content-type': 'application/json'}, body)
                            .catch(e => {
                                console.error('[wh] 网络错误', e);
                                reject(`[wh] 网络错误 ${e}`);
                            })
                            .then(res => resolve(res.responseText));
                    });
            }
            case UserScriptEngine.GM: {
                return new Promise((resolve, reject) => {
                    if (typeof GM_xmlhttpRequest !== 'function') {
                        console.error('[wh] 跨域请求错误：用户脚本扩展API错误');
                        reject('错误：用户脚本扩展API错误');
                    }
                    GM_xmlhttpRequest({
                        method: method,
                        url: url,
                        data: method === 'get' ? null : body,
                        headers: method === 'get' ? null : {'content-type': 'application/json'},
                        onload: res => resolve(res.response),
                        onerror: res => reject(`连接错误 ${JSON.stringify(res)}`),
                        ontimeout: res => reject(`连接超时 ${JSON.stringify(res)}`),
                    });
                });
            }
        }
    }

    // 简单 object 转字符串
    function Obj2Str(obj) {
        return JSON.stringify(obj);
    }

    // console.log改写
    function log(...o) {
        if (isDev()) console.log('[WH]', ...o)
    }

    function WHNotify(msg = '', {
        timeout = 3,
        callback = doNothing,
        sysNotify = false,
        sysNotifyTag = '芜湖助手',
        sysNotifyClick = () => window.focus(),
    } = {}) {
        if (!isWindowActive() || isIframe) return null;
        const date = new Date();
        // 通知的唯一id
        const uid = `${date.getHours()}${date.getSeconds()}${date.getMilliseconds()}${getRandomInt(1000, 9999)}`;
        // 通知容器id
        const node_id = 'wh-notify';
        // 通知的容器
        let notify_contain = document.querySelector(`#${node_id}`);
        // 添加通知到容器
        const add_notify = () => {
            // 每条通知
            const new_node = document.createElement('div');
            new_node.id = `wh-notify-${uid}`;
            new_node.classList.add('wh-notify-item');
            new_node.innerHTML = `<div class="wh-notify-bar"></div>
<div class="wh-notify-cont">
    <div class="wh-notify-close"></div>
    <div class="wh-notify-msg"><p>${msg}</p></div>
</div>`;
            notify_contain.append(new_node);
            notify_contain.msgInnerText = new_node.querySelector('.wh-notify-msg').innerText;
            // 进度条node
            const progressBar = new_node.querySelector('.wh-notify-bar');
            // 是否hover
            let mouse_enter = false;
            new_node.addEventListener('mouseenter', () => mouse_enter = true, true);
            new_node.addEventListener('mouseleave', () => mouse_enter = false);
            // 通知进度条
            let progressCount = 101;
            // 计时器
            let intervalID = window.setInterval(() => {
                if (mouse_enter) {
                    progressCount = 101;
                    progressBar.style.width = '100%';
                    return;
                }
                progressCount--;
                progressBar.style.width = `${progressCount}%`;
                if (progressCount === 0) removeNode();
            }, timeout * 1000 / 100);
            // 删除通知
            const removeNode = () => {
                clearInterval(intervalID);
                new_node.remove();
                callback();
            };
            new_node.del = removeNode;
            new_node.querySelector('.wh-notify-close').addEventListener('click', removeNode);
            return new_node;
        };
        // 不存在容器 创建
        if (!notify_contain) {
            notify_contain = document.createElement('div');
            notify_contain.id = node_id;
            addStyle(`
#${node_id} {
    display: inline-block;
    position: fixed;
    top: 0;
    left: calc(50% - 180px);
    width: 360px;
    z-index: 200000;
    color:#333;
}
#${node_id} a{
color:red;
text-decoration:none;
}
#${node_id} .wh-notify-item {
    /*height: 50px;*/
    background: rgb(239 249 255 / 90%);
    border-radius: 2px;
    margin: 0.5em 0 0 0;
    box-shadow: 0 0 5px 0px #959595;
}
#${node_id} .wh-notify-item:hover {
    background: rgb(239 249 255 / 98%);
}
#${node_id} .wh-notify-item .wh-notify-bar {
    height:2px;
    background:#2196f3;
}
#${node_id} .wh-notify-item .wh-notify-close {
    float:right;
    padding:0;
width:16px;height:16px;
background:url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%201024%201024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M923%20571H130.7c-27.6%200-50-22.4-50-50s22.4-50%2050-50H923c27.6%200%2050%2022.4%2050%2050s-22.4%2050-50%2050z%22%20fill%3D%22%232196f3%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E') no-repeat center;
background-size:100%;
margin: 6px 6px 0 0;
cursor: pointer;
}
#${node_id} .wh-notify-item .wh-notify-msg {
    padding:12px;
}
`);
            document.body.append(notify_contain);
        }
        const notify_obj = add_notify();
        // 浏览器通知
        if (window.Notification && Notification.permission === 'granted' && sysNotify) {
            const date_local_string = `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]\r`;
            const sys_notify = new Notification('芜湖助手', {
                body: date_local_string + notify_contain.msgInnerText,
                requireInteraction: true,
                renotify: true,
                tag: sysNotifyTag,
            });
            sys_notify.onclick = sysNotifyClick;
        }
        return notify_obj;
    }

    // gs loader
    function loadGS(use) {
        if (use === UserScriptEngine.PDA) {
            let ifr = document.querySelector('#wh-gs-loader-ifr');
            if (ifr) {
                WHNotify('飞贼小助手已经加载了');
                return;
            }
            const container = document.createElement('div');
            container.id = 'wh-gs-loader';
            ifr = document.createElement('iframe');
            ifr.id = 'wh-gs-loader-ifr';
            ifr.src = 'https://www.torn.com/crimes.php';
            container.append(ifr);
            document.body.append(container);
            addStyle(`
#wh-gs-loader {
position:fixed;
top:0;
left:0;
z-index:100001;
}
`);
            let notify = WHNotify('加载中');
            ifr.onload = () => {
                notify.del();
                const _window = ifr.contentWindow;
                const _docu = _window.document;
                _docu.head.innerHTML = '';
                _docu.body.innerHTML = '';
                notify = WHNotify('加载依赖');
                COFetch('https://cdn.staticfile.org/vue/2.2.2/vue.min.js')
                    .then(vuejs => {
                        notify.del();
                        _window.eval(vuejs)
                        _window.GM_getValue = (k, v = undefined) => {
                            const objV = JSON.parse(_window.localStorage.getItem('wh-gs-storage') || '{}')[k];
                            return objV || v;
                        };
                        _window.GM_setValue = (k, v) => {
                            const obj = JSON.parse(_window.localStorage.getItem('wh-gs-storage') || '{}');
                            obj[k] = v;
                            _window.localStorage.setItem('wh-gs-storage', JSON.stringify(obj));
                        };
                        _window.GM_xmlhttpRequest = function (opt) {
                            // 暂不适配pda post
                            if (opt.method.toLowerCase() === 'post') return;
                            COFetch(opt.url).then(res => {
                                const obj = {};
                                obj.responseText = res;
                                opt.onload(obj);
                            });
                        };
                        notify = WHNotify('加载飞贼小助手');
                        COFetch(`https://gitee.com/ameto_kasao/tornjs/raw/master/GoldenSnitch.js?${performance.now()}`)
                            .then(res => {
                                _window.eval(res.replace('http://222.160.142.50:8154/mugger', `https://api.ljs-lyt.com/mugger`));
                                _window.GM_setValue("gsp_x", 10);
                                _window.GM_setValue("gsp_y", 10);
                                notify.del();
                                notify = WHNotify('飞贼小助手已加载', {timeout: 1});
                                const gsp = _docu.querySelector('#gsp');
                                const init = () => {
                                    ifr.style.height = `${gsp.offsetHeight + 10}px`;
                                    ifr.style.width = `${gsp.offsetWidth + 20}px`;
                                    gsp.style.top = '10px';
                                    gsp.style.left = '10px';
                                };
                                new MutationObserver(init).observe(gsp, {childList: true, subtree: true});
                                init();
                                if (isDev()) _window.GM_setValue("gsp_showContent", true)
                            });
                    });
            };
            return;
        }
        if (use === UserScriptEngine.GM) {
            if (typeof window.Vue !== 'function') {
                let notify = WHNotify('正在加载依赖');
                COFetch('https://cdn.staticfile.org/vue/2.2.2/vue.min.js')
                    .catch(err => WHNotify(Obj2Str(err)))
                    .then(VueJS => {
                        window.eval(VueJS);
                        notify.del();
                        notify = WHNotify('已载入依赖');
                        window.GM_getValue = (k, v = undefined) => {
                            const objV = JSON.parse(window.localStorage.getItem('wh-gs-storage') || '{}')[k];
                            return objV || v;
                        };
                        window.GM_setValue = (k, v) => {
                            const obj = JSON.parse(window.localStorage.getItem('wh-gs-storage') || '{}');
                            obj[k] = v;
                            window.localStorage.setItem('wh-gs-storage', JSON.stringify(obj));
                        };
                        window.GM_xmlhttpRequest = GM_xmlhttpRequest;
                        COFetch(`https://gitee.com/ameto_kasao/tornjs/raw/master/GoldenSnitch.js?${performance.now()}`)
                            .then(GSJS => {
                                window.eval(GSJS);
                                if (isDev()) window.GM_setValue("gsp_showContent", true);
                                notify.del();
                                notify = WHNotify('已载入飞贼助手');
                            })
                            .catch(err => WHNotify(`PDA API错误。${Obj2Str(err)}`));
                    });
            } else {
                WHNotify('飞贼助手已经加载了');
            }
            return;
        }
        WHNotify('暂不支持');
    }

    /**
     * 播放音频
     * @param {string} url 播放的音频URL
     * @returns {undefined}
     */
    function audioPlay(url = 'https://www.torn.com/js/chat/sounds/Warble_1.mp3') {
        const audio = new Audio(url);
        audio.addEventListener("canplaythrough", () => {
            audio.play()
                .catch(err => log(err))
                .then();
        });
    }

    // 格式化金额数字
    function toThousands(num) {
        num = (num || 0).toString();
        let result = '';
        while (num.length > 3) {
            result = ',' + num.slice(-3) + result;
            num = num.slice(0, num.length - 3);
        }
        if (num) {
            result = num + result;
        }
        return result;
    }

    // 返回玩家信息的对象 user
    function getPlayerInfo() {
        const rs = {playername: '未知', userID: -1};
        // const headerData = JSON.parse(sessionStorage['headerData']);
        // if (!headerData['user']['state']['isLoggedIn']) return rs;
        // // string
        // const uid = headerData['user']['data']['userID'];
        // rs.playername = JSON.parse(sessionStorage['sidebarData' + uid])['user']['name'];
        // // int
        // rs.userID = uid | 0;
        const node = document.querySelector('script[uid]');
        if (node) {
            rs.playername = node.getAttribute('name');
            rs.userID = node.getAttribute('uid') | 0;
        }
        return rs;
    }

    // 插件的配置 getter
    function getWhSettingObj() {
        return JSON.parse(localStorage.getItem('wh_trans_settings')) || {}
    }

    // 插件的配置 setter
    function setWhSetting(key, value, notify = true) {
        const obj = getWhSettingObj()
        obj[key] = value
        localStorage.setItem('wh_trans_settings', JSON.stringify(obj))

        // 通知
        if (notify) WHNotify('已保存设置')
    }

    // 循环获取json对象
    function autoFetchJSON(dest, time = 30) {
        let obj;
        const res = COFetch(dest);
        setInterval(async () => {
            if (!isWindowActive()) return;
            const res = await COFetch(dest);
            obj = JSON.parse(res);
        }, time * 1000);
        return {
            get: async function () {
                if (!obj) {
                    const str = await res
                    return obj = JSON.parse(str);
                }
                return obj;
            }
        };
    }

    // 价格监视handle
    function priceWatcherHandle() {
        setInterval(() => {
            const price_conf = getWhSettingObj()['priceWatcher'];
            const apikey = isPDA ? PDA_APIKey : localStorage.getItem('APIKey');
            if (!apikey) {
                log('无法获取APIKey')
                return;
            }
            if (price_conf['pt'] !== -1) priceWatcherPt(apikey, price_conf['pt']).then();
            if (price_conf['xan'] !== -1) priceWatcherXan(apikey, price_conf['xan']).then();
        }, 10000)
        return {status: true};
    }

    // pt价格监视
    async function priceWatcherPt(apikey, lower_price) {
        if (!priceWatcher['watch-pt-lower-id']) priceWatcher['watch-pt-lower-id'] = [];
        const res = await fetch('https://api.torn.com/market/?selections=pointsmarket&key=' + apikey);
        const obj = await res.json();
        if (obj['pointsmarket']) {
            // 过滤低于价格的物品出售id
            const lower_arr = [];
            let low = Infinity;
            Object.keys(obj['pointsmarket']).forEach(key => {
                if (obj['pointsmarket'][key]['cost'] <= lower_price) {
                    lower_arr.push(key);
                    if (obj['pointsmarket'][key]['cost'] < low) low = obj['pointsmarket'][key]['cost'];
                }
            });
            if (lower_arr.length === 0) return;
            // 将id与之前存在的比较，不相同时发送通知
            if (JSON.stringify(priceWatcher['watch-pt-lower-id']) !== JSON.stringify(lower_arr)) {
                priceWatcher['watch-pt-lower-id'] = lower_arr;
                WHNotify(`PT新低价：$${toThousands(low)}( < $${toThousands(lower_price)}) - <a href="/pmarket.php" target="_blank">点击转跳</a>`, {
                    timeout: 6,
                    sysNotify: true,
                    sysNotifyClick: () => window.open('https://www.torn.com/pmarket.php'),
                });
            }
        } else {
            // 查询出错了
            log('pt查询出错了')
        }
    }

    // xan价格监视
    async function priceWatcherXan(apikey, lower_price) {
        // 初始化记录上一个条目的id，避免重复发送通知
        if (!priceWatcher['watch-xan-lower-id']) priceWatcher['watch-xan-lower-id'] = '';
        const res = await fetch('https://api.torn.com/market/206?selections=bazaar&key=' + apikey);
        const obj = await res.json();
        if (obj['bazaar']) {
            const lowest_item = obj['bazaar'][0]
            if (lowest_item['cost'] <= lower_price) {
                if (priceWatcher['watch-xan-lower-id'] !== lowest_item['ID']) {
                    priceWatcher['watch-xan-lower-id'] = lowest_item['ID'];
                    WHNotify(`XAN新低价：$${toThousands(lowest_item['cost'])}( < $${toThousands(lower_price)}) - <a href="/imarket.php#/p=shop&step=shop&type=&searchname=Xanax" target="_blank">点击转跳</a>`, {
                        timeout: 6,
                        sysNotify: true,
                        sysNotifyClick: () => window.open('https://www.torn.com/imarket.php#/p=shop&step=shop&type=&searchname=Xanax')
                    });
                }
            }
        } else {
            // 查询出错了
            log('xan查询出错了')
        }
    }

    // 空函数
    function doNothing() {
    }

    // 返回UUID
    function uuidv4() {
        if (crypto.randomUUID) return crypto.randomUUID();
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    // 返回一个可用查询当前窗口是否激活的函数
    function getWindowActiveState() {
        if (isIframe) return false;
        const uuid = uuidv4();
        let isFocus = false;
        localStorage.setItem('whuuid', uuid);
        document.addEventListener('visibilitychange', () =>
            (document.visibilityState !== 'hidden') && (localStorage.setItem('whuuid', uuid))
        );
        addEventListener('focus', () => isFocus = true)
        addEventListener('blur', () => isFocus = false)
        return function () {
            // 当前窗口获得了焦点 优先级最高
            if (isFocus) return true;
            // 可视性
            if (!document.hidden) return true;
            // 全部在后台，使用唯一id判断
            return uuid === localStorage.getItem('whuuid')
        };
    }

    // 翻译
    function transToZhCN(href, onoff) {
        if (!onoff) return;

        // 时分秒转换
        String.prototype.replaceHMS = function replaceHMS() {
            return this.replace('and', '')
                .replace('days', '天')
                .replace('days', '天')
                .replace('hours', '小时')
                .replace('hour', '小时')
                .replace('minutes', '分钟')
                .replace('minute', '分钟')
                .replace('seconds', '秒钟')
                .replace('second', '秒钟');
        };

        // 数词转换 a an some
        String.prototype.numWordTrans = function numWordTrans() {
            return this.replace(/\ban\b/, '1 个')
                .replace(/\ba\b/, '1 个')
                .replace(/\bsome\b/, '1 个')
                .replace(/([0-9])x\b/, '$1 个');
        };

        // 边栏
        let sidebarTimeOut = 60;
        const sidebarInterval = setInterval(() => {
            // 60秒后取消定时
            if ($('div[class^="sidebar"]').length === 0) {
                sidebarTimeOut--;
                if (sidebarTimeOut < 0) {
                    clearInterval(sidebarInterval);
                }
                return;
            }
            // 边栏块标题
            $('h2[class^="header"]').each((i, e) => {
                if (!sidebarDict[e.firstChild.nodeValue]) return;
                e.firstChild.nodeValue = sidebarDict[e.firstChild.nodeValue];
            });
            // 边栏人物名字
            $('span[class^="menu-name"]').each((i, e) => {
                e.firstChild.nodeValue = '名字:';
            });
            // 钱 等级 pt 天赋点
            $('p[class^="point-block"]').each((i, e) => {
                if (sidebarDict[e.firstChild.firstChild.nodeValue])
                    e.firstChild.firstChild.nodeValue = sidebarDict[e.firstChild.firstChild.nodeValue];
            });
            // 4条 状态条
            $('p[class^="bar-name"]').each((i, e) => {
                if (sidebarDict[e.firstChild.nodeValue])
                    e.firstChild.nodeValue = sidebarDict[e.firstChild.nodeValue];
            });
            // 边栏菜单
            $('span[class^="linkName"]').each((i, e) => {
                if (sidebarDict[e.firstChild.nodeValue])
                    e.firstChild.nodeValue = sidebarDict[e.firstChild.nodeValue];
            });
            // [use]按钮
            if (document.querySelector('#pointsMerits'))
                $('#pointsMerits')[0].firstChild.nodeValue = '[使用]';
            if (document.querySelector('#pointsPoints'))
                $('#pointsPoints')[0].firstChild.nodeValue = '[使用]';
            if (document.querySelector('#pointsLevel'))
                $('#pointsLevel')[0].firstChild.nodeValue = '[升级]';

            // 手机 区域菜单
            $('div[class*="areas-mobile"] span:nth-child(2)').contents().each((i, e) => {
                //log(e);
                if (sidebarDict[e.nodeValue])
                    e.nodeValue = sidebarDict[e.nodeValue];
            });

            clearInterval(sidebarInterval);
        }, 1000);

        // header
        if (document.querySelector('div#header-root')) {
            const headerOB = new MutationObserver(_ => {
                headerOB.disconnect();
                headerTrans();
                headerOB.observe($('div#header-root')[0], {childList: true, subtree: true, attributes: true});
            });

            const headerTrans = function headerTrans() {
                // 搜索内容下拉框中的文字 已选中
                if (headerDict[$('div.find button.toggler.down').text()])
                    $('div.find button.toggler.down').text(headerDict[$('div.find button.toggler.down').text()]);
                // pc端 搜索下拉框点击后的搜索类型文字
                $('div.find li.item').each((i, e) => {
                    if (headerDict[$(e).text()])
                        $(e).text(headerDict[$(e).text()]);
                });
                // 手机端 搜索下拉框点击后的搜索类型文字
                $('li[class^="search-type-"] label').each((i, e) => {
                    if (headerDict[$(e).text()])
                        $(e).text(headerDict[$(e).text()]);
                });
                // 搜索框placeholder
                if (headerDict[$('input[class^="searchInput"]').attr('placeholder')])
                    $('input[class^="searchInput"]').attr('placeholder',
                        headerDict[$('input[class^="searchInput"]').attr('placeholder')]);
                // 高级搜索框 search by
                if (headerDict[document.querySelector('div#header-root legend.title').innerText])
                    $('div#header-root legend.title').text(headerDict[$('div#header-root legend.title').text()]);
                // 高级搜索框的条件 左 键
                $('ul.advancedSearchFormBody label.label').each((i, e) => {
                    if (headerDict[$(e).text()])
                        $(e).text(headerDict[$(e).text()]);
                });
                // 高级搜索框的已选中
                $('ul.advancedSearchFormBody div.select-wrapper button.toggler.down').each((i, e) => {
                    // log($(e).text())
                    if (headerDict[$(e).text().trim()])
                        $(e).text(headerDict[$(e).text().trim()]);
                    else if (propertyDict[$(e).text().trim()])
                        $(e).text(propertyDict[$(e).text().trim()]);
                });
                // 高级搜索的下拉选项
                $('ul.advancedSearchFormBody li.item').each((i, e) => {
                    if (headerDict[$(e).text()])
                        $(e).text(headerDict[$(e).text()]);
                    else if (propertyDict[$(e).text()])
                        $(e).text(propertyDict[$(e).text()]);
                });
                // 高级搜索的"Not"
                $('ul.advancedSearchFormBody label.search-condition-not').each((i, e) => {
                    if (headerDict[$(e).text()])
                        $(e).text(headerDict[$(e).text()]);
                });
                // 高级搜索的"to"
                $('ul.advancedSearchFormBody label[for*="To"]').each((i, e) => {
                    if (headerDict[$(e).text()])
                        $(e).text(headerDict[$(e).text()]);
                });
                // 高级搜索的reset search按钮
                $('form.form-search-extend div.bottom button').each((i, e) => {
                    if (headerDict[$(e).text()])
                        $(e).text(headerDict[$(e).text()]);
                });
                // log按钮“view log”
                const $view_log = $('div.recentHistory a[class^="link"] span[class^="text"]')
                if (headerDict[$view_log.text().trim()])
                    $view_log
                        .text(headerDict[$view_log.text().trim()]);
                // 点击头像打开的菜单
                $('ul.settings-menu span').each((i, e) => {
                    if (headerDict[$(e).text()] && e.childNodes.length === 1)
                        $(e).text(headerDict[$(e).text()]);
                    else if (e.childNodes.length === 3)
                        if (headerDict[e.firstChild.nodeValue])
                            e.firstChild.nodeValue = headerDict[e.firstChild.nodeValue];
                });
            };
            headerTrans();
            headerOB.observe($('div#header-root')[0], {childList: true, subtree: true, attributes: true});
        }

        // chatbox
        if (document.querySelector('div#chatRoot')) {
            const chatOB = new MutationObserver(_ => {
                chatOB.disconnect();
                chatTrans();
                chatOB.observe($('div#chatRoot').get(0), {childList: true, subtree: true, attributes: true});
            });
            const chatTrans = function chatTrans() {
                // 聊天框的标题
                $('div#chatRoot div[class^="chat-box-title"] span[class^="name"]').each((i, e) => {
                    if (chatDict[$(e).text().trim()])
                        $(e).text(chatDict[$(e).text().trim()]);
                });
                // 聊天设置的左边label
                $('div[class^="chat-settings-opts"] div[class*="label"]').each((i, e) => {
                    if ($(e).next().children('div.rc-slider').length > 0) {
                        // 高度和宽度有响应式的%
                        if (chatDict[$(e).text().split(' ')[0]]) {
                            $(e).text($(e).text().replace($(e).text().split(' ')[0], chatDict[$(e).text().split(' ')[0]]));
                        }
                        return;
                    }
                    if (chatDict[$(e).text().trim()])
                        $(e).text(chatDict[$(e).text().trim()]);
                });
                // 选项下拉栏
                $('div[class^="dropdown-root"]').find('*').contents().each((i, e) => {
                    if (e.nodeType !== 3) return;
                    if (chatDict[e.nodeValue])
                        e.nodeValue = chatDict[e.nodeValue];
                });
                // 设置的两个选项
                $('label[class^="privacy-label"]').each((i, e) => {
                    if (chatDict[$(e).text().trim()])
                        $(e).text(chatDict[$(e).text().trim()]);
                });
                // people中的5个分类 faction friend...
                $('ul[class^="type-list"] li a').each((i, e) => {
                    if (chatDict[$(e).text().trim()])
                        $(e).text(chatDict[$(e).text().trim()]);
                });
                // people中的列表添加框placeholder
                $('div.ac-wrapper input.ac-search').each((i, e) => {
                    if (chatDict[$(e).attr('placeholder')])
                        $(e).attr('placeholder', chatDict[$(e).attr('placeholder')]);
                });
                //
                if (eventsDict[$('div#chatRoot div[class^="overview"] > div > div:nth-child(2)').text().trim()]) {
                    $('div#chatRoot div[class^="overview"] > div > div:nth-child(2)')
                        .text(
                            eventsDict[document.querySelector('div#chatRoot div[class^="overview"] > div > div:nth-child(2)').innerText.trim()]
                        );
                }
            };
            chatTrans();
            chatOB.observe($('div#chatRoot').get(0), {childList: true, subtree: true, attributes: true});
        }

        // 搜索玩家的4个分类按钮
        const playerSearchBoxTrans = function playerSearchBoxTrans() {
            const opt = {
                childList: true,
                subtree: true,
            };
            const psbtOB = new MutationObserver(mutation => {
                const $people_cat = $('ul.ac-options li a');
                psbtOB.disconnect();
                mutation.forEach((e) => {
                    if (e.target.className === 'ac-wrapper') {
                        $people_cat.each((i, e) => {
                            if (chatDict[$(e).text().trim()])
                                $(e).text(chatDict[$(e).text().trim()]);
                        });
                    }
                })
                psbtOB.observe(document.body, opt);
            });
            psbtOB.observe(document.body, opt);
        }
        playerSearchBoxTrans();

        // 飞行页面
        if (href.includes('index.php') &&
            !!document.querySelector('div.travelling h4')) {
            const travelOB = new MutationObserver(travelOBInit);

            function travelOBInit() {
                travelOB.disconnect();
                travelTrans();
                travelOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true});
            }

            function travelTrans() {
                titleTrans();
                contentTitleLinksTrans();

                // 气泡
                if (tipsDict[document.querySelector('div.inner-popup').innerText.trim()])
                    $('div.inner-popup').text(tipsDict[$('div.inner-popup').text().trim()]);
                // Remaining Flight Time -
                $('div.destination-title span').contents().each((i, e) => {
                    if (e.childNodes.length !== 0) return;
                    if (!e.nodeValue) return;
                    if (travelingDict[e.nodeValue.trim()])
                        e.nodeValue = travelingDict[e.nodeValue.trim()];
                });
                // torntools扩展插件落地时间
                if (document.querySelector('div.tt-landing-time span.description').innerText.split(' ')[0] === 'Landing') {
                    const landingTime = $('div.tt-landing-time span.description').text().slice(11, 19);
                    $('div.tt-landing-time span.description').text('于 ' + landingTime + ' 降落');
                }
            }

            travelTrans();
            travelOB.observe(document.querySelector('div.content-wrapper'), {childList: true, subtree: true});
        }

        // 主页
        if (href.contains(/index\.php/) && document.querySelector('h4#skip-to-content').innerText.contains(/Home/)) {
            titleTrans();
            contentTitleLinksTrans();
            // 主页黑框标题文字翻译
            $('h5.box-title').each((i, e) => {
                if (!homeDict[e.firstChild.nodeValue]) return;
                // 翻译最近5条通知
                if (e.firstChild.nodeValue === 'Latest Events') {
                    //homeEvents = $(e).parent().next().find('span');
                    eventsTrans($(e).parent().next().find('span'));
                }
                // 翻译最近5个攻击
                else if (e.firstChild.nodeValue === 'Latest Attacks') {
                    $(e).parent().next().find('span').each(function () {
                        let nodes = $(this)[0].childNodes;
                        nodes.forEach((v, i) => {
                            if (v.nodeValue !== null) {
                                let waitToTsf = v.nodeValue.toString().indexOf(" ");
                                let words = v.nodeValue.replace("\n", "").toString().split(" ");
                                words.forEach((word, j) => {
                                    if (attackDict.hasOwnProperty(word)) {
                                        if (word === "Someone") {
                                            $(this)[0].childNodes[i].nodeValue = $(this)[0].childNodes[i].nodeValue.replace(" ", "");
                                        }
                                        let change = $(this)[0].childNodes[i].nodeValue.replace(word, attackDict[word]);
                                        $(this)[0].childNodes[i].nodeValue = change;

                                    }
                                })
                            }
                        }, this);
                    });
                }
                //e.firstChild.nodeValue = homeDict[e.firstChild.nodeValue];
                // 隐藏原dom元素避免与torntools发生冲突
                if ($(e).css('display') !== 'none')
                    $(e).css('display', 'none').after(`<h5 class="box-title">` + homeDict[e.firstChild.nodeValue] + `</h5>`);
            });
            // 各表格左边的键
            $('span.divider span').each((i, e) => {
                if (homeDict[$(e).text()])
                    $(e).text(homeDict[$(e).text()]);
            });
            return;
        }

        // city
        if (href.includes('city.php')) {
            const cityOB = new MutationObserver(cityOBInit);

            function cityOBInit() {
                cityOB.disconnect();
                cityTrans();
                cityOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true});
            }

            function cityTrans() {
                titleTrans();
                contentTitleLinksTrans();

                // Map or Quick Links
                $('a.ui-tabs-anchor span').each((i, e) => {
                    if (cityDict[$(e).text()])
                        $(e).text(cityDict[$(e).text()]);
                });

                // 标志建筑 标题
                if (cityDict[$('div.title-black').text()])
                    $('div.title-black').text(cityDict[$('div.title-black').text()]);

                // 标志建筑 6个分类
                $('ul.map-symbols span').each((i, e) => {
                    if (cityDict[$(e).text()])
                        $(e).text(cityDict[$(e).text()]);
                });

                // 地图显示模式
                // 不完全显示 文字
                $('span.inactive-mode').html(cityDict['inactive-mode1'] + `<br>` + cityDict['inactive-mode2']);
                // 完全显示 文字
                $('span.active-mode').text(cityDict['active-mode']);
                // 开关
                $('div.on-label').text('已开启');
                $('div.off-label').text('已关闭');

                // 快速链接中的分类标题
                $('li.title').each((i, e) => {
                    if (cityDict[$(e).text()])
                        $(e).text(cityDict[$(e).text()]);
                });

                // 快速链接中的区域
                $('li a[class^="font-num-"] span').each((i, e) => {
                    // log($(e).prev().attr('class')==='cql-gym')
                    if (cityDict[$(e).text()]) {
                        $(e).text(cityDict[$(e).text()]);
                    } else if ($(e).prev().attr('class') === 'cql-your-property') {
                        if (propertyDict[$(e).text().trim().slice(5)]) {
                            $(e).text('你的' + propertyDict[$(e).text().trim().slice(5)]);
                        }
                    } else if ($(e).prev().attr('class') === 'cql-gym') {
                        if (gymList[$(e).text().trim()]) {
                            $(e).text(gymList[$(e).text()]);
                        } else if (gymList[$(e).text().trim().split(' ').slice(0, 2).join(' ')]) {
                            $(e).text(gymList[$(e).text().trim().split(' ').slice(0, 2).join(' ')]);
                        }
                    }
                });

                // 快速链接中的分类选择
                $('div.sort-by label.marker-css').each((i, e) => {
                    if (cityDict[$(e).text()])
                        $(e).text(cityDict[$(e).text()]);
                });

                // 快速链接中的sort by
                $('span#wai-sort-by').each((i, e) => {
                    if (cityDict[$(e).text()])
                        $(e).text(cityDict[$(e).text()]);
                });
            }

            cityTrans();
            cityOB.observe(document.querySelector('div.content-wrapper'), {childList: true, subtree: true});
            return;
        }

        // gym健身房页面
        if (href.includes('gym.php')) {
            const gymOB = new MutationObserver(gymOBInit);

            function gymOBInit() {
                gymOB.disconnect();
                gymTrans();
                gymOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true, attributes: true});
            }

            function gymTrans() {
                titleTrans();
                contentTitleLinksTrans();
                const gymName = $('div[class^="notificationText"] b').text();

                // 顶部提示信息
                $('div[class^="notificationText"] p').contents().each((i, e) => {
                    if (e.nodeName === 'B' && gymList[$(e).text().trim()]) {
                        $(e).text(gymList[$(e).text().trim()]);
                        return;
                    }
                    if (e.childNodes.length === 0 && gymDict[e.nodeValue.trim()])
                        e.nodeValue = gymDict[e.nodeValue.trim()];
                });
                // 4属性标题
                $('h3[class^="title"]').each((i, e) => {
                    if (gymDict[$(e).text().trim()])
                        $(e).text(gymDict[$(e).text().trim()]);
                });
                // 4属性的介绍 与冰蛙冲突
                $('div[class^="description"] p:nth-child(1)').each((i, e) => {
                    if (gymDict[$(e).text().trim()])
                        $(e).text(gymDict[$(e).text().trim()]);
                });
                // 每次锻炼的花销
                $('div[class^="description"] p:nth-child(2)').each((i, e) => {
                    if (e.childNodes.length === 1) {
                        if (gymDict[$(e).text().trim()])
                            $(e).text(gymDict[$(e).text().trim()]);
                    } else if (e.childNodes.length === 2) {
                        if (gymDict[e.lastChild.nodeValue.trim()]) {
                            e.lastChild.nodeValue = gymDict[e.lastChild.nodeValue.trim()];
                        }
                    }
                });
                // 锻炼页面所有按钮
                $('button[class^="button"]').each((i, e) => {
                    if (gymDict[$(e).text().trim()])
                        $(e).text(gymDict[$(e).text().trim()]);
                });
                // cancel按钮
                $('button[class^="cancel"]').each((i, e) => {
                    if (gymDict[$(e).text().trim()])
                        $(e).text(gymDict[$(e).text().trim()]);
                });
                // 锻炼的提示信息
                $('div[class^="messageWrapper"] p').each((i, e) => {
                    /**
                     * todo
                     * <p>You dug deep and completed 15 minutes of incline sprints</p>
                     * <p role="alert" class="gained___3T_GZ">You gained 1,854.05 speed</p>
                     */
                    if (gymDict[$(e).text()])
                        $(e).text(gymDict[$(e).text()]);
                });
                // 健身房信息 标题
                $('div[class^="gymTitle"] h3').each((i, e) => {
                    if (gymDict[$(e).text()])
                        $(e).text(gymDict[$(e).text()]);
                    else if (gymList[$(e).text().trim()])
                        $(e).text(gymList[$(e).text().trim()]);
                });
                // 健身房信息 属性名
                $('ul[class^="gymInfo"] b').each((i, e) => {
                    if (gymDict[$(e).text().trim()])
                        $(e).text(gymDict[$(e).text().trim()]);
                });

                // 健身房状态信息
                // $('div[class^="gymStats"] b').each((i, e) => {
                //     log(e)
                //     if (gymDict[$(e).text().trim()])
                //         $(e).text(gymDict[$(e).text().trim()]);
                // });
                //
                // // 健身房状态值
                // $('div[class^="gymStats"] span[class^=value]').each((i, e) => {
                //     if ($(e).text().indexOf("per train") > 0)
                //         $(e).text($(e).text().split(" ")[0] + gymDict["per train"]);
                //     else if (gymDict[$(e).text().trim()])
                //         $(e).text(gymDict[$(e).text().trim()]);
                // });

                // 健身房信息 属性值
                $('ul[class^="gymInfo"] span[class^="value"]').each((i, e) => {
                    if (gymDict[$(e).text().trim()])
                        $(e).text(gymDict[$(e).text().trim()]);
                });
                // 健身房信息 具体锻炼项目
                $('span[class^="exerciseName"]').each((i, e) => {
                    if (gymDict[$(e).text().trim()])
                        $(e).text(gymDict[$(e).text().trim()]);
                });
                // 购买提示信息
                $('div[class^="confirmMessage"] p[role="alert"]').each((i, e) => {
                    if (gymDict[$(e).text().trim()])
                        $(e).text(gymDict[$(e).text().trim()]);
                });
            }

            gymTrans();
            gymOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true, attributes: true});
            return;
        }

        // 物品页面
        if (href.contains(/item\.php/)) {
            if (href.includes('item.php?temp=')) return;
            // 标题和右边的链接
            initOB(document.querySelector('.content-title'), {childList: true},
                () => {
                    titleTrans();
                    contentTitleLinksTrans();
                });
            // 套装预览中间的文字
            const $loadouts_root = document.getElementById('loadoutsRoot');
            if ($loadouts_root) {
                initOB($loadouts_root, {subtree: true, attributes: true}, () => {
                    const el = $loadouts_root.querySelector('div[class^="type___"]');
                    if (el && itemPageDict[el.innerText.trim()]) {
                        el.innerText = itemPageDict[el.innerText.trim()];
                    }
                });
            }
            // 手机选项按钮 物品名 物品详情
            const options = {
                attributes: true,
                subtree: true,
                attributeFilter: ["aria-hidden",]
            };
            const translated = {cat: '', count: -1};
            const translatedOnce = {item_opt: -1, opt_icon_count: -1};
            initOB(document.getElementById('category-wrap'), options, () => {
                // 手机操作选项
                const $item_opt = document.querySelectorAll(`ul.itemsList span.opt-name`);
                if (translatedOnce.item_opt !== $item_opt.length - 1) {
                    let count = -1;
                    $item_opt.forEach((e, i) => {
                        if (itemPageDict[e.firstChild.nodeValue.trim()]) {
                            e.firstChild.nodeValue = itemPageDict[e.firstChild.nodeValue.trim()];
                        }
                        count = i;
                    });
                    translatedOnce.item_opt = count !== -1 ? count : -1;
                }
                // 物品名
                const $active_tab = document.querySelector('ul.itemsList[aria-expanded="true"]');
                if (!$active_tab) return;
                const $active_item_list = $active_tab.querySelectorAll('span.name');
                const itemCat = $active_tab.id;
                if ($active_item_list.length - 1 !== translated.count || itemCat !== translated.cat) {
                    let count = -1;
                    // 物品名
                    $active_item_list.forEach((e, i) => {
                        if (!e.classList.contains('wh-translated')) {
                            if (itemNameDict[e.innerText.trim()]) {
                                e.classList.add('wh-translated');
                                const trans_dom = document.createElement('span');
                                trans_dom.classList.add('wh-translate');
                                trans_dom.setAttribute('style', 'margin: 0 0 0 1em');
                                trans_dom.append(itemNameDict[e.innerText.trim()]);
                                e.after(trans_dom);
                                // .after(`<span class="wh-translate" style="margin: 0 0 0 1em">${itemNameDict[$(e).text().trim()]}</span>`);
                            }
                        }
                        count = i;
                    });

                    if (count !== -1) {
                        translated.cat = itemCat;
                        translated.count = count;
                    }
                }
                // 物品详情
                const $show_item_info = $active_tab.querySelector('li.show-item-info');
                showItemInfoTrans($show_item_info);
                // 物品右操作按钮
                const $opt_icon_tooltip = $('ul.actions-wrap span.icon-h');
                if (translatedOnce.opt_icon_count !== $opt_icon_tooltip.length - 1) {
                    let count = -1
                    $opt_icon_tooltip.each((i, e) => {
                        if (itemPageDict[e.attributes.title.nodeValue]) {
                            e.attributes.title.nodeValue = itemPageDict[e.attributes.title.nodeValue];
                        }
                        count = i;
                    });
                    if (count !== -1) {
                        translatedOnce.opt_icon_count = count;
                    }
                }
            });
            // 黑框
            const $title_black = document.querySelector('div.title-black');
            if ($title_black) {
                const $your_items = $title_black.querySelector('span.m-hide');
                if (itemPageDict[$your_items.innerText.trim()]) {
                    $your_items.innerText = itemPageDict[$your_items.innerText.trim()];
                }
                // 黑框分类标题
                const $items_type_name = $title_black.querySelector('span.items-name');
                initOB($items_type_name, {childList: true}, () => {
                    if (itemPageDict[$items_type_name.innerText.trim()]) {
                        $items_type_name.innerText = itemPageDict[$items_type_name.innerText.trim()];
                    }
                });
            }
            // 分类浮动文字
            const $data_type = document.querySelectorAll('li#categoriesItem a');
            $data_type.forEach((e) => {
                if (itemPageDict[e.getAttribute('title')]) {
                    e.setAttribute('title', itemPageDict[e.attributes.title.nodeValue]);
                }
            });
            return;
        }

        // npc商店
        if (href.contains(/(shops|bigalgunshop)\.php/)) {
            // 标题和右边的链接
            const $cont_title = document.querySelector('.content-title');
            initOB($cont_title, {childList: true, subtree: true}, () => {
                titleTrans();
                contentTitleLinksTrans();
            });
            const $wrapper = document.querySelector('.content-wrapper');
            // [购买部分]
            const $buy_items_wrapper = $wrapper.querySelector('.buy-items-wrap');
            if ($buy_items_wrapper) {
                // 黑框标题
                const $buy_black_title = $buy_items_wrapper.querySelector('.title-black');
                if ($buy_black_title && npcShopDict[$buy_black_title.firstChild.nodeValue.trim()]) {
                    $buy_black_title.firstChild.nodeValue = npcShopDict[$buy_black_title.firstChild.nodeValue.trim()];
                }
                // 各个物品
                const $items = $buy_items_wrapper.querySelectorAll('ul.items-list > li.torn-divider');
                $items.forEach(e => {
                    // 物品名
                    const $item_name = e.querySelector('span.desc span.name.bold');
                    if ($item_name && itemNameDict[$item_name.innerText.trim()]) {
                        $item_name.innerText = `${itemNameDict[$item_name.innerText.trim()]}(${$item_name.innerText.trim()})`;
                    }
                    // 类型和存货
                    const $item_stock = e.querySelector('span.desc span.stock');
                    if ($item_stock) $item_stock.childNodes.forEach(e => {
                        if (e.nodeType === 1) {
                            if (npcShopDict[e.innerText.trim()]) e.innerText = npcShopDict[e.innerText.trim()];
                        } else {
                            if (npcShopDict[e.nodeValue.trim()]) e.nodeValue = npcShopDict[e.nodeValue.trim()];
                        }
                    });
                    // buy按钮
                    const $buy_btn = e.querySelector('button.wai-support');
                    if ($buy_btn && npcShopDict[$buy_btn.childNodes[0].nodeValue.trim()]) {
                        $buy_btn.childNodes[0].nodeValue = npcShopDict[$buy_btn.childNodes[0].nodeValue.trim()];
                    }
                    // 买前确认
                    const $confirm = e.querySelector('span.confirm');
                    const $confirm_msg = $confirm.querySelector('span');
                    if ($confirm_msg && npcShopDict[$confirm_msg.innerText.trim()]) {
                        $confirm_msg.innerText = npcShopDict[$confirm_msg.innerText.trim()];
                    }
                    const $amount_item_name = $confirm.querySelector('span.count').nextSibling;
                    if ($amount_item_name && !$amount_item_name.nodeValue.contains(CC_set)) {
                        const item_name = $amount_item_name.nodeValue.trim().split(' ').slice(1, -1).join(' ');
                        const item_name_trans = itemNameDict[item_name] || item_name;
                        $amount_item_name.nodeValue = `个[${item_name_trans}]，总计$`;
                    }
                    const $confirm_a = $confirm.querySelectorAll('span.confirm-act a');
                    $confirm_a.forEach(e => {
                        if (npcShopDict[e.innerText.trim()]) e.innerText = npcShopDict[e.innerText.trim()];
                    });
                });
                // 展开的物品详情
                initOB($wrapper, {childList: true, subtree: true}, () => {
                    const $item_desc = $wrapper.querySelector('.show-item-info') || $wrapper.querySelector('.view-item-info');
                    showItemInfoTrans($item_desc);
                });
            }
            // [卖出部分]
            const $sell_items_wrapper = $wrapper.querySelector('.sell-items-wrap');
            if ($sell_items_wrapper) {
                // 黑框标题
                const $title = $sell_items_wrapper.querySelectorAll('ul.title li');
                $title.forEach(el => {
                    el.childNodes.forEach(e => {
                        if (e.nodeType === 1) {
                            if (npcShopDict[e.innerText.trim()]) {
                                e.innerText = npcShopDict[e.innerText.trim()];
                                return;
                            }
                            const spl = e.innerText.trim().split(' ');
                            if (spl.length > 3) {
                                const shop_name = spl[2] === 'the' ? spl.slice(3).join(' ') : spl.slice(2).join(' ');
                                const shop_name_trans = npcShopDict[shop_name] || titleDict[shop_name] || cityDict[shop_name] || null;
                                e.innerText = `物品给${shop_name_trans || shop_name}`;
                            }
                        } else {
                            if (npcShopDict[e.nodeValue.trim()]) e.nodeValue = npcShopDict[e.nodeValue.trim()];
                        }
                    });
                });
                // 物品名
                const $items_name = $sell_items_wrapper.querySelectorAll('span.name');
                $items_name.forEach(el => {
                    if (itemNameDict[el.innerText.trim()]) el.innerText +=
                        ` ${itemNameDict[el.innerText.trim()]}`;
                });
                // 按钮
                const $btn = $sell_items_wrapper.querySelectorAll('button');
                $btn.forEach(e => {
                    if (npcShopDict[e.innerText.trim()]) e.innerText = npcShopDict[e.innerText.trim()];
                });
                // select btn
                const $select_btn = $sell_items_wrapper.querySelector('li.select button.wai-btn');
                if ($select_btn) {
                    initOB($select_btn, {childList: true}, () => {
                        if ($select_btn && npcShopDict[$select_btn.innerText.trim()]) {
                            $select_btn.innerText = npcShopDict[$select_btn.innerText.trim()];
                        }
                    });
                }
                // 取消按钮
                const $cancel = $sell_items_wrapper.querySelector('span.cancel a');
                if ($cancel && npcShopDict[$cancel.innerText.trim()]) {
                    $cancel.innerText = npcShopDict[$cancel.innerText.trim()];
                }
                // 卖出确认文字
                const $sell_confirm = $sell_items_wrapper.querySelector('div.sell-confirm');
                if ($sell_confirm) {
                    const $msg = $sell_confirm.childNodes[0];
                    if (npcShopDict[$msg.nodeValue.trim()]) $msg.nodeValue = npcShopDict[$msg.nodeValue.trim()];
                    const $total_value = $sell_confirm.querySelector('span.profit').childNodes[0];
                    if (npcShopDict[$total_value.nodeValue.trim()]) $total_value.nodeValue = npcShopDict[$total_value.nodeValue.trim()];
                }
            }
            // [出售PT部分]
            const $sell_pt_wrapper = $wrapper.querySelector('.sell-points-wrap');
            if ($sell_pt_wrapper) {
                // 黑框
                const $title_black = $sell_pt_wrapper.querySelector('.title-black');
                if (npcShopDict[$title_black.innerText.trim()]) {
                    $title_black.innerText = npcShopDict[$title_black.innerText.trim()];
                }
            }
            return;
        }

        // 股票
        if (href.contains(/page\.php\?sid=stocks/)) {
            const stockOB = new MutationObserver(() => {
                stockOB.disconnect();
                titleTrans();
                contentTitleLinksTrans();
                stockTrans();
                stockOB.observe($('.content-wrapper').get(0), {
                    characterData: true,
                    attributes: true,
                    subtree: true,
                    childList: true
                });
            });
            const stockTrans = function stockTrans() {
                // 表头
                $('ul.title-black').find('*').contents().each((i, e) => {
                    if (e.nodeType === 3 && stockDict[e.nodeValue.trim()]) {
                        e.nodeValue = stockDict[e.nodeValue.trim()];
                    }
                });
                // 名称
                $('div[class^="nameContainer"]').each((i, e) => {
                    if (e.childNodes[0].nodeValue && stockDict[e.childNodes[0].nodeValue.trim()]) {
                        e.childNodes[0].nodeValue = stockDict[e.childNodes[0].nodeValue.trim()];
                    }
                });
                // 右侧bb名
                $('div[class^="dividendInfo"] p').each((i, e) => {
                    const spl = $(e).text().trim().split(' ');
                    if (stockDict[$(e).text().trim()]) {
                        $(e).text(stockDict[$(e).text().trim()]);
                    } else if (/[0-9]x$/.test(spl[0])) {
                        const itemName = spl.slice(1).join(' ');
                        const num = spl[0].slice(0, -1);
                        $(e).text(`${num}个${itemNameDict[itemName] ? itemNameDict[itemName] : itemName}`);
                    }
                });
                // 股价详情
                $('#panel-priceTab ul[role="tablist"] label span:last-child').each((i, e) => {
                    if (stockDict[$(e).text()]) {
                        $(e).text(stockDict[$(e).text()]);
                    }
                });
                $('ul[class^="priceInfoList___"] li').contents().each((i, e) => {
                    if (e.nodeType === 3) {
                        if (stockDict[e.nodeValue.trim()]) {
                            e.nodeValue = stockDict[e.nodeValue.trim()];
                        }
                    }
                });
                // 点开购买后
                $('div#panel-ownedTab div[class^="manageBlock"] *').contents().each((i, e) => {
                    if (e.nodeType === 1) {
                        if (stockDict[$(e).text().trim()]) {
                            $(e).text(stockDict[$(e).text().trim()]);
                        }
                    } else if (e.nodeType === 3) {
                        if (stockDict[e.nodeValue.trim()]) e.nodeValue = stockDict[e.nodeValue.trim()];
                        else if (/\$[0-9]+ after the 0\.1% fee of \$[0-9]+$/.test(e.nodeValue.trim())) {
                            e.nodeValue = e.nodeValue.trim()
                                .replace('after the', stockDict['after the'])
                                .replace('fee of', stockDict['fee of']);
                        }
                    }
                });
                // 点开购买后的历史栏
                $('div#panel-ownedTab div[class^="transactionsContainer"] li').each((i, e) => {
                    e = e.childElementCount === 0 ? e : e.children[0];
                    if (stockDict[$(e).text().trim()]) {
                        $(e).text(stockDict[$(e).text().trim()]);
                    }
                });
                // 历史购买show more
                const $show_more = document.querySelector('li[class^="showMore___"] button');
                if ($show_more && $show_more.innerText.trim().contains(/^Show [0-9]+ more$/)) {
                    const number = $show_more.innerText.trim().split(' ')[1];
                    $show_more.innerText = `显示另外${number}条`;
                }
                // 点开bb后
                $('div#panel-dividendTab div[class^="message"] *').contents().each((i, e) => {
                    if (e.nodeType !== 3) return;
                    if (!e.nodeValue.trim()) return;
                    if (stockDict[e.nodeValue.trim()]) {
                        e.nodeValue = stockDict[e.nodeValue.trim()];
                    }
                    // 第n个increment 1st 2nd 3rd 4th
                    else if (/[0-9][snrt][tdh]$/.test(e.nodeValue.trim())) {
                        e.nodeValue = `第${e.nodeValue.trim().slice(0, -2)}个`;
                    }
                    // 物品
                    else if (/[0-9]x$/.test(e.nodeValue.trim().split(' ')[0])) {
                        const spl = e.nodeValue.trim().split(' ');
                        const itemName = spl.slice(1).join(' ');
                        e.nodeValue =
                            ` ${spl[0].replace('x', '个')
                            } ${itemNameDict[itemName] ? itemNameDict[itemName] : itemName
                            }`;
                    } else {
                        if (/[\u4e00-\u9fa5]/.test(e.nodeValue)) return;
                        if (/\b\$?[0-9,]+$/.test(e.nodeValue)) return;
                        log(`未找到翻译：[${e.nodeValue.trim()}]`);
                    }
                });
            };
            stockTrans();
            stockOB.observe($('.content-wrapper').get(0), {
                characterData: true,
                attributes: true,
                subtree: true,
                childList: true
            });
            return;
        }

        // 教育页面
        if (href.indexOf('education.php') >= 0) {
            const eduOB = new MutationObserver(eduOBInit);

            function eduOBInit() {
                eduOB.disconnect();
                eduTrans();
                eduOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true});
            }

            function eduTrans() {
                titleTrans();
                contentTitleLinksTrans();

                // 大科目、学院标题
                $('div.content-wrapper div.title').each((i, e) => {
                    if (eduDict[$(e).text().trim()])
                        e.firstChild.nodeValue = eduDict[$(e).text().trim()];
                });
                // 教育主页提示内容 和 学院详情 小课程提示信息
                $('div.content-wrapper div[class^="msg"]').find('*').contents().each((i, e) => {
                    if (e.nodeValue === null) return;
                    if (eduDict[e.nodeValue.trim()]) {
                        e.nodeValue = eduDict[e.nodeValue.trim()];
                    } else if (e.nodeValue.indexOf('second') >= 0 ||
                        e.nodeValue.indexOf('minute') >= 0 ||
                        e.nodeValue.indexOf('hour') >= 0 ||
                        e.nodeValue.indexOf('day') >= 0) {
                        e.nodeValue = e.nodeValue
                            .replace('days', '天')
                            .replace('day', '天')
                            .replace('hours', '时')
                            .replace('hour', '时')
                            .replace('minutes', '分')
                            .replace('minute', '分')
                            .replace('and', '和')
                            .replace('seconds', '秒')
                            .replace('second', '秒');
                    }
                });
                // 学院详情标题
                $('div.content-wrapper div.title-black').each((i, e) => {
                    if (e.childNodes.length === 3)
                        if (eduDict[e.lastChild.nodeValue.trim()])
                            e.lastChild.nodeValue = ' ' + eduDict[e.lastChild.nodeValue.trim()];
                    if (eduDict[$(e).text().trim()])
                        $(e).text(eduDict[$(e).text().trim()]);
                });
                // 学院详情 小课程标题
                $('div.content-wrapper span.module-name').each((i, e) => {
                    if (eduDict[$(e).text().trim()])
                        $(e).text(eduDict[$(e).text().trim()]);
                });
                // 学院详情 课程的描述
                $('div.content-wrapper p.desc').each((i, e) => {
                    if (eduDict[$(e).text().trim()])
                        $(e).text(eduDict[$(e).text().trim()]);
                });
                // 课程详情 7 标题
                $('div.module-desc p.title').each((i, e) => {
                    if (eduDict[$(e).text().trim()])
                        $(e).text(eduDict[$(e).text().trim()]);
                });
                // 课程介绍中的所有li元素
                $('div.module-desc ul.info').find('*').contents().each((i, e) => {
                    if (e.nodeValue === null) return;
                    if (eduDict[e.nodeValue.trim()])
                        e.nodeValue = eduDict[e.nodeValue.trim()];
                    else if (e.nodeValue.indexOf('Length') >= 0) {
                        e.nodeValue = e.nodeValue.replace('Length', eduDict['Length'])
                            .replace('d ', '日')
                            .replace('h ', '时')
                            .replace('m ', '分');
                    } else if (e.nodeValue.indexOf('Cost') >= 0) {
                        e.nodeValue = e.nodeValue.replace('Cost', eduDict['Cost']);
                    } else if (e.nodeValue.indexOf('manual labor') >= 0) {
                        e.nodeValue = e.nodeValue.replace('manual labor', eduDict['manual labor'])
                            .replace('Gain', eduDict['Gain'])
                            .replace('upon completion', eduDict['upon completion']);
                    } else if (e.nodeValue.indexOf('endurance') >= 0) {
                        e.nodeValue = e.nodeValue.replace('endurance', eduDict['endurance'])
                            .replace('Gain', '获得')
                            .replace('upon completion', eduDict['upon completion']);
                    } else if (e.nodeValue.indexOf('intelligence') >= 0) {
                        e.nodeValue = e.nodeValue.replace('intelligence', eduDict['intelligence'])
                            .replace('Gain', '获得')
                            .replace('upon completion', eduDict['upon completion']);
                    }
                });
            }

            eduTrans();
            eduOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true});
            return;
        }

        // profile 玩家资料页面
        if (href.contains(/profiles\.php\?XID=\d+/)) {
            const $wrapper = document.querySelector('.content-wrapper');
            const profileOB = new MutationObserver(() => {
                profileOB.disconnect();
                titleTrans();
                contentTitleLinksTrans();
                profileTrans();
                profileOB.observe($wrapper, {
                    characterData: true,
                    attributes: true,
                    subtree: true,
                    childList: true
                });
            });
            const profileTrans = function profileTrans() {
                const playerName = document.title.trim().contains(/('s |s' )/)
                    ? document.title.trim().split(/('s |s' )/)[0]
                    : null;
                if (!playerName) {
                    console.error('翻译助手错误：获取用户名失败。');
                    try {
                        profileOB.disconnect()
                    } catch {
                    }
                    return;
                }

                // 黑框标题
                $('.content-wrapper .title-black').each((i, e) => {
                    if (i === 1) {
                        if (profileDict[e.firstChild.nodeValue.trim().replace(playerName, '{$}')]) {
                            e.firstChild.nodeValue = (
                                profileDict[$(e).text().trim().replace(playerName, '{$}')]
                                    .replace('{$}', playerName)
                            );
                        }
                        return;
                    }
                    if (profileDict[$(e).text().trim()]) {
                        $(e).text(profileDict[$(e).text().trim()]);
                    }
                });
                // level rank age
                $('.profile-information-wrapper .box-info .box-name').each((i, e) => {
                    if (profileDict[e.innerText.trim()]) e.innerText = profileDict[e.innerText.trim()];
                });
                // todo player title
                // todo player rank title
                // 行动框的描述
                const action_desc = $('#profile-container-description.profile-container-description');
                if (profileDict[action_desc.text().trim()]) {
                    action_desc.html(`<span class="wh-translated">${profileDict[action_desc.text().trim()]}</span>`);
                } else if (profileDict[action_desc.text().trim().replace(playerName, '{$}')]) {
                    action_desc.html(
                        `<span class="wh-translated">${profileDict[action_desc.text().trim().replace(playerName, '{$}')]
                            .replace('{$}', playerName)}</span>`
                    );
                } else if (action_desc.text().contains(/is on your (friend|enemy) list/)) {
                    const spl = action_desc.text().trim().split(' ');
                    const mark = spl.length === 6
                        ? null
                        : spl.slice(7).join(' ');
                    switch (spl[4]) {
                        case 'friend':
                            if (profileDict['{$} is on your friend list']) {
                                action_desc.html(
                                    `<span class="wh-translated">${profileDict['{$} is on your friend list']
                                        .replace('{$}', playerName)
                                    }${mark ? ' : ' + mark : ''
                                    }</span>`
                                );
                            }
                            break;
                        case 'enemy':
                            if (profileDict['{$} is on your enemy list']) {
                                action_desc.html(
                                    `<span class="wh-translated">${profileDict['{$} is on your enemy list']
                                        .replace('{$}', playerName)
                                    }${mark ? ' : ' + mark : ''
                                    }</span>`
                                );
                            }
                            break;
                    }
                } else {
                    if ($('.wh-translated').length <= 0) {
                        log(`未找到翻译: “${action_desc.text().trim()}”`);
                    }
                }
                // 添加敌人或朋友的界面
                $('.add-user .reason-wrapper').find('*').contents().each((i, e) => {
                    if (e.nodeType === 3) {
                        if (profileDict[e.nodeValue.trim()]) {
                            e.nodeValue = profileDict[e.nodeValue.trim()];
                        } else if (/\b[1-4]?[0-9]\b/.test(e.nodeValue.trim().slice(0, 2))) {
                            const left = e.nodeValue.trim().slice(0, 2);
                            if (profileDict['{$} characters left']) {
                                e.nodeValue = profileDict['{$} characters left'].replace('{$}', left);
                            }
                        }
                    }
                });
                // 状态
                playerStatusTrans($('.profile-status .profile-container span'));
                // 表格
                $('ul.info-table li div').each((i, e) => {
                    const $e = $(e);
                    // 左
                    if ($e.attr('class').contains(/user-information-section/)) {
                        const elem = e.children[0];
                        const $elem = $(elem);
                        if (profileDict[$elem.text().trim()]) $elem.text(profileDict[$elem.text().trim()]);
                    }
                    // 右 值
                    else {
                        if (profileDict[$e.text().trim()]) {
                            $e.children().text(profileDict[$e.text().trim()]);
                            return;
                        }
                        switch (i) {
                            case 5: // 帮派
                            case 7: { // 公司
                                if ($e.text().contains(CC_set)) return;
                                const $span = e.children[0].children[0];
                                const pos = $span.firstChild.nodeValue.trim().split(' ').slice(0, -1).join(' ');
                                $span.firstChild.nodeValue = '';
                                $($span).append(` 的 ${pos}`);
                                return;
                            }
                            case 11: {
                                // 住宅
                                $e.find('span *').contents().each((i, el) => {
                                    if (el.nodeType === 3) {
                                        if (profileDict[el.nodeValue.trim()]) {
                                            el.nodeValue = profileDict[el.nodeValue.trim()]
                                        } else if (propertyDict[el.nodeValue.trim()]) {
                                            el.nodeValue = propertyDict[el.nodeValue.trim()]
                                        }
                                    }
                                });
                                return;
                            }
                            case 13: {
                                // 结婚状态
                                if ($e.text().contains(CC_set)) return;
                                const days = $e.text().contains(/ [0-9]+ /)
                                    ? $e.text().trim().split(' ')[4]
                                    : null;
                                if (days) {
                                    e.children[0].children[0].childNodes[0].nodeValue = '与 ';
                                    e.children[0].children[0].childNodes[2].nodeValue = ` 结婚${days}天`;
                                } else {
                                    $e.find('span *').contents().each((i, el) => {
                                        if (el.nodeType === 3) {
                                            if (profileDict[el.nodeValue.trim()]) {
                                                el.nodeValue = profileDict[el.nodeValue.trim()]
                                            }
                                        }
                                    });
                                }
                                return;
                            }
                            case 23: {
                                // 39 minutes ago
                                if ($e.text().contains(/ago/)) {
                                    $e.children().text($e.text()
                                        .replace('ago', '前')
                                        .replace('and', '')
                                        .replace('seconds', '秒')
                                        .replace('second', '秒')
                                        .replace('minutes', '分')
                                        .replace('minute', '分')
                                        .replace('hours', '时')
                                        .replace('hour', '时')
                                        .replace('days', '日')
                                        .replace('day', '日')
                                        .replaceAll(' ', '')
                                    );
                                }
                                return;
                            }
                        }
                        /**
                         1 'Woohoo [2687093]'
                         3 'Civilian'
                         5 'Knight of Silver Hand'
                         7 'Director of -- FaFaFa --'
                         9 '1567 / 1567'
                         11 'Private Island (With Spouse)'
                         13 'Married to Sabrina_Devil for 42 days'
                         15 '153'
                         17 '4'
                         19 '4\n                         好人\n                         坏比指数: 1\n                        '
                         21 '2 (0 karma)'
                         23 '52 minutes ago'
                         */
                    }
                });
                // doesnt wish to share
                const $nShare = $('.personal-info p');
                $nShare.contents().each((i, e) => {
                    if (e.nodeType === 3) {
                        if (profileDict[e.nodeValue.trim()]) e.nodeValue = profileDict[e.nodeValue.trim()];
                    }
                });
                // 活动状态
                const $cmpSt = $('.profile-container.competition-wrap span')
                $cmpSt.text(profileDict[$cmpSt.text().trim()] || $cmpSt.text());

                sendCashTrans('.content-wrapper');
            };
            profileTrans();
            profileOB.observe($wrapper, {
                characterData: true,
                attributes: true,
                subtree: true,
                childList: true
            });
            return;
        }

        // 报纸
        if (href.contains(/(newspaper|joblist|freebies|newspaper_class|personals|bounties|comics)\.php/)) {
            const newspaperOB = new MutationObserver(() => {
                newspaperOB.disconnect();
                newspaperTrans();
                newspaperOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true});
            });

            function newspaperTrans() {
                titleTrans();
                contentTitleLinksTrans();
                if ($('a.newspaper-link').length === 0) return;
                // 导航菜单
                $('a.newspaper-link').contents().each((i, e) => {
                    if (newspaperDict[e.nodeValue])
                        e.nodeValue = newspaperDict[e.nodeValue];
                });
                // 公众号广告
                $('div.price.left').contents()[2].nodeValue = '文章翻译请关注中文公众号Torncity';
                // 日期翻译
                const $date_label = document.querySelector('span.date-label');
                const date_reg = /^[FMSTW][adehinorstuy]+, [ADFJMNOS][abceglnoprtuvy]+ [1-3]?[0-9], 20[0-9][0-9]$/;
                if ($date_label && $date_label.innerText.trim().contains(date_reg)) {
                    const date_format = $date_label.innerText.trim().replaceAll(',', '');
                    const date_spl = date_format.split(' ');
                    const date = {w: date_spl[0], m: date_spl[1], d: date_spl[2], y: date_spl[3]};
                    const month_trans = {
                        'Jan': 1,
                        'Feb': 2,
                        'Mar': 3,
                        'Apr': 4,
                        'May': 5,
                        'Jun': 6,
                        'Jul': 7,
                        'Aug': 8,
                        'Sep': 9,
                        'Oct': 10,
                        'Nov': 11,
                        'Dec': 12
                    };
                    $date_label.innerText = `${date.y}年${month_trans[date.m] || date.m}月${date.d}日`;
                }
                // 菜单下的信息  工作 壁纸 广告 悬赏
                $('div.help-message').find('*').contents().each((i, e) => {
                    if (!e.nodeValue || e.nodeValue.trim() === '') return;
                    if (newspaperDict[e.nodeValue.trim()])
                        e.nodeValue = newspaperDict[e.nodeValue.trim()];
                    else if (newspaperDict[e.nodeValue.trim().slice(0, 50)])
                        e.nodeValue = newspaperDict[e.nodeValue.trim().slice(0, 50)];
                });
                // 右边栏
                $('div[class^="sideCont"] [class^="title"]').contents().each((i, e) => {
                    if (newspaperDict[e.nodeValue])
                        e.nodeValue = newspaperDict[e.nodeValue];
                });
                // 彩票信息
                $('span[class^="winner"]').each((i, e) => {
                });
                // 底部链接
                // Why not visit our sponsor?
                if (newspaperDict[$('div.link-left').text().trim()])
                    $('div.link-left').text(newspaperDict[$('div.link-left').text().trim()]);
                // View all | Advertise here
                $('div.link-right a').contents().each((i, e) => {
                    if (newspaperDict[e.nodeValue.trim()])
                        e.nodeValue = newspaperDict[e.nodeValue.trim()];
                })
                $('.bounties-list-title li').each((i, e) => {
                    if (newspaperDict[$(e).text().trim()]) {
                        $(e).text(newspaperDict[$(e).text().trim()]);
                    }
                });
                // 交友
                if (window.location.href.contains(/personals/)) {
                    $('div.personals-wrap span.msg').find('*').contents().each((i, e) => {
                        if (!e.nodeValue || e.nodeValue.trim() === '') return;
                        if (newspaperDict[e.nodeValue.trim()])
                            e.nodeValue = newspaperDict[e.nodeValue.trim()];
                    });
                }
                // 漫画
                if (window.location.href.contains(/freebies/)) {
                    if (newspaperDict[$('div.bonus-wrap a').text().trim()])
                        $('div.bonus-wrap a').text(newspaperDict[$('div.bonus-wrap a').text().trim()]);
                }
                // 悬赏
                if (window.location.href.contains(/bounties/)) {
                    // 列表前的总数
                    const $total = $('.bounties-total');
                    if ($total.text().contains(/A total of [0-9]+ listings were found/)) {
                        const num = $total.text().trim().split(' ')[3];
                        if (newspaperDict['A total of {$} listings were found.']) {
                            $total.text(newspaperDict['A total of {$} listings were found.']
                                .replace('{$}', num));
                        }
                    }
                    // 列表
                    $('.user-info-wrap div *').contents().each((i, e) => {
                        if (e.nodeType === 3) {
                            if (newspaperDict[e.nodeValue.trim()]) {
                                e.nodeValue = newspaperDict[e.nodeValue.trim()];
                            }
                        }
                    });
                    // claim
                    $('ul.bounties-list div.claim button').each((i, e) => {
                        if (newspaperDict[$(e).text().trim()]) {
                            $(e).text(newspaperDict[$(e).text().trim()]);
                        }
                    });
                    $('ul.bounties-list div.claim a').each((i, e) => {
                        if (newspaperDict[$(e).text().trim()]) {
                            $(e).text(newspaperDict[$(e).text().trim()]);
                        }
                    });
                    // 3选项框
                    $('.add-bounties-wrap .name').contents().each((i, e) => {
                        if (e.nodeType === 3) {
                            if (newspaperDict[e.nodeValue.trim()]) {
                                e.nodeValue = newspaperDict[e.nodeValue.trim()];
                            }
                        } else if (e.nodeType === 1) {
                            if (newspaperDict[$(e).text().trim()]) {
                                $(e).text(newspaperDict[$(e).text().trim()]);
                            }
                        }
                    });
                    // 匿名选项
                    const $anony = $('.choice-container label');
                    if (newspaperDict[$anony.text().trim()]) {
                        $anony.text(newspaperDict[$anony.text().trim()]);
                    }
                    // 发钱按钮
                    const $$symbol = $('span.input-money-symbol');
                    if (sendCashDict[$$symbol.attr('title')]) {
                        $$symbol.attr('title', sendCashDict[$$symbol.attr('title')])
                    }
                    // 10/10滑动
                    const $slider_title = $('.slider-title');
                    if ($slider_title.text().contains(/Quantity:/)) {
                        $slider_title.text($slider_title.text().replace('Quantity', '数量'));
                    }
                    // 价钱信息
                    $('.confirm-bounties *').contents().each((i, e) => {
                        if (e.nodeType === 3) {
                            if (newspaperDict[e.nodeValue.trim()]) {
                                e.nodeValue = newspaperDict[e.nodeValue.trim()];
                            }
                        }
                    });
                    // 下单前确认对话
                    $('.confirm-buttons *').contents().each((i, e) => {
                        if (e.nodeType === 3) {
                            if (newspaperDict[e.nodeValue.trim()]) {
                                e.nodeValue = newspaperDict[e.nodeValue.trim()];
                                return;
                            }
                            switch (i) {
                                case 7:
                                case 10: {
                                    if (e.nodeValue.contains(/[0-9] bounties/)) {
                                        e.nodeValue = e.nodeValue.replace('bounties', '次')
                                    } else if (e.nodeValue.contains(/with the reason: .+\?/)) {
                                        e.nodeValue = e.nodeValue.replace('with the reason', '吗，悬赏原因')
                                    }
                                    break;
                                }
                            }
                        }
                    });
                    // place
                    const $place = $('.place-buttons input');
                    if (newspaperDict[$place.attr('value')]) {
                        $place.attr('value', newspaperDict[$place.attr('value')]);
                    }
                    // cancel
                    const $cancel = $('.place-buttons a.cancel');
                    if (newspaperDict[$cancel.text().trim()]) {
                        $cancel.text(newspaperDict[$cancel.text().trim()]);
                    }
                }
            }

            newspaperTrans();
            newspaperOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true});
            return;
        }

        // npc买房 estateagents
        if (href.includes('estateagents.php')) {
            titleTrans();
            contentTitleLinksTrans();
            $('div.estate-info div.title').each((i, e) => {
                if (propertyDict[e.firstChild.nodeValue])
                    e.firstChild.nodeValue = propertyDict[e.firstChild.nodeValue];
            });

            return;
        }

        // properties房屋页面
        if (href.includes('properties.php')) {
            const isRent = window.location.href.indexOf('rent') >= 0;
            // const isRentOrSell = isRent || window.location.href.indexOf('sell') >= 0;
            // const isOption = window.location.href.indexOf('p=options') >= 0;
            // const isExtension = window.location.href.indexOf('step=viewOfferExtension') >= 0;
            const propertyOB = new MutationObserver(() => {
                propertyOB.disconnect();
                titleTrans();
                contentTitleLinksTrans();
                propertyTrans();
                propertyOB.observe($('div.content-wrapper').get(0), {childList: true, subtree: true});
            });
            const propertyTrans = function propertyTrans() {
                // 从玩家处租或买
                if (isRent || window.location.href.indexOf('sell') >= 0) {
                    // 黑框标题
                    $('div.title-black span').each((i, e) => {
                        e.firstChild.nodeValue = '您想查看哪些房产？';
                    });
                    // 房屋汉化
                    $('ul.info-cont label.marker-css').contents().each((i, e) => {
                        if (propertyDict[e.nodeValue])
                            e.nodeValue = propertyDict[e.nodeValue];
                    });
                    //搜索按钮
                    $('div.btn-search button').text('搜索');
                    $('div.search-text a').text('搜索');
                    // 表头信息
                    $('div.users-list-title div').each((i, e) => {
                        if (propertyDict[$(e).text()])
                            $(e).text(propertyDict[$(e).text()]);
                    });
                    // 确认购买提示
                    $('div[class="confirm-text"] span.question').each((i, e) => {
                        const propName = e.firstElementChild.innerText.trim().split(' ').slice(8).join(' ');

                        const hasAnother = $(e).text().indexOf('another') > 0;
                        if (hasAnother) {
                            e.firstElementChild.firstChild.nodeValue = '你确定要';
                            e.firstElementChild.firstChild.nodeValue += isRent ? '租用' : '购买';
                            e.firstElementChild.childNodes[1].firstChild.nodeValue = '另一个';
                            e.firstElementChild.childNodes[2].nodeValue = propertyDict[propName];
                        } else {
                            e.firstElementChild.firstChild.nodeValue = '你确定要';
                            e.firstElementChild.firstChild.nodeValue += isRent ? '租用' : '购买';
                            e.firstElementChild.firstChild.nodeValue += propertyDict[propName];
                        }
                        e.children[1].firstChild.nodeValue = '花费 ';
                        e.children[1].childNodes[2].nodeValue = isRent ? ' 租期 ' : '？';
                        if (isRent)
                            e.children[1].childNodes[4].nodeValue = ' 天？';
                    });

                    // 房屋详情表格
                    $('div.info-block span.bold').each((i, e) => {
                        if (e.childElementCount === 2) {
                            /**
                             * <span class="bold">
                             <span class="title-laptop">On </span>
                             "Market"
                             <span class="title-desktop"> Price</span>
                             ":"
                             </span>
                             */
                            e.firstElementChild.firstChild.nodeValue = '';
                            e.childNodes[2].nodeValue = '市场价';
                            e.childNodes[3].firstChild.nodeValue = '';
                            e.childNodes[4].nodeValue = '：';
                        } else {
                            if (propertyDict[e.firstChild.nodeValue.trim()])
                                e.firstChild.nodeValue = propertyDict[e.firstChild.nodeValue.trim()];
                        }
                    });
                    $('div.rental-period span.bold').each((i, e) => {
                        if (propertyDict[e.firstChild.nodeValue.trim()])
                            e.firstChild.nodeValue = propertyDict[e.firstChild.nodeValue.trim()];
                    });
                    // 窄边 cost happy
                    $('span.title-laptop.bold').each((i, e) => {
                        if (propertyDict[$(e).text().trim()])
                            $(e).text(propertyDict[$(e).text().trim()]);
                    });
                    // modification
                    $('div.title.bold.left').each((i, e) => {
                        if (propertyDict[e.firstChild.nodeValue])
                            e.firstChild.nodeValue = propertyDict[e.firstChild.nodeValue];
                    });

                    return;
                }
                // 房屋选项
                if (window.location.href.indexOf('p=options') >= 0) {
                    // 页面的黑框标题
                    $('div.content-wrapper div.title-black').each((i, e) => {
                        if (propertyDict[$(e).text().trim()])
                            $(e).text(propertyDict[$(e).text().trim()]);
                    });
                    // 所有li内容
                    // $('div.content-wrapper div.customize-opt li').find('*')
                    //     .contents().each((i,e)=>{
                    //         if(e.nodeType!==3)return;log(e)
                    //     });
                    return;
                }
                // 房屋详情
                if (window.location.href.indexOf('p=propertyinfo') >= 0) {
                    return;
                }
                // 延期、合同
                if (window.location.href.indexOf('step=viewOfferExtension') >= 0) {
                    return;
                }
                // 自己的所有房产 页面
                {
                    // 顶部3标题
                    $('ul.property-tabs a.ui-tabs-anchor div').contents().each((i, e) => {
                        if (propertyDict[e.nodeValue]) {
                            e.nodeValue = propertyDict[e.nodeValue];
                        }
                    });
                    // 图片下的描述部分
                    $('ul.properties-list div.image-description').find('*')
                        .contents().each((i, e) => {
                        if (e.nodeType !== 3) return;
                        if (!propertyDict[e.nodeValue.trim()]) return;
                        e.nodeValue = propertyDict[e.nodeValue.trim()];
                    });
                    // 图片下的按钮的title浮动框文字
                    $('div#properties-page-wrap a[title]').each((i, e) => {
                        if (propertyDict[$(e).attr('title')])
                            $(e).attr('title', propertyDict[$(e).attr('title')]);
                    });
                }
            };

            propertyTrans();
            propertyOB.observe($('div.content-wrapper').get(0), {childList: true, subtree: true});
            return;
        }

        // 通知页面
        if (href.includes('events.php')) {
            const ob = new MutationObserver(() => {
                ob.disconnect();
                titleTrans();
                contentTitleLinksTrans();
                eventsTrans();
                ob.observe($('div.content-wrapper')[0], {childList: true, subtree: true});
            });
            eventsTrans();
            ob.observe($('div.content-wrapper')[0], {childList: true, subtree: true});
            return;
            // let events;
            // const eventMutation = new MutationObserver(() => {
            //     eventMutation.disconnect();
            //     // events = $('span.mail-link');
            //     // eventsTrans(events);
            //     eventsTrans();
            //     eventMutation.observe($('div#events-main-wrapper')[0], {childList: true, subtree: true});
            // });
            //
            // //初始化中内容未加载
            // let eventInterval = setInterval(() => {
            //     // events = $('span.mail-link');
            //     // if (events.length === 0) {
            //     //     return;
            //     // }
            //     clearInterval(eventInterval);
            //     eventMutation.observe($('div#events-main-wrapper')[0], {childList: true, subtree: true});
            //     eventsTrans(events);
            // }, 1000);
        }

        // awards.php
        if (href.includes('awards.php')) {
            const awOB = new MutationObserver(() => {
                awOB.disconnect();
                awTrans();
                awOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true, attributes: true});
            });
            const awTrans = function awTrans() {
                titleTrans();
                contentTitleLinksTrans();
                // 顶部的3个分类 Honors (106) Medals (44) Merits (3)
                $('div.content-wrapper a.ui-tabs-anchor span.bold').contents().each((i, e) => {
                    if (e.nodeType !== 3) return;
                    if (awDict[e.nodeValue.trim()])
                        e.nodeValue = awDict[e.nodeValue.trim()];
                });
                // 分类标题下的描述
                $('div.awards-msg').contents().each((i, e) => {
                    // 文字节点
                    if (e.nodeType === 3) {
                        if (awDict[e.nodeValue.trim()])
                            e.nodeValue = awDict[e.nodeValue.trim()];
                    }
                    // 子节点
                    else if (e.nodeType === 1) {
                        if (awDict[$(e).text().trim()])
                            $(e).text(awDict[$(e).text().trim()]);
                        else if ($(e).text().indexOf('medals') >= 0)
                            $(e).text($(e).text().replace('medals', awDict['medals']));
                        else if ($(e).text().indexOf('honors') >= 0)
                            $(e).text($(e).text().replace('honors', awDict['honors']));
                    }
                });
                // 荣誉的描述
                $('div#awards-tab-menu a[data-title]').each((i, e) => {
                    const desc = $(e).attr('data-title').split(' <i>')[0];
                    if (awDict[desc])
                        $(e).attr('data-title', $(e).attr('data-title').replace(desc, awDict[desc]));
                });
                // 改变荣誉条时的提示
                $('div#honors div.msg').each((i, e) => {
                    if (awDict[$(e).text().trim()])
                        $(e).text(awDict[$(e).text().trim()]);
                });
                // 改变荣誉条时的提示按钮 change
                $('div#honors div.confirm-msg button').each((i, e) => {
                    if (awDict[$(e).text().trim()])
                        $(e).text(awDict[$(e).text().trim()]);
                });
                // 改变荣誉条时的提示按钮 cancel
                $('div#honors div.confirm-msg a.cancel').each((i, e) => {
                    if (awDict[$(e).text().trim()])
                        $(e).text(awDict[$(e).text().trim()]);
                });
                // 天赋页面 Available Merits: x Merits Used: x
                $('div.awards-msg p').contents().each((i, e) => {
                    if (e.nodeType === 3)
                        if (awDict[e.nodeValue.trim()])
                            e.nodeValue = e.nodeValue.replace(e.nodeValue.trim(), awDict[e.nodeValue.trim()]);
                });
                // 勋章下 即将解锁的勋章框标题 天赋加点的表头标题
                $('div.title-black').contents().each((i, e) => {
                    // 勋章下 即将解锁的勋章框标题
                    if (e.nodeType === 1) {
                        if (awDict[$(e).text().trim()])
                            $(e).text(awDict[$(e).text().trim()]);
                    }
                    // 天赋加点的表头标题
                    else if (e.nodeType === 3) {
                        if (awDict[e.nodeValue.trim()])
                            e.nodeValue = awDict[e.nodeValue.trim()];
                    }
                });
                // 荣誉和勋章的左边栏分类选择菜单
                $('div.tab-menu-cont li.ui-state-default a').each((i, e) => {
                    if (awDict[$(e).text().trim()])
                        $(e).text(awDict[$(e).text().trim()]);
                });
                // 天赋点名字
                $('ul#merits-list span.name').each((i, e) => {
                    if (awDict[$(e).text().trim()])
                        $(e).text(awDict[$(e).text().trim()]);
                });
                // 天赋点短描述
                $('ul#merits-list span.desc span[class^="t-"]').each((i, e) => {
                    // const slash = $(e).attr('class') === 't-show' ? '- ' : '';
                    const isShow = $(e).attr('class') === 't-hide';
                    const key = isShow ? $(e).text().slice(2) : $(e).text();
                    if (awDict[key])
                        $(e).text((isShow ? '- ' : '') + awDict[key]);
                });
                // 天赋点展开详细描述与确认
                $('ul#merits-list div.msg').contents().each((i, e) => {
                    // x merit(s)
                    if (e.nodeType === 1) {
                        const spl = $(e).text().split(' ');
                        if (awDict[spl[1]])
                            $(e).text(spl[0] + ' ' + awDict[spl[1]]);
                    }
                    // 文字片段
                    else if (e.nodeType === 3) {
                        if (awDict[e.nodeValue.trim()]) {
                            e.nodeValue = awDict[e.nodeValue.trim()] + '';
                            return;
                        }
                        const spl = e.nodeValue.trim().split('\n');
                        // 未升级完成
                        if (spl.length === 3) {
                            const upgradeName = spl[1].slice(5, -9);
                            const on = spl[0];
                            const upgrade = spl[1].slice(-8);
                            const desc = spl[2];
                            if (awDict[on] && awDict[upgrade] && awDict[upgradeName] && awDict[desc])
                                e.nodeValue = ' ' + awDict[on] + awDict[upgradeName] +
                                    awDict[upgrade] + awDict[desc];
                        }
                        // 升级完成
                        else if (spl.length === 1) {
                            const upgraded = e.nodeValue.trim().slice(0, 60);
                            const desc = e.nodeValue.trim().slice(61);
                            if (awDict[upgraded]) e.nodeValue = awDict[upgraded];
                            if (awDict[desc]) e.nodeValue += awDict[desc];
                        }
                    }
                });
                // spend cancel按钮
                $('ul#merits-list div.confirm-cont a').each((i, e) => {
                    if (awDict[$(e).text().trim()]) $(e).text(awDict[$(e).text().trim()]);
                });
            };
            awTrans();
            awOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true, attributes: true});
            return;
        }

        // preferences设置
        if (href.contains(/preferences\.php/)) {
            const $$ = $('.content-wrapper');
            const OB = new MutationObserver(() => {
                OB.disconnect();
                titleTrans();
                contentTitleLinksTrans();
                trans();
                OB.observe($$.get(0), {
                    characterData: true,
                    attributes: true,
                    subtree: true,
                    childList: true
                });
            });
            const trans = () => {
                // 黑框标题
                const $black_title = $('.title-black');
                if (tornSettingsDict[$black_title.text().trim()]) {
                    $black_title.text(tornSettingsDict[$black_title.text().trim()]);
                }
                // 电脑版左边导航菜单
                const $nav = $('.content-wrapper a.ui-tabs-anchor');
                $nav.each((i, e) => {
                    if (tornSettingsDict[$(e).text().trim()]) {
                        $(e).text(tornSettingsDict[$(e).text().trim()]);
                    }
                });
                if (window.location.href.contains(/tab=api/)) {
                    // 描述
                    const $api_desc = $('.content-wrapper p[class^="apiDescription___"]');
                    if (tornSettingsDict[$api_desc.text().slice(0, 50)]) {
                        $api_desc.text(tornSettingsDict[$api_desc.text().slice(0, 50)]);
                    }
                    // 添加按钮
                    const $add_btn = $('button[class^="addKey___"] span');
                    if (tornSettingsDict[$add_btn.text().trim()]) {
                        $add_btn.text(tornSettingsDict[$add_btn.text().trim()]);
                    }
                    // new keys name
                    const $new_keys_name = $('input[placeholder="New key\'s name"]');
                    if (tornSettingsDict[$new_keys_name.attr('placeholder')]) {
                        $new_keys_name.attr('placeholder', tornSettingsDict[$new_keys_name.attr('placeholder')]);
                    }
                    // api类型
                    const $key_type = $('div[class*="typesDropdown___"] button.down');
                    if (tornSettingsDict[$key_type.text().trim()]) {
                        $key_type.text(tornSettingsDict[$key_type.text().trim()]);
                    }
                    // api类型选择框
                    const $type_down = $('div[class*="typesDropdown___"] div.down li');
                    $type_down.each((i, e) => {
                        if (tornSettingsDict[$(e).text().trim()]) {
                            $(e).text(tornSettingsDict[$(e).text().trim()]);
                        }
                    });
                    // return;
                }
            };
            trans();
            OB.observe($$.get(0), {
                characterData: true,
                attributes: true,
                subtree: true,
                childList: true
            });
            return;
        }

        // 展柜
        if (href.contains(/displaycase\.php/)) {
            const $page_wrapper = document.querySelector('#display-page-wrap');
            initOB($page_wrapper, {
                    subtree: true,
                    attributes: true,
                    childList: true
                },
                () => {
                    // 标题和右边的链接
                    titleTrans();
                    // 右上角返回按钮
                    const $back_to_profile = $page_wrapper.querySelector('#back');
                    if ($back_to_profile) {
                        const spl = $back_to_profile.innerText.split(/('s |s' )/);
                        if (spl.length === 3 && spl[2] === 'Profile') {
                            $back_to_profile.innerText = `${spl[0]}的个人资料`;
                        }
                    }
                    const $display_cabinet = $page_wrapper.querySelector('.display-cabinet');
                    if ($display_cabinet) {
                        // 物品名
                        const $item_name = $display_cabinet.querySelectorAll('div.b-item-name span:nth-of-type(2)');
                        $item_name.forEach((e) => {
                            if (itemNameDict[e.innerText]) {
                                e.innerText = itemNameDict[e.innerText];
                            }
                        });
                        // 展开详细框
                        const $show_item_info = $display_cabinet.querySelector('.show-item-info');
                        showItemInfoTrans($show_item_info);
                    }
                });
            return;
        }

        // 升级页面
        if (href.includes('level2.php')) {
        }

        //  医院页面
        if (href.includes("hospitalview.php")) {
            const hospitalOB = new MutationObserver(hosOBInit);

            function hosOBInit() {
                hospitalOB.disconnect();
                hospTrans();
                hospitalOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true});
            }

            function hospTrans() {
                titleTrans();
                contentTitleLinksTrans();

                // 顶部提示信息
                $('div[class^="msg right-round"]').contents().each((i, e) => (hosDict[e.nodeValue.trim()]) && (e.nodeValue = hosDict[e.nodeValue.trim()]));

                //玩家列表标题
                $('div[class^="users-list-title  title-black top-round m-top10"] span').contents().each((i, e) => {
                    if (e.nodeValue && hosDict[e.nodeValue.trim()]) {
                        e.nodeValue = e.nodeValue.replace(e.nodeValue, hosDict[e.nodeValue.trim()]);
                    }
                })

                //玩家列表住院理由
                $('ul[class^="user-info-list-wrap"] span[class^="reason"]').each((i, e) => {
                    let reasonStr = $(e).get(0).childNodes[1].nodeValue.trim();

                    if (hosDict[reasonStr]) {
                        $(e)[0].childNodes[1].nodeValue = hosDict[reasonStr];
                    } else if (reasonStr.indexOf("Crashed") >= 0) {
                        $(e)[0].childNodes[1].nodeValue = reasonStr
                            .replace("Crashed her", hosDict["Crashed her"])
                            .replace("Crashed his", hosDict["Crashed his"]);
                    } else {
                        switch (reasonStr) {
                            case "Attacked by":
                                $(e)[0].childNodes[1].nodeValue = hosDict["general"];
                                $(e).append(" 攻击");
                                break;
                            case "Hospitalized by":
                                $(e)[0].childNodes[1].nodeValue = hosDict["general"];
                                $(e).append(" 殴打并送入医院");
                                break;
                            case "Mugged by":
                                $(e)[0].childNodes[1].nodeValue = hosDict["general"];
                                $(e).append(" 抢劫");
                                break;
                        }
                    }
                })
            }

            hospTrans();
            hospitalOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true});
            return;
        }

        // 帮派页面
        if (href.includes("actions.php")) {
            const factionOB = new MutationObserver(factionOBInit);

            function factionOBInit() {
                factionOB.disconnect();
                factionTrans();
                factionOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true});
            }

            const factionDict = {
                "INFO": "信息",
                "TERRITORY": "地盘",
                "RANK": "名次",
                "CRIMES": "组织犯罪",
                "UPGRADES": "升级",
                "ARMORY": "军械库",
                "CONTROLS": "控制面板",
                "FACTION": "帮派",
                "YOUR FACTION IS NOT IN A WAR": "你的帮派没有处于战争状态",
                "TIER": "级别",
                "RESPECT": "声望",
                "No active chain": "暂无攻击链",
                "Main News": "主要消息",
                "Attacking": "攻击",
                "Funds": "资金流动",
                "Armory": "军械库",
                "Crimes": "组织犯罪",
                "Membership": "成员资格",
                "has claimed sovereignty of": "",
                "has abandoned": "放弃了地盘",
                "Achieved a chain of": "达成了连击链值",
                "and": "和",
                "respect [": "点声望 [",
                "deposited ${$1}": "存放了${$1}",
                "Leadership was transferred to": "帮派领导权被移交给了 ",
                "Someone mugged": "有人抢劫了 ",
                "hospitalized": " 暴打了 ",
                "mugged": " 抢劫了 ",
                "attacked": " 攻击了 ",
                "but lost": "  但是输了",
                "Someone attacked": "有人攻击了 ",
                "Someone hospitalized": "有人暴打了 "
            }

            function factionTrans() {
                titleTrans();
                contentTitleLinksTrans();

                //帮派大标题
                $('span[class^="tab-name"]').each((i, e) => {
                    if (factionDict[$(e).text().trim()]) {
                        $(e).text(factionDict[$(e).text().trim()]);
                    }
                })

                //帮派战争状态
                $('div[class^="f-msg"]').contents().each((i, e) => {
                    let word2Trans = $(e).text().trim().split(":")[0];
                    if (word2Trans && factionDict[word2Trans]) {
                        $(e).text($(e).text().replace(word2Trans, factionDict[word2Trans]));
                    }
                })

                //攻击链盒
                $('div[class^="chain-box"]').contents().each((i, e) => {
                    if (factionDict[$(e).text().trim()]) {
                        $(e).text(factionDict[$(e).text().trim()]);
                    }
                })

                //帮派消息类别
                $('div[class^="newsHeader"]').contents().each((i, e) => {
                    if (factionDict[$(e).text().trim()]) {
                        $(e).text(factionDict[$(e).text().trim()]);
                    }
                })
                //帮派主要消息日志
                $('button[class^="tab"] ').each((i, e) => {
                    if ($(e).attr('class').indexOf("active") >= 0) {
                        log($(e).text());
                        switch ($(e).text().trim()) {
                            case "主要消息":
                                $('ul[class^="news-list"] span[class^="info"]').contents().each((i, u) => {
                                    if (factionDict[$(u).text().trim()]) {
                                        u.nodeValue = u.nodeValue.replace($(u).text().trim(), factionDict[$(u).text().trim()]);
                                    }
                                })
                                break;
                            case "攻击":
                                $('ul[class^="news-list"] span[class^="info"]').find('*').contents().each((i, u) => {
                                    log($(u).text().trim())
                                    if (factionDict[$(u).text().trim()]) {
                                        u.nodeValue = factionDict[$(u).text().trim()];
                                    }
                                })
                                break;
                            case "资金流动":
                                $('ul[class^="news-list"] span[class^="info"]').contents().each((i, u) => {
                                    if (u.nodeValue) {
                                        u.nodeValue = u.nodeValue.replace("deposited", "存放了");
                                    }
                                })
                                break;
                        }
                    }
                })
                // //帮派主要消息日志
                // $('ul[class^="news-list"] span[class^="info"]').contents().each((i, e) => {
                //     if (factionDict[$(e).text().trim()]) {
                //         e.nodeValue = e.nodeValue.replace($(e).text().trim(), factionDict[$(e).text().trim()]);
                //     }
                // })

            }

            factionTrans();
            factionOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true});
            return;
        }

        // pc电脑
        if (href.contains(/pc\.php/)) {
            const $$ = $('.content-wrapper');
            const OB = new MutationObserver(() => {
                OB.disconnect();
                titleTrans();
                contentTitleLinksTrans();
                trans();
                OB.observe($$.get(0), {
                    characterData: true,
                    attributes: true,
                    subtree: true,
                    childList: true
                });
            });
            const trans = () => {
                // 黑框
                const $black_title = $('div.title-black');
                if (pcDict[$black_title.text().trim()]) {
                    $black_title.text(pcDict[$black_title.text().trim()]);
                }
            };
            trans();
            OB.observe($$.get(0), {
                characterData: true,
                attributes: true,
                subtree: true,
                childList: true
            });
            return;
        }

        // 日历
        if (href.contains(/calendar\.php/)) {
            const $root = document.querySelectorAll('#calendar-root');
            $root.forEach(el => {
                initOB(el, {childList: true, subtree: true}, () => {
                    // 页标题
                    const $h4_title = el.querySelectorAll('h4[class^="title___"]');
                    titleTransReact($h4_title);
                    // 页标题右侧链接
                    const $link_title = el.querySelectorAll('div[class^="linksContainer___"] span[class^="linkTitle___"]');
                    contentTitleLinksTransReact($link_title);
                    // 月标题
                    const $month_title = el.querySelectorAll('div[class^="monthName___"]');
                    $month_title.forEach(e => {
                        if (calDict[e.innerText.trim()]) e.innerText = calDict[e.innerText.trim()];
                    });
                });
            });
            return;
        }

        // itemuseparcel.php

        // 圣诞小镇
        if (href.contains(/christmas_town\.php/)) {
            let $root = document.querySelector('#christmastownroot');
            const $title_wrapper = $root.querySelector('div[class^="appHeaderWrapper___"]');
            // 标题和右边的链接
            initOB($title_wrapper, {childList: true, subtree: true}, () => {
                titleTransReact();
                contentTitleLinksTransReact();
            });
        }
    }

    // mini profile 翻译
    function miniprofTrans() {
        // 迷你资料卡状态
        playerStatusTrans($('div.profile-mini-root div.description span'));
        // 转钱
        sendCashTrans('div.profile-mini-root');
    }

    // 起飞目的地id
    function getDestId(dest) {
        // 墨、开、加、夏、英、阿、瑞s、立本、祖、迪、南
        return [2, 12, 9, 3, 10, 7, 8, 5, 6, 11, 4][dest];
    }

    // 引入torn miniprofile
    function initMiniProf(selector) {
        let profileMini = {
            timeout: 0,
            clickable: false,
            rootElement: null,
            targetElement: null,
            rootId: 'profile-mini-root',
            rootSelector: '#profile-mini-root',
            userNameSelector: "a[href*='profiles.php?XID=']",
            // contentWrapper: '#wh-trans-icon',
            contentWrapper: selector,
            setClickable: function (value) {
                this.clickable = value
            },
            setRootElement: function () {
                if (!document.getElementById(this.rootId)) {
                    this.rootElement = document.createElement('div');
                    this.rootElement.classList.add(this.rootId);
                    this.rootElement.id = this.rootId;
                    $('body').append(this.rootElement);
                } else {
                    ReactDOM.unmountComponentAtNode($(this.rootSelector).get(0));
                    this.rootElement = document.getElementById(this.rootId);
                }
            },
            subscribeForHideListeners: function () {
                const that = this;
                let width = $(window).width();

                function handleResize(e) {
                    if ($(this).width() !== width) {
                        width = $(this).width();
                        hideMiniProfile.call(that, e);
                    }
                }

                function handleScroll(e) {
                    if (!document.activeElement.classList.contains('send-cash-input')) {
                        hideMiniProfile.call(that, e);
                    }
                }

                function hideMiniProfile(e) {
                    if ($(e.target).closest(this.rootSelector).length === 0 || ['resize', 'scroll'].includes(e.type)) {
                        that.targetElement = null
                        ReactDOM.unmountComponentAtNode($(this.rootSelector).get(0));
                        $(this.userNameSelector).off('click', this.handleUserNameClick);
                        $(this.userNameSelector).unbind('contextmenu');
                        $(document).off('click', hideMiniProfile);
                        $(window).off('hashchange', hideMiniProfile);
                        $(window).off('resize', handleResize);
                        $(window).off('scroll', handleScroll);
                    }
                }

                $(document).on('click', hideMiniProfile.bind(this));
                $(window).on('hashchange', hideMiniProfile.bind(this));
                $(window).on('resize', handleResize);
                if (that.targetElement.closest('#chatRoot')) {
                    $(window).on('scroll', handleScroll);
                }
            },
            subscribeForUserNameClick: function () {
                $(this.userNameSelector).click(this.handleUserNameClick.bind(this))
            },
            handleUserNameClick: function () {
                if (!this.clickable) {
                    this.setClickable(true);
                    return false;
                }
            },
            subscribeForContextMenu: function (element) {
                $(element).on('contextmenu', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    return false;
                })
            },
            handleMouseDown: function () {
                const that = this;
                $(this.contentWrapper).on('mousedown touchstart', this.userNameSelector, function (e) {
                    if (e.which !== 1 && e.type !== 'touchstart') {
                        return false;
                    }
                    that.targetElement = e.currentTarget;
                    that.subscribeForContextMenu(that.targetElement);
                    that.handleFocusLost(e.currentTarget);
                    that.timeout = setTimeout(function () {
                        if (e.type !== 'touchstart') {
                            that.setClickable(false);
                            that.subscribeForUserNameClick();
                        } else {
                            $(e.currentTarget).off('touchmove mouseleave');
                        }
                        that.subscribeForHideListeners();
                        that.setRootElement();
                        const userID = e.currentTarget.search.slice('?XID='.length);
                        const props = {
                            userID: userID,
                            event: e.originalEvent
                        };
                        window.renderMiniProfile(that.rootElement, props);
                    }, 500);
                    if (e.type !== 'touchstart') {
                        return false;
                    }
                })
            },
            handleMouseUp: function () {
                const that = this;
                $(this.contentWrapper).on('mouseup touchend', this.userNameSelector, function () {
                    that.timeout && clearTimeout(that.timeout);
                })
            },
            handleFocusLost: function (element) {
                const that = this;
                $(element).on('touchmove mouseleave', function unsubscribe() {
                    that.timeout && clearTimeout(that.timeout);
                    $(this).off('touchmove mouseleave', unsubscribe)
                })
            },
            init: function () {
                this.handleMouseDown();
                this.handleMouseUp();
            }
        };
        profileMini.init();
    }

    // 海外库存
    async function forStock() {
        if (getScriptEngine() === UserScriptEngine.RAW) {
            const insert = `<img alt="stock.png" src="https://jjins.github.io/t2i/stock.png?${performance.now()}" style="max-width:100%;display:block;margin:0 auto;" />`;
            popupMsg(insert, '飞花库存');
        } else {
            const popup = popupMsg(`请稍后${loading_gif_html()}`, '飞花库存');
            let table = `<table><tr><th colspan="2">目的地 - 更新时间</th><th colspan="3">库存</th></tr>`;
            const dest = [
                {
                    name: 'mex', show: '墨西哥',
                    stocks: {'Dahlia': '花', 'Jaguar Plushie': '偶'}
                },
                {
                    name: 'cay', show: '开曼',
                    stocks: {'Banana Orchid': '花', 'Stingray Plushie': '偶'}
                },
                {
                    name: 'can', show: '加拿大',
                    stocks: {'Crocus': '花', 'Wolverine Plushie': '偶'}
                },
                {
                    name: 'haw', show: '夏威夷',
                    stocks: {'Orchid': '花', 'Large Suitcase': '大箱'}
                },
                {
                    name: 'uni', show: '嘤国',
                    stocks: {'Heather': '花', 'Red Fox Plushie': '赤狐', 'Nessie Plushie': '水怪'}
                },
                {
                    name: 'arg', show: '阿根廷',
                    stocks: {'Ceibo Flower': '花', 'Monkey Plushie': '偶', 'Tear Gas': '催泪弹'},
                },
                {
                    name: 'swi', show: '瑞士',
                    stocks: {'Edelweiss': '花', 'Chamois Plushie': '偶'},
                },
                {
                    name: 'jap', show: '日本',
                    stocks: {'Cherry Blossom': '花'},
                },
                {
                    name: 'chi', show: '祖国',
                    stocks: {'Peony': '花', 'Panda Plushie': '偶'},
                },
                {
                    name: 'uae', show: '迪拜',
                    stocks: {'Tribulus Omanense': '花', 'Camel Plushie': '偶'},
                },
                {
                    name: 'sou', show: '南非',
                    stocks: {'African Violet': '花', 'Lion Plushie': '偶', 'Xanax': 'XAN'},
                }];
            const now = new Date();
            const res = await fstock.get();
            if (!res['stocks']) return;
            dest.forEach(el => {
                const update = (now - new Date(res.stocks[el.name]['update'] * 1000)) / 1000 | 0
                table += `<tr><td>${el.show}</td><td>${update / 60 | 0}分${update % 60 | 0}秒前</td>`;
                let count = 0;
                res.stocks[el.name]['stocks'].forEach(stock => {
                    if (el.stocks[stock.name]) {
                        table += `<td${stock['quantity'] === 0 ? ' style="background-color:#f44336;color:white;border-color:#000;"' : ''}>${el.stocks[stock.name]} (${stock['quantity']})</td>`;
                        count++;
                    }
                });
                while (count < 3) {
                    count++;
                    table += '<td></td>';
                }
                table += '</tr>';
            });
            table += '</table>';
            popup.innerHTML = table;
        }
    }

    // 药cd
    function getYaoCD() {
        if (document.querySelector("#icon49-sidebar")) { // 0-10min
            return '<10分'
        } else if (document.querySelector("#icon50-sidebar")) { // 10min-1h
            return '<1时'
        } else if (document.querySelector("#icon51-sidebar")) { // 1h-2h
            return '1~2时'
        } else if (document.querySelector("#icon52-sidebar")) { // 2h-5h
            return '2~5时'
        } else if (document.querySelector("#icon53-sidebar")) { // 5h+
            return '>5时'
        } else {
            return '无效'
        }
    }
}());
