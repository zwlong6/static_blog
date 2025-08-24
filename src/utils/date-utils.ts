import { siteConfig } from "../config";

export function formatDateToYYYYMMDD(date: Date): string {
	return date.toISOString().substring(0, 10);
}

// 格式化日期时间，包含时分秒
export function formatDateTimeToYYYYMMDDHHMMSS(date: Date): string {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');
	
	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// 国际化日期格式化函数
export function formatDateI18n(dateString: string): string {
	const date = new Date(dateString);
	const lang = siteConfig.lang || "en";
	
	// 根据语言设置不同的日期格式
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};
	
	// 语言代码映射
	const localeMap: Record<string, string> = {
		"zh_CN": "zh-CN",
		"zh_TW": "zh-TW",
		"en": "en-US",
		"ja": "ja-JP",
		"ko": "ko-KR",
		"es": "es-ES",
		"th": "th-TH",
		"vi": "vi-VN",
		"tr": "tr-TR",
		"id": "id-ID",
		"fr": "fr-FR",
		"de": "de-DE",
		"ru": "ru-RU",
		"ar": "ar-SA",
	};
	
	const locale = localeMap[lang] || "en-US";
	return date.toLocaleDateString(locale, options);
}

// 国际化日期时间格式化函数，包含时分秒
export function formatDateTimeI18n(dateString: string): string {
	const date = new Date(dateString);
	const lang = siteConfig.lang || "en";
	
	// 根据语言设置不同的日期时间格式
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	};
	
	// 语言代码映射
	const localeMap: Record<string, string> = {
		"zh_CN": "zh-CN",
		"zh_TW": "zh-TW",
		"en": "en-US",
		"ja": "ja-JP",
		"ko": "ko-KR",
		"es": "es-ES",
		"th": "th-TH",
		"vi": "vi-VN",
		"tr": "tr-TR",
		"id": "id-ID",
		"fr": "fr-FR",
		"de": "de-DE",
		"ru": "ru-RU",
		"ar": "ar-SA",
	};
	
	const locale = localeMap[lang] || "en-US";
	return date.toLocaleString(locale, options);
}
