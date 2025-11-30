import { motion } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { NavigationLink } from "./NavigationLink";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { name: "Ayurveda", href: "#ayurveda" },
    { name: "Yogasūtras", href: "#yogasutras" },
    { name: "Bhagavad Gītā", href: "#gita", active: true },
    { name: "Upaniṣads", href: "#upanisads" },
    { name: "Sanskrit", href: "#sanskrit" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-primary/30"
    >
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <img src={logo} alt="Digital Granth Logo" className="w-10 h-10" />
            <div>
              <h1 className="font-cinzel text-lg md:text-xl text-primary gold-glow">
                Digital Granth
              </h1>
              <p className="font-sanskrit text-xs text-foreground/70 hidden sm:block">
                श्रीमद्भगवद्गीता
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavigationLink key={link.name} {...link} />
            ))}
          </nav>

          {/* Right Section - Search & Menu */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5 text-primary" />
            </motion.button>

            {/* Sacred Symbol */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex px-3 py-1 bg-card border border-primary/30 rounded-full"
            >
              <span className="font-cinzel text-sm text-primary">ॐ</span>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-primary" />
              ) : (
                <Menu className="w-5 h-5 text-primary" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pb-2"
          >
            <input
              type="text"
              placeholder="Search verses, chapters..."
              className="w-full px-4 py-2 bg-card border border-primary/30 rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 font-crimson"
              autoFocus
            />
          </motion.div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4 flex flex-col gap-3"
          >
            {navLinks.map((link) => (
              <NavigationLink key={link.name} {...link} mobile />
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};
