import React ,{useEffect,useRef}from 'react'
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Front() {
    const el = useRef();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Get a Compitative Job.', 'On your Desired Domain.','Gives Hands on Experience.'],
      typeSpeed: 50,
    });
    AOS.init({
      duration:2000
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  
      return (
  <div className='lg:flex w-full bg-green-600'>
    <div className="left lg:w-[50%] w-3/4 m-auto px-6 py-3">
      <div className="left-top text-6xl font-bold text-black min-h-72 text-center lg:text-left">
        <h1 className='text-white my-4 mb-3' data-aos="fade-left">Looking for dream internship?</h1>
        <span ref={el}/>
      </div>
      <p className='text-2xl text-white font-light mt-2 text-center lg:text-left'>
        Internee.pk kickstarts student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.
      </p>
      <div className="buttons flex justify-center lg:justify-start gap-10 mt-10 ">
        <button className='btn border-2 hover:opacity-80 border-black font-bold p-3 text-white cursor-pointer min-w-40'>Job Portal</button>
        <button className='btn bg-gradient-to-r from-black to-black hover:opacity-80 font-bold p-3 text-white cursor-pointer min-w-40'>OUR LMS</button>
      </div>
      <div className="buttons flex justify-center lg:justify-start gap-10 mt-2 ">
        <span className='text-sm font-bold min-w-40 text-center'><i>Coming Soon</i></span>
        <span className='text-sm font-bold min-w-40 text-center'><i>90% courses are in Urdu</i></span>
      </div>
    </div>
    
  </div>
);

    
}

export default Front
