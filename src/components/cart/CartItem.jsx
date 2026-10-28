import { useCart, formatPrice } from '../../context/CartContext'

export default function CartItem({ item }) {
  const { updateQuantity, removeItem } = useCart()
  const quantityId = `cart-quantity-${item.id}`

  return (
    <li className="flex items-start gap-[16px] py-[12px]">
      <img
        className="h-[60px] w-[60px] shrink-0 rounded-[2px] object-cover"
        src={item.image}
        alt={item.alt}
        width="60"
        height="60"
        loading="lazy"
      />

      <div className="min-w-0 flex-1">
        <h3 className="m-0 text-[14px] leading-[23px] font-semibold text-ink min-[992px]:text-[17px] min-[992px]:leading-[28px]">
          {item.title}
        </h3>
        {item.quantity > 1 && (
          <p className="mt-[4px] mb-0 text-[14px] leading-[23px] text-muted">
            {formatPrice(item.unit)} × {item.quantity}
          </p>
        )}

        <div className="mt-[10px] flex items-center gap-[16px]">
          <div>
            <label className="sr-only" htmlFor={quantityId}>
              Quantity for {item.title}
            </label>
            <input
              id={quantityId}
              className="h-[38px] w-[60px] rounded-[3px] border border-line-soft bg-white px-[10px] py-[8px] text-[14px] leading-[20px] text-ink"
              type="number"
              min="1"
              step="1"
              inputMode="numeric"
              value={item.quantity}
              onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
            />
          </div>
          <button
            type="button"
            onClick={() => removeItem(item.id)}
            aria-label={`Remove ${item.title} from cart`}
            className="cursor-pointer border-0 bg-transparent p-0 text-[14px] leading-[20px] text-muted underline transition-colors duration-[250ms] hover:text-ink"
          >
            Remove
          </button>
        </div>
      </div>

      <span className="shrink-0 text-[14px] leading-[23px] font-semibold text-ink min-[992px]:text-[17px] min-[992px]:leading-[28px]">
        {formatPrice(item.unit * item.quantity)}
      </span>
    </li>
  )
}
