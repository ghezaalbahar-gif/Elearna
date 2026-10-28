import { assets } from '../../data/assets'
import { useCart } from '../../context/CartContext'

export default function CartButton() {
  const { count, open, toggleCart } = useCart()

  return (
    <button
      type="button"
      className="cart-link cursor-pointer border-0 bg-transparent p-0"
      aria-label={`View cart, ${count} item${count === 1 ? '' : 's'}`}
      aria-expanded={open}
      onClick={toggleCart}
    >
      <img src={assets.cartIcon} width="18" height="23" alt="" aria-hidden="true" />
      <span className="cart-count" aria-hidden="true">
        {count}
      </span>
    </button>
  )
}
