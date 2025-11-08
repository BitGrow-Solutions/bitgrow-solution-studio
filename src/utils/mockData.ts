// Mock data for interactive demos
// No backend required - all data is frontend-only

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  sold: number;
  description: string;
  sizes?: string[];
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'Makanan' | 'Minuman' | 'Snack' | 'Dessert';
  price: number;
  image: string;
  description: string;
  available: boolean;
  popular?: boolean;
}

export interface Order {
  id: string;
  tableNumber: number | null;
  customerName: string;
  items: Array<{ menuItem: MenuItem; quantity: number }>;
  status: 'new' | 'preparing' | 'ready' | 'completed';
  total: number;
  timestamp: Date;
  notes?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

export interface Table {
  id: number;
  number: number;
  seats: number;
  status: 'available' | 'occupied' | 'reserved';
  currentOrder?: string;
}

// E-commerce Products (UMKM style)
export const ecommerceProducts: Product[] = [
  {
    id: 'p1',
    name: 'Kaos Polos Premium Cotton',
    category: 'Fashion',
    price: 89000,
    originalPrice: 120000,
    image: '🎽',
    rating: 4.8,
    sold: 342,
    description: 'Kaos polos berbahan cotton premium, nyaman dipakai sehari-hari',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 150,
  },
  {
    id: 'p2',
    name: 'Celana Jeans Slim Fit',
    category: 'Fashion',
    price: 215000,
    originalPrice: 280000,
    image: '👖',
    rating: 4.7,
    sold: 218,
    description: 'Celana jeans slim fit dengan bahan stretch yang nyaman',
    sizes: ['28', '29', '30', '31', '32', '33'],
    stock: 85,
  },
  {
    id: 'p3',
    name: 'Tas Ransel Laptop',
    category: 'Fashion',
    price: 175000,
    image: '🎒',
    rating: 4.9,
    sold: 567,
    description: 'Tas ransel dengan slot laptop 14 inch, water resistant',
    stock: 120,
  },
  {
    id: 'p4',
    name: 'Sepatu Sneakers Canvas',
    category: 'Fashion',
    price: 189000,
    originalPrice: 250000,
    image: '👟',
    rating: 4.6,
    sold: 423,
    description: 'Sneakers casual berbahan canvas, cocok untuk hangout',
    sizes: ['38', '39', '40', '41', '42', '43'],
    stock: 95,
  },
  {
    id: 'p5',
    name: 'Smartphone Android 6GB RAM',
    category: 'Elektronik',
    price: 2450000,
    originalPrice: 2799000,
    image: '📱',
    rating: 4.8,
    sold: 189,
    description: 'Smartphone dengan kamera 48MP, baterai 5000mAh',
    stock: 45,
  },
  {
    id: 'p6',
    name: 'Earbuds TWS Bluetooth',
    category: 'Elektronik',
    price: 189000,
    image: '🎧',
    rating: 4.7,
    sold: 834,
    description: 'True wireless earbuds dengan noise cancellation',
    stock: 200,
  },
  {
    id: 'p7',
    name: 'Power Bank 20000mAh',
    category: 'Elektronik',
    price: 145000,
    image: '🔋',
    rating: 4.9,
    sold: 672,
    description: 'Power bank fast charging, 2 USB port + Type-C',
    stock: 150,
  },
  {
    id: 'p8',
    name: 'Smart Watch Fitness Tracker',
    category: 'Elektronik',
    price: 325000,
    originalPrice: 450000,
    image: '⌚',
    rating: 4.6,
    sold: 245,
    description: 'Smartwatch dengan heart rate monitor dan sleep tracking',
    stock: 78,
  },
  {
    id: 'p9',
    name: 'Kopi Arabica Premium 250gr',
    category: 'Makanan',
    price: 65000,
    image: '☕',
    rating: 4.9,
    sold: 1234,
    description: 'Kopi arabica pilihan dari perkebunan lokal',
    stock: 300,
  },
  {
    id: 'p10',
    name: 'Coklat Artisan Dark 70%',
    category: 'Makanan',
    price: 45000,
    image: '🍫',
    rating: 4.8,
    sold: 567,
    description: 'Coklat dark premium dengan kakao 70%',
    stock: 180,
  },
  {
    id: 'p11',
    name: 'Madu Hutan Organik 500ml',
    category: 'Makanan',
    price: 125000,
    image: '🍯',
    rating: 4.9,
    sold: 389,
    description: 'Madu murni dari hutan Indonesia, tanpa gula tambahan',
    stock: 95,
  },
  {
    id: 'p12',
    name: 'Keripik Singkong Pedas',
    category: 'Makanan',
    price: 25000,
    image: '🥔',
    rating: 4.7,
    sold: 892,
    description: 'Keripik singkong dengan bumbu pedas khas Nusantara',
    stock: 250,
  },
  {
    id: 'p13',
    name: 'Minyak Zaitun Extra Virgin',
    category: 'Lainnya',
    price: 95000,
    image: '🫒',
    rating: 4.8,
    sold: 234,
    description: 'Minyak zaitun murni untuk masak dan kesehatan',
    stock: 120,
  },
  {
    id: 'p14',
    name: 'Essential Oil Lavender',
    category: 'Lainnya',
    price: 75000,
    image: '🌿',
    rating: 4.9,
    sold: 456,
    description: 'Essential oil lavender untuk aromaterapi dan relaksasi',
    stock: 145,
  },
  {
    id: 'p15',
    name: 'Matras Yoga Premium',
    category: 'Lainnya',
    price: 185000,
    originalPrice: 250000,
    image: '🧘',
    rating: 4.7,
    sold: 178,
    description: 'Matras yoga anti-slip dengan ketebalan 6mm',
    stock: 68,
  },
];

// Cafe Menu Items
export const cafeMenuItems: MenuItem[] = [
  // Makanan
  {
    id: 'm1',
    name: 'Nasi Goreng Spesial',
    category: 'Makanan',
    price: 28000,
    image: '🍛',
    description: 'Nasi goreng dengan telur, ayam, dan kerupuk',
    available: true,
    popular: true,
  },
  {
    id: 'm2',
    name: 'Mie Goreng Jawa',
    category: 'Makanan',
    price: 25000,
    image: '🍜',
    description: 'Mie goreng dengan bumbu khas Jawa',
    available: true,
    popular: true,
  },
  {
    id: 'm3',
    name: 'Ayam Geprek',
    category: 'Makanan',
    price: 32000,
    image: '🍗',
    description: 'Ayam crispy dengan sambal geprek pedas',
    available: true,
  },
  {
    id: 'm4',
    name: 'Sate Ayam (10 tusuk)',
    category: 'Makanan',
    price: 35000,
    image: '�串',
    description: 'Sate ayam dengan bumbu kacang dan lontong',
    available: true,
  },
  {
    id: 'm5',
    name: 'Gado-Gado',
    category: 'Makanan',
    price: 22000,
    image: '🥗',
    description: 'Sayuran segar dengan bumbu kacang',
    available: true,
  },
  // Minuman
  {
    id: 'd1',
    name: 'Es Kopi Susu',
    category: 'Minuman',
    price: 18000,
    image: '☕',
    description: 'Kopi dengan susu dan es batu',
    available: true,
    popular: true,
  },
  {
    id: 'd2',
    name: 'Es Teh Manis',
    category: 'Minuman',
    price: 8000,
    image: '🍵',
    description: 'Teh manis dingin segar',
    available: true,
  },
  {
    id: 'd3',
    name: 'Jus Alpukat',
    category: 'Minuman',
    price: 20000,
    image: '🥑',
    description: 'Jus alpukat segar dengan susu coklat',
    available: true,
    popular: true,
  },
  {
    id: 'd4',
    name: 'Es Jeruk Nipis',
    category: 'Minuman',
    price: 12000,
    image: '🍋',
    description: 'Jeruk nipis segar dengan soda',
    available: true,
  },
  {
    id: 'd5',
    name: 'Cappuccino',
    category: 'Minuman',
    price: 22000,
    image: '☕',
    description: 'Espresso dengan steamed milk',
    available: true,
  },
  {
    id: 'd6',
    name: 'Matcha Latte',
    category: 'Minuman',
    price: 25000,
    image: '🍵',
    description: 'Matcha premium dengan susu',
    available: false,
  },
  // Snack
  {
    id: 's1',
    name: 'Pisang Goreng',
    category: 'Snack',
    price: 15000,
    image: '🍌',
    description: 'Pisang goreng crispy 5 potong',
    available: true,
  },
  {
    id: 's2',
    name: 'Kentang Goreng',
    category: 'Snack',
    price: 18000,
    image: '🍟',
    description: 'French fries dengan saus sambal',
    available: true,
  },
  {
    id: 's3',
    name: 'Risoles Mayo',
    category: 'Snack',
    price: 12000,
    image: '🥟',
    description: 'Risoles isi sayuran dengan mayo',
    available: true,
  },
  // Dessert
  {
    id: 'ds1',
    name: 'Es Krim Vanilla',
    category: 'Dessert',
    price: 15000,
    image: '🍨',
    description: '2 scoop es krim vanilla premium',
    available: true,
  },
  {
    id: 'ds2',
    name: 'Brownies Coklat',
    category: 'Dessert',
    price: 20000,
    image: '🍰',
    description: 'Brownies coklat hangat dengan es krim',
    available: true,
  },
];

// Initial Orders
export const initialOrders: Order[] = [
  {
    id: 'ORD001',
    tableNumber: 5,
    customerName: 'Budi Santoso',
    items: [
      { menuItem: cafeMenuItems[0], quantity: 2 },
      { menuItem: cafeMenuItems[5], quantity: 2 },
    ],
    status: 'preparing',
    total: 92000,
    timestamp: new Date(Date.now() - 15 * 60 * 1000),
  },
  {
    id: 'ORD002',
    tableNumber: 3,
    customerName: 'Siti Nurhaliza',
    items: [
      { menuItem: cafeMenuItems[2], quantity: 1 },
      { menuItem: cafeMenuItems[7], quantity: 1 },
      { menuItem: cafeMenuItems[11], quantity: 1 },
    ],
    status: 'new',
    total: 62000,
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
  },
  {
    id: 'ORD003',
    tableNumber: 8,
    customerName: 'Ahmad Yani',
    items: [
      { menuItem: cafeMenuItems[1], quantity: 1 },
      { menuItem: cafeMenuItems[6], quantity: 1 },
    ],
    status: 'ready',
    total: 33000,
    timestamp: new Date(Date.now() - 25 * 60 * 1000),
  },
];

// Cafe Tables
export const cafeTables: Table[] = [
  { id: 1, number: 1, seats: 2, status: 'available' },
  { id: 2, number: 2, seats: 2, status: 'available' },
  { id: 3, number: 3, seats: 4, status: 'occupied', currentOrder: 'ORD002' },
  { id: 4, number: 4, seats: 4, status: 'available' },
  { id: 5, number: 5, seats: 6, status: 'occupied', currentOrder: 'ORD001' },
  { id: 6, number: 6, seats: 2, status: 'available' },
  { id: 7, number: 7, seats: 4, status: 'reserved' },
  { id: 8, number: 8, seats: 4, status: 'occupied', currentOrder: 'ORD003' },
  { id: 9, number: 9, seats: 8, status: 'available' },
  { id: 10, number: 10, seats: 6, status: 'available' },
];

// Chatbot knowledge base
export interface ChatbotKnowledge {
  patterns: string[];
  responses: string[];
  suggestions?: string[];
}

export const chatbotKnowledge: ChatbotKnowledge[] = [
  {
    patterns: ['halo', 'hai', 'hi', 'hello', 'hey'],
    responses: [
      'Halo! Selamat datang di BitGrow Solution Studio. Saya asisten virtual yang siap membantu Anda. Ada yang bisa saya bantu?',
      'Hai! Senang bertemu dengan Anda. Bagaimana saya bisa membantu Anda hari ini?',
    ],
    suggestions: ['Layanan apa saja yang tersedia?', 'Berapa biaya pembuatan aplikasi?', 'Berapa lama waktu pengerjaan?'],
  },
  {
    patterns: ['layanan', 'service', 'produk', 'jasa'],
    responses: [
      'BitGrow Solution Studio menyediakan berbagai layanan:\n\n• Mobile Apps (iOS & Android)\n• Website Development\n• Custom Software\n• UI/UX Design\n• AI & AI Business Services\n• Maintenance & Hosting\n\nLayanan mana yang ingin Anda ketahui lebih lanjut?',
    ],
    suggestions: ['Mobile Apps', 'Website Development', 'AI Services', 'Pricing'],
  },
  {
    patterns: ['mobile', 'aplikasi', 'app', 'ios', 'android'],
    responses: [
      'Kami membuat aplikasi mobile untuk iOS dan Android menggunakan:\n\n• React Native (cross-platform)\n• Native development (Swift/Kotlin)\n• Progressive Web Apps (PWA)\n\nTimeline: 8-16 minggu\nHarga: Mulai dari Rp 50 juta\n\nApakah Anda sudah punya konsep aplikasi yang ingin dibuat?',
    ],
    suggestions: ['Berapa biaya tepatnya?', 'Portfolio aplikasi', 'Proses pengerjaan'],
  },
  {
    patterns: ['website', 'web', 'portal', 'landing page'],
    responses: [
      'Kami membuat berbagai jenis website:\n\n• Company Profile\n• E-commerce\n• Landing Page\n• Portal/CMS\n• Web Application\n\nSemua website kami SEO-friendly, fast loading, dan mobile responsive.\n\nTimeline: 4-12 minggu\nHarga: Mulai dari Rp 15 juta\n\nJenis website apa yang Anda butuhkan?',
    ],
    suggestions: ['E-commerce', 'Company Profile', 'Lihat portfolio'],
  },
  {
    patterns: ['ai', 'chatbot', 'automation', 'artificial intelligence'],
    responses: [
      'Kami menyediakan solusi AI untuk bisnis:\n\n• AI Chatbot (customer service automation)\n• Process Automation (workflow optimization)\n• Data Analytics & Insights\n• RAG (Retrieval Augmented Generation)\n• Custom AI solutions\n\nTimeline: 8-16 minggu\nHarga: Mulai dari Rp 40 juta\n\nAI apa yang ingin Anda implementasikan di bisnis Anda?',
    ],
    suggestions: ['Chatbot untuk customer service', 'Automation workflow', 'Analytics'],
  },
  {
    patterns: ['harga', 'biaya', 'cost', 'price', 'pricing', 'budget'],
    responses: [
      'Biaya project kami bervariasi tergantung kompleksitas:\n\n• Landing Page: Rp 15-25 juta\n• Company Profile: Rp 20-40 juta\n• E-commerce: Rp 50-100 juta\n• Mobile App: Rp 50-150 juta\n• Custom Software: Rp 75-250 juta\n• AI Services: Rp 40-120 juta\n\nKami menawarkan:\n✓ Fixed price (scope jelas)\n✓ Time & Material (fleksibel)\n✓ Cicilan untuk UMKM\n\nMau diskusi budget project Anda?',
    ],
    suggestions: ['Konsultasi gratis', 'Cara pembayaran', 'Request quotation'],
  },
  {
    patterns: ['waktu', 'lama', 'timeline', 'durasi', 'pengerjaan'],
    responses: [
      'Timeline pengerjaan project:\n\n• Landing Page: 2-4 minggu\n• Company Profile: 4-8 minggu\n• E-commerce: 8-12 minggu\n• Mobile App: 8-16 minggu\n• Custom Software: 12-24 minggu\n• UI/UX Design: 4-8 minggu\n\nKami menggunakan agile methodology dengan sprint 2 minggu, jadi Anda bisa melihat progress secara berkala.\n\nAda project dengan deadline tertentu?',
    ],
    suggestions: ['Bisa lebih cepat?', 'Proses development', 'Metodologi'],
  },
  {
    patterns: ['portfolio', 'project', 'hasil', 'contoh', 'demo'],
    responses: [
      'Kami sudah menangani berbagai project:\n\n• KCI Website - komunitas Chinese Indonesia\n• Crypto Path - platform pembelajaran crypto\n• UMKM E-commerce apps\n• Enterprise dashboards\n• Government portals\n\nAnda bisa lihat demo interaktif di halaman Services kami atau kunjungi portfolio lengkap.\n\nIndustri apa yang relevan dengan bisnis Anda?',
    ],
    suggestions: ['UMKM', 'Startup', 'Enterprise', 'Government'],
  },
  {
    patterns: ['kontak', 'hubungi', 'contact', 'email', 'telepon', 'whatsapp'],
    responses: [
      'Anda bisa menghubungi kami melalui:\n\n📧 Email: hello@bitgrow.studio\n📱 WhatsApp: +62 812-3456-7890\n🌐 Website: bitgrow.studio\n\nAtau isi form konsultasi gratis dan tim kami akan menghubungi Anda dalam 1x24 jam.\n\nCara mana yang Anda prefer?',
    ],
    suggestions: ['Isi form konsultasi', 'WhatsApp sekarang', 'Schedule meeting'],
  },
  {
    patterns: ['terima kasih', 'thanks', 'thank you', 'makasih'],
    responses: [
      'Sama-sama! Senang bisa membantu Anda. Jika ada pertanyaan lain, jangan ragu untuk bertanya ya! 😊',
      'Terima kasih kembali! Semoga informasi ini membantu. Ada yang bisa saya bantu lagi?',
    ],
    suggestions: ['Konsultasi gratis', 'Lihat portfolio', 'Request quotation'],
  },
  {
    patterns: ['umkm', 'sme', 'usaha kecil', 'toko online'],
    responses: [
      'Kami punya paket khusus untuk UMKM:\n\n✓ Harga lebih terjangkau\n✓ Pembayaran bisa dicicil\n✓ Cloud-based (biaya hosting rendah)\n✓ Training dan support\n✓ Incremental delivery\n\nKami sudah bantu ratusan UMKM grow 300% di tahun pertama!\n\nBisnis UMKM Anda bergerak di bidang apa?',
    ],
    suggestions: ['E-commerce untuk UMKM', 'Paket cicilan', 'Success story'],
  },
];

// Default chatbot responses
export const defaultChatbotResponse = {
  response: 'Maaf, saya belum sepenuhnya memahami pertanyaan Anda. Bisa tolong dijelaskan lebih detail? Atau Anda bisa memilih topik yang ingin ditanyakan:',
  suggestions: [
    'Layanan apa saja yang tersedia?',
    'Berapa biaya pembuatan aplikasi?',
    'Lihat portfolio',
    'Hubungi tim sales',
  ],
};

// Helper function to find chatbot response
export function getChatbotResponse(userMessage: string): { response: string; suggestions?: string[] } {
  const lowercaseMessage = userMessage.toLowerCase();

  for (const knowledge of chatbotKnowledge) {
    const matched = knowledge.patterns.some(pattern =>
      lowercaseMessage.includes(pattern)
    );

    if (matched) {
      const randomResponse = knowledge.responses[Math.floor(Math.random() * knowledge.responses.length)];
      return {
        response: randomResponse,
        suggestions: knowledge.suggestions,
      };
    }
  }

  return {
    response: defaultChatbotResponse.response,
    suggestions: defaultChatbotResponse.suggestions,
  };
}

// Helper function to format currency (IDR)
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
}

// Helper function to generate order ID
export function generateOrderId(): string {
  const timestamp = Date.now().toString().slice(-6);
  return `ORD${timestamp}`;
}

// Helper function to get random customer names
const customerNames = [
  'Budi Santoso',
  'Siti Nurhaliza',
  'Ahmad Yani',
  'Dewi Lestari',
  'Rizky Febian',
  'Maya Sari',
  'Andi Wijaya',
  'Putri Ayu',
  'Dimas Prasetyo',
  'Rani Kartika',
];

export function getRandomCustomerName(): string {
  return customerNames[Math.floor(Math.random() * customerNames.length)];
}
