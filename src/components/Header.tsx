
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-foreground shadow-[8px_8px_0px_0px] shadow-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-black text-foreground">
            DOSEN<span className="text-primary">SIGMA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-lg font-bold text-foreground hover:text-primary transition-colors duration-200 transform hover:scale-105"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-lg font-bold text-foreground hover:text-primary transition-colors duration-200 transform hover:scale-105"
            >
              ABOUT
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 border-2 border-foreground bg-primary text-primary-foreground shadow-[4px_4px_0px_0px] shadow-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 p-4 bg-card border-2 border-foreground shadow-[4px_4px_0px_0px] shadow-foreground">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-lg font-bold text-foreground hover:text-primary"
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-lg font-bold text-foreground hover:text-primary"
              >
                ABOUT
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
