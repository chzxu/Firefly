/**
 * Firefly 博客管理导航 - 完整功能数据
 * 包含所有可修改的配置项、文件路径、关键词
 */

const features = [
  // ========== 站点基础设置 ==========
  {
    id: "site-basic",
    title: "站点基本信息",
    subtitle: "修改网站标题、副标题、描述、URL、关键词",
    category: "站点基础",
    icon: "🌐",
    iconBg: "bg-purple",
    file: "src/config/siteConfig.ts",
    keywords: ["网站名称", "标题", "副标题", "描述", "URL", "域名", "关键词", "SEO", "站点信息", "网站设置", "title", "subtitle", "description", "keywords", "site_url"],
    settings: [
      "title: '丛中笑的博客哦' — 站点标题，显示在浏览器标签页和导航栏",
      "subtitle: \"Order's Blog\" — 站点副标题",
      "site_url: 'https://blog.orderchen0613.xyz' — 站点完整URL，重要！",
      "description: '这是一个blog' — 站点描述，SEO用",
      "keywords: ['丛中笑','Fuwari','Astro'...] — 站点关键词数组",
      "lang: 'zh_CN' — 语言代码（zh_CN/zh_TW/en/ja/ru）"
    ]
  },
  {
    id: "theme-color",
    title: "主题色配置",
    subtitle: "修改网站主色调、深色/浅色模式",
    category: "站点基础",
    icon: "🎨",
    iconBg: "bg-purple",
    file: "src/config/siteConfig.ts",
    keywords: ["主题色", "颜色", "色调", "色相", "深色模式", "浅色模式", "暗色", "亮色", "跟随系统", "hue", "themeColor", "dark", "light"],
    settings: [
      "hue: 165 — 主题色色相值（0-360）(红色0/青色200/蓝绿250/粉色345)",
      "fixed: false — true=隐藏主题色选择器，用户不可调",
      "defaultMode: 'system' — 默认颜色模式 'light'/'dark'/'system'",
    ]
  },
  {
    id: "favicon",
    title: "网站图标 Favicon",
    subtitle: "修改浏览器标签页上显示的小图标",
    category: "站点基础",
    icon: "🖼️",
    iconBg: "bg-purple",
    file: "src/config/siteConfig.ts",
    keywords: ["favicon", "图标", "网站图标", "浏览器图标", "标签页图标", "ico", "png"],
    settings: [
      "favicon: [{ src: '/favicon/favicon.ico' }] — 图标文件路径",
      "可添加多个图标，支持theme属性区分亮色/暗色",
      "图标文件放在 public/favicon/ 目录下"
    ]
  },
  {
    id: "page-width",
    title: "页面宽度设置",
    subtitle: "调整博客内容区域的整体宽度",
    category: "站点基础",
    icon: "📐",
    iconBg: "bg-purple",
    file: "src/config/siteConfig.ts",
    keywords: ["页面宽度", "宽度", "布局宽度", "pageWidth", "内容宽度", "整体宽度"],
    settings: [
      "pageWidth: 100 — 页面整体宽度（单位rem），数值越大内容区越宽",
      "使用单侧栏时建议调低以获得更好视觉效果",
    ]
  },
  {
    id: "card-style",
    title: "卡片样式设置",
    subtitle: "控制卡片边框、阴影、主题跟随",
    category: "站点基础",
    icon: "💳",
    iconBg: "bg-purple",
    file: "src/config/siteConfig.ts",
    keywords: ["卡片", "边框", "阴影", "立体感", "card", "border", "圆角", "卡片风格"],
    settings: [
      "card.border: true — 是否开启卡片边框和阴影（立体效果）",
      "card.followTheme: false — 卡片风格是否跟随主题色相",
    ]
  },
  {
    id: "image-optimization",
    title: "图片优化配置",
    subtitle: "设置图片输出格式、压缩质量、防盗链",
    category: "站点基础",
    icon: "📸",
    iconBg: "bg-purple",
    file: "src/config/siteConfig.ts",
    keywords: ["图片优化", "压缩", "webp", "avif", "图片质量", "防盗链", "图片格式", "quality"],
    settings: [
      "imageOptimization.formats: 'webp' — 输出格式 'avif'/'webp'/'both'",
      "imageOptimization.quality: 85 — 压缩质量 1-100（推荐70-85）",
      "imageOptimization.noReferrerDomains: [] — 防盗链域名列表",
    ]
  },

  // ========== 导航菜单 ==========
  {
    id: "navbar-logo",
    title: "导航栏Logo和标题",
    subtitle: "修改导航栏的图标、Logo图片、标题文字",
    category: "导航菜单",
    icon: "🏷️",
    iconBg: "bg-blue",
    file: "src/config/siteConfig.ts",
    keywords: ["导航栏", "Logo", "图标", "标题", "navbar", "logo"],
    settings: [
      "navbar.logo.type: 'image' — 类型：icon（图标库）/image（本地图片）/url（网络图片）",
      "navbar.logo.value: 'assets/images/nei.jpg' — Logo图片路径",
      "navbar.logo.alt: '🐉' — 图片替代文本",
      "navbar.title: '丛中笑' — 导航栏标题文字",
      "navbar.widthFull: false — 导航栏是否占满屏幕宽度",
      "navbar.menuAlign: 'center' — 菜单对齐 'left'/'center'",
      "navbar.followTheme: false — 图标标题是否跟随主题色",
      "navbar.stickyNavbar: true — 导航栏是否固定顶部"
    ]
  },
  {
    id: "navbar-menu",
    title: "导航菜单配置",
    subtitle: "添加/删除/修改导航菜单项及子菜单",
    category: "导航菜单",
    icon: "📋",
    iconBg: "bg-blue",
    file: "src/config/navBarConfig.ts",
    keywords: ["导航菜单", "菜单", "导航链接", "子菜单", "外部链接", "GitHub", "bilibili", "菜单项", "nav"],
    settings: [
      "links数组包含所有导航菜单项：主页、归档、友链、留言板等",
      "支持子菜单children、外部链接external、自定义图标icon",
      "菜单项会根据siteConfig.pages中的开关自动显示/隐藏",
      "搜索方式：method: PageFind（页面查找）",
    ]
  },

  // ========== 个人资料 ==========
  {
    id: "profile",
    title: "个人资料（侧边栏）",
    subtitle: "修改头像、名字、个人签名、社交链接",
    category: "个人资料",
    icon: "👤",
    iconBg: "bg-pink",
    file: "src/config/profileConfig.ts",
    keywords: ["头像", "名字", "签名", "个人资料", "社交链接", "GitHub", "bilibili", "email", "RSS", "avatar", "bio"],
    settings: [
      "avatar: 'assets/images/nei.jpg' — 头像图片路径（支持src目录/public目录/远程URL）",
      "name: '丛中笑' — 显示名称",
      "bio: '我是丛中笑，待到山花烂漫时，她在丛中笑' — 个人签名",
      "links数组 — 社交链接（bilibili/GitHub/Email/RSS），支持修改图标、URL",
    ]
  },

  // ========== 外观样式 ==========
  {
    id: "bg-wallpaper",
    title: "背景壁纸设置",
    subtitle: "修改桌面端/移动端背景图片、横幅文字、轮播、水波纹",
    category: "外观样式",
    icon: "🖼️",
    iconBg: "bg-green",
    file: "src/config/backgroundWallpaper.ts",
    keywords: ["背景", "壁纸", "背景图", "banner", "横幅", "桌面壁纸", "手机壁纸", "轮播", "水波纹", "模糊", "透明度", "打字机", "背景图片", "wallpaper"],
    settings: [
      "mode: 'banner' — 壁纸模式 'banner'/'overlay'/'none'",
      "switchable: true — 是否允许用户切换壁纸模式",
      "src.desktop: [...] — 桌面背景图片数组（支持多张随机）",
      "src.mobile: [...] — 移动端背景图片数组",
      "图片放在 src/assets/images/DesktopWallpaper/ 或 MobileWallpaper/ 目录",
      "banner.position: '0% 20%' — 图片位置（center/top/bottom等）",
      "banner.homeText.title: 'Lovely firefly!' — 首页横幅主标题",
      "banner.homeText.subtitle: [...] — 副标题数组（打字机效果轮流显示）",
      "banner.homeText.typewriter: {...} — 打字机速度/删除速度/暂停时间",
      "banner.carousel.enable: false — 横幅轮播开关",
      "banner.waves.enable — 水波纹动画（桌面端/移动端分控）",
      "banner.navbar.transparentMode: 'semi' — 导航栏透明模式",
      "banner.credit: {...} — 图片来源标注文本和链接",
      "overlay.opacity/blur/cardOpacity — 全屏透明覆盖模式参数"
    ]
  },
  {
    id: "font-config",
    title: "字体设置",
    subtitle: "启用/切换网站字体，支持Google Fonts和MiSans",
    category: "外观样式",
    icon: "🔤",
    iconBg: "bg-green",
    file: "src/config/fontConfig.ts",
    keywords: ["字体", "font", "小米字体", "MiSans", "Google Fonts", "字体样式", "粗细", "字重"],
    settings: [
      "enable: false — 是否启用自定义字体功能",
      "preload: true — 是否预加载字体文件",
      "selected: ['misans-regular'] — 当前使用的字体ID",
      "fonts对象中包含：system（系统字体）/zen-maru-gothic/Inter/misans-normal/misans-regular/misans-semibold",
      "可添加新字体：id/name/src/family/weight/display属性",
    ]
  },
  {
    id: "code-theme",
    title: "代码高亮主题",
    subtitle: "切换代码块的暗色/亮色主题、行号、折叠",
    category: "外观样式",
    icon: "💻",
    iconBg: "bg-green",
    file: "src/config/expressiveCodeConfig.ts",
    keywords: ["代码高亮", "代码块", "主题", "暗色主题", "亮色主题", "行号", "折叠", "expressive code", "语法高亮"],
    settings: [
      "darkTheme: 'one-dark-pro' — 暗色模式代码主题名",
      "lightTheme: 'one-light' — 亮色模式代码主题名",
      "pluginCollapsible.enable: true — 代码块折叠功能",
      "pluginCollapsible.lineThreshold: 15 — 触发折叠的行数阈值",
      "pluginCollapsible.previewLines: 8 — 折叠时显示行数",
      "pluginCollapsible.defaultCollapsed: true — 默认折叠长代码块",
      "pluginLanguageBadge.enable: false — 语言徽章开关",
    ]
  },
  {
    id: "card-glass",
    title: "卡片透明效果",
    subtitle: "调整全屏透明模式下卡片的透明度",
    category: "外观样式",
    icon: "🔍",
    iconBg: "bg-green",
    file: "src/config/backgroundWallpaper.ts",
    keywords: ["卡片透明度", "透明", "毛玻璃", "模糊", "overlay", "cardOpacity", "玻璃效果"],
    settings: [
      "overlay.cardOpacity: 0.5 — 卡片背景透明度 0-1之间",
      "overlay.blur: 10 — 背景模糊度（px）",
      "overlay.opacity: 0.8 — 壁纸透明度",
    ]
  },

  // ========== 侧边栏 ==========
  {
    id: "sidebar-layout",
    title: "侧边栏布局",
    subtitle: "配置侧边栏位置、组件显示/隐藏、平板端行为",
    category: "侧边栏",
    icon: "📑",
    iconBg: "bg-indigo",
    file: "src/config/sidebarConfig.ts",
    keywords: ["侧边栏", "布局", "左侧栏", "右侧栏", "双边栏", "组件", "位置", "平板", "移动端", "sidebar"],
    settings: [
      "enable: true — 侧边栏总开关",
      "position: 'both' — 'left'仅左侧/'right'仅右侧/'both'双侧",
      "tabletSidebar: 'left' — 平板端(769-1279px)显示哪侧",
      "showBothSidebarsOnPostPage: true — 单侧栏时，文章页是否显示双侧",
      "leftComponents和rightComponents数组分别配置左右侧组件",
      "mobileBottomComponents配置移动端底部组件",
    ]
  },
  {
    id: "sidebar-profile",
    title: "侧边栏 - 个人资料组件",
    subtitle: "控制侧边栏用户资料卡的显示",
    category: "侧边栏",
    icon: "👤",
    iconBg: "bg-indigo",
    file: "src/config/sidebarConfig.ts",
    keywords: ["个人资料", "头像卡", "用户信息", "profile", "侧边栏组件", "显示隐藏"],
    settings: [
      "type: 'profile' — 组件类型",
      "enable: true — 是否启用",
      "position: 'top' — 'top'固定顶部/'sticky'粘性滚动",
      "showOnPostPage: true — 文章详情页是否显示",
    ]
  },
  {
    id: "sidebar-announcement",
    title: "侧边栏 - 公告组件",
    subtitle: "控制公告栏显示及其内容",
    category: "侧边栏",
    icon: "📢",
    iconBg: "bg-indigo",
    file: "src/config/announcementConfig.ts",
    keywords: ["公告", "通知", "announcement", "公告栏", "公告内容"],
    settings: [
      "title: '公告' — 公告标题",
      "content: '欢迎来到我的博客！...' — 公告正文（在announcementConfig.ts修改）",
      "closable: true — 用户是否可以关闭公告",
      "link.enable: true — 是否显示了解更多链接",
      "在 sidebarConfig.ts 中找到 type: 'announcement' 的条目控制显示/隐藏",
    ]
  },
  {
    id: "sidebar-music",
    title: "侧边栏 - 音乐播放器组件",
    subtitle: "控制侧边栏音乐播放器的显示/隐藏",
    category: "侧边栏",
    icon: "🎵",
    iconBg: "bg-indigo",
    file: "src/config/sidebarConfig.ts",
    keywords: ["音乐播放器", "音乐组件", "侧边栏音乐", "music", "歌曲", "播放"],
    settings: [
      "type: 'music' — 组件类型",
      "enable: true — 是否启用",
      "position: 'sticky' — 粘性定位跟随滚动",
      "showOnPostPage: true — 文章详情页是否显示",
    ]
  },
  {
    id: "sidebar-categories",
    title: "侧边栏 - 分类组件",
    subtitle: "控制分类列表显示和折叠阈值",
    category: "侧边栏",
    icon: "📁",
    iconBg: "bg-indigo",
    file: "src/config/sidebarConfig.ts",
    keywords: ["分类", "categories", "文章分类", "折叠", "分类列表"],
    settings: [
      "type: 'categories' — 组件类型",
      "responsive.collapseThreshold: 5 — 分类超过5个时自动折叠",
    ]
  },
  {
    id: "sidebar-tags",
    title: "侧边栏 - 标签组件",
    subtitle: "控制标签云显示和折叠阈值",
    category: "侧边栏",
    icon: "🏷️",
    iconBg: "bg-indigo",
    file: "src/config/sidebarConfig.ts",
    keywords: ["标签", "tags", "标签云", "文章标签", "折叠", "标签列表"],
    settings: [
      "type: 'tags' — 组件类型",
      "responsive.collapseThreshold: 10 — 标签超过10个时自动折叠（桌面端）",
      "移动端阈值：20个标签时自动折叠",
    ]
  },
  {
    id: "sidebar-stats",
    title: "侧边栏 - 站点统计组件",
    subtitle: "控制站点统计（文章数/分类数/运行天数）显示",
    category: "侧边栏",
    icon: "📊",
    iconBg: "bg-indigo",
    file: "src/config/sidebarConfig.ts",
    keywords: ["统计", "站点统计", "文章数", "分类数", "标签数", "字数", "运行天数", "stats"],
    settings: [
      "type: 'stats' — 组件类型（在rightComponents中）",
      "enable: true — 是否启用",
      "自动统计：文章数/分类数/标签数/总字数/运行天数/最后活动",
    ]
  },
  {
    id: "sidebar-calendar",
    title: "侧边栏 - 日历组件",
    subtitle: "控制日历组件显示（仅在非文章页显示）",
    category: "侧边栏",
    icon: "📅",
    iconBg: "bg-indigo",
    file: "src/config/sidebarConfig.ts",
    keywords: ["日历", "calendar", "日期", "文章日期", "归档日历"],
    settings: [
      "type: 'calendar' — 组件类型",
      "showOnPostPage: false — 文章详情页不显示",
      "position: 'sticky' — 粘性定位",
    ]
  },
  {
    id: "sidebar-toc",
    title: "侧边栏 - 文章目录组件",
    subtitle: "控制文章详情页右侧目录显示",
    category: "侧边栏",
    icon: "📑",
    iconBg: "bg-indigo",
    file: "src/config/sidebarConfig.ts",
    keywords: ["目录", "TOC", "文章目录", "table of contents", "导航目录", "标题导航"],
    settings: [
      "type: 'sidebarToc' — 组件类型",
      "showOnPostPage: true — 文章页显示",
      "showOnNonPostPage: false — 非文章页不显示",
    ]
  },
  {
    id: "sidebar-ad",
    title: "侧边栏 - 广告组件",
    subtitle: "配置和显示/隐藏侧边栏广告",
    category: "侧边栏",
    icon: "📣",
    iconBg: "bg-indigo",
    file: "src/config/adConfig.ts",
    keywords: ["广告", "ad", "横幅", "赞助", "推广", "图片广告"],
    settings: [
      "在sidebarConfig中可按enable控制广告显示（默认关闭）",
      "configId: 'ad1'/'ad2' — 选择使用哪个广告配置",
      "在adConfig.ts中修改广告图片、文字、链接等内容",
    ]
  },

  // ========== 功能模块 ==========
  {
    id: "music-player",
    title: "音乐播放器设置",
    subtitle: "配置歌曲列表、播放模式、音量、歌词、Meting API",
    category: "功能模块",
    icon: "🎵",
    iconBg: "bg-teal",
    file: "src/config/musicConfig.ts",
    keywords: ["音乐", "歌曲", "播放器", "歌词", "网易云", "QQ音乐", "歌单", "音量", "播放模式", "本地音乐", "mp3"],
    settings: [
      "showInNavbar: true — 导航栏是否显示音乐播放入口",
      "mode: 'local' — 'local'本地音乐 / 'meting'使用Meting API",
      "volume: 0.7 — 默认音量 0-1",
      "playMode: 'list' — 'list'列表循环/'one'单曲循环/'random'随机",
      "showLyrics: true — 是否显示歌词",
      "meting.server: 'netease' — 音乐平台（netease/tencent/kugou等）",
      "meting.type: 'playlist' — song单曲/playlist歌单/album专辑",
      "meting.id: '10046455237' — 歌单/歌曲ID",
      "local.playlist: [...] — 本地音乐列表（name/artist/url/cover/lrc）",
      "音乐文件放在 public/assets/music/ 目录下",
      "歌词支持LRC文件路径或直接填入LRC内容字符串"
    ]
  },
  {
    id: "comment-system",
    title: "评论系统配置",
    subtitle: "选择评论系统（Twikoo/Waline/Giscus/Disqus/Artalk）",
    category: "功能模块",
    icon: "💬",
    iconBg: "bg-teal",
    file: "src/config/commentConfig.ts",
    keywords: ["评论", "留言", "Twikoo", "Waline", "Giscus", "Disqus", "Artalk", "评论区", "访问量", "visitor"],
    settings: [
      "type: 'none' — 当前评论系统类型（none不启用评论）",
      "twikoo.envId — Twikoo后端地址",
      "waline.serverURL — Waline后端地址和表情配置",
      "giscus.repo/repoId/category — Giscus GitHub讨论配置",
      "disqus.shortname — Disqus站点短名称",
      "artalk.server — Artalk后端API地址",
      "各系统都支持visitorCount文章访问量统计",
    ]
  },
  {
    id: "live2d-spine",
    title: "看板娘设置（Live2D / Spine）",
    subtitle: "配置桌面端动漫人物模型、交互消息、位置",
    category: "功能模块",
    icon: "🎭",
    iconBg: "bg-teal",
    file: "src/config/pioConfig.ts",
    keywords: ["看板娘", "Live2D", "Spine", "动漫人物", "流萤", "Miku", "模型", "交互", "点击消息", "动画", "右下角", "pio"],
    settings: [
      "spineModelConfig.enable: false — Spine看板娘开关",
      "spineModelConfig.model.path — 模型文件路径 .json",
      "spineModelConfig.position.corner: 'bottom-left' — 位置（四角可选）",
      "spineModelConfig.size: {width:135, height:165} — 容器尺寸",
      "spineModelConfig.interactive.clickMessages — 点击时随机显示的文字",
      "spineModelConfig.interactive.idleAnimations — 待机动画列表",
      "spineModelConfig.responsive.hideOnMobile: true — 移动端隐藏",
      "live2dModelConfig — Live2D看板娘类似配置（支持snow_miku/illyasviel）",
      "模型文件放在 public/pio/models/ 目录下"
    ]
  },
  {
    id: "sakura-effect",
    title: "樱花飘落特效",
    subtitle: "配置樱花数量、大小、速度、透明度",
    category: "功能模块",
    icon: "🌸",
    iconBg: "bg-teal",
    file: "src/config/sakuraConfig.ts",
    keywords: ["樱花", "特效", "花瓣", "飘落", "动画", "sakura", "花瓣特效", "装饰"],
    settings: [
      "enable: false — 樱花特效开关",
      "sakuraNum: 21 — 樱花数量",
      "limitTimes: -1 — 越界限制次数（-1无限循环）",
      "size.min: 0.5 / size.max: 1.1 — 尺寸范围",
      "opacity.min: 0.3 / opacity.max: 0.9 — 透明度范围",
      "speed.horizontal/vertical/rotation/fadeSpeed — 移动速度参数",
    ]
  },
  {
    id: "page-switches",
    title: "页面开关控制",
    subtitle: "控制友链/赞助/留言板/Bangumi/相册页面显示/隐藏",
    category: "功能模块",
    icon: "🔘",
    iconBg: "bg-teal",
    file: "src/config/siteConfig.ts",
    keywords: ["页面开关", "友链", "赞助", "留言板", "Bangumi", "相册", "隐藏页面", "404", "friends", "sponsor", "guestbook", "gallery"],
    settings: [
      "pages.friends: true — 友链页面",
      "pages.sponsor: false — 赞助页面",
      "pages.guestbook: true — 留言板页面（需启用评论系统）",
      "pages.bangumi: true — 番组计划页面（追番/游戏/书籍/音乐）",
      "pages.gallery: true — 相册页面",
      "设为false后页面返回404，导航栏对应菜单自动隐藏",
      "categoryBar: true — 分类导航栏开关（首页和归档页）",
    ]
  },
  {
    id: "post-list-layout",
    title: "文章列表布局",
    subtitle: "设置列表/网格模式、标签显示、瀑布流",
    category: "功能模块",
    icon: "📰",
    iconBg: "bg-teal",
    file: "src/config/siteConfig.ts",
    keywords: ["文章列表", "布局", "列表模式", "网格模式", "瀑布流", "masonry", "标签", "grid", "list"],
    settings: [
      "postListLayout.defaultMode: 'list' — 默认布局 'list'/'grid'",
      "postListLayout.mobileDefaultMode: 'list' — 移动端默认布局",
      "postListLayout.showTags: true — 文章列表是否显示标签",
      "postListLayout.descriptionLines: 2 — 简介显示行数（0不截断）",
      "postListLayout.allowSwitch: true — 是否允许用户切换布局",
      "postListLayout.grid.masonry: false — 瀑布流布局开关",
      "postListLayout.grid.columnWidth: 320 — 网格卡片最小宽度(px)",
    ]
  },
  {
    id: "pagination",
    title: "分页设置",
    subtitle: "设置每页显示的文章数量",
    category: "功能模块",
    icon: "📄",
    iconBg: "bg-teal",
    file: "src/config/siteConfig.ts",
    keywords: ["分页", "每页文章数", "翻页", "pagination", "postsPerPage"],
    settings: [
      "pagination.postsPerPage: 10 — 每页显示文章数",
    ]
  },
  {
    id: "share-poster",
    title: "分享海报功能",
    subtitle: "控制文章分享海报生成和OpenGraph图片",
    category: "功能模块",
    icon: "📤",
    iconBg: "bg-teal",
    file: "src/config/siteConfig.ts",
    keywords: ["分享", "海报", "OG图片", "OpenGraph", "社交分享", "二维码"],
    settings: [
      "sharePoster: true — 文章分享海报生成功能",
      "generateOgImages: false — OpenGraph图片自动生成（耗时长，不建议本地开启）",
    ]
  },
  {
    id: "last-modified",
    title: "文章过期提醒",
    subtitle: "配置'上次编辑时间'卡片和过期阈值",
    category: "功能模块",
    icon: "⏰",
    iconBg: "bg-teal",
    file: "src/config/siteConfig.ts",
    keywords: ["编辑时间", "过期", "过时", "最后修改", "lastModified", "outdated"],
    settings: [
      "showLastModified: true — 文章底部'上次编辑时间'卡片开关",
      "outdatedThreshold: 30 — 文章超过30天才显示过期提醒",
    ]
  },
  {
    id: "license",
    title: "文章许可协议",
    subtitle: "配置文章版权许可证信息",
    category: "功能模块",
    icon: "📜",
    iconBg: "bg-teal",
    file: "src/config/licenseConfig.ts",
    keywords: ["许可证", "版权", "协议", "license", "CC", "BY-NC-SA", "知识共享"],
    settings: [
      "enable: true — 是否在文章顶部显示许可证",
      "name: 'CC BY-NC-SA 4.0' — 许可证名称",
      "url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/' — 许可证链接",
    ]
  },
  {
    id: "callouts-theme",
    title: "Admonitions提醒框主题",
    subtitle: "修改markdown提醒框的视觉风格",
    category: "功能模块",
    icon: "💡",
    iconBg: "bg-teal",
    file: "src/config/siteConfig.ts",
    keywords: ["提醒框", "admonitions", "callouts", "提示框", "github", "obsidian", "vitepress"],
    settings: [
      "rehypeCallouts.theme: 'github' — 可选 'github'/'obsidian'/'vitepress'",
      "修改后需重启开发服务器",
    ]
  },

  // ========== 内容管理 ==========
  {
    id: "new-post",
    title: "创建新文章",
    subtitle: "使用命令行创建新博文，或手动创建MD文件",
    category: "内容管理",
    icon: "✍️",
    iconBg: "bg-orange",
    file: "src/content/posts/",
    keywords: ["新建文章", "写博客", "创建文章", "新文章", "markdown", "md", "mdx", "frontmatter"],
    settings: [
      "方法一：运行 npm run new-post -- 文章文件名 自动创建模板文件",
      "方法二：手动在 src/content/posts/ 目录新建 .md 或 .mdx 文件",
      "Frontmatter必填项：title（标题）/published（发布日期）",
      "Frontmatter可选项：updated/draft/description/image/tags/category/pinned/author/licenseName/licenseUrl/comment/password/passwordHint/lang",
      "文章图片放在同目录下的 images 子文件夹中",
    ]
  },
  {
    id: "post-frontmatter",
    title: "文章Frontmatter设置",
    subtitle: "配置文章的元数据：标题、日期、标签、分类、置顶、加密等",
    category: "内容管理",
    icon: "📝",
    iconBg: "bg-orange",
    file: "src/content/posts/*.md",
    keywords: ["frontmatter", "文章属性", "标签", "分类", "置顶", "草稿", "加密", "密码", "封面图", "标题", "日期"],
    settings: [
      "title — 文章标题",
      "published — 发布日期（YYYY-MM-DD）",
      "updated — 更新日期（可选）",
      "draft: false — true=草稿不发布",
      "description — 文章简介",
      "image — 封面图路径/'api'使用随机图",
      "tags: [] — 标签数组",
      "category — 分类名",
      "pinned: false — true=置顶文章",
      "password — 加密密码（设置后文章需密码访问）",
      "passwordHint — 密码提示文字",
      "comment: true — 是否允许评论",
    ]
  },
  {
    id: "about-page",
    title: "关于我页面",
    subtitle: "修改'关于我'页面的内容",
    category: "内容管理",
    icon: "📖",
    iconBg: "bg-orange",
    file: "src/content/spec/about.md",
    keywords: ["关于我", "about", "自我介绍", "关于页面", "个人介绍"],
    settings: [
      "在 src/content/spec/about.md 中编辑markdown内容",
      "支持所有markdown语法和组件（github卡片等）",
    ]
  },
  {
    id: "friends-page",
    title: "友链页面管理",
    subtitle: "添加/删除友链、修改友链信息、友链页面内容",
    category: "内容管理",
    icon: "🔗",
    iconBg: "bg-orange",
    file: "src/config/friendsConfig.ts",
    keywords: ["友链", "友情链接", "friends", "链接交换", "博客友链", "交换友链"],
    settings: [
      "friendsConfig数组 — 每个友链包含title/imgurl/desc/siteurl/tags/weight/enabled",
      "weight: 数字越大排序越靠前",
      "enabled: true/false — 是否显示该友链",
      "friendsPageConfig.showCustomContent — 是否显示friends.mdx自定义内容",
      "friendsPageConfig.showComment — 是否显示评论区",
      "friendsPageConfig.randomizeSort — 是否随机排序",
      "友链页面自定义内容在 src/content/spec/friends.mdx 中编辑",
    ]
  },
  {
    id: "gallery",
    title: "相册管理",
    subtitle: "添加/删除相册、配置相册信息和图片",
    category: "内容管理",
    icon: "🖼️",
    iconBg: "bg-orange",
    file: "src/config/galleryConfig.ts",
    keywords: ["相册", "图片", "gallery", "照片", "图集", "摄影", "展示"],
    settings: [
      "galleryConfig.albums数组 — 每个相册包含id/name/description/location/date/tags",
      "columnWidth: 240 — 瀑布流最小列宽(px)",
      "图片放在 public/gallery/<相册id>/ 目录下",
      "支持jpg/png/webp/avif/gif格式",
      "cover.* 文件自动作为相册封面图",
    ]
  },
  {
    id: "sponsor-page",
    title: "赞助页面配置",
    subtitle: "配置赞助方式、收款码、赞助者列表",
    category: "内容管理",
    icon: "💰",
    iconBg: "bg-orange",
    file: "src/config/sponsorConfig.ts",
    keywords: ["赞助", "打赏", "收款码", "支付宝", "微信", "ko-fi", "爱发电", "sponsor"],
    settings: [
      "methods数组 — 赞助方式（支付宝/微信/ko-fi/爱发电等）",
      "每个方法可设qrCode（收款码路径）或link（跳转链接）",
      "收款码图片放在 public/assets/images/sponsor/ 目录",
      "sponsors数组 — 赞助者列表（name/amount/date）",
      "showSponsorsList: false — 是否显示赞助者列表",
      "showButtonInPost: true — 文章底部是否显示赞助按钮",
    ]
  },
  {
    id: "guestbook",
    title: "留言板页面",
    subtitle: "配置留言板页面内容和评论",
    category: "内容管理",
    icon: "📝",
    iconBg: "bg-orange",
    file: "src/content/spec/guestbook.md",
    keywords: ["留言板", "留言", "guestbook", "访客留言", "评论"],
    settings: [
      "在 src/content/spec/guestbook.md 编辑留言板页面内容",
      "需要先在commentConfig.ts启用评论系统（type不为none）",
      "在siteConfig中pages.guestbook控制页面开关",
    ]
  },

  // ========== 评论与统计 ==========
  {
    id: "analytics",
    title: "网站统计分析",
    subtitle: "配置Google Analytics、Microsoft Clarity、Umami、51la统计",
    category: "评论与统计",
    icon: "📈",
    iconBg: "bg-cyan",
    file: "src/config/siteConfig.ts",
    keywords: ["统计", "分析", "Google Analytics", "Clarity", "Umami", "51la", "访问统计", "数据", "埋点"],
    settings: [
      "analytics.googleAnalyticsId — Google Analytics测量ID（留空不启用）",
      "analytics.microsoftClarityId — Microsoft Clarity项目ID",
      "analytics.umamiAnalytics.websiteId — Umami网站ID和自定义JS地址",
      "analytics.la51Analytics.Id — 51la统计ID",
      "各统计系统独立配置，填入ID即启用",
    ]
  },
  {
    id: "bangumi",
    title: "番组计划（Bangumi）",
    subtitle: "配置Bangumi用户ID和条目类型排序",
    category: "评论与统计",
    icon: "📺",
    iconBg: "bg-cyan",
    file: "src/config/siteConfig.ts",
    keywords: ["bangumi", "番组计划", "追番", "动漫", "游戏", "书籍", "音乐", "bgm", "bangumi.tv"],
    settings: [
      "bangumi.userId: '1143164' — Bangumi用户ID",
      "bangumi.categoryOrder: ['anime','book','music','game'] — 类型排序",
      "注意：数据为编译时获取，不是实时的",
      "dev调试时只获取一页数据，build才获取全部",
    ]
  },
  {
    id: "site-start-date",
    title: "站点运行时长",
    subtitle: "设置站点起始日期用于统计运行天数",
    category: "评论与统计",
    icon: "📅",
    iconBg: "bg-cyan",
    file: "src/config/siteConfig.ts",
    keywords: ["运行时长", "天数", "起始日期", "siteStartDate", "网站年龄"],
    settings: [
      "siteStartDate: '2025-05-07' — 站点起始日期 YYYY-MM-DD",
    ]
  },

  // ========== 页脚与底部 ==========
  {
    id: "footer",
    title: "页脚设置",
    subtitle: "配置页脚自定义HTML（备案号等）",
    category: "页脚与底部",
    icon: "📌",
    iconBg: "bg-amber",
    file: "src/config/footerConfig.ts",
    keywords: ["页脚", "footer", "备案号", "ICP", "底部信息", "版权"],
    settings: [
      "enable: false — 是否启用Footer HTML注入功能",
      "编辑 config/FooterConfig.html 文件添加备案号等自定义HTML",
    ]
  },
  {
    id: "timezone",
    title: "时区设置",
    subtitle: "设置站点时区影响日期时间显示",
    category: "页脚与底部",
    icon: "🕐",
    iconBg: "bg-amber",
    file: "src/config/siteConfig.ts",
    keywords: ["时区", "timezone", "时间", "日期", "Asia/Shanghai", "UTC"],
    settings: [
      "timezone: 'Asia/Shanghai' — IANA时区字符串",
      "影响Bangumi显示时间、RSS日期、构建日期等",
    ]
  },
  {
    id: "plantuml",
    title: "PlantUML图表配置",
    subtitle: "配置PlantUML服务端和主题",
    category: "页脚与底部",
    icon: "📊",
    iconBg: "bg-amber",
    file: "src/config/plantumlConfig.ts",
    keywords: ["plantuml", "UML", "图表", "流程图", "架构图"],
    settings: [
      "enable: true — PlantUML渲染开关",
      "server — PlantUML服务端地址",
      "lightTheme/darkTheme — 亮色/暗色主题",
    ]
  },

  // ========== 媒体资源 ==========
  {
    id: "media-images",
    title: "图片资源管理",
    subtitle: "管理和替换站点的各种图片资源",
    category: "媒体资源",
    icon: "🖼️",
    iconBg: "bg-red",
    file: "src/assets/images/",
    keywords: ["图片", "images", "jpg", "png", "webp", "avif", "gif", "替换图片", "桌面壁纸", "移动壁纸", "封面图"],
    settings: [
      "src/assets/images/ — 需要优化的图片（头像/Logo/封面图等）",
      "public/assets/images/ — 原样使用的图片（sakura.png/赞助码等）",
      "public/favicon/ — 网站favicon图标",
      "DesktopWallpaper/d1-d6.avif — 桌面端壁纸",
      "MobileWallpaper/m1-m6.avif — 移动端壁纸",
      "图片路径以'/'开头=public目录，不以'/'开头=src目录",
    ]
  },
  {
    id: "media-music-files",
    title: "音乐文件管理",
    subtitle: "添加/替换本地音乐文件和封面图",
    category: "媒体资源",
    icon: "🎵",
    iconBg: "bg-red",
    file: "public/assets/music/",
    keywords: ["音乐文件", "mp3", "歌曲文件", "音乐封面", "lrc", "歌词文件"],
    settings: [
      "public/assets/music/ — 音乐mp3文件存放目录",
      "public/assets/music/cover/ — 歌曲封面图片目录",
      "歌词支持.lrc文件或直接在musicConfig.ts中填入LRC内容",
    ]
  },
  {
    id: "media-models",
    title: "看板娘模型文件",
    subtitle: "管理Live2D和Spine模型文件",
    category: "媒体资源",
    icon: "🎭",
    iconBg: "bg-red",
    file: "public/pio/models/",
    keywords: ["模型文件", "Live2D模型", "Spine模型", "moc", "json", "atlas", "纹理", "动画"],
    settings: [
      "public/pio/models/spine/firefly/ — Spine流萤模型（json/atlas/png/spine/图片/音频）",
      "public/pio/models/live2d/snow_miku/ — Live2D雪初音模型",
      "public/pio/models/live2d/illyasviel/ — Live2D伊莉雅模型",
      "替换模型后需在pioConfig.ts中更新path路径",
    ]
  },

  // ========== 项目配置 ==========
  {
    id: "astro-config",
    title: "Astro项目配置",
    subtitle: "修改站点部署、构建优化、图片服务等高级配置",
    category: "项目配置",
    icon: "⚙️",
    iconBg: "bg-purple",
    file: "astro.config.mjs",
    keywords: ["astro配置", "部署", "构建", "cloudflare", "适配器", "adapter", "sitemap", "站点地图"],
    settings: [
      "site — 站点URL（自动从siteConfig读取）",
      "adapter: cloudflare(...) — 部署适配器（Cloudflare）",
      "output: 'static' — 输出模式（静态站点）",
      "trailingSlash: 'always' — URL尾部斜杠策略",
      "integrations: [...] — 集成插件（swup/icon/expressiveCode/svelte/sitemap/mdx）",
      "vite.build.minify: 'esbuild' — 构建压缩工具",
      "vite.build.drop: ['console','debugger'] — 移除console和debugger",
    ]
  },
  {
    id: "package-scripts",
    title: "npm脚本命令",
    subtitle: "开发/构建/格式化/新建文章等命令",
    category: "项目配置",
    icon: "🔧",
    iconBg: "bg-purple",
    file: "package.json",
    keywords: ["命令", "脚本", "npm", "pnpm", "dev", "build", "format", "lint", "开发", "构建"],
    settings: [
      "pnpm dev — 启动开发服务器",
      "pnpm build — 构建生产版本",
      "pnpm preview — 预览构建结果",
      "pnpm new-post -- <文件名> — 创建新文章",
      "pnpm format — 代码格式化（Biome）",
      "pnpm lint — 代码检查并自动修复",
      "pnpm icons — 生成图标",
    ]
  },
  {
    id: "delete-post",
    title: "删除文章",
    subtitle: "删除不需要的博客文章",
    category: "内容管理",
    icon: "🗑️",
    iconBg: "bg-orange",
    file: "src/content/posts/",
    keywords: ["删除文章", "删除博客", "移除文章", "delete post", "删除md"],
    settings: [
      "直接删除 src/content/posts/ 目录下的对应 .md 或 .mdx 文件即可",
      "如果文章有配图，同时删除同目录下的 images 子文件夹中对应图片",
      "删除草稿文章：直接删除对应文件",
      "删除后重新运行 pnpm dev 或 pnpm build 生效",
    ]
  },
  {
    id: "i18n-translation",
    title: "多语言翻译文本",
    subtitle: "修改界面上的所有中文文本（按钮、提示、标签等）",
    category: "项目配置",
    icon: "🌍",
    iconBg: "bg-purple",
    file: "src/i18n/languages/zh_CN.ts",
    keywords: ["翻译", "多语言", "i18n", "中文", "英文", "日语", "文本", "界面文字", "按钮文字"],
    settings: [
      "zh_CN.ts — 简体中文翻译文件（所有界面文本）",
      "en.ts — 英文翻译文件",
      "ja.ts — 日语翻译文件",
      "zh_TW.ts — 繁体中文翻译文件",
      "ru.ts — 俄语翻译文件",
      "可修改的内容包括：搜索提示、音乐播放器文字、分页文字、评论文字等",
      "翻译键定义在 src/i18n/i18nKey.ts 中",
    ]
  },
  {
    id: "deploy-config",
    title: "部署配置",
    subtitle: "修改Cloudflare/Workers部署配置、Vercel配置",
    category: "项目配置",
    icon: "🚀",
    iconBg: "bg-purple",
    file: "wrangler.toml",
    keywords: ["部署", "deploy", "Cloudflare", "Workers", "Vercel", "上线", "发布", "wrangler"],
    settings: [
      "wrangler.toml — Cloudflare Workers/Pages 部署配置",
      "vercel.json — Vercel 平台部署配置",
      ".github/workflows/deploy.yml — GitHub Actions 自动部署脚本",
      ".github/workflows/build.yml — 构建检查CI脚本",
      "部署前需要先运行 pnpm build 构建静态文件",
    ]
  },
];

