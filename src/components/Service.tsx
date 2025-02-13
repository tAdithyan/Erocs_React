import  {  useState } from 'react';
import { Plus } from 'lucide-react';
import { GoArrowUpRight } from 'react-icons/go';

const servicesData = [
  {
    id: '01',
    number: '01',
    title: 'Digitalization',
    description: 'We build intelligent next-generation solutions at the intersection of new business opportunities and technological innovations.',
    features: [
      'Legacy Modernization',
      'Solution Design',
      'Technology Enabling',
      'Mobile-First Systems'
    ],
    image: 'https://img.freepik.com/free-photo/young-man-woman-vr-glasses-doing-experiments-robotics-laboratory-robot-tools_1268-23324.jpg?t=st=1738655783~exp=1738659383~hmac=aecd9f259cb55ddd904c42286dff6d268db7ae42698ff44eaf90b628bb95732a&w=1380'
  },
  {
    id: '02',
    number: '02',
    title: 'Modernization',
    description: 'We build intelligent next-generation solutions at the intersection of new business opportunities and technological innovations.',
    features: [
      'Legacy Modernization',
      'Solution Design',
      'Technology Enabling',
      'Mobile-First Systems'
    ],
    image: 'https://img.freepik.com/free-psd/futuristic-female-robot-glimpse-into-advanced-robotics_632498-25585.jpg?uid=R185849769&ga=GA1.1.1071171582.1738651792&semt=ais_hybrid_sidr'
  },
  {
    id: '03',
    number: '03',
    title: 'Accelerating Innovation',
    description: 'We build intelligent next-generation solutions at the intersection of new business opportunities and technological innovations.',
    features: [
      'Legacy Modernization',
      'Solution Design',
      'Technology Enabling',
      'Mobile-First Systems'
    ],
    image: 'https://img.freepik.com/free-photo/young-man-woman-protective-glasses-doing-experiments-robotics-laboratory_1268-23378.jpg?uid=R185849769&ga=GA1.1.1071171582.1738651792&semt=ais_hybrid'
  },
  {
    id: '04',
    number: '04',
    title: 'Business consulting',
    description: 'We build intelligent next-generation solutions at the intersection of new business opportunities and technological innovations.',
    features: [
      'Legacy Modernization',
      'Solution Design',
      'Technology Enabling',
      'Mobile-First Systems'
    ],
    image: 'https://img.freepik.com/free-photo/teen-doing-experiments-robotics-laboratory-boy-vr-headset-controlling-robot_1268-23420.jpg?uid=R185849769&ga=GA1.1.1071171582.1738651792&semt=ais_hybrid'
  }
];

const ServicesSection = () => {
  const [expandedSection, setExpandedSection] = useState('02');

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection == id ? '' : id);
  }

  return (
    <div className="bg-[#161616] text-white p-8 min-h-screen items-center justify-center flex">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="text-[#CDFF00] border-[#CDFF00] border w-fit p-3 rounded-full text-xs uppercase mb-2">WHAT WE OFFER</div>
          <div className="flex justify-between items-center">
            <h1 className="text-6xl">
              Most <span className="italic font-light">Experienced</span> Services
            </h1>
            {/* <button className="bg-black px-4 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-gray-900 transition-all duration-300">
              View All Service <span className="ml-1">→</span>
            </button> */}
          </div>
        </div>

        {/* Services List */}
        <div>
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="border-t border-gray-800 py-6 cursor-pointer" 
              onClick={() => toggleSection(service.id)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#CDFF00] border rounded-full p-2 flex items-center justify-centergap-3">
                                
                    
                    {service.number}<GoArrowUpRight className="transition-transform duration-300 group-hover:rotate-40"/></span>
                  <h2 className="text-3xl">{service.title}</h2>
                </div>
                <Plus 
                  size={20} 
                  className={`text-[#CDFF00] transform transition-transform duration-300 ${
                    expandedSection === service.id ? 'rotate-45' : ''
                  }`}
                />
              </div>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                expandedSection === service.id ? 'max-h-[500px] mt-6 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {service.description && (
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-400 mb-6">
                        {service.description}
                      </p>
                      {service.features.length > 0 && (
                        <div className="space-y-3">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-2">
                              <span className="text-[#CDFF00] text-lg">›</span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {service.image && (
                      <div>
                        <img 
                          src={service.image}
                          alt={`${service.title} illustration`}
                          className="rounded-lg w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;