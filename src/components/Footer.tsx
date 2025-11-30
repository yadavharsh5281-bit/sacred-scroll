import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="relative py-12 wood-texture border-t-2 border-primary/30">
      {/* Ornamental Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-32 h-px bg-primary/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-primary/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          {/* Sacred Symbol */}
          <div className="flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-6xl text-primary gold-glow"
            >
              ॐ
            </motion.div>
          </div>

          {/* Sanskrit Blessing */}
          <p className="font-sanskrit text-2xl text-primary">
            ॐ तत् सत्
          </p>

          {/* Quote */}
          <blockquote className="font-crimson text-lg text-foreground/80 italic max-w-2xl mx-auto">
            "The soul is neither born, and nor does it die. It is unborn, eternal, ever-existing, and primeval."
          </blockquote>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-16 h-px bg-primary/30" />
            <span className="text-primary text-xl">❖</span>
            <span className="w-16 h-px bg-primary/30" />
          </div>

          {/* Credits */}
          <div className="space-y-2">
            <p className="font-cinzel text-sm text-foreground/60">
              Digital Granth - Preserving Ancient Wisdom
            </p>
            <p className="font-crimson text-xs text-foreground/50">
              Created with reverence for the eternal teachings of the Bhagavad Gita
            </p>
          </div>

          {/* Copyright */}
          <p className="font-cinzel text-xs text-foreground/40 pt-4">
            © {new Date().getFullYear()} Digital Granth. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent pointer-events-none" />
    </footer>
  );
};
