import { X } from 'lucide-react'

export default function CartHeader({ onClose }) {
  return (
    <header className="flex shrink-0 items-center justify-between border-b border-muted px-[24px] py-[16px]">
      <h2 className="m-0 font-heading text-[20px] font-semibold leading-[30px] tracking-[-0.5px] text-ink min-[992px]:text-[24px] min-[992px]:leading-[32px]">
        Your Cart
      </h2>
      <button
        type="button"
        onClick={onClose}
        aria-label="Close cart"
        className="-mr-[10px] -my-[5px] inline-flex h-[40px] w-[40px] shrink-0 cursor-pointer items-center justify-center border-0 bg-transparent text-muted transition-colors duration-[250ms] hover:text-ink min-[992px]:-my-[4px]"
      >
        <X size={20} aria-hidden="true" />
      </button>
    </header>
  )
}
