import { motion } from "framer-motion";
import { chapters } from "@/data/gitaData";

interface ChapterGridProps {
  onChapterClick: (chapterId: number) => void;
}

export const ChapterGrid = ({ onChapterClick }: ChapterGridProps) => {
  return (
    <section className="py-20 px-4 wood-texture">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-cinzel text-4xl md:text-5xl text-primary gold-glow mb-4">
            Ancient Chapters
          </h2>
          <p className="font-crimson text-lg text-foreground/80">
            Discover the eternal wisdom preserved through centuries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((chapter, index) => (
            <motion.button
              key={chapter.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onClick={() => onChapterClick(chapter.id)}
              className="group relative p-8 bg-card border-2 border-primary/30 rounded-lg overflow-hidden ancient-shadow hover:gold-border transition-all duration-300"
            >
              {/* Ornamental Corners */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/50" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50" />

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 transition-all duration-500" />

              <div className="relative z-10">
                {/* Chapter Number */}
                <div className="inline-block px-4 py-1 mb-4 bg-primary/20 border border-primary/40 rounded-full">
                  <span className="font-cinzel text-primary text-sm">
                    Chapter {chapter.id}
                  </span>
                </div>

                {/* Sanskrit Title */}
                <h3 className="font-sanskrit text-2xl text-primary mb-3 group-hover:gold-glow transition-all duration-300">
                  {chapter.title}
                </h3>

                {/* English Subtitle */}
                <p className="font-crimson text-base text-foreground/70 mb-4">
                  {chapter.subtitle}
                </p>

                {/* Verse Count */}
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span className="w-8 h-px bg-primary/30" />
                  <span className="font-cinzel">{chapter.shlokas.length} Verses</span>
                  <span className="w-8 h-px bg-primary/30" />
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
