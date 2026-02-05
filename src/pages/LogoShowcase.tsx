import { useState } from 'react'
import { motion } from 'motion/react'

// ─── LOGO CONCEPTS ────────────────────────────────────

type LogoProps = { size?: number }

// 1. Roofline R — Serif R with peaked roof above
function LogoRooflineR({ size = 64 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="7" fill="#C17F59" />
      <path d="M7 11L16 5.5L25 11" stroke="#FDF8F3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path
        fillRule="evenodd" clipRule="evenodd"
        d="M10 11H18C20.8 11 22.5 13 22.5 15C22.5 16.8 21.2 18.2 19.2 18.5L23 25H19.8L16.2 19H13V25H10V11ZM13 16.5H17.5C19 16.5 19.8 15.7 19.8 15C19.8 14.3 19 13.5 17.5 13.5H13V16.5Z"
        fill="#FDF8F3"
      />
    </svg>
  )
}

// 2. Chat House — House silhouette as speech bubble
function LogoChatHouse({ size = 64 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="7" fill="#3D3128" />
      <path d="M16 5L6 13V23H11L15 27V23H26V13L16 5Z" fill="#C17F59" />
      <rect x="13" y="15" width="6" height="4.5" rx="0.8" fill="#3D3128" opacity="0.4" />
    </svg>
  )
}

