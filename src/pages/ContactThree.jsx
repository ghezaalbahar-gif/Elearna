import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ContactPage from '../components/contact/ContactPage'

export default function ContactThree() {
  useEffect(() => {
    document.title = 'Contact'
  }, [])

  return (
    <div className="site">
      <Navbar />
      <main id="main-content" className="integrated-page">
        <ContactPage />
      </main>
    </div>
  )
}
