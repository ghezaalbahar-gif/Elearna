export default function AuthInput({ id, label, type = 'text', name, autoComplete, value, onChange, className = '' }) {
  return (
    <>
      <label htmlFor={id} className="mb-[5px] block text-left text-[14px] leading-[23px] font-normal text-mist">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        maxLength={256}
        autoComplete={autoComplete}
        required
        value={value}
        onChange={onChange}
        className={`h-[40px] w-full rounded-[4px] border border-transparent bg-field px-[30px] text-[14px] leading-[23px] font-normal text-white outline-none transition-colors duration-300 placeholder:text-white/50 focus:border-field-focus min-[768px]:h-[50px] sm:text-[17px] ${className}`}
      />
    </>
  )
}
