import { footerCredits } from '../contact/ContactFooterData.js'

const smallLink = 'text-[12px] uppercase leading-[17px] text-white hover:text-brand'

export default function AuthFooter({ links }) {
  return (
    <footer className="mt-auto w-full">
      <div className="border-t border-[#ffffff1a] py-[20px]">
        <div className="flex flex-row items-center justify-between gap-[30px] max-[992px]:flex-col max-[992px]:gap-[15px]">
          <div className="flex flex-row items-center gap-[30px] max-[480px]:flex-wrap max-[480px]:justify-center max-[480px]:gap-[15px]">
            {links.map((link) => (
              <a key={link.label} href={link.href} className={smallLink}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-row items-center gap-[30px] max-[480px]:flex-wrap max-[480px]:justify-center max-[480px]:gap-[15px]">
            {footerCredits.map((credit) => (
              <div key={credit.text} className="text-[12px] font-medium uppercase text-mist">
                {credit.text}{' '}
                <a href={credit.href} target="_blank" rel="noreferrer" className={smallLink}>
                  {credit.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
