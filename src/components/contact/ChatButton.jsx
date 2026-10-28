import { useState } from 'react';
import chatIcon from '../../assets/chat-icon.svg';

const fieldClasses =
  'mb-[10px] block h-[50px] w-full rounded-[4px] bg-[#ffffff1a] px-[20px] text-[17px] font-normal text-white placeholder:text-[#fff9] focus:outline-none';

export default function ChatButton() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-label="Open contact form"
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="absolute right-[68px] bottom-[150px] z-[5] flex h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-full bg-brand transition-colors duration-300 hover:bg-[#ffc733] max-[992px]:right-[40px] max-[768px]:right-[15px] max-[768px]:bottom-[128px] max-[480px]:relative max-[480px]:bottom-0 max-[480px]:ml-auto max-[480px]:mr-[15px]"
      >
        <img src={chatIcon} width="34" height="37" alt="Icon" />
      </button>

      <div className="max-[768px]:pointer-events-none max-[768px]:absolute max-[768px]:inset-0 max-[768px]:flex max-[768px]:items-center max-[768px]:justify-center max-[480px]:items-start max-[480px]:pt-[100px]">
        <div
          aria-hidden={!open}
          className={`absolute right-[68px] bottom-[250px] z-[40] w-full max-w-[390px] origin-bottom-right overflow-hidden rounded-[4px] bg-[#ffffff3d] backdrop-blur-[15px] transition-transform duration-300 max-[768px]:right-auto max-[768px]:bottom-auto max-[480px]:relative max-[480px]:w-[93%] max-[480px]:max-w-none ${
            open ? 'pointer-events-auto [transform:scale(1)]' : 'pointer-events-none [transform:scale(0)]'
          }`}
        >
          {sent ? (
            <div className="px-[40px] py-[45px] text-center text-white max-[480px]:px-[30px]">
              Thank you! Your submission has been received!
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              <div className="bg-brand p-[15px] text-center">
                <div className="font-heading text-[24px] font-semibold leading-[32px] tracking-[-0.5px] text-ink">
                  Contact information
                </div>
              </div>
              <div className="p-[40px] max-[480px]:p-[30px]">
                <input className={fieldClasses} name="Your-name" placeholder="Your name" type="text" required />
                <input className={fieldClasses} name="Email" placeholder="Email" type="email" required />
                <input className={fieldClasses} name="Phone" placeholder="Phone" type="tel" required />
                <input
                  className={`${fieldClasses} mb-[30px]`}
                  name="Enquiry-type"
                  placeholder="Enquiry type"
                  type="text"
                  required
                />
                <button
                  type="submit"
                  className="relative flex min-h-[50px] w-full cursor-pointer items-center justify-center gap-2 rounded-[4px] border-none bg-brand px-[45px] py-[10px] text-[17px] font-normal capitalize tracking-[-0.5px] text-ink"
                >
                  Send message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