/**
 * 功能分类定义
 */
const categories = [
  { id: "all", name: "全部", icon: "📋" },
  { id: "站点基础", name: "站点基础", icon: "🌐" },
  { id: "导航菜单", name: "导航菜单", icon: "📋" },
  { id: "个人资料", name: "个人资料", icon: "👤" },
  { id: "外观样式", name: "外观样式", icon: "🎨" },
  { id: "侧边栏", name: "侧边栏", icon: "📑" },
  { id: "功能模块", name: "功能模块", icon: "⚡" },
  { id: "内容管理", name: "内容管理", icon: "📝" },
  { id: "评论与统计", name: "评论与统计", icon: "📈" },
  { id: "页脚与底部", name: "页脚与底部", icon: "📌" },
  { id: "媒体资源", name: "媒体资源", icon: "🖼️" },
  { id: "项目配置", name: "项目配置", icon: "⚙️" },
];

// ========== 应用状态 ==========
let currentCategory = "all";
let currentSearch = "";

// ========== DOM引用 ==========
const searchInput = document.getElementById("search-input");
const categoryFilters = document.getElementById("category-filters");
const cardsGrid = document.getElementById("cards-grid");
const resultCount = document.getElementById("result-count");
const modalOverlay = document.getElementById("modal-overlay");

