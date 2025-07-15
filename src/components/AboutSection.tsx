
import { useState } from 'react';
import DosenCard from '@/components/DosenCard';
import DosenModal from '@/components/DosenModal';
import { dosenData } from '@/data/dosenData';

const AboutSection = () => {
  const [selectedDosen, setSelectedDosen] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (dosen: any) => {
    setSelectedDosen(dosen);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDosen(null);
  };

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary/20 border-4 border-foreground rotate-12 shadow-[8px_8px_0px_0px] shadow-foreground" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent/30 border-4 border-foreground -rotate-12 shadow-[6px_6px_0px_0px] shadow-foreground" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-secondary/40 border-4 border-foreground rotate-45 shadow-[4px_4px_0px_0px] shadow-foreground" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary border-4 border-foreground px-6 py-2 rotate-1 shadow-[8px_8px_0px_0px] shadow-foreground mb-6">
            <span className="text-lg font-bold text-primary-foreground">ABOUT US</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 transform -rotate-1">
            MEET OUR
          </h2>
          <h2 className="text-5xl md:text-6xl font-black text-primary mb-8 transform rotate-1">
            PROFESSORS
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-xl font-bold text-foreground bg-card border-4 border-foreground p-6 shadow-[8px_8px_0px_0px] shadow-foreground transform rotate-1">
              Para ahli teknologi dengan pengalaman bertahun-tahun di bidangnya masing-masing. 
              Siap membimbing dan berbagi ilmu untuk masa depan teknologi yang lebih cerah!
            </p>
          </div>
        </div>

        {/* Dosen Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {dosenData.map((dosen, index) => (
            <div
              key={dosen.id}
              className="transform transition-all duration-300 hover:scale-105"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transform: index % 2 === 0 ? 'rotate(1deg)' : 'rotate(-1deg)'
              }}
            >
              <DosenCard
                dosen={dosen}
                onViewDetails={handleViewDetails}
              />
            </div>
          ))}
        </div>

        {/* Fun Facts */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-primary border-4 border-foreground p-6 shadow-[6px_6px_0px_0px] shadow-foreground transform rotate-2">
            <h3 className="text-2xl font-black text-primary-foreground mb-2">500+</h3>
            <p className="font-bold text-primary-foreground">Mahasiswa Dibimbing</p>
          </div>
          
          <div className="bg-accent border-4 border-foreground p-6 shadow-[6px_6px_0px_0px] shadow-foreground transform -rotate-1">
            <h3 className="text-2xl font-black text-foreground mb-2">100+</h3>
            <p className="font-bold text-foreground">Penelitian Published</p>
          </div>
          
          <div className="bg-secondary border-4 border-foreground p-6 shadow-[6px_6px_0px_0px] shadow-foreground transform rotate-1">
            <h3 className="text-2xl font-black text-foreground mb-2">25+</h3>
            <p className="font-bold text-foreground">Penghargaan Diterima</p>
          </div>
          
          <div className="bg-card border-4 border-foreground p-6 shadow-[6px_6px_0px_0px] shadow-foreground transform -rotate-2">
            <h3 className="text-2xl font-black text-foreground mb-2">15+</h3>
            <p className="font-bold text-foreground">Mata Kuliah Tersedia</p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <DosenModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        dosen={selectedDosen}
      />
    </section>
  );
};

export default AboutSection;
