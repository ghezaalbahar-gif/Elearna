function Arrow({ back }) {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 13 10"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-[650ms] ease-expo ${
        back ? 'rotate-180 group-hover:-translate-x-[4px]' : 'group-hover:translate-x-[4px]'
      }`}
    >
      <path d="M0 5h11M7.5 1.5 11 5l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

const control =
  'group mx-[10px] flex items-center gap-[7px] text-[14px] font-medium tracking-[0.5px] text-ink transition-colors duration-[650ms] ease-expo hover:text-amber md:text-[17px]'

export default function Pagination({ page, pages, onPage }) {
  return (
    <div className="mt-[20px] flex flex-wrap items-center justify-center">
      {page > 1 && (
        <button type="button" onClick={() => onPage(page - 1)} className={control}>
          <Arrow back />
          Previous
        </button>
      )}
      <p className="mx-[10px] text-[14px] font-medium tracking-[0.5px] text-ink md:text-[17px]">
        {page} / {pages}
      </p>
      {page < pages && (
        <button type="button" onClick={() => onPage(page + 1)} className={`${control} flex-row-reverse`}>
          Next
          <Arrow />
        </button>
      )}
    </div>
  )
}