// 3. Keystone Arch — Architectural arch with arrow
function LogoKeystone({ size = 64 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="7" fill="#C17F59" />
      <path d="M9 26V15C9 10 12 6 16 6C20 6 23 10 23 15V26" stroke="#FDF8F3" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M11 16H21M21 16L18 13M21 16L18 19" stroke="#FDF8F3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="9" y1="26" x2="23" y2="26" stroke="#FDF8F3" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

// 4. Slab Foundation R — Bold R with architectural base
function LogoSlabR({ size = 64 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="7" fill="#3D3128" />
      <path
        fillRule="evenodd" clipRule="evenodd"
        d="M9 7H19C22 7 24 9.5 24 12.5C24 15 22.5 16.8 20 17.3L24.5 24H21L17 17.5H13V24H9.5V7ZM13 14.5H18.5C20 14.5 21 13.5 21 12.5C21 11.5 20 10.5 18.5 10.5H13V14.5Z"
        fill="#C17F59"
      />
      <rect x="7" y="25" width="18" height="2" rx="1" fill="#C17F59" />
    </svg>
  )
}

// 5. Envelope Roof — Clean envelope with roofline flap
function LogoEnvelopeRoof({ size = 64 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="7" fill="#C17F59" />
      <rect x="6" y="13" width="20" height="13" rx="2" stroke="#FDF8F3" strokeWidth="1.5" fill="none" />
      <path d="M6 13L16 6L26 13" stroke="#FDF8F3" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M7 14L16 20L25 14" stroke="#FDF8F3" strokeWidth="1" fill="none" strokeLinejoin="round" opacity="0.4" />
    </svg>
  )
}

// 6. Window Send — Window grid with send arrow in one pane
function LogoWindowSend({ size = 64 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="7" fill="#FDF8F3" />
      <rect x="7" y="7" width="18" height="18" rx="2.5" stroke="#3D3128" strokeWidth="1.6" fill="none" />
      <line x1="16" y1="7" x2="16" y2="25" stroke="#3D3128" strokeWidth="1.6" />
      <line x1="7" y1="16" x2="25" y2="16" stroke="#3D3128" strokeWidth="1.6" />
      <circle cx="11.5" cy="11.5" r="1.8" fill="#C17F59" />
      <path d="M19 20L23 20M23 20L21 18M23 20L21 22" stroke="#C17F59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// 7. Lightning House — House with bolt through it
function LogoLightningHouse({ size = 64 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="7" fill="#3D3128" />
      <path d="M16 4L5 14H9V27H23V14H27L16 4Z" fill="#5D4E3C" />
      <path d="M18 7L13 17H17L12 27L22 15H17L21 7H18Z" fill="#C17F59" />
    </svg>
  )
}

// 8. Compass Direction — Diamond compass shape with arrow
function LogoCompass({ size = 64 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="7" fill="#C17F59" />
      <path d="M16 5L27 16L16 27L5 16Z" stroke="#FDF8F3" strokeWidth="1.5" fill="none" />
      <path d="M11 16H21M21 16L18 13M21 16L18 19" stroke="#FDF8F3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// 9. Skyline Speed — Abstract buildings with speed arrow
function LogoSkylineSpeed({ size = 64 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="7" fill="#3D3128" />
      <rect x="7" y="10" width="5" height="16" rx="1" fill="#C17F59" />
      <rect x="14" y="14" width="5" height="12" rx="1" fill="#C17F59" opacity="0.7" />
      <rect x="21" y="18" width="5" height="8" rx="1" fill="#C17F59" opacity="0.4" />
      <path d="M9 13L24 8" stroke="#FDF8F3" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M24 8L21 10M24 8L22 5.5" stroke="#FDF8F3" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// 10. Door Reply — Door frame with reply arrow inside
function LogoDoorReply({ size = 64 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="7" fill="#C17F59" />
      <path d="M10 27V9C10 7.5 11 6 13 6H19C21 6 22 7.5 22 9V27" stroke="#FDF8F3" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M10 9C10 9 12.5 6.5 16 6.5C19.5 6.5 22 9 22 9" stroke="#FDF8F3" strokeWidth="1.5" fill="none" />
      <line x1="8" y1="27" x2="24" y2="27" stroke="#FDF8F3" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 18H19.5C20.5 18 21.5 17 21.5 16C21.5 15 20.5 14 19.5 14H15.5" stroke="#FDF8F3" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M17 12L15 14L17 16" stroke="#FDF8F3" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

// ─── LOGO DATA ────────────────────────────────────────

const logos = [
  {
    id: 'roofline-r',
    name: 'Roofline R',
    desc: 'Le R surmonté d\'un toit — typographique et immobilier.',
    tags: ['typographique', 'toit'],
    Component: LogoRooflineR,
  },
  {
    id: 'chat-house',
    name: 'Chat House',
    desc: 'La maison-bulle — immobilier + réponse instantanée.',
    tags: ['icône', 'bulle'],
    Component: LogoChatHouse,
  },
  {
    id: 'keystone',
    name: 'Keystone',
    desc: 'L\'arche architecturale avec flèche directionnelle.',
    tags: ['archi', 'flèche'],
    Component: LogoKeystone,
  },
  {
    id: 'slab-r',
    name: 'Slab R',
    desc: 'Le R monumental sur sa fondation — solidité + présence.',
    tags: ['typographique', 'fondation'],
    Component: LogoSlabR,
  },
  {
    id: 'envelope-roof',
    name: 'Envelope Roof',
    desc: 'L\'enveloppe dont le rabat forme un toit — email + immo.',
    tags: ['enveloppe', 'toit'],
    Component: LogoEnvelopeRoof,
  },
  {
    id: 'window-send',
    name: 'Window Send',
    desc: 'La fenêtre à carreaux, un carreau actif — discret et malin.',
    tags: ['fenêtre', 'envoi'],
    Component: LogoWindowSend,
  },
  {
    id: 'lightning-house',
    name: 'Lightning House',
    desc: 'L\'éclair traverse la maison — vitesse brute.',
    tags: ['éclair', 'maison'],
    Component: LogoLightningHouse,
  },
  {
    id: 'compass',
    name: 'Compass',
    desc: 'Le diamant-boussole — direction et précision.',
    tags: ['géométrique', 'flèche'],
    Component: LogoCompass,
  },
  {
    id: 'skyline-speed',
    name: 'Skyline Speed',
    desc: 'Les buildings en cascade avec flèche — urbanisme + rapidité.',
    tags: ['skyline', 'vitesse'],
    Component: LogoSkylineSpeed,
  },
  {
    id: 'door-reply',
    name: 'Door Reply',
    desc: 'La porte avec flèche de retour — accueil + réponse.',
    tags: ['porte', 'reply'],
    Component: LogoDoorReply,
  },
]

// ─── SHOWCASE PAGE ────────────────────────────────────

export default function LogoShowcase() {
  const [selected, setSelected] = useState<string | null>(null)
  const [darkPreview, setDarkPreview] = useState(false)

  return (
    <div className="min-h-screen bg-[#1A1612] text-[#FDF8F3]" style={{ fontFamily: 'Lexend, sans-serif' }}>

      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '128px 128px',
      }} />

      {/* Header */}
      <header className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <div>
            <a href="/" className="text-[#C17F59] text-xs tracking-widest uppercase hover:text-white/60 transition-colors">
              ← Retour au site
            </a>
            <h1
              className="text-2xl md:text-3xl mt-2 text-white"
              style={{ fontFamily: 'Fraunces, serif' }}
            >
              Logo <em className="text-[#C17F59] not-italic">Showcase</em>
            </h1>
            <p className="text-sm text-white/40 mt-1">10 concepts — choisissez votre marque.</p>
          </div>
          <button
            onClick={() => setDarkPreview(!darkPreview)}
            className="text-xs border border-white/10 px-4 py-2 rounded-full text-white/50 hover:text-white hover:border-white/30 transition-all"
          >
            {darkPreview ? 'Fond clair' : 'Fond foncé'}
          </button>
        </div>
      </header>

      {/* Grid */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {logos.map((logo, i) => {
            const isSelected = selected === logo.id
            return (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onClick={() => setSelected(isSelected ? null : logo.id)}
                className={`group cursor-pointer rounded-2xl border transition-all duration-300 ${
                  isSelected
                    ? 'border-[#C17F59] bg-[#C17F59]/5 shadow-lg shadow-[#C17F59]/10'
                    : 'border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
                }`}
              >
                {/* Preview area */}
                <div className={`p-8 flex items-center justify-center gap-6 rounded-t-2xl transition-colors ${
                  darkPreview ? 'bg-[#3D3128]' : 'bg-[#FDF8F3]'
                }`}>
                  {/* Large */}
                  <logo.Component size={64} />
                  {/* Medium */}
                  <logo.Component size={40} />
                  {/* Favicon */}
                  <logo.Component size={24} />
                  {/* Wordmark combo */}
                  <div className="flex items-center gap-2 ml-4 pl-4 border-l border-black/10">
                    <logo.Component size={28} />
                    <span
                      className={`text-sm tracking-tight ${darkPreview ? 'text-white' : 'text-[#3D3128]'}`}
                      style={{ fontFamily: 'Fraunces, serif' }}
                    >
                      répondimmo
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-6 py-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-white font-medium">{logo.name}</h3>
                      <span className="text-[10px] text-white/20 font-mono">#{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <p className="text-sm text-white/40 mt-0.5">{logo.desc}</p>
                    <div className="flex gap-2 mt-2">
                      {logo.tags.map(tag => (
                        <span key={tag} className="text-[10px] text-[#C17F59]/60 border border-[#C17F59]/15 rounded-full px-2 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all shrink-0 mt-1 ${
                    isSelected
                      ? 'border-[#C17F59] bg-[#C17F59] text-white'
                      : 'border-white/10 text-transparent group-hover:border-white/20'
                  }`}>
                    {isSelected && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Selected summary */}
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <p className="text-white/40 text-sm">
              Sélectionné : <span className="text-[#C17F59] font-medium">{logos.find(l => l.id === selected)?.name}</span>
            </p>
          </motion.div>
        )}
      </main>
    </div>
  )
}
