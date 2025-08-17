'use client'

import { TrendingUp, Cloud, Bot, Target } from 'lucide-react'

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: Bot,
      metric: "50%",
      title: "AI Transformation with Measurable ROI",
      description: "Deployed enterprise AI solutions (chatbots, automation, executive AI analytics) that cut costs 50%, improved forecasting accuracy 20%, and scaled to thousands of secure users. Positions you as the partner who makes AI safe, strategic, and profitable.",
      category: "AI Implementation",
      color: "steel"
    },
    {
      icon: Target,
      metric: "25+",
      title: "Enterprise Growth & M&A Integration",
      description: "Led 25+ seamless post-merger integrations and scaled IT to support 5X company growth with no business disruption. Shows you can handle complex growth and PE-backed scaling — a board-level priority.",
      category: "M&A Integration",
      color: "green"
    },
    {
      icon: Cloud,
      metric: "$12M+",
      title: "Cost & Efficiency Optimization",
      description: "Delivered $12M+ in cost savings through cloud migration, automation, and IT rationalization. You prove technology can be a profit driver, not a cost center.",
      category: "Cloud Migration",
      color: "blue"
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-primary-50',
          text: 'text-primary-600',
          metric: 'text-primary-700',
          border: 'border-primary-200',
          badge: 'bg-primary-100 text-primary-800'
        }
      case 'steel':
        return {
          bg: 'bg-steel-50',
          text: 'text-steel-600',
          metric: 'text-steel-700',
          border: 'border-steel-200',
          badge: 'bg-steel-100 text-steel-800'
        }
      case 'green':
        return {
          bg: 'bg-green-50',
          text: 'text-green-600',
          metric: 'text-green-700',
          border: 'border-green-200',
          badge: 'bg-green-100 text-green-800'
        }
      default:
        return {
          bg: 'bg-gray-50',
          text: 'text-gray-600',
          metric: 'text-gray-700',
          border: 'border-gray-200',
          badge: 'bg-gray-100 text-gray-800'
        }
    }
  }

  return (
    <>
      <div className="wave-divider-steel"></div>
      <section className="py-16 bg-steel-50 scroll-mt-64">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-heading font-bold tracking-tight text-steel-900 sm:text-4xl">
              Proven Results That Matter
            </h2>
            <p className="mt-6 text-lg leading-8 text-steel-600 font-body">
              Real outcomes from strategic technology leadership across diverse industries and complex challenges.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon
              const colors = getColorClasses(study.color)
              
              return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-2xl bg-executive-card shadow-executive border border-steel-200 p-8 hover:shadow-executive-hover transition-all duration-300 hover:scale-105 group"
                >
                  {/* Category Badge */}
                  <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-heading font-medium ${colors.badge} mb-4`}>
                    {study.category}
                  </div>
                  
                  {/* Icon and Metric */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-600 to-slate-700 group-hover:scale-110 transition-transform shadow-[0_8px_25px_rgba(71,85,105,0.3)]">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className={`text-5xl font-heading font-bold ${colors.metric}`}>
                      {study.metric}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-steel-900 mb-3 whitespace-nowrap">
                    {study.title}
                  </h3>
                  <p className="text-steel-700 leading-relaxed font-body text-justify">
                    {study.description}
                  </p>
                  
                  {/* Decorative Element */}
                  <div className={`absolute -bottom-2 -right-2 h-24 w-24 rounded-full ${colors.text} opacity-5`}></div>
                </div>
              )
            })}
          </div>
          
          {/* Call to Action */}
          <div className="mt-8 text-center">
            <p className="text-xl font-heading font-semibold text-steel-800 mb-6 tracking-tight">
              Ready to achieve similar results for your organization?
            </p>
            <a
              href="#contact"
              className="btn-executive inline-flex items-center"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Discuss Your Technology Goals
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudies
