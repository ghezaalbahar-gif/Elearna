import contactBackground from '../../assets/contact-three-background.webp'
import ContactHero from './ContactHero.jsx'
import ChatButton from './ChatButton.jsx'
import ContactFooter from './ContactFooter.jsx'

export default function ContactPage() {
  return (
    <>
      <section
        className="relative min-h-screen bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${contactBackground})`,
          backgroundPosition: '0 0, 50%',
          backgroundRepeat: 'repeat, no-repeat',
          backgroundSize: 'auto, cover',
        }}
      >
        <ContactHero />
        <ChatButton />
      </section>
      <ContactFooter />
    </>
  )
}
