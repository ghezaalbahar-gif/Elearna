import { Link } from 'react-router-dom'
import { intro, members } from './TeamSectionData'

export default function TeamSection() {
  return (
    <section id="team" className="px-[15px] pt-[50px] pb-[50px] lg:pt-[80px] lg:pb-[80px] 2xl:pt-[110px] 2xl:pb-[110px]">
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="reveal mb-[40px] flex flex-col items-center text-center">
          <p className="text-[12px] font-medium uppercase leading-[23px] tracking-[0.5px] text-ink md:text-[15px]">
            {intro.kicker}
          </p>
          <h2 className="mt-[10px] max-w-[750px] font-heading text-[30px] font-semibold leading-[40px] tracking-[-1.3px] text-ink md:mt-[15px] md:text-[40px] md:leading-[48px] md:tracking-[-1.5px]">
            {intro.heading}
          </h2>
          <p className="mt-[7px] max-w-[750px] text-[14px] leading-[23px] tracking-[0.5px] text-muted md:mt-[12px] md:text-[17px] md:leading-[28px]">
            {intro.body}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <Link
              key={member.slug}
              to={`/team-members/${member.slug}`}
              className="reveal flex w-full flex-col gap-[15px]"
              style={{ transitionDelay: `${(index % 4) * 90}ms` }}
            >
              <span className="flex aspect-[300/401] w-full flex-col items-stretch justify-end overflow-hidden rounded-[4px] bg-gradient-to-b from-[#e2e8ea] to-[#f8f7ef] px-[15px] pt-[15px]">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                    className="aspect-[300/410] h-auto w-full object-cover object-top transition-transform duration-[300ms] ease-out hover:scale-[1.1]"
                  />
                ) : (
                  <span className="flex h-full items-center justify-center px-[15px] text-center text-[11px] uppercase leading-[16px] tracking-[0.5px] text-muted">
                    No image yet — slot {index + 1}
                  </span>
                )}
              </span>
              <span className="flex flex-col items-center gap-[6px] text-center">
                <span className="font-heading text-[17px] font-semibold leading-[23px] tracking-[-0.5px] text-ink md:text-[20px] md:leading-[25px]">
                  {member.name}
                </span>
                <span className="text-[11px] font-normal uppercase leading-[12px] tracking-[0.5px] text-muted md:text-[13px]">
                  {member.role}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
