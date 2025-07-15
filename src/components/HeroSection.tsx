
import { Button } from '@/components/ui/button';
import { ArrowDown, Star, Zap } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-20 relative overflow-hidden bg-background">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary border-4 border-foreground rotate-12 shadow-[8px_8px_0px_0px] shadow-foreground" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent border-4 border-foreground rotate-45 shadow-[6px_6px_0px_0px] shadow-foreground" />
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-secondary border-4 border-foreground -rotate-12 shadow-[4px_4px_0px_0px] shadow-foreground" />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary/50 border-4 border-foreground rotate-6 shadow-[6px_6px_0px_0px] shadow-foreground" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-foreground mb-4 transform -rotate-1 drop-shadow-[4px_4px_0px] drop-shadow-background">
              DOSEN
            </h1>
            <h1 className="text-6xl md:text-8xl font-black text-primary mb-4 transform rotate-1 drop-shadow-[4px_4px_0px] drop-shadow-background">
              SIGMA
            </h1>
            <div className="inline-block bg-accent border-4 border-foreground px-6 py-2 rotate-1 shadow-[8px_8px_0px_0px] shadow-foreground">
              <span className="text-2xl md:text-3xl font-bold text-foreground">2024</span>
            </div>
          </div>

          {/* Subtitle */}
          <div className="mb-12">
            <div className="bg-card border-4 border-foreground p-6 shadow-[8px_8px_0px_0px] shadow-foreground transform -rotate-1 inline-block max-w-2xl">
              <p className="text-xl md:text-2xl font-bold text-foreground">
                Fakultas Teknologi Informasi terdepan dengan dosen-dosen ahli yang siap membimbing masa depan digital Anda.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary border-4 border-foreground p-6 shadow-[6px_6px_0px_0px] shadow-foreground transform rotate-1">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-primary-foreground mr-2" />
                <span className="text-3xl font-black text-primary-foreground">10+</span>
              </div>
              <p className="font-bold text-primary-foreground">EXPERT DOSEN</p>
            </div>
            
            <div className="bg-accent border-4 border-foreground p-6 shadow-[6px_6px_0px_0px] shadow-foreground transform -rotate-1">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-8 h-8 text-foreground mr-2" />
                <span className="text-3xl font-black text-foreground">15+</span>
              </div>
              <p className="font-bold text-foreground">TAHUN PENGALAMAN</p>
            </div>
            
            <div className="bg-secondary border-4 border-foreground p-6 shadow-[6px_6px_0px_0px] shadow-foreground transform rotate-1">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-foreground mr-2" />
                <span className="text-3xl font-black text-foreground">4.8</span>
              </div>
              <p className="font-bold text-foreground">RATING RATA-RATA</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <Button
              onClick={scrollToAbout}
              className="bg-primary text-primary-foreground border-4 border-foreground shadow-[8px_8px_0px_0px] shadow-foreground hover:shadow-[4px_4px_0px_0px] hover:translate-x-[4px] hover:translate-y-[4px] transition-all font-black text-xl px-8 py-6 transform -rotate-1 hover:rotate-0"
            >
              LIHAT PROFIL DOSEN
              <ArrowDown className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
