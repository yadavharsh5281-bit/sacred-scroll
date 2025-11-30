import { motion } from "framer-motion";
import { chapters } from "@/data/gitaData";
import bookCover from "@/assets/book-cover.jpg";

interface ChapterGridProps {
  onChapterClick: (chapterId: number) => void;
}

export const ChapterGrid = ({ onChapterClick }: ChapterGridProps) => {
  return (
    <section className="py-20 px-4 bg-parchment relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--ink)) 35px, hsl(var(--ink)) 36px)',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-5xl md:text-6xl text-primary mb-4 tracking-wider">
            GITA CHAPTERS
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className="w-24 h-px bg-primary/40" />
            <span className="text-primary text-2xl">❖</span>
            <span className="w-24 h-px bg-primary/40" />
          </div>
        </motion.div>

        {/* Chapter Books Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {chapters.map((chapter, index) => (
            <motion.button
              key={chapter.id}
              initial={{ opacity: 0, scale: 0.8, rotateZ: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateZ: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ 
                scale: 1.15,
                rotateZ: 5,
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onChapterClick(chapter.id)}
              className="group relative"
            >
              {/* Diamond/Book Shape Container */}
              <div className="relative aspect-square">
                {/* Diamond Background */}
                <div className="absolute inset-0 rotate-45 overflow-hidden rounded-lg shadow-2xl border-4 border-primary/60 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-all duration-300">
                  {/* Book Cover Image */}
                  <div className="w-full h-full -rotate-45 scale-150">
                    <img 
                      src={bookCover} 
                      alt={`Chapter ${chapter.id}`}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-ink/40 group-hover:from-primary/30 transition-all duration-300" />
                </div>

                {/* Chapter Number - Centered */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="bg-parchment/95 border-2 border-primary rounded-full w-16 h-16 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary group-hover:border-primary-foreground transition-all duration-300">
                    <span className="font-cinzel text-2xl font-bold text-ink group-hover:text-primary-foreground">
                      {chapter.id}
                    </span>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rotate-45 rounded-lg blur-xl bg-primary/30" />
                </div>
              </div>

              {/* Chapter Title Below */}
              <div className="mt-4 text-center">
                <p className="font-sanskrit text-sm text-ink/80 group-hover:text-primary transition-colors">
                  {chapter.shortTitle || `अध्याय ${chapter.id}`}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
