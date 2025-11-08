import { useState } from 'react';
import { PhoneMockup } from '@/components/mockups/PhoneMockup';
import { useCart } from '@/hooks/useCart';
import { ecommerceProducts, Product, formatCurrency } from '@/utils/mockData';
import { ShoppingCart, Search, ChevronLeft, Plus, Minus, Trash2, MapPin, CreditCard, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

type Screen = 'home' | 'product-detail' | 'cart' | 'checkout' | 'success';

export function MobileAppDemo() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const { cartItems, addToCart, updateQuantity, removeFromCart, getTotalItems, getTotalPrice, clearCart } = useCart();

  const categories = ['All', 'Fashion', 'Elektronik', 'Makanan', 'Lainnya'];

  const filteredProducts = ecommerceProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes ? product.sizes[0] : '');
    setCurrentScreen('product-detail');
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart(selectedProduct, selectedSize || undefined);
      // Show brief success feedback then return to home
      setTimeout(() => setCurrentScreen('home'), 500);
    }
  };

  const handleCheckout = () => {
    setCurrentScreen('success');
    setTimeout(() => {
      clearCart();
      setCurrentScreen('home');
    }, 3000);
  };

  return (
    <div className="flex gap-4 justify-center items-start flex-wrap">
      <PhoneMockup color="dark">
        <div className="h-full flex flex-col bg-white">
          {/* Home Screen */}
          {currentScreen === 'home' && (
            <>
              {/* Header */}
              <div className="bg-primary text-white p-4 flex items-center justify-between">
                <div>
                  <h1 className="text-lg font-bold">UMKM Store</h1>
                  <p className="text-xs opacity-90">Belanja Hemat, Kualitas Terjamin</p>
                </div>
                <button
                  onClick={() => setCurrentScreen('cart')}
                  className="relative p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <ShoppingCart size={24} />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                      {getTotalItems()}
                    </span>
                  )}
                </button>
              </div>

              {/* Search Bar */}
              <div className="p-3 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    placeholder="Cari produk..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="p-3 border-b overflow-x-auto">
                <div className="flex gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Products Grid */}
              <div className="flex-1 overflow-y-auto p-3">
                <div className="grid grid-cols-2 gap-3">
                  {filteredProducts.map(product => (
                    <button
                      key={product.id}
                      onClick={() => handleViewProduct(product)}
                      className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow text-left"
                    >
                      <div className="aspect-square bg-gray-100 flex items-center justify-center text-4xl">
                        {product.image}
                      </div>
                      <div className="p-2">
                        <h3 className="font-medium text-sm line-clamp-2 mb-1">{product.name}</h3>
                        <div className="flex items-center gap-1 mb-1">
                          <span className="text-yellow-500 text-xs">★</span>
                          <span className="text-xs text-gray-600">{product.rating}</span>
                          <span className="text-xs text-gray-400">| {product.sold} terjual</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-bold text-primary text-sm">{formatCurrency(product.price)}</span>
                          {product.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">{formatCurrency(product.originalPrice)}</span>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Product Detail Screen */}
          {currentScreen === 'product-detail' && selectedProduct && (
            <>
              {/* Header */}
              <div className="bg-white border-b p-4 flex items-center gap-3">
                <button onClick={() => setCurrentScreen('home')} className="p-1 hover:bg-gray-100 rounded-lg">
                  <ChevronLeft size={24} />
                </button>
                <h2 className="font-semibold flex-1">Detail Produk</h2>
                <button
                  onClick={() => setCurrentScreen('cart')}
                  className="relative p-2 hover:bg-gray-100 rounded-lg"
                >
                  <ShoppingCart size={20} />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                      {getTotalItems()}
                    </span>
                  )}
                </button>
              </div>

              {/* Product Content */}
              <div className="flex-1 overflow-y-auto">
                {/* Product Image */}
                <div className="aspect-square bg-gray-100 flex items-center justify-center text-8xl border-b">
                  {selectedProduct.image}
                </div>

                <div className="p-4">
                  <h1 className="text-xl font-bold mb-2">{selectedProduct.name}</h1>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium">{selectedProduct.rating}</span>
                    </div>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-600">{selectedProduct.sold} terjual</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-600">Stok: {selectedProduct.stock}</span>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">{formatCurrency(selectedProduct.price)}</span>
                      {selectedProduct.originalPrice && (
                        <>
                          <span className="text-gray-400 line-through">{formatCurrency(selectedProduct.originalPrice)}</span>
                          <Badge variant="destructive" className="text-xs">
                            {Math.round((1 - selectedProduct.price / selectedProduct.originalPrice) * 100)}% OFF
                          </Badge>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Deskripsi</h3>
                    <p className="text-gray-600 text-sm">{selectedProduct.description}</p>
                  </div>

                  {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2">Pilih Ukuran</h3>
                      <div className="flex gap-2 flex-wrap">
                        {selectedProduct.sizes.map(size => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-4 py-2 border rounded-lg font-medium transition-colors ${
                              selectedSize === size
                                ? 'border-primary bg-primary text-white'
                                : 'border-gray-300 hover:border-primary'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 border-t bg-white">
                <Button onClick={handleAddToCart} className="w-full" size="lg">
                  <ShoppingCart className="mr-2" size={20} />
                  Tambah ke Keranjang
                </Button>
              </div>
            </>
          )}

          {/* Cart Screen */}
          {currentScreen === 'cart' && (
            <>
              {/* Header */}
              <div className="bg-white border-b p-4 flex items-center gap-3">
                <button onClick={() => setCurrentScreen('home')} className="p-1 hover:bg-gray-100 rounded-lg">
                  <ChevronLeft size={24} />
                </button>
                <h2 className="font-semibold flex-1">Keranjang ({getTotalItems()} item)</h2>
              </div>

              {cartItems.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
                  <ShoppingCart size={64} className="text-gray-300 mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Keranjang Kosong</h3>
                  <p className="text-gray-600 mb-4">Belum ada produk di keranjang Anda</p>
                  <Button onClick={() => setCurrentScreen('home')}>
                    Mulai Belanja
                  </Button>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="flex-1 overflow-y-auto p-4">
                    {cartItems.map((item, index) => (
                      <div key={`${item.product.id}-${item.selectedSize || 'default'}`} className="bg-white border rounded-lg p-3 mb-3">
                        <div className="flex gap-3">
                          <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center text-3xl flex-shrink-0">
                            {item.product.image}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-sm mb-1">{item.product.name}</h3>
                            {item.selectedSize && (
                              <p className="text-xs text-gray-500 mb-1">Ukuran: {item.selectedSize}</p>
                            )}
                            <p className="font-bold text-primary">{formatCurrency(item.product.price)}</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                            className="text-red-500 hover:bg-red-50 p-2 rounded h-fit"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <div className="flex items-center justify-end gap-3 mt-3">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.selectedSize)}
                            className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-medium w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.selectedSize)}
                            className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary */}
                  <div className="p-4 border-t bg-white">
                    <div className="flex justify-between mb-3">
                      <span className="text-gray-600">Subtotal ({getTotalItems()} item)</span>
                      <span className="font-semibold">{formatCurrency(getTotalPrice())}</span>
                    </div>
                    <Button onClick={() => setCurrentScreen('checkout')} className="w-full" size="lg">
                      Checkout
                    </Button>
                  </div>
                </>
              )}
            </>
          )}

          {/* Checkout Screen */}
          {currentScreen === 'checkout' && (
            <>
              {/* Header */}
              <div className="bg-white border-b p-4 flex items-center gap-3">
                <button onClick={() => setCurrentScreen('cart')} className="p-1 hover:bg-gray-100 rounded-lg">
                  <ChevronLeft size={24} />
                </button>
                <h2 className="font-semibold flex-1">Checkout</h2>
              </div>

              {/* Checkout Content */}
              <div className="flex-1 overflow-y-auto p-4">
                {/* Shipping Address */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin size={20} className="text-primary" />
                    <h3 className="font-semibold">Alamat Pengiriman</h3>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg border">
                    <p className="font-medium">Rumah</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Jl. Sudirman No. 123<br />
                      Jakarta Selatan, DKI Jakarta 12190
                    </p>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <CreditCard size={20} className="text-primary" />
                    <h3 className="font-semibold">Metode Pembayaran</h3>
                  </div>
                  <div className="space-y-2">
                    {['Transfer Bank', 'E-Wallet', 'COD'].map(method => (
                      <button
                        key={method}
                        className="w-full p-3 border rounded-lg hover:border-primary text-left"
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <h3 className="font-semibold mb-3">Ringkasan Pesanan</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal ({getTotalItems()} item)</span>
                      <span>{formatCurrency(getTotalPrice())}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ongkos Kirim</span>
                      <span>{formatCurrency(15000)}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold text-base">
                      <span>Total</span>
                      <span className="text-primary">{formatCurrency(getTotalPrice() + 15000)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-4 border-t bg-white">
                <Button onClick={handleCheckout} className="w-full" size="lg">
                  Bayar {formatCurrency(getTotalPrice() + 15000)}
                </Button>
              </div>
            </>
          )}

          {/* Success Screen */}
          {currentScreen === 'success' && (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-green-50">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 size={48} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Pesanan Berhasil!</h2>
              <p className="text-gray-600 mb-1">Terima kasih sudah berbelanja</p>
              <p className="text-sm text-gray-500">Pesanan Anda sedang diproses</p>
            </div>
          )}
        </div>
      </PhoneMockup>
    </div>
  );
}
