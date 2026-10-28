import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CtaBand from '../components/CtaBand'
import MemberHero from '../components/team/MemberHero'
import MemberAbout from '../components/team/MemberAbout'
import MemberCourses from '../components/team/MemberCourses'
import MemberAwards from '../components/team/MemberAwards'
import { memberBySlug } from '../components/team/TeamSectionData'

export default function MemberProfile() {
  const { slug } = useParams()
  const member = memberBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (member) document.title = member.name
  }, [slug, member])

  if (!member) return <Navigate to="/team" replace />

  return (
    <div className="site">
      <Navbar />
      <main id="main-content" className="integrated-page">
        <MemberHero member={member} />
        <MemberAbout />
        <MemberCourses />
        <MemberAwards />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
