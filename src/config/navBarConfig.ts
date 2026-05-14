import {
	LinkPreset,
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/config";
import { siteConfig } from "./siteConfig";

// B 站风格一级平铺导航配置
const getDynamicNavBarConfig = (): NavBarConfig => {
	const links: (NavBarLink | LinkPreset)[] = [
		// 首页
		LinkPreset.Home,

		// 归档
		LinkPreset.Archive,

		// 根据配置决定是否添加友链
		...(siteConfig.pages.friends ? [LinkPreset.Friends] : []),

		// 根据配置决定是否添加留言板
		...(siteConfig.pages.guestbook ? [LinkPreset.Guestbook] : []),

		// 相册
		...(siteConfig.pages.gallery ? [LinkPreset.Gallery] : []),

		// 番组计划
		...(siteConfig.pages.bangumi ? [LinkPreset.Bangumi] : []),

		// 关于
		LinkPreset.About,
	];

	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
