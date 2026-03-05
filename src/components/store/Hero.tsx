'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star, Truck, Shield, RefreshCw } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-6">
              <Star className="w-4 h-4" />
              <span>Premium Quality Products</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Discover
              <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Premium Products
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-8 max-w-lg">
              Shop the latest trends with our curated collection. Fast shipping, secure payments, and 24/7 support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition-all duration-200"
              >
                Browse Categories
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Free Shipping</p>
                  <p className="text-slate-500 text-xs">On orders $50+</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Secure Payment</p>
                  <p className="text-slate-500 text-xs">100% Protected</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Easy Returns</p>
                  <p className="text-slate-500 text-xs">30-day policy</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Featured Product */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl" />
              <div className="absolute inset-4 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
                <img
                  src="https://placehold.co/600x600/1e293b/indigo?text=Featured+Product"
                  alt="Featured Product"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 bg-slate-900 rounded-2xl border border-slate-800">
                <p className="text-slate-400 text-sm">Starting at</p>
                <p className="text-2xl font-bold text-white">$49.99</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
