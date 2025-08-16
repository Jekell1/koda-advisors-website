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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with your preferred form handling service
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to Transform Your Technology Strategy?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Schedule a consultation to discuss how Koda Advisors can provide the strategic 
            technology leadership your organization needs to thrive.
          </p>
        </div>
        
        <div className="mx-auto mt-20 grid max-w-lg grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2">
          {/* Contact Information */}
          <div className="lg:pr-8">
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              Get in Touch
            </h3>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Contact us to discuss your technology challenges and explore how our fractional CIO 
              services can help drive your organization forward.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex gap-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold leading-6 text-gray-900">Email</h4>
                  <p className="text-sm leading-6 text-gray-600">
                    <a href="mailto:info@kodaadvisors.com" className="hover:text-primary-600">
                      info@kodaadvisors.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold leading-6 text-gray-900">Phone</h4>
                  <p className="text-sm leading-6 text-gray-600">
                    <a href="tel:+1234567890" className="hover:text-primary-600">
                      (123) 456-7890
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold leading-6 text-gray-900">Location</h4>
                  <p className="text-sm leading-6 text-gray-600">
                    Serving clients nationwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                Company
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
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
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                  placeholder="Tell us about your technology challenges and goals..."
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-x-2 rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all hover:scale-105"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
