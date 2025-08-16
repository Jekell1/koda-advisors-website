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
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet Jeff Childers, CISSP - the strategic technology leader behind Koda Advisors.
            </p>
          </div>
          
          {/* Jeff's Profile */}
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
              {/* Profile Info */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/10 p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Jeff Childers, CISSP</h3>
                  <p className="text-primary-600 font-semibold mb-4">Founder & Chief Technology Officer</p>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-x-2">
                      <span className="font-medium">Location:</span>
                      <span>Greenville, SC</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <span className="font-medium">Education:</span>
                      <span>BS Computer Engineering, Clemson University</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <span className="font-medium">Certification:</span>
                      <span>CISSP (Certified Information Systems Security Professional)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Details */}
              <div className="lg:col-span-2">
                <div className="prose prose-gray max-w-none">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Executive Summary</h4>
                  <p className="text-gray-600 mb-6">
                    Modern CIO and digital transformation leader focused on building future-ready enterprises through 
                    cloud-first architecture, AI/ML adoption, and secure, scalable systems. Known for accelerating 
                    innovation, reducing operational complexity, and aligning technology strategy with bold business outcomes.
                  </p>

                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Career Highlights</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex gap-x-3">
                      <CheckCircle className="mt-1 h-4 w-4 flex-none text-primary-600" />
                      <span>Directed modernization of a 20-year-old financial platform using AI, potentially resulting in $2.5M in development cost savings and 90% reduction in technical debt</span>
                    </li>
                    <li className="flex gap-x-3">
                      <CheckCircle className="mt-1 h-4 w-4 flex-none text-primary-600" />
                      <span>Supported 5X company growth with scalable enterprise architecture, advanced analytics, and intelligent automation</span>
                    </li>
                    <li className="flex gap-x-3">
                      <CheckCircle className="mt-1 h-4 w-4 flex-none text-primary-600" />
                      <span>Led 40+ successful M&A integrations with zero downtime, full data integrity, and industry compliance (NIST, ISO 27001)</span>
                    </li>
                    <li className="flex gap-x-3">
                      <CheckCircle className="mt-1 h-4 w-4 flex-none text-primary-600" />
                      <span>Scaled global software engineering organization from startup to $120M in annual revenue, leading 120+ professionals</span>
                    </li>
                    <li className="flex gap-x-3">
                      <CheckCircle className="mt-1 h-4 w-4 flex-none text-primary-600" />
                      <span>Achieved $12M in cumulative cost savings via cloud transformation, automation, and IT consolidation across 40+ locations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="mt-16">
              <h4 className="text-lg font-semibold text-gray-900 mb-8">Professional Experience</h4>
              <div className="space-y-8">
                {/* World Acceptance Corporation */}
                <div className="border-l-2 border-primary-200 pl-6">
                  <div className="flex items-center gap-x-4 mb-2">
                    <span className="bg-primary-600 w-3 h-3 rounded-full -ml-7 border-2 border-white"></span>
                    <h5 className="text-base font-semibold text-gray-900">Director of Artificial Intelligence & Cognitive Services</h5>
                    <span className="text-sm text-gray-500">2025 – Current</span>
                  </div>
                  <p className="text-sm font-medium text-primary-600 mb-2">World Acceptance Corporation (Publicly Traded)</p>
                  <p className="text-sm text-gray-600">
                    Leading AI modernization initiatives for a consumer finance company with 1,024 branches across 16 states. 
                    Architected Azure OpenAI solutions, enterprise chatbots, and AI-powered analytics platforms.
                  </p>
                </div>

                {/* Tech 24 */}
                <div className="border-l-2 border-primary-200 pl-6">
                  <div className="flex items-center gap-x-4 mb-2">
                    <span className="bg-primary-600 w-3 h-3 rounded-full -ml-7 border-2 border-white"></span>
                    <h5 className="text-base font-semibold text-gray-900">Chief Information Officer</h5>
                    <span className="text-sm text-gray-500">2017 – 2025</span>
                  </div>
                  <p className="text-sm font-medium text-primary-600 mb-2">Tech 24 ($300M Organization)</p>
                  <p className="text-sm text-gray-600">
                    Spearheaded enterprise technology operations for leading foodservice equipment repair company. 
                    Directed 5X company growth through scalable cloud solutions and led 40+ M&A integrations.
                  </p>
                </div>

                {/* Flexential */}
                <div className="border-l-2 border-primary-200 pl-6">
                  <div className="flex items-center gap-x-4 mb-2">
                    <span className="bg-primary-600 w-3 h-3 rounded-full -ml-7 border-2 border-white"></span>
                    <h5 className="text-base font-semibold text-gray-900">VP, Software Development & IT</h5>
                    <span className="text-sm text-gray-500">2015 – 2017</span>
                  </div>
                  <p className="text-sm font-medium text-primary-600 mb-2">Flexential (4,200+ National Customers)</p>
                  <p className="text-sm text-gray-600">
                    Directed enterprise IT strategy across 41 data centers, managing $5M annual budget and 50-member team. 
                    Drove cloud transformation and infrastructure modernization initiatives.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Expertise */}
            <div className="mt-16">
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Technical Expertise</h4>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-2">AI & Data Science</h5>
                  <p className="text-xs text-gray-600">Azure Cognitive Services, OpenAI API, Neo4j, MLOps, Power BI</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-2">Cloud Platforms</h5>
                  <p className="text-xs text-gray-600">Microsoft Azure, AWS, Cloud-Native Architecture</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-2">Enterprise Software</h5>
                  <p className="text-xs text-gray-600">SAP, Salesforce, ServiceNow, Microsoft GP</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="font-medium text-gray-900 mb-2">Cybersecurity</h5>
                  <p className="text-xs text-gray-600">CISSP, NIST, SOC 2, ISO 27001, Zero Trust</p>
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
