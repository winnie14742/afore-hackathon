'use client';

import { useState, useEffect } from 'react';
import './page.css';

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const eventDate = new Date('2025-08-23T09:00:00-07:00').getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    const handleMouseMove = (e) => {
      const orbs = document.querySelectorAll('.floating-orb');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const xOffset = (x - 0.5) * speed;
        const yOffset = (y - 0.5) * speed;
        orb.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease both';
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.theme-card, .schedule-item, .partner-card').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Animated Background */}
      <div className="bg-animation">
        <div className="floating-orb orb1"></div>
        <div className="floating-orb orb2"></div>
        <div className="floating-orb orb3"></div>
      </div>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="logo">AFORE AGENTS</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#theme">Theme</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#partners">Partners</a></li>
            <li><a href="#judges-sponsors">Judges & Sponsors</a></li>
          </ul>
          <button className="register-btn">Register Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hackathon-badge">48-HOUR SPRINT</div>
          <h1>
            Building the Future with
            <span className="highlight"> AI Agents & MCP</span>
          </h1>
          <p className="hero-subtitle">
            Join exceptional founders for a 48-hour sprint to build venture-scale products powered by cutting-edge AI technology
          </p>
          <div className="hero-cta">
            <button className="btn-primary">Apply to Hack</button>
            <button className="btn-secondary">Learn More</button>
          </div>

          {/* Countdown Timer */}
          <div className="countdown">
            <div className="countdown-item">
              <div className="countdown-number">{countdown.days}</div>
              <div className="countdown-label">Days</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{countdown.hours}</div>
              <div className="countdown-label">Hours</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{countdown.minutes}</div>
              <div className="countdown-label">Minutes</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{countdown.seconds}</div>
              <div className="countdown-label">Seconds</div>
            </div>
          </div>

          {/* Stats */}
          <div className="stats">
            <div className="stat">
              <div className="stat-number">48</div>
              <div className="stat-label">Hours of Innovation</div>
            </div>
            <div className="stat">
              <div className="stat-number">$5K</div>
              <div className="stat-label">Prize Pool</div>
            </div>
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">Founders</div>
            </div>
            <div className="stat">
              <div className="stat-number">∞</div>
              <div className="stat-label">Possibilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <section className="theme-section" id="theme">
        <h2 className="section-title">What You&apos;ll Build</h2>
        <div className="theme-grid">
          <div className="theme-card">
            <div className="theme-icon">🤖</div>
            <h3 className="theme-title">AI Agents</h3>
            <p className="theme-description">
              Create autonomous AI systems that can reason, plan, and execute complex tasks. Build the next generation of intelligent applications.
            </p>
          </div>
          <div className="theme-card">
            <div className="theme-icon">🔌</div>
            <h3 className="theme-title">Model Context Protocol</h3>
            <p className="theme-description">
              Leverage MCP to build AI agents that seamlessly integrate with tools, databases,
