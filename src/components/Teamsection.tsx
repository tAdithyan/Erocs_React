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
  },
  {
    name: "Marvin McKinney",
    role: "Web developer",
    image:
      "https://gramentheme.com/html/xstar/assets/img/team/team1.png",
  },
  {
    name: "Esther Howard",
    role: "CEO",
    image:
      "https://gramentheme.com/html/xstar/assets/img/team/team1.png",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-black px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-between">
          <div className="space-y-4">
            <span className="inline-block rounded-full bg-[#1a1a1a] px-4 py-1.5 text-sm font-medium text-[#9bf00b]">
              OUR EXPERTS
            </span>
            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Meet Our <span className="font-serif italic font-normal">Creative</span> Staff
            </h2>
          </div>
          <button className="hidden md:inline-flex">
            View All Teams
            <span className="ml-2">→</span>
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <HoverCard key={member.name} member={member} />
          ))}
        </div>

        <button className="mt-8 w-full md:hidden">
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
    const rotateX = (mouseY / card.height) * 40; // Increased for more movement
    const rotateY = (mouseX / card.width) * 40;
  
    setRotate({ x: rotateX, y: rotateY });
  };
  

  // const handleMouseLeave = () => {
  //   setRotate({ x: 0, y: 0 }); // Reset rotation on mouse leave
  // };

  return (
    <div
      className="group relative"
      style={{ perspective: "1000px" }} // Depth effect
    >
<div
  className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg transition-transform duration-200 ease-out group-hover:scale-[1.05]"
  style={{
    transformStyle: "preserve-3d",
    transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.02)`,
    transition: "transform 0.1s ease-out", // Smoother animation
    boxShadow: `0px 15px 40px rgba(192,192,192,0.3)`, // Enhanced shadow
  }}
  onMouseMove={handleMouseMove}
  onMouseLeave={() => setRotate({ x: 0, y: 0 })} // Reset rotation
>
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name || "Profile image"}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {member.socials && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#9bf00b] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="absolute bottom-6 left-6 flex gap-4">
              <Facebook className="h-6 w-6 cursor-pointer text-black transition-transform hover:scale-110" />
              <Instagram className="h-6 w-6 cursor-pointer text-black transition-transform hover:scale-110" />
              <Twitter className="h-6 w-6 cursor-pointer text-black transition-transform hover:scale-110" />
              <Pinterest className="h-6 w-6 cursor-pointer text-black transition-transform hover:scale-110" />
            </div>
          </div>
        )}
      </div>
      <div className="mt-4 space-y-2 text-center">
        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
        <p className="text-sm text-gray-400">{member.role}</p>
      </div>

      
    </div>
  );
}
