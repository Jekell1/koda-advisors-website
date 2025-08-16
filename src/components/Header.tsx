'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Close mobile menu if open
      setIsMenuOpen(false)
      setIsServicesOpen(false)
    }
  }

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    { name: 'AI Implementation', href: '#services', description: 'Turn AI from hype into business outcomes' },
    { name: 'CIO Advisory', href: '#services', description: 'M&A, ERP, Cloud, Security, Vendor Management' },
    { name: 'Cybersecurity Governance', href: '#services', description: 'Enterprise security strategy & risk management' },
    { name: 'Digital Transformation & Automation', href: '#services', description: 'Modernize operations at scale' },
  ]

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-end justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img 
              src="/Koda_Advisors_Logo.svg" 
              alt="Koda Advisors" 
              style={{ height: '200px', width: 'auto' }}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 mb-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
          
          {/* Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              className="flex items-center gap-x-1 text-xl font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <ChevronDown className={`h-5 w-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-3 w-80 rounded-xl bg-white shadow-lg ring-1 ring-black/5 z-50">
                <div className="p-4">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      <div className="flex-auto">
                        <div className="block font-semibold text-gray-900 group-hover:text-primary-600">
                          {service.name}
                        </div>
                        <p className="mt-1 text-gray-600">{service.description}</p>
                      </div>
                    </a>
                  ))}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => scrollToSection('services')}
                      className="flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-500 transition-colors w-full"
                    >
                      View All Services
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end mb-8">
          <button
            onClick={() => scrollToSection('contact')}
            className="rounded-md bg-primary-600 px-5 py-3.5 text-xl font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
          >
            Get Started
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img 
                src="/husky-logo.png" 
                alt="Koda Advisors" 
                className="h-6 w-auto"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-3 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Mobile Services Section */}
                <div className="-mx-3 block rounded-lg px-3 py-3">
                  <div className="text-xl font-semibold leading-7 text-gray-900 mb-3">Services</div>
                  <div className="space-y-2 pl-4">
                    {services.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="py-6">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="-mx-3 block rounded-lg px-3 py-3 text-xl font-semibold leading-7 text-primary-600 hover:bg-gray-50 w-full text-left"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
