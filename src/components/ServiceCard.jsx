import React from 'react';

const ServiceCard = ({ title, description, image }) => {
  return (
    <section className="group bg-surface-glass backdrop-blur-md border border-border-color rounded-lg p-0 text-center flex flex-col h-full overflow-hidden transition-all duration-base ease-smooth hover:-translate-y-[10px] hover:scale-[1.02] hover:border-accent-primary hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(108,99,255,0.2)]">
      
      {/* 2:1 Ratio — Image Content (taking the dominant portion) */}
      <div className="relative w-full h-64 sm:h-80 overflow-hidden border-b border-white/[0.05]">
        <img 
          src={image} 
          alt={`${title} showcase image`} 
          className="w-full h-full object-cover sm:max-md:object-scale-down transform transition-transform duration-slow group-hover:scale-110" 
        />
        {/* Subtle overlay to enhance text readability on the card boundary */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-bg-primary/20 to-transparent pointer-events-none" />
      </div>

      {/* Remaining portion — Content with reduced font sizes */}
      <div className="p-lg pt-md flex flex-col justify-center flex-grow">
        <h2 className="text-text-primary text-base font-bold mb-sm p-0 leading-tight tracking-tight">{title}</h2>
        <p className="text-text-secondary text-xs leading-relaxed p-0 opacity-90">{description}</p>
      </div>
      
    </section>
  );
};

export default ServiceCard;
