import React from 'react';
import { ReactTyped } from "react-typed";


const Home = () => {
    return ( 

        <main className='relative mt-[100px]'>
            <div className='flex mt-16 sm:mt-0 sm:mb-16 items-start md:items-center justify-start md:justify-between h-auto md:h-[540px] w-screen pl-6 md:pl-16 pr-6 md:pr-16'>
                <div className='flex flex-col w-full lg:w-[50%]'>
                    <h2 className='font-bold text-[44px] text-gray-600 '>Where healthy smiles begin,</h2>
                   
                    {/* <ReactTyped className='font-bold text-[40px] text-gray-600' strings={["Where healthy smiles begin,"]} typeSpeed={40} /> */}
                    <p className='text-[20px] mt-6 text-gray-800'>High quality, compassionate dental care to patients of all ages</p>
                    <div className='flex items-center justify-start mt-5'>
                        <button className='flex items-center justify-center px-6 py-5 mr-5 rounded-[20px] bg-sky-400 text-white h-[46px] font-semibold text-[18px]'>Call</button>
                        <button className='flex items-center justify-center px-7 py-5 rounded-[20px] bg-sky-400 text-white h-[46px] font-semibold text-[18px'>Book an Appointment</button>
                    </div>
                    <div className='mt-10 mb-4 overflow-hidden'>
                        <ReactTyped className='font-bold text-[32px] sm:text-[40px] text-gray-500 text-clip ' strings={[ "Cleanings and Exams", "Fillings and Crowns", "Teeth Whitening", "Dental Implants", "Dentures", "Braces and Invisalign", "Pediatric Dentistry" ]} typeSpeed={100} backSpeed={30} attr="" loop>
                            <input type="text" />
                        </ReactTyped>
                    </div>
                </div>

                <div className='py-10 pl-8 hidden lg:flex items-center justify-center w-[50%]'>
                    <img className='' src="/lib_dental_005.png" alt="" />
                </div>
            </div>




            

            <div className='pb-0 md:pb-[0px] flex-row md:flex items-start justify-start md:justify-between h-auto w-screen pl-6 md:pl-16 pr-6 md:pr-16'>
                <div className='flex my-[60px] md:my-0 w-full md:w-[46%]'>
                    <img className='w-full md:w-[80%] rounded-tl-[30px] rounded-[4px]' src="/lib_dental_002.png" alt="" />
                    <img src="" alt="" />
                </div>
                <div className='flex flex-col my-[60px] md:my-0 w-full md:w-[54%]'>
                    <div className='flex p-3 mb-2 w-[200px] h-[40px] items-center rounded-[30px] text-gray-300 bg-gray-800'>
                        <h>🕐 24 Hours Available</h>
                    </div>
                    <div className='my-2 text-[32px] font-semibold text-gray-600'>
                        <h2>The Best Dental Clinic That You Can Trust</h2>
                    </div>
                    <div>
                        <div className='my-2 text-[20px]'>
                            <div className='my-4'>
                                <p>Smile brighter than your future! Level up your smile game! We're dental dreamweavers, using advanced technology to craft exceptional care.</p>
                            </div>
                            
                            <div className='my-4 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 font-medium '>
                                <div className='grid grid-rows-2 gap-1'>
                                    <p className='flex items-center mb-2 ml-1'> <span className='flex justify-center items-center pb-1 w-[26px] h-[26px] rounded-[20px] text-gray- border-[1px] border-sky-500 mr-[5px]'>✔</span>  100% Expert Doctors</p>
                                    <p className='flex items-center mb-2 ml-1'> <span className='flex justify-center items-center pb-1 w-[26px] h-[26px] rounded-[20px] text-gray- border-[1px] border-sky-500 mr-[5px]'>✔</span>  Posetive Feedback</p>
                                </div>
                                <div className='grid grid-rows-2 gap-1'>
                                    <p className='flex items-center mb-2 ml-1'> <span className='flex justify-center items-center pb-1 w-[26px] h-[26px] rounded-[20px] text-gray- border-[1px] border-sky-500 mr-[5px]'>✔</span>  Advanced Instrument</p>
                                    <p className='flex items-center mb-2 ml-1'> <span className='flex justify-center items-center pb-1 w-[26px] h-[26px] rounded-[20px] text-gray- border-[1px] border-sky-500 mr-[5px]'>✔</span>  Fair Price</p>
                                </div>
                            </div>
                            <button className='flex items-center px-[38px] py-[24px] my-5 ml-1 h-[40px] text-white font-bold bg-sky-400 rounded-[20px]'>Book Now</button>
                        </div>
                    </div>
                </div>
                
                
            </div>

        </main>
     );
}
 
export default Home;