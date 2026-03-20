import useReveal from '../hooks/useReveal'

const SERVICES = [
  {
    id: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Modern Website Development',
    badge: 'Most Popular',
    badgeColor: 'rgba(108,99,255,0.15)',
    badgeText: '#a89eff',
    desc: 'Clean, fast, and production-ready websites built with modern tech.',
    items: ['Landing pages', 'Business websites', 'Portfolio sites'],
    accent: '#6c63ff',
  },
  {
    id: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'UI/UX Improvement',
    badge: 'High Demand 💰',
    badgeColor: 'rgba(0,212,255,0.12)',
    badgeText: '#00d4ff',
    desc: 'Transform outdated websites into modern, conversion-ready experiences.',
    items: ['Redesign old websites', 'Improve layout & spacing', 'Add animations & polish'],
    accent: '#00d4ff',
  },
  {
    id: '03',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>
      </svg>
    ),
    title: 'Responsive Fixing',
    badge: 'Easy Money 👌',
    badgeColor: 'rgba(34,197,94,0.12)',
    badgeText: '#4ade80',
    desc: 'Fix broken layouts so your site looks perfect on every screen size.',
    items: ['Mobile-first fixes', 'Tablet & desktop polish', 'Cross-browser testing'],
    accent: '#22c55e',
  },
  {
    id: '04',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Animations & Interactions',
    badge: 'Premium Feel',
    badgeColor: 'rgba(239,159,39,0.12)',
    badgeText: '#fbbf24',
    desc: 'Add life to static pages with smooth, GPU-powered animations.',
    items: ['Scroll animations', 'Hover effects', 'Smooth UI transitions'],
    accent: '#f59e0b',
  },
]

function ServiceCard({ service }) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="reveal relative flex flex-col bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.06)] rounded-2xl p-6 sm:p-7 overflow-hidden transition-all duration-300 group hover:border-[rgba(108,99,255,0.3)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
    >
      {/* Top accent line on hover */}
      <span
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-5">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
          style={{ background: 'rgba(255,255,255,0.04)', color: service.accent }}
        >
          {service.icon}
        </div>

        {/* Badge */}
        <span
          className="text-[10px] sm:text-[11px] font-medium tracking-[0.06em] px-2.5 py-1 rounded-full flex-shrink-0"
          style={{ background: service.badgeColor, color: service.badgeText }}
        >
          {service.badge}
        </span>
      </div>

      {/* Number */}
      <span
        className="font-syne font-extrabold text-[2rem] leading-none mb-3 block"
        style={{ color: `${service.accent}22` }}
      >
        {service.id}
      </span>

      {/* Title */}
      <h3 className="font-syne font-bold text-[1.1rem] sm:text-[1.2rem] text-[#f0eff8] mb-3 leading-snug">
        {service.title}
      </h3>

      {/* Desc */}
      <p className="text-muted text-[13px] sm:text-[14px] leading-relaxed mb-5">
        {service.desc}
      </p>

      {/* Items */}
      <ul className="mt-auto space-y-2">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-[13px] text-muted">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: service.accent }}
            />
            {item}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.08em] font-medium transition-all duration-200 group-hover:gap-2.5"
        style={{ color: service.accent }}
      >
        Get a quote →
      </a>
    </div>
  )
}

export default function Services() {
  const titleRef = useReveal()

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-8 max-w-[1100px] mx-auto">

      {/* Section label */}
      <div className="flex items-center gap-3 text-[11px] tracking-[0.15em] uppercase text-accent mb-6">
        <span className="block w-8 h-px bg-accent" />
        What I offer
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 sm:mb-16">
        <h2
          ref={titleRef}
          className="reveal font-syne font-extrabold leading-[1.15]"
          style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
        >
          Services I provide.
        </h2>
        <a
          href="#contact"
          className="self-start sm:self-auto text-[13px] text-muted border border-[rgba(255,255,255,0.07)] px-4 py-2 rounded-full transition-all duration-200 hover:border-[rgba(108,99,255,0.4)] hover:text-[#f0eff8] whitespace-nowrap"
        >
          Hire me →
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
        {SERVICES.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}
      </div>

      {/* Bottom note */}
      <p className="text-center text-muted text-[13px] mt-10 sm:mt-12">
        Not sure what you need?{' '}
        <a href="#contact" className="text-accent hover:underline transition-colors duration-200">
          Let's talk
        </a>{' '}
        and I'll suggest the best approach for your project.
      </p>
    </section>
  )
}
