import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { chapters } from "@/data/gitaData";

interface BookReaderModalProps {
  chapterId: number | null;
  onClose: () => void;
}

export const BookReaderModal = ({ chapterId, onClose }: BookReaderModalProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const chapter = chapterId ? chapters.find(c => c.id === chapterId) : null;

  useEffect(() => {
    setCurrentPage(0);
  }, [chapterId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!chapter) return;
      if (e.key === "ArrowLeft") previousPage();
      if (e.key === "ArrowRight") nextPage();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [chapter, currentPage]);

  if (!chapter) return null;

  const currentShloka = chapter.shlokas[currentPage];
  const totalPages = chapter.shlokas.length;

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <AnimatePresence>
      {chapterId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={onClose}
        >
          {/* Background Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Book Container */}
          <motion.div
            initial={{ scale: 0.8, rotateY: -90 }}
            animate={{ scale: 1, rotateY: 0 }}
            exit={{ scale: 0.8, rotateY: 90 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full"
            style={{ perspective: "2000px" }}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center bg-primary/20 border border-primary rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 z-10"
              aria-label="Close book"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Book Pages */}
            <div className="relative bg-card border-4 border-primary rounded-lg shadow-2xl overflow-hidden">
              {/* Ornamental Header */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-primary/20 to-transparent flex items-center justify-center border-b border-primary/30">
                <h3 className="font-cinzel text-xl text-primary gold-glow">
                  {chapter.title} - {chapter.subtitle}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-0 pt-16">
                {/* Left Page - Sanskrit */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`sanskrit-${currentPage}`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4 }}
                    className="p-8 md:p-12 parchment-texture min-h-[500px] flex flex-col justify-center border-r-2 border-primary/20"
                  >
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <span className="inline-block px-4 py-1 bg-ink/10 border border-ink/20 rounded-full font-cinzel text-ink text-sm">
                          Verse {currentShloka.id}
                        </span>
                      </div>
                      
                      <p className="font-sanskrit text-2xl md:text-3xl text-center leading-relaxed text-ink whitespace-pre-line">
                        {currentShloka.sanskrit}
                      </p>

                      {/* Decorative Divider */}
                      <div className="flex items-center justify-center gap-3 pt-8">
                        <span className="w-12 h-px bg-primary/40" />
                        <span className="text-primary text-xl">❖</span>
                        <span className="w-12 h-px bg-primary/40" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Right Page - English */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`english-${currentPage}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.4 }}
                    className="p-8 md:p-12 parchment-texture min-h-[500px] flex flex-col justify-center"
                  >
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <span className="inline-block px-4 py-1 bg-ink/10 border border-ink/20 rounded-full font-cinzel text-ink text-sm">
                          Translation
                        </span>
                      </div>

                      <p className="font-crimson text-xl md:text-2xl text-center leading-relaxed text-ink">
                        {currentShloka.translation}
                      </p>

                      {/* Decorative Divider */}
                      <div className="flex items-center justify-center gap-3 pt-8">
                        <span className="w-12 h-px bg-primary/40" />
                        <span className="text-primary text-xl">❖</span>
                        <span className="w-12 h-px bg-primary/40" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/20 to-transparent flex items-center justify-between px-8 border-t border-primary/30">
                <motion.button
                  whileHover={{ scale: 1.05, x: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={previousPage}
                  disabled={currentPage === 0}
                  className="flex items-center gap-2 px-6 py-2 bg-card border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-card disabled:hover:text-primary"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="font-cinzel text-sm">Previous</span>
                </motion.button>

                <span className="font-cinzel text-primary text-sm">
                  {currentPage + 1} / {totalPages}
                </span>

                <motion.button
                  whileHover={{ scale: 1.05, x: 3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1}
                  className="flex items-center gap-2 px-6 py-2 bg-card border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-card disabled:hover:text-primary"
                >
                  <span className="font-cinzel text-sm">Next</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
