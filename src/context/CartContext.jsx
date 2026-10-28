import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

// Course prices live in src/data/courses.js as display strings ('Free', '$59').
const toNumber = (price) => {
  const value = Number(String(price).replace(/[^0-9.]/g, ''))
  return Number.isFinite(value) ? value : 0
}

export const formatPrice = (value) =>
  value === 0 ? 'Free' : `$${Number.isInteger(value) ? value : value.toFixed(2)}`

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false)

  const addItem = useCallback((course) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === course.id)
      if (existing) {
        return current.map((item) =>
          item.id === course.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [
        ...current,
        {
          id: course.id,
          slug: course.slug,
          title: course.title,
          image: course.image,
          alt: course.alt,
          unit: toNumber(course.price),
          quantity: 1,
        },
      ]
    })
    setOpen(true)
  }, [])

  const updateQuantity = useCallback((id, quantity) => {
    const next = Math.max(1, Math.floor(quantity) || 1)
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, quantity: next } : item)),
    )
  }, [])

  const removeItem = useCallback((id) => {
    setItems((current) => current.filter((item) => item.id !== id))
  }, [])

  const openCart = useCallback(() => setOpen(true), [])
  const closeCart = useCallback(() => setOpen(false), [])
  const toggleCart = useCallback(() => setOpen((value) => !value), [])

  const value = useMemo(
    () => ({
      items,
      open,
      count: items.reduce((total, item) => total + item.quantity, 0),
      subtotal: items.reduce((total, item) => total + item.unit * item.quantity, 0),
      addItem,
      updateQuantity,
      removeItem,
      openCart,
      closeCart,
      toggleCart,
    }),
    [items, open, addItem, updateQuantity, removeItem, openCart, closeCart, toggleCart],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside a CartProvider')
  return context
}
