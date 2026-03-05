'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react'
import { useCartStore } from '@/lib/store'
import { formatCurrency } from '@/lib/utils'
import { Header, Footer } from '@/components/store'

export default function CartPage() {
  const items = useCartStore((state) => state.items)
  const removeItem = useCartStore((state) => state.removeItem)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const getTotal = useCartStore((state) => state.getTotal)

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-slate-950">
        <Header />
        <div className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center py-20">
              <ShoppingBag className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-white mb-4">Your cart is empty</h1>
              <p className="text-slate-400 mb-8">Looks like you haven't added anything to your cart yet.</p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors"
              >
                Start Shopping
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-950">
      <Header />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/products" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>

          <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart ({items.length})</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-slate-900 border border-slate-800 rounded-2xl">
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-slate-800 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-1">{item.name}</h3>
                    <p className="text-indigo-400 font-medium mb-3">{formatCurrency(item.price)}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="p-1 bg-slate-800 rounded-lg text-slate-400 hover:text-white"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="p-1 bg-slate-800 rounded-lg text-slate-400 hover:text-white"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.productId)}
                        className="p-2 text-slate-400 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">{formatCurrency(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-24">
                <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span>{formatCurrency(getTotal())}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Tax</span>
                    <span>{formatCurrency(getTotal() * 0.1)}</span>
                  </div>
                  <div className="border-t border-slate-800 pt-3">
                    <div className="flex justify-between text-white font-bold text-lg">
                      <span>Total</span>
                      <span>{formatCurrency(getTotal() * 1.1)}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
