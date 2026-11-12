import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export default function CareersPage() {
  const { showToast } = useApp();

  // Application form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: 'Beverly',
    position: 'Experienced Commercial Cleaner (Part-Time)',
    availability: 'Evenings & Weekends',
    experienceYears: '1-2 years',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      showToast('Please fill in your name, phone number, and email.', 'error');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast(`Thank you ${formData.fullName}! Your application has been submitted to Jerry Sheehan.`, 'success');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        city: 'Beverly',
        position: 'Experienced Commercial Cleaner (Part-Time)',
        availability: 'Evenings & Weekends',
        experienceYears: '1-2 years',
        message: '',
      });
    }, 1000);
  };

  const jobOpenings = [
    {
      id: 'commercial-cleaner',
      title: 'Experienced Commercial Cleaner',
      type: 'Part-Time',
      hours: 'Evening & Weekend Hours Only',
      location: 'Beverly, MA & Surrounding North Shore',
      badge: 'Immediate Opening',
      description:
        'We are currently seeking reliable, detail-oriented commercial cleaners to service executive office suites, medical clinics, and commercial facilities. Shifts occur after 5:30 PM on weekdays and flexible weekend hours.',
      requirements: [
        'High School Diploma or GED required',
        'Must live within short commuting distance of Beverly, MA',
        'Prior commercial or residential cleaning experience preferred',
        'Dependable personal transportation and valid driver’s license',
        'Ability to pass background check and adhere to building alarm security protocols',
      ],
      responsibilities: [
        'Detailed dusting of desks, conference tables, sills, and fixtures without moving papers',
        'Hospital-grade restroom sanitization and replenishment of paper products/soaps',
        'HEPA multi-stage carpet vacuuming and hard-surface floor mopping',
        'Collection and diversion of trash and recycling into commercial bins',
      ],
    },
    {
      id: 'day-porter',
      title: 'Commercial Day Porter',
      type: 'Part-Time or Full-Time',
      hours: 'Daytime Shifts (Mon - Fri)',
      location: 'Cummings Center, Beverly & Danvers Corporate Parks',
      badge: 'Active Hiring',
      description:
        'Continuous daytime upkeep for commercial office lobbies, corporate corridors, breakrooms, and executive conference rooms. Ideal for service-oriented professionals with strong communication skills.',
      requirements: [
        'High School Diploma or equivalent',
        'Friendly, professional demeanor around corporate tenants and clients',
        'Ability to stand, walk, and handle light custodial tasks for 4-6 hours',
        'Prompt attendance and proactive eye for facility cleanliness',
      ],
      responsibilities: [
        'Routine inspection and restocking of multi-stall restrooms',
        'High-touch wipe downs (elevator buttons, handrails, door handles)',
        'Conference room reset and glass entryway detailing between meetings',
        'Immediate spill response and cafeteria dining area wipe downs',
      ],
    },
    {
      id: 'floor-specialist',
      title: 'Floor Care & Stripping/Waxing Specialist',
      type: 'Part-Time / Project-Based',
      hours: 'Weekend / Off-Hours Deep Shifts',
      location: 'North Shore Commercial Accounts',
      badge: 'Specialized Skill',
      description:
        'Operate commercial rotary buffers, burnishers, and high-pressure steam extraction machines across VCT, tile, terrazzo, and commercial carpets.',
      requirements: [
        'Demonstrated experience with floor machines (rotary buffers, wet vacuums, auto-scrubbers)',
        'Knowledge of stripper dilution, neutralizer, and wax finishing layers',
        'Physical stamina for machine handling and furniture shifting',
        'Pride in workmanship and deep gloss restoration',
      ],
      responsibilities: [
        'Chemical stripping and recoating of commercial VCT tile floors',
        'High-pressure steam tile and grout deep extraction',
        'Truck-mounted carpet hot-water extraction and air-path dryer setup',
        'Routine equipment maintenance and chemical inventory checks',
      ],
    },
  ];

  const employeePerks = [
    {
      title: 'Owner-Supervised Support',
      desc: 'Work directly with founder Jerry Sheehan and approachable supervisors who value your dedication and treat staff with dignity.',
      icon: 'support_agent',
    },
    {
      title: 'Flexible Off-Hours Schedules',
      desc: 'Evening and weekend shifts allow you to comfortably supplement your daytime income, education, or family commitments.',
      icon: 'schedule',
    },
    {
      title: 'Modern Equipment & Supplies',
      desc: 'We supply commercial HEPA backpack vacuums, microfiber systems, and eco-friendly Green Seal GS-37 chemicals for safe working conditions.',
      icon: 'sanitizer',
    },
    {
      title: 'Consistent Commercial Accounts',
      desc: 'Clean structured corporate offices and medical facilities on consistent schedules—no unpredictable door-to-door residential hassles.',
      icon: 'domain',
    },
    {
      title: 'Competitive & Reliable Pay',
      desc: 'Enjoy competitive hourly wages with prompt direct deposit, plus growth opportunities as our account base expands.',
      icon: 'payments',
    },
    {
      title: 'Bonded & Insured Protection',
      desc: 'Every team member is fully covered by Massachusetts workers’ comp and commercial insurance from day one.',
      icon: 'verified_user',
    },
  ];

  const careerFaqs = [
    {
      q: 'What hours and shifts are available?',
      a: 'Most of our commercial cleaning accounts operate during off-hours—typically weekday evenings starting after 5:30 PM, plus flexible Saturday and Sunday shifts. We also offer daytime porter shifts for selected corporate facilities.',
    },
    {
      q: 'Do I need to live in or near Beverly, MA?',
      a: 'Yes. Because our accounts and operational hub are situated at the Cummings Center in Beverly and neighboring Essex County towns (Danvers, Salem, Peabody), applicants must reside within a short commuting distance.',
    },
    {
      q: 'Do you provide cleaning supplies and training?',
      a: 'Yes! North Shore Cleaning Systems provides all commercial equipment, vacuums, microfiber towels, PPE, and EPA-registered cleaning solutions. We also provide hands-on training on our customized Day 1 checklists.',
    },
    {
      q: 'Is a High School Diploma required?',
      a: 'Yes, a High School Diploma or equivalent GED is required for commercial positions, along with the ability to pass a background check.',
    },
    {
      q: 'How can I check the status of my application?',
      a: 'After submitting the form below, you can reach out directly to Jerry Sheehan by phone or text at 978-809-5533 or email service@northshoreclean.com.',
    },
  ];

  return (
    <div className="w-full bg-surface-container-low pb-20">
      {/* 1. Breadcrumb Bar */}
      <div className="w-full bg-white border-b border-border-subtle py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold text-slate-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-cyan-vibrant transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">home</span>
            Home
          </Link>
          <span className="text-slate-400">/</span>
          <span className="text-navy-deep font-bold">Careers & Employment</span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading, Subtitle & CTAs */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-left">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-vibrant font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">badge</span>
                  Now Hiring in Essex County
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-xs border border-emerald-200">
                  Evening & Weekend Shifts
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight leading-[1.15]">
                Careers at North Shore Cleaning Systems
              </h1>

              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                Join our detail-oriented commercial cleaning team headquartered at 100 Cummings Center in Beverly, Massachusetts.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We are always seeking dependable, conscientious team members to maintain high-profile corporate suites, medical clinics, and commercial facilities. We offer competitive compensation, paid training, and respect for our workforce.
              </p>

              {/* Fast Trust Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-deep bg-white p-2.5 rounded-xl border border-border-subtle shadow-xs">
                  <span className="material-symbols-outlined text-cyan-vibrant text-[18px]">payments</span>
                  Competitive Pay
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-navy-deep bg-white p-2.5 rounded-xl border border-border-subtle shadow-xs">
                  <span className="material-symbols-outlined text-cyan-vibrant text-[18px]">schedule</span>
                  Flexible Shifts
                </div>
                <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-xs font-bold text-navy-deep bg-white p-2.5 rounded-xl border border-border-subtle shadow-xs">
                  <span className="material-symbols-outlined text-cyan-vibrant text-[18px]">handshake</span>
                  Owner Supervised
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <a
                  href="#application-form"
                  className="px-6 py-3.5 rounded-xl bg-cyan-vibrant hover:bg-cyan-bright text-white font-bold text-sm shadow-lg hover:shadow-cyan-vibrant/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]">assignment_add</span>
                  Apply for Open Position
                </a>

                <a
                  href="tel:9788095533"
                  className="px-5 py-3.5 rounded-xl bg-navy-deep hover:bg-navy-mid text-white font-bold text-sm transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px] text-cyan-300">call</span>
                  Speak with Jerry: 978-809-5533
                </a>
              </div>
            </div>

            {/* Right Column: Visual with Overlays */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] group">
                <img
                  src="/about-cleaner.jpg"
                  alt="North Shore Cleaning Systems Staff Maintaining Commercial Facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/30 to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute top-3.5 right-3.5 z-20 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md text-navy-deep shadow-lg border border-white/40 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold leading-tight">Equal Opportunity</div>
                    <div className="text-[10px] text-slate-500 leading-tight">Supportive Workplace</div>
                  </div>
                </div>

                {/* Bottom Overlay Text */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white text-left z-10">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 uppercase tracking-wider mb-1">
                    <span className="material-symbols-outlined text-[15px]">location_on</span>
                    Beverly, Massachusetts Hub
                  </div>
                  <div className="text-base sm:text-lg font-bold leading-snug drop-shadow-sm">
                    100 Cummings Center, Suite 425C
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Employee Benefits & Culture Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-left mb-10">
          <span className="text-xs font-extrabold text-cyan-vibrant uppercase tracking-wider block mb-2">
            Why Join Our Team
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep tracking-tight mb-2">
            The North Shore Cleaning Systems Experience
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl">
            We believe that spotless facilities start with cleaners who feel respected, well-equipped, and fairly rewarded.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {employeePerks.map((perk, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-border-subtle shadow-xs hover:border-cyan-200 hover:shadow-md transition-all flex flex-col gap-3 text-left"
            >
              <div className="w-11 h-11 rounded-2xl bg-cyan-50 text-cyan-vibrant flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">{perk.icon}</span>
              </div>
              <h3 className="text-base font-bold text-navy-deep">{perk.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Active Job Openings Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-left mb-10">
          <span className="text-xs font-extrabold text-cyan-vibrant uppercase tracking-wider block mb-2">
            Current Openings
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep tracking-tight mb-2">
            Commercial Cleaning Positions in Beverly & Essex County
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl">
            Review our active job descriptions below. Even if your schedule differs slightly, we encourage qualified local applicants to submit an application.
          </p>
        </div>

        <div className="flex flex-col gap-6 text-left">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-border-subtle hover:border-cyan-200 transition-all flex flex-col gap-6"
            >
              {/* Header Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-vibrant text-xs font-bold border border-cyan-200">
                      {job.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{job.type}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-navy-deep">{job.title}</h3>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="text-xs text-slate-600 flex items-center gap-1.5 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
                    <span className="material-symbols-outlined text-[16px] text-cyan-vibrant">schedule</span>
                    {job.hours}
                  </div>
                  <div className="text-xs text-slate-600 flex items-center gap-1.5 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
                    <span className="material-symbols-outlined text-[16px] text-cyan-vibrant">location_on</span>
                    {job.location}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{job.description}</p>

              {/* Requirements & Responsibilities Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-2xl bg-surface-container-low border border-slate-100">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-navy-deep mb-3 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-cyan-vibrant">fact_check</span>
                    Position Requirements
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {job.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <span className="material-symbols-outlined text-emerald-500 text-[16px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-surface-container-low border border-slate-100">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-navy-deep mb-3 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-cyan-vibrant">checklist</span>
                    Key Responsibilities
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {job.responsibilities.map((resp, respIdx) => (
                      <li key={respIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <span className="material-symbols-outlined text-cyan-vibrant text-[16px] shrink-0 mt-0.5">
                          arrow_right
                        </span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
                <span className="text-xs text-slate-500 italic">
                  *Candidates must live within short distance of Beverly, MA.
                </span>
                <a
                  href="#application-form"
                  onClick={() => setFormData((prev) => ({ ...prev, position: job.title }))}
                  className="px-5 py-2.5 rounded-xl bg-navy-deep hover:bg-cyan-vibrant text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>Apply for this Role</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Online Job Application Form & Direct Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="application-form">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Application Form (Col 8) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border-subtle text-left">
            <div className="mb-8">
              <span className="text-xs font-extrabold text-cyan-vibrant uppercase tracking-wider block mb-2">
                Online Application
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep tracking-tight mb-2">
                Apply for Employment
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Complete the short form below. Founder Jerry Sheehan reviews applications weekly and will contact qualified applicants directly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                  <span className="material-symbols-outlined text-[32px]">task_alt</span>
                </div>
                <h3 className="text-xl font-extrabold text-emerald-900">Application Successfully Submitted!</h3>
                <p className="text-sm text-emerald-700 max-w-md">
                  Thank you for your interest in joining North Shore Cleaning Systems. Jerry Sheehan will review your qualifications and reach out via phone or email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplicationSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Full Legal Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Smith"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-cyan-vibrant focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 978-555-0143"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-cyan-vibrant focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. m.smith@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-cyan-vibrant focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      City of Residence <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Beverly, Danvers, Salem"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-cyan-vibrant focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Position of Interest
                    </label>
                    <select
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-cyan-vibrant focus:bg-white transition-colors"
                    >
                      <option value="Experienced Commercial Cleaner (Part-Time)">
                        Experienced Commercial Cleaner (Part-Time)
                      </option>
                      <option value="Commercial Day Porter">Commercial Day Porter</option>
                      <option value="Floor Care & Stripping/Waxing Specialist">
                        Floor Care & Stripping/Waxing Specialist
                      </option>
                      <option value="General Commercial Cleaning Application">
                        General Commercial Cleaning Application
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Shift Availability
                    </label>
                    <select
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-cyan-vibrant focus:bg-white transition-colors"
                    >
                      <option value="Evenings & Weekends">Evenings & Weekends (Most Common)</option>
                      <option value="Weekday Evenings Only">Weekday Evenings Only</option>
                      <option value="Weekends Only">Weekends Only</option>
                      <option value="Daytime Hours">Daytime Hours (Day Porter)</option>
                      <option value="Flexible / Any Schedule">Flexible / Any Schedule</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Cleaning Experience & Background Summary
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your previous cleaning experience, equipment familiarity, and why you would be a great fit for our team..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-cyan-vibrant focus:bg-white transition-colors"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-vibrant hover:bg-cyan-bright text-white font-bold text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-cyan-vibrant/30 cursor-pointer active:scale-95 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined text-[20px] animate-spin">
                          progress_activity
                        </span>
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[20px]">send</span>
                        <span>Submit Job Application</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Sidebar (Col 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6 sticky top-24 text-left">
            {/* Direct Line to Jerry */}
            <div className="bg-gradient-to-br from-[#062c54] via-[#043F7B] to-[#042548] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-white/10">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                Direct Contact
              </span>
              <h3 className="text-xl font-black text-white leading-tight mb-2">
                Questions About Working Here?
              </h3>
              <p className="text-xs text-slate-200 mb-5 leading-relaxed">
                Founder Jerry Sheehan personally oversees recruitment and welcomes inquiries from reliable Massachusetts cleaning professionals.
              </p>

              <div className="flex flex-col gap-3 pt-2 border-t border-white/10 text-xs text-slate-200">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-cyan-300 text-[18px]">call</span>
                  <a href="tel:9788095533" className="hover:text-cyan-300 font-bold text-white">
                    978-809-5533 (Call or Text)
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-cyan-300 text-[18px]">mail</span>
                  <a href="mailto:service@northshoreclean.com" className="hover:text-cyan-300">
                    service@northshoreclean.com
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-cyan-300 text-[18px] shrink-0 mt-0.5">
                    location_on
                  </span>
                  <span>100 Cummings Center, Suite 425C, Beverly, MA 01915</span>
                </div>
              </div>
            </div>

            {/* Application Requirements Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-border-subtle flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-vibrant flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">verified</span>
              </div>
              <h4 className="text-base font-bold text-navy-deep">Hiring Checklist</h4>
              <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-500 text-[16px]">check</span>
                  High School Diploma / GED
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-500 text-[16px]">check</span>
                  Live near Beverly, MA
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-500 text-[16px]">check</span>
                  Pass Background Check
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-500 text-[16px]">check</span>
                  Dependable Transportation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Careers FAQs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border-subtle text-left">
          <span className="text-xs font-extrabold text-cyan-vibrant uppercase tracking-wider block mb-2">
            Employment FAQs
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-navy-deep tracking-tight mb-6">
            Frequently Asked Questions by Applicants
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {careerFaqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-surface-container-low border border-slate-100">
                <h4 className="text-sm font-bold text-navy-deep mb-1.5 flex items-start gap-2">
                  <span className="text-cyan-vibrant font-black">Q:</span>
                  {faq.q}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