// ========== 初始化 ==========
function init() {
  renderCategoryFilters();
  filterAndRender();
}

// ========== 渲染分类标签 ==========
function renderCategoryFilters() {
  categoryFilters.innerHTML = categories
    .map(
      (cat) =>
        `<button class="category-tag${cat.id === currentCategory ? " active" : ""}" data-category="${cat.id}">
      ${cat.icon} ${cat.name}
    </button>`
    )
    .join("");

  // 绑定事件
  categoryFilters.querySelectorAll(".category-tag").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentCategory = btn.dataset.category;
      renderCategoryFilters();
      filterAndRender();
      // 滚动到顶部
      cardsGrid.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

// ========== 搜索和筛选 ==========
function filterAndRender() {
  let filtered = features;

  // 分类筛选
  if (currentCategory !== "all") {
    filtered = filtered.filter((f) => f.category === currentCategory);
  }

  // 搜索筛选（支持标题、描述、关键词、文件名、分类）
  if (currentSearch) {
    const query = currentSearch.toLowerCase();
    filtered = filtered.filter((f) => {
      const searchText = [
        f.title,
        f.subtitle,
        f.file,
        f.category,
        ...f.keywords,
      ]
        .join(" ")
        .toLowerCase();
      return searchText.includes(query);
    });
  }

  // 更新结果统计
  if (currentSearch || currentCategory !== "all") {
    resultCount.textContent = `找到 ${filtered.length} 个功能`;
  } else {
    resultCount.textContent = `共 ${features.length} 个可配置项`;
  }

  // 渲染卡片
  renderCards(filtered);
}

// ========== 渲染功能卡片 ==========
function renderCards(items) {
  if (items.length === 0) {
    cardsGrid.innerHTML = `
      <div class="no-results">
        <div class="icon">🔍</div>
        <h3>没有找到相关内容</h3>
        <p>请尝试其他关键词，如：壁纸、音乐、字体、头像、友链...</p>
      </div>
    `;
    return;
  }

  cardsGrid.innerHTML = items
    .map(
      (f, i) => `
    <div class="feature-card" data-id="${f.id}" style="animation-delay: ${i * 0.02}s">
      <div class="card-top">
        <div class="card-icon ${f.iconBg}">${f.icon}</div>
        <span class="card-badge">${f.category}</span>
      </div>
      <div class="card-title">${f.title}</div>
      <div class="card-desc">${f.subtitle}</div>
      <div class="card-file">📁 ${f.file}</div>
      <div class="card-keywords">
        ${f.keywords
          .slice(0, 6)
          .map((kw) => `<span class="kw-tag">${kw}</span>`)
          .join("")}
        ${f.keywords.length > 6 ? `<span class="kw-tag">+${f.keywords.length - 6}更多</span>` : ""}
      </div>
    </div>
  `
    )
    .join("");

  // 绑定卡片点击事件
  cardsGrid.querySelectorAll(".feature-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.dataset.id;
      const feature = features.find((f) => f.id === id);
      if (feature) showModal(feature);
    });
  });
}

