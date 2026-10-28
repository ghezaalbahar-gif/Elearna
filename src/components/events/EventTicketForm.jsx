import { useState } from 'react'

const unitPrice = (price) => Number(String(price).replace(/[^0-9.]/g, '')) || 0

const rowClass = 'flex items-center justify-between gap-[20px] border-b border-line-faint pb-[16px]'
const labelClass = 'text-[14px] font-normal leading-[23px] text-muted'
const errorClass =
  'mb-[13px] rounded-[4px] bg-danger px-[10px] py-[4px] text-[14px] leading-[23px] text-ink'

export default function EventTicketForm({ event }) {
  const [quantity, setQuantity] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState(null)

  const unit = unitPrice(event.price)
  const count = Math.max(1, Math.floor(Number(quantity)) || 1)

  const submit = (submitEvent) => {
    submitEvent.preventDefault()
    const next = {}
    if (!quantity.trim()) next.quantity = 'Please enter a quantity.'
    else if (!Number.isFinite(Number(quantity)) || Number(quantity) < 1) {
      next.quantity = 'Please enter a quantity of at least 1.'
    }
    if (!email.trim()) next.email = 'Please enter your email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      next.email = 'Please enter a valid email address.'
    }
    setErrors(next)
  }

  return (
    <div className="w-full overflow-hidden rounded-[4px] border border-line-faint bg-white min-[480px]:min-w-0 min-[480px]:flex-1">
      <div className="flex h-[54px] items-center bg-amber px-[20px]">
        <h2 className="font-heading text-[20px] font-semibold leading-[30px] tracking-[-0.5px] text-ink">
          Buy tickets
        </h2>
      </div>

      <div className="flex flex-col px-[25px] pt-[20px] pb-[30px]">
        <div className={`mb-[16px] ${rowClass} text-[14px] leading-[23px] text-muted`}>
          <span>Total slots</span>
          <span>{event.totalSlots}</span>
        </div>
        <div className={`mb-[16px] ${rowClass} text-[14px] leading-[23px] text-muted`}>
          <span>Booked Slots</span>
          <span>{event.bookedSlots}</span>
        </div>
        <div className={`mb-[13px] ${rowClass} text-[14px] leading-[23px] text-muted`}>
          <span>Ticket price</span>
          <span className="font-heading text-[17px] font-semibold uppercase leading-[23px] tracking-[-0.5px] text-amber">
            {event.price}
          </span>
        </div>

        <form noValidate onSubmit={submit}>
          <div className="mb-[13px] flex items-center justify-between gap-[20px] border-b border-line-faint pb-[13px]">
            <label htmlFor={`quantity-${event.slug}`} className={labelClass}>
              Quantity
            </label>
            <input
              id={`quantity-${event.slug}`}
              type="number"
              min="1"
              step="1"
              placeholder="1"
              value={quantity}
              onChange={(change) => setQuantity(change.target.value)}
              aria-invalid={errors?.quantity ? 'true' : undefined}
              aria-describedby={errors?.quantity ? `quantity-error-${event.slug}` : undefined}
              className="h-[36px] w-[56px] shrink-0 border border-line-faint bg-white pl-[12px] text-[14px] leading-[23px] text-ink"
            />
          </div>
          {errors?.quantity ? (
            <div id={`quantity-error-${event.slug}`} className={errorClass}>
              {errors.quantity}
            </div>
          ) : null}

          <div className="mb-[35px] flex items-center justify-between gap-[20px] border-b border-line-faint pb-[13px]">
            <label htmlFor={`email-${event.slug}`} className={labelClass}>
              Email
            </label>
            <input
              id={`email-${event.slug}`}
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
              value={email}
              onChange={(change) => setEmail(change.target.value)}
              aria-invalid={errors?.email ? 'true' : undefined}
              aria-describedby={errors?.email ? `email-error-${event.slug}` : undefined}
              className="h-[38px] w-full min-w-0 rounded-[4px] border border-line-faint bg-white px-[12px] py-[8px] text-[14px] leading-[22px] text-ink"
            />
          </div>
          {errors?.email ? (
            <div id={`email-error-${event.slug}`} className={errorClass}>
              {errors.email}
            </div>
          ) : null}

          {unit > 0 && count > 1 ? (
            <div className={`mb-[13px] ${rowClass} text-[14px] leading-[23px] text-muted`}>
              <span>Total</span>
              <span className="font-heading text-[17px] font-semibold leading-[23px] tracking-[-0.5px] text-ink">
                ${unit * count}
              </span>
            </div>
          ) : null}

          <div className="mb-[10px] flex justify-center">
            <button type="submit" className="btn btn-yellow">
              Book Now
            </button>
          </div>
          <p className="text-center text-[14px] leading-[23px] text-muted">
            The ticket will be sent via email
          </p>
          {errors && Object.keys(errors).length === 0 ? (
            <div role="status" className="mt-[10px] text-center text-[14px] leading-[23px] text-muted">
              This demo has no booking backend, so no ticket was reserved and no email was sent.
            </div>
          ) : null}
        </form>
      </div>
    </div>
  )
}
