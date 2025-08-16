'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/mdkdvobe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        }),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        })
      } else {
        throw new Error('Form submission failed')
      }
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <div className="wave-divider-blue"></div>
      <section id="contact" className="py-24 bg-white scroll-mt-64">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-heading font-bold tracking-tight text-steel-900 sm:text-4xl">
              Ready to Transform Your Technology Strategy?
            </h2>
            <p className="mt-6 text-lg leading-8 text-steel-600 font-body">
              Schedule a consultation to discuss how Koda Advisors can provide the strategic 
              technology leadership your organization needs to thrive.
            </p>
          </div>
          
          <div className="mx-auto mt-20 grid max-w-lg grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2">
            {/* Contact Information */}
            <div className="lg:pr-8">
              <h3 className="text-lg font-heading font-semibold leading-7 text-steel-900">
                Get in Touch
              </h3>
              <p className="mt-4 text-base leading-7 text-steel-600 font-body">
                Contact us to discuss your technology challenges and explore how our fractional CIO 
                services can help drive your organization forward.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-accent">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-semibold leading-6 text-steel-900">Email</h4>
                    <p className="text-sm leading-6 text-steel-600 font-body">
                      <a href="mailto:info@koda-advisors.com" className="hover:text-primary-600">
                        info@koda-advisors.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-accent">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-semibold leading-6 text-steel-900">Phone</h4>
                    <p className="text-sm leading-6 text-steel-600 font-body">
                      <a href="tel:+18649189162" className="hover:text-primary-600">
                        (864) 918-9162
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-accent">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-semibold leading-6 text-steel-900">Location</h4>
                    <p className="text-sm leading-6 text-steel-600 font-body">
                      Greenville, SC | Serving clients nationwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-executive-card p-8 rounded-2xl shadow-executive border border-steel-200">
              <div>
                <label htmlFor="name" className="block text-sm font-heading font-medium leading-6 text-steel-900">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-xl border-0 px-3.5 py-2 text-steel-900 shadow-sm ring-1 ring-inset ring-steel-300 placeholder:text-steel-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 font-body"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-heading font-medium leading-6 text-steel-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-xl border-0 px-3.5 py-2 text-steel-900 shadow-sm ring-1 ring-inset ring-steel-300 placeholder:text-steel-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 font-body"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-heading font-medium leading-6 text-steel-900">
                  Company
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="block w-full rounded-xl border-0 px-3.5 py-2 text-steel-900 shadow-sm ring-1 ring-inset ring-steel-300 placeholder:text-steel-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 font-body"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-heading font-medium leading-6 text-steel-900">
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-xl border-0 px-3.5 py-2 text-steel-900 shadow-sm ring-1 ring-inset ring-steel-300 placeholder:text-steel-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 font-body"
                    placeholder="Tell us about your technology challenges and goals..."
                  />
                </div>
              </div>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="rounded-xl bg-steel-50 p-4 border border-steel-200">
                  <div className="text-sm text-steel-700 font-body">
                    Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="rounded-xl bg-red-50 p-4 border border-red-200">
                  <div className="text-sm text-red-700 font-body">
                    There was an error sending your message. Please try again or contact us directly at jeff@koda-advisors.com
                  </div>
                </div>
              )}
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-executive flex w-full items-center justify-center gap-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
