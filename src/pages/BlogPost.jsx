import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CtaBand from '../components/CtaBand'
import PostDetail from '../components/blog/PostDetail'
import { posts, slug } from '../components/blog/BlogData'

export default function BlogPost() {
  const { slug: postSlug } = useParams()
  const post = posts.find((item) => slug(item.title) === postSlug)

  useEffect(() => {
    document.title = post ? post.title : 'Blog'
  }, [post])

  if (!post) return <Navigate to="/blog-one" replace />

  const nextPosts = [1, 2, 3].map((step) => posts[(posts.indexOf(post) + step) % posts.length])

  return (
    <div className="site">
      <Navbar />
      <main id="main-content" className="integrated-page">
        <PostDetail post={post} nextPosts={nextPosts} />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
