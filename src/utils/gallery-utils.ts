import type { GalleryAlbum } from "@/types/config";
import { url } from "@/utils/url-utils";

function withBase(assetPath: string): string {
	if (!assetPath) return "";
	if (/^(https?:)?\/\//i.test(assetPath) || /^(data|blob):/i.test(assetPath)) {
		return assetPath;
	}
	const normalizedPath = assetPath.startsWith("/")
		? assetPath
		: `/${assetPath}`;
	const base = import.meta.env.BASE_URL || "/";
	if (base !== "/" && normalizedPath.startsWith(base)) {
		return normalizedPath;
	}
	return url(normalizedPath);
}

// 构建时通过 Vite 的 import.meta.glob 预扫描所有 gallery 图片
// 兼容 Node.js 和 Cloudflare Workers 环境
const galleryImageMap = import.meta.glob<string>(
	"../../public/gallery/**/*.{jpg,jpeg,png,webp,avif,gif}",
	{ eager: true, query: "?url", import: "default" },
);

/**
 * 扫描相册目录中的所有图片文件
 */
export function scanAlbumPhotos(albumId: string): string[] {
	const prefix = `../../public/gallery/${albumId}/`;
	const files: string[] = [];

	for (const filePath of Object.keys(galleryImageMap)) {
		if (filePath.startsWith(prefix)) {
			const fileName = filePath.slice(prefix.length);
			// 跳过子目录中的文件
			if (fileName.includes("/")) continue;
			files.push(fileName);
		}
	}

	files.sort();

	// 将 cover.* 排到第一位
	const coverIdx = files.findIndex((f) => /^cover\./i.test(f));
	if (coverIdx > 0) {
		const [coverFile] = files.splice(coverIdx, 1);
		files.unshift(coverFile);
	}

	return files.map((f) => withBase(`/gallery/${albumId}/${f}`));
}

/**
 * 获取相册封面图
 * 优先级：手动指定 > cover.* 文件 > 第一张图片
 */
export function getAlbumCover(album: GalleryAlbum, photos: string[]): string {
	if (album.cover) return withBase(album.cover);
	const coverFile = photos.find((p) => /\/cover\./i.test(p));
	return coverFile || photos[0] || "";
}
