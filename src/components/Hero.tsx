import { ArrowRight, Shield, Brain, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative isolate px-6 pt-14 lg:px-8 scroll-mt-64">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-400 to-primary-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="gradient-text">Executive Technology Leadership</span>
            <br />
            When You Need It Most
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Koda Advisors provides fractional CIO services and strategic technology leadership 
            to drive enterprise value. From AI strategy to digital transformation, we guide 
            organizations through complex technology decisions with confidence.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </a>
            <a href="#services" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24 -mt-40">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by Leadership Teams
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Delivering measurable technology outcomes for growing organizations
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Years of Experience</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">15+</dd>
            </div>
            <div className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Companies Advised</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">100+</dd>
            </div>
            <div className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Cost Savings Delivered</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">$50M+</dd>
            </div>
            <div className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm font-semibold leading-6 text-gray-600">Successful Transformations</dt>
              <dd className="order-first text-3xl font-bold tracking-tight text-gray-900">50+</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Strategic AI Implementation</h3>
            <p className="mt-2 text-sm text-gray-600">
              Identify and implement high-value AI use cases aligned with business goals
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Cybersecurity Leadership</h3>
            <p className="mt-2 text-sm text-gray-600">
              Protect digital assets with comprehensive security strategies and risk management
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Digital Transformation</h3>
            <p className="mt-2 text-sm text-gray-600">
              Modernize legacy systems and drive enterprise-wide technology adoption
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-400 to-primary-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
      </div>
    </section>
  )
}

export default Hero
