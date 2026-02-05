import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

// Logo — Chat House: house silhouette as speech bubble
function Logo({ size = 32, variant = 'color' }: { size?: number; variant?: 'color' | 'white' }) {
  const bg = variant === 'white' ? '#FDF8F3' : '#3D3128'
  const fg = '#C17F59'
  const windowColor = variant === 'white' ? '#FDF8F3' : '#3D3128'
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="7" fill={bg} />
      <path d="M16 5L6 13V23H11L15 27V23H26V13L16 5Z" fill={fg} />
      <rect x="13" y="15" width="6" height="4.5" rx="0.8" fill={windowColor} opacity="0.4" />
    </svg>
  )
}

// Platform logos with actual icons
const platforms = [
  { name: 'SeLoger', logo: '/logos/seloger.png' },
  { name: 'LeBonCoin', logo: '/logos/leboncoin.png' },
  { name: "Bien'ici", logo: '/logos/bienici.png' },
  { name: 'Logic-Immo', logo: '/logos/logic-immo.png' },
  { name: 'PAP', logo: '/logos/pap.png' },
]

// Compact Demo with left explanation / right action
function DemoSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      label: "Lead entrant",
      title: "Un prospect vous contacte",
      desc: "L'email arrive dans votre boîte depuis SeLoger, LeBonCoin, Bien'ici, Logic-Immo ou PAP. RépondImmo le détecte instantanément.",
      visual: (
        <div className="bg-white rounded-2xl shadow-sm border border-[#E8DDD4] overflow-hidden">
          <div className="bg-[#F5F0EB] px-5 py-3 flex items-center gap-3 border-b border-[#E8DDD4]">
            <img src="/logos/leboncoin.png" alt="LeBonCoin" className="w-7 h-7 rounded-md object-contain bg-[#FF6E14] p-0.5" />
            <div className="min-w-0">
              <p className="text-sm font-medium text-[#3D3128]">leboncoin</p>
              <p className="text-xs text-[#5D4E3C]/50">noreply@leboncoin.fr</p>
            </div>
            <span className="ml-auto text-xs text-[#5D4E3C]/40">14:32</span>
          </div>
          <div className="p-5">
            <p className="text-sm font-medium text-[#3D3128] mb-3">Nouvelle demande — Appartement T3, Paris 11e</p>
            <div className="bg-[#FDF8F3] rounded-xl p-4 text-sm text-[#5D4E3C] leading-relaxed">
              Bonjour, je suis intéressée par votre appartement rue de la Roquette. Est-il disponible ? Mon budget est de 1 800€/mois.
              <br /><br />
              Marie D. — 06 12 34 56 78
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Analyse IA",
      title: "L'IA qualifie le lead en 5 secondes",
      desc: "Extraction automatique du nom, téléphone, budget, type de projet. Le lead est scoré pour que vous sachiez immédiatement s'il vaut le coup.",
      visual: (
        <div className="bg-white rounded-2xl shadow-sm border border-[#E8DDD4] p-5">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-[#C17F59]/10 rounded-full flex items-center justify-center">
              <span className="text-[#C17F59] text-lg">⚡</span>
            </div>
            <div>
              <p className="text-sm font-medium text-[#3D3128]">Analyse terminée</p>
              <p className="text-xs text-[#5D4E3C]/50">en 4.2 secondes</p>
            </div>
          </div>
          <div className="space-y-2">
            {[
              ['Prospect', 'Marie Dupont'],
              ['Téléphone', '06 12 34 56 78'],
              ['Budget', '1 800€/mois'],
              ['Projet', 'Location'],
              ['Timing', 'Début février'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between items-center py-2 px-3 bg-[#FDF8F3] rounded-lg">
                <span className="text-xs text-[#5D4E3C]/60">{k}</span>
                <span className="text-sm font-medium text-[#3D3128]">{v}</span>
              </div>
            ))}
            <div className="flex justify-between items-center py-2 px-3 bg-[#B8C4A8]/15 rounded-lg border border-[#B8C4A8]/30">
              <span className="text-xs text-[#5D6B4A]">Score</span>
              <span className="text-sm font-semibold text-[#5D6B4A]">Élevé ✓</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Réponse envoyée",
      title: "Une réponse part depuis VOTRE adresse",
      desc: "Personnalisée avec le ton que vous avez choisi, votre signature, et votre lien de réservation. Le prospect ne voit aucune différence avec un email écrit par vous.",
      visual: (
        <div className="bg-white rounded-2xl shadow-sm border border-[#B8C4A8]/40 overflow-hidden">
          <div className="bg-[#B8C4A8]/15 px-5 py-3 flex items-center gap-3 border-b border-[#B8C4A8]/30">
            <div className="w-8 h-8 bg-[#B8C4A8] rounded-lg flex items-center justify-center text-white text-xs">✓</div>
            <div>
              <p className="text-sm font-medium text-[#3D3128]">Réponse envoyée</p>
              <p className="text-xs text-[#5D6B4A]">en 27 secondes</p>
            </div>
          </div>
          <div className="p-5">
            <p className="text-xs text-[#5D4E3C]/50 mb-3">De : vous@votre-agence.com</p>
            <div className="text-sm text-[#5D4E3C] leading-relaxed space-y-3">
              <p>Bonjour Marie,</p>
              <p>Merci pour votre intérêt pour l'appartement rue de la Roquette ! Le bien est toujours disponible et correspond à votre recherche.</p>
              <p>
                Je vous propose de réserver un créneau de visite :
                <br />
                <span className="text-[#C17F59] font-medium">→ Réserver ma visite</span>
              </p>
              <p className="text-[#5D4E3C]/60">
                Pierre Martin
                <br />
                Agence Immobilière du 11e
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "RDV pris",
      title: "Le prospect réserve, vous êtes notifié",
      desc: "Le prospect clique sur votre lien Cal.com et réserve un créneau. Vous recevez toutes les infos dans votre dashboard. Sans RépondImmo, ce lead aurait attendu 24h minimum.",
      visual: (
        <div className="bg-white rounded-2xl shadow-sm border border-[#E8DDD4] p-5 text-center">
          <div className="w-16 h-16 bg-[#5D6B4A]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">📅</span>
          </div>
          <p className="text-lg font-semibold text-[#3D3128] mb-1" style={{ fontFamily: 'Fraunces, serif' }}>
            Visite confirmée
          </p>
          <p className="text-sm text-[#5D4E3C]/60 mb-5">Mardi 15 février — 14h00</p>
          <div className="space-y-2 text-left">
            {[
              ['Prospect', 'Marie Dupont'],
              ['Bien', 'T3 — Rue de la Roquette'],
              ['Budget', '1 800€/mois'],
              ['Temps de réponse', '27 secondes'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-2 px-3 bg-[#FDF8F3] rounded-lg text-sm">
                <span className="text-[#5D4E3C]/60">{k}</span>
                <span className="font-medium text-[#3D3128]">{v}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#C17F59] mt-4">
            Sans RépondImmo : 24h+ d'attente, lead perdu.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div>
      {/* Step navigation */}
      <div className="flex gap-1 mb-8 md:mb-12 overflow-x-auto pb-2">
        {steps.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
              activeStep === i
                ? 'bg-[#C17F59] text-white'
                : 'bg-[#E8DDD4] text-[#5D4E3C]/70 hover:bg-[#D4C4B0]'
            }`}
          >
            {i + 1}. {s.label}
          </button>
        ))}
      </div>

      {/* Two-column layout: explanation left, visual right */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-start"
        >
          {/* Left: explanation */}
          <div className="flex flex-col justify-center">
            <span className="text-[#C17F59] text-sm tracking-wide mb-3">
              Étape {activeStep + 1} / {steps.length}
            </span>
            <h3
              className="text-2xl md:text-3xl text-[#3D3128] mb-4 leading-snug"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              {steps[activeStep].title}
            </h3>
            <p className="text-[#5D4E3C]/70 leading-relaxed">
              {steps[activeStep].desc}
            </p>

            {/* Next step button */}
            {activeStep < steps.length - 1 && (
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                className="mt-6 text-sm text-[#C17F59] hover:text-[#A86D4B] transition-colors self-start flex items-center gap-2"
              >
                Étape suivante
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            )}
          </div>

          {/* Right: visual */}
          <div>
            {steps[activeStep].visual}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// Main Component
export default function App() {
  const [email, setEmail] = useState('')
  const [agencyName, setAgencyName] = useState('')
  const [city, setCity] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('https://formspree.io/f/mpqjaynd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, agencyName, city }),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#FDF8F3] relative" style={{ fontFamily: 'Lexend, sans-serif' }}>

      {/* Subtle grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
      }} />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FDF8F3]/90 backdrop-blur-md border-b border-[#3D3128]/5">
        <div className="flex justify-between items-center px-5 md:px-12 py-4">
          <div className="flex items-center gap-2.5">
            <Logo size={32} />
            <span className="text-[#3D3128] text-lg tracking-tight" style={{ fontFamily: 'Fraunces, serif' }}>
              répondimmo
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-[#5D4E3C]/60">
            <a href="#demo" className="hover:text-[#3D3128] transition-colors">Fonctionnement</a>
            <a href="#tarifs" className="hover:text-[#3D3128] transition-colors">Tarifs</a>
            <a href="#faq" className="hover:text-[#3D3128] transition-colors">FAQ</a>
          </nav>

          <a
            href="#beta"
            className="bg-[#3D3128] text-white px-5 py-2 rounded-full text-sm hover:bg-[#C17F59] transition-colors"
          >
            Accès beta
          </a>
        </div>
      </header>

      {/* Hero — Full Viewport */}
      <section className="h-screen flex items-center relative overflow-hidden">
        {/* Soft background shapes */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#E8DDD4]/40 to-transparent pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#B8C4A8]/10 rounded-full blur-3xl pointer-events-none" />
        {/* Decorative circles */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-[#C17F59]/5 rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-1/3 w-40 h-40 border border-[#C17F59]/5 rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-12 grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <span className="inline-block text-[#C17F59] text-sm tracking-widest uppercase mb-6">
              Beta gratuite — places limitées
            </span>

            <h1
              className="text-[clamp(2rem,5vw,3.8rem)] leading-[1.1] text-[#3D3128] mb-6"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              Vos leads répondus
              <br />
              <em className="text-[#C17F59] not-italic">en 30 secondes.</em>
            </h1>

            <p className="text-[#5D4E3C]/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              L'IA qui répond à vos demandes SeLoger et LeBonCoin 24h/24,
              qualifie les prospects, et vous envoie que les leads chauds.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#beta"
                className="bg-[#3D3128] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#C17F59] transition-colors text-center"
              >
                Demander un accès →
              </a>
              <a
                href="#demo"
                className="px-7 py-3.5 rounded-full text-sm text-[#5D4E3C] border border-[#E8DDD4] hover:bg-[#E8DDD4] transition-colors text-center"
              >
                Voir comment ça marche
              </a>
            </div>

            {/* Portals logos — single line */}
            <div className="flex items-center gap-2 flex-nowrap overflow-x-auto">
              <span className="text-xs text-[#5D4E3C]/40 shrink-0 mr-1">Intégré avec</span>
              {platforms.map(p => (
                <span
                  key={p.name}
                  className="inline-flex items-center gap-1.5 bg-white/80 border border-[#E8DDD4] rounded-full px-2.5 py-1 text-xs text-[#5D4E3C] shrink-0"
                >
                  <img src={p.logo} alt={p.name} className="w-4 h-4 object-contain rounded-sm" />
                  <span className="hidden sm:inline">{p.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right: LeBonCoin email mockup */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="bg-white rounded-2xl shadow-xl shadow-[#3D3128]/8 border border-[#E8DDD4] overflow-hidden">
              {/* Email client chrome */}
              <div className="bg-[#F5F0EB] px-5 py-3 flex items-center gap-3 border-b border-[#E8DDD4]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E8DDD4]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E8DDD4]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E8DDD4]" />
                </div>
                <span className="text-xs text-[#5D4E3C]/50">Boîte de réception</span>
              </div>

              <div className="p-5 space-y-4">
                {/* LBC notification header */}
                <div className="flex items-start gap-3">
                  <img src="/logos/leboncoin.png" alt="LeBonCoin" className="w-9 h-9 rounded-lg shrink-0 bg-[#FF6E14] p-0.5" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#3D3128]">leboncoin — Nouveau message</p>
                    <p className="text-xs text-[#5D4E3C]/50">Appartement T3 · Paris 11e · 1 800€/mois</p>
                  </div>
                </div>

                {/* LBC email body */}
                <div className="rounded-xl overflow-hidden border border-[#E8DDD4]">
                  <div className="bg-[#FF6E14] px-4 py-2">
                    <p className="text-white text-xs font-medium">leboncoin.fr</p>
                  </div>
                  <div className="bg-[#FDF8F3] p-4">
                    <p className="text-sm text-[#5D4E3C] leading-relaxed">
                      "Bonjour, je suis intéressée par votre appartement. Disponible pour visiter ?"
                    </p>
                    <p className="text-xs text-[#5D4E3C]/50 mt-2">Marie D. · 06 12 34 56 78</p>
                  </div>
                </div>

                {/* Divider with timer */}
                <div className="flex items-center gap-3">
                  <div className="h-px bg-[#E8DDD4] flex-1" />
                  <span className="text-[10px] text-[#C17F59] font-medium bg-[#C17F59]/10 px-2.5 py-0.5 rounded-full">⚡ 27s</span>
                  <div className="h-px bg-[#E8DDD4] flex-1" />
                </div>

                {/* Auto-response */}
                <div className="bg-[#B8C4A8]/10 rounded-xl p-4 border border-[#B8C4A8]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-[#5D6B4A] rounded-full" />
                    <span className="text-xs font-medium text-[#5D6B4A]">Réponse auto envoyée</span>
                  </div>
                  <p className="text-sm text-[#5D4E3C]">
                    Bonjour Marie ! Le bien est disponible.
                    <br />
                    <span className="text-[#C17F59] font-medium">→ Réserver une visite</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#5D4E3C]/30 text-xs flex flex-col items-center gap-2">
          <span>Défiler</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* Problem stats */}
      <section className="py-16 md:py-24 bg-[#3D3128] relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C17F59]/30 to-transparent" />
        <div className="max-w-5xl mx-auto px-5 md:px-12">
          <h2
            className="text-2xl md:text-3xl text-white text-center mb-12"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Vous recevez 50 demandes par jour.
            <br />
            <span className="text-[#C17F59]">Combien vous en ratez ?</span>
          </h2>

          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {[
              { number: '78%', text: 'choisissent le premier à répondre' },
              { number: '24h', text: 'délai de réponse moyen' },
              { number: '47%', text: 'ne reçoivent jamais de réponse' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-3xl md:text-5xl font-light text-[#C17F59] mb-2"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  {stat.number}
                </div>
                <p className="text-xs md:text-sm text-white/50">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo — Two columns */}
      <section id="demo" className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-[#C17F59] text-sm tracking-widest uppercase">Comment ça marche</span>
            <h2
              className="text-2xl md:text-3xl text-[#3D3128] mt-2"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              RépondImmo <em className="text-[#C17F59] not-italic">en action</em>
            </h2>
          </div>

          <DemoSection />
        </div>
      </section>

      {/* 3-step summary */}
      <section className="py-16 md:py-24 bg-[#E8DDD4] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C17F59]/20 to-transparent" />
        <div className="max-w-4xl mx-auto px-5 md:px-12">
          <h2
            className="text-2xl md:text-3xl text-[#3D3128] text-center mb-12"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Trois étapes, <em className="text-[#C17F59] not-italic">c'est tout</em>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Connectez', desc: 'Votre boîte Gmail ou Outlook', icon: '📧' },
              { num: '02', title: 'Laissez faire', desc: 'L\'IA répond 24h/24, 7j/7', icon: '⚡' },
              { num: '03', title: 'Récoltez', desc: 'Les RDV arrivent automatiquement', icon: '📅' },
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center relative">
                <span className="absolute top-4 right-4 text-xs text-[#C17F59]/30 font-mono">{step.num}</span>
                <div className="text-2xl mb-3">{step.icon}</div>
                <h3 className="font-semibold text-[#3D3128] mb-1">{step.title}</h3>
                <p className="text-sm text-[#5D4E3C]/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="tarifs" className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-[#C17F59] text-sm tracking-widest uppercase">Tarification</span>
            <h2
              className="text-2xl md:text-3xl text-[#3D3128] mt-2"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              Simple et <em className="text-[#C17F59] not-italic">transparent</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: 'Solo',
                price: '79',
                desc: 'Agent indépendant',
                features: ['1 boîte mail connectée', 'Réponses illimitées', 'Dashboard de suivi', 'Support email'],
              },
              {
                name: 'Agence',
                price: '149',
                desc: 'Petites équipes',
                features: ['Jusqu\'à 5 boîtes mail', 'Réponses illimitées', 'Dashboard multi-utilisateurs', 'Support prioritaire'],
                featured: true
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${plan.featured ? 'bg-[#C17F59] text-white hover:shadow-[#C17F59]/20' : 'bg-white border-2 border-[#E8DDD4] hover:border-[#C17F59]/30 hover:shadow-[#C17F59]/10'}`}
              >
                {plan.featured && (
                  <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full">Recommandé</span>
                )}
                <h3 className="text-xl font-semibold mt-3" style={{ fontFamily: 'Fraunces, serif' }}>
                  {plan.name}
                </h3>
                <p className={`text-sm mt-1 ${plan.featured ? 'text-white/70' : 'text-[#5D4E3C]/60'}`}>
                  {plan.desc}
                </p>
                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-4xl font-bold" style={{ fontFamily: 'Fraunces, serif' }}>{plan.price}€</span>
                  <span className={plan.featured ? 'text-white/50' : 'text-[#5D4E3C]/50'}>/mois</span>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className={plan.featured ? 'text-white/80' : 'text-[#C17F59]'}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className={`text-xs ${plan.featured ? 'text-white/60' : 'text-[#C17F59]'}`}>
                  Gratuit pendant la beta →
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-[#E8DDD4] px-5 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C17F59]/20 to-transparent" />
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl md:text-3xl text-[#3D3128] text-center mb-8"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Questions fréquentes
          </h2>

          <div className="space-y-3">
            {[
              { q: 'L\'IA répond depuis ma vraie adresse ?', a: 'Oui, les réponses partent de votre adresse Gmail ou Outlook. Le prospect ne voit aucune différence.' },
              { q: 'Je peux personnaliser les réponses ?', a: 'Vous choisissez le ton (formel, chaleureux, décontracté), votre signature, et votre lien de réservation.' },
              { q: 'Quels portails sont supportés ?', a: 'SeLoger, LeBonCoin, Bien\'ici, Logic-Immo, PAP, et tout email contenant une demande immobilière.' },
              { q: 'Je garde le contrôle ?', a: 'Oui, tout est visible dans votre dashboard. Vous pouvez voir chaque réponse envoyée.' },
              { q: 'Et si je n\'ai pas de Calendly ?', a: 'On vous aide à créer un compte Cal.com gratuit en 5 minutes.' },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-xl group">
                <summary className="p-4 cursor-pointer text-sm font-medium text-[#3D3128] list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-[#C17F59] text-lg group-open:rotate-45 transition-transform ml-4 shrink-0">+</span>
                </summary>
                <p className="px-4 pb-4 text-sm text-[#5D4E3C]/70 -mt-1">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="beta" className="py-16 md:py-24 px-5 md:px-12">
        <div className="max-w-md mx-auto text-center">
          <h2
            className="text-2xl md:text-3xl text-[#3D3128] mb-2"
            style={{ fontFamily: 'Fraunces, serif' }}
          >
            Rejoignez la <em className="text-[#C17F59] not-italic">beta</em>
          </h2>
          <p className="text-sm text-[#5D4E3C]/60 mb-8">
            Gratuit. Sans carte bancaire. Places limitées.
          </p>

          {submitted ? (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#5D6B4A] text-white rounded-2xl p-10"
            >
              <p className="text-xl font-semibold" style={{ fontFamily: 'Fraunces, serif' }}>Bienvenue !</p>
              <p className="text-sm text-white/70 mt-2">On vous contacte très vite.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 text-left">
              <input
                type="email"
                placeholder="Email professionnel"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white border-2 border-[#E8DDD4] rounded-xl px-4 py-3 text-sm text-[#3D3128] placeholder:text-[#5D4E3C]/40 focus:outline-none focus:border-[#C17F59] transition-colors"
              />
              <input
                type="text"
                placeholder="Nom de l'agence"
                value={agencyName}
                onChange={(e) => setAgencyName(e.target.value)}
                required
                className="w-full bg-white border-2 border-[#E8DDD4] rounded-xl px-4 py-3 text-sm text-[#3D3128] placeholder:text-[#5D4E3C]/40 focus:outline-none focus:border-[#C17F59] transition-colors"
              />
              <input
                type="text"
                placeholder="Ville"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                className="w-full bg-white border-2 border-[#E8DDD4] rounded-xl px-4 py-3 text-sm text-[#3D3128] placeholder:text-[#5D4E3C]/40 focus:outline-none focus:border-[#C17F59] transition-colors"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#C17F59] text-white rounded-xl px-6 py-3.5 text-sm font-medium hover:bg-[#A86D4B] transition-colors disabled:opacity-60"
              >
                Demander mon accès →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3D3128] text-white/50 py-8 px-5 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C17F59]/30 to-transparent" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Logo size={24} variant="white" />
            <span className="text-white" style={{ fontFamily: 'Fraunces, serif' }}>répondimmo</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
