
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, GraduationCap, Star, Award, BookOpen, X } from 'lucide-react';

interface DosenModalProps {
  isOpen: boolean;
  onClose: () => void;
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
  } | null;
}

const DosenModal = ({ isOpen, onClose, dosen }: DosenModalProps) => {
  if (!dosen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card/95 backdrop-blur-sm border border-primary/20 text-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
            Profil Dosen
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                  <img
                    src={`/photos/${dosen.image}`}
                    alt={dosen.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left space-y-2">
              <h2 className="text-2xl font-bold text-foreground">{dosen.name}</h2>
              <p className="text-lg text-primary/80">{dosen.title}</p>
              <Badge className="bg-primary/20 text-primary border-primary/30">
                {dosen.specialization}
              </Badge>
              <div className="flex justify-center md:justify-start items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1 text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{dosen.rating}</span>
                </div>
                <div className="flex items-center space-x-1 text-primary">
                  <GraduationCap className="w-4 h-4" />
                  <span>{dosen.experience}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{dosen.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <Phone className="w-4 h-4" />
                <span className="text-sm">{dosen.phone}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{dosen.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm">{dosen.education}</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-primary">
              <Award className="w-5 h-5" />
              <h3 className="text-lg font-semibold">Prestasi</h3>
            </div>
            <div className="space-y-2">
              {dosen.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-primary">
              <BookOpen className="w-5 h-5" />
              <h3 className="text-lg font-semibold">Mata Kuliah</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {dosen.courses.map((course, index) => (
                <Badge key={index} variant="outline" className="bg-primary/10 text-primary border-primary/30">
                  {course}
                </Badge>
              ))}
            </div>
          </div>

          {/* Close Button */}
          <div className="flex justify-center pt-4">
            <Button onClick={onClose} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <X className="w-4 h-4 mr-2" />
              Tutup
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DosenModal;
