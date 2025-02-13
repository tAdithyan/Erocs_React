import { useState } from "react";
import { Facebook, Instagram, Twitter, PinIcon as Pinterest } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Leslie Alexander",
    role: "Programmer",
    image:
    "https://gramentheme.com/html/xstar/assets/img/team/team1.png",   
     socials: true,
  },
  {
    name: "Darlene Robertson",
    role: "UI/UX designer",
    image:
    "https://gramentheme.com/html/xstar/assets/img/team/team1.png",    
    socials: true,

  },
  {
    name: "Marvin McKinney",
    role: "Web developer",
    image:
    "https://gramentheme.com/html/xstar/assets/img/team/team1.png",  
    socials: true,
 
  },
  {
    name: "Esther Howard",
    role: "CEO",
    image:
    "https://gramentheme.com/html/xstar/assets/img/team/team1.png", 
    socials: true,
 
     
     },
];

export default function TeamSection() {
  return (
    <section className="bg-black px-4 py-8 sm:py-12 md:px-6 md:py-16 lg:px-8 min-h-screen items-center justify-center flex">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3 sm:space-y-4">
            <span className="inline-block rounded-full bg-[#1a1a1a] px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-[#9bf00b]">
              OUR EXPERTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Meet Our <span className="font-serif italic font-normal">Creative</span> Staff
            </h2>
          </div>
          <button className="hidden sm:inline-flex items-center text-white hover:text-[#9bf00b] transition-colors">
            View All Teams
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
          {teamMembers.map((member) => (
            <HoverCard key={member.name} member={member} />
          ))}
        </div>

        <button className="mt-8 w-full sm:hidden text-white hover:text-[#9bf00b] transition-colors">
          View All Teams
          <span className="ml-2">→</span>
        </button>
      </div>
    </section>
  );
}

function HoverCard({ member }: { member: TeamMember }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget.getBoundingClientRect();
    const centerX = card.left + card.width / 2;
    const centerY = card.top + card.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Reduce rotation amount on smaller screens
    const rotationFactor = window.innerWidth < 768 ? 20 : 40;
    const rotateX = (mouseY / card.height) * rotationFactor;
    const rotateY = (mouseX / card.width) * rotationFactor;
  
    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <div className="group relative">
      <div
        className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-200 ease-out hover:shadow-xl  w-fit mx-auto"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.02)`,
          transition: "transform 0.1s ease-out",
          boxShadow: `0px 15px 40px rgba(192,192,192,0.3)`,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      >
        <div className="aspect-w-4 aspect-h-3 w-full">
          <img
            src={member.image}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {member.socials && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#9bf00b] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex gap-3 sm:gap-4">
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer text-black transition-transform hover:scale-110" />
              <Instagram className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer text-black transition-transform hover:scale-110" />
              <Twitter className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer text-black transition-transform hover:scale-110" />
              <Pinterest className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer text-black transition-transform hover:scale-110" />
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 space-y-1 sm:space-y-2 text-center">
        <h3 className="text-lg sm:text-xl font-semibold text-white">{member.name}</h3>
        <p className="text-xs sm:text-sm text-gray-400">{member.role}</p>
      </div>
    </div>
  );
}