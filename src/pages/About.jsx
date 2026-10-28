import Navbar from '../components/Navbar'
import AboutHero from '../components/about/AboutHero'
import AboutStory from '../components/about/AboutStory'
import AboutHighlights from '../components/about/AboutHighlights'
import AboutIntro from '../components/about/AboutIntro'
import AboutFeatures from '../components/about/AboutFeatures'
import AboutOffer from '../components/about/AboutOffer'
import AboutPartners from '../components/about/AboutPartners'
import AboutInstructor from '../components/about/AboutInstructor'
import AboutTestimonial from '../components/about/AboutTestimonial'
import AboutCTA from '../components/about/AboutCTA'
import AboutFooter from '../components/about/AboutFooter'

export default function About() {
  return (
    <div className="site about-page">
      <Navbar />
      <main id="main-content">
        <AboutHero />
        <AboutStory />
        <AboutHighlights />
        <AboutIntro />
        <AboutFeatures />
        <AboutOffer />
        <AboutPartners />
        <AboutInstructor />
        <div className="background-light-blue">
          <AboutTestimonial />
        </div>
        <AboutCTA />
      </main>
      <AboutFooter />
    </div>
  )
}
