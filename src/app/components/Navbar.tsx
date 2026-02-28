import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isDark, setIsDark] = useState(false);
  const isClickLockedRef = useRef(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
  ];

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = storedTheme ? storedTheme === 'dark' : prefersDark;
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && navItems.some((item) => item.id === hash)) {
        isClickLockedRef.current = true;
        setActiveSection(hash);
      }
    };

    const handleScroll = () => {
      if (isClickLockedRef.current) return;

      const offset = 120;
      let currentId = navItems[0]?.id ?? 'about';
      let closestTop = -Infinity;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset && rect.top > closestTop) {
          closestTop = rect.top;
          currentId = item.id;
        }
      }

      setActiveSection(currentId);
    };

    const unlockOnUserScroll = () => {
      isClickLockedRef.current = false;
    };

    syncFromHash();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', syncFromHash);
    window.addEventListener('wheel', unlockOnUserScroll, { passive: true });
    window.addEventListener('touchmove', unlockOnUserScroll, { passive: true });
    window.addEventListener('keydown', unlockOnUserScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', syncFromHash);
      window.removeEventListener('wheel', unlockOnUserScroll);
      window.removeEventListener('touchmove', unlockOnUserScroll);
      window.removeEventListener('keydown', unlockOnUserScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          <a href="/" className="navbar-brand">
            {portfolio.person.name}
          </a>

          {/* Desktop Navigation */}
          <div className="navbar-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={() => {
                  isClickLockedRef.current = true;
                  setActiveSection(item.id);
                }}
                className={`navbar-link ${
                  activeSection === item.id ? 'navbar-link-active' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="navbar-mobile-actions">
            <button
              className="navbar-mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="navbar-mobile-menu">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={() => {
                  isClickLockedRef.current = true;
                  setActiveSection(item.id);
                  setIsOpen(false);
                }}
                className={`navbar-link navbar-link-mobile ${
                  activeSection === item.id ? 'navbar-link-active' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
