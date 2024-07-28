import React from 'react';
import { ReactTyped } from "react-typed";
import Popup from 'reactjs-popup';
import { useEffect, useState } from 'react';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        if (isOpen) {
        const timer = setTimeout(() => {
            setIsOpen(false);
        }, 3000); // Popup will close after 3 seconds
    
        return () => clearTimeout(timer);
        }
    }, [isOpen]);


    return ( 

        <main className='relative bg-[#062E76]'>
            <div className='flex pt-20 lg:pt-36 mt-[80px] sm:mt-0 pb-10 sm:pb-0 items-start justify-start md:justify-between h-auto pl-6 md:pl-16 pr-6 md:pr-16'>
                <div className='flex flex-col w-full mdd:w-[54%] lg:pt-[20px]'>
                    <h2 className='font-bold text-[44px] mdd:text-[30px] lg:text-[46px] text-[#FFFFFF] uppercase'>Where healthy smiles begin,</h2>
                   
                    {/* <ReactTyped className='font-bold text-[40px] text-gray-600' strings={["Where healthy smiles begin,"]} typeSpeed={40} /> */}
                    <p className='text-[18px] mt-12 sm:mt-6 text-[#FFFFFF]'>High quality, compassionate dental care to patients of all ages</p>
                    
                    <div className='flex items-center justify-start mt-10 mdd:mt-5'>
                    <button className='flex items-center justify-center px-6 py-5 mr-5 rounded-[20px] bg-[#06B9E1] text-white h-[50px] font-semibold text-[16px] hover:scale-105 transition-transform duration-300' onClick={() => window.location.href = `tel:${'0941888889'}`}>Call</button>
                    
                    <button className='flex items-center justify-center px-7 py-5 rounded-[20px] bg-[#06B9E1] text-white h-[50px] font-semibold text-[16px] hover:scale-105 transition-transform duration-300' onClick={() => setIsOpen(true)}>Book an Appointment</button>
                    <Popup open={isOpen} closeOnDocumentClick>
                        <div className="modal">
                            <button className="close" onClick={() => setIsOpen(false)}>
                                &times;
                            </button>
                            <div className="p-[10px] bg-[#06B9E1]  h-[200px] w-[200px] text-[14px] text-[#062E76] font-bold fixed left-[30px] lg:left-[380px] top-[240px] rounded-md flex flex-col  items-start justify-center">
                                Online appointments and booking will be available soon!
                                <p className="text-[12px] text-[#062E76] font-normal">
                                For the time being, please contact us on:
                                </p>
                                <p className="text-[14px] text-[#062E76] font-bold">
                                Phone: +2519 41 88 88 89
                                </p>
                                <p className="text-[14px] text-[#062E76] font-bold">
                                Email: info@libdental.com
                                </p>
                            </div>
                        </div>
                    </Popup> 


                    </div>
                    
                    
                    
                    
                    
                    
                    
                    
                    {/* <div className='flex items-center justify-start mt-10 mdd:mt-5'>
                        <button className='flex items-center justify-center px-6 py-5 mr-5 rounded-[20px] bg-[#06B9E1] text-white h-[40px] font-semibold text-[16px]'>Call</button>
                        <button className='flex items-center justify-center px-7 py-5 rounded-[20px] bg-[#06B9E1] text-white h-[40px] font-semibold text-[16px]'>Book an Appointment</button>
                    </div> */}
                    <div className='mt-8 overflow-hidden'>
                        <ReactTyped className='font-bold text-[40px] mdd:text-[38px] text-[#FFFFFF]' strings={[ "Cleanings and Exams", "Fillings and Crowns", "Teeth Whitening", "Dental Implants", "Dentures", "Braces and Invisalign", "Pediatric Dentistry" ]} typeSpeed={100} backSpeed={30} loop>
                            
                        </ReactTyped>
                    </div>
                </div>

                <div className='hidden mdd:flex items-start justify-start'>
                    <img className='relative left-[64px] top-[-64px] aspect-auto rounded-bl-[120px]' src="/home06.png" alt="" />
                </div>
            </div>




            

            <div className='py-14 md:pb-[30px] flex-row md:flex items-start justify-start md:justify-between h-auto w-full pl-6 md:pl-16 pr-6 md:pr-16'>
                <div className='flex pt-[0px] md:mr-10 w-full md:w-[50%]'>
                    <img className='w-[100%] rounded-tl-[30px] rounded-[4px]' src="/lib_dental_0022.png" alt="" />
                </div>
                <div className='flex flex-col pb-[20px] mt-14 md:mt-2 w-full md:w-[54%]'>
                    <div className='flex p-3 mb-2 w-[200px] h-[40px] items-center rounded-[30px] text-[#062E76] bg-white'>
                        <h>🕐 Available all days</h>
                    </div>
                    <div className='mt-4 mb-6 text-[28px] font-semibold text-[#FFFFFF]'>
                        <h2>The Best Dental Clinic That You Can Trust</h2>
                    </div>
                    <div>
                        <div className='mb-2 text-[16px]'>
                            <div className='lg:mb-24 text-[#FFFFFF]'>
                                <p>Smile brighter than your future! Level up your smile game! We're dental dreamweavers, using advanced technology to craft exceptional care.</p>
                            </div>
                            
                            <div className='my-4 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 font-medium text-[#FFFFFF]'>
                                <div className='grid grid-rows-2 gap-1'>
                                    <p className='flex items-center mb-2 ml-1 hover:scale-110 transition-transform duration-300'> <span className='flex justify-center items-center pb-1 w-[28px] h-[28px] rounded-[20px] text-gray- border-[2px] border-[#06B9E1] mr-[10px]'>✔</span>  100% Expert Doctors</p>
                                    <p className='flex items-center mb-2 ml-1 hover:scale-110 transition-transform duration-300'> <span className='flex justify-center items-center pb-1 w-[28px] h-[28px] rounded-[20px] text-gray- border-[2px] border-[#06B9E1] mr-[10px]'>✔</span>  Posetive Feedback</p>
                                </div>
                                <div className='grid grid-rows-2 gap-1'>
                                    <p className='flex items-center mb-2 ml-1 hover:scale-110 transition-transform duration-300'> <span className='flex justify-center items-center pb-1 w-[28px] h-[28px] rounded-[20px] text-gray- border-[2px] border-[#06B9E1] mr-[10px]'>✔</span>  Advanced Instrument</p>
                                    <p className='flex items-center mb-2 ml-1 hover:scale-110 transition-transform duration-300'> <span className='flex justify-center items-center pb-1 w-[28px] h-[28px] rounded-[20px] text-gray- border-[2px] border-[#06B9E1] mr-[10px]'>✔</span>  Fair Price</p>
                                </div>
                            </div>
                            <button className='flex items-center px-[38px] py-[20px] my-5 ml-1 h-[40px] text-white  bg-[#06B9E1] rounded-[20px] hover:scale-110 transition-transform duration-300' onClick={() => setIsOpen(true)}>Book Now</button>                   
                        </div>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default Home;