import { Link } from 'react-router-dom'
import { assets } from '../../data/assets'
import AuthFooter from './AuthFooter'

export default function AuthLayout({ heading, subheading, links, topGap, children }) {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center overflow-hidden bg-ink px-[15px]"
      style={{
        backgroundImage: `url(${assets.authBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% center',
        backgroundSize: 'cover',
      }}
    >
      <header className="flex w-full items-center py-[20px]">
        <Link to="/" className="inline-flex" aria-label="Elearna home">
          <img src={assets.logo} width="105" height="26" alt="Elearna" />
        </Link>
      </header>

      <main
        id="main-content"
        className={`flex w-full flex-1 flex-col items-center justify-start ${topGap} min-[992px]:justify-center min-[992px]:pt-0`}
      >
        <div className="w-full max-w-[470px]">
          <div className="mb-[20px] flex flex-col items-center gap-[10px] text-center">
            <h1 className="m-0 font-heading text-[30px] font-semibold leading-[40px] tracking-[-1.3px] text-white min-[768px]:text-[35px] min-[768px]:leading-[44px] min-[768px]:tracking-[-1.5px] min-[992px]:text-[48px] min-[992px]:leading-[52px]">
              {heading}
            </h1>
            <p className="m-0 text-[14px] leading-[23px] text-white">{subheading}</p>
          </div>
          {children}
        </div>
      </main>

      <AuthFooter links={links} />
    </div>
  )
}
