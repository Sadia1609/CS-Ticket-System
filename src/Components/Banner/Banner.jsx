import React from 'react';
import bannerImg1 from '../../assets/vector1.png';
import bannerImg2 from '../../assets/vector2.png';

const Banner = ({inProgressCount = 0, resolvedCount = 0}) => {
  return (
    <section className="px-9 py-20">
      <div className="w-full flex flex-col md:flex-row gap-6">

        
        <div className="relative w-full md:w-1/2 h-48 md:h-64 rounded-2xl overflow-hidden text-white">
         
         
          <div className="absolute inset-0 bg-gradient-to-r from-[#632ee3] to-[#9f62f2]"/>
        
          <img
            src={bannerImg1} alt="In Progress Banner" className="absolute inset-0 w-full h-full object-cover opacity-40"/>
         
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">

            <div className="text-lg font-medium">In-Progress</div>
            <div className="text-3xl font-bold">{inProgressCount}</div>
          </div>
        </div>

       
        <div className="relative w-full md:w-1/2 h-48 md:h-64 rounded-2xl overflow-hidden text-white">
        
          <div className="absolute inset-0 bg-gradient-to-r from-[#54cf68] to-[#00827a]" />
          
          <img
            src={bannerImg2} alt="Resolved Banner" className="absolute inset-0 w-full h-full object-cover opacity-40"/>
          
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">

            <div className="text-lg font-medium">Resolved</div>
            <div className="text-3xl font-bold">{resolvedCount}</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;
