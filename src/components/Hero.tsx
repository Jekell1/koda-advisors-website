'use client'

import { ArrowRight, Shield, Bot, Zap, Users } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    console.log(`Scrolling to: ${sectionId}`)
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -160 // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({top: y, behavior: 'smooth'})
    }
  }

  return (
    <section id="home" className="relative isolate px-6 pt-14 lg:px-8 scroll-mt-16 lg:scroll-mt-20 hero-pattern">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-accent opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 -z-5 bg-circuit-pattern opacity-30" style={{backgroundSize: '60px 60px'}}></div>
      
      <div className="mx-auto max-w-7xl pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-56 lg:pb-24">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-black tracking-tight text-steel-900 sm:text-6xl lg:text-7xl pt-9">
            <span className="gradient-text">CIO Advisory & AI Transformation Partner</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-steel-600 font-bold">
            Strategic technology leadership without the overhead. We help $10M+ enterprises 
            accelerate growth through AI transformation, digital excellence, and CIO expertise.
          </p>
          
          {/* Enhanced CTA */}
          <div className="mt-10 flex items-center justify-center gap-x-6 relative z-50">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
              className="btn-executive inline-flex items-center gap-2 relative z-50"
              style={{position: 'relative', zIndex: 9999, pointerEvents: 'auto'}}
            >
              Schedule Strategic Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
            <div className="relative flex flex-col items-center justify-center text-center rounded-2xl bg-gradient-to-br from-white via-white to-gray-50 px-6 py-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200/50 hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-full p-3 shadow-[0_8px_25px_rgba(71,85,105,0.3)]">
                  <Shield className="h-5 w-5 text-white" />
                </div>
              </div>
              <dd className="text-3xl font-black tracking-tight text-steel-900 font-heading mb-2 flex items-center justify-center" style={{lineHeight: '1.2', minHeight: '2.5rem'}}>$300M+</dd>
              <dt className="text-base leading-7 text-steel-600 font-body-medium">Portfolio Value Protected</dt>
            </div>
            <div className="relative flex flex-col items-center justify-center text-center rounded-2xl bg-gradient-to-br from-white via-white to-gray-50 px-6 py-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200/50 hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-full p-3 shadow-[0_8px_25px_rgba(71,85,105,0.3)]">
                  <Bot className="h-5 w-5 text-white" />
                </div>
              </div>
              <dd className="text-3xl font-black tracking-tight text-steel-900 font-heading mb-2 flex items-center justify-center" style={{lineHeight: '1.2', minHeight: '2.5rem'}}>40+</dd>
              <dt className="text-base leading-7 text-steel-600 font-body-medium">AI Implementations</dt>
            </div>
            <div className="relative flex flex-col items-center justify-center text-center rounded-2xl bg-gradient-to-br from-white via-white to-gray-50 px-6 py-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200/50 hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-full p-3 shadow-[0_8px_25px_rgba(71,85,105,0.3)]">
                  <Zap className="h-5 w-5 text-white" />
                </div>
              </div>
              <dd className="text-3xl font-black tracking-tight text-steel-900 font-heading mb-2 flex items-center justify-center" style={{lineHeight: '1.2', minHeight: '2.5rem'}}>25+</dd>
              <dt className="text-base leading-7 text-steel-600 font-body-medium">Digital Transformations</dt>
            </div>
            <div className="relative flex flex-col items-center justify-center text-center rounded-2xl bg-gradient-to-br from-white via-white to-gray-50 px-6 py-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200/50 hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-full p-3 shadow-[0_8px_25px_rgba(71,85,105,0.3)]">
                  <Users className="h-5 w-5 text-white" />
                </div>
              </div>
              <dd className="text-3xl font-black tracking-tight text-steel-900 font-heading mb-2 flex items-center justify-center" style={{lineHeight: '1.2', minHeight: '2.5rem'}}>15+</dd>
              <dt className="text-base leading-7 text-steel-600 font-body-medium">Years Experience</dt>
            </div>
          </dl>
        </div>
      </div>
      
      {/* Enhanced Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-steel-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
