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
      // Check if mobile (screen width < 1024px, which is Tailwind's lg breakpoint)
      const isMobile = window.innerWidth < 1024
      
      if (sectionId === 'contact') {
        // Mobile: -150px, Desktop: -250px
        const yOffset = isMobile ? -150 : -250
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({top: y, behavior: 'smooth'})
      } else if (sectionId === 'about') {
        // Mobile: -200px, Desktop: -300px
        const yOffset = isMobile ? -200 : -300
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({top: y, behavior: 'smooth'})
      } else if (sectionId === 'services') {
        // Mobile: -300px, Desktop: -350px
        const yOffset = isMobile ? -300 : -350
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({top: y, behavior: 'smooth'})
      } else if (sectionId === 'cybersecurity-risk-management' || sectionId === 'digital-transformation-leadership' || sectionId === 'ma-technology-due-diligence' || sectionId === 'it-optimization-cost-management') {
        // Mobile: -300px, Desktop: -300px (keep same for individual services)
        const yOffset = isMobile ? -300 : -300
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({top: y, behavior: 'smooth'})
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
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
    { name: 'M&A Technology Due Diligence & Integration', href: '#services', description: 'Technology risk assessment & post-merger integration' },
    { name: 'Cybersecurity Governance', href: '#services', description: 'Enterprise security strategy & risk management' },
    { name: 'Digital Transformation & Automation', href: '#services', description: 'Modernize operations at scale' },
    { name: 'IT Optimization & Cost Management', href: '#services', description: 'Reduce IT spend while improving performance' },
  ]

  return (
    <header className="fixed w-full bg-white/85 backdrop-blur-xl z-50 border-b border-gray-200/50 shadow-xl transition-all duration-300">
      {/* Animated flowing background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-100/30 via-steel-50/40 to-primary-100/30 animate-pulse"></div>
      </div>
      
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 relative z-10">
        <div className="flex lg:flex-1 overflow-visible relative z-10">
          <a href="#" className="-m-1.5 p-1.5 pl-4 group relative overflow-visible z-10">
            {/* Glowing effect behind logo */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-primary-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div>
            <img 
              src="/husky-logo-png.png" 
              alt="Koda Advisors" 
              className="relative transition-all duration-500 group-hover:scale-105 drop-shadow-2xl group-hover:drop-shadow-3xl filter group-hover:saturate-110 h-44 w-auto sm:h-48 md:h-52 lg:h-80 xl:h-96 lg:-mt-20 lg:-mb-20 -mt-4 -mb-4 z-10"
            />
          </a>
        </div>
        
        <div className="flex lg:hidden relative z-20">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-3 text-gray-800 bg-white border-2 border-gray-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-primary-100 hover:text-primary-600 hover:border-primary-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 relative z-20"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8 mt-16">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-xl font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-all duration-300 group px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-primary-50/80 hover:to-steel-50/80 transform hover:scale-105 hover:shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.href.substring(1))
              }}
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
                      onClick={(e) => {
                        e.preventDefault()
                        if (service.name === 'Cybersecurity Governance') {
                          scrollToSection('cybersecurity-risk-management')
                        } else if (service.name === 'Digital Transformation & Automation') {
                          scrollToSection('digital-transformation-leadership')
                        } else if (service.name === 'M&A Technology Due Diligence & Integration') {
                          scrollToSection('ma-technology-due-diligence')
                        } else if (service.name === 'IT Optimization & Cost Management') {
                          scrollToSection('it-optimization-cost-management')
                        } else {
                          scrollToSection('services')
                        }
                        setIsServicesOpen(false)
                      }}
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
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full bg-white shadow-2xl px-4 py-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 flex flex-col max-h-screen transform-gpu perspective-1000 shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)]" style={{zIndex: 9999, transform: 'translateZ(0) rotateY(-2deg)', transformStyle: 'preserve-3d', boxShadow: '20px 0 40px rgba(0,0,0,0.1), inset -5px 0 20px rgba(59,130,246,0.05)'}}>
          <div className="flex items-center justify-between flex-shrink-0 py-2 bg-white transform-gpu" style={{transform: 'translateZ(10px)'}}>
            <a href="#" className="-m-1.5 p-1.5 transform-gpu hover:scale-105 transition-transform duration-200" style={{transform: 'translateZ(15px)'}}>
              <img 
                src="/husky-logo-png.png" 
                alt="Koda Advisors" 
                className="h-8 w-auto drop-shadow-md"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 relative z-10 bg-white transform-gpu hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
              style={{transform: 'translateZ(20px)'}}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center -mt-4 relative z-10 bg-white transform-gpu" style={{transform: 'translateZ(5px)'}}>
            <div className="space-y-1 bg-white px-2 py-4 rounded-lg shadow-inner shadow-2xl border border-gray-200" style={{boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 8px 32px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.1)'}}>
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-1 block rounded-lg px-3 py-2 text-lg font-semibold text-center text-gray-900 hover:bg-gray-100 relative z-10 bg-white transform-gpu hover:scale-105 hover:shadow-md transition-all duration-200 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href.substring(1))
                    setIsMenuOpen(false)
                  }}
                  style={{transform: `translateZ(${10 + index * 2}px)`, animationDelay: `${index * 50}ms`}}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Single Services Menu Item */}
              <a
                href="#services"
                className="-mx-1 block rounded-lg px-3 py-2 text-lg font-semibold text-center text-gray-900 hover:bg-gray-100 relative z-10 bg-white transform-gpu hover:scale-105 hover:shadow-md transition-all duration-200 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('services')
                  setIsMenuOpen(false)
                }}
                style={{transform: 'translateZ(18px)'}}
              >
                Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
