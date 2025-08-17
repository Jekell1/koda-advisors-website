import { Linkedin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <div className="wave-divider-dark"></div>
      <footer className="bg-steel-900">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <div>
                <span className="text-2xl font-heading font-bold text-white">Koda Advisors</span>
                <p className="mt-4 text-sm leading-6 text-steel-300 font-body">
                  Executive-level technology leadership for growing organizations. 
                  Strategic guidance without the full-time executive commitment.
                </p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="mailto:jeff@kodaadvisors.com"
                  className="text-steel-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Email</span>
                  <Mail className="h-6 w-6" />
                </a>
                <a
                  href="tel:+18642145907"
                  className="text-steel-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Phone</span>
                  <Phone className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/jeffchilders1"
                  className="text-steel-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-heading font-semibold leading-6 text-white">Services</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a href="#services" className="text-sm leading-6 text-steel-300 hover:text-white transition-colors font-body">
                        Fractional CIO Services
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="text-sm leading-6 text-steel-300 hover:text-white transition-colors font-body">
                        AI Strategy & Implementation
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="text-sm leading-6 text-steel-300 hover:text-white transition-colors font-body">
                        Digital Transformation
                      </a>
                    </li>
                    <li>
                      <a href="#services" className="text-sm leading-6 text-steel-300 hover:text-white transition-colors font-body">
                        M&A Due Diligence
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-heading font-semibold leading-6 text-white">Company</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-steel-300 hover:text-white transition-colors font-body">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-heading font-semibold leading-6 text-white">Industries</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <span className="text-sm leading-6 text-steel-300 font-body">Healthcare</span>
                    </li>
                    <li>
                      <span className="text-sm leading-6 text-steel-300 font-body">Financial Services</span>
                    </li>
                    <li>
                      <span className="text-sm leading-6 text-steel-300 font-body">Manufacturing</span>
                    </li>
                    <li>
                      <span className="text-sm leading-6 text-steel-300 font-body">Technology</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-heading font-semibold leading-6 text-white">Expertise</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <span className="text-sm leading-6 text-steel-300 font-body">Cybersecurity</span>
                    </li>
                    <li>
                      <span className="text-sm leading-6 text-steel-300 font-body">Cloud Migration</span>
                    </li>
                    <li>
                      <span className="text-sm leading-6 text-steel-300 font-body">IT Optimization</span>
                    </li>
                    <li>
                      <span className="text-sm leading-6 text-steel-300 font-body">Risk Management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2">
                <a
                  href="#"
                  className="text-sm leading-6 text-steel-300 hover:text-white transition-colors font-body"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm leading-6 text-steel-300 hover:text-white transition-colors font-body"
                >
                  Terms of Service
                </a>
              </div>
              <p className="mt-8 text-xs leading-5 text-steel-400 md:order-1 md:mt-0 font-body">
                &copy; 2024 Koda Advisors. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
