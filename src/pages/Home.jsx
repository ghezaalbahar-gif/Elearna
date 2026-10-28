import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { homeNav } from '../data/navigation'
import HeroSection from '../components/HeroSection'
import PartnersSection from '../components/PartnersSection'
import CategoriesSection from '../components/CategoriesSection'
import PromoSection from '../components/PromoSection'
import CoursesSection from '../components/CoursesSection'
import OfferSection from '../components/OfferSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ProgramsSection from '../components/ProgramsSection'
import BenefitsSection from '../components/BenefitsSection'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <div className="site">
      <Navbar navItems={homeNav} />
      <main id="main-content">
        <HeroSection />
        <PartnersSection />
        <CategoriesSection />
        <PromoSection />
        <CoursesSection />
        <OfferSection />
        <TestimonialsSection />
        <div className="linear-background">
          <ProgramsSection />
          <BenefitsSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
