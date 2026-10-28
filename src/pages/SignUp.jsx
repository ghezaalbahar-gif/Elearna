import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { footerLinks } from '../components/contact/ContactFooterData.js'
import AuthCard from '../components/auth/AuthCard'
import AuthCheckbox from '../components/auth/AuthCheckbox'
import AuthInput from '../components/auth/AuthInput'
import AuthLayout from '../components/auth/AuthLayout'

const notice = {
  error: 'Check the fields above and try again.',
  success:
    'Your details pass validation. This demo is not connected to a backend, so no account was created.',
}

const authLinks = footerLinks.filter((link) => link.label === '404' || link.label === 'License')

export default function SignUp() {
  const [values, setValues] = useState({ email: '', name: '', password: '' })
  const [agreed, setAgreed] = useState(false)
  const [mailed, setMailed] = useState(false)
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    document.title = 'Elearna — Sign Up'
  }, [])

  const onChange = (event) => {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }))
    setStatus('idle')
  }

  const onToggle = (setter) => () => {
    setter((on) => !on)
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
    setValues({ email: '', name: '', password: '' })
    setAgreed(false)
    setMailed(false)
    setStatus('success')
  }

  return (
    <AuthLayout
      heading="Sign up"
      subheading={
        <>
          More then <span className="font-medium">50k students</span> join with us!
        </>
      }
      links={authLinks}
      topGap="pt-[34px]"
    >
      <AuthCard notice={status === 'idle' ? null : { tone: status, text: notice[status] }}>
        <form noValidate onSubmit={onSubmit} className="flex flex-col">
          <AuthInput
            id="sign-up-email"
            name="email"
            label="Email address"
            type="email"
            autoComplete="username"
            value={values.email}
            onChange={onChange}
            className="mb-[15px]"
          />
          <AuthInput
            id="sign-up-name"
            name="name"
            label="Name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={onChange}
            className="mb-[15px]"
          />
          <AuthInput
            id="sign-up-password"
            name="password"
            label="Password"
            type="password"
            autoComplete="new-password"
            value={values.password}
            onChange={onChange}
            className="mb-[15px]"
          />
          <AuthCheckbox id="sign-up-agree" checked={agreed} onChange={onToggle(setAgreed)} required className="mb-[9px]">
            By creating an account, I agree to this website's{' '}
            <span className="text-white">privacy policy</span> and{' '}
            <span className="text-white">terms of service</span>
          </AuthCheckbox>
          <AuthCheckbox id="sign-up-marketing" checked={mailed} onChange={onToggle(setMailed)} className="mb-[25px]">
            I consent to receive marketing emails.
          </AuthCheckbox>
          <input
            type="submit"
            value="Sign Up"
            title="Demo only — this form is not connected to a backend"
            className="min-h-[50px] w-full cursor-pointer rounded-[4px] border-none bg-amber px-[20px] text-[14px] font-normal capitalize leading-[20px] tracking-[-0.5px] text-ink outline-none transition-transform duration-200 ease-out hover:scale-[0.97] active:scale-[0.95] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
          />
          <div className="mt-[20px] flex flex-wrap items-center justify-between gap-[10px]">
            <span className="text-[14px] leading-[23px] text-white opacity-70">Already have an account?</span>
            <Link to="/log-in" className="text-[14px] leading-[23px] text-white transition-colors duration-300 hover:text-amber">
              Log In
            </Link>
          </div>
        </form>
      </AuthCard>
    </AuthLayout>
  )
}
