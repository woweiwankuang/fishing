(function () {

    window.onload = function () {
        Vue.component("modal", {
            template: "#modal-template"
        });
        var qus = [{
            'content': '你流落到一个小岛，这个小岛荒芜一物，你只能靠捕鱼为生。岛上有一些居民，他们每天在海里捕鱼。不过海里的鱼非常狡猾，一般人捕一天也只能抓到一条鱼。而每天每个人也需要吃一条鱼果腹。这个小岛唯一神奇的地方是，这里的鱼永远不会变质，放多久都可以正常使用。今天是你在小岛上的第一天，你的鱼是0。给你两周的时间，你能不能成为岛上的鱼首富呢？'
        },
        {
            'content': '你梦中回到了大城市的生活，灯红酒绿，龙虾撸串。等你醒来才意识到自己多么的饿。第一天你下海捕鱼，虽然是新人，你费了九牛二虎之力，也捕到了一条鱼，下面你的选择来了',
            'options': [{
                'content': '吃掉这条鱼，保持健康',
                'isPlus': true,
                'score': 0,
                'result': '充分消费，吃饱喝足，你今天很开心。+0'
            },
            {
                'content': '只吃半条鱼，节省一下，半条鱼第二天吃',
                'isPlus': true,
                'score': 0.5,
                'result': '你延迟满足，吃了一半，储蓄了0.5条鱼。+0.5'
            }],
            'tip': '这其实就是让大家体会延迟满足，有了钱之后，不要选择即时的消费，而是做到先储蓄再消费，发挥财务资源最大的效用。不要小看这0.5条鱼，任何财富都是积少成多，集腋成裘。'
        },
        {
            'content': '你想到一个好主意，现在你手工下海捕鱼，本来就很愚蠢。为什么不用工具呢？如果能做一个渔网，那你的捕鱼速度不就能大大增加了吗？但是做渔网也有风险，首先你未必能一天就把渔网做成功，其次意味着这一天你就不能捕鱼了，将会挨饿。在你之前打算做渔网的时候，岛上的几个邻居不断嘲笑你：为什么不捕鱼？饿着肚子做这个天晓得是什么的东西？你开始犹豫，这时你会选择',
            'options': [{
                'content': '为了改变现状，必须搏一把，吃苦也忍了',
                'isPlus': true,
                'score': 16,
                'result': '通过自我牺牲（挨饿一天），你终于做出了渔网。拿着新做的渔网闪亮登场，一出场就技惊四座，你往后每天可以捕两条鱼了。+16'
            },
            {
                'content': '还是老老实实捕鱼吧，先保住肚子要紧，避免饿死的风险',
                'isPlus': true,
                'score': 0,
                'result': '日子跟前一天没有什么两样，就这样过去了，你错失了一个可能改变人生的机会。+0'
            }],
            'tip': '消费不足，敢于冒险！选择延迟消费（吃鱼）是为了将来能消费更多的产品（捕更多的鱼），量变到质变是需要时间的。有些事情去做不一定会成功，但不做一定不会成功。另外，人们对于自己不理解的事物，总是充满敌意和嘲笑的。就像你来到长投开始学习理财一样。'
        },
        {
            'content': '小岛来了一艘商船，举办了一场盛大的促销节，各种便宜的东西琳琅满目，有漂亮的衣服、精致的装饰品、穿上之后感觉气质都提升的水晶鞋……你握着手中仅有的鱼蠢蠢欲动，这时你会：',
            'options': [{
                'content': '拿出目前的存鱼买买买，高兴了再说',
                'isPlus': false,
                'score': 16,
                'result': '你的积蓄被你一扫而光。-16'
            },
            {
                'content': '看上的东西太多，向你的朋友糕粒戴借了一笔鱼用于购物，并承诺下月连本带息的还给他',
                'isPlus': false,
                'score': 25,
                'result': '你的积蓄被你一扫而光，并且你还欠下了一屁股债。-25'
            },
            {
                'content': '拒绝诱惑，忍住不买。',
                'isPlus': true,
                'score': 0,
                'result': '你成功将鱼储蓄下来了。+0'
            }],
            'tip': '分清必要、想要、需要。在积蓄不多的起步阶段，这些东西并不是我们所必须要有的。不要只因为便宜就去购买，要想想是不是真的合适并需要，认清其价值，这是富人与穷人思维的很大一个不同点。花钱需要分清哪些是消费行为，哪些是投资行为，能带来回报的就是投资行为，比如买一本书或参加一个训练营等。'
        },
        {
            'content': '你的朋友大锤给你安利了一个据说非常好用的捕鱼器，是他第一次做出来的作品，要价只需要一条鱼。然而你用这个捕鱼器抓了一上午，一条鱼都没有抓到，接下来你会：',
            'options': [{
                'content': '跟丫死磕，花了一条鱼买的捕鱼器怎么能没用的，非要用它捕一条鱼回来才行',
                'isPlus': true,
                'score': 0,
                'result': '你又折腾了半天，发现这个新手捕鱼器根本就是个坏掉的东西，你今天一无所获。+0'
            },
            {
                'content': '放弃，还是用我自己的渔网吧',
                'isPlus': true,
                'score': 3,
                'result': '你一鼓作气的开始捕鱼，竟然捕到3条鱼。+3'
            }],
            'tip': '“据说非常好用”“第一次做”，一看就不靠谱。沉没成本已经产生，就不要在它身上浪费更多的时间精力.人类对于沉没成本非常执着，不肯放弃沉没成本会导致付出更多的无效的成本。最典型的例子就是陷入投资陷阱之后，会不停地往里投钱，期望能够回本'
        },
        {
            'content': '当你结束一天的捕鱼，兴高采烈背着鱼在别人羡慕的目光中回家的时候。一脚踢到了一个神灯，你擦了一下神灯，出来一个神仙。神仙给你两个选择',
            'options': [{
                'content': '把你的一条鱼换成一只马萨拉蒂龟。这只龟可以载着你在岛上到处兜风。不过马萨拉蒂龟每天要吃一条鱼才爬的动。',
                'isPlus': false,
                'score': 8,
                'result': '你买了一个负债。-8'
            },
            {
                'content': '把你的一条鱼换成一个装满鱼的鱼罐，以后每天可以变出一条鱼。',
                'isPlus': true,
                'score': 6,
                'result': '你买了一个资产。+6'
            }],
            'tip': '分清楚资产与负债的定义，能带来现金流的是资产。'
        },
        {
            'content': '经过一系列的磨炼，你已经不是当初流落小岛，茫然失措的那个你了。你发明了工具——渔网，用双手改变了命运，赚得了大量大量的鱼。由于你生产力的提高，打破了小岛原本的宁静。你有时间去做更多的事情，同时岛上也多了许多形形色色的外来人口。现在，你成了岛上远近闻名的富翁，你的财富崛起引起了很多人的注意。',
            'options': [{
                'content': '点击继续',
                'goOn': true,
                'isPlus': true,
                'score': 0,
                'result': ''
            }],
            'tip': ''
        },
        {
            'content': '你已经有了一定的储蓄，也在鱼岛排行榜上有名了。这时岛上另外10个还在手抓鱼的人来找你，他们也想做渔网来捕鱼，想问你借鱼。当然他们也不是白借，他们每借一条鱼，都会还你鱼和利息的。你愿意借多少鱼给他们？',
            'options': [{
                'content': '所有鱼都借给他们',
                'isPlus': false,
                'score': 3,
                'result': '由于你所有的鱼都借出去了，你只能问医生借鱼吃饭，还得给医生更多的鱼，拿回来的利息抵不上借的鱼。-3'
            },
            {
                'content': '部分鱼借给他们',
                'isPlus': true,
                'score': 3,
                'result': '你储存了一部分鱼，不需要找医生借鱼了，拿到的利息还剩了几条。+3'
            },
            {
                'content': '一条都不借',
                'isPlus': true,
                'score': 0,
                'result': '你储存了一部分鱼，不需要找医生借鱼了，但你也没有任何利息。+0'
            }],
            'extra': '你很不幸在去捕鱼的路上不小心踩到了牡蛎，伤了脚，需要在床上静养一天。所以没法捕鱼了。',
            'tip': '不能把所有的储蓄都用于投资（借贷），这就是留应急金的重要性。往大了说，无论你做何种投资，都要做到分散，不要把鸡蛋都放在同一个篮子里，分散是最好的防御。往小了说，需要保证自己的资产有一定的流动性。'
        },
        {
            'content': '捕鱼结束后的你在岛上悠闲的晃荡，这时出现了一个神秘的小贩，他告诉你只要付出5条鱼，就可以加入鱼平台。鱼平台上有很多据说非常珍稀的鱼类，吃了可以延年益寿，当然售价也会高出几倍。付出10条鱼可以享受VIP待遇，不但可以买到延年益寿的珍稀鱼，如果你拉上你的朋友大锤和铁柱一起参与，他们在鱼平台上消费的鱼也会到你的手上。',
            'options': [{
                'content': '跟大锤铁柱商量一下，决定先付出5条鱼试试水',
                'isPlus': false,
                'score': 10,
                'result': '你花5条鱼的价钱买了不少珍稀鱼，结果所谓的珍稀鱼全都是石头做的，根本不能吃，想找小贩理论发现他已经消失了，你悔不当初，但损失的鱼已经回不来了。-10'
            },
            {
                'content': '延年益寿这么好的事，必须参与，大手一挥来个VIP',
                'isPlus': false,
                'score': 19,
                'result': '你花5条鱼的价钱买的珍稀鱼都是假货，大锤和铁柱听了你的话也买了一些珍稀鱼，他们生气的找上门来，你为了息事宁人，额外赔给他们一人2条鱼。-19'
            },
            {
                'content': '残忍拒绝，小贩嘲笑你没有眼光',
                'isPlus': true,
                'score': 0,
                'result': '你安然无恙的躲过了这一劫。+0'
            }],
            'tip': '如果这些珍稀鱼真的这么好，小贩凭什么要把其他人消费的鱼给你呢？搞清楚商品背后的逻辑。切记，不懂的不要碰。'
        },
        {
            'content': '你的鱼越来越多，怎么储存成了一个问题。如果只是放在家里，气味难闻不说，而且还很占地方。其中一个叫郝莹航的人给你带来了一个新的名词：银行。如果把鱼存在银行里，每4条鱼的存款，可以获得鱼的利息。需要用鱼的时候，你随时可以从银行里拿到你的鱼。',
            'options': [{
                'content': '好的，把我的鱼存到银行吧',
                'isPlus': true,
                'score': 1,
                'result': '储蓄可以给你带来利息。 +1'
            },
            {
                'content': '不，我要在岛上挖个洞把我的鱼藏起来',
                'isPlus': true,
                'score': 0,
                'result': '鱼不会自动生鱼。 +0'
            }],
            'tip': '挖个洞藏起来就相当于你把现金放在家里，已经初步有理财意识的你们应该不会这样做吧？学了理财知识就要懂得让鹅生蛋、钱生钱哦'
        },
        {
            'content': '每天两条鱼的捕鱼速度已经不能满足你财富积累的欲望了，有欲望才会有动力开动脑筋。岛上有一个人发明了独木舟，你第一眼就看出了独木舟的作用。如果用独木舟去深海捕鱼，将能够大大提升你的捕鱼速度。不过独木舟制作很复杂，售价昂贵。有两个选择',
            'options': [{
                'content': '先不购买，踏踏实实捕鱼就行',
                'isPlus': true,
                'score': 0,
                'result': '你的生产效率没有任何改变。+0'
            },
            {
                'content': '果断购买',
                'isPlus': true,
                'score': 20,
                'result': '你的生产效率大大提高。+20'
            }],
            'tip': '虽然是花钱，但却是花钱中的投资行为，这个钱并没有花掉，而是最终会给你带来回报。我们在资产与负债里分析过车子的例子，在这里，独木舟可以给我们带来更多的鱼，所以是应该买入的资产哦~这就像花小钱请教专家一样的意思，要懂得利用杠杆，让自己的收益率上涨，那点小钱很快就回来啦'
        },
        {
            'content': '你最后还是有了自己的独木舟。如果你自己划船去捕鱼，每天可以捕4条鱼。船上还可以带一个人。',
            'options': [{
                'content': '雇佣一个人来帮你打渔，你每天可以获得额外的鱼',
                'isPlus': true,
                'score': 10,
                'result': '雇佣来的人每天帮你打渔，你获得了额外的鱼。+10'
            },
            {
                'content': '坚持自己打渔',
                'isPlus': true,
                'score': 0,
                'result': '自己打渔。+0'
            },
            {
                'content': '找了一个合伙人一起打渔，他打的鱼分你一半',
                'isPlus': true,
                'score': 20,
                'result': '合伙人因为自己也能分到鱼，非常卖力，每天会和你分鱼。+20'
            }],
            'tip': '这个道理很简单，合伙人因为自己也能分到鱼，所以非常卖力。而雇佣一个人打渔，他只拿固定工资，而最后收获的鱼多鱼少，跟他关系不大，相对他的积极性就小一点。而自己独自打渔，生产力没有丝毫提高。雇佣的人和合伙人的区别，你明白了吗？'
        },
        {
            'content': '小岛上有一种收藏品（鲸鱼的牙齿），据说极具收藏价值，通常只有酋长级别的人才能拥有。现在有个人用6条鱼的价格卖给你（通常要10条鱼），你会？',
            'options': [{
                'content': '买',
                'isPlus': false,
                'score': 6,
                'result': '扣6条鱼，就没有然后了。-6'
            },
            {
                'content': '不买',
                'isPlus': true,
                'score': 0,
                'result': '没有然后了。+0'
            }],
            'tip': '买收藏品属于纯消费，收藏品本身不能产生任何收益，你放1万年，它也生不出一个小收藏品。只有在卖出的那一刻才能变成现金，问题是，谁来买。像这种本身不产生任何价值的物品，变现功能差，你并不知道什么时候能卖出去，能卖到几条鱼。它的交易可以用两个字来概括：博傻。买入的那一刻就是期望下一个更傻的傻瓜以更高的价格把它买走。'
        },
        {
            'content': '你手上的鱼越来越多，小岛上的其他人，在你的影响和带动下，开始了不同的表演。很快，小岛上的人分成两类：一类是勤快又爱思考的，开始琢磨着怎么捕更多的鱼，以及捕更多的鱼之后，如何“以鱼生鱼”。另一类，懒惰又贪小便宜的，也开始蠢蠢欲动，只不过是另一番做派，此时的你，要怎么去支配你手中巨额的鱼呢？',
            'options': [{
                'content': '点击继续',
                'goOn': true,
                'isPlus': true,
                'score': 0,
                'result': ''
            }],
            'tip': ''
        },
        {
            'content': '最近你手头有了余鱼，到处招摇过市说自己赚了鱼。不少人闻风而来，向你借钱。于是你把手上的鱼借给了',
            'options': [{
                'content': '读书时代帮你递情书的老同学张翠花，不收利息',
                'isPlus': true,
                'score': 0,
                'result': '作为老好人，翠花也没有辜负你，很快还清了你的钱。你的鱼没有变化。+0'
            },
            {
                'content': '老实守信：收入又稳定的邻居张全蛋，他最近打算创业。你能获得2条鱼的利息',
                'isPlus': true,
                'score': 2,
                'result': '张全蛋虽然创业受阻，但依靠收入还是还清了你的本金和利息，你+2条鱼。+2'
            },
            {
                'content': '油腔滑调的自由职业者程大嘴，他想买个玛莎拉龟，你能获得5条鱼的利息',
                'isPlus': false,
                'score': 10,
                'result': '夭寿！程大嘴买了龟之后根本没钱还你。你悔不当初，只想把头放蚌壳里夹一夹好让自己清醒一下。-10'
            }],
            'tip': '这个说的其实就是如何投资债券，既要考虑到借款人的信用，也要考虑到借款人的还款能力，不能只看着高利息，而忽略了风险。想想借出去的钱，别人是用来干什么？有些明显是有去无回的借法，就要好好思量了。你们可以把这三个借款人当成三家公司来分析，翠花公司虽然本份但不能产生效益，就像买了一家不盈利的公司，有必要吗？股东如果不老实会在年报中作假等等，就像油腔滑调的程大嘴，我们分析公司的时候，还要看他借的钱或者赚来的钱拿去干什么了。比如这里，程大嘴拿去做的事情不是为了赚多的钱，这会让公司的可持续经营带来问题。'
        },
        {
            'content': '你碰到了之前在保险公司工作过的老友，号称保险界的“万事通”。她根据现身说法，推荐了一种叫做“返还型”的保险，并告诉你这种类型的险种在保障的同时还能强制储蓄，老了还能拿回本金，非常适合你！于是你决定：',
            'options': [{
                'content': '你听从了老友的建议，毕竟又有保障又能返还本金，两全其美何乐而不为？',
                'isPlus': false,
                'score': 10,
                'result': '你花费10条鱼购买了一份返还型保险，风险来临时你有保险，没有额外付出。-10'
            },
            {
                'content': '虽然老友号称保险万事通，但你还是决定先系统的学习一下再决定',
                'isPlus': false,
                'score': 5,
                'result': '你花费1条鱼系统的学习了之后，选择了一份消费型保险，只需要4条鱼，风险来临时你有保险，没有额外付出。-5'
            },
            {
                'content': '保险这么复杂，听的我头都大了，干脆什么都不买',
                'isPlus': false,
                'score': 20,
                'result': '你没有买保险，风险来临了，你要自己出医疗费。-20'
            }],
            'tip': '保险很重要，每个人都要考虑的，但是前提是先学习好保险的选择和配置等相关的专业知识，不然就会花费不必要的开支.'
        },
        {
            'content': '张全蛋虽然第一次创业失败了。但他还清债务后，决定东山再起，仔细调研了岛上的需求和市场之后，他要开一家双鱼座火锅店，专门做鱼火锅，初期资金不足，还是决定来向你求救，你会：',
            'options': [{
                'content': '开公司!?有前途，付一大堆鱼一起创立公司，你占股50%。',
                'isPlus': true,
                'score': 20,
                'result': '全蛋是人才，你们的火锅店非常成功，你的股权大涨。获利20条鱼。+20'
            },
            {
                'content': '一起开公司风险太大，用借的吧，到时候还我。',
                'isPlus': true,
                'score': 3,
                'result': '全蛋是人才，他的火锅店非常成功，不过这与你关系不大，你只是赚到了利息。+3'
            },
            {
                'content': '不了，地主家也没有余粮，我还是抱着现金靠谱。',
                'isPlus': true,
                'score': 0,
                'result': '全蛋是人才，他的火锅店非常成功，不过这与你没啥关系，只是你去店里吃火锅他送了一包纸巾给你。+0'
            }],
            'tip': '股权跟债权是不一样的，股权能够分享经营收益，同时也要承担经营风险。而债权则是拿固定利息的，公司经营情况跟债权人没有关系，公司经营的好，也不会多分你一分钱，经营的坏，也不会少付你一分钱利息。当然，前提是公司有能力还款。这次他调研了岛上的需求和市场，有备而来，所以成功了'
        },
        {
            'content': '清晨的时候，你在岛上散步不小心踩到一个神灯，一擦，我擦，竟然出来一个精灵（怎么又是你！）！它说有个股票推荐给你，明天就会大涨，包赚不赔。你打算如何做？',
            'options': [{
                'content': '全仓买入，把所有的鱼买股票!',
                'isPlus': false,
                'score': 5,
                'result': '精灵是个坑，股票大跌，损失5条鱼，你哭的像个200斤的孩子。-5'
            },
            {
                'content': '好机会，花一半的鱼买!',
                'isPlus': false,
                'score': 2,
                'result': '精灵是个坑，股票大跌，损失2条鱼，你哭的像个200斤的孩子。-2'
            },
            {
                'content': '认怂，象征性地买1条',
                'isPlus': false,
                'score': 1,
                'result': '精灵是个坑，股票大跌，损失1条鱼，你哭的像个200斤的孩子。-1'
            },
            {
                'content': '抬杠，一条都不买，把这傻X精灵塞回瓶子里',
                'isPlus': true,
                'score': 0,
                'result': '精灵是个坑，股票大跌，还好你把它塞回去了，安然无恙。+0'
            }],
            'tip': '无论他是精灵还是隔壁老王，是大师还是神棍，投资决策不能交给别人，必须自己来判断。除了你自己，没人会为你的钱负责。投资自己，提高自己的投资能力才是唯一的途径，就像我们之前说的，唯一稳赚不赔的投资，就是投资你自己。'
        },
        {
            'content': '好友赵铁柱投资股票大丰收，赚了10条鱼，比你一条一条抓来狩快多了。你打算试水投资，你决定投资哪只股票',
            'options': [{
                'content': '乐鱼网，它是过去2年涨得最好的股票',
                'isPlus': false,
                'score': 2,
                'result': '花无百日红，乐鱼网过去两年涨太多，今年萎了，你亏损了2条鱼。-2'
            },
            {
                'content': '冷鱼投资，一家小公司，知道的人不多，但生意很好',
                'isPlus': true,
                'score': 5,
                'result': '公司生意越来越好，也被越来越多的人了解，股价大涨，你赚了5条鱼。+5'
            },
            {
                'content': '辣鱼集团，一家经营不善的辣鸡公司',
                'isPlus': true,
                'score': 0,
                'result': '辣鸡公司今年萎靡不振，不涨不跌。+0'
            },
            {
                'content': '超鱼股份，明星公司，身边的股民都在买它',
                'isPlus': false,
                'score': 10,
                'result': '跟风害死人，明显公司今年跌了90%，亏得内裤都不剩。-10'
            }],
            'tip': '这题有意思，我们来重点说明一下。我们投资的决策应该是什么呢？股票的涨幅？股价的高低？公司的有名程度？都不是，我们投资的唯一决策应该是公司的估值，什么是公司的估值呢？就是估算公司应该具有的价值。如何来估值呢？通过分析公司的经营情况，公司的盈利能力，公司的护城河等情况，才有可能正确地估算出公司大致的价值。我们看选项B，冷鱼投资，一家小公司，知道的人不多，但生意很好。重点在于生意很好，生意好意味着能赚钱，知道的人不多，是冷门，买的人很少，需求不足，往往是低估状态价格很低时买入大概率能赚钱。所以，我们应该投资的公司应该是，便宜的好公司。至于选项C，因为经营不善，所以也是不能赚钱的。当然游戏里面是简化条件，现实我们买入一只股票需要对财报进行分析研究的哦'
        },
        {
            'content': '股市进入大牛市，整个小岛陷入狂欢，闺蜜李小花大赚了一笔，最近天天挎着新买的鱼奈尔包显摆，并且告诉你再不进去捡钱，就来不及了。听完她的劝告，你打算：',
            'options': [{
                'content': '立刻补救，投入10条鱼',
                'isPlus': false,
                'score': 5,
                'result': '牛市一时爽，过后火葬场，牛市很快结束了，你投进去的鱼大亏。-5'
            },
            {
                'content': '保险起见，先投2条鱼试试',
                'isPlus': false,
                'score': 1,
                'result': '牛市一时爽，过后火葬场，牛市很快结束了，你投进去的鱼亏损50%。-1'
            },
            {
                'content': '不理这个爱慕虚荣的女人，认真抓鱼',
                'isPlus': true,
                'score': 0,
                'result': '牛市一时爽，过后火葬场，牛市很快结束了,李小花赚的钱全部亏光了，你深表同情（非常开心）。+0'
            }],
            'tip': '巴菲特说过，牛市是大部分投资者亏损的原因。大家听着这话是不是觉得很奇怪？其实，很多从来没有学习过投资的股民，他们都是什么时候开户的呢？答案是大牛市的中期。在牛市的前期他们是无动于衷的。等到股市上涨，所有的新闻都在报道，很多人就按耐不住内心的冲动。尤其是隔壁老王经常来炫富，他心里就想，老王能赚钱，我也能赚钱，怀着到股市去捡钱的心态，他的钱包最终被别人捡走了。既然牛市的时候投资股票会亏损，那什么时候投资股票才能赚钱呢？这个问题就又要回到估值上。'
        },
        {
            'content': ' 与岛上各种人周旋之后，你开始总结出自己的经验和技巧，渐渐知道该怎么判断：该把鱼投资给谁：该把鱼借给谁。你发现，鱼还真是个神奇的东西!从每个人对待"鱼"的态度，可以看出这个人对待生活的态度。随着鱼越来越多，岛上掀起了一股关于"鱼"的热潮......',
            'options': [{
                'content': '点击继续',
                'goOn': true,
                'isPlus': true,
                'score': 0,
                'result': ''
            }],
            'tip': ''
        },
        {
            'content': '好朋友赵铁柱最近也决定创业了。他拍脑门想了一个方案，专门做鱼子羹，名字就叫双子座餐厅，初期资金不足，决定向你求救，借10条鱼',
            'options': [{
                'content': '上次全蛋的双鱼火锅辣莫成功，这次不能再错过了一起创立公司!',
                'isPlus': false,
                'score': 10,
                'result': '铁柱是个“人才”，双子座餐厅没开2个月就关门大吉，你的钱打了水漂。-10'
            },
            {
                'content': '铁柱这项目不靠谱啊，劝他放弃。',
                'isPlus': true,
                'score': 0,
                'result': '铁柱是个“人才”，双子座餐厅没开2个月就关门大吉，他后悔当初没听你的意见。你收获了一个“备胎”。+0'
            },
            {
                'content': '不看好铁柱的项目，假装失踪，拒绝开门',
                'isPlus': true,
                'score': 0,
                'result': '铁柱是个“人才”，双子座餐厅没开2个月就关门大吉，他将责任推到你头上。你失去了一个朋友。+0'
            },
            {
                'content': '保险起见，还是借钱给他开公司吧，拿1条鱼的利息就行了。',
                'isPlus': false,
                'score': 10,
                'result': '铁柱是个“人才”，双子座餐厅没开2个月就关门大吉，你的钱他还不上了，你损失了10条鱼。-10'
            }],
            'tip': '拍脑门子想的方案，大家觉得靠谱么？创业可不是看到大家做得好你就去做了，需要前期做大量的考察和调研的哦'
        },
        {
            'content': '你前几次在借钱市场的“惊艳”表现，吸引了其他的想借钱赚钱的人。今时不同往日，现在的你已经是老司机了。握着手里的鱼，你会把钱借给（本题不考虑流动性与沉没成本）',
            'options': [{
                'content': '白羊鱼加工项目，借钱周期半年',
                'isPlus': true,
                'score': 1,
                'result': '白羊鱼项目风风火火，半年就完成了，你获得了1条鱼的收益。+1'
            },
            {
                'content': '天蝎鱼屠宰项目，借钱周期1年',
                'isPlus': true,
                'score': 2,
                'result': '天蝎鱼不紧不慢，1年后如期完成，你获得了2条鱼的收益。+2'
            },
            {
                'content': '金牛鱼养殖项目，借钱周期5年',
                'isPlus': true,
                'score': 5,
                'result': '金牛鱼细水长流，兴致慢慢，5年后才完成，你获得了5条鱼的收益。+5'
            },
            {
                'content': '劳资自己留着，不借',
                'isPlus': true,
                'score': 0,
                'result': '另外3个项目都赚到了钱。你就当这件事情没有发生过吧。+0'
            }],
            'tip': '这个对应的是国债等理财产品，债券的收益跟时间相关，时间越长，收益也越高，这很好理解，五年期定存比一年期定存的利息高，就是这个道理。'
        },
        {
            'content': '很多人看到岛上的闲鱼越来越多，看到别人都能借到钱，于是也想去借，奈何他们名声不够，家底一般，经常借不到钱。于是，有人成立了Y2Y公司(鱼2鱼)，专门筹集资金，借给其他人，收益好像很高，你打算',
            'options': [{
                'content': '借出大量鱼，期待大赚一笔',
                'isPlus': false,
                'score': 5,
                'result': 'Y2Y这个坑货，拿了钱就跑路，你损失了5条鱼。-5'
            },
            {
                'content': '借出少量鱼，保守一点，能赚一些是一些了',
                'isPlus': false,
                'score': 2,
                'result': 'Y2Y这个坑货，拿了钱就跑路，你损失了2条鱼。-2'
            },
            {
                'content': '一鱼不拔，不借',
                'isPlus': true,
                'score': 0,
                'result': 'Y2Y这个坑货，拿了钱就跑路。你为自己的机智点赞，见人就吹嘘自己当初的明智。+0'
            }],
            'tip': '这题就是影射现在的P2P。之前我们说过，投资债券的时候，不仅要考察借款人的信用，更要考察借款人的还款能力。P2P的风险在于，你不知道你的钱到底借给了谁，信用如何，还款能力如何。P2P平台在利息上是有边际效应的，给投资者分越多的利息就证明他要从借款人手上拿更多的利息，坏帐率肯定就高了，风险就高了；不排除有好的平台，但是要花费大量精力去做考察，相比收益率并不值得'
        },
        {
            'content': '股市死气沉沉，连续跌了很久，已经进入了熊市。你好心请新闺蜜王二丫一起吃烤鱼，她却劝你进股市炒股？！你细细分析后，决定',
            'options': [{
                'content': '转手就走，不再理她这个害人精',
                'isPlus': true,
                'score': 0,
                'result': '股市结束了熊市，大涨1倍，你错失赚钱机会，“害人精”王二丫来嘲讽你目光短浅。+0'
            },
            {
                'content': '给她个面子，嘴上说好就行，别伤了和气',
                'isPlus': true,
                'score': 0,
                'result': '股市结束了熊市，大涨1倍，王二丫来问你买的股票涨的如何，你只能呵呵一笑。+0'
            },
            {
                'content': '听她的意见，买2条试试水',
                'isPlus': true,
                'score': 4,
                'result': '股市结束了熊市，大涨1倍，你赚了一丢丢，不知道是该开心还是蓝过。+4'
            },
            {
                'content': '相信她的逻辑，大手一挥买了10条',
                'isPlus': true,
                'score': 20,
                'result': '股市结束了熊市，大涨1倍，你大赚一笔，给王二丫寄了个鱼骨项链以表谢意。+20'
            }],
            'tip': '昨天我们说了，应该在什么时候投资股市呢，不是牛市，而是熊市，在别人贪婪时恐惧，在别人恐惧时贪婪，熊市的时候往往是股票低估可能性更高的时候，这时候大概率能买到便宜的股票所以我们应该在低估的时候开始投资。这里上一点干货。就是系统性机会和系统性风险的识别。平均PE在10倍左右，这就是系统性机会；超过25倍，从价值的角度就要警惕。超过40倍，就是绝对的系统性风险。虽然很多时候，平均PE是10倍时股市并未见底，但根据统计，在10倍PE之内进入股市，只要股市不关门都有不错的结果，反之亦然。简单地说就是，在一个低于10倍PE的股市中选股票，是在金矿里淘金；而在一个高于40倍PE的股市里选股票，更像是在垃圾堆里淘金。'
        },
        {
            'content': '你打算认真开始选股票了，你打算采用的策略是：',
            'options': [{
                'content': '挑股价最便宜的买，便宜才会涨',
                'isPlus': true,
                'score': 0,
                'result': '你买的破股，不涨不跌。看来买股不是买白菜，不是单价越低越好。+0'
            },
            {
                'content': '去向岛里的高手学一下股票分析方法再决定，不过这会消耗你2条鱼',
                'isPlus': true,
                'score': 8,
                'result': '通过学习，你甄别出了靠谱的投资方法，选出了牛股。赚了10条鱼。+8'
            },
            {
                'content': '挑最有名气的股票买',
                'isPlus': false,
                'score': 2,
                'result': '坑爹，没想到有名气的股票不一定是好股票，你亏了2条鱼。-2'
            },
            {
                'content': '向岛里的股票专家买股票代码，不过这会消耗你3条鱼',
                'isPlus': false,
                'score': 6,
                'result': '坑爹！你刚买完，那个砖家就因为非法荐股被抓了，你买的股票也亏了3条鱼。-6'
            }],
            'tip': '不是股价越便宜越会涨，还是要回到股票投资的根本上来，用估值去衡量股价是便宜还是贵；名气越大的股票通常价格也会被抬得越高；靠山山会倒，靠人人会跑专家、股神等等荐股都是不可靠的，还是要靠自己分析公司做投资决策；还是那句话，只有投资自己才是稳赚不赔的买卖。先学习再投资，如此，才能立于不败之地。'
        },
        {
            'content': ' 小岛已经不再是从前的小岛了。开始，这里一片荒芜，死气沉沉；但是在鱼丰富了之后，人们开始不仅仅为果腹发愁，而衍生出了各种玩法。这一切的一切，都要归功于你——当初萌生了发明"渔网"的想法。岛上的人给你一个封号：“鱼神”，与此同时，岛上的经济也越来越欣欣向荣。小哥哥小姐姐们也不再穿着简陋的树叶装，而开始打扮起来，一些人由于长相出众，还成为了为鱼带盐的明星，当然，明星中，也不乏一些戏精......',
            'options': [{
                'content': '点击继续',
                'goOn': true,
                'isPlus': true,
                'score': 0,
                'result': ''
            }],
            'tip': ''
        },
        {
            'content': '岛上经济欣欣向荣，你也有了存款。有个叫美人鱼基金的公司创立了好几只基金，并且邀请你参与投资。由于销售员小哥哥长得有点像杨洋+李易峰+鹿晗，你很认真地听了他的介绍，经过思考最后决定',
            'options': [{
                'content': '大手一挥买入指数基金',
                'isPlus': true,
                'score': 4,
                'result': '指数基金收益很好，你赚到了4条鱼。小哥哥诚不我欺也。+4'
            },
            {
                'content': '保守一点买些债券基金',
                'isPlus': true,
                'score': 2,
                'result': '债券基金收益一般，但也有2条鱼收益进账。不知道哪个小哥哥啥时候再来。+2'
            },
            {
                'content': '小哥哥虽好但不敢贪杯，买点鱼额宝吧',
                'isPlus': true,
                'score': 1,
                'result': '鱼额宝为你带来了1条鱼的收益。小哥哥的鱼额宝也很一般嘛。+1'
            },
            {
                'content': '拿到了小哥哥的微信之后就把他赶走了',
                'isPlus': true,
                'score': 0,
                'result': '在微信上给小哥哥发了138条消息，他都不回。哎，这个冷漠的社会对小仙女太残酷了。+0'
            }],
            'tip': '这题其实就是告诉大家基金的种类，指数基金，债券基金，货币基金；指数基金是股票基金的一种，长期收益在10%左右；债券基金长期收益在6%左右；货币基金长期收益是3~4%；基金购买平台只是手续费等细节的差异影响不大，收益和风险起决定性的是基金的类型。'
        },
        {
            'content': '美人鱼基金发展壮大，岛上的基金越来越多，最近还举办了个主题为“基情四射”的基金节。上次的投资经历给了你很多启发，你决定要好好赚一把。但是，在节日会场，各个基金公司眼花缭乱，销售小哥哥个个都迷死人，你通过研究后，决定选择',
            'options': [{
                'content': '过去1年涨得最好的基金，不会太差，果断买它',
                'isPlus': false,
                'score': 1,
                'result': '辣鸡啊！过去1年涨得那么好，为什么劳资/老娘一买就跌，你损失1条鱼。-1'
            },
            {
                'content': '哇，那个亚麻色头发的小哥哥，长着一张未婚夫的脸，买他吧，哦不，买他的基金。',
                'isPlus': true,
                'score': 1,
                'result': '没想到亚麻小哥哥的基金表现竟然那么一般，只赚了1条鱼。+1'
            },
            {
                'content': '暂时不太会选，选一只基金定投吧',
                'isPlus': true,
                'score': 5,
                'result': '定投很稳，虽然不断波动，但最终你收获了5条鱼。+5'
            },
            {
                'content': '选实力最强：规模最大的那只基金',
                'isPlus': false,
                'score': 1,
                'result': '大基金也不靠谱，跟了半天，竟然还亏了1条鱼。-1'
            }],
            'tip': '过去的业绩不能代表未来；基金买之前要进行分析；实力最强的基金并非一定是最能赚钱的，还要结合基金经理人的能力、工作年限等统合分析；定投的威力，是可以不断摊薄成本，帮助我们实现盈利。'
        },
        {
            'content': '你买入了一只靴之圈小哥的基金。因为这支基金与众不同一路飞涨。但是天有不测风云，人有隐形瘪三。你买入之后，基金开始下跌，你分析了一番，觉得这只基金还不错，但是之前价格买高了，你决定',
            'options': [{
                'content': '三十六计走为上，果断割肉出逃',
                'isPlus': false,
                'score': 2,
                'result': '割肉让你损失了2条鱼。之后靴之圈基金回升让你心痛不已。-2'
            },
            {
                'content': '正面刚，一次性再补仓，摊薄成本',
                'isPlus': false,
                'score': 3,
                'result': '没想到靴之圈一而再：再而三地萎靡，你的补仓导致亏损增大，接了飞刀。亏损了3条鱼。-3'
            },
            {
                'content': '保守一些，每个月定投一点',
                'isPlus': true,
                'score': 3,
                'result': '虽然之后靴之圈继续来回波动，但鸡贼的定投操作，还是使你赚到了3条鱼。+3'
            },
            {
                'content': '保持观望，不要轻举妄动',
                'isPlus': false,
                'score': 2,
                'result': '没想到靴之圈一而再：再而三地萎靡，你仍然亏损2条鱼。-2'
            }],
            'tip': '很多时候一个基金的涨或跌之后什么时候卖出，取决于当时有没有认真分析过该基金，如果是确定好基金的话，那么跌了也不怕可以继续加仓；这题讲的还是定投的威力'
        },
        {
            'content': '岛上的长者要大家筹资一起建自来水管，赚得的钱，将以分红返还给大家。你仔细考察了，这个项目非常靠谱，而且对全民有利。你打算',
            'options': [{
                'content': '把所有的鱼投资到该项目',
                'isPlus': false,
                'score': 1,
                'result': '自来水项目大获成功，你赚到了5条鱼。但你在第二天不小心踩到了牡蛎无法工作，却没有应急鱼，只得紧急去借高利贷鱼，付出了6条鱼的成本。最后还亏了1条鱼。-1'
            },
            {
                'content': '把大部分的鱼投资到该项目，留一部分供自己吃',
                'isPlus': true,
                'score': 4,
                'result': '自来水项目大获成功，你赚到了4条鱼。虽然你在第二天不小心踩到了牡蛎无法工作，但还好你留有应急鱼，安全度过难关。赚的4条鱼。+4'
            },
            {
                'content': '投资小一部分，大部分鱼自己留着',
                'isPlus': true,
                'score': 1,
                'result': '自来水项目大获成功，但你投的太少，赚了1条鱼。+1'
            },
            {
                'content': '一鱼不投',
                'isPlus': false,
                'score': 1,
                'result': '自来水项目大获成功，但都与你无关。同时，为了购买自来水使用权，你还支付了1条鱼。-1'
            }],
            'tip': '考察了很靠谱，相当于我们学习研究过了，所以可以投资，这也是投资之前需要做的功课，将直接影响接下去的买卖操作。应急金很重要，不能把所有钱都拿来投资哦。'
        },
        {
            'content': ' 随着鱼越来越多，你成为了岛上赫赫有名的人，由于你低调谦逊，又乐于交朋友，人们经常叫你"了不起的盖茨鱼”。各种豪华的舞会趴体都邀请你出席。',
            'options': [{
                'content': '点击继续',
                'goOn': true,
                'isPlus': true,
                'score': 0,
                'result': ''
            }],
            'tip': ''
        },{
            'content': '你参加了一个主题叫"闻基起舞"的小岛舞会。舞会上，各色莺(yao)莺(yan)燕(jian)燕(huo)穿着草裙：戴着贝壳项链搔首弄姿，你决定独自到海滩透透气。这时候，又遇到3个基金销售小哥哥(真是遍地是基)，你决定买其中一个人的基金，你会买哪只? ',
            'options': [{
                'content': '买那只“高风险”的，因为高风险才有高收益',
                'isPlus': false,
                'score': 2,
                'result': '果然是“高风险”，你损失了2条鱼！看了高风险不等于高收益啊。-2'
            },
            {
                'content': '买那只“低风险”的，不过收益好像会很低',
                'isPlus': true,
                'score': 2,
                'result': '低风险的，竟然让你赚了2条鱼！看来低风险不一定是低收益呀。 +2'
            },
            {
                'content': '买那只“低收益”的，因为低收益一般代表了低风险，不会亏钱',
                'isPlus': false,
                'score': 1,
                'result': '坑爹！真的是“低收益”，负收益！当然低了！你亏了1条鱼。-1'
            }],
            'tip': '大家要理解风险和收益并不一定划等号哦，高风险并不等于高收益，并不一定是富贵险中求。有时候高收益往往来自低风险。举个最简单的例子，在熊市底部，大量的便宜的股票，这个时候买入，下跌的风险已经非常小了，但是未来上涨的空间却是非常大。这就是低风险高收益。风险来自于哪里呢？风险来自于高估值，估值贵了，就有人卖出，就会下跌，估值便宜了，就有人买入，就会上涨。这是股票市场颠簸不平的真理。最终，我们还是回到估值上面来，只要你学会了估值，就相当于你已经立于不败之地了。'
        },{
            'content': '你家里有了一堆的鱼了，脱离了忍饥挨饿的穷逼岁月，现在的你很有安全感。但是，身边的人却劝你应该去投资理财。你决定 ',
            'options': [{
                'content': '听他们的，去学习一下，不过这会消耗1条鱼',
                'isPlus': true,
                'score': 5,
                'result': '投资世界别有洞天，你学到了有用的投资方法，并且开始了第一次投资，扣除学习成本，还是赚到了5条鱼。+5'
            },
            {
                'content': '直接参与投资，买入股票和基金，还可以省鱼',
                'isPlus': true,
                'score': 2,
                'result': '不知道是狗屎运还是咋地，第一次投资竟然赚到了2条鱼。+2'
            },
            {
                'content': '保守起见，还是守着鱼比较好',
                'isPlus': false,
                'score': 1,
                'result': '虽然鱼数量没有减少，但鱼却被风干缩水了，通货膨胀发生了！你反而损失了1条鱼。-1'
            }],
            'tip': '股票市场对于资金是没有门槛的，100元都可以开始投资，但是对于投资知识是有门槛的，并不是随随便便就能赚钱的。有人选B嘛？运气有的时候也会让我们赚钱，但这个往往是无法长期持续的。第一题，我们说风险来自于高估值，其实只说到了一方面，风险还来自于投资者的投资体系。投资就是要管好风险，利润会管好他自己。那我们学习投资是为了什么呢？就是要慢慢地完善自己的投资体系，赚取稳定的收益。另外，送大家一句话，要投资，先学习。'
        },{
            'content': '你岛上举办篝火晚会玩得太过高兴不小心摔破了头......马大哈的悲伤。为防止下次再摔破头，导致没法捕鱼甚至挂掉，你应该怎么办? ',
            'options': [{
                'content': '买个意外+医疗，花了1条鱼',
                'isPlus': false,
                'score': 1,
                'result': '果然，一个月后你又摔伤住进了医院，医疗费1 0条鱼，还好，保险救了你。你没有损失。-1'
            },
            {
                'content': '买个返还型的理财险，花了2条鱼',
                'isPlus': false,
                'score': 12,
                'result': '一个月后你又摔伤住进了医院，医疗费10条鱼。哼哼，你以为你买了保险，但是买错了！保险公司不给赔！-12'
            },
            {
                'content': '意外险，重疾险，医疗险和人寿险都买，花了4条鱼',
                'isPlus': false,
                'score': 4,
                'result': '果然，一个月后你又摔伤住进了医院，医疗费1 0条鱼，还好，保险救了你。你没有损失。-4'
            },
            {
                'content': '从此不再参加活动，宅在家里',
                'isPlus': false,
                'score': 10,
                'result': '整整1个月宅在家不运动，你头晕眼花导致摔破了头，医疗费10条鱼。-10'
            }],
            'tip': '这道题是考大家的保险知识的，摔破头属于意外，住院属于医疗。我们说风险无处不在，未来无法预测，我们唯一能做的，就是配置好保险，做好万全的准备，好让自己没有后顾之忧。但并不是买了保险就能高枕无忧，如果你买了不合适的保险，不仅浪费了宝贵了财务资源，更重要的是在风险发生时还得不到赔付，所谓赔了夫人又折兵。如何配置适合自己家庭情况的保险，也是需要大家去学习的。'
        },{
            'content': '现在，你有很多鱼了，有2个职业投资人告诉你可以帮你赚到更多的鱼。其中一个叫大锤的说自己眼光独到，已经投资成功了数个有潜力的公司。另一个叫二锤的说自己没有什么秘诀，只是帮你平均投资到各个公司。你会选择 ',
            'options': [{
                'content': '大锤',
                'isPlus': false,
                'score': 5,
                'result': '大锤看走了眼，投了一个烂公司。-5'
            },
            {
                'content': '二锤',
                'isPlus': true,
                'score': 5,
                'result': '二锤投资的公司有赚有亏，总体是赚的。+5'
            },
            {
                'content': '拒绝他们，自己投资',
                'isPlus': false,
                'score': 10,
                'result': '你既没有大锤分析公司的经验，也没有二锤的投资策略，亏了很多钱。-10'
            }],
            'tip': '这一题说的其实就是分散风险的重要性。鸡蛋不要放在同一个篮子里，这样即使一个篮子发生风险，也不会影响整体的表现。基金课要重点讲的指数基金，其实就是一种分散化的投资方式，大家要好好听讲哦~'
        },{
            'content': ' 随着人们手里的鱼越来越多，岛上开始变得不太平：先是有偷鱼贼，抢鱼盗频繁出没；然后，台风地震又频繁一个接一个地来。嗯，你仔细想想，其实这并不是因为鱼变多而带来的，而是本就存在。从前鱼太少，每天一条就吃掉了，根本没有条件。鱼少有鱼少的活法，嗯，但是鱼多了昵?也要有鱼多时的活法。',
            'options': [{
                'content': '点击继续',
                'goOn': true,
                'isPlus': true,
                'score': 0,
                'result': ''
            }],
            'tip': ''
        },{
            'content': '最近岛上越来越不太平，先是有偷鱼贼，抢鱼盗频繁出没，台风，地震又频繁出现，你感叹世道维艰，应该给自己配置保险，万一出现意外，至少能体面地活着。于是你 ',
            'options': [{
                'content': '给自己买了意外险，花费1条鱼',
                'isPlus': false,
                'score': 1,
                'result': '接下来的几年，岛上太平无事，你也没有发生任何意外。-1'
            },
            {
                'content': '给自己买好意外险和寿险，花费2条鱼',
                'isPlus': false,
                'score': 2,
                'result': '接下来的几年，岛上太平无事，你也没有发生任何意外。-2'
            },
            {
                'content': '给自己配置多样的完整的保险，包括意外险，寿险，分红险，储蓄险等，花费8条鱼',
                'isPlus': false,
                'score': 8,
                'result': '接下来的几年，岛上太平无事，你也没有发生任何意外。-8'
            },
            {
                'content': '光脚的不怕穿鞋的，劳资不配保险',
                'isPlus': true,
                'score': 0,
                'result': '接下来的几年，岛上太平无事，你也没有发生任何意外。0'
            }],
            'tip': '买了保险不一定就会有风险哦，但保险是最重要的风险管理工具，是投资的基石，没有保险就是裸奔。游戏中可能出现没有出现风险的情况，但我们不能存在侥幸心理，未来无法预测，只有做好万全的准备，方可无后顾之忧。另外要注意自己需要哪些险种，如果没有系统的学习的话，很可能额外花费了不必要的保费哦。大家对D答案不服气，其实也恰好说明了穷人思维，想想看，我们是愿意发生意外还是爽快的花点小钱呢？'
        },
        {
            'content': '很多年轻人慕名而来拜你为师，你决定',
            'options': [{
                'content': '成立一家公司让年轻人为你干活，年轻人也可以顺便学习你的经验',
                'isPlus': true,
                'score': 5,
                'result': '你的公司越办越红火。+5'
            },
            {
                'content': '拒绝他们',
                'isPlus': false,
                'score': 3,
                'result': '年轻人自己创业，成了你的竞争对手。-3'
            }],
            'tip': '这个没什么好解释的，与人方便自己方便，互惠互利。是让他们给你打工，还是放任他们变成竞争对手？富爸爸穷爸爸的书里有一句，用别人的钱，用别人的时间，为自己赚钱'
        },{
            'content': '岛上还有些原住民很穷，岛上的酋长来和你商量帮帮他们',
            'options': [{
                'content': '你决定每天给1 0户穷苦人家发放2条鱼',
                'isPlus': false,
                'score': 3,
                'result': '人心是不足的，你帮助的穷苦人家每天不干活吃了你给的鱼，还骂你为富不仁，给的太少了。-3'
            },
            {
                'content': '你给每个愿意学习捕鱼技术的人发放每人1条鱼',
                'isPlus': true,
                'score': 2,
                'result': '你帮助的人学成以后都去了你的公司，帮助你赚更多的鱼。+2'
            }],
            'tip': '授人以鱼不如授人以渔，就像大家来到训练营里，不会直接给你们具体的理财标，而是教你们理财技能，只有技能在身才是你们自己的，可以自己去思考去分析去选择'
        },
        {
            'content': '大锤最近想买保险，听说你比较了解，来向你请教，你会',
            'options': [{
                'content': '想到自己之前一直平安无事，告诉他别花这冤枉钱。',
                'isPlus': false,
                'score': 4,
                'result': '过了两天大锤受伤摔断了腿需要治疗费8条鱼，你深感愧疚资助了他4条鱼。（风险无处不在）-4'
            },
            {
                'content': '根据你学到的知识给他讲解了一番，并建议他要买',
                'isPlus': true,
                'score': 2,
                'result': '过了两天大锤受伤摔断了腿需要治疗费8条鱼，但是因为买了保险，保险公司赔偿了医疗费。大锤对你十分感激，送了你2条鱼。+2'
            },
            {
                'content': '你对保险一窍不通，让他自己做决定',
                'isPlus': false,
                'score': 4,
                'result': '大锤过了两天大锤受伤摔断了腿需要治疗费8条鱼，但由于他不懂得基础知识，花6条鱼买了分红型理财险，不在赔付范围内所以需要自己出医疗费。你深感愧疚，资助了他4条鱼。-4'
            }],
            'tip': '这个其实也是告诉我们，不要因为一直平安无事，就忽略了未来的意外可能。也不是配置了保险就能转移风险的，关键还是要配置合适的保险，险种要合适，保额要充足，保费要适当。保险知识，一人学会全家受益，学到了可以帮助家人配置，也可以给朋友好的建议。'
        },
        {
            'content': ' 关于“鱼”的故事越来越多，玩鱼的方法也层出不穷，不禁令人眼花缭乱。你也创办了鱼公司，当上了鱼老板。你公司旗下有上百名员工，手上有吃不完的鱼。人们见你发达，纷纷跟着效仿，整个小岛的经济呈现出欣欣向荣的态势，进入了快速增长期，各种鱼公司如雨后春笋出现。',
            'options': [{
                'content': '点击继续',
                'goOn': true,
                'isPlus': true,
                'score': 0,
                'result': ''
            }],
            'tip': ''
        },
        {
            'content': '你的渔船上一个年轻人打渔遇到大风浪失联了，他的家属前来申请赔偿',
            'options': [{
                'content': '赔偿10条鱼给他的家属',
                'isPlus': false,
                'score': 30,
                'result': '海上天气变幻莫测，不久又发生了2起事故，你又赔偿了20条鱼 -30'
            },
            {
                'content': '赔偿10条鱼给他的家属，随即给员工买上保险',
                'isPlus': false,
                'score': 11,
                'result': '赔偿了这次，你吸取教训花1条鱼买了保险，从此以后再也不需要赔偿别的家属。-11'
            }],
            'tip': '在财务条件允许的情况下，尽量安排配置保险，综合考虑性价比，以及不要忘了保障才是本质。'
        },
        {
            'content': '整个小岛的经济呈现出欣欣向荣的状况，进入了快速增长期，各种公司如雨后春笋。开公司和投资公司赚钱的人很多。你决定',
            'options': [{
                'content': '拿20条鱼出来投资公司',
                'isPlus': false,
                'score': 4,
                'result': '投资公司是一种高风险投资，你看走了眼，损失4条鱼。 -4'
            },
            {
                'content': '把你10条鱼来投资公司，10条鱼借给别人',
                'isPlus': true,
                'score': 4,
                'result': '合理进行不用投资品的配置，虽然公司损失了2条鱼，但借款利息获得6条鱼。+4'
            },
            {
                'content': '把你10条鱼用来投资公司',
                'isPlus': false,
                'score': 2,
                'result': '投资公司是一种高风险投资，你看走了眼，损失2条鱼 -2'
            }],
            'tip': '这题是属于资产配置的题目，要分散投资品，全部钱都放着不升值就会被通胀蚕食，而如果全部押在高风险投资品上风险很高，所以资产配置很关键。这个就是资产配置中最简单的一种，股债平衡，可以分散风险，降低整个资产的波动性。'
        },
        {
            'content': '岛上炼鱼术士贾鱼亭发明了一种鱼特币：1：借给他多少，随时可以提现(流动性)；2：收益率比其他投资都要高，每借一条鱼每天还两条鱼的利息(收益)；3：风险完全没有，由本岛最德高望重的鱼长老鱼咸平担保(风险)。你准备借给他多少?',
            'options': [{
                'content': '不借',
                'isPlus': true,
                'score': 0,
                'result': '任何投资品都有不能同时满足流动性好，收益高，风险小这3个属性。所以这一定是不靠谱的。+0'
            },
            {
                'content': '借给他10条鱼',
                'isPlus': false,
                'score': 10,
                'result': '任何投资品都有不能同时满足流动性好，收益高，风险小这3个属性。所以这一定是不靠谱的。-10'
            },
            {
                'content': '借给他5条鱼',
                'isPlus': false,
                'score': 5,
                'result': '任何投资品都有不能同时满足流动性好，收益高，风险小这3个属性。所以这一定是不靠谱的。-5'
            }],
            'tip': '任何投资品都有不能同时满足流动性好，收益高，风险小这3个属性，例如P2P公司，拿投资者的钱去放贷，如果给越多利息投资者就意味着要拿借钱人更多利息，这样坏账风险就高了。'
        },
        {
            'content': '一觉醒来，你发现自己只是做了一个梦，你待在一个荒岛上一条鱼都没有，现在',
            'options': [{
                'content': '立刻去捕鱼并且只吃半条',
                'isPlus': true,
                'score': 20,
                'result': '种一棵树最好的时间是十年前，其次是现在！+20'
            },
            {
                'content': '立刻去捕鱼吃完它',
                'isPlus': true,
                'score': 0,
                'result': '种一棵树最好的时间是十年前，其次是现在！+0'
            },
            {
                'content': '今天太累了，休息一天再捕鱼',
                'isPlus': false,
                'score': 10,
                'result': '种一棵树最好的时间是十年前，其次是现在！-10'
            }],
            'tip': '时间匆匆，念着念着就过了，逼一小自己也是过，睡一睡看个剧也是过, 游戏尚可重新来过，奈何现实人生时光一去不复还，你们真的忍心继续得过且过吗'
        }];
        new Vue({
            el: '#app',
            // define data - initial display text
            data: {
                //显示弹框
                showModal: false,
                //显示最后结果
                showResult: false,
                //是否开始
                isStart: false,
                //总分
                score: 0,
                //当前题号
                curIndex: 0,
                //弹框中的提示内容
                tip: null,
                //弹框中是否显示解析
                isShowTip: false,
                optionSymbol: ['A', 'B', 'C', 'D'],
                questions: qus
            },
            methods: {
                start: function () {
                    this.isStart = true;
                    this.curIndex = 1;
                },
                pick: function (item) {
                    if(item.goOn) {
                        this.curIndex++;
                        return;
                    }
                    this.extra = !!this.questions[this.curIndex].extra? this.questions[this.curIndex].extra : null;
                    this.tip = item.result;
                    this.showModal = true;
                    if (item.isPlus) {
                        this.score += item.score;
                    } else {
                        this.score -= item.score;
                    }
                },
                closeModal: function () {
                    this.showModal = false;
                    this.isShowTip = false;
                    if (this.curIndex < this.questions.length - 1) {
                        this.curIndex++;
                    } else {
                        this.showResult = true;
                    }
                },
                showTip: function() {
                    this.isShowTip = true;
                },
                //EventSource长连接 示例
                connect: function() {
                    var that = this;
                    var eventSource = new EventSource('http://localhost:5555/connect?userId=1');
                    eventSource.addEventListener('open', function (e) {
                        console.log('connected');
                    });
                    eventSource.addEventListener('message', function (e) {
                        let data = JSON.parse(e.data);
                        that.score = data;

                    }, false);
                    eventSource.addEventListener('error', function (e) {
                        if (e.readyState === EventSource.CLOSED) {
                            console.log('error');
                        }
                    }, false);
                    eventSource.addEventListener('close', function (e) {
                        console.log('CLOSED');
                    }, false);
                }
            }
        });
    }

})();