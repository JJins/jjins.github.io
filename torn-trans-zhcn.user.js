// ==UserScript==
// @name         Torn翻译
// @namespace    WOOH
// @version      0.1.1109a
// @description  UI翻译
// @author       Woohoo-[2687093] sabrina_devil[2696209]
// @match        https://www.torn.com/*
// @grant        none
// ==/UserScript==


(function () {
    'use strict';
    const ___win_WHTRANS = window || window.unsafeWindow;
    if (___win_WHTRANS.WHTRANS) return;
    ___win_WHTRANS.WHTRANS = true;

    const $ = window.jQuery;
    const titleDict = {
        'Home': '主页',
        'Estate Agents': '地产中介',
        'Newspaper': '报纸',
        'Job Listing': '工作列表',
        'Freebies': '赠品',
        'Classified Ads': '分类广告',
        'Properties': '房产',
        'City': '城市',
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
    };
    const sidebarDict = { // todo 从json加载
        'Money': '现金',
        'Level': '等级',
        'Points': 'PT',
        'Merits': '技能点',
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
    const homeDict = {
        'General Information': '基本信息',
        'Property Information': '房产信息',
        'Battle Stats': '战斗能力（BS）',
        'Working Stats': '工作能力（WS）',
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
        'Theft': '偷盗',
        'Auto theft': '汽车盗窃',
        'Drug deals': '非法药品交易',
        'Computer crimes': '计算机犯罪',
        'Murder': '谋杀',
        'Fraud crimes': '诈骗犯罪（Fraud crimes）',
        'Other': '其他犯罪',
        'Total': '总计',
        'Name': '名字',
        'Money': '现金',
        'Points': 'PT',
        'Level': '等级',
        'Rank': '阶级',// todo 暂定
        'Life': '血量',
        'Age': '年龄',
        'Marital status': '婚姻状态',
        'Networth': '身价',
        'Strength': '力量 STR',
        'Defense': '防御 DEF',
        'Speed': '速度 SPD',
        'Dexterity': '敏捷 DEX',
        //'Total':'',
        'Hunting skill': '狩猎技能',
        'Racing skill': '赛车技能',
        'Manual labor': '体力 MAN',
        'Intelligence': '智力 INT',
        'Endurance': '耐心 END',
    };
    const newspaperDict = {
        'front page': '头版',
        'archive': '归档',
        'job listing': '工作',
        'properties': '房产',
        'freebies': '赠品',
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
        'Why not visit our sponsor?': '为什么不访问我们的赞助商呢？',
        'View all': '查看所有',
        'Advertise here': '在此刊登广告',
    };
    const propertyDict = {
        'Shack': '棚屋',
        'Trailer': '拖车',
        'Apartment': '公寓',
        'Semi - Detached': '半独立式住宅',
        'Semi-Detached House': '半独立式住宅',
        'Detached House': '独立式住宅',
        'Beach House': '海滩小屋',
        'Chalet': '小别墅',
        'Villa': '别墅',
        'Penthouse': '顶层公寓',
        'Mansion': '豪宅',
        'Ranch': '山庄',
        'Palace': '宫殿',
        'Castle': '城堡',
        'Private Island': '私人岛屿（PI）',
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
    };
    const travelingDict = { // todo jsonify
        'Recruit Citizens': '招募玩家',
        'Events': '事件',
        'Torn to London.': '正在飞往英国伦敦（London）。',
        'London to Torn.': '正从英国伦敦（London）回城。', // todo 所有目的地
        '\nRemaining Flight Time -\n': ' 剩余时间 - ',
        'Travel Home': "回国",
        'Rehabilitation': "戒毒康复",
        'People': "用户列表",
        'Torn to Zurich.': '正在飞往瑞士苏黎世（Zurich）。',
        'Zurich to Torn.': '正从瑞士苏黎世（Zurich）回城。',
    };
    // 界面tips todo 全收集全翻译
    const tipsDict = {
        '\nAccording to the Economist Intelligence Unit\'s Quality of Life Index, Switzerland is the second best place in the world to be born, after Denmark. Torn ranked 224th, despite there being only 194 recognised nations in the world.\t': "根据经济学人信息部提供的生活质量指数，瑞士是世界上第二个最适合出生的地方，仅次于丹麦。尽管世界上只有194个公认的国家，但托恩却排名第224位。",

        '\nThe opportunities for employment in Torn are wide and varied, from jobs in the zoo and the meat warehouse through to fantastic openings at the strip club - a description rarely used to refer to those who work there.\t':
            "托恩的就业机会广泛而多样，从动物园和肉类仓库的工作,到脱衣舞俱乐部的奇妙开场--这是一个很少用来形容在那里工作的人的描述。",

        '\nOne of the main requirements for a wedding to take place in Torn is the procurement of a ring. You may either purchase one from the Jewellery Store, or you can choose the more romantic option of stealing one, which requires far more effort if you think about it.\t': "在托恩举行婚礼的主要要求之一就是购买一枚戒指。你可以从珠宝店购买，也可以选择在偷窃戒指中选择一种很浪漫的方式，但是你冷静下来想想的话，这也是需要付出更大代价的。",

        "\nDespite having no discernible court system Torn still employs several thousand people within its Judicial Services department. Nobody knows what the hell these people do all day, but if we had to guess, we'd say Solitaire.\t": "尽管没有明显的法院系统，托恩仍然在其司法服务部门雇用了几千人。没有人知道这些人整天都在做什么，但如果我们必须猜测，我们会说是接龙。",

        "\nAt one point a Dual Wield Melee course was available at Torn City College for a fee of $50,000,000, but this was discontinued when Torn's citizens realized they were effectively paying to learn how to hold two things at once.\t": "托恩城市学院一度开设了双持近战课程，收费50,000,000美元，但当托恩的市民意识到他们实际上是在花钱学习如何同时持有两样东西时，这个课程就停止了。"
    };
    const cityDict = {//todo
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
        'Sort by:': '分类排序方式：',
        'Area': '地区',
    };
    const gymDict={
        'Strength':'力量 STR',
        'STR':'力量 STR',
        'TRAIN':'锻炼',
        'Welcome to':'欢迎来到 ',
        '!':'！',
        'You walk into the gym and begin browsing the exercises available.':
            '你走进健身房，开始浏览可用的健身器材。',
        'You have':'你有',
        'available to use.':'可用于锻炼。',
        'energy':'能量',
        'Estimated Energy progress:':'(TornTools) 预估健身房解锁进程：',
        'What would you like to train today?':'今天要练点什么？',
        'BACK TO GYM':'返回健身房',
        'ACTIVATE MEMBERSHIP':'激活会员身份',
        'BUY MEMBERSHIP':'购买健身房会员',
        'Cancel':'返回',
        //'Damage you make on impact':'',
        'Chance of hitting opponent':'击中对手的概率',
        '{$} energy per train':'每次锻炼花费{$}能量',
        'Class:':'健身房类别：',
        'Heavyweight':'重型',
        'Strength Gains':'力量获得',
        'Boxing':'拳击',
        'Are you sure you would like to buy this membership?':'确定购买这个健身房会员吗？',
        'Not Available':'不可用',
    };


    /**
     * 飞行页面
     */
    if (window.location.href.indexOf('index.php') >= 0 &&
        $('.travelling h4').length !== 0) {
        titleTrans();

        //如果在飞行页面
        if ($('span.remaining-time').length !== 0) {
            $('#skip-to-content')[0].firstChild.nodeValue = '飞行中';

            // 气泡 需要判断是否存在 因为torntools默认关闭云和飞机 冰蛙也会关闭
            if ($('div.inner-popup').length !== 0 && tipsDict[$('div.inner-popup')[0].textContent]) {
                $('div.inner-popup')[0].textContent = tipsDict[$('div.inner-popup')[0].textContent];
            }

            // Remaining Flight Time -
            if (travelingDict[$('span.remaining-time')[0].firstChild.nodeValue]) {
                $('span.remaining-time')[0].firstChild.nodeValue = travelingDict[$('span.remaining-time')[0].firstChild.nodeValue];
            }

            $("#recruit-citizens")[0].firstChild.nodeValue = travelingDict[$("#recruit-citizens")[0].firstChild.nodeValue];
        }

        //Events
        $("#events")[0].firstChild.nodeValue = travelingDict[$("#events")[0].firstChild.nodeValue]

        if ($("#travel-home").length !== 0) {
            $("#travel-home")[0].firstChild.nodeValue = travelingDict[$("#travel-home")[0].firstChild.nodeValue];
            $("#rehab")[0].firstChild.nodeValue = travelingDict[$("#rehab")[0].firstChild.nodeValue];//todo 在瑞士就加rehab
            $("#people")[0].firstChild.nodeValue = travelingDict[$("#people")[0].firstChild.nodeValue];
        }

        const remainingTime = new MutationObserver(mutations => {
            if (!travelingDict[$('span.description')[0].firstChild.nodeValue]) return;
            remainingTime.disconnect();
            /**
             * Torn to {dest}.
             * <span class="description">Torn to Zurich.</span>
             */
            $('span.description')[0].firstChild.nodeValue = travelingDict[$('span.description')[0].firstChild.nodeValue];
            remainingTime.observe($('span.remaining-time')[0], {childList: true, subtree: true});
        });
        remainingTime.observe($('span.remaining-time')[0], {childList: true, subtree: true});

        return;
    }

    /**
     * 边栏
     * 目前默认所有页面调用边栏翻译
     */
    let sidebarTimeOut = 60; // 60秒后取消定时
    const sidebarInterval = setInterval(() => {
        if ($('div[class^="sidebar"]').length === 0) {
            sidebarTimeOut--;
            if (sidebarTimeOut < 0) {
                clearInterval(sidebarInterval);
            }
            return;
        }
        // 边栏块标题
        $('h2[class^="header"]').each((i, e) => {
            if (sidebarDict[e.firstChild.nodeValue])
                e.firstChild.nodeValue = sidebarDict[e.firstChild.nodeValue];
        });
        // 边栏人物名字
        $('span[class^="menu-name"]').each((i, e) => {
            e.firstChild.nodeValue = '名字:';
        });
        // 钱 等级 pt 技能点
        $('p[class^="point-block"]').each((i, e) => {
            e.firstChild.firstChild.nodeValue = sidebarDict[e.firstChild.firstChild.nodeValue];
        });
        // 4条 状态条
        $('p[class^="bar-name"]').each((i, e) => {
            e.firstChild.nodeValue = sidebarDict[e.firstChild.nodeValue];
        });
        // 边栏菜单
        $('span[class^="linkName"]').each((i, e) => {
            e.firstChild.nodeValue = sidebarDict[e.firstChild.nodeValue];
        });
        // [use]按钮
        if ($('#pointsMerits').length !== 0)
            $('#pointsMerits')[0].firstChild.nodeValue = '[使用]';
        if ($('#pointsPoints').length !== 0)
            $('#pointsPoints')[0].firstChild.nodeValue = '[使用]';
        if ($('#pointsLevel').length !== 0)
            $('#pointsLevel')[0].firstChild.nodeValue = '[升级]';

        // 手机 区域菜单
        $('div[class*="areas-mobile"] span:nth-child(2)').contents().each((i, e) => {
            //console.log(e);
            if (sidebarDict[e.nodeValue])
                e.nodeValue = sidebarDict[e.nodeValue];
        });

        clearInterval(sidebarInterval);
    }, 1000);

    /**
     * 浮窗 todo
     * 小型资料卡 全局
     */
    let tooltip = $('div.ToolTipPortal')[0];
    let intervalID = setInterval(() => {
        tooltip = $('div.ToolTipPortal')[0];
        if (tooltip) {
            clearInterval(intervalID);
            new MutationObserver(mutations => {
                let barDescr = $('div[class^="tooltip"]').children('p[class^="bar-descr"]');
                if (barDescr.length !== 0) {
                    barDescr[0].childNodes.forEach(i => {
                        if (tooltipDict[i.nodeValue]) i.nodeValue = tooltipDict[i.nodeValue];
                    })
                }
                let miniprof_tooltip = $("#body > div.ToolTipPortal > div > div:nth-child(2)");
                if (miniprof_tooltip.length !== 0) {
                    if (tooltipDict[miniprof_tooltip[0].firstChild.nodeValue]) {
                        miniprof_tooltip[0].firstChild.nodeValue = tooltipDict[miniprof_tooltip[0].firstChild.nodeValue];
                    }
                } else {
                    //todo 通配符匹配
                }
            }).observe(tooltip, {attributes: true, childList: true, subtree: true});
        }
    }, 500);

    // const attackDict = {
    //     "mugged": "打劫了",
    //     "arrested": "逮捕了"
    // }

    /**
     * 主页 todo
     */
    if (window.location.href.indexOf('index.php') >= 0 &&
        $('h4#skip-to-content').text().indexOf('Home') >= 0) {
        titleTrans();
        contentTitleLinksTrans();

        let homeEvents = null;

        $('h5.box-title').each((i, e) => {
            if (!homeDict[e.firstChild.nodeValue]) return;
            if (e.firstChild.nodeValue === 'Latest Events') {
                homeEvents = $(e).parent().next().find('span');
            }
            // else if (e.firstChild.nodeValue === 'Latest Attacks') {
            //     const attackDict = {
            //         "mugged": "打劫了",
            //         "arrested": "逮捕了"
            //     }
            //     $(e).parent().next().find('span').each(function () {
            //         var attackMsg = $(this).context.textContent;
            //
            //         //Convert to an array for attacking ways determination
            //         var keyAtk = attackMsg.split(" ");
            //         var someone = keyAtk[0] === "Someone" ? "有人" : keyAtk[0];
            //         var textTsf = "";
            //         switch (keyAtk[1]) {
            //
            //             case "hospitalized":
            //                 textTsf = "攻击并送" + keyAtk[2] + "入院";
            //                 break;
            //
            //             default:
            //                 textTsf = attackDict[keyAtk[1]] + keyAtk[2];
            //         }
            //         $(this).context.textContent = someone + textTsf;
            //     });
            // }
            e.firstChild.nodeValue = homeDict[e.firstChild.nodeValue];
        });

        $('span.divider span').each((i, e) => {
            if (homeDict[$(e).text()])
                $(e).text(homeDict[$(e).text()]);
        });

        eventsTrans(homeEvents);

        return;
    }

    /**
     * city
     */
    if (window.location.href.indexOf('city.php') >= 0) {
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
                if (cityDict[$(e).text()])
                    $(e).text(cityDict[$(e).text()]);
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
        cityOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true});
        return;
    }

    /**
     * 健身房页面
     */
    if (window.location.href.indexOf('gym.php') >= 0) {
        const gymOB = new MutationObserver(gymOBInit);

        function gymOBInit() {
            gymOB.disconnect();
            gymTrans();
            gymOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true});
        }

        function gymTrans() {
            titleTrans();
            contentTitleLinksTrans();
            const gymName=$('div[class^="notificationText"] b').text();

            // 顶部提示信息
            $('div[class^="notificationText"] p').contents().each((i,e)=>{
                if(e.childNodes.length===0 && gymDict[e.nodeValue.trim()])
                    e.nodeValue=gymDict[e.nodeValue.trim()];
            });
            // 4属性标题
            $('h3[class^="title"]').each((i,e)=>{
                if (gymDict[$(e).text().trim()])
                    $(e).text(gymDict[$(e).text().trim()]);
            });
            // 4属性的介绍 与冰蛙冲突
            $('div[class^="description"] p:nth-child(1)').each((i,e)=>{
                if (gymDict[$(e).text().trim()])
                    $(e).text(gymDict[$(e).text().trim()]);
            });
            // 每次锻炼的花销
            $('div[class^="description"] p:nth-child(2)').each((i,e)=>{
                const energyPerTrain=$(e).text().split(' ').length===4?$(e).text().split(' ')[0]:null;
                if(gymDict[$(e).text().replace(energyPerTrain,`{$}`)])
                    $(e).text(gymDict[$(e).text().replace(energyPerTrain,`{$}`)].replace(`{$}`,energyPerTrain));
            });
            // 锻炼按钮
            $('button[class^="button"]').each((i,e)=>{
                if (gymDict[$(e).text().trim()])
                    $(e).text(gymDict[$(e).text().trim()]);
            });// cancel按钮
            $('button[class^="cancel"]').each((i,e)=>{
                if (gymDict[$(e).text().trim()])
                    $(e).text(gymDict[$(e).text().trim()]);
            });
            // 锻炼的提示信息
            $('div[class^="messageWrapper"] p').each((i,e)=>{
                if(gymDict[$(e).text()])
                    $(e).text(gymDict[$(e).text()]);
            });
            // 健身房信息 标题
            $('div[class^="gymTitle"] h3').each((i,e)=>{
                if(gymDict[$(e).text()])
                    $(e).text(gymDict[$(e).text()]);
            });
            // 健身房信息 属性名
            $('ul[class^="gymInfo"] b').each((i,e)=>{
                if(gymDict[$(e).text().trim()])
                    $(e).text(gymDict[$(e).text().trim()]);
            });
            // 健身房信息 属性值
            $('ul[class^="gymInfo"] span[class^="value"]').each((i,e)=>{
                if(gymDict[$(e).text().trim()])
                    $(e).text(gymDict[$(e).text().trim()]);
            });
            // 健身房信息 具体锻炼项目
            $('span[class^="exerciseName"]').each((i,e)=>{
                if(gymDict[$(e).text().trim()])
                    $(e).text(gymDict[$(e).text().trim()]);
            });
            // 购买提示信息
            $('div[class^="confirmMessage"] p[role="alert"]').each((i,e)=>{
                if(gymDict[$(e).text().trim()])
                    $(e).text(gymDict[$(e).text().trim()]);
            });
        }

        gymTrans();
        gymOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true});
        return;
    }

    /**
     * 报纸菜单
     */
    if (window.location.href.indexOf('newspaper.php') >= 0 || window.location.href.indexOf('joblist.php') >= 0 ||
        window.location.href.indexOf('freebies.php') >= 0 || window.location.href.indexOf('newspaper_class.php') >= 0 ||
        window.location.href.indexOf('personals.php') >= 0 || window.location.href.indexOf('bounties.php') >= 0 ||
        window.location.href.indexOf('comics.php') >= 0) {
        const newspaperOB = new MutationObserver(newspaperOBInit);

        function newspaperOBInit() {
            newspaperOB.disconnect();
            newspaperTrans();
            newspaperOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true});
        }

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
            const date = new Date($('span.date-label').text());
            if (date.format('yyyy') !== 'NaN')
                $('span.date-label').text(date.format('yyyy年MM月dd日'));
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
        }

        newspaperTrans();
        newspaperOB.observe($('div.content-wrapper')[0], {childList: true, subtree: true});
        return;
    }

    /**
     * npc买房
     */
    if (window.location.href.indexOf('estateagents.php') >= 0) {
        titleTrans();
        contentTitleLinksTrans();
        $('div.estate-info div.title').each((i, e) => {
            if (propertyDict[e.firstChild.nodeValue])
                e.firstChild.nodeValue = propertyDict[e.firstChild.nodeValue];
        });

        return;
    }

    /**
     * properties 从玩家租买和自己的房子页面
     */
    if (window.location.href.indexOf('properties.php') >= 0) {
        const isRent = window.location.href.indexOf('rent') >= 0;
        const propertyOB = new MutationObserver(() => {
            propertyOB.disconnect();

            titleTrans();
            contentTitleLinksTrans();

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
            /**
             <span class="question">
             <p>Are you sure you want to rent this Castle</p>
             <p> for <span class="bold">$4,000,000</span> for a period of <span class="bold">30</span> days?</p>
             <a class="t-blue bold m-left10 yes-btn c-pointer" href="#" data-id="258786" data-market="rental" data-price="4000000" i-data="i_759_415_21_14">Yes</a>
             <a class="t-blue no-btn bold m-left10 c-pointer" href="#" i-data="i_793_415_16_14">No</a>
             </span>

             <span class="question">
             <p>Are you sure you want to buy <span class="t-red bold">another</span> Private Island</p>
             <p> for <span class="bold">$1,705,000,000</span>?</p>
             <a class="t-blue bold m-left10 yes-btn c-pointer" href="#" data-id="3176475" data-market="selling" data-price="1705000000">Yes</a>
             <a href="#" class="t-blue no-btn bold m-left10 c-pointer">No</a>
             </span>
             */
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

            propertyOB.observe($('div#properties-page-wrap')[0], {childList: true, subtree: true});
        });

        propertyOB.observe($('div#properties-page-wrap')[0], {childList: true, subtree: true});
        return;
    }

    /**
     * 通知页面
     */
    if (window.location.href.indexOf('events.php') >= 0) {
        titleTrans();
        let events;
        const eventMutation = new MutationObserver(() => {
            eventMutation.disconnect();
            events = $('span.mail-link');
            eventsTrans(events);
            eventMutation.observe($('div#events-main-wrapper')[0], {childList: true, subtree: true});
        });

        //初始化中内容未加载
        let eventInterval = setInterval(() => {
            events = $('span.mail-link');
            if (events.length === 0) {
                return;
            }
            clearInterval(eventInterval);
            eventMutation.observe($('div#events-main-wrapper')[0], {childList: true, subtree: true});
            eventsTrans(events);
        }, 1000);
    }

    /**
     * 升级页面
     */
    if (window.location.href.indexOf('level2.php') >= 0) {
    }

    /**
     * 通知翻译函数
     * @param events
     */
    function eventsTrans(events) {
        if (events.length === 0) return;
        events.each((i, e) => {
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
                    e.childNodes[2].nodeValue += '获得' + racingPoint + '赛车点数（Racing Points）。';
                }

                e.childNodes[2].nodeValue += '你的最佳圈速是 ' + bestLap;
                if (isBeat)
                    e.childNodes[2].nodeValue += '，比之前最佳 ' + record + ' 快 ' + bestBy;
                e.childNodes[2].nodeValue += '。'


                e.childNodes[2].nodeValue += '[';
                e.childNodes[3].firstChild.nodeValue = '查看';
                return;
            }

            /**
             * 还贷
             */
            if ($(e).text().indexOf('Loan Shark') >= 0) {
                const node1Value = e.firstChild.nodeValue; // You have been charged $29,000 for your loan. You can pay this by visiting the
                //e.childNodes[1].firstChild.nodeValue; // <a href="loan.php">Loan Shark</a>
                // const node3Value=e.childNodes[2].nodeValue;  内容是 ". "

                let charge = node1Value.split(' ')[4];
                let replace;
                replace = '你需要支付 ';
                replace += charge;
                replace += ' 贷款利息，点此支付：';

                e.firstChild.nodeValue = replace;
                e.childNodes[1].firstChild.nodeValue = '鲨客借贷（Loan Shark）';
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
            if ($(e).text().indexOf('sent') >= 0) {
                if ($(e).text().split('from someone').length > 1) return; // todo 收到匿名发来的物资
                const isWithMsg = $(e).text().indexOf('message') >= 0;
                const msg = isWithMsg ? $(e).text().split(' with the message: ')[1] : null;
                const wordsList = e.firstChild.nodeValue.split(' ');
                // 发送的数量
                let number;
                if (wordsList[3] === 'some' || wordsList[3][0] === 'a') // 收到一个可数的不可堆叠或不可数的东西
                    number = '1x';
                else if (wordsList[3][wordsList[3].length - 1] === 'x') // 收到可数的可堆叠东西
                    number = wordsList[3];
                else
                    number = null;
                const item = number === null ? wordsList.slice(3, wordsList.length - 2) : wordsList.slice(4, wordsList.length - 2);

                // 你收到了来自someone的【数量】物品，附带信息：xxx。
                e.firstChild.nodeValue = '你收到了来自 ';
                e.childNodes[2].nodeValue = ' 的 ';
                if (number)
                    e.childNodes[2].nodeValue += number
                e.childNodes[2].nodeValue += ' ' + item.join(' ');
                if (isWithMsg)
                    e.childNodes[2].nodeValue += '，附带信息：' + msg;
                //e.childNodes[2].nodeValue += '。';

                return;
            }

            /**
             * bazaar
             * Dewei3 bought 2 x Toyota MR2 from your bazaar for $56,590.
             * ['', 'bought', '2', 'x', 'Toyota', 'MR2', 'from', 'your', 'bazaar', 'for', '$56,590.\n']
             * e.childNodes[1].nodeValue
             */
            if ($(e).text().indexOf('bazaar') >= 0) {
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
                    e.firstChild.nodeValue = '有人打劫了你 ' + money + ' [';
                    e.childNodes[1].firstChild.nodeValue = '查看';
                } else {
                    e.childNodes[1].nodeValue = ' 打劫了你 ' + money + ' [';
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
                    ;
                }

                if (spl[0] === 'Someone') { // 被匿名
                    if (spl.length === 6 && spl[3] === 'hospitalized') { // 匿名hos
                        e.firstChild.nodeValue = '有人袭击你并安排你住院 [';
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
                            e.childNodes[1].nodeValue = ' 袭击你并安排你住院 [';
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
                const OCName = e.childNodes[3].firstChild.nodeValue; // todo 汉化
                let others = e.childNodes[2].nodeValue.split(' ')[10];
                others = others === 'one' ? '1' : others;
                e.firstChild.nodeValue = '你被 ';
                e.childNodes[2].nodeValue = ' 选中参与一项组织犯罪（OC）。你和另外' + others + '人将组成一个团队，在' + time + '小时后进行';
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
                e.firstChild.nodeValue = '你和团队的组织犯罪（OC）' + OCName + ' ' + rs + '了！';
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
             * 收到帮派的pt
             */
            if ($(e).text().indexOf('points from') >= 0) {
                const pt = e.firstChild.nodeValue.split(' ')[3];
                e.firstChild.nodeValue = '你得到了从帮派取出的 ' + pt + ' PT。'
                return;
            }

            /**
             * 收到帮派的钱
             */
            if ($(e).text().indexOf('given $') >= 0) {
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
             * 教育完成
             * <a href="/education.php" i-data="i_199_234_363_14">The education course you were taking has ended. Please click here.</a>
             */
            if ($(e).text().indexOf('edu') >= 0) {
                if ($(e).text().trim().split(' '))
                    e.firstChild.firstChild.nodeValue = '你的课程已学习结束，请点此继续。';
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
            if ($(e).text().indexOf('membership') >= 0) {
                const gymName = e.firstChild.nodeValue.slice(46, -2);
                e.firstChild.nodeValue = '你已成功购买 ' + gymName + ' 的健身房会员卡。';
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
                e.firstChild.nodeValue = '你完成了 ' + virusName + ' ，它现在在你的物品库存中。你可以';
                e.childNodes[1].firstChild.nodeValue = '点此';
                e.childNodes[2].nodeValue = '开始编程一个新的病毒。';
                return;
            }

            if ($(e).text().indexOf('doorstep') >= 0) { // 蓝星奖励
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
                    console.log('职位出现" to "');// todo
                    return;
                }
                e.firstChild.nodeValue = '你在 ';
                e.childNodes[2].nodeValue = ' 的职位从 ' + prePos + ' 变为 ' + curPos + '。';
                return;
            }

            /**
             * 加入帮派结果
             */
            if ($(e).text().indexOf('join the faction') >= 0) {
                const virusName = e.childNodes[2].nodeValue.trim().split(' ')[2];
                const rsDict = {'accepted': '通过', 'declined': '拒绝',};
                e.firstChild.nodeValue = '加入帮派 ';
                e.childNodes[2].nodeValue = ' 的申请已' + rsDict[virusName] + '。';
                return;
            }
        });
    }

    /**
     * 页标题按钮content-title-links
     */
    function contentTitleLinksTrans() {
        $('div.content-title-links a span:nth-child(2)').each((i, e) => {
            if (titleLinksDict[$(e).text()])
                $(e).text(titleLinksDict[$(e).text()]);
        });
    }

    /**
     * 页标题翻译
     */
    function titleTrans() {
        if ($('h4#skip-to-content').length === 1)
            if (titleDict[$('h4#skip-to-content').text().trim()])
                $('h4#skip-to-content').text(titleDict[$('h4#skip-to-content').text().trim()]);
    }

}());
