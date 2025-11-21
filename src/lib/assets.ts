/**
 * Helper functions để link CSS, JS, và images từ public folder
 * Tất cả các file trong public/ có thể được truy cập trực tiếp từ root URL
 */

/**
 * Lấy URL cho file trong thư mục media
 * @param path - Đường dẫn tương đối từ public/media
 * @returns URL đầy đủ
 * @example getMediaUrl('system/css/joomla-fontawesome.min0c40.css')
 */
export function getMediaUrl(path: string): string {
  return `/media/${path}`;
}

/**
 * Lấy URL cho file trong thư mục templates
 * @param path - Đường dẫn tương đối từ public/templates
 * @returns URL đầy đủ
 * @example getTemplateUrl('yootheme/js/theme0c40.js')
 */
export function getTemplateUrl(path: string): string {
  return `/templates/${path}`;
}

/**
 * Lấy URL cho image từ templates
 * @param path - Đường dẫn tương đối từ public/templates
 * @returns URL đầy đủ
 * @example getTemplateImageUrl('yootheme/logo/logo.png')
 */
export function getTemplateImageUrl(path: string): string {
  return `/templates/${path}`;
}

/**
 * Lấy URL cho image từ media
 * @param path - Đường dẫn tương đối từ public/media
 * @returns URL đầy đủ
 * @example getMediaImageUrl('mod_languages/images/en_gb.gif')
 */
export function getMediaImageUrl(path: string): string {
  return `/media/${path}`;
}

/**
 * Lấy URL cho CSS file từ media
 * @param path - Đường dẫn tương đối từ public/media
 * @returns URL đầy đủ
 * @example getMediaCssUrl('system/css/joomla-fontawesome.min0c40.css')
 */
export function getMediaCssUrl(path: string): string {
  return `/media/${path}`;
}

/**
 * Lấy URL cho JS file từ media
 * @param path - Đường dẫn tương đối từ public/media
 * @returns URL đầy đủ
 * @example getMediaJsUrl('vendor/jquery/js/jquery.min8a0c.js')
 */
export function getMediaJsUrl(path: string): string {
  return `/media/${path}`;
}

/**
 * Lấy URL cho CSS file từ templates
 * @param path - Đường dẫn tương đối từ public/templates
 * @returns URL đầy đủ
 * @example getTemplateCssUrl('yootheme_ca/css/theme.9d8de.css')
 */
export function getTemplateCssUrl(path: string): string {
  return `/templates/${path}`;
}

/**
 * Lấy URL cho JS file từ templates
 * @param path - Đường dẫn tương đối từ public/templates
 * @returns URL đầy đủ
 * @example getTemplateJsUrl('yootheme/js/theme0c40.js')
 */
export function getTemplateJsUrl(path: string): string {
  return `/templates/${path}`;
}

/**
 * Lấy URL cho font file từ templates
 * @param path - Đường dẫn tương đối từ public/templates
 * @returns URL đầy đủ
 * @example getTemplateFontUrl('yootheme/fonts/Raleway-Bold.woff2')
 */
export function getTemplateFontUrl(path: string): string {
  return `/templates/${path}`;
}
