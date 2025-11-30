import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ChapterGrid } from "@/components/ChapterGrid";
import { BookReaderModal } from "@/components/BookReaderModal";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <HeroCarousel />
        <ChapterGrid onChapterClick={setSelectedChapter} />
      </main>

      <Footer />

      <BookReaderModal
        chapterId={selectedChapter}
        onClose={() => setSelectedChapter(null)}
      />
    </div>
  );
};

export default Index;
