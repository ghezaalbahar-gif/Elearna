const informationClasses =
  'text-[48px] font-light leading-[58px] text-white transition-colors duration-300 hover:text-brand max-[992px]:text-[35px] max-[992px]:leading-[47px] max-[768px]:text-[35px] max-[768px]:leading-[43px] max-[480px]:text-[25px]';

export default function ContactHero() {
  return (
    <div className="flex h-screen max-h-screen items-center justify-center max-[480px]:h-auto max-[480px]:max-h-none max-[480px]:items-start max-[480px]:pt-[144px] max-[480px]:pb-[110px]">
      <div className="flex w-full max-w-[935px] flex-col items-center px-[15px] text-center">
        <h1 className="font-heading text-[clamp(70px,17vw,250px)] font-medium leading-none tracking-[-12.5px] text-brand max-[992px]:tracking-[-6px] max-[768px]:tracking-[-3px]">
          Contact
        </h1>
        <p className="mt-[15px] mb-[70px] max-w-[605px] text-white opacity-70 max-[768px]:mb-[36px] max-[480px]:mb-[24px]">
          Lorem ipsum dolor sit amet consectetur. Est cras viverra pharetra tellus pulvinar amet
          aliquam. Vestibulum hac tincidunt.
        </p>
        <div className="flex w-full max-w-[558px] flex-col items-center">
          <a href="mailto:info@example.com" className={informationClasses}>
            info@example.com
          </a>
          <div className="mt-[23px] mb-[19px] h-px w-full bg-white opacity-40 max-[992px]:mt-[15px] max-[992px]:mb-[13px] max-[480px]:mt-[10px] max-[480px]:mb-[10px]" />
          <a href="tel:8881234567" className={informationClasses}>
            (888) 123 4567
          </a>
        </div>
      </div>
    </div>
  );
}
