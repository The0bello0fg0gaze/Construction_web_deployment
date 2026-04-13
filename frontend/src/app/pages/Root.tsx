import { Outlet, Link, useLocation } from "react-router";
import { HardHat, Menu, X, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

export default function Root() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "About Us", path: "/about" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 font-sans text-neutral-900">
      <header className="sticky top-0 z-50 w-full bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-amber-500 text-white p-2.5 rounded-lg group-hover:bg-amber-600 transition-colors">
                <HardHat className="w-6 h-6" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-neutral-900">BuildCorp</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors hover:text-amber-600 ${
                    location.pathname === link.path ? "text-amber-600" : "text-neutral-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/verify"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-colors"
              >
                Verification Portal
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-neutral-500 hover:text-neutral-900 focus:outline-none p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-100 px-4 pt-2 pb-6 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? "bg-amber-50 text-amber-700"
                    : "text-neutral-700 hover:bg-neutral-50 hover:text-amber-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/verify"
              className="mt-4 block w-full text-center bg-neutral-900 hover:bg-neutral-800 text-white px-5 py-3 rounded-md text-base font-semibold"
            >
              Verification Portal
            </Link>
          </div>
        )}
      </header>

      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      <footer className="bg-neutral-900 text-white py-12 lg:py-16 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1 lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 group mb-4">
                <div className="bg-amber-500 text-white p-2 rounded-md">
                  <HardHat className="w-5 h-5" />
                </div>
                <span className="font-bold text-xl tracking-tight">BuildCorp</span>
              </Link>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Building the future with uncompromising quality, safety, and integrity. Your trusted construction partner for commercial and residential developments.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li><Link to="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li>
                <li><Link to="/projects" className="hover:text-amber-500 transition-colors">Our Projects</Link></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Commercial Construction</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Residential Development</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Infrastructure</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Pre-construction Planning</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Transparency Policy</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Verify the authenticity of our interns' certificates securely through our dedicated portal.
		</p>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
            <p>&copy; {new Date().getFullYear()} BuildCorp Construction. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
