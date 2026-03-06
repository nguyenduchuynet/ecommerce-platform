'use client'

import { Header, Footer, ProductCard } from '@/components/store'
import { Search, SlidersHorizontal } from 'lucide-react'
import { useState } from 'react'

const allProducts = [
  { id: '1', name: 'Premium Wireless Headphones', slug: 'premium-wireless-headphones', price: 299.99, compareAtPrice: 399.99, images: JSON.stringify(['https://placehold.co/400x400/1e293b/indigo?text=Headphones']) },
  { id: '2', name: 'Smart Watch Pro', slug: 'smart-watch-pro', price: 449.99, compareAtPrice: null, images: JSON.stringify(['https://placehold.co/400x400/1e293b/purple?text=Smart+Watch']) },
  { id: '3', name: 'Minimalist Backpack', slug: 'minimalist-backpack', price: 89.99, compareAtPrice: 129.99, images: JSON.stringify(['https://placehold.co/400x400/1e293b/green?text=Backpack']) },
  { id: '4', name: 'Mechanical Keyboard', slug: 'mechanical-keyboard', price: 179.99, compareAtPrice: null, images: JSON.stringify(['https://placehold.co/400x400/1e293b/orange?text=Keyboard']) },
  { id: '5', name: 'Portable Speaker', slug: 'portable-speaker', price: 79.99, compareAtPrice: 99.99, images: JSON.stringify(['https://placehold.co/400x400/1e293b/blue?text=Speaker']) },
  { id: '6', name: 'Wireless Earbuds', slug: 'wireless-earbuds', price: 159.99, compareAtPrice: null, images: JSON.stringify(['https://placehold.co/400x400/1e293b/pink?text=Earbuds']) },
  { id: '7', name: 'USB-C Hub Pro', slug: 'usb-c-hub-pro', price: 69.99, compareAtPrice: 89.99, images: JSON.stringify(['https://placehold.co/400x400/1e293b/cyan?text=USB-C+Hub']) },
  { id: '8', name: 'Ergonomic Mouse', slug: 'ergonomic-mouse', price: 59.99, compareAtPrice: null, images: JSON.stringify(['https://placehold.co/400x400/1e293b/red?text=Mouse']) },
  { id: '9', name: '4K Webcam', slug: '4k-webcam', price: 129.99, compareAtPrice: 169.99, images: JSON.stringify(['https://placehold.co/400x400/1e293b/yellow?text=Webcam']) },
]

export default function ProductsPage() {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('newest')

  const filtered = allProducts.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    return 0
  })

  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">All Products</h1>
            <p className="text-slate-400">Browse our collection of {allProducts.length} premium products</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {sorted.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">No products found matching "{search}"</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
