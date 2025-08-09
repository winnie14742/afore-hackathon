'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 relative">
                <Image
                  src="/sponsors/Afore.png"
                  alt="Afore Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl text-gray-900">Agent Foundry</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#theme" className="text-gray-600 hover:text-blue-900 transition-colors">Theme</Link>
              <Link href="#schedule" className="text-gray-600 hover:text-blue-900 transition-colors">Schedule</Link>
              <Link href="#sponsors" className="text-gray-600 hover:text-blue-900 transition-colors">Sponsors</Link>
              <Link href="#judges" className="text-gray-600 hover:text-blue-900 transition-colors">Judges</Link>
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
            <Link href="#schedule" className="block py-2 text-gray-600">Schedule</Link>
            <Link href="#sponsors" className="block py-2 text-gray-600">Sponsors</Link>
            <Link href="#judges" className="block py-2 text-gray-600">Judges</Link>
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
                2-Day Sprint • August 23-24, 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Agent Foundry</span>
              <br />
              <span className="text-gray-900">Hackathon</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              A 2-day founder-focused sprint designed to uncover exceptional entrepreneurial talent by challenging participants to build venture-scale products powered by AI agents and Model Context Protocol (MCP).
            </p>
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
                <div className="text-3xl font-bold text-blue-900 mb-2">2</div>
                <div className="text-gray-600">Days of Building</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">100+</div>
                <div className="text-gray-600">Expected Builders</div>
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

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Event Schedule</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Day 1 */}
            <div>
              <div className="bg-blue-900 text-white px-6 py-3 rounded-t-2xl">
                <h3 className="text-2xl font-bold">Day 1 - August 23</h3>
              </div>
              <div className="bg-white rounded-b-2xl shadow-lg p-6">
                <div className="space-y-6">
                  {[
                    { time: '9:00 AM', title: 'Networking + Breakfast', desc: 'Connect with fellow builders and fuel up' },
                    { time: '10:30 AM', title: 'Opening Speeches', desc: 'Welcome and challenge introduction' },
                    { time: '12:00 PM', title: 'Lunch', desc: 'Networking lunch break' },
                    { time: '1:00 PM', title: 'Workshops / Speakers', desc: 'Technical sessions on AI agents and MCP' },
                    { time: '6:00 PM', title: 'Dinner', desc: 'Evening meal and team collaboration' },
                    { time: '9:30 PM', title: 'Closing time', desc: 'Wrap up Day 1 activities' },
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
            {/* Day 2 */}
            <div>
              <div className="bg-blue-900 text-white px-6 py-3 rounded-t-2xl">
                <h3 className="text-2xl font-bold">Day 2 - August 24</h3>
              </div>
              <div className="bg-white rounded-b-2xl shadow-lg p-6">
                <div className="space-y-6">
                  {[
                    { time: '9:00 AM', title: 'Breakfast', desc: 'Morning fuel for final development push' },
                    { time: '11:45 AM', title: 'Note from organizers', desc: 'Important updates and reminders' },
                    { time: '12:00 PM', title: 'Lunch', desc: 'Midday break and networking' },
                    { time: '3:14 PM', title: 'Submission Deadline', desc: 'Final code and demo submission' },
                    { time: '5:30 PM', title: 'Final Demos', desc: 'Teams present their solutions' },
                    { time: '6:00 PM', title: 'Awards & Closing Ceremony', desc: 'Winner announcement & celebration' },
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Sponsors</h2>
          <p className="text-xl text-gray-600 mb-12">Supporting the next generation of AI innovators</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-center p-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-400">
                <div className="text-lg font-medium">Sponsor Logo</div>
                <div className="text-sm">Coming Soon</div>
              </div>
            </div>
            <div className="flex items-center justify-center p-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-400">
                <div className="text-lg font-medium">Sponsor Logo</div>
                <div className="text-sm">Coming Soon</div>
              </div>
            </div>
            <div className="flex items-center justify-center p-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-400">
                <div className="text-lg font-medium">Sponsor Logo</div>
                <div className="text-sm">Coming Soon</div>
              </div>
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



      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 relative">
                  <Image
                    src="/sponsors/Afore-White.png"
                    alt="Afore Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-bold text-xl">Agent Foundry Hackathon</span>
              </div>
              <p className="text-gray-400">Building the future with AI agents and MCP</p>
              <p className="text-gray-400 text-sm mt-2">Hosted by Afore Capital</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Event Details</h4>
              <p className="text-gray-400">August 23-24, 2025</p>
              <p className="text-gray-400">San Francisco, CA</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <Link href="mailto:vsuortiz@andrew.cmu.edu" className="text-gray-400 hover:text-white transition-colors">
                vsuortiz@andrew.cmu.edu
              </Link>
              <div className="flex gap-4 mt-4">
                <Link href="https://afore.vc" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  Afore Capital →
                </Link>
                {/* <Link href="https://rho.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  Rho →
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