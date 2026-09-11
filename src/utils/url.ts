/** Returns the full URL path including the configured base. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Formats a Date as dd/mm/yyyy for Vietnamese locale. */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('vi-VN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

/** Map category slug to Vietnamese label. */
export const categoryLabels: Record<string, string> = {
  'tin-cong-ty': 'Tin công ty',
  'kien-thuc': 'Kiến thức',
  'san-pham': 'Sản phẩm',
  'tuyen-dung': 'Tuyển dụng',
};
