'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is attendance mandatory?",
      answer: "You do not have to be physically present for the entire duration of the event, only during, check-ins, finals submissions and demos."
    },
    {
      question: "What is the judging criteria?",
      answer: "Projects are evaluated on: Approach & Idea (viability, market strategy, feasibility), Product - Technical (demo quality, technical impressiveness), Presentation (clarity and appeal), Product - Design (effort and thoughtfulness), X Factor (what makes it extraordinary), and AI Relevance & Depth (meaningful use of AI agents)."
    },
    {
      question: "What are the eligibility and participation requirements?",
      answer: "Only those accepted on lu.ma are eligible to participate. In-person participation is a day commitment on August 23rd in San Francisco (address revealed upon acceptance)."
    },
    {
      question: "Should I start a new project or work on an existing one?",
      answer: "To ensure fairness, all code must be started after 10:30 AM on the event day. We will actively check this. You cannot build on existing projects."
    },
    {
      question: "What can I build?",
      answer: "You can work on any project involving AI agents, as long as it is public on GitHub. To qualify, your project must meaningfully address those requirements."
    },
    {
      question: "What are the submission requirements?",
      answer: "Projects must be pushed to GitHub with a video demo, README file, and Devpost submission link before 5:30 PM. All submissions and commits must take place before the deadline."
    },
    {
      question: "What's the maximum team size?",
      answer: "Teams can have up to 4 people plus AI assistants."
    },
    {
      question: "Can I participate alone?",
      answer: "Yes! Both individual and team participation are welcome. You can also form teams on-site."
    }
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="https://www.afore.vc/" target="_blank" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 relative">
                <Image
                  src="/sponsors/Afore.png"
                  alt="Afore Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl text-gray-900">Agent Foundry</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#theme" className="text-gray-600 hover:text-blue-900 transition-colors">Theme</Link>
              <Link href="#prizes" className="text-gray-600 hover:text-blue-900 transition-colors">Prizes</Link>
              <Link href="#schedule" className="text-gray-600 hover:text-blue-900 transition-colors">Schedule</Link>
              <Link href="#sponsors" className="text-gray-600 hover:text-blue-900 transition-colors">Sponsors</Link>
              <Link href="#judges" className="text-gray-600 hover:text-blue-900 transition-colors">Judges</Link>
              <Link href="#faq" className="text-gray-600 hover:text-blue-900 transition-colors">FAQ</Link>
              <Link href="https://lu.ma/tmyl2279" className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-all hover:shadow-lg">
                Apply Now
              </Link>
            </div>
            <button className="md:hidden p-2" onClick={toggleMobileMenu}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100`}>
          <div className="px-4 py-3 space-y-2">
            <Link href="#theme" className="block py-2 text-gray-600">Theme</Link>
            <Link href="#prizes" className="block py-2 text-gray-600">Prizes</Link>
            <Link href="#schedule" className="block py-2 text-gray-600">Schedule</Link>
            <Link href="#sponsors" className="block py-2 text-gray-600">Sponsors</Link>
            <Link href="#judges" className="block py-2 text-gray-600">Judges</Link>
            <Link href="#faq" className="block py-2 text-gray-600">FAQ</Link>
            <Link href="https://lu.ma/tmyl2279" className="block bg-blue-900 text-white px-6 py-2 rounded-full text-center">Apply Now</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                1-Day Sprint • August 23, 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Agent Foundry</span>
              <br />
              <span className="text-gray-900">Hackathon</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              A 1-day founder-focused sprint designed to uncover exceptional entrepreneurial talent by challenging participants to build venture-scale products powered by AI agents and Model Context Protocol (MCP).
            </p>
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Co-hosted by</span>
              <div className="flex items-center gap-4">
                <Link href="https://www.afore.vc/" target="_blank" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <div className="w-6 h-6 relative">
                    <Image
                      src="/sponsors/Afore.png"
                      alt="Afore Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-semibold text-gray-700">Afore Capital</span>
                </Link>
                <span className="text-gray-400">×</span>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 relative">
                    <Image
                      src="/sponsors/AI_Valley.png"
                      alt="AI Valley Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="font-semibold text-gray-700">AI Valley</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="https://lu.ma/tmyl2279" className="bg-blue-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-800 transition-all hover:shadow-xl glow-effect">
                Apply Now →
              </Link>
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>San Francisco, CA</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">$5,000+</div>
                <div className="text-gray-600">Prize Pool</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">$500K-$2M+</div>
                <div className="text-gray-600">Potential Pre-seed Funding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">200+</div>
                <div className="text-gray-600">Exceptional Builders</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <section id="theme" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Building the Future with <span className="gradient-text">AI Agents & MCP</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of autonomous AI agents and Model Context Protocol to create the next generation of intelligent applications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 card-hover">
              <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Agents</h3>
              <p className="text-gray-600">Build autonomous agents that can reason, plan, and execute complex tasks with minimal human intervention</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 card-hover">
              <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Model Context Protocol</h3>
              <p className="text-gray-600">Leverage MCP to enable seamless communication between AI models and external tools and systems</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 card-hover">
              <div className="w-16 h-16 bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Venture-Scale Products</h3>
              <p className="text-gray-600">Create solutions with real market potential that could become the foundation of tomorrow&apos;s unicorns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Prizes & <span className="gradient-text">Opportunities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Win cash prizes and get the chance to launch your startup with Afore Capital
            </p>
          </div>
          
          {/* Main Prize Highlight */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="text-sm font-semibold uppercase tracking-wider">🚀 Exclusive Opportunity</span>
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-6">
                Afore Capital Pre-Seed Program
              </h3>
              <p className="text-xl text-center max-w-3xl mx-auto mb-8 text-blue-100">
                Selected participants will have the chance to be considered for Afore Capital's pre-seed program, 
                investing <span className="text-white font-bold">$500K–$2M+</span> in exceptional founders.
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">$500K–$2M+</div>
                  <div className="text-blue-100">Investment Range</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Pre-Seed</div>
                  <div className="text-blue-100">Stage Focus</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">Direct Access</div>
                  <div className="text-blue-100">To Afore Partners</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold mb-6 text-center">Additional Benefits for All Participants</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-900 text-white rounded-full p-2 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Networking with VCs & Industry Leaders</h4>
                  <p className="text-gray-600">Direct access to investors and potential mentors</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-900 text-white rounded-full p-2 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Technical Workshops & Resources</h4>
                  <p className="text-gray-600">Learn from experts in AI agents and MCP</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-900 text-white rounded-full p-2 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Swag & Exclusive Merchandise</h4>
                  <p className="text-gray-600">Limited edition hackathon gear</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-900 text-white rounded-full p-2 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Future Partnership Opportunities</h4>
                  <p className="text-gray-600">Ongoing support from Afore Capital & AI Valley</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Event Schedule</h2>
          <div className="max-w-3xl mx-auto">
            <div>
              <div className="bg-blue-900 text-white px-6 py-3 rounded-t-2xl">
                <h3 className="text-2xl font-bold">August 23, 2025</h3>
              </div>
              <div className="bg-white rounded-b-2xl shadow-lg p-6">
                <div className="space-y-6">
                  {[
                    { time: '9:00 AM', title: 'Registration & Breakfast', desc: 'Check-in, networking, and morning fuel' },
                    { time: '10:00 AM', title: 'Opening Ceremony', desc: 'Welcome speeches and challenge introduction' },
                    { time: '10:30 AM', title: 'Hacking Begins', desc: 'Start building your AI-powered solutions' },
                    { time: '11:30 AM', title: 'Workshops & Mentorship', desc: 'Technical sessions on AI agents and MCP' },
                    { time: '12:30 PM', title: 'Lunch', desc: 'Networking lunch and continued hacking' },
                    { time: '2:00 PM', title: 'Afternoon Sprint', desc: 'Deep focus building time with mentor support' },
                    { time: '4:00 PM', title: 'Check-in & Progress Review', desc: 'Team updates and mentor feedback' },
                    { time: '5:30 PM', title: 'Submission Deadline', desc: 'Final code and demo submission' },
                    { time: '6:00 PM', title: 'Dinner Break', desc: 'Evening meal while judges review' },
                    { time: '7:00 PM', title: 'Final Presentations', desc: 'Teams present their solutions to judges' },
                    { time: '8:30 PM', title: 'Awards Ceremony', desc: 'Winner announcement and prizes' },
                    { time: '9:00 PM', title: 'Networking Reception', desc: 'Celebrate with fellow builders and VCs' },
                    { time: '9:30 PM', title: 'Event Closing', desc: 'Wrap up and farewell' },
                  ].map((item, index, arr) => (
                    <div key={index} className="timeline-item">
                      <div className="flex items-start gap-4">
                        <div className={`timeline-dot ${index < arr.length - 1 ? '' : ''}`}>
                          <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
                        </div>
                        <div className={`flex-1 ${index < arr.length - 1 ? 'pb-6' : ''}`}>
                          <div className="font-semibold text-blue-900">{item.time}</div>
                          <div className="font-semibold text-lg">{item.title}</div>
                          <div className="text-gray-600">{item.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Hosted By</h2>
          <p className="text-xl text-gray-600 mb-12">Bringing together the best in AI innovation and venture capital</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
            <Link href="https://www.afore.vc/" target="_blank" className="block">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 card-hover">
                <div className="h-20 mb-4 relative">
                  <Image
                    src="/sponsors/Afore.png"
                    alt="Afore Capital"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Afore Capital</h3>
                <p className="text-gray-600">Pre-seed & seed stage venture capital firm backing exceptional founders</p>
              </div>
            </Link>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 card-hover">
              <div className="h-20 mb-4 relative">
                <Image
                  src="/sponsors/AI_Valley.png"
                  alt="AI Valley"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Valley</h3>
              <p className="text-gray-600">Premier AI community fostering innovation and collaboration</p>
            </div>
          </div>
          
          {/* Sponsors Section */}
          <h3 className="text-2xl font-bold mb-12">Our Sponsors</h3>
          
          <div className="flex flex-col items-center gap-12">
                         {/* Gold Tier Sponsors */}
             <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
               {/* Amazon Web Services - Gold Tier */}
               <div className="max-w-md w-full mx-auto">
                 <Link href="https://aws.amazon.com/" target="_blank" className="block">
                   <div className="bg-gradient-to-br from-yellow-50 to-white p-7 rounded-2xl border-2 border-yellow-200 hover:shadow-xl transition-shadow">
                     <div className="h-24 mb-4 relative">
                       <Image
                         src="/sponsors/amazon.png"
                         alt="Amazon Web Services"
                         fill
                         className="object-contain"
                       />
                     </div>
                     <h4 className="text-lg font-bold mb-2 text-center">Amazon Web Services</h4>
                     <p className="text-gray-600 text-center">Powering innovation with cloud computing services</p>
                   </div>
                 </Link>
               </div>
 
               {/* Phenoml - Gold Tier */}
               <div className="max-w-md w-full mx-auto">
                 <Link href="https://www.phenoml.com/" target="_blank" className="block">
                   <div className="bg-gradient-to-br from-yellow-50 to-white p-7 rounded-2xl border-2 border-yellow-200 hover:shadow-xl transition-shadow">
                     <div className="h-24 mb-4 relative">
                       <Image
                         src="/sponsors/Phenoml.png"
                         alt="PhenoML"
                         fill
                         className="object-contain"
                       />
                     </div>
                     <h4 className="text-lg font-bold mb-2 text-center">PhenoML</h4>
                     <p className="text-gray-600 text-center">Powering healthcare AI with AI-native building blocks</p>
                   </div>
                 </Link>
               </div>

               {/* Composio - Gold Tier */}
               <div className="max-w-md w-full mx-auto">
                 <Link href="https://composio.dev/" target="_blank" className="block">
                   <div className="bg-gradient-to-br from-yellow-50 to-white p-7 rounded-2xl border-2 border-yellow-200 hover:shadow-xl transition-shadow">
                     <div className="h-24 mb-4 relative">
                       <Image
                         src="/sponsors/Composio.png"
                         alt="Composio"
                         fill
                         className="object-contain"
                       />
                     </div>
                     <h4 className="text-lg font-bold mb-2 text-center">Composio</h4>
                     <p className="text-gray-600 text-center">10,000+ evolving tools and integrations for AI agents</p>
                   </div>
                 </Link>
               </div>
             </div>

            {/* Silver Tier Sponsor */}
            <div className="max-w-md w-full">
              <Link href="https://novita.ai/gpus?utm_source=Google_ads_gpu&utm_medium=Search_ads&utm_campaign=US_GPU&gad_source=1&gad_campaignid=21491632070&gbraid=0AAAAAqN_6WCwCPS9PCWRhA6TbeBe6A86Z&gclid=CjwKCAjwtfvEBhAmEiwA-DsKjriouqFkhlJWMAyrS8PqYmJYKc_JwkeufTYP29KcVai_NQNDPP6MsBoCCmEQAvD_BwE" target="_blank" className="block">
                <div className="bg-gradient-to-br from-blue-50 to-white p-7 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
                  <div className="h-24 mb-4 relative">
                    <Image
                      src="/sponsors/Novita.png"
                      alt="Novita AI"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-center">Novita AI</h4>
                  <p className="text-gray-600 text-center">Affordable GPU cloud for AI infrastructure</p>
                </div>
              </Link>
            </div>

            {/* Lower Tier Sponsors - Smaller */}
            <div className="max-w-xs w-full mb-12">
              <Link href="https://vapi.ai/?utm_source=gsearch&utm_campaign=ga_brand_search-vapi&utm_cid=22224367809&utm_adgroupid=173608516926&utm_adid=732882985088&utm_targetid=kwd-4189710133&utm_term=vapi&gad_source=1&gad_campaignid=22224367809&gbraid=0AAAAA-2cnbyuwZORW8-ulktlPno830MuJ&gclid=CjwKCAjwtfvEBhAmEiwA-DsKjiPjlUKJMsUlT8O9bBG-goeAfMHh0zekrGWkQn8XkQ7yemZ5LMvk-BoCE6MQAvD_BwE" target="_blank" className="block">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="h-16 mb-3 relative">
                    <Image
                      src="/sponsors/VAPI.png"
                      alt="VAPI"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-bold mb-1 text-center">VAPI</h4>
                  <p className="text-gray-600 text-sm text-center">Voice AI platform for developers</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8">
            <p className="text-gray-600 mb-4">Interested in sponsoring?</p>
            <Link href="mailto:vsuortiz@andrew.cmu.edu" className="inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section id="judges" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Meet the Judges</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center border-2 border-dashed border-gray-300">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-gray-400">?</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-400">Judge TBA</h3>
                <p className="text-gray-400">Coming Soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about the hackathon
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 overflow-hidden transition-all hover:shadow-lg"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-blue-900 transition-transform ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    expandedFAQ === index ? 'max-h-96 pb-5' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-4">
              Join our Discord community or reach out directly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:vsuortiz@andrew.cmu.edu"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-full border border-blue-200 hover:bg-blue-50 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </Link>
              <Link
                href="https://lu.ma/tmyl2279"
                className="inline-flex items-center justify-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-all hover:shadow-lg"
              >
                Apply to Participate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Link href="https://www.afore.vc/" target="_blank" className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity w-fit">
                <div className="w-8 h-8 relative">
                  <Image
                    src="/sponsors/Afore-White.png"
                    alt="Afore Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-xl">Agent Foundry Hackathon</span>
              </Link>
              <p className="text-gray-400">Building the future with AI agents and MCP</p>
              <p className="text-gray-400 text-sm mt-2">Co-hosted by Afore Capital & AI Valley</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Event Details</h4>
              <p className="text-gray-400">August 23, 2025</p>
              <p className="text-gray-400">San Francisco, CA</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <Link href="mailto:vsuortiz@andrew.cmu.edu" className="text-gray-400 hover:text-white transition-colors">
                vsuortiz@andrew.cmu.edu
              </Link>
              <div className="flex gap-4 mt-4">
                <Link href="https://www.afore.vc/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  Afore Capital →
                </Link>
                {/* <Link href="https://aivalley.ai" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  AI Valley →
                </Link> */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Agent Foundry Hackathon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}