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
                    Get senior technology leadership when you need it, scaled to your organization's requirements and budget.
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

        {/* Team Section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Leadership Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Experienced technology executives with a proven track record of driving enterprise value through strategic technology initiatives.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <article className="flex flex-col items-start">
              <div className="flex items-center gap-x-4 text-xs">
                <span className="text-gray-500">Chief Technology Officer</span>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                  Leadership
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  Executive Technology Leadership
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  Our leadership team brings decades of experience in technology strategy, digital transformation, 
                  and organizational change management. We work closely with CEOs, boards, and executive teams to 
                  ensure technology initiatives align with business objectives and deliver measurable value.
                </p>
              </div>
            </article>
            <article className="flex flex-col items-start">
              <div className="flex items-center gap-x-4 text-xs">
                <span className="text-gray-500">Strategic Advisory</span>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                  Innovation
                </span>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  Innovation & Strategy Focus
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  We stay at the forefront of emerging technologies including AI, cloud computing, and cybersecurity. 
                  Our strategic approach ensures organizations can leverage new technologies effectively while 
                  managing risk and maximizing return on investment.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
