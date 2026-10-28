import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { footerLinks } from '../components/contact/ContactFooterData.js'
import AuthCard from '../components/auth/AuthCard'
import AuthInput from '../components/auth/AuthInput'
import AuthLayout from '../components/auth/AuthLayout'

const notice = {
  error: 'Check the fields above and try again.',
  success: 'Your details pass validation. This demo is not connected to a backend, so nobody is logged in.',
}

export default function Login() {
  const [values, setValues] = useState({ email: '', password: '' })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    document.title = 'Elearna — Log In'
  }, [])

  const onChange = (event) => {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }))
    setStatus('idle')
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) {
      setStatus('error')
      return
    }
    form.reset()
    setValues({ email: '', password: '' })
    setStatus('success')
  }

  return (
    <AuthLayout heading="Log in" subheading="More than 50k students have joined Elearna already" links={footerLinks} topGap="pt-[19px]">
      <AuthCard notice={status === 'idle' ? null : { tone: status, text: notice[status] }}>
        <form noValidate onSubmit={onSubmit} className="flex flex-col">
          <AuthInput
            id="log-in-email"
            name="email"
            label="Email address"
            type="email"
            autoComplete="username"
            value={values.email}
            onChange={onChange}
            className="mb-[15px]"
          />
          <AuthInput
            id="log-in-password"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={values.password}
            onChange={onChange}
            className="mb-[30px]"
          />
          <input
            type="submit"
            value="Log In"
            title="Demo only — this form is not connected to a backend"
            className="min-h-[50px] w-full cursor-pointer rounded-[4px] border-none bg-amber px-[20px] text-[14px] font-normal capitalize leading-[20px] tracking-[-0.5px] text-ink outline-none transition-transform duration-200 ease-out hover:scale-[0.97] active:scale-[0.95] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
          />
          <div className="mt-[20px] flex flex-wrap items-center justify-between gap-[10px]">
            <span className="text-[14px] leading-[23px] text-white opacity-70">Don't have an account?</span>
            <Link to="/sign-up" className="text-[14px] leading-[23px] text-white transition-colors duration-300 hover:text-amber">
              Sign Up
            </Link>
          </div>
        </form>
      </AuthCard>
    </AuthLayout>
  )
}
