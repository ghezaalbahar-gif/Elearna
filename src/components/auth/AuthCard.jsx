const noticeTone = {
  error: 'bg-danger text-ink',
  success: 'bg-mist text-ink',
}

export default function AuthCard({ notice, children }) {
  return (
    <>
      <div className="rounded-[4px] bg-deep px-[20px] pt-[40px] pb-[45px] shadow-auth min-[480px]:px-[40px] min-[992px]:pt-[25px] min-[992px]:pb-[25px] min-[1440px]:pt-[40px] min-[1440px]:pb-[40px]">
        {children}
      </div>
      {notice ? (
        <div
          role={notice.tone === 'error' ? 'alert' : 'status'}
          className={`mt-[10px] p-[10px] text-[14px] leading-[23px] ${noticeTone[notice.tone]}`}
        >
          {notice.text}
        </div>
      ) : null}
    </>
  )
}
