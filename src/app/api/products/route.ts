import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      where: { status: 'active' },
      orderBy: { createdAt: 'desc' },
      include: {
        categories: {
          include: { category: true }
        }
      }
    })

    // If no products, return demo data
    if (products.length === 0) {
      return NextResponse.json({
        success: true,
        data: [
          {
            id: '1',
            name: 'Premium Wireless Headphones',
            slug: 'premium-wireless-headphones',
            price: 299.99,
            compareAtPrice: 399.99,
            images: ['https://placehold.co/400x400/1e293b/indigo?text=Headphones'],
            stock: 50,
            description: 'High-quality wireless headphones with noise cancellation'
          },
          {
            id: '2',
            name: 'Smart Watch Pro',
            slug: 'smart-watch-pro',
            price: 449.99,
            compareAtPrice: null,
            images: ['https://placehold.co/400x400/1e293b/purple?text=Smart+Watch'],
            stock: 30,
            description: 'Advanced smartwatch with health tracking'
          }
        ]
      })
    }

    return NextResponse.json({ success: true, data: products })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}
