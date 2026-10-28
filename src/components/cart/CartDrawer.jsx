import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { formatPrice, useCart } from '../../context/CartContext'
import CartHeader from './CartHeader'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function CartDrawer() {
  const { items, open, subtotal, closeCart } = useCart()
  const reduceMotion = useReducedMotion()
  const panelRef = useRef(null)
  const openerRef = useRef(null)
  const wasOpenRef = useRef(open)
  const [notice, setNotice] = useState('')
  const motionDuration = reduceMotion ? 0 : 0.35

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const scrollbar = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`
    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
    }
  }, [open])

  useEffect(() => {
    const wasOpen = wasOpenRef.current
    wasOpenRef.current = open
    if (open) {
      openerRef.current = document.activeElement
      panelRef.current?.focus()
      return undefined
    }
    if (!wasOpen) return undefined
    setNotice('')
    const opener = openerRef.current
    openerRef.current = null
    if (opener && document.contains(opener) && opener !== document.activeElement) opener.focus()
    return undefined
  }, [open])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeCart()
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return
      const focusable = [...panelRef.current.querySelectorAll(FOCUSABLE)]
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, closeCart])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="cart-overlay"
          className="fixed inset-0 z-[1000] cursor-default bg-cart-scrim"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.3 }}
          onClick={closeCart}
          aria-hidden="true"
        />
      )}
      {open && (
        <motion.div
          key="cart-panel"
          id="cart-drawer"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Your Cart"
          tabIndex={-1}
          className="fixed inset-y-0 right-0 z-[1001] flex w-full max-w-[480px] flex-col bg-mist outline-none"
          initial={{ x: reduceMotion ? 0 : '100%' }}
          animate={{ x: 0 }}
          exit={{ x: reduceMotion ? 0 : '100%' }}
          transition={{ duration: motionDuration, ease: [0.16, 1, 0.3, 1] }}
        >
          <CartHeader onClose={closeCart} />

          <div className="min-h-0 flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <EmptyCart />
            ) : (
              <ul className="px-[24px] py-[12px]">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>
            )}
          </div>

          {items.length > 0 && (
            <div className="shrink-0 border-t border-muted px-[24px] pt-[16px] pb-[24px]">
              <div className="mb-[16px] flex items-baseline justify-between gap-[16px]">
                <span className="text-[14px] leading-[23px] text-muted min-[992px]:text-[17px] min-[992px]:leading-[28px]">
                  Subtotal
                </span>
                <span className="font-heading text-[15px] leading-[20px] font-bold tracking-[-0.5px] text-ink min-[992px]:text-[18px] min-[992px]:leading-[22px]">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <button
                type="button"
                className="btn btn-yellow w-full"
                title="Demo only — checkout is not part of this recreation"
                onClick={() =>
                  setNotice(
                    'This demo is not connected to a store backend, so no order is placed.',
                  )
                }
              >
                Continue to Checkout
              </button>
              {notice && (
                <p role="status" className="mt-[12px] mb-0 text-[14px] leading-[23px] text-muted">
                  {notice}
                </p>
              )}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
