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
    <>
      <div className="wave-divider-blue"></div>
      <section id="about" className="py-2 bg-steel-50 scroll-mt-64">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Personal Authority Section */}
          <div className="mx-auto max-w-4xl text-center mb-2">
            <h2 className="text-3xl font-heading font-bold tracking-tight text-steel-900 sm:text-4xl">Leadership Experience</h2>
            <p className="mt-6 text-lg leading-8 text-steel-600 font-body">
              Led Technology for $300M Enterprises • Scaled Global Teams • Fractional CIO to Fortune 500
            </p>
            
            {/* Executive Bio with Headshot */}
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-3 lg:gap-y-0 mt-16">
              {/* Headshot */}
              <div className="lg:col-span-1 flex justify-center lg:justify-end">
                <div className="relative">
                  <img
                    src="/Heaadshot.jpg"
                    alt="Jeff Childers, CISSP - Fractional CIO"
                    className="w-64 h-64 rounded-2xl object-cover shadow-executive"
                  />
                </div>
              </div>
              
              {/* Executive Bio */}
              <div className="lg:col-span-2 text-left">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-steel-900 mb-4">Jeff Childers, CISSP</h3>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-heading font-medium text-primary-800">
                        Fractional CIO
                      </span>
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-heading font-medium text-blue-800">
                        CISSP Certified
                      </span>
                      <span className="inline-flex items-center rounded-full bg-steel-100 px-3 py-1 text-sm font-heading font-medium text-steel-800">
                        25+ Years Experience
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-steel-700 leading-relaxed font-body">
                    <p className="text-lg">
                      Jeff brings over 25 years of executive technology leadership to organizations requiring strategic 
                      guidance without full-time CIO commitment. His expertise spans AI strategy, digital transformation, 
                      and enterprise technology initiatives that drive measurable business value.
                    </p>
                    
                    <p>
                      From Vice President of Application Development at Datastream to executive roles spanning Fortune 500 
                      enterprises, Jeff has consistently delivered strategic technology transformations supporting rapid 
                      business growth and operational excellence across manufacturing, energy, financial services, and 
                      technology sectors.
                    </p>
                    
                    <p>
                      As founder of Reliasys Solutions and through executive positions at Flexential and Foxfire, 
                      Jeff refined his ability to translate complex business requirements into actionable technology 
                      strategies while managing enterprise-scale portfolios and leading high-performing technical teams.
                    </p>
                  </div>
                  
                  {/* Executive Credentials */}
                  <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-steel-300">
                    <div>
                      <h4 className="font-heading font-semibold text-steel-900 mb-2">Core Expertise</h4>
                      <ul className="text-sm text-steel-600 space-y-1 font-body">
                        <li>• AI Strategy & Implementation</li>
                        <li>• M&A Technology Integration</li>
                        <li>• Enterprise Cloud Architecture</li>
                        <li>• Cybersecurity Governance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-steel-900 mb-2">Education & Certification</h4>
                      <ul className="text-sm text-steel-600 space-y-1 font-body">
                        <li>• BS Computer Engineering, Clemson</li>
                        <li>• CISSP Certification</li>
                        <li>• Greenville, SC</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Cards Section */}
          <div className="mx-auto mt-16">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-6 bg-executive-card rounded-2xl shadow-executive border border-steel-200 hover:shadow-executive-hover transition-all group"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-600 to-slate-700 mb-4 group-hover:scale-110 transition-transform shadow-[0_8px_25px_rgba(71,85,105,0.3)]">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-steel-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-steel-600 font-body">
                      {value.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Strategic Technology Partner Section */}
          <div className="mx-auto mt-20 max-w-4xl">
            <div className="text-center">
              <p className="text-3xl font-heading font-bold tracking-tight text-steel-900 sm:text-4xl mb-6">
                Your Strategic Technology Partner
              </p>
              <p className="text-lg leading-8 text-steel-600 font-body mb-10">
                Koda Advisors brings executive-level technology leadership to organizations that need strategic 
                guidance without the commitment of a full-time CIO. Our team combines deep technical expertise 
                with business acumen to drive meaningful technology outcomes.
              </p>
              <dl className="grid grid-cols-1 gap-8 md:grid-cols-3 text-base leading-7 text-steel-600 font-body">
                <div className="text-center">
                  <dt className="font-heading font-semibold text-steel-900 mb-2 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-slate-600 mr-2" />
                    Fractional CIO Model
                  </dt>
                  <dd>
                    Get senior technology leadership when you need it, scaled to your organization&apos;s requirements and budget.
                  </dd>
                </div>
                <div className="text-center">
                  <dt className="font-heading font-semibold text-steel-900 mb-2 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-slate-600 mr-2" />
                    Industry Expertise
                  </dt>
                  <dd>
                    Experience across multiple industries including healthcare, financial services, manufacturing, and technology.
                  </dd>
                </div>
                <div className="text-center">
                  <dt className="font-heading font-semibold text-steel-900 mb-2 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-slate-600 mr-2" />
                    Measurable Outcomes
                  </dt>
                  <dd>
                    Focus on ROI-driven initiatives with clear metrics and accountability for technology investments.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
