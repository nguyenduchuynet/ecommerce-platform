import { Header, Footer, Hero, ProductCard } from '@/components/store'

// Demo products for showcase
const demoProducts = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    slug: 'premium-wireless-headphones',
    price: 299.99,
    compareAtPrice: 399.99,
    images: JSON.stringify(['https://placehold.co/400x400/1e293b/indigo?text=Headphones'])
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    slug: 'smart-watch-pro',
    price: 449.99,
    compareAtPrice: null,
    images: JSON.stringify(['https://placehold.co/400x400/1e293b/purple?text=Smart+Watch'])
  },
  {
    id: '3',
    name: 'Minimalist Backpack',
    slug: 'minimalist-backpack',
    price: 89.99,
    compareAtPrice: 129.99,
    images: JSON.stringify(['https://placehold.co/400x400/1e293b/green?text=Backpack'])
  },
  {
    id: '4',
    name: 'Mechanical Keyboard',
    slug: 'mechanical-keyboard',
    price: 179.99,
    compareAtPrice: null,
    images: JSON.stringify(['https://placehold.co/400x400/1e293b/orange?text=Keyboard'])
  },
  {
    id: '5',
    name: 'Portable Speaker',
    slug: 'portable-speaker',
    price: 79.99,
    compareAtPrice: 99.99,
    images: JSON.stringify(['https://placehold.co/400x400/1e293b/blue?text=Speaker'])
  },
  {
    id: '6',
    name: 'Wireless Earbuds',
    slug: 'wireless-earbuds',
    price: 159.99,
    compareAtPrice: null,
    images: JSON.stringify(['https://placehold.co/400x400/1e293b/pink?text=Earbuds'])
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <Hero />

      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Featured Products
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Explore our curated selection of premium products. Handpicked quality, unbeatable prices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Shop by Category
            </h2>
            <p className="text-slate-400">
              Find exactly what you're looking for
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Electronics', image: 'https://placehold.co/300x300/1e293b/indigo?text=Electronics', count: 120 },
              { name: 'Accessories', image: 'https://placehold.co/300x300/1e293b/purple?text=Accessories', count: 85 },
              { name: 'Clothing', image: 'https://placehold.co/300x300/1e293b/green?text=Clothing', count: 200 },
              { name: 'Home & Living', image: 'https://placehold.co/300x300/1e293b/orange?text=Home', count: 150 },
            ].map((category) => (
              <a
                key={category.name}
                href={`/categories/${category.name.toLowerCase()}`}
                className="group relative aspect-square rounded-2xl overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-semibold text-lg">{category.name}</h3>
                  <p className="text-slate-400 text-sm">{category.count} products</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Get exclusive deals, new product alerts, and special discounts delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
