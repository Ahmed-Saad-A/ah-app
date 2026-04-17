import React from 'react';
import {
  LayoutGrid,
  IceCream,
  Coffee,
  Croissant,
  UtensilsCrossed,
  Cookie,
  Candy,
} from 'lucide-react';

/* ─── Types ─── */

export type Category =
  | 'all'
  | 'cold'
  | 'hot'
  | 'biscuit'
  | 'pate'
  | 'chocolate'
  | 'snacks';

export interface CategoryItem {
  id: Category;
  label: string;
  icon: React.ReactElement;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  cat: Exclude<Category, 'all'>;
  image: string;
}

/* ─── Categories ─── */

export const CATEGORIES: CategoryItem[] = [
  { id: 'all', label: 'الكل', icon: React.createElement(LayoutGrid, { size: 18, strokeWidth: 2.5 }) },
  { id: 'cold', label: 'ساقع', icon: React.createElement(IceCream, { size: 18, strokeWidth: 2.5 }) },
  { id: 'hot', label: 'سخن', icon: React.createElement(Coffee, { size: 18, strokeWidth: 2.5 }) },
  { id: 'pate', label: 'المخبوزات', icon: React.createElement(Croissant, { size: 18, strokeWidth: 2.5 }) },
  { id: 'snacks', label: 'سناكس', icon: React.createElement(UtensilsCrossed, { size: 18, strokeWidth: 2.5 }) },
  { id: 'biscuit', label: 'بسكويت', icon: React.createElement(Cookie, { size: 18, strokeWidth: 2.5 }) },
  { id: 'chocolate', label: 'شوكولاتة', icon: React.createElement(Candy, { size: 18, strokeWidth: 2.5 }) },
];

/* ─── Products ─── */

export const MOCK_PRODUCTS: Product[] = [
  // ─── مشروبات باردة ───
  { id: 1, name: 'V-Cola كولا مصري', price: 10, cat: 'cold', image: 'https://demo.myecom.io/storage/images/products/65675c9e3345d.webp' }, // رابط بديل للكولا
  { id: 2, name: 'اسبيرو سباتس - ليمون', price: 12, cat: 'cold', image: 'https://api.beezzway.com/storage/media/2517/Spiro-Spathis-Lemon-330ml.png' },
  { id: 3, name: 'عصير جهينة بيور برتقال', price: 15, cat: 'cold', image: 'https://m.media-amazon.com/images/I/51H-iVl7l-L._AC_SL1000_.jpg' },
  { id: 4, name: 'حليب المراعي شوكولاتة', price: 15, cat: 'cold', image: 'https://m.media-amazon.com/images/I/61m1L+Ie4ML._AC_SL1500_.jpg' },
  { id: 5, name: 'عصير بيتي مانجو', price: 10, cat: 'cold', image: 'https://m.media-amazon.com/images/I/51IatZ-U8BL._AC_SL1000_.jpg' },
  { id: 6, name: 'مياه معدنية نستله 600مل', price: 7, cat: 'cold', image: 'https://m.media-amazon.com/images/I/4166R80i7fL._AC_SL1000_.jpg' },
  { id: 7, name: 'بيج كولا 1 لتر', price: 15, cat: 'cold', image: 'https://m.media-amazon.com/images/I/61Iunq+X2LL._AC_SL1000_.jpg' },

  // ─── مشروبات ساخنة ───
  { id: 8, name: 'نسكافيه بلاك 3*1', price: 8, cat: 'hot', image: 'https://m.media-amazon.com/images/I/61X-U5Z6L-L._AC_SL1500_.jpg' },
  { id: 9, name: 'شاي ليبتون فتلة', price: 5, cat: 'hot', image: 'https://m.media-amazon.com/images/I/71R9U8vLg8L._AC_SL1500_.jpg' },
  { id: 10, name: 'مصر كافيه - قهوة', price: 7, cat: 'hot', image: 'https://m.media-amazon.com/images/I/81+mC9-U+OL._AC_SL1500_.jpg' },
  { id: 11, name: 'كاكاو ساخن باللبن', price: 20, cat: 'hot', image: 'https://m.media-amazon.com/images/I/71YFvA-TzSL._AC_SL1500_.jpg' },

  // ─── مخبوزات وباتيه ───
  { id: 12, name: 'مولتو ميني شوكولاتة', price: 10, cat: 'pate', image: 'https://fathalla-market.com/wp-content/uploads/2022/10/molto-mini-choc.jpg' },
  { id: 13, name: 'باتيه ايديتو جبنة دومتي', price: 12, cat: 'pate', image: 'https://m.media-amazon.com/images/I/51V668eAn3L._AC_SL1000_.jpg' },
  { id: 14, name: 'باتيه صن بايتس زعتر', price: 10, cat: 'pate', image: 'https://m.media-amazon.com/images/I/61NlUj042QL._AC_SL1024_.jpg' },

  // ─── سناكس ───
  { id: 15, name: 'شيبسي تايجر شطة وليمون', price: 10, cat: 'snacks', image: 'https://m.media-amazon.com/images/I/81X68pC2M-L._AC_SL1500_.jpg' },
  { id: 16, name: 'شيبسي فوكس ملح', price: 7, cat: 'snacks', image: 'https://m.media-amazon.com/images/I/81X68pC2M-L._AC_SL1500_.jpg' },
  { id: 17, name: 'بيج شيبس كباب', price: 10, cat: 'snacks', image: 'https://m.media-amazon.com/images/I/71oX-IqjWqL._AC_SL1500_.jpg' },
  { id: 18, name: 'برافا ملح بحر', price: 15, cat: 'snacks', image: 'https://m.media-amazon.com/images/I/61S6h7i0R6L._AC_SL1124_.jpg' },

  // ─── بسكويت وشوكولاتة ───
  { id: 19, name: 'بسكويت لمبادا', price: 5, cat: 'biscuit', image: 'https://fathalla-market.com/wp-content/uploads/2021/05/Lambada.jpg' },
  { id: 20, name: 'بسكويت أولكر تمر', price: 7, cat: 'biscuit', image: 'https://m.media-amazon.com/images/I/71k4vO-X-4L._AC_SL1500_.jpg' },
  { id: 21, name: 'شوكولاتة كوفرتينا', price: 10, cat: 'chocolate', image: 'https://m.media-amazon.com/images/I/51vIqI8IuXL._AC_SL1000_.jpg' },
  { id: 22, name: 'بسكويت ماري الأصلي', price: 5, cat: 'biscuit', image: 'https://m.media-amazon.com/images/I/61Iunq+X2LL._AC_SL1000_.jpg' },
];