import React from 'react';
import { ReactTyped } from "react-typed";


const Home = () => {
    return ( 

        <main>
            <div className='flex items-start justify-start md:justify-between h-screen w-screen pl-6 md:pl-16 pr-6 md:pr-16'>
                <div className='flex flex-col mt-24 sm:mt-16 w-full lg:w-[50%]'>
                    <h2 className='font-bold text-[44px] text-gray-500 '>Where healthy smiles begin,</h2>
                   
                    {/* <ReactTyped className='font-bold text-[40px] text-gray-600' strings={["Where healthy smiles begin,"]} typeSpeed={40} /> */}
                    <p className='text-[20px] mt-6 text-gray-900'>High quality, compassionate dental care to patients of all ages</p>
                    <div className='flex items-center justify-start mt-5'>
                        <button className='flex items-center justify-center px-6 py-5 mr-5 rounded-[20px] bg-sky-400 text-white h-[46px] font-semibold text-[18px]'>Call</button>
                        <button className='flex items-center justify-center px-7 py-5 rounded-[20px] bg-sky-400 text-white h-[46px] font-semibold text-[18px'>Book an Appointment</button>
                    </div>
                    <div className='mt-24 sm:mt-10 overflow-hidden'>
                        <ReactTyped className='font-bold text-[32px] sm:text-[40px] text-gray-600 text-clip ' strings={[ "Cleanings and Exams", "Fillings and Crowns", "Teeth Whitening", "Dental Implants", "Dentures", "Braces and Invisalign", "Pediatric Dentistry" ]} typeSpeed={100} backSpeed={30} attr="" loop>
                            <input type="text" />
                        </ReactTyped>
                    </div>
                </div>

                <div className='py-8 pl-8 hidden h-full lg:block w-[50%]'>
                    <img className='w-full h-[80%]' src="/stock.jpg" alt="" />
                </div>
        </div>

        </main>
     );
}
 
export default Home;