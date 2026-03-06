'use client'

import Image from 'next/image'
import { ShoppingCart, Heart } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'
import { useCartStore } from '@/lib/store'

interface Product {
  id: string
  name: string
  slug: string
  price: number
  compareAtPrice?: number | null
  images: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)

  let images: string[] = []
  try {
    images = JSON.parse(product.images || '[]')
  } catch {
    images = []
  }
  const image = images[0] || 'https://placehold.co/400x400/1e293b/white?text=Product'

  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image
    })
  }

  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {discount > 0 && (
          <span className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-lg">
            -{discount}%
          </span>
        )}
        <button
          onClick={(e) => { e.stopPropagation() }}
          className="absolute top-3 right-3 p-2 bg-slate-800/80 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-white font-semibold mb-1 group-hover:text-indigo-400 transition-colors line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-indigo-400 font-bold">{formatCurrency(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-slate-500 line-through text-sm">
              {formatCurrency(product.compareAtPrice)}
            </span>
          )}
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center gap-2 py-2 bg-slate-800 hover:bg-indigo-600 text-white text-sm font-medium rounded-xl transition-colors"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}