// ========== 显示详情弹窗 ==========
function showModal(feature) {
  const keywordsStr = feature.keywords.map(k => `<span class="kw-tag">${k}</span>`).join("");

  modalOverlay.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <div>
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:4px;">
            <span style="font-size:28px;">${feature.icon}</span>
            <h2>${feature.title}</h2>
          </div>
          <span style="font-size:12px;color:var(--text-secondary);">${feature.subtitle}</span>
        </div>
        <button class="modal-close" id="modal-close">&times;</button>
      </div>
      <div class="modal-body">
        <!-- 文件路径卡片 -->
        <div class="file-card">
          <div class="file-icon">📁</div>
          <div class="file-info">
            <div class="file-label">编辑文件路径</div>
            <div class="file-path">${feature.file}</div>
            <div class="file-hint">在项目根目录下找到此文件进行编辑</div>
          </div>
          <button class="copy-btn" id="copy-path-btn" data-path="${feature.file}">📋 复制路径</button>
        </div>

        <!-- 设置项列表 -->
        <div class="section-title">⚙️ 可修改的设置项</div>
        <ul class="settings-list">
          ${feature.settings.map((s) => {
            // 用 — 分割设置名和说明
            const dashIdx = s.indexOf(" — ");
            if (dashIdx > 0) {
              const name = s.slice(0, dashIdx);
              const desc = s.slice(dashIdx + 3);
              return `<li><span class="setting-name">${name}</span> — ${desc}</li>`;
            }
            return `<li>${s}</li>`;
          }).join("")}
        </ul>

        <!-- 关键词 -->
        <div class="section-title">🔑 搜索关键词</div>
        <div class="keyword-section">${keywordsStr}</div>

        <!-- 提示 -->
        <div class="modal-tip">
          💡 <strong>提示：</strong>修改配置后需要重新运行 <code>pnpm dev</code> 或 <code>pnpm build</code> 才能看到效果。
        </div>
      </div>
    </div>
  `;

  modalOverlay.style.display = "flex";

  // 绑定关闭
  const closeBtn = modalOverlay.querySelector("#modal-close");
  closeBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // ESC 关闭
  const escHandler = (e) => {
    if (e.key === "Escape") { closeModal(); document.removeEventListener("keydown", escHandler); }
  };
  document.addEventListener("keydown", escHandler);

  // 复制路径按钮
  const copyBtn = modalOverlay.querySelector("#copy-path-btn");
  copyBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const path = copyBtn.dataset.path;
    navigator.clipboard.writeText(path).then(() => {
      copyBtn.textContent = "✅ 已复制";
      copyBtn.classList.add("copied");
      setTimeout(() => {
        copyBtn.textContent = "📋 复制路径";
        copyBtn.classList.remove("copied");
      }, 2000);
    }).catch(() => {
      copyBtn.textContent = "❌ 复制失败";
      setTimeout(() => {
        copyBtn.textContent = "📋 复制路径";
      }, 1500);
    });
  });

  // 滚动到顶部
  modalOverlay.querySelector(".modal").scrollTop = 0;
}

function closeModal() {
  modalOverlay.style.display = "none";
  modalOverlay.innerHTML = "";
}

// ========== 搜索事件 ==========
let searchTimeout;
searchInput.addEventListener("input", (e) => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    currentSearch = e.target.value.trim();
    filterAndRender();
  }, 200);
});

// 搜索快捷键 Ctrl+K
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
});

// ========== 启动 ==========
document.addEventListener("DOMContentLoaded", init);
