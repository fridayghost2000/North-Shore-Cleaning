import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export default function TermsOfServicePage() {
  const { setIsEstimateModalOpen, setIsBookingModalOpen } = useApp();

  useEffect(() => {
    // If URL has a hash, smooth scroll to it
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <span className="text-slate-400">Company Policies</span>
          <span className="text-slate-400">/</span>
          <span className="text-navy-deep font-bold">Terms of Custodial Service</span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="w-full py-12 sm:py-16 bg-gradient-to-b from-white to-slate-50 border-b border-border-subtle">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="flex items-center gap-2.5 flex-wrap mb-4">
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-vibrant font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">policy</span>
              Official Company Policies
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 font-semibold text-xs border border-slate-200">
              North Shore Cleaning Systems Inc.
            </span>
            <span className="text-xs text-slate-400 font-medium ml-auto">
              Last Updated: 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-deep tracking-tight leading-[1.15] mb-4">
            Terms of Custodial Service & Facility Guidelines
          </h1>

          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-3xl mb-6">
            Clear, transparent operating policies covering customer satisfaction guarantees, safety guidelines, cancellation terms, and building security protocols for all commercial and residential accounts.
          </p>

          {/* Quick Anchor Jumps */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200">
            <span className="text-xs font-bold text-navy-deep mr-2">Jump to:</span>
            <button
              onClick={() => scrollToSection('si')}
              className="px-3 py-1 rounded-lg bg-cyan-50 text-cyan-vibrant hover:bg-cyan-100 font-bold text-xs transition-colors cursor-pointer"
            >
              # Safety Information
            </button>
            <button
              onClick={() => scrollToSection('cancellation')}
              className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold text-xs transition-colors cursor-pointer"
            >
              Cancellation Policy
            </button>
            <button
              onClick={() => scrollToSection('satisfaction')}
              className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold text-xs transition-colors cursor-pointer"
            >
              Satisfaction Guarantee
            </button>
            <button
              onClick={() => scrollToSection('appointment-times')}
              className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold text-xs transition-colors cursor-pointer"
            >
              Appointment Times
            </button>
            <button
              onClick={() => scrollToSection('pictures')}
              className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold text-xs transition-colors cursor-pointer"
            >
              Use of Pictures
            </button>
            <button
              onClick={() => scrollToSection('security')}
              className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 font-bold text-xs transition-colors cursor-pointer"
            >
              Facility Security
            </button>
          </div>
        </div>
      </section>

      {/* 3. Main Policy Content Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content (Col 8) */}
          <div className="lg:col-span-8 flex flex-col gap-10 text-left">
            {/* Introductory Statement */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-border-subtle">
              <h2 className="text-xl font-black text-navy-deep mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-cyan-vibrant text-[24px]">gavel</span>
                Agreement to Terms
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                By engaging North Shore Cleaning Systems, Inc. for commercial janitorial services, specialized floor care, or facility maintenance, you agree to the following terms, conditions, and operational policies. Our mission is to maintain the highest standard of cleanliness while safeguarding the health and safety of both our cleaning crews and your facility occupants.
              </p>
              <div className="p-4 rounded-xl bg-cyan-50/70 border border-cyan-100 text-xs text-slate-700">
                <strong>Direct Owner Oversight:</strong> Founder Jerry Sheehan and our operational leadership personally review all accounts. If you have questions regarding any policy, contact Jerry directly at <strong>978-809-5533</strong>.
              </div>
            </div>

            {/* SAFETY INFORMATION (#si) - High Priority User Anchor */}
            <div id="si" className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border-2 border-cyan-300 relative">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-vibrant flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[24px]">health_and_safety</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-vibrant">
                      Safety Protocol #si
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-navy-deep">
                      Safety Information & Health Restrictions
                    </h2>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-vibrant text-xs font-bold border border-cyan-200 hidden sm:inline-block">
                  Mandatory Protocol
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
                  <span className="material-symbols-outlined text-amber-600 text-[22px] shrink-0 mt-0.5">
                    warning
                  </span>
                  <div>
                    <h4 className="font-bold text-amber-900 mb-1">Employee Safety First</h4>
                    <p className="text-amber-800 text-xs leading-relaxed">
                      Our employees are strictly instructed not to touch or clean any areas, fixtures, or items that they deem unsafe, structurally compromised, or unsanitary.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 flex items-start gap-3">
                  <span className="material-symbols-outlined text-rose-600 text-[22px] shrink-0 mt-0.5">
                    dangerous
                  </span>
                  <div>
                    <h4 className="font-bold text-rose-900 mb-1">Biohazard & Waste Restrictions</h4>
                    <p className="text-rose-800 text-xs leading-relaxed">
                      For health and sanitary reasons, staff members are strictly <strong>not permitted</strong> to clean or handle human or pet feces, urine, vomit, or blood. If a biological contamination occurs, specialized bio-remediation protocols must be scheduled separately.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="font-bold text-navy-deep text-sm mb-2">Chemical & Environmental Safety</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    North Shore Cleaning Systems utilizes environmentally sustainable cleaning agents that meet stringent environmental standards, such as the EPA Safer Choice standard or <strong>Green Seal GS-37</strong> for industrial multi-purpose, bathroom, glass, and carpet solutions.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-500 text-[16px]">check_circle</span>
                      OSHA Bloodborne Pathogen Standards
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-500 text-[16px]">check_circle</span>
                      CDC Workplace Sanitation Guidelines
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-500 text-[16px]">check_circle</span>
                      EPA List N Registered Virucidal Agents
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-emerald-500 text-[16px]">check_circle</span>
                      Non-abrasive surface-safe applications
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CANCELLATION POLICY (#cancellation) */}
            <div id="cancellation" className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border-subtle">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-vibrant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">event_busy</span>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-vibrant">
                    Scheduling Policy
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy-deep">
                    Cancellation & Rescheduling Policy
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  We understand that scheduling adjustments occur. Because our staffing and chemical equipment are allocated specifically for your facility shift, we enforce the following clear guidelines:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  <div className="p-4 rounded-2xl bg-surface-container-low border border-slate-100 flex flex-col gap-1">
                    <span className="text-xs font-bold text-navy-deep">Notice Deadline</span>
                    <span className="text-base font-extrabold text-cyan-vibrant">10:00 AM Prior Day</span>
                    <span className="text-[11px] text-slate-500 leading-tight">Must notify by 10 AM the business day prior to service.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-surface-container-low border border-slate-100 flex flex-col gap-1">
                    <span className="text-xs font-bold text-navy-deep">Late Notice Fee</span>
                    <span className="text-base font-extrabold text-amber-600">$50 Fee</span>
                    <span className="text-[11px] text-slate-500 leading-tight">Applies when cancellation notice is provided after 10:00 AM.</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-surface-container-low border border-slate-100 flex flex-col gap-1">
                    <span className="text-xs font-bold text-navy-deep">No-Show / Lockout</span>
                    <span className="text-base font-extrabold text-rose-600">Full Charge</span>
                    <span className="text-[11px] text-slate-500 leading-tight">Applies if crew arrives and cannot access the facility without prior notice.</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between flex-wrap gap-2">
                  <span>To cancel or reschedule, contact us immediately:</span>
                  <div className="flex items-center gap-3">
                    <a href="tel:9788095533" className="font-bold text-navy-deep hover:text-cyan-vibrant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px]">call</span>
                      978-809-5533
                    </a>
                    <span>•</span>
                    <a href="mailto:service@northshoreclean.com" className="font-bold text-navy-deep hover:text-cyan-vibrant">
                      service@northshoreclean.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CUSTOMER SATISFACTION POLICY (#satisfaction) */}
            <div id="satisfaction" className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border-subtle">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-vibrant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">task_alt</span>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-vibrant">
                    Quality Guarantee
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy-deep">
                    Customer Satisfaction Policy & Re-Clean Guarantee
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  North Shore Cleaning Systems prides itself on superior custodial craftsmanship. If you are not completely satisfied with the cleanliness of any area completed by our crew:
                </p>

                <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold">
                    <span className="material-symbols-outlined text-[20px] text-emerald-600">verified</span>
                    24-Hour Reporting Window
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    You must call or email our office within <strong>24 hours</strong> of the job completion to report any disputed or overlooked areas.
                  </p>
                  <div className="flex items-center gap-2 text-emerald-900 font-bold pt-2">
                    <span className="material-symbols-outlined text-[20px] text-emerald-600">published_with_changes</span>
                    48-Hour Free Re-Clean Resolution
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Upon timely notice, North Shore Cleaning Systems will return to your property within <strong>48 hours</strong> to thoroughly inspect and re-clean all disputed areas at <strong>no additional charge</strong>.
                  </p>
                  <p className="text-[11px] text-slate-500 pt-1 italic">
                    *Please note: Complaints or deficiencies reported after the 24-hour window cannot be honored under our free re-clean guarantee, as subsequent foot traffic and daily facility usage impact surfaces.
                  </p>
                </div>
              </div>
            </div>

            {/* APPOINTMENT TIMES POLICY (#appointment-times) */}
            <div id="appointment-times" className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border-subtle">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-vibrant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">timer</span>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-vibrant">
                    Duration Standards
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy-deep">
                    Appointment Times & Duration Guidelines
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  To maintain accurate scheduling for all commercial clients throughout the North Shore:
                </p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-cyan-vibrant text-[16px] mt-0.5">arrow_right</span>
                    <span>
                      <strong>Commencement:</strong> Appointment duration officially begins when crew members enter the facility premises (or arrive at the lobby/reception desk of multi-tenant corporate buildings).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-cyan-vibrant text-[16px] mt-0.5">arrow_right</span>
                    <span>
                      <strong>Walkthroughs & Instructions:</strong> Day 1 walkthroughs, on-site discussions, custom cleaning instructions, and access verification count toward the scheduled appointment time.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-cyan-vibrant text-[16px] mt-0.5">arrow_right</span>
                    <span>
                      <strong>Conclusion:</strong> Duration concludes when cleaners pack equipment, secure the building/alarm, and exit the premises.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* USE OF PICTURES POLICY (#pictures) */}
            <div id="pictures" className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border-subtle">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-vibrant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">photo_camera</span>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-vibrant">
                    Privacy Protection
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy-deep">
                    Use of Pictures Policy & Documentation
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  To uphold quality control and verify shift completion across high-profile facilities:
                </p>
                <div className="p-4 rounded-2xl bg-surface-container-low border border-slate-100 flex flex-col gap-2">
                  <p className="text-xs text-slate-700 leading-relaxed">
                    "Before" and "After" photographs may occasionally be taken by our supervisors or crew leads strictly for <strong>internal documentation, staff training, and quality assurance</strong>.
                  </p>
                  <p className="text-xs font-bold text-navy-deep flex items-center gap-1.5 pt-1">
                    <span className="material-symbols-outlined text-emerald-600 text-[18px]">lock</span>
                    Strict Non-Public Disclosure: These photographs are NEVER published online, shared on social media, or distributed publicly without explicit written corporate client consent.
                  </p>
                </div>
              </div>
            </div>

            {/* FACILITY SECURITY, KEYCARDS & ALARMS (#security) */}
            <div id="security" className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border-subtle">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-vibrant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">shield</span>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-vibrant">
                    Access Protocols
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy-deep">
                    Building Access, Keys & Alarm Systems
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  Because the majority of commercial shifts occur during off-hours, client security and confidentiality are paramount:
                </p>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-cyan-vibrant text-[16px] mt-0.5">verified_user</span>
                    <span>All physical keys, access cards, and alarm fobs are coded and secured under lock and key.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-cyan-vibrant text-[16px] mt-0.5">verified_user</span>
                    <span>Cleaners are trained on proper alarm disarming and arming procedures, along with interior door lockouts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-cyan-vibrant text-[16px] mt-0.5">verified_user</span>
                    <span>If an accidental alarm trigger occurs due to incorrect client security codes, our management coordinates immediately with local police dispatch and facility contacts.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* INSURANCE & ACCIDENTAL DAMAGE (#liability) */}
            <div id="liability" className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-border-subtle">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-vibrant flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-vibrant">
                    Bonded & Insured
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy-deep">
                    Liability Coverage & Accidental Damage
                  </h2>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  North Shore Cleaning Systems, Inc. maintains comprehensive commercial general liability coverage and Massachusetts workers’ compensation insurance, with bonded crew members.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  While our teams handle facilities with utmost care, in the rare event of accidental breakage or damage caused during a clean, our staff is required to report the incident immediately to Jerry Sheehan, who will document the occurrence and contact your designated facility manager promptly.
                </p>
              </div>
            </div>

            {/* GOVERNING LAW & CONTACT (#contact) */}
            <div id="contact" className="bg-gradient-to-br from-slate-50 to-cyan-50/50 rounded-3xl p-8 border border-slate-200">
              <h3 className="text-lg font-extrabold text-navy-deep mb-2">
                Governing Law & Company Contact Information
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                These Terms of Custodial Service shall be construed and governed in accordance with the laws of the Commonwealth of Massachusetts.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <span className="font-bold text-navy-deep block mb-1">Corporate Headquarters</span>
                  <span>100 Cummings Center, Suite 425C</span>
                  <br />
                  <span>Beverly, MA 01915</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <span className="font-bold text-navy-deep block mb-1">Direct Communication</span>
                  <span>Phone / Text: <strong>978-809-5533</strong></span>
                  <br />
                  <span>Email: <strong>service@northshoreclean.com</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar (Col 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6 sticky top-24 text-left">
            {/* Quick Contact Card */}
            <div className="bg-gradient-to-br from-[#062c54] via-[#043F7B] to-[#042548] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-white/10">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block mb-1">
                Owner Direct Line
              </span>
              <h3 className="text-xl font-black text-white leading-tight mb-2">
                Questions on Service Terms?
              </h3>
              <p className="text-xs text-slate-200 mb-5 leading-relaxed">
                Jerry Sheehan personally handles client agreements and guarantees clear, honest terms without fine-print surprises.
              </p>

              <div className="flex flex-col gap-2.5 pt-2 border-t border-white/10 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-cyan-300 text-[18px]">call</span>
                  <a href="tel:9788095533" className="hover:text-cyan-300 font-bold text-white">
                    978-809-5533
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-cyan-300 text-[18px]">mail</span>
                  <a href="mailto:service@northshoreclean.com" className="hover:text-cyan-300">
                    service@northshoreclean.com
                  </a>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10">
                <button
                  onClick={() => setIsEstimateModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-cyan-vibrant hover:bg-cyan-bright text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  Get Free Estimate
                </button>
              </div>
            </div>

            {/* Day 1 Walkthrough Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-border-subtle flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-vibrant flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">handshake</span>
              </div>
              <h4 className="text-base font-bold text-navy-deep">Day 1 Onsite Walkthrough</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We walk your property with you to establish custom task lists, avoiding misunderstandings before the first clean.
              </p>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="mt-1 py-2.5 px-4 rounded-xl bg-surface-container text-navy-deep font-bold text-xs hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                Schedule Free Walkthrough →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

