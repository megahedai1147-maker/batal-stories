'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

/* ── عنصر السلة ── */
export interface CartItem {
  id: number
  title: string
  gender: 'boy' | 'girl'
  category: string
}

/* ── تسعير الكتاب المطبوع (بدون الشحن) ──
   السعر بالباقة حسب عدد الكتب:
   1 = 179 · 2 = 339 · 3 = 479 · وكل كتاب زيادة بعد التلاتة ≈ 160
   الشحن بيتحسب في صفحة الطلب حسب المحافظة. */
export const UNIT_PRICE = 179
export const UNIT_BEFORE = 229 // السعر "قبل الخصم" للعرض التسويقي فقط

export function bundlePrice(n: number): number {
  if (n <= 0) return 0
  if (n === 1) return 179
  if (n === 2) return 339
  if (n === 3) return 479
  return 479 + (n - 3) * 160
}
export function singleSum(n: number): number {
  return n * UNIT_PRICE
}

interface CartCtx {
  items: CartItem[]
  count: number
  add: (s: CartItem) => void
  remove: (id: number) => void
  has: (id: number) => boolean
  clear: () => void
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
  price: number    // إجمالي الباقة (قبل الشحن)
  savings: number  // الفرق بين السعر المفرد وسعر الباقة
}

const Ctx = createContext<CartCtx | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setOpen] = useState(false)

  // استرجاع السلة من الجلسة السابقة
  useEffect(() => {
    try {
      const raw = localStorage.getItem('batal_cart')
      if (raw) setItems(JSON.parse(raw))
    } catch {}
  }, [])
  useEffect(() => {
    try { localStorage.setItem('batal_cart', JSON.stringify(items)) } catch {}
  }, [items])

  const add = (s: CartItem) => setItems(p => (p.some(x => x.id === s.id) ? p : [...p, s]))
  const remove = (id: number) => setItems(p => p.filter(x => x.id !== id))
  const has = (id: number) => items.some(x => x.id === id)
  const clear = () => setItems([])

  const price = bundlePrice(items.length)
  const savings = Math.max(0, singleSum(items.length) - price)

  return (
    <Ctx.Provider
      value={{
        items, count: items.length, add, remove, has, clear,
        isOpen, open: () => setOpen(true), close: () => setOpen(false), toggle: () => setOpen(o => !o),
        price, savings,
      }}
    >
      {children}
    </Ctx.Provider>
  )
}

export function useCart(): CartCtx {
  const c = useContext(Ctx)
  if (!c) throw new Error('useCart must be used inside <CartProvider>')
  return c
}
