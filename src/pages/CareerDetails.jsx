import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CareerDetailHero from '../components/career/CareerDetailHero'
import JobDescription from '../components/career/JobDescription'
import JobDetails from '../components/career/JobDetails'
import ApplicationForm from '../components/career/ApplicationForm'
import { jobs } from '../components/career/careerData'

export default function CareerDetails() {
  const { slug } = useParams()
  const job = jobs.find((item) => item.slug === slug)

  useEffect(() => {
    document.title = job ? job.title : 'Career'
  }, [job])

  if (!job) return <Navigate to="/career" replace />

  return (
    <div className="site">
      <Navbar />
      <main id="main-content" className="integrated-page">
        <CareerDetailHero job={job} />
        <section className="px-[15px] pt-[40px] pb-[60px] min-[992px]:pt-[110px] min-[992px]:pb-[110px]">
          <div className="mx-auto flex w-full max-w-[1320px] flex-col items-start justify-between gap-[20px] min-[992px]:flex-row min-[992px]:gap-[40px]">
            <JobDescription />
            <JobDetails job={job} />
          </div>
        </section>
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  )
}
