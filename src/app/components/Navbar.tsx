import { useEffect, useRef, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
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
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="font-semibold text-xl">
            {portfolio.person.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={() => {
                    isClickLockedRef.current = true;
                    setActiveSection(item.id);
                  }}
                  className={`transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              type="button"
              className="rounded-full border border-gray-200 p-2 text-gray-700 hover:text-gray-900 hover:border-gray-300 transition-colors"
              onClick={() => setIsDark((prev) => !prev)}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              type="button"
              className="rounded-full border border-gray-200 p-2 text-gray-700 hover:text-gray-900 hover:border-gray-300 transition-colors"
              onClick={() => setIsDark((prev) => !prev)}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className=""
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={() => {
                  isClickLockedRef.current = true;
                  setActiveSection(item.id);
                  setIsOpen(false);
                }}
                className={`text-left transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
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
