import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function Intro() {
    useEffect(() => {
        AOS.init({
          duration:2000
        });
       }, [])  
  return (
    <div>
      <div className='mt-20'>
        <div className="intro flex flex-col gap-10 items-center w-full">
            <img src='src\assets\fav.png' width={"90px"} data-aos = "fade-right"/>
            <h1 className='font-bold text-6xl text-center' data-aos = "fade-in">Who is internee.pk?</h1>
            <p className='text-xl text-gray-700 font-light text-center max-w-[80vw]' data-aos = "fade-out">The ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.</p>
        </div>
        
    </div>
    </div>
  )
}

export default Intro
