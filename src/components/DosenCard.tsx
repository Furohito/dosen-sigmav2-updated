
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, GraduationCap, Star } from 'lucide-react';

interface DosenCardProps {
  dosen: {
    id: number;
    name: string;
    title: string;
    specialization: string;
    image: string;
    experience: string;
    rating: number;
    email: string;
    phone: string;
    location: string;
    education: string;
    achievements: string[];
    courses: string[];
  };
  onViewDetails: (dosen: any) => void;
}

const DosenCard = ({ dosen, onViewDetails }: DosenCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="relative overflow-hidden bg-card border-4 border-foreground shadow-[8px_8px_0px_0px] shadow-foreground hover:shadow-[4px_4px_0px_0px] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300 transform hover:rotate-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative p-6 space-y-4">
        {/* Profile Image */}
        <div className="relative mx-auto w-24 h-24 border-4 border-foreground shadow-[4px_4px_0px_0px] shadow-foreground overflow-hidden bg-primary">
          <img
            src={`/photos/${dosen.image}`}
            alt={dosen.name}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        </div>

        {/* Name and Title */}
        <div className="text-center space-y-2">
          <h3 className="text-lg font-black text-foreground">
            {dosen.name}
          </h3>
          <p className="text-sm font-bold text-primary">{dosen.title}</p>
          <div className="inline-block">
            <Badge className="bg-accent text-foreground border-2 border-foreground shadow-[2px_2px_0px_0px] shadow-foreground font-bold">
              {dosen.specialization}
            </Badge>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-center items-center space-x-4 text-sm">
          <div className="flex items-center space-x-1 bg-primary border-2 border-foreground px-2 py-1 shadow-[2px_2px_0px_0px] shadow-foreground">
            <Star className="w-4 h-4 fill-current text-primary-foreground" />
            <span className="font-bold text-primary-foreground">{dosen.rating}</span>
          </div>
          <div className="flex items-center space-x-1 bg-secondary border-2 border-foreground px-2 py-1 shadow-[2px_2px_0px_0px] shadow-foreground">
            <GraduationCap className="w-4 h-4 text-foreground" />
            <span className="font-bold text-foreground">{dosen.experience}</span>
          </div>
        </div>

        {/* Action Button */}
        <Button
          onClick={() => onViewDetails(dosen)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border-2 border-foreground shadow-[4px_4px_0px_0px] shadow-foreground hover:shadow-[2px_2px_0px_0px] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-bold"
        >
          <Eye className="w-4 h-4 mr-2" />
          VIEW DETAILS
        </Button>
      </div>
    </Card>
  );
};

export default DosenCard;
