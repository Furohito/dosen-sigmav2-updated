
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-primary border-4 border-background rotate-12" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent border-4 border-background -rotate-12" />
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-secondary border-4 border-background rotate-45" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="text-3xl font-black mb-4">
              DOSEN<span className="text-primary">SIGMA</span>
            </div>
            <p className="font-bold mb-6 text-background">
              Fakultas Teknologi Informasi terdepan dengan dosen-dosen ahli yang siap membimbing masa depan digital Anda.
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 bg-primary border-2 border-background flex items-center justify-center shadow-[4px_4px_0px_0px] shadow-background hover:shadow-[2px_2px_0px_0px] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer">
                <Github className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="w-12 h-12 bg-accent border-2 border-background flex items-center justify-center shadow-[4px_4px_0px_0px] shadow-background hover:shadow-[2px_2px_0px_0px] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer">
                <Linkedin className="w-6 h-6 text-foreground" />
              </div>
              <div className="w-12 h-12 bg-secondary border-2 border-background flex items-center justify-center shadow-[4px_4px_0px_0px] shadow-background hover:shadow-[2px_2px_0px_0px] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer">
                <Twitter className="w-6 h-6 text-foreground" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-black mb-6 bg-primary border-2 border-background px-4 py-2 shadow-[4px_4px_0px_0px] shadow-background inline-block text-primary-foreground">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 font-bold text-background">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h3 className="text-xl font-black mb-6 bg-accent border-2 border-background px-4 py-2 shadow-[4px_4px_0px_0px] shadow-background inline-block text-foreground">
              SPECIALIZATIONS
            </h3>
            <ul className="space-y-3 font-bold text-background">
              <li>Artificial Intelligence</li>
              <li>Cybersecurity</li>
              <li>Data Science</li>
              <li>Web Development</li>
              <li>Mobile Apps</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-black mb-6 bg-secondary border-2 border-background px-4 py-2 shadow-[4px_4px_0px_0px] shadow-background inline-block text-foreground">
              CONTACT
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary border-2 border-background flex items-center justify-center mr-3">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-background">info@dosensigma.ac.id</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent border-2 border-background flex items-center justify-center mr-3">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <span className="font-bold text-background">+62 21 1234 5678</span>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-secondary border-2 border-background flex items-center justify-center mr-3 mt-1">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <span className="font-bold text-background">Jl. Teknologi No. 123<br />Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-4 border-background pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-bold mb-4 md:mb-0 text-background">
              © 2024 DOSENSIGMA. All rights reserved.
            </p>
            <div className="flex space-x-6 font-bold text-background">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
