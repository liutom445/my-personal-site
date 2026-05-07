// shared.jsx — components used across all pages

const PORTRAIT_SVG = (
  <div className="portrait-photo" style={{position:'absolute', inset:0}}>
    <img src="assets/portrait.png" alt="Hongyi Liu"
         style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}} />
    {/* warm paper-tone overlay — multiplies into highlights so the photo lifts toward butter-yellow */}
    <div className="portrait-tint" aria-hidden="true"
         style={{position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(241,234,215,0.35), rgba(184,141,72,0.22) 60%, rgba(47,93,99,0.28))', mixBlendMode:'multiply', pointerEvents:'none'}} />
    {/* salmon highlight wash — subtle, lifts shadows toward the dispatch palette */}
    <div className="portrait-wash" aria-hidden="true"
         style={{position:'absolute', inset:0, background:'radial-gradient(60% 50% at 30% 20%, rgba(224,122,95,0.18), transparent 70%)', mixBlendMode:'screen', pointerEvents:'none'}} />
    {/* paper grain on top */}
    <div aria-hidden="true"
         style={{position:'absolute', inset:0, pointerEvents:'none', mixBlendMode:'multiply', opacity:0.5,
                 backgroundImage:'radial-gradient(rgba(29,28,25,0.08) 1px, transparent 1px), radial-gradient(rgba(29,28,25,0.05) 1px, transparent 1px)',
                 backgroundSize:'3px 3px, 7px 7px', backgroundPosition:'0 0, 1px 2px'}} />
    {/* corner ticks */}
    <svg viewBox="0 0 300 400" preserveAspectRatio="none"
         style={{position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none'}}>
      <g stroke="#1d1c19" strokeWidth="1" fill="none">
        <path d="M 4 4 L 14 4 M 4 4 L 4 14"/>
        <path d="M 296 4 L 286 4 M 296 4 L 296 14"/>
        <path d="M 4 396 L 14 396 M 4 396 L 4 386"/>
        <path d="M 296 396 L 286 396 M 296 396 L 296 386"/>
      </g>
    </svg>
  </div>
);

// ── Top navigation, used on inner pages ──
function TopBar({ active, onNavigate }) {
  const links = [
    { href: 'index.html', label: 'Front Page', key: 'home' },
    { href: 'about.html', label: 'I · About', key: 'about' },
    { href: 'research.html', label: 'II · Research', key: 'research' },
  ];
  return (
    <nav className="topbar">
      <div className="l">
        {links.slice(0, 2).map(l => (
          <a key={l.key} href={l.href}
             className={active === l.key ? 'active' : ''}
             onClick={(e) => onNavigate && onNavigate(e, l.href, l.label)}>
            {l.label}
          </a>
        ))}
      </div>
      <a className="brand" href="index.html"
         onClick={(e) => onNavigate && onNavigate(e, 'index.html', 'Front Page')}>
        H · Liu
      </a>
      <div className="r">
        <a key="research" href="research.html"
           className={active === 'research' ? 'active' : ''}
           onClick={(e) => onNavigate && onNavigate(e, 'research.html', 'II · Research')}>
          II · Research
        </a>
        <a href="#cv">CV ↗</a>
      </div>
    </nav>
  );
}

// ── Curtain transition ──
function Curtain({ activeLabel, active }) {
  return (
    <div className={'curtain' + (active ? ' active' : '')} aria-hidden="true">
      <div className="top"><span className="label">{activeLabel}</span></div>
      <div className="mid"></div>
      <div className="bot"><span className="label">turn the page</span></div>
    </div>
  );
}

// hook: navigate between pages with a curtain wipe
function useChapterRouter() {
  const [curtainActive, setCurtainActive] = React.useState(false);
  const [curtainLabel, setCurtainLabel] = React.useState('');

  React.useEffect(() => {
    // play entry on mount
    const t = setTimeout(() => {}, 0);
    return () => clearTimeout(t);
  }, []);

  const go = (e, href, label) => {
    if (e) e.preventDefault();
    setCurtainLabel(label || '');
    setCurtainActive(true);
    setTimeout(() => { window.location.href = href; }, 460);
  };

  return { go, curtainActive, curtainLabel };
}

// ── Footer / colophon ──
function Colophon() {
  const c = window.SITE_CONTENT.contact;
  return (
    <footer className="colophon">
      <div className="c">
        <span className="lbl">Correspondence</span>
        <span>{c.email}</span>
        <span>orcid · {c.orcid}</span>
      </div>
      <div className="c center">
        <span className="lbl">Set in</span>
        <span>Cormorant · Playfair · JetBrains Mono</span>
        <span>© MMXXVI · Hongyi Liu</span>
      </div>
      <div className="c right">
        <span className="lbl">Filed under</span>
        <span>github · {c.github}</span>
        <span><a href={c.cv}>Download CV ↗</a></span>
      </div>
    </footer>
  );
}

// expose
Object.assign(window, { PORTRAIT_SVG, TopBar, Curtain, useChapterRouter, Colophon });
