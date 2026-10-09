'use strict';
const STORE_WHATSAPP_NUMBER = "201273966211"; 

const CFG = { cur: 'ج.م', ship: 60, free: 10000, promos: { BADR5: 0.05, WELCOME10: 0.10 } };
const K = { cart: 'badr_cart', fav: 'badr_favs', theme: 'badr_theme', promo: 'badr_promo' };
const CATS = { 
  all: 'الكل', 
  laptops: 'لابتوبات', 
  phones: 'موبايلات', 
  tablets: 'تابلت', 
  peripherals: 'ماوسات وكيبوردات',
  gaming: 'أجهزة جيمنج', 
  powerbanks: 'باور بانك وشواحن' 
};
const EMO = { laptops: '💻', phones: '📱', tablets: '📲', peripherals: '⌨️', gaming: '🎮', powerbanks: '🔋' };

// قاعدة بيانات المنتجات مع كافة التوسيعات والماوسات والكيبوردات الجديدة
const P = [
  // ==================== 40+ LAPTOPS ====================
  // Apple MacBooks
  { id: 101, n: 'MacBook Air M1 256GB', c: 'laptops', b: 'Apple', pr: 42000, r: 4.8, s: 'M1 Chip • 8GB RAM • 256GB SSD', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80', cpu: 'Apple M1', ram: '8GB Unified', screen: '13.3" Retina', battery: '18 Hours', camera: '720p HD' },
  { id: 102, n: 'MacBook Air M2 13" 256GB', c: 'laptops', b: 'Apple', pr: 51000, r: 4.9, s: 'M2 Chip • 8GB RAM • 256GB SSD', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80', cpu: 'Apple M2', ram: '8GB Unified', screen: '13.6" Liquid Retina', battery: '18 Hours', camera: '1080p HD' },
  { id: 103, n: 'MacBook Air M2 15" 512GB', c: 'laptops', b: 'Apple', pr: 61000, r: 4.9, s: 'M2 Chip • 16GB RAM • 512GB SSD', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80', cpu: 'Apple M2', ram: '16GB Unified', screen: '15.3" Liquid Retina', battery: '18 Hours', camera: '1080p HD' },
  { id: 104, n: 'MacBook Air M3 13" 256GB', c: 'laptops', b: 'Apple', pr: 62000, r: 4.9, s: 'M3 Chip • 8GB RAM • 256GB SSD', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80', cpu: 'Apple M3', ram: '8GB Unified', screen: '13.6" Liquid Retina', battery: '18 Hours', camera: '1080p HD' },
  { id: 105, n: 'MacBook Air M3 15" 512GB', c: 'laptops', b: 'Apple', pr: 74000, r: 5.0, s: 'M3 Chip • 16GB RAM • 512GB SSD', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80', cpu: 'Apple M3', ram: '16GB Unified', screen: '15.3" Liquid Retina', battery: '18 Hours', camera: '1080p HD' },
  { id: 106, n: 'MacBook Pro 14" M3 512GB', c: 'laptops', b: 'Apple', pr: 82000, r: 4.9, s: 'M3 Chip • 8GB RAM • 512GB SSD Pro', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80', cpu: 'Apple M3', ram: '8GB Unified', screen: '14.2" Liquid Retina XDR 120Hz', battery: '22 Hours', camera: '1080p HD' },
  { id: 107, n: 'MacBook Pro 14" M3 Pro 512GB', c: 'laptops', b: 'Apple', pr: 98000, r: 5.0, s: 'M3 Pro • 18GB RAM • 512GB SSD', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80', tag: 'احترافي', cpu: 'Apple M3 Pro', ram: '18GB Unified', screen: '14.2" Liquid Retina XDR', battery: '18 Hours', camera: '1080p HD' },
  { id: 108, n: 'MacBook Pro 16" M3 Max 1TB', c: 'laptops', b: 'Apple', pr: 168000, r: 5.0, s: 'M3 Max • 36GB RAM • 1TB SSD', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80', tag: 'الأقوى عالمياً', cpu: 'Apple M3 Max', ram: '36GB Unified', screen: '16.2" Liquid Retina XDR', battery: '22 Hours', camera: '1080p HD' },

  // Lenovo Laptops
  { id: 109, n: 'Lenovo IdeaPad Slim 3', c: 'laptops', b: 'Lenovo', pr: 18500, r: 4.3, s: 'Core i3 1215U • 8GB RAM • 256GB SSD', img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80', cpu: 'Core i3 1215U', ram: '8GB DDR4', screen: '15.6" FHD', battery: '45 Wh', camera: '720p HD' },
  { id: 110, n: 'Lenovo IdeaPad Slim 5', c: 'laptops', b: 'Lenovo', pr: 28500, r: 4.6, s: 'Core i7 1355U • 16GB RAM • 512GB SSD', img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80', cpu: 'Core i7 1355U', ram: '16GB DDR4', screen: '15.6" FHD IPS', battery: '56.6 Wh', camera: '1080p FHD' },
  { id: 111, n: 'Lenovo ThinkPad E14 Gen 5', c: 'laptops', b: 'Lenovo', pr: 34000, r: 4.7, s: 'Core i5 1335U • 16GB RAM • 512GB SSD', img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80', cpu: 'Core i5 1335U', ram: '16GB DDR4', screen: '14" FHD IPS', battery: '57 Wh', camera: '1080p FHD' },
  { id: 112, n: 'Lenovo ThinkPad E16 Gen 1', c: 'laptops', b: 'Lenovo', pr: 39500, r: 4.8, s: 'Core i7 1355U • 16GB RAM • 1TB SSD', img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80', cpu: 'Core i7 1355U', ram: '16GB DDR4', screen: '16" WUXGA', battery: '57 Wh', camera: '1080p FHD' },
  { id: 113, n: 'Lenovo ThinkPad T14 Gen 4', c: 'laptops', b: 'Lenovo', pr: 52000, r: 4.9, s: 'Core i7 Evo • 32GB RAM • 1TB SSD', img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80', tag: 'رجال الأعمال', cpu: 'Core i7 1360P', ram: '32GB DDR5', screen: '14" WUXGA IPS', battery: '52.5 Wh', camera: '1080p FHD IR' },
  { id: 114, n: 'Lenovo LOQ 15 Gaming', c: 'laptops', b: 'Lenovo', pr: 42000, r: 4.6, s: 'Core i5 13420H • RTX 4050 6GB • 16GB RAM', img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80', cpu: 'Core i5 13420H', ram: '16GB DDR5', screen: '15.6" FHD 144Hz', battery: '60 Wh', camera: '1080p FHD' },
  { id: 115, n: 'Lenovo Legion Slim 5', c: 'laptops', b: 'Lenovo', pr: 58000, r: 4.8, s: 'Ryzen 7 7840HS • RTX 4060 8GB • 16GB RAM', img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80', tag: 'الأكثر مبيعاً', cpu: 'Ryzen 7 7840HS', ram: '16GB DDR5', screen: '16" WQXGA 165Hz', battery: '80 Wh', camera: '1080p FHD' },
  { id: 116, n: 'Lenovo Legion Pro 5', c: 'laptops', b: 'Lenovo', pr: 69000, r: 4.9, s: 'Core i7 13700HX • RTX 4070 8GB • 32GB RAM', img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80', cpu: 'Core i7 13700HX', ram: '32GB DDR5', screen: '16" WQXGA 240Hz', battery: '80 Wh', camera: '1080p FHD' },

  // HP Laptops
  { id: 117, n: 'HP 15-dw Student', c: 'laptops', b: 'HP', pr: 14500, r: 4.1, s: 'Celeron N4500 • 4GB RAM • 256GB SSD', img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=600&q=80', cpu: 'Celeron N4500', ram: '4GB DDR4', screen: '15.6" HD', battery: '41 Wh', camera: '720p HD' },
  { id: 118, n: 'HP Pavilion 15', c: 'laptops', b: 'HP', pr: 24900, r: 4.4, s: 'Core i5 1235U • 8GB RAM • 512GB SSD', img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=600&q=80', cpu: 'Core i5 1235U', ram: '8GB DDR4', screen: '15.6" FHD Touch', battery: '41 Wh', camera: '720p HD' },
  { id: 119, n: 'HP Pavilion Plus 14 OLED', c: 'laptops', b: 'HP', pr: 39500, r: 4.8, s: 'Core i7 13700H • 16GB RAM • 1TB OLED', img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=600&q=80', cpu: 'Core i7 13700H', ram: '16GB DDR5', screen: '14" 2.8K OLED 120Hz', battery: '68 Wh', camera: '5MP Camera' },
  { id: 120, n: 'HP ProBook 450 G10', c: 'laptops', b: 'HP', pr: 36500, r: 4.7, s: 'Core i7 1355U • 16GB RAM • 1TB SSD', img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=600&q=80', cpu: 'Core i7 1355U', ram: '16GB DDR4', screen: '15.6" FHD IPS', battery: '51 Wh', camera: '1080p FHD' },
  { id: 121, n: 'HP Victus 15 Gaming', c: 'laptops', b: 'HP', pr: 32500, r: 4.5, s: 'Core i5 12450H • RTX 3050 4GB • 16GB RAM', img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=600&q=80', cpu: 'Core i5 12450H', ram: '16GB DDR4', screen: '15.6" FHD 144Hz', battery: '52.5 Wh', camera: '720p HD' },
  { id: 122, n: 'HP Omen 16 Gaming', c: 'laptops', b: 'HP', pr: 67000, r: 4.8, s: 'Core i7 13700HX • RTX 4070 8GB • 16GB RAM', img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=600&q=80', cpu: 'Core i7 13700HX', ram: '16GB DDR5', screen: '16.1" QHD 240Hz', battery: '83 Wh', camera: '1080p FHD' },

  // Dell Laptops
  { id: 123, n: 'Dell Inspiron 3520', c: 'laptops', b: 'Dell', pr: 18900, r: 4.3, s: 'Core i3 1215U • 8GB RAM • 256GB SSD', img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80', cpu: 'Core i3 1215U', ram: '8GB DDR4', screen: '15.6" FHD 120Hz', battery: '41 Wh', camera: '720p HD' },
  { id: 124, n: 'Dell Inspiron 5430', c: 'laptops', b: 'Dell', pr: 33000, r: 4.6, s: 'Core i7 1355U • 16GB RAM • 512GB SSD', img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80', cpu: 'Core i7 1355U', ram: '16GB LPDDR5', screen: '14" FHD+ 16:10', battery: '54 Wh', camera: '1080p FHD' },
  { id: 125, n: 'Dell G15 5530 Gaming', c: 'laptops', b: 'Dell', pr: 44000, r: 4.7, s: 'Core i7 13650HX • RTX 4050 6GB • 16GB RAM', img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80', cpu: 'Core i7 13650HX', ram: '16GB DDR5', screen: '15.6" FHD 165Hz', battery: '86 Wh', camera: '720p HD' },
  { id: 126, n: 'Dell XPS 14 OLED', c: 'laptops', b: 'Dell', pr: 89000, r: 4.7, s: 'Core Ultra 7 • 16GB RAM • 1TB SSD OLED', img: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&q=80', cpu: 'Intel Core Ultra 7', ram: '16GB LPDDR5X', screen: '14.5" 3.2K OLED 120Hz', battery: '69.5 Wh', camera: '1080p FHD IR' },
  { id: 127, n: 'Dell Alienware m16 R1', c: 'laptops', b: 'Dell', pr: 105000, r: 4.9, s: 'Core i9 13900HX • RTX 4080 12GB • 32GB RAM', img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80', cpu: 'Core i9 13900HX', ram: '32GB DDR5', screen: '16" QHD+ 240Hz', battery: '86 Wh', camera: '1080p FHD IR' },

  // ASUS Laptops
  { id: 128, n: 'ASUS Vivobook 15', c: 'laptops', b: 'ASUS', pr: 21000, r: 4.4, s: 'Core i5 1235U • 8GB RAM • 512GB SSD', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80', cpu: 'Core i5 1235U', ram: '8GB DDR4', screen: '15.6" FHD Anti-Glare', battery: '42 Wh', camera: '720p HD' },
  { id: 129, n: 'ASUS Zenbook 14 OLED', c: 'laptops', b: 'ASUS', pr: 43500, r: 4.6, s: 'Core Ultra 7 • 16GB RAM • 1TB SSD OLED', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80', cpu: 'Core Ultra 7 155H', ram: '16GB LPDDR5X', screen: '14" 3K OLED 120Hz', battery: '75 Wh', camera: 'FHD IR Camera' },
  { id: 130, n: 'ASUS TUF Gaming A15', c: 'laptops', b: 'ASUS', pr: 38500, r: 4.7, s: 'Ryzen 7 7735HS • RTX 4050 6GB • 16GB RAM', img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80', cpu: 'Ryzen 7 7735HS', ram: '16GB DDR5', screen: '15.6" FHD 144Hz', battery: '90 Wh', camera: '720p HD' },
  { id: 131, n: 'ASUS ROG Strix G16', c: 'laptops', b: 'ASUS', pr: 69900, r: 4.9, s: 'Core i9 13980HX • RTX 4060 8GB • 16GB RAM', img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=600&q=80', tag: 'وحش الألعاب', cpu: 'Core i9 13980HX', ram: '16GB DDR5', screen: '16" FHD+ 165Hz', battery: '90 Wh', camera: '720p HD' },

  // ==================== 100 PHONES ====================
  // Apple iPhone
  { id: 201, n: 'iPhone 11 64GB', c: 'phones', b: 'Apple', pr: 17200, r: 4.4, s: '64GB • A13 Bionic • Liquid Retina', img: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=600&q=80', cpu: 'A13 Bionic', ram: '4GB', screen: '6.1" LCD', battery: '3110 mAh', camera: '12MP Dual' },
  { id: 202, n: 'iPhone 11 128GB', c: 'phones', b: 'Apple', pr: 19500, r: 4.5, s: '128GB • Liquid Retina • A13 Bionic', img: 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?auto=format&fit=crop&w=600&q=80', cpu: 'A13 Bionic', ram: '4GB', screen: '6.1" LCD', battery: '3110 mAh', camera: '12MP Dual' },
  { id: 203, n: 'iPhone 12 64GB', c: 'phones', b: 'Apple', pr: 22000, r: 4.6, s: '64GB • Super Retina OLED • 5G', img: 'https://images.unsplash.com/photo-1603891128711-11b4b03bb138?auto=format&fit=crop&w=600&q=80', cpu: 'A14 Bionic', ram: '4GB', screen: '6.1" OLED', battery: '2815 mAh', camera: '12MP Dual' },
  { id: 204, n: 'iPhone 12 128GB', c: 'phones', b: 'Apple', pr: 24500, r: 4.7, s: '128GB • OLED Super Retina • 5G', img: 'https://images.unsplash.com/photo-1603891128711-11b4b03bb138?auto=format&fit=crop&w=600&q=80', cpu: 'A14 Bionic', ram: '4GB', screen: '6.1" OLED', battery: '2815 mAh', camera: '12MP Dual' },
  { id: 205, n: 'iPhone 13 mini 128GB', c: 'phones', b: 'Apple', pr: 26000, r: 4.6, s: '128GB • Compact OLED • A15', img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=600&q=80', cpu: 'A15 Bionic', ram: '4GB', screen: '5.4" OLED', battery: '2438 mAh', camera: '12MP Dual' },
  { id: 206, n: 'iPhone 13 128GB', c: 'phones', b: 'Apple', pr: 29500, r: 4.8, s: '128GB • Cinematic Mode • A15 Bionic', img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=600&q=80', tag: 'الأكثر طلباً', cpu: 'A15 Bionic', ram: '4GB', screen: '6.1" OLED', battery: '3240 mAh', camera: '12MP Dual' },
  { id: 207, n: 'iPhone 13 256GB', c: 'phones', b: 'Apple', pr: 34000, r: 4.8, s: '256GB • A15 Bionic • Sensor Shift', img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=600&q=80', cpu: 'A15 Bionic', ram: '4GB', screen: '6.1" OLED', battery: '3240 mAh', camera: '12MP Dual' },
  { id: 208, n: 'iPhone 13 Pro 128GB', c: 'phones', b: 'Apple', pr: 38000, r: 4.8, s: '128GB • ProMotion 120Hz • Triple Cam', img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=600&q=80', cpu: 'A15 Bionic', ram: '6GB', screen: '6.1" OLED 120Hz', battery: '3095 mAh', camera: '12MP Triple' },
  { id: 209, n: 'iPhone 13 Pro Max 256GB', c: 'phones', b: 'Apple', pr: 44000, r: 4.9, s: '256GB • ProMotion 120Hz • Battery King', img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&w=600&q=80', cpu: 'A15 Bionic', ram: '6GB', screen: '6.7" OLED 120Hz', battery: '4352 mAh', camera: '12MP Triple' },
  { id: 210, n: 'iPhone 14 128GB', c: 'phones', b: 'Apple', pr: 33500, r: 4.7, s: '128GB • Crash Detection • A15 Bionic', img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&w=600&q=80', cpu: 'A15 Bionic (5-core GPU)', ram: '6GB', screen: '6.1" OLED', battery: '3279 mAh', camera: '12MP Dual' },
  { id: 211, n: 'iPhone 14 Plus 128GB', c: 'phones', b: 'Apple', pr: 37500, r: 4.7, s: '128GB • 6.7" Large Display • A15', img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&w=600&q=80', cpu: 'A15 Bionic', ram: '6GB', screen: '6.7" OLED', battery: '4325 mAh', camera: '12MP Dual' },
  { id: 212, n: 'iPhone 14 Pro 128GB', c: 'phones', b: 'Apple', pr: 46000, r: 4.8, s: '128GB • Dynamic Island • 48MP Cam', img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&w=600&q=80', cpu: 'A16 Bionic', ram: '6GB', screen: '6.1" OLED 120Hz', battery: '3200 mAh', camera: '48MP Triple' },
  { id: 213, n: 'iPhone 14 Pro Max 256GB', c: 'phones', b: 'Apple', pr: 53500, r: 4.9, s: '256GB • Dynamic Island • Always-On', img: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&w=600&q=80', cpu: 'A16 Bionic', ram: '6GB', screen: '6.7" OLED 120Hz', battery: '4323 mAh', camera: '48MP Triple' },
  { id: 214, n: 'iPhone 15 128GB', c: 'phones', b: 'Apple', pr: 41500, r: 4.8, s: '128GB • USB-C • Dynamic Island • 48MP', img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80', cpu: 'A16 Bionic', ram: '6GB', screen: '6.1" OLED', battery: '3349 mAh', camera: '48MP Dual' },
  { id: 215, n: 'iPhone 15 256GB', c: 'phones', b: 'Apple', pr: 47000, r: 4.8, s: '256GB • USB-C • Dynamic Island', img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80', cpu: 'A16 Bionic', ram: '6GB', screen: '6.1" OLED', battery: '3349 mAh', camera: '48MP Dual' },
  { id: 216, n: 'iPhone 15 Plus 128GB', c: 'phones', b: 'Apple', pr: 46500, r: 4.8, s: '128GB • 6.7" Display • USB-C', img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80', cpu: 'A16 Bionic', ram: '6GB', screen: '6.7" OLED', battery: '4383 mAh', camera: '48MP Dual' },
  { id: 217, n: 'iPhone 15 Pro 128GB', c: 'phones', b: 'Apple', pr: 53000, r: 4.9, s: '128GB • Titanium • A17 Pro Chip', img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80', cpu: 'A17 Pro', ram: '8GB', screen: '6.1" OLED 120Hz', battery: '3274 mAh', camera: '48MP Triple' },
  { id: 218, n: 'iPhone 15 Pro 256GB', c: 'phones', b: 'Apple', pr: 58000, r: 4.9, s: '256GB • Titanium • Action Button', img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80', tag: 'الأعلى تقييماً', cpu: 'A17 Pro', ram: '8GB', screen: '6.1" OLED 120Hz', battery: '3274 mAh', camera: '48MP Triple' },
  { id: 219, n: 'iPhone 15 Pro Max 256GB', c: 'phones', b: 'Apple', pr: 68500, old: 72000, r: 4.9, s: '256GB • Titanium • 5x Optical Zoom', img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80', tag: 'التريند الأول 🔥', cpu: 'A17 Pro', ram: '8GB', screen: '6.7" OLED 120Hz', battery: '4422 mAh', camera: '48MP Triple 5x' },
  { id: 220, n: 'iPhone 15 Pro Max 512GB', c: 'phones', b: 'Apple', pr: 79000, r: 5.0, s: '512GB • Titanium • ProRes Video', img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80', cpu: 'A17 Pro', ram: '8GB', screen: '6.7" OLED 120Hz', battery: '4422 mAh', camera: '48MP Triple' },

  // Samsung Galaxy
  { id: 221, n: 'Samsung Galaxy A05 64GB', c: 'phones', b: 'Samsung', pr: 4800, r: 4.2, s: '64GB • 4GB RAM • Helio G85', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80', cpu: 'Helio G85', ram: '4GB', screen: '6.7" PLS LCD', battery: '5000 mAh', camera: '50MP Dual' },
  { id: 222, n: 'Samsung Galaxy A05s 128GB', c: 'phones', b: 'Samsung', pr: 6100, r: 4.3, s: '128GB • 4GB RAM • Snapdragon 680', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 680', ram: '4GB', screen: '6.7" FHD+ 90Hz', battery: '5000 mAh', camera: '50MP Triple' },
  { id: 223, n: 'Samsung Galaxy A15 128GB', c: 'phones', b: 'Samsung', pr: 7400, r: 4.4, s: '128GB • 6GB RAM • Super AMOLED 90Hz', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80', cpu: 'Helio G99', ram: '6GB', screen: '6.5" AMOLED 90Hz', battery: '5000 mAh', camera: '50MP Triple' },
  { id: 224, n: 'Samsung Galaxy A15 256GB', c: 'phones', b: 'Samsung', pr: 8300, r: 4.5, s: '256GB • 8GB RAM • Super AMOLED', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80', cpu: 'Helio G99', ram: '8GB', screen: '6.5" AMOLED 90Hz', battery: '5000 mAh', camera: '50MP Triple' },
  { id: 225, n: 'Samsung Galaxy A25 5G 128GB', c: 'phones', b: 'Samsung', pr: 10500, r: 4.5, s: '128GB • 6GB RAM • Exynos 1280 OIS', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80', cpu: 'Exynos 1280', ram: '6GB', screen: '6.5" AMOLED 120Hz', battery: '5000 mAh', camera: '50MP OIS' },
  { id: 226, n: 'Samsung Galaxy A34 5G 128GB', c: 'phones', b: 'Samsung', pr: 12200, r: 4.6, s: '128GB • 8GB RAM • IP67 Waterproof', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80', cpu: 'Dimensity 1080', ram: '8GB', screen: '6.6" AMOLED 120Hz', battery: '5000 mAh', camera: '48MP OIS' },
  { id: 227, n: 'Samsung Galaxy A35 5G 128GB', c: 'phones', b: 'Samsung', pr: 14800, r: 4.7, s: '128GB • 8GB RAM • Glass Design', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80', cpu: 'Exynos 1380', ram: '8GB', screen: '6.6" AMOLED 120Hz', battery: '5000 mAh', camera: '50MP OIS' },
  { id: 228, n: 'Samsung Galaxy A54 5G 256GB', c: 'phones', b: 'Samsung', pr: 16900, r: 4.7, s: '256GB • 8GB RAM • Nightography', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80', cpu: 'Exynos 1380', ram: '8GB', screen: '6.4" AMOLED 120Hz', battery: '5000 mAh', camera: '50MP OIS' },
  { id: 229, n: 'Samsung Galaxy A55 5G 256GB', c: 'phones', b: 'Samsung', pr: 18400, r: 4.8, s: '256GB • 8GB RAM • Metal Frame', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80', tag: 'الأكثر مبيعاً', cpu: 'Exynos 1480 AMD', ram: '8GB', screen: '6.6" AMOLED 120Hz', battery: '5000 mAh', camera: '50MP OIS' },
  { id: 230, n: 'Samsung Galaxy S23 FE 128GB', c: 'phones', b: 'Samsung', pr: 26500, r: 4.6, s: '128GB • 8GB RAM • Flagship Cam', img: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&w=600&q=80', cpu: 'Exynos 2200', ram: '8GB', screen: '6.4" AMOLED 120Hz', battery: '4500 mAh', camera: '50MP + 8MP 3x' },
  { id: 231, n: 'Samsung Galaxy S23 256GB', c: 'phones', b: 'Samsung', pr: 34000, r: 4.8, s: '256GB • Snapdragon 8 Gen 2', img: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 8 Gen 2', ram: '8GB', screen: '6.1" AMOLED 120Hz', battery: '3900 mAh', camera: '50MP Triple' },
  { id: 232, n: 'Samsung Galaxy S23 Ultra 256GB', c: 'phones', b: 'Samsung', pr: 48000, r: 4.9, s: '256GB • 200MP Cam • Built-in S Pen', img: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 8 Gen 2', ram: '12GB', screen: '6.8" Dynamic AMOLED', battery: '5000 mAh', camera: '200MP Quad' },
  { id: 233, n: 'Samsung Galaxy S23 Ultra 512GB', c: 'phones', b: 'Samsung', pr: 54000, r: 4.9, s: '512GB • 12GB RAM • 10x Optical Zoom', img: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 8 Gen 2', ram: '12GB', screen: '6.8" AMOLED 120Hz', battery: '5000 mAh', camera: '200MP Quad' },
  { id: 234, n: 'Samsung Galaxy S24 256GB', c: 'phones', b: 'Samsung', pr: 39500, r: 4.7, s: '256GB • Galaxy AI • 120Hz LTPO', img: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&w=600&q=80', cpu: 'Exynos 2400', ram: '8GB', screen: '6.2" LTPO AMOLED', battery: '4000 mAh', camera: '50MP Triple' },
  { id: 235, n: 'Samsung Galaxy S24+ 256GB', c: 'phones', b: 'Samsung', pr: 48500, r: 4.8, s: '256GB • 12GB RAM • QHD+ Screen', img: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&w=600&q=80', cpu: 'Exynos 2400', ram: '12GB', screen: '6.7" QHD+ AMOLED', battery: '4900 mAh', camera: '50MP Triple' },
  { id: 236, n: 'Samsung Galaxy S24 Ultra 256GB', c: 'phones', b: 'Samsung', pr: 62000, r: 4.9, s: '256GB • Titanium • Galaxy AI • 200MP', img: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&w=600&q=80', tag: 'وحش الأندرويد', cpu: 'Snapdragon 8 Gen 3', ram: '12GB', screen: '6.8" QHD+ 120Hz', battery: '5000 mAh', camera: '200MP Quad' },
  { id: 237, n: 'Samsung Galaxy S24 Ultra 512GB', c: 'phones', b: 'Samsung', pr: 69500, r: 5.0, s: '512GB • Titanium • Galaxy AI', img: 'https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 8 Gen 3', ram: '12GB', screen: '6.8" QHD+ 120Hz', battery: '5000 mAh', camera: '200MP Quad' },
  { id: 238, n: 'Samsung Galaxy Z Flip 5 256GB', c: 'phones', b: 'Samsung', pr: 42000, r: 4.7, s: '256GB • Flex Window Foldable', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 8 Gen 2', ram: '8GB', screen: '6.7" Foldable AMOLED', battery: '3700 mAh', camera: '12MP Dual' },
  { id: 239, n: 'Samsung Galaxy Z Flip 6 256GB', c: 'phones', b: 'Samsung', pr: 51000, r: 4.8, s: '256GB • 50MP Cam • Galaxy AI', img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 8 Gen 3', ram: '12GB', screen: '6.7" Foldable AMOLED', battery: '4000 mAh', camera: '50MP Dual' },
  { id: 240, n: 'Samsung Galaxy Z Fold 6 512GB', c: 'phones', b: 'Samsung', pr: 82000, r: 4.9, s: '512GB • Dual Display Foldable', img: 'https://images.unsplash.com/photo-1595941069915-4ebc5157416d?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 8 Gen 3', ram: '12GB', screen: '7.6" Main + 6.3" Cover', battery: '4400 mAh', camera: '50MP Triple' },

  // Xiaomi / Poco
  { id: 241, n: 'Xiaomi Redmi A3 64GB', c: 'phones', b: 'Xiaomi', pr: 3900, r: 4.1, s: '64GB • 3GB RAM • 90Hz Screen', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', cpu: 'Helio G36', ram: '3GB', screen: '6.71" 90Hz', battery: '5000 mAh', camera: '8MP Dual' },
  { id: 242, n: 'Xiaomi Redmi 13C 128GB', c: 'phones', b: 'Xiaomi', pr: 5700, r: 4.3, s: '128GB • 4GB RAM • 50MP Cam', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', cpu: 'Helio G85', ram: '4GB', screen: '6.74" 90Hz', battery: '5000 mAh', camera: '50MP Triple' },
  { id: 243, n: 'Xiaomi Redmi 13C 256GB', c: 'phones', b: 'Xiaomi', pr: 6800, r: 4.4, s: '256GB • 8GB RAM • 5000mAh', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', cpu: 'Helio G85', ram: '8GB', screen: '6.74" 90Hz', battery: '5000 mAh', camera: '50MP Triple' },
  { id: 244, n: 'Xiaomi Redmi Note 13 128GB', c: 'phones', b: 'Xiaomi', pr: 8400, r: 4.5, s: '128GB • AMOLED 120Hz • 108MP', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 685', ram: '6GB', screen: '6.67" AMOLED 120Hz', battery: '5000 mAh', camera: '108MP Triple' },
  { id: 245, n: 'Xiaomi Redmi Note 13 256GB', c: 'phones', b: 'Xiaomi', pr: 9800, r: 4.6, s: '256GB • 8GB RAM • AMOLED 120Hz', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 685', ram: '8GB', screen: '6.67" AMOLED 120Hz', battery: '5000 mAh', camera: '108MP Triple' },
  { id: 246, n: 'Xiaomi Redmi Note 13 Pro 4G', c: 'phones', b: 'Xiaomi', pr: 13900, r: 4.7, s: '256GB • 200MP Cam OIS • 67W', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', cpu: 'Helio G99 Ultra', ram: '8GB', screen: '6.67" AMOLED 120Hz', battery: '5000 mAh', camera: '200MP OIS' },
  { id: 247, n: 'Xiaomi Redmi Note 13 Pro 5G', c: 'phones', b: 'Xiaomi', pr: 16800, r: 4.7, s: '256GB • Snapdragon 7s Gen 2', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 7s Gen 2', ram: '8GB', screen: '6.67" 1.5K AMOLED', battery: '5100 mAh', camera: '200MP OIS' },
  { id: 248, n: 'Xiaomi Redmi Note 13 Pro+ 5G', c: 'phones', b: 'Xiaomi', pr: 20500, r: 4.8, s: '512GB • IP68 • 120W Charge', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', tag: 'شحن خارق', cpu: 'Dimensity 7200 Ultra', ram: '12GB', screen: '6.67" Curved AMOLED', battery: '5000 mAh', camera: '200MP OIS' },
  { id: 249, n: 'Xiaomi Poco C65 256GB', c: 'phones', b: 'Xiaomi', pr: 6300, r: 4.3, s: '256GB • 8GB RAM • Helio G85', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', cpu: 'Helio G85', ram: '8GB', screen: '6.74" 90Hz', battery: '5000 mAh', camera: '50MP Dual' },
  { id: 250, n: 'Xiaomi Poco M6 Pro 256GB', c: 'phones', b: 'Xiaomi', pr: 10800, r: 4.6, s: '256GB • Helio G99 Ultra • 67W', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', cpu: 'Helio G99 Ultra', ram: '8GB', screen: '6.67" Flow AMOLED', battery: '5000 mAh', camera: '64MP OIS' },
  { id: 251, n: 'Xiaomi Poco X6 5G 256GB', c: 'phones', b: 'Xiaomi', pr: 14200, r: 4.7, s: '256GB • 12GB RAM • 1.5K AMOLED', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 7s Gen 2', ram: '12GB', screen: '6.67" 1.5K 120Hz', battery: '5100 mAh', camera: '64MP OIS' },
  { id: 252, n: 'Xiaomi Poco X6 Pro 5G 512GB', c: 'phones', b: 'Xiaomi', pr: 18200, r: 4.8, s: '512GB • Dimensity 8300 Ultra', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', tag: 'وحش الألعاب', cpu: 'Dimensity 8300 Ultra', ram: '12GB', screen: '6.67" AMOLED 120Hz', battery: '5000 mAh', camera: '64MP OIS' },
  { id: 253, n: 'Xiaomi Poco F6 5G 512GB', c: 'phones', b: 'Xiaomi', pr: 22500, r: 4.8, s: '512GB • Snapdragon 8s Gen 3', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 8s Gen 3', ram: '12GB', screen: '6.67" AMOLED 120Hz', battery: '5000 mAh', camera: '50MP OIS' },
  { id: 254, n: 'Xiaomi Poco F6 Pro 512GB', c: 'phones', b: 'Xiaomi', pr: 28000, r: 4.9, s: '512GB • Snapdragon 8 Gen 2 • 120W', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 8 Gen 2', ram: '12GB', screen: '6.67" WQHD+ 120Hz', battery: '5000 mAh', camera: '50MP OIS' },
  { id: 255, n: 'Xiaomi 13T 256GB', c: 'phones', b: 'Xiaomi', pr: 23500, r: 4.7, s: '256GB • Leica Lens • 144Hz', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', cpu: 'Dimensity 8200 Ultra', ram: '12GB', screen: '6.67" AMOLED 144Hz', battery: '5000 mAh', camera: '50MP Leica' },
  { id: 256, n: 'Xiaomi 13T Pro 512GB', c: 'phones', b: 'Xiaomi', pr: 31000, r: 4.8, s: '512GB • Dimensity 9200+ • 120W', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', cpu: 'Dimensity 9200+', ram: '12GB', screen: '6.67" AMOLED 144Hz', battery: '5000 mAh', camera: '50MP Leica' },
  { id: 257, n: 'Xiaomi 14 512GB', c: 'phones', b: 'Xiaomi', pr: 41000, r: 4.9, s: '512GB • Snapdragon 8 Gen 3 • Leica', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 8 Gen 3', ram: '12GB', screen: '6.36" LTPO OLED', battery: '4610 mAh', camera: '50MP Triple Leica' },
  { id: 258, n: 'Xiaomi 14 Ultra 512GB', c: 'phones', b: 'Xiaomi', pr: 54000, r: 4.9, s: '512GB • Quad Leica Camera System', img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80', tag: 'تريند التصوير', cpu: 'Snapdragon 8 Gen 3', ram: '16GB', screen: '6.73" WQHD+ 120Hz', battery: '5000 mAh', camera: '50MP Quad Leica' },
  { id: 259, n: 'Xiaomi Pad 6 128GB Tablet', c: 'tablets', b: 'Xiaomi', pr: 14500, r: 4.7, s: '128GB • 6GB RAM • 144Hz 11" Screen', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 870', ram: '6GB', screen: '11" 144Hz', battery: '8840 mAh', camera: '13MP Main' },
  { id: 260, n: 'Xiaomi Pad 6 256GB Tablet', c: 'tablets', b: 'Xiaomi', pr: 16800, r: 4.8, s: '256GB • 8GB RAM • Snapdragon 870', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 870', ram: '8GB', screen: '11" 144Hz', battery: '8840 mAh', camera: '13MP Main' },

  // Realme
  { id: 261, n: 'Realme C51 128GB', c: 'phones', b: 'Realme', pr: 5100, r: 4.2, s: '128GB • 4GB RAM • 33W Fast Charge', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Unisoc T612', ram: '4GB', screen: '6.74" 90Hz', battery: '5000 mAh', camera: '50MP Main' },
  { id: 262, n: 'Realme C53 128GB', c: 'phones', b: 'Realme', pr: 6200, r: 4.3, s: '128GB • 6GB RAM • Champion Design', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Unisoc T612', ram: '6GB', screen: '6.74" 90Hz', battery: '5000 mAh', camera: '50MP Dual' },
  { id: 263, n: 'Realme C55 256GB', c: 'phones', b: 'Realme', pr: 7500, r: 4.4, s: '256GB • 8GB RAM • Mini Capsule', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Helio G88', ram: '8GB', screen: '6.72" 90Hz', battery: '5000 mAh', camera: '64MP Dual' },
  { id: 264, n: 'Realme C67 256GB', c: 'phones', b: 'Realme', pr: 8200, r: 4.4, s: '256GB • 8GB RAM • 108MP 3x Zoom', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 685', ram: '8GB', screen: '6.72" 90Hz', battery: '5000 mAh', camera: '108MP Dual' },
  { id: 265, n: 'Realme 11 4G 256GB', c: 'phones', b: 'Realme', pr: 9400, r: 4.5, s: '256GB • AMOLED 90Hz • 67W Charge', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Helio G99', ram: '8GB', screen: '6.4" AMOLED', battery: '5000 mAh', camera: '108MP Dual' },
  { id: 266, n: 'Realme 11 Pro 5G 256GB', c: 'phones', b: 'Realme', pr: 14500, r: 4.6, s: '256GB • Curved AMOLED 120Hz', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Dimensity 7050', ram: '8GB', screen: '6.7" Curved OLED', battery: '5000 mAh', camera: '100MP OIS' },
  { id: 267, n: 'Realme 11 Pro+ 5G 512GB', c: 'phones', b: 'Realme', pr: 17800, r: 4.7, s: '512GB • 200MP OIS • 100W Charge', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Dimensity 7050', ram: '12GB', screen: '6.7" Curved OLED', battery: '5000 mAh', camera: '200MP OIS' },
  { id: 268, n: 'Realme 12 5G 256GB', c: 'phones', b: 'Realme', pr: 10800, r: 4.5, s: '256GB • 8GB RAM • 108MP Cam', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Dimensity 6100+', ram: '8GB', screen: '6.72" 120Hz', battery: '5000 mAh', camera: '108MP Dual' },
  { id: 269, n: 'Realme 12+ 5G 256GB', c: 'phones', b: 'Realme', pr: 13500, r: 4.6, s: '256GB • AMOLED • Sony LYT-600 OIS', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Dimensity 7050', ram: '8GB', screen: '6.67" AMOLED 120Hz', battery: '5000 mAh', camera: '50MP Sony OIS' },
  { id: 270, n: 'Realme 12 Pro 5G 256GB', c: 'phones', b: 'Realme', pr: 16200, r: 4.7, s: '256GB • Telephoto Lens • Luxury Design', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 6 Gen 1', ram: '8GB', screen: '6.7" Curved OLED', battery: '5000 mAh', camera: '50MP OIS + 32MP 2x' },
  { id: 271, n: 'Realme 12 Pro+ 5G 512GB', c: 'phones', b: 'Realme', pr: 19500, r: 4.8, s: '512GB • Periscope Telephoto 64MP', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', tag: 'زوم خارق', cpu: 'Snapdragon 7s Gen 2', ram: '12GB', screen: '6.7" Curved OLED', battery: '5000 mAh', camera: '50MP OIS + 64MP 3x' },
  { id: 272, n: 'Realme GT Neo 5 1TB', c: 'phones', b: 'Realme', pr: 24000, r: 4.8, s: '1TB • 16GB RAM • 240W Ultra Charge', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 8+ Gen 1', ram: '16GB', screen: '6.74" 144Hz OLED', battery: '4600 mAh 240W', camera: '50MP Sony OIS' },
  { id: 273, n: 'Realme GT 6 512GB', c: 'phones', b: 'Realme', pr: 29500, r: 4.9, s: '512GB • Snapdragon 8s Gen 3 • 6000nits', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 8s Gen 3', ram: '16GB', screen: '6.78" LTPO AMOLED', battery: '5500 mAh 120W', camera: '50MP Sony OIS' },
  { id: 274, n: 'Realme GT 6T 256GB', c: 'phones', b: 'Realme', pr: 22000, r: 4.7, s: '256GB • Snapdragon 7+ Gen 3 • 120W', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 7+ Gen 3', ram: '12GB', screen: '6.78" LTPO AMOLED', battery: '5500 mAh 120W', camera: '50MP Sony OIS' },
  { id: 275, n: 'Realme 10 128GB', c: 'phones', b: 'Realme', pr: 6900, r: 4.4, s: '128GB • AMOLED 90Hz • Helio G99', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Helio G99', ram: '8GB', screen: '6.4" AMOLED', battery: '5000 mAh', camera: '50MP Dual' },

  // OPPO
  { id: 276, n: 'OPPO A18 128GB', c: 'phones', b: 'OPPO', pr: 5600, r: 4.2, s: '128GB • 4GB RAM • 90Hz Display', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Helio G85', ram: '4GB', screen: '6.56" 90Hz', battery: '5000 mAh', camera: '8MP Dual' },
  { id: 277, n: 'OPPO A38 128GB', c: 'phones', b: 'OPPO', pr: 6500, r: 4.3, s: '128GB • 4GB RAM • 33W Fast Charge', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Helio G85', ram: '4GB', screen: '6.56" 90Hz', battery: '5000 mAh', camera: '50MP Dual' },
  { id: 278, n: 'OPPO A58 128GB', c: 'phones', b: 'OPPO', pr: 7800, r: 4.4, s: '128GB • 6GB RAM • Full HD+ Screen', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Helio G85', ram: '6GB', screen: '6.72" FHD+', battery: '5000 mAh', camera: '50MP Dual' },
  { id: 279, n: 'OPPO A78 4G 256GB', c: 'phones', b: 'OPPO', pr: 9200, r: 4.5, s: '256GB • AMOLED 90Hz • 67W Charge', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 680', ram: '8GB', screen: '6.43" AMOLED', battery: '5000 mAh', camera: '50MP Dual' },
  { id: 280, n: 'OPPO A98 5G 256GB', c: 'phones', b: 'OPPO', pr: 11800, r: 4.5, s: '256GB • 120Hz Screen • 67W Charge', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Snapdragon 695', ram: '8GB', screen: '6.72" 120Hz', battery: '5000 mAh', camera: '64MP Triple' },
  { id: 281, n: 'OPPO Reno 10 5G 256GB', c: 'phones', b: 'OPPO', pr: 15500, r: 4.6, s: '256GB • Telephoto Portrait Cam', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Dimensity 7050', ram: '8GB', screen: '6.7" Curved OLED', battery: '5000 mAh', camera: '64MP + 32MP 2x' },
  { id: 282, n: 'OPPO Reno 11F 5G 256GB', c: 'phones', b: 'OPPO', pr: 13800, r: 4.6, s: '256GB • 64MP Cam • 67W Charge', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Dimensity 7050', ram: '8GB', screen: '6.7" OLED 120Hz', battery: '5000 mAh', camera: '64MP Triple' },
  { id: 283, n: 'OPPO Reno 11 5G 256GB', c: 'phones', b: 'OPPO', pr: 17900, r: 4.7, s: '256GB • Curved Screen • 32MP Portrait', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Dimensity 7050', ram: '12GB', screen: '6.7" Curved OLED', battery: '5000 mAh', camera: '50MP OIS + 32MP 2x' },
  { id: 284, n: 'OPPO Reno 11 Pro 5G 512GB', c: 'phones', b: 'OPPO', pr: 22500, r: 4.8, s: '512GB • 80W Charge • Sony IMX890', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Dimensity 8200', ram: '12GB', screen: '6.7" Curved OLED', battery: '4600 mAh', camera: '50MP OIS + 32MP 2x' },
  { id: 285, n: 'OPPO Reno 12 Pro 5G 512GB', c: 'phones', b: 'OPPO', pr: 27000, r: 4.9, s: '512GB • AI Portrait • Dimensity 7300 Energy', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80', cpu: 'Dimensity 7300 Energy', ram: '12GB', screen: '6.7" Curved OLED', battery: '5000 mAh', camera: '50MP OIS + 50MP 2x' },

  // ==================== 30+ MICE & KEYBOARDS (ماوسات وكيبوردات متعدّدة) ====================
  // Logitech Peripherals
  { id: 501, n: 'Logitech MX Master 3S Wireless Mouse', c: 'peripherals', b: 'Logitech', pr: 5400, r: 4.9, s: '8K DPI • Quiet Clicks • Electromagnetic Scroll', img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80', tag: 'الأعلى تقييماً', cpu: 'Darkfield Sensor', ram: 'N/A', screen: 'N/A', battery: '70 Days (USB-C)', camera: 'لا يوجد' },
  { id: 502, n: 'Logitech MX Keys S Wireless Keyboard', c: 'peripherals', b: 'Logitech', pr: 6200, r: 4.9, s: 'Smart Backlighting • Perfect Stroke Keys • Multi-Device', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80', cpu: 'Logi Bolt / BT', ram: 'N/A', screen: 'N/A', battery: '10 Days (Backlit)', camera: 'لا يوجد' },
  { id: 503, n: 'Logitech G Pro X Superlight 2 Wireless', c: 'peripherals', b: 'Logitech', pr: 7900, r: 5.0, s: '60g Ultra Lightweight • HERO 2 Sensor • 32K DPI', img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80', tag: 'ماوس إيسبورتس', cpu: 'HERO 2', ram: 'N/A', screen: 'N/A', battery: '95 Hours', camera: 'لا يوجد' },
  { id: 504, n: 'Logitech G502 HERO Gaming Mouse', c: 'peripherals', b: 'Logitech', pr: 2300, r: 4.8, s: '25,600 DPI • 11 Programmable Buttons • RGB Light', img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80', cpu: 'HERO 25K', ram: 'N/A', screen: 'N/A', battery: 'سلكي USB', camera: 'لا يوجد' },
  { id: 505, n: 'Logitech G213 Prodigy RGB Keyboard', c: 'peripherals', b: 'Logitech', pr: 2100, r: 4.6, s: 'Mech-Dome Switches • Spill Resistant • LIGHTSYNC RGB', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80', cpu: 'Logitech Gaming', ram: 'N/A', screen: 'N/A', battery: 'سلكي USB', camera: 'لا يوجد' },
  { id: 506, n: 'Logitech Pebble M350 Silent Wireless Mouse', c: 'peripherals', b: 'Logitech', pr: 950, r: 4.7, s: 'Silent Clicks • Ultra-Slim Design • Bluetooth + Receiver', img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80', cpu: 'Optical 1000 DPI', ram: 'N/A', screen: 'N/A', battery: '18 Months (1x AA)', camera: 'لا يوجد' },
  { id: 507, n: 'Logitech MK270 Wireless Combo', c: 'peripherals', b: 'Logitech', pr: 1450, r: 4.5, s: 'Keyboard & Mouse Combo • 2.4GHz Wireless • Long Battery', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80', cpu: 'Wireless 2.4G', ram: 'N/A', screen: 'N/A', battery: 'بطاريات AA/AAA', camera: 'لا يوجد' },
  { id: 508, n: 'Logitech G413 SE Mechanical Keyboard', c: 'peripherals', b: 'Logitech', pr: 3100, r: 4.7, s: 'Tactile Mechanical Switches • Aluminum Top Case • LED', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80', cpu: 'Tactile Switch', ram: 'N/A', screen: 'N/A', battery: 'سلكي USB', camera: 'لا يوجد' },

  // Razer Peripherals
  { id: 509, n: 'Razer DeathAdder V3 Pro Wireless', c: 'peripherals', b: 'Razer', pr: 7200, r: 4.9, s: '63g Ultra Lightweight • Focus Pro 30K Sensor • Optical Switches', img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80', tag: 'احترافي جيمنج', cpu: 'Focus Pro 30K', ram: 'N/A', screen: 'N/A', battery: '90 Hours', camera: 'لا يوجد' },
  { id: 510, n: 'Razer BlackWidow V4 Pro Mechanical Keyboard', c: 'peripherals', b: 'Razer', pr: 9800, r: 4.9, s: 'Green Clicky Switches • Command Dial • Chroma RGB', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80', cpu: 'Mechanical Green Switch', ram: 'N/A', screen: 'N/A', battery: 'سلكي Type-C', camera: 'لا يوجد' },
  { id: 511, n: 'Razer Basilisk V3 Ergonomic Gaming Mouse', c: 'peripherals', b: 'Razer', pr: 3200, r: 4.8, s: '10+1 Programmable Buttons • Tilt Scroll Wheel • Chroma RGB', img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80', cpu: 'Focus+ 26K Sensor', ram: 'N/A', screen: 'N/A', battery: 'سلكي USB Speedflex', camera: 'لا يوجد' },
  { id: 512, n: 'Razer Huntsman Mini 60% Optical Keyboard', c: 'peripherals', b: 'Razer', pr: 4900, r: 4.8, s: 'Linear Optical Switches • PBT Keycaps • Detachable Cable', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80', cpu: 'Razer Optical', ram: 'N/A', screen: 'N/A', battery: 'سلكي Type-C', camera: 'لا يوجد' },
  { id: 513, n: 'Razer Viper V2 Pro Wireless Gaming Mouse', c: 'peripherals', b: 'Razer', pr: 6800, r: 4.9, s: '58g Ultra Lightweight • Focus Pro 30K • Gen-3 Switches', img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80', cpu: 'Focus Pro 30K', ram: 'N/A', screen: 'N/A', battery: '80 Hours', camera: 'لا يوجد' },

  // Redragon Peripherals
  { id: 514, n: 'Redragon K552 KUMARA RGB Mechanical Keyboard', c: 'peripherals', b: 'Redragon', pr: 1650, r: 4.6, s: 'Dustproof Blue Switches • Compact 87 Key • Rainbow RGB', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80', tag: 'الأكثر مبيعاً', cpu: 'Outemu Blue', ram: 'N/A', screen: 'N/A', battery: 'سلكي USB', camera: 'لا يوجد' },
  { id: 515, n: 'Redragon M601 Centrophorus Gaming Mouse', c: 'peripherals', b: 'Redragon', pr: 650, r: 4.4, s: '3200 DPI • Ergonomic Design • Weight Tuning Set', img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80', cpu: '3200 DPI Sensor', ram: 'N/A', screen: 'N/A', battery: 'سلكي USB', camera: 'لا يوجد' },
  { id: 516, n: 'Redragon K530 Draconic 60% Wireless Keyboard', c: 'peripherals', b: 'Redragon', pr: 2450, r: 4.7, s: 'Bluetooth 5.0 Wireless • Hot-Swappable Brown Switches', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80', cpu: 'Hot-Swap Brown', ram: 'N/A', screen: 'N/A', battery: '3000 mAh Rechargeable', camera: 'لا يوجد' },
  { id: 517, n: 'Redragon M711 Cobra RGB Gaming Mouse', c: 'peripherals', b: 'Redragon', pr: 950, r: 4.7, s: '10,000 DPI Sensor • 7 Programmable Buttons • Chroma RGB', img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80', cpu: 'Pixart PMW3325', ram: 'N/A', screen: 'N/A', battery: 'سلكي USB', camera: 'لا يوجد' },
  { id: 518, n: 'Redragon S101 Gaming Keyboard and Mouse Combo', c: 'peripherals', b: 'Redragon', pr: 1350, r: 4.5, s: 'RGB Backlit Keyboard + 3200 DPI Gaming Mouse Combo', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80', cpu: 'Combo Redragon Tech', ram: 'N/A', screen: 'N/A', battery: 'سلكي USB', camera: 'لا يوجد' },

  // Corsair & SteelSeries Peripherals
  { id: 519, n: 'Corsair K70 RGB PRO Mechanical Keyboard', c: 'peripherals', b: 'Corsair', pr: 7200, r: 4.9, s: 'CHERRY MX Red • AXON 8,000Hz Hyper-Processing • PBT Double-Shot', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80', cpu: 'Corsair AXON', ram: 'N/A', screen: 'N/A', battery: 'سلكي Type-C', camera: 'لا يوجد' },
  { id: 520, n: 'Corsair Harpoon RGB Wireless Gaming Mouse', c: 'peripherals', b: 'Corsair', pr: 2200, r: 4.6, s: 'SLIPSTREAM 1ms Wireless • 10,000 DPI • 99g Lightweight', img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80', cpu: 'Optical 10K', ram: 'N/A', screen: 'N/A', battery: '60 Hours Wireless', camera: 'لا يوجد' },
  { id: 521, n: 'SteelSeries Apex Pro TKL Wireless Keyboard', c: 'peripherals', b: 'SteelSeries', pr: 11200, r: 5.0, s: 'OmniPoint 2.0 Adjustable Switches • OLED Smart Display', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80', tag: 'الأقوى للمحترفين', cpu: 'OmniPoint Adjustable', ram: 'N/A', screen: 'OLED Display', battery: '38 Hours Quantum 2.0', camera: 'لا يوجد' },
  { id: 522, n: 'SteelSeries Rival 3 Wireless Gaming Mouse', c: 'peripherals', b: 'SteelSeries', pr: 1950, r: 4.6, s: 'TrueMove Air Optical Sensor • 400+ Hour Battery Life', img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80', cpu: 'TrueMove Air', ram: 'N/A', screen: 'N/A', battery: '400+ Hours (2x AAA)', camera: 'لا يوجد' },
  { id: 523, n: 'Apple Magic Keyboard with Touch ID', c: 'peripherals', b: 'Apple', pr: 6500, r: 4.8, s: 'Wireless • Touch ID Sensor • Rechargeable Battery', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80', cpu: 'Apple Security Chip', ram: 'N/A', screen: 'N/A', battery: 'شهر أو أكثر (Lightning)', camera: 'لا يوجد' },
  { id: 524, n: 'Apple Magic Mouse - White', c: 'peripherals', b: 'Apple', pr: 3800, r: 4.6, s: 'Wireless • Multi-Touch Surface • Rechargeable', img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80', cpu: 'Multi-Touch Sensor', ram: 'N/A', screen: 'N/A', battery: 'شحن Lightning', camera: 'لا يوجد' },

  // ==================== 35 GAMING DEVICES ====================
  { id: 301, n: 'PlayStation 5 Slim Console', c: 'gaming', b: 'Sony', pr: 27500, r: 4.9, s: '1TB SSD • 4K 120Hz Gaming • Disc Edition', img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80', tag: 'الأعلى مبيعاً', cpu: 'AMD Zen 2', ram: '16GB GDDR6', screen: '4K 120Hz', battery: 'تيار مباشر', camera: 'لا يوجد' },
  { id: 302, n: 'PlayStation 5 Pro Console', c: 'gaming', b: 'Sony', pr: 42000, r: 5.0, s: '2TB SSD • PSSR AI Upscaling • Advanced Ray Tracing', img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80', tag: 'الأقوى عالمياً', cpu: 'AMD RDNA 3 Custom', ram: '16GB GDDR6', screen: '8K / 4K 120fps', battery: 'تيار مباشر', camera: 'لا يوجد' },
  { id: 303, n: 'PS5 DualSense Controller', c: 'gaming', b: 'Sony', pr: 3600, r: 4.8, s: 'Haptic Feedback • Adaptive Triggers', img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80', cpu: 'DualSense Chip', ram: 'N/A', screen: 'Touchpad', battery: '1560 mAh', camera: 'لا يوجد' },
  { id: 304, n: 'PS5 DualSense Edge Wireless Controller', c: 'gaming', b: 'Sony', pr: 9800, r: 4.9, s: 'Pro Gaming Controller • Replaceable Stick Modules', img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80', cpu: 'Edge Custom Chip', ram: 'N/A', screen: 'N/A', battery: 'قابل لإعادة الشحن', camera: 'لا يوجد' },
  { id: 305, n: 'PlayStation Portal Remote Player', c: 'gaming', b: 'Sony', pr: 12500, r: 4.7, s: '8" Full HD LCD Screen • 60fps PS5 Remote Play', img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=600&q=80', cpu: 'Remote Streaming Chip', ram: '4GB', screen: '8.0" FHD 60Hz', battery: '4370 mAh', camera: 'لا يوجد' },
  { id: 306, n: 'Xbox Series X 1TB Console', c: 'gaming', b: 'Microsoft', pr: 26000, r: 4.8, s: '12 Teraflops GPU • Quick Resume • True 4K', img: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=600&q=80', cpu: 'AMD Zen 2 3.8GHz', ram: '16GB GDDR6', screen: 'True 4K 120FPS', battery: 'تيار مباشر', camera: 'لا يوجد' },
  { id: 307, n: 'Xbox Series S 512GB Digital', c: 'gaming', b: 'Microsoft', pr: 16500, r: 4.6, s: 'All-Digital Gaming • 120 FPS • Compact', img: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=600&q=80', cpu: 'AMD Custom Zen 2', ram: '10GB GDDR6', screen: '1440p 120FPS', battery: 'تيار مباشر', camera: 'لا يوجد' },
  { id: 308, n: 'Xbox Wireless Controller Robot White', c: 'gaming', b: 'Microsoft', pr: 3200, r: 4.7, s: 'Textured Grip • Hybrid D-pad • Bluetooth', img: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=600&q=80', cpu: 'Xbox Wireless', ram: 'N/A', screen: 'N/A', battery: '2x AA Batteries', camera: 'لا يوجد' },
  { id: 309, n: 'Nintendo Switch OLED Model', c: 'gaming', b: 'Nintendo', pr: 15500, r: 4.7, s: '7" OLED Screen • 64GB Storage • Handheld', img: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=600&q=80', cpu: 'NVIDIA Tegra Custom', ram: '4GB', screen: '7.0" OLED 720p', battery: '4310 mAh', camera: 'لا يوجد' },
  { id: 310, n: 'ASUS ROG Ally X Handheld Console', c: 'gaming', b: 'ASUS', pr: 39000, r: 4.9, s: 'Ryzen Z1 Extreme • 24GB LPDDR5X • 1TB SSD', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80', tag: 'وحش المحمول', cpu: 'Ryzen Z1 Extreme', ram: '24GB', screen: '7.0" FHD 120Hz', battery: '80 Wh', camera: 'لا يوجد' },
  { id: 311, n: 'Steam Deck OLED 512GB', c: 'gaming', b: 'Valve', pr: 32000, r: 4.9, s: '90Hz HDR OLED Screen • Wi-Fi 6E • SteamOS', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80', cpu: 'Custom AMD APU 6nm', ram: '16GB', screen: '7.4" HDR OLED 90Hz', battery: '50 Wh', camera: 'لا يوجد' },
  { id: 312, n: 'Lenovo Legion Go Handheld', c: 'gaming', b: 'Lenovo', pr: 36000, r: 4.8, s: '8.8" QHD+ 144Hz • Detachable Controllers', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80', cpu: 'Ryzen Z1 Extreme', ram: '16GB', screen: '8.8" QHD+ 144Hz', battery: '49.2 Wh', camera: 'لا يوجد' },
  { id: 313, n: 'MSI RTX 4060 Ventus 2X 8GB', c: 'gaming', b: 'MSI', pr: 17500, r: 4.8, s: '8GB GDDR6 • DLSS 3 Support • Dual Fan', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80', cpu: 'NVIDIA RTX 4060', ram: '8GB GDDR6', screen: 'N/A', battery: 'كارت شاشة', camera: 'لا يوجد' },
  { id: 314, n: 'ASUS TUF RTX 4070 Super 12GB', c: 'gaming', b: 'ASUS', pr: 34500, r: 4.9, s: '12GB GDDR6X • Triple Fan Extreme Cooling', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80', cpu: 'NVIDIA RTX 4070 Super', ram: '12GB GDDR6X', screen: 'N/A', battery: 'كارت شاشة', camera: 'لا يوجد' },
  { id: 315, n: 'Gigabyte RTX 4080 Super 16GB', c: 'gaming', b: 'Gigabyte', pr: 59000, r: 5.0, s: '16GB GDDR6X • WINDFORCE Cooling • RGB Fusion', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80', cpu: 'NVIDIA RTX 4080 Super', ram: '16GB GDDR6X', screen: 'N/A', battery: 'كارت شاشة', camera: 'لا يوجد' },

  // ==================== 15 SAMSUNG CHARGERS ====================
  { id: 401, n: 'شاحن سامسونج الأصلي 25W Fast Charger', c: 'powerbanks', b: 'Samsung', pr: 650, r: 4.8, s: 'Super Fast Charging 25W USB-C Wall Adapter (Without Cable)', img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', cpu: 'Power Delivery 3.0', ram: 'N/A', screen: 'N/A', battery: '25W Output', camera: 'لا يوجد' },
  { id: 402, n: 'شاحن سامسونج الأصلي 25W مع كابل Type-C', c: 'powerbanks', b: 'Samsung', pr: 850, r: 4.9, s: 'Super Fast Charger 25W + Original 3A USB-C Cable', img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', cpu: 'Power Delivery 3.0', ram: 'N/A', screen: 'N/A', battery: '25W Output', camera: 'لا يوجد' },
  { id: 403, n: 'شاحن سامسونج 45W Super Fast Charging 2.0', c: 'powerbanks', b: 'Samsung', pr: 1250, r: 4.9, s: '45W Ultra Fast Charger for S23 Ultra / S24 Ultra', img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', tag: 'شاحن ألترا 45W', cpu: 'PD 3.0 PPS', ram: 'N/A', screen: 'N/A', battery: '45W Output', camera: 'لا يوجد' },
  { id: 404, n: 'شاحن سامسونج ثلاثي 65W Trio Power Adapter', c: 'powerbanks', b: 'Samsung', pr: 1850, r: 4.8, s: '65W Trio Adapter (2x USB-C + 1x USB-A) for Laptop & Phone', img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', cpu: 'Samsung Trio Power', ram: 'N/A', screen: 'N/A', battery: '65W Max Output', camera: 'لا يوجد' },
  { id: 405, n: 'شاحن سامسونج لاسلكي Duo Fast Wireless Pad', c: 'powerbanks', b: 'Samsung', pr: 1950, r: 4.7, s: '15W Wireless Fast Charger Duo for Phone + Galaxy Watch', img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', cpu: 'Samsung Fast Wireless 2.0', ram: 'N/A', screen: 'LED Indicator', battery: '15W Wireless Output', camera: 'لا يوجد' },

  // ==================== 20 LAPTOP CHARGERS ====================
  { id: 410, n: 'شاحن أنكر 65W GaN Prime Type-C Universal', c: 'powerbanks', b: 'Anker', pr: 1850, r: 4.9, s: 'Universal 65W Fast Charger for MacBook, Dell, HP, Lenovo', img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', tag: 'شاحن لابتوب شامل', cpu: 'GaN Prime Tech', ram: 'N/A', screen: 'N/A', battery: '65W USB-C PD', camera: 'لا يوجد' },
  { id: 411, n: 'شاحن أبل الأصلي 30W USB-C MacBook Charger', c: 'powerbanks', b: 'Apple', pr: 1950, r: 4.8, s: 'Apple Original 30W Power Adapter for MacBook Air', img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', cpu: 'Apple Power Adapter', ram: 'N/A', screen: 'N/A', battery: '30W Output', camera: 'لا يوجد' },
  { id: 412, n: 'شاحن أبل الأصلي 70W USB-C Power Adapter', c: 'powerbanks', b: 'Apple', pr: 2950, r: 4.9, s: 'Apple Original 70W Fast Charger for MacBook Pro 14"', img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', cpu: 'Apple Power Adapter', ram: 'N/A', screen: 'N/A', battery: '70W Output', camera: 'لا يوجد' },
  { id: 413, n: 'شاحن لينوفو الأصلي 65W Type-C ThinkPad Charger', c: 'powerbanks', b: 'Lenovo', pr: 1450, r: 4.8, s: 'Lenovo Original 65W USB-C Adapter for ThinkPad / IdeaPad', img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', cpu: 'Lenovo Power Standard', ram: 'N/A', screen: 'N/A', battery: '65W Output', camera: 'لا يوجد' },
  { id: 414, n: 'شاحن ديل الأصلي 65W Type-C Power Adapter', c: 'powerbanks', b: 'Dell', pr: 1550, r: 4.8, s: 'Dell Original 65W USB-C AC Adapter for XPS / Inspiron', img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', cpu: 'Dell Smart Adapter', ram: 'N/A', screen: 'N/A', battery: '65W Output', camera: 'لا يوجد' },
  { id: 415, n: 'شاحن HP الأصلي 65W Smart AC USB-C Charger', c: 'powerbanks', b: 'HP', pr: 1500, r: 4.8, s: 'HP Original 65W USB-C Power Adapter for Pavilion / ProBook', img: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80', cpu: 'HP Smart Power', ram: 'N/A', screen: 'N/A', battery: '65W Output', camera: 'لا يوجد' }
];

const $ = s => document.querySelector(s);
const load = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const save = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
const money = n => n.toLocaleString('en-US') + ' ' + CFG.cur;
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

let cart = load(K.cart, {}), favs = load(K.fav, []), promo = load(K.promo, ''), cat = 'all', subCat = 'all', favOnly = false;
let tt; const toast = m => { const t = $('#toast'); t.textContent = m; t.classList.add('on'); clearTimeout(tt); tt = setTimeout(() => t.classList.remove('on'), 2200); };
const imgFix = el => el.addEventListener('error', () => { el.replaceWith(Object.assign(document.createElement('div'), { textContent: EMO[el.dataset.cat] || '🔌', style: 'display:grid;place-items:center;height:100%;font-size:3rem' })); }, { once: true });

/* ---- Theme / Nav ---- */
document.documentElement.dataset.theme = load(K.theme, 'light');
$('#theme').onclick = () => { const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = t; save(K.theme, t); };
$('#burger').onclick = () => $('#links').classList.toggle('open');
$('#links').onclick = () => $('#links').classList.remove('open');

/* ---- Catalog & Brand Filter ---- */
$('#cats').innerHTML = Object.entries(CATS).map(([k, v]) => `<button data-c="${k}" class="${k === 'all' ? 'on' : ''}">${v}</button>`).join('');

$('#cats').onclick = e => { 
  const b = e.target.closest('button'); 
  if (!b) return; 
  cat = b.dataset.c; 
  subCat = 'all'; 
  document.querySelectorAll('#cats button').forEach(x => x.classList.toggle('on', x === b)); 
  renderSubCats();
  render(); 
};

function renderSubCats() {
  const subWrap = $('#subcats');
  const subList = $('#subcatList');
  
  if (cat === 'all') {
    subWrap.style.display = 'none';
    return;
  }

  const brands = ['all', ...new Set(P.filter(p => p.c === cat).map(p => p.b))];
  
  if (brands.length <= 2 && brands.includes('all')) {
    subWrap.style.display = 'none';
    return;
  }

  subWrap.style.display = 'flex';
  subList.innerHTML = brands.map(b => {
    const label = b === 'all' ? 'الكل' : b;
    return `<button data-b="${b}" class="${b === subCat ? 'on' : ''}">${label}</button>`;
  }).join('');
}

$('#subcatList').onclick = e => {
  const b = e.target.closest('button');
  if (!b) return;
  subCat = b.dataset.b;
  document.querySelectorAll('#subcatList button').forEach(x => x.classList.toggle('on', x === b));
  render();
};

['#q', '#sort'].forEach(s => $(s).addEventListener('input', render));$('#favOnly').onclick = e => { favOnly = !favOnly; e.currentTarget.setAttribute('aria-pressed', favOnly); render(); };
$('#favBtn').onclick = () => { favOnly = true; $('#favOnly').setAttribute('aria-pressed', true); render(); $('#shop').scrollIntoView(); };

function render() {
  const q = $('#q').value.trim().toLowerCase(), s = $('#sort').value;
  let l = P.filter(p => 
    (cat === 'all' || p.c === cat) && 
    (subCat === 'all' || p.b === subCat) &&
    (!favOnly || favs.includes(p.id)) && 
    (`${p.n} ${p.b} ${p.s}`.toLowerCase().includes(q))
  );
  
  if (s === 'r') l.sort((a, b) => b.r - a.r); 
  if (s === 'a') l.sort((a, b) => a.pr - b.pr); 
  if (s === 'z') l.sort((a, b) => b.pr - a.pr);
  
  $('#info').textContent = `${l.length} منتج متوفر (اضغط على أي كارت لرؤية المواصفات)`;
  $('#grid').innerHTML = l.length ? l.map(p => `<article class="p" data-pcard="${p.id}"><div class="pi"><img src="${p.img}" alt="${esc(p.n)}" data-cat="${p.c}" loading="lazy">${p.tag ? `<span class="pb">${p.tag}</span>` : ''}<button class="fv ${favs.includes(p.id) ? 'on' : ''}" data-f="${p.id}" aria-label="مفضلة"><i class="fa-solid fa-heart"></i></button></div>
  <div class="pc"><span class="br">${p.b}</span><h3>${esc(p.n)}</h3><p class="sp">${p.s}</p><p class="rt"><i class="fa-solid fa-star"></i> ${p.r}</p>
  <div class="pr"><div><b>${money(p.pr)}</b>${p.old ? `<s>${money(p.old)}</s>` : ''}</div><button class="add" data-a="${p.id}" aria-label="أضف للسلة"><i class="fa-solid fa-cart-plus"></i></button></div></div></article>`).join('') : '<p style="grid-column:1/-1;text-align:center;padding:2rem;">لا توجد نتائج مطابقة للبحث.</p>';
  
  $('#grid').querySelectorAll('img').forEach(imgFix);
  $('#favN').textContent = favs.length;
}

/* ---- Product Specs Modal ---- */
function openModal(pId) {
  const p = P.find(x => x.id === pId);
  if (!p) return;

  const isFav = favs.includes(p.id);

  $('#pModalBody').innerHTML = `
    <div class="p-modal-img">
      <img src="${p.img}" alt="${esc(p.n)}" data-cat="${p.c}">
      ${p.tag ? `<span class="pb">${p.tag}</span>` : ''}
    </div>
    <div class="p-modal-info">
      <span class="br">${p.b}</span>
      <h2>${esc(p.n)}</h2>
      <p class="p-modal-cat"><i class="fa-solid fa-layer-group"></i> القسم: ${CATS[p.c] || p.c}</p>
      <p class="rt"><i class="fa-solid fa-star"></i> ${p.r} / 5.0</p>
      
      <div class="p-modal-spec">
        <h4><i class="fa-solid fa-microchip"></i> الإمكانيات والمواصفات الكاملة:</h4>
        <div class="spec-list">
          <div class="spec-item"><span>المعالج / الشريحة:</span><b>${p.cpu || 'معيار أصلي'}</b></div>
          <div class="spec-item"><span>الرامات / الذاكرة:</span><b>${p.ram || 'موضح بالموديل'}</b></div>
          <div class="spec-item"><span>الشاشة / العرض:</span><b>${p.screen || 'شاشة فائقة الوضوح'}</b></div>
          <div class="spec-item"><span>البطارية / الشحن:</span><b>${p.battery || 'يدعم الشحن السريع'}</b></div>
          <div class="spec-item"><span>الكاميرات:</span><b>${p.camera || 'كاميرات احترافية'}</b></div>
        </div>
      </div>

      <div class="p-modal-guarantee">
        <p><i class="fa-solid fa-shield-halved"></i> ضمان 24 شهر مع دعم الدفع أونلاين أو عند الاستلام من BADR ELECTRONICS</p>
      </div>

      <div class="p-modal-price">
        <b>${money(p.pr)}</b>
        ${p.old ? `<s>${money(p.old)}</s>` : ''}
      </div>

      <div class="p-modal-acts">
        <button class="btn pri block" id="modalAddCart" data-a="${p.id}"><i class="fa-solid fa-cart-plus"></i> إضافة إلى السلة</button>
        <button class="btn ${isFav ? 'modal-fav-on' : ''}" id="modalFav" data-f="${p.id}"><i class="fa-solid fa-heart"></i> ${isFav ? 'في المفضلة' : 'أضف للمفضلة'}</button>
      </div>
    </div>
  `;

  $('#pModalBody').querySelectorAll('img').forEach(imgFix);

  $('#modalAddCart').onclick = () => {
    cart[p.id] = (cart[p.id] || 0) + 1;
    save(K.cart, cart);
    drawCart();
    toast('اتضاف للسلة');
  };

  $('#modalFav').onclick = () => {
    favs = favs.includes(p.id) ? favs.filter(x => x !== p.id) : [...favs, p.id];
    save(K.fav, favs);
    render();
    openModal(p.id);
  };

  $('#pModalOv').classList.add('on');
}

function closeModal() {
  $('#pModalOv').classList.remove('on');
}

$('#pModalClose').onclick = closeModal;
$('#pModalOv').onclick = e => { if (e.target === $('#pModalOv')) closeModal(); };

/* ---- Event Delegation ---- */
$('#grid').onclick = e => {
  const f = e.target.closest('[data-f]');
  const a = e.target.closest('[data-a]');
  const card = e.target.closest('[data-pcard]');

  if (f) {
    e.stopPropagation();
    const id = +f.dataset.f;
    favs = favs.includes(id) ? favs.filter(x => x !== id) : [...favs, id];
    save(K.fav, favs);
    render();
    return;
  }

  if (a) {
    e.stopPropagation();
    const id = a.dataset.a;
    cart[id] = (cart[id] || 0) + 1;
    save(K.cart, cart);
    drawCart();
    toast('اتضاف للسلة');
    return;
  }

  if (card) {
    const id = +card.dataset.pcard;
    openModal(id);
  }
};

/* ---- Cart Logic ---- */
const open = v => { ['vCart', 'vCo', 'vOk'].forEach(i => $('#' + i).hidden = i !== v); };
const toggle = on => { $('#drawer').classList.toggle('on', on); $('#ov').classList.toggle('on', on); $('#drawer').setAttribute('aria-hidden', !on); if (on) open('vCart'); };
$('#cartBtn').onclick = () => toggle(true); $('#closeC').onclick = $('#ov').onclick = $('#okC').onclick = () => toggle(false);

function totals() {
  const sub = Object.entries(cart).reduce((t, [id, q]) => t + (P.find(p => p.id == id)?.pr || 0) * q, 0);
  const disc = Math.round(sub * (CFG.promos[promo] || 0)), ship = !sub || sub - disc >= CFG.free ? 0 : CFG.ship;
  return { sub, disc, ship, total: sub - disc + ship };
}

function tHTML() { const t = totals(); return `<div class="t"><span>المجموع</span><span>${money(t.sub)}</span></div>${t.disc ? `<div class="t d"><span>خصم ${promo}</span><span>-${money(t.disc)}</span></div>` : ''}<div class="t"><span>الشحن</span><span>${t.ship ? money(t.ship) : 'مجاني'}</span></div><div class="t g"><span>الإجمالي</span><span>${money(t.total)}</span></div>`; }

function drawCart() {
  const e = Object.entries(cart);
  $('#cartN').textContent = e.reduce((t, [, q]) => t + q, 0);
  $('#items').innerHTML = e.length ? e.map(([id, q]) => { const p = P.find(x => x.id == id); if (!p) return ''; return `<div class="ci"><img src="${p.img}" alt="${esc(p.n)}"><div><b>${esc(p.n)}</b><br>${money(p.pr)}<div class="q"><button data-m="${id}" aria-label="نقص">-</button><span>${q}</span><button data-p="${id}" aria-label="زود">+</button></div></div></div>`; }).join('') : '<p>السلة فاضية.</p>';
  $('#tot').innerHTML = $('#tot2').innerHTML = tHTML(); $('#goCo').disabled = !e.length; save(K.cart, cart);
}

$('#items').onclick = e => { const m = e.target.dataset.m, p = e.target.dataset.p; if (p) cart[p]++; if (m && --cart[m] <= 0) delete cart[m]; drawCart(); };
$('#promoF').onsubmit = e => { e.preventDefault(); const c = $('#promo').value.trim().toUpperCase(); if (CFG.promos[c]) { promo = c; save(K.promo, c); toast('تم تطبيق الكود'); } else toast('الكود غير صحيح'); drawCart(); };
$('#goCo').onclick = () => open('vCo'); $('#back').onclick = () => open('vCart');

/* ---- Toggle Visa Box ---- */
document.querySelectorAll('input[name="payMethod"]').forEach(radio => {
  radio.addEventListener('change', e => {
    if (e.target.value === 'card') {
      $('#visaBox').classList.add('on');
    } else {
      $('#visaBox').classList.remove('on');
    }
  });
});

/* ---- Visa Input Formats ---- */
$('#cardNumber').addEventListener('input', e => {
  let v = e.target.value.replace(/\D/g, '').substring(0, 16);
  e.target.value = v.replace(/(.{4})/g, '$1 ').trim();
});

$('#cardExp').addEventListener('input', e => {
  let v = e.target.value.replace(/\D/g, '').substring(0, 4);
  if (v.length >= 3) {
    e.target.value = v.substring(0, 2) + '/' + v.substring(2);
  } else {
    e.target.value = v;
  }
});

/* ---- Submit Order with Verification ---- */
$('#vCo').onsubmit = e => {
  e.preventDefault();
  
  const name = $('#cn').value.trim();
  const phone = $('#cp').value.trim();
  const address = $('#ca').value.trim();
  const payType = $('input[name="payMethod"]:checked').value;

  if (name.length < 3) return $('#ce').textContent = 'اكتب الاسم بالكامل';
  if (!/^01[0125][0-9]{8}$/.test(phone)) return$('#ce').textContent = 'رقم الهاتف غير صحيح';
  if (address.length < 8) return $('#ce').textContent = 'اكتب العنوان بالتفصيل';

  let paymentDetailsText = "";

  if (payType === 'card') {
    const cardName = $('#cardName').value.trim();
    const cardNumber = $('#cardNumber').value.trim().replace(/\s/g, '');
    const cardExp = $('#cardExp').value.trim();
    const cardCvc = $('#cardCvc').value.trim();

    if (cardName.length < 3) return $('#ce').textContent = 'اكتب اسم صاحب الكارت بشكل صحيح';
    if (cardNumber.length < 16) return $('#ce').textContent = 'رقم الكارت يجب أن يكون 16 رقم';
    if (!/^\d{2}\/\d{2}$/.test(cardExp)) return$('#ce').textContent = 'تاريخ الانتهاء غير صحيح (MM/YY)';
    if (cardCvc.length < 3) return $('#ce').textContent = 'رمز CVC غير صحيح';

    const last4 = cardNumber.slice(-4);
    paymentDetailsText = `💳 *طريقة الدفع:* تم الدفع بالفيزا إلكترونياً ✅%0A` +
                         `👤 *اسم صاحب الكارت:* ${cardName}%0A` +
                         `🔢 *رقم الكارت:* **** **** **** ${last4}%0A` +
                         `📌 *حالة العملية:* تم التحويل والخصم بنجاح 🎉`;
  } else {
    paymentDetailsText = `💵 *طريقة الدفع:* الدفع عند الاستلام (كاش) 🚚`;
  }

  $('#ce').textContent = '';
  const orderNum = 'BE-' + Math.floor(10000 + Math.random() * 90000);
  $('#ono').textContent = orderNum;

  const t = totals();

  let itemsListText = Object.entries(cart).map(([id, q]) => {
    const p = P.find(x => x.id == id);
    return `%0A- *${p.n}* (العدد: ${q}) بسعر ${money(p.pr * q)}`;
  }).join('');

  const msg = `🛒 *طلب جديد وتأكيد دفع من BADR ELECTRONICS*%0A` +
              `----------------------------------%0A` +
              `🔢 *رقم الطلب:* ${orderNum}%0A` +
              `👤 *اسم العميل:* ${name}%0A` +
              `📞 *رقم الهاتف:* ${phone}%0A` +
              `📍 *العنوان:* ${address}%0A` +
              `----------------------------------%0A` +
              `${paymentDetailsText}%0A` +
              `----------------------------------%0A` +
              `📦 *المنتجات المطلوب شراءها:*${itemsListText}%0A` +
              `----------------------------------%0A` +
              `💵 *المجموع:* ${money(t.sub)}%0A` +
              `🚚 *الشحن:* ${t.ship ? money(t.ship) : 'مجاني'}%0A` +
              `💰 *الإجمالي النهائي:* *${money(t.total)}*`;

  window.open(`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${msg}`, '_blank');

  cart = {}; promo = ''; save(K.promo, ''); e.target.reset(); 
  $('#visaBox').classList.remove('on');
  drawCart(); open('vOk');
};

/* ---- Service Form ---- */
$('#svc').onsubmit = e => {
  e.preventDefault(); const er = $('#se');
  const name = $('#sn').value.trim();
  const phone = $('#sp').value.trim();
  const device = $('#st').value;
  const desc = $('#sd').value.trim();

  if (name.length < 3) return er.textContent = 'اكتب الاسم بالكامل';
  if (!/^01[0125][0-9]{8}$/.test(phone)) return er.textContent = 'رقم الهاتف غير صحيح';
  
  er.textContent = ''; 

  const msg = `🛠️ *حجز صيانة / استشارة فنية*%0A` +
              `👤 *الاسم:* ${name}%0A` +
              `📞 *الهاتف:* ${phone}%0A` +
              `💻 *نوع الجهاز:* ${device}%0A` +
              `📝 *تفاصيل المشكلة:* ${desc || 'لا يوجد'}`;

  window.open(`https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${msg}`, '_blank');

  e.target.reset(); 
  toast('جارٍ تحويلك للواتساب لإتمام حجز الصيانة');
};

document.addEventListener('keydown', e => { 
  if (e.key === 'Escape') {
    toggle(false);
    closeModal();
  }
});

renderSubCats();
render(); 
drawCart();