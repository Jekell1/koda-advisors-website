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
    <header className="fixed w-full bg-white/85 backdrop-blur-xl z-50 border-b border-gray-200/50 shadow-xl transition-all duration-300 h-16 lg:h-20">
      {/* Animated flowing background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-100/30 via-steel-50/40 to-primary-100/30 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent animate-flow"></div>
      </div>
      
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 relative z-10 h-full">
        <div className="flex lg:flex-1 overflow-visible">
          <a href="#" className="-m-1.5 p-1.5 pl-0 -ml-12 group relative overflow-visible">
            {/* Glowing effect behind logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-primary-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div>
            <img 
              src="/husky-logo-png.png" 
              alt="Koda Advisors" 
              className="relative transition-all duration-500 group-hover:scale-105 drop-shadow-2xl group-hover:drop-shadow-3xl filter group-hover:saturate-110 h-40 w-auto sm:h-44 md:h-48 lg:h-80 xl:h-96 lg:-mt-20 lg:-mb-20 -mt-6 -mb-6"
            />
          </a>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 hover:text-primary-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8 lg:mt-16">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-xl font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-all duration-300 group px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary-50/80 hover:to-steel-50/80 transform hover:scale-105 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="relative z-10">{item.name}</span>
              {/* Animated underline */}
              <span className="absolute inset-x-2 -bottom-1 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-lg"></span>
              {/* Hover glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-primary-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></span>
            </a>
          ))}
          
          {/* Enhanced Services Dropdown */}
          <div className="relative" ref={servicesRef}>
            <button
              type="button"
              className="flex items-center gap-x-2 text-xl font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-all duration-300 group px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary-50/80 hover:to-steel-50/80 transform hover:scale-105 hover:shadow-lg relative"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <span className="relative z-10">Services</span>
              <ChevronDown className={`h-5 w-5 transition-all duration-400 ${isServicesOpen ? 'rotate-180 text-slate-600' : ''} group-hover:text-slate-600`} />
              {/* Animated underline */}
              <span className="absolute inset-x-2 -bottom-1 h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-lg"></span>
              {/* Hover glow effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-primary-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></span>
            </button>

            {isServicesOpen && (
              <div className="absolute top-full left-0 mt-4 w-80 rounded-2xl bg-white/95 backdrop-blur-xl shadow-2xl ring-1 ring-black/10 z-50 transform transition-all duration-300 animate-in slide-in-from-top-4 border border-gray-200/50">
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 via-transparent to-primary-500/20 p-[1px]">
                  <div className="rounded-2xl bg-white/95 backdrop-blur-xl h-full w-full"></div>
                </div>
                <div className="relative p-6">
                  {services.map((service, index) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="group relative flex gap-x-6 rounded-xl p-4 text-sm leading-6 hover:bg-gradient-to-r hover:from-primary-50/80 hover:to-steel-50/80 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md border border-transparent hover:border-primary-200/50"
                      onClick={() => setIsServicesOpen(false)}
                      style={{ animationDelay: `${index * 75}ms` }}
                    >
                      {/* Service item glow effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-500/5 to-primary-600/5 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="flex-auto relative z-10">
                        <div className="block font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                          {service.name}
                        </div>
                        <p className="mt-1 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                      </div>
                      {/* Arrow indicator */}
                      <div className="flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                        <ChevronDown className="h-4 w-4 text-slate-600 rotate-[-90deg]" />
                      </div>
                    </a>
                  ))}
                  <div className="mt-6 pt-4 border-t border-gradient-to-r from-transparent via-gray-200 to-transparent">
                    <button
                      onClick={() => scrollToSection('services')}
                      className="flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 px-6 py-3 text-sm font-semibold text-white hover:from-primary-500 hover:to-primary-600 transition-all duration-300 w-full transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                      <span className="relative">View All Services</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end mt-16 -ml-8">
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-executive inline-flex items-center gap-2"
          >
            <span className="relative font-bold tracking-wide">Get Started</span>
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
                  className="btn-executive inline-flex items-center gap-2 w-full justify-center"
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
