import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-primary/30"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3"
        >
          <img src={logo} alt="Digital Granth Logo" className="w-12 h-12" />
          <div>
            <h1 className="font-cinzel text-xl md:text-2xl text-primary gold-glow">
              Digital Granth
            </h1>
            <p className="font-sanskrit text-xs md:text-sm text-foreground/70">
              श्रीमद्भगवद्गीता
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 bg-card border border-primary/30 rounded-full"
        >
          <span className="font-cinzel text-sm text-primary">
            ॐ तत् सत्
          </span>
        </motion.div>
      </div>
    </motion.header>
  );
};
