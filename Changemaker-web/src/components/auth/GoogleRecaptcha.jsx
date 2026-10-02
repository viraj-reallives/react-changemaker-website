import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

const SCRIPT_ID = 'google-recaptcha-script'
let scriptLoadPromise = null

function loadRecaptchaScript() {
  if (typeof window !== 'undefined' && window.grecaptcha) {
    return Promise.resolve()
  }

  if (scriptLoadPromise) return scriptLoadPromise

  scriptLoadPromise = new Promise((resolve, reject) => {
    const existing = document.getElementById(SCRIPT_ID)
    if (existing) {
      if (window.grecaptcha) {
        window.grecaptcha.ready(resolve)
      } else {
        existing.addEventListener('load', () => window.grecaptcha.ready(resolve), { once: true })
      }
      return
    }

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.onload = () => window.grecaptcha.ready(resolve)
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA'))
    document.head.appendChild(script)
  })

  return scriptLoadPromise
}

const GoogleRecaptcha = forwardRef(function GoogleRecaptcha({ siteKey, onChange, onExpired }, ref) {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)
  const onChangeRef = useRef(onChange)
  const onExpiredRef = useRef(onExpired)

  useEffect(() => {
    onChangeRef.current = onChange
    onExpiredRef.current = onExpired
  }, [onChange, onExpired])

  useImperativeHandle(ref, () => ({
    reset() {
      if (widgetIdRef.current != null && window.grecaptcha) {
        window.grecaptcha.reset(widgetIdRef.current)
      }
      onChangeRef.current?.('')
    },
  }))

  useEffect(() => {
    if (!siteKey) return undefined

    let cancelled = false

    loadRecaptchaScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.grecaptcha) return
        if (widgetIdRef.current != null) return

        widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token) => onChangeRef.current?.(token),
          'expired-callback': () => {
            onChangeRef.current?.('')
            onExpiredRef.current?.()
          },
          'error-callback': () => onChangeRef.current?.(''),
        })
      })
      .catch(() => onChangeRef.current?.(''))

    return () => {
      cancelled = true
    }
  }, [siteKey])

  if (!siteKey) {
    return <p className="recaptcha-config-error">Security check is not configured.</p>
  }

  return <div ref={containerRef} className="contact-recaptcha" />
})

export default GoogleRecaptcha
