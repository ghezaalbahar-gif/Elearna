import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CtaBand from '../components/CtaBand'
import CareerHero from '../components/career/CareerHero'
import WhyCareer from '../components/career/WhyCareer'
import JobOpenings from '../components/career/JobOpenings'

export default function Career() {
  useEffect(() => {
    document.title = 'Career'
  }, [])

  return (
    <div className="site">
      <Navbar />
      <main id="main-content" className="integrated-page">
        <CareerHero />
        <WhyCareer />
        <JobOpenings />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
