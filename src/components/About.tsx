import { CheckCircle, Award, Users, Target } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "We align technology initiatives with business objectives to drive measurable value and competitive advantage."
    },
    {
      icon: Users,
      title: "Executive Partnership",
      description: "Our fractional CIO model provides senior-level expertise without the full-time executive cost."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of successful digital transformations, cost optimizations, and technology implementations."
    },
    {
      icon: CheckCircle,
      title: "Practical Implementation",
      description: "We focus on actionable strategies and practical solutions that deliver real business outcomes."
    }
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary-600">About Koda Advisors</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your Strategic Technology Partner
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Koda Advisors brings executive-level technology leadership to organizations that need strategic 
                guidance without the commitment of a full-time CIO. Our team combines deep technical expertise 
                with business acumen to drive meaningful technology outcomes.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <CheckCircle className="absolute left-1 top-1 h-5 w-5 text-primary-600" />
                    Fractional CIO Model.
                  </dt>
                  <dd className="inline">
                    Get senior technology leadership when you need it, scaled to your organization&apos;s requirements and budget.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <CheckCircle className="absolute left-1 top-1 h-5 w-5 text-primary-600" />
                    Industry Expertise.
                  </dt>
                  <dd className="inline">
                    Experience across multiple industries including healthcare, financial services, manufacturing, and technology.
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <CheckCircle className="absolute left-1 top-1 h-5 w-5 text-primary-600" />
                    Measurable Outcomes.
                  </dt>
                  <dd className="inline">
                    Focus on ROI-driven initiatives with clear metrics and accountability for technology investments.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 mb-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 whitespace-nowrap">
              Meet Jeff Childers - the strategic technology leader behind Koda Advisors.
            </p>
          </div>
          
          {/* Jeff Profile */}
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3 lg:items-start">
              {/* Profile Info */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/10 p-8 sticky top-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Jeff Childers, CISSP</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="grid grid-cols-3 gap-x-2">
                      <span className="font-medium">Location:</span>
                      <span className="col-span-2">Greenville, SC</span>
                    </div>
                    <div className="grid grid-cols-3 gap-x-2">
                      <span className="font-medium">Education:</span>
                      <span className="col-span-2">BS Computer Engineering, Clemson University</span>
                    </div>
                    <div className="grid grid-cols-3 gap-x-2">
                      <span className="font-medium">Certification:</span>
                      <span className="col-span-2">CISSP (Certified Information Systems Security Professional)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Details */}
              <div className="lg:col-span-2">
                <div className="max-w-none">
                  <h4 className="text-lg font-semibold text-gray-900 mb-6">Leadership Experience</h4>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Jeff Childers brings over 25 years of executive technology leadership experience across diverse industries 
                      and organizational scales. His expertise spans AI strategy, digital transformation, and enterprise technology 
                      initiatives that drive measurable business value.
                    </p>
                    
                    <p>
                      He started as a software developer and held multiple executive leadership positions including Chief Information Officer, 
                      guiding organizations through complex technology challenges and strategic initiatives. His approach focuses on 
                      aligning technology investments with business objectives while maintaining operational excellence and security best practices.
                    </p>

                    <p>
                      Jeff&apos;s foundation in software development was built during his tenure at Datastream, where he advanced from Software 
                      Developer to Vice President of Application Development. There he led the design and delivery of mission-critical 
                      enterprise asset management solutions for Fortune 500 clients across manufacturing, energy, utilities, and industrial 
                      sectors. Datastream was later acquired by Infor.
                    </p>

                    <p>
                      His executive leadership experience spans diverse industries including consumer finance, commercial foodservice, 
                      data center infrastructure, and warehouse management systems. At companies ranging from publicly traded enterprises 
                      to high-growth technology firms, he has consistently delivered strategic technology transformations that support 
                      rapid business growth and operational excellence.
                    </p>

                    <p>
                      Through roles at Flexential, Foxfire, and as founder of Reliasys Solutions, Jeff refined his ability to translate 
                      business requirements into actionable technology strategies while managing complex technology portfolios and leading 
                      high-performing technical teams. His experience includes serving Fortune 500 clients and scaling technology solutions 
                      across national enterprise footprints.
                    </p>

                    <p>
                      Jeff holds the CISSP (Certified Information Systems Security Professional) certification, one of the most prestigious 
                      and globally recognized credentials in cybersecurity, demonstrating his expertise in security architecture, risk 
                      management, and enterprise security governance.
                    </p>

                    <p>
                      Jeff&apos;s unique combination of hands-on software development expertise and strategic business acumen enables him to 
                      bridge the gap between complex technology solutions and executive decision-making. He specializes in 
                      AI strategy, cybersecurity governance, and building scalable enterprise architectures that position 
                      organizations for sustained growth and competitive advantage.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-medium text-gray-900 mb-3">Core Expertise</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• AI Strategy & Implementation</li>
                        <li>• Digital Transformation Leadership</li>
                        <li>• M&A Technology Integration</li>
                        <li>• Enterprise Cloud Architecture</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-medium text-gray-900 mb-3">Key Achievements</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Strategic Technology Leadership</li>
                        <li>• Digital Transformation Expertise</li>
                        <li>• AI & Cloud Architecture</li>
                        <li>• Cybersecurity & Risk Management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
