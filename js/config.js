// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    fefayish: {api:'http://ffzy5.tv/api.php/provide/vod',name:'🔅非凡影 视ᴴ'},ruyiziyu: {api:'http://cj.rycjapi.com/api.php/provide/vod',name:'🔅如意资源ᴴ'},fesuziyu: {api:'http://fszy1.com/api.php/provide/vod',name:'🔅飞速资源ᴴ'},yimi: {api:'https://www.inmi.app/api.php/provide/vod',name:'🔅映迷ᴴ'},okziyu: {api:'https://api.okzy.org/api.php/provide/vod',name:'🔅ok资源ᴴ'},hahuziyuwa: {api:'https://hhzyapi.com/api.php/provide/vod',name:'🔅豪华资源网ᴴ'},tvkuyish: {api:'https://www.tvkuys.xyz/api.php/app',name:'🔅TV酷影视ᴴ'},kuchziyuwa: {api:'https://caiji.kczyapi.com/api.php/provide/vod',name:'🔅快车资源网ᴴ'},yujiziyuwa: {api:'https://m3u8.apiyhzy.com/api.php/provide/vod',name:'🔅云解资源网ᴴ'},wuji: {api:'https://api.wujinapi.net/api.php/provide/vod',name:'🔅无尽ᴴ'},honi: {api:'https://hongniuzy2.com/api.php/provide/vod',name:'🔅红牛ᴴ'},yihuziyu: {api:'https://yhzy.cc/api.php/provide/vod',name:'🔅樱花资源ᴴ'},honiziyuwa: {api:'https://www.hongniuzy3.com/api.php/provide/vod',name:'🔅红牛资源网ᴴ'},liziziyuwa: {api:'https://cj.lziapi.com/api.php/provide/vod',name:'🔅量子资源网ᴴ'},suboziyuwa: {api:'https://subocaiji.com/api.php/provide/vod',name:'🔅速播资源网ᴴ'},didiziyu: {api:'https://api.ddapi.cc/api.php/provide/vod',name:'🔅滴滴资源ᴴ'},mododoma: {api:'https://caiji.moduapi.cc/api.php/provide/vod',name:'🔅魔都动漫ᴴ'},jisuziyuwa: {api:'https://jszyapi.com/api.php/provide/vod',name:'🔅极速资源网ᴴ'},wujiziyu: {api:'https://api.wujinapi.com/api.php/provide/vod',name:'🔅无尽资源ᴴ'},jiyiziyuwa: {api:'https://jyzyapi.com/provide/vod',name:'🔅金鹰资源 网ᴴ'},kkziyu: {api:'https://kkzy.me/api.php/provide/vod',name:'🔅KK 资源ᴴ'},huyaziyuwa: {api:'https://www.huyaapi.com/api.php/provide/vod',name:'🔅虎牙资源网ᴴ'},piliyiyu: {api:'https://p2100.net/api.php/provide/vod',name:'🔅飘零影院ᴴ'},xilaziyuwa: {api:'https://api.xinlangapi.com/xinlangapi.php/provide/vod',name:'🔅新浪资源网ᴴ'},77haju: {api:'https://www.77hanju.com/api.php/provide/vod',name:'🔅77韩剧ᴴ'},sier: {api:'https://42.la/api.php/provide/vod',name:'🔅四二ᴴ'},diyititaziyu: {api:'http://caiji.dyttzyapi.com/api.php/provide/vod',name:'🔅电影天堂资源ᴴ'},dobaziyu: {api:'https://dbzy.tv/api.php/provide/vod',name:'🔅豆瓣资源ᴴ'},zuda: {api:'https://zuidazy.me/api.php/provide/vod',name:'🔅最大ᴴ'},zudaziyuwa: {api:'https://api.zuidapi.com/api.php/provide/vod',name:'🔅最大资源网ᴴ'},wujiziyuwa: {api:'https://api.wujinapi.me/api.php/provide/vod',name:'🔅无尽资源网ᴴ'},suniziyuwa: {api:'https://suoniapi.com/api.php/provide/vod/from/snm3u8',name:'🔅索尼资源网ᴴ'},wawaduju: {api:'https://wwzy.tv/api.php/provide/vod',name:'🔅汪汪短剧ᴴ'},niniziyu: {api:'https://api.niuniuzy.me/api.php/provide/vod/from/nnm3u8',name:'🔅牛牛资源ᴴ'},bubuga: {api:'https://api.yparse.com/api/json',name:'🔅步步高ᴴ'},mataziyu: {api:'https://caiji.maotaizy.cc/api.php/provide/vod',name:'🔅茅台资源ᴴ'},modoziyu: {api:'https://www.mdzyapi.com/api.php/provide/vod',name:'🔅魔都资源ᴴ'},36ziyuwa: {api:'https://360zy.com/api.php/provide/vod',name:'🔅360资源网ᴴ'},laji: {api:'http://api.11bat.com/api.php/provide/vod',name:'🔞辣椒ᝰ'},xiroba: {api:'https://www.xrbsp.com/api/xml.php',name:'🔞鲜肉包ᝰ'},meshnv: {api:'https://www.msnii.com/api/xml.php',name:'🔞美少女ᝰ'},kaxigu: {api:'https://www.kxgav.com/api/xml.php',name:'🔞开心果ᝰ'},faha: {api:'http://fhapi9.com/api.php/provide/vod',name:'🔞番号ᝰ'},xinaer: {api:'https://www.gdlsp.com/api/xml.php',name:'🔞香奶儿ᝰ'},piguxi: {api:'https://www.pgxdy.com/api/xml.php',name:'🔞苹果香ᝰ'},dadi: {api:'https://dadiapi.com/api.php',name:'🔞大地ᝰ'},lebo: {api:'http://lbapiby.com/api.php/provide/vod',name:'🔞樂播ᝰ'},78lebo: {api:'https://lbapi9.com/api.php/provide/vod',name:'🔞78乐播ᝰ'},15ziyu: {api:'https://155api.com/api.php/provide/vod',name:'🔞155资源ᴾ'},
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    }
    //ARCHIVE https://telegra.ph/APIs-08-12
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
