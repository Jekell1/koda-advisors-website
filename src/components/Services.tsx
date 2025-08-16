'use client'

import { 
  Users, 
  Brain, 
  Zap, 
  TrendingUp, 
  Shield, 
  DollarSign,
  ArrowRight 
} from 'lucide-react'

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const services = [
    {
      icon: Users,
      title: "Fractional & Advisory CIO Services",
      description: "Provide executive-level technology leadership on a part-time or project basis. Guide organizations through IT strategy, governance, budgeting, and vendor management. Support CEOs, boards, and investors with insight into how technology can drive enterprise value.",
      features: [
        "Executive-level technology leadership",
        "IT strategy and governance",
        "Technology budgeting and planning",
        "Vendor management and negotiations",
        "Board-level technology reporting"
      ]
    },
    {
      icon: Brain,
      title: "AI Strategy & Implementation",
      description: "Help companies identify practical, high-value use cases for AI across operations, customer engagement, and decision-making. Design and implement AI roadmaps aligned with business goals.",
      features: [
        "AI use case identification and prioritization",
        "AI roadmap design and implementation",
        "Responsible AI governance frameworks",
        "Data strategy for AI initiatives",
        "AI compliance and risk management"
      ]
    },
    {
      icon: Zap,
      title: "Digital Transformation Leadership",
      description: "Lead modernization of legacy systems and migration to cloud-first architectures. Drive enterprise-wide adoption of emerging technologies with measurable, scalable, and ROI-driven outcomes.",
      features: [
        "Legacy system modernization",
        "Cloud-first architecture migration",
        "Technology adoption strategies",
        "Change management for digital initiatives",
        "ROI measurement and optimization"
      ]
    },
    {
      icon: TrendingUp,
      title: "M&A Technology Due Diligence & Integration",
      description: "Assess technology risks and opportunities during acquisitions for private equity and corporate buyers. Lead post-merger integration to align systems, processes, and people quickly and effectively.",
      features: [
        "Technology due diligence assessments",
        "IT infrastructure evaluation",
        "Cybersecurity posture analysis",
        "Post-merger system integration",
        "Technology synergy identification"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity & Risk Management",
      description: "Develop cybersecurity strategies tailored to evolving threats and regulatory requirements. Provide board-level risk assessments to safeguard digital assets and reputation.",
      features: [
        "Cybersecurity strategy development",
        "Risk assessment and mitigation",
        "Compliance framework implementation",
        "Incident response planning",
        "Security awareness training programs"
      ]
    },
    {
      icon: DollarSign,
      title: "IT Optimization & Cost Management",
      description: "Identify opportunities to reduce IT spend while improving performance. Streamline vendor contracts, licensing, and technology investments with established IT metrics and KPIs.",
      features: [
        "IT cost analysis and optimization",
        "Vendor contract negotiations",
        "Technology license management",
        "Performance metrics and KPIs",
        "IT budget planning and forecasting"
      ]
    }
  ]

  return (
    <>
      <div className="wave-divider-white"></div>
      <section id="services" className="-mt-4 pb-24 bg-white scroll-mt-64">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-heading font-bold tracking-tight text-steel-900 sm:text-4xl">
              Comprehensive Technology Leadership Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-steel-600 font-body">
              Strategic technology expertise across all areas of enterprise IT, from AI implementation 
              to cybersecurity, M&A due diligence to cost optimization.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={index}
                  className="flex flex-col rounded-2xl bg-executive-card p-8 shadow-executive ring-1 ring-steel-200 hover:shadow-executive-hover transition-all group"
                >
                  <div className="flex items-center gap-x-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-accent group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold leading-8 text-steel-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-steel-600 font-body">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex gap-x-3">
                        <ArrowRight className="mt-1 h-4 w-4 flex-none text-primary-600" />
                        <span className="text-sm leading-6 text-steel-600 font-body">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
          <div className="mt-16 text-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-executive"
            >
              Discuss Your Technology Needs
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
