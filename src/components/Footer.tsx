import { Linkedin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <span className="text-2xl font-bold text-white">Koda Advisors</span>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Executive-level technology leadership for growing organizations. 
                Strategic guidance without the full-time executive commitment.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="mailto:jeff@kodaadvisors.com"
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="tel:+18649189162"
                className="text-gray-400 hover:text-gray-300 transition-colors"
              >
                <span className="sr-only">Phone</span>
                <Phone className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/jeffchilders1"
                className="text-gray-400 hover:text-gray-300 transition-colors"
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
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#services" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Fractional CIO Services
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      AI Strategy & Implementation
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Digital Transformation
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      M&A Due Diligence
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Industries</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <span className="text-sm leading-6 text-gray-300">Healthcare</span>
                  </li>
                  <li>
                    <span className="text-sm leading-6 text-gray-300">Financial Services</span>
                  </li>
                  <li>
                    <span className="text-sm leading-6 text-gray-300">Manufacturing</span>
                  </li>
                  <li>
                    <span className="text-sm leading-6 text-gray-300">Technology</span>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Expertise</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <span className="text-sm leading-6 text-gray-300">Cybersecurity</span>
                  </li>
                  <li>
                    <span className="text-sm leading-6 text-gray-300">Cloud Migration</span>
                  </li>
                  <li>
                    <span className="text-sm leading-6 text-gray-300">IT Optimization</span>
                  </li>
                  <li>
                    <span className="text-sm leading-6 text-gray-300">Risk Management</span>
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
                className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
            <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
              &copy; 2024 Koda Advisors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
