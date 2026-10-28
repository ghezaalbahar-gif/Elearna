import { Check } from 'lucide-react'

export default function AuthCheckbox({ id, checked, onChange, required = false, className = '', children }) {
  return (
    <label
      htmlFor={id}
      className={`flex cursor-pointer items-start gap-[10px] text-left text-[14px] leading-[23px] font-normal text-white/50 ${className}`}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        required={required}
        className="peer sr-only"
      />
      <span
        aria-hidden="true"
        className="mt-0 flex h-[14px] min-w-[14px] items-center justify-center rounded-[2px] border border-muted text-ink transition-colors duration-200 peer-checked:border-check-on peer-checked:bg-amber peer-focus-visible:ring-2 peer-focus-visible:ring-amber max-[480px]:mt-[4px] min-[768px]:mt-[6px]"
      >
        {checked ? <Check size={11} strokeWidth={3} /> : null}
      </span>
      <span>{children}</span>
    </label>
  )
}
