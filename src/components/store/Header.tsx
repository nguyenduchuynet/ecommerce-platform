'use client'

import Link from 'next/link'
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCartStore } from '@/lib/store'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const itemCount = useCartStore((state) => state.getItemCount())

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">ShopHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-slate-300 hover:text-white transition-colors">
              Products
            </Link>
            <Link href="/categories" className="text-slate-300 hover:text-white transition-colors">
              Categories
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
              About
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-300 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/cart" className="relative p-2 text-slate-300 hover:text-white transition-colors">
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-500 text-white text-xs rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button className="hidden sm:block p-2 text-slate-300 hover:text-white transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button
              className="md:hidden p-2 text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <nav className="px-4 py-4 space-y-2">
            <Link href="/" className="block py-2 text-slate-300 hover:text-white">
              Home
            </Link>
            <Link href="/products" className="block py-2 text-slate-300 hover:text-white">
              Products
            </Link>
            <Link href="/categories" className="block py-2 text-slate-300 hover:text-white">
              Categories
            </Link>
            <Link href="/about" className="block py-2 text-slate-300 hover:text-white">
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
