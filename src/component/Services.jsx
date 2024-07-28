const Services = () => {
<<<<<<< HEAD
    return (
        <div className="bg-[#062E76] pt-[60px]">
        <div className='grid grid-row-2 pt-[40px] pl-6 sm:pl-10 md:pl-16 pr-6 sm:pr-10 md:pr-16 bg-white'>
            <div className="text-[40px] my-8 font-bold text-[#062E76]">
                <h2>Our Services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 h-auto">
                <div className=" h-auto sm:h-[270px] md:h-auto w-[340px] md:w-auto hover:scale-110 transition-transform duration-300">
                    <div>
                        <img className="w-[200px] sm:w-[180px] md:w-[300px] rounded-[50px]" src="/s0.jpg" alt="" />
                    </div>
                    <div className="flex flex-col justify-start w-auto h-[120px] relative left-[-10px] bottom-[30px] text-[18px] font-bold text-[#06B9E1] rounded-[40px] py-[10px] px-[12px] mr-8 bg-[#062E76]">
                        <h2>Cosmetic Dentistry</h2>
                        <p className="text-[14px] py-2 font-normal text-[#FFFFFF]">Enhance your smile's appearance. Whitening, veneers, crowns & implants.</p>
                    </div>
                </div>
                         
                
                <div className=" h-auto sm:h-[270px] md:h-auto w-[340px] md:w-auto hover:scale-110 transition-transform duration-300">
                    <div>
                        <img className="w-[200px] sm:w-[180px] md:w-[300px] rounded-[50px]" src="/lib_dental_003.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-start w-auto h-[120px] relative left-[-10px] bottom-[30px] text-[18px] font-bold text-[#06B9E1] rounded-[40px] py-[10px] px-[12px] mr-8 bg-[#062E76]">
                        <h2>Cleanings and Exams</h2>
                        <p className="text-[14px] py-2 font-normal text-[#FFFFFF]">Bi-annual dental defense: Plaque removal, cavity patrol.</p>
                    </div>
                    
                </div>
                         
                
                <div className=" h-auto sm:h-[270px] md:h-auto w-[340px] md:w-auto hover:scale-110 transition-transform duration-300">
                    <div>
                        <img className="w-[200px] sm:w-[180px] md:w-[300px] rounded-[50px]" src="/s1.jpg" alt="" />
                    </div>
                    <div className="flex flex-col justify-start w-auto h-[120px] relative left-[-10px] bottom-[30px] text-[18px] font-bold text-[#06B9E1] rounded-[40px] py-[10px] px-[12px] mr-8 bg-[#062E76]">
                        <h2>General Dentistry</h2>
                        <p className="text-[14px] py-2 font-normal text-[#FFFFFF]">Cleanings, exams & X-rays keep smiles healthy and bright.</p>
                    </div>
                </div>
                         
                
                <div className=" h-auto sm:h-[270px] md:h-auto w-[340px] md:w-auto hover:scale-110 transition-transform duration-300">
                    <div>
                        <img className="w-[200px] sm:w-[180px] md:w-[300px] rounded-[50px]" src="/s4.jpg" alt="" />
                    </div>
                    <div className="flex flex-col justify-start w-auto h-[120px] relative left-[-10px] bottom-[30px] text-[18px] font-bold text-[#06B9E1] rounded-[40px] py-[10px] px-[12px] mr-8 bg-[#062E76]">
                        <h2>Restorative Dentistry</h2>
                        <p className="text-[14px] py-2 font-normal text-[#FFFFFF]">Restore damaged teeth. Fillings, crowns, bridges & dentures.</p>
                    </div>
                </div>                         
                
                <div className=" h-auto sm:h-[270px] md:h-auto w-[340px] md:w-auto hover:scale-110 transition-transform duration-300">
                    <div>
                        <img className="w-[200px] sm:w-[180px] md:w-[300px] rounded-[50px]" src="/s2.jpg" alt="" />
                    </div>
                    <div className="flex flex-col justify-start w-auto h-[120px] relative left-[-10px] bottom-[30px] text-[18px] font-bold text-[#06B9E1] rounded-[40px] py-[10px] px-[12px] mr-8 bg-[#062E76]">
                        <h2>Preventative Dentistry</h2>
                        <p className="text-[14px] py-2 font-normal text-[#FFFFFF]">Stop dental problems before they start! Cleanings, fluoride & sealants for kids.</p>
                    </div>
                </div>

                         
                
                <div className=" h-auto sm:h-[270px] md:h-auto w-[340px] md:w-auto hover:scale-110 transition-transform duration-300">
                    <div>
                        <img className="w-[200px] sm:w-[180px] md:w-[300px] rounded-[50px]" src="/s6.jpg" alt="" />
                    </div>
                    <div className="flex flex-col justify-start w-auto h-[120px] relative left-[-10px] bottom-[30px] text-[18px] font-bold text-[#06B9E1] rounded-[40px] py-[10px] px-[12px] mr-8 bg-[#062E76]">
                        <h2>Orthodontics</h2>
                        <p className="text-[14px] py-2 font-normal text-[#FFFFFF]">Straighten teeth, improve bite. Braces, retainers & more.</p>
                    </div>
                </div>
                         
                
                <div className=" h-auto sm:h-[270px] md:h-auto w-[340px] md:w-auto hover:scale-110 transition-transform duration-300">
                    <div>
                        <img className="w-[200px] sm:w-[180px] md:w-[300px] rounded-[50px]" src="/s7.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-start w-auto h-[120px] relative left-[-10px] bottom-[30px] text-[18px] font-bold text-[#06B9E1] rounded-[40px] py-[10px] px-[12px] mr-8 bg-[#062E76]">
                        <h2>Oral Surgery</h2>
                        <p className="text-[14px] py-2 font-normal text-[#FFFFFF]">Wisdom teeth removal, implants & jaw surgery. Specialized mouth & face procedures.</p>
                    </div>
                </div>
                         
                
                         
                
            </div>
        </div>
        </div>
=======
    return ( 
        <div className='grid grid-row-2 my-[60px] w-screen pl-6 md:pl-16 pr-6 md:pr-16'>
            <div className="text-[36px] my-8 font-bold text-gray-500">
                <h2>Our Services</h2>
            </div>
            <div className="grid grid-cols-4 gap-4 h-[700px]">
                <div className=" h-[200px]">
                    <div className="">
                        <img className="w-[280px] rounded-md" src="/lib_dental_003.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center w-[200px] relative left-[40px] bottom-[20px] text-[20] font-bold text-sky-500 rounded-[20px] p-[8px] bg-white">
                        <h2 className="">Cleanings and Exams</h2>
                    </div>
                    <p className="relative bottom-[20px] text-gray-500">Bi-annual dental defense: Plaque removal, cavity patrol.</p>
                </div>
                <div className=" h-[200px]">
                    <div className="">
                        <img className="w-[280px] rounded-md" src="/lib_dental_003.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center w-[200px] relative left-[40px] bottom-[20px] text-[20] font-bold text-sky-500 rounded-[20px] p-[8px] bg-white">
                        <h2 className="">Cleanings and Exams</h2>
                    </div>
                    <p className="relative bottom-[20px] text-gray-500">Bi-annual dental defense: Plaque removal, cavity patrol.</p>
                </div>
                <div className=" h-[200px]">
                    <div className="">
                        <img className="w-[280px] rounded-md" src="/lib_dental_003.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center w-[200px] relative left-[40px] bottom-[20px] text-[20] font-bold text-sky-500 rounded-[20px] p-[8px] bg-white">
                        <h2 className="">Cleanings and Exams</h2>
                    </div>
                    <p className="relative bottom-[20px] text-gray-500">Bi-annual dental defense: Plaque removal, cavity patrol.</p>
                </div>
                <div className=" h-[200px]">
                    <div className="">
                        <img className="w-[280px] rounded-md" src="/lib_dental_003.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center w-[200px] relative left-[40px] bottom-[20px] text-[20] font-bold text-sky-500 rounded-[20px] p-[8px] bg-white">
                        <h2 className="">Cleanings and Exams</h2>
                    </div>
                    <p className="relative bottom-[20px] text-gray-500">Bi-annual dental defense: Plaque removal, cavity patrol.</p>
                </div>
                <div className=" h-[200px]">
                    <div className="">
                        <img className="w-[280px] rounded-md" src="/lib_dental_003.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center w-[200px] relative left-[40px] bottom-[20px] text-[20] font-bold text-sky-500 rounded-[20px] p-[8px] bg-white">
                        <h2 className="">Cleanings and Exams</h2>
                    </div>
                    <p className="relative bottom-[20px] text-gray-500">Bi-annual dental defense: Plaque removal, cavity patrol.</p>
                </div>
                <div className=" h-[200px]">
                    <div className="">
                        <img className="w-[280px] rounded-md" src="/lib_dental_003.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center w-[200px] relative left-[40px] bottom-[20px] text-[20] font-bold text-sky-500 rounded-[20px] p-[8px] bg-white">
                        <h2 className="">Cleanings and Exams</h2>
                    </div>
                    <p className="relative bottom-[20px] text-gray-500">Bi-annual dental defense: Plaque removal, cavity patrol.</p>
                </div>
                <div className=" h-[200px]">
                    <div className="">
                        <img className="w-[280px] rounded-md" src="/lib_dental_003.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center w-[200px] relative left-[40px] bottom-[20px] text-[20] font-bold text-sky-500 rounded-[20px] p-[8px] bg-white">
                        <h2 className="">Cleanings and Exams</h2>
                    </div>
                    <p className="relative bottom-[20px] text-gray-500">Bi-annual dental defense: Plaque removal, cavity patrol.</p>
                </div>
                <div className=" h-[200px]">
                    <div className="">
                        <img className="w-[280px] rounded-md" src="/lib_dental_003.png" alt="" />
                    </div>
                    <div className="flex items-center justify-center w-[200px] relative left-[40px] bottom-[20px] text-[20] font-bold text-sky-500 rounded-[20px] p-[8px] bg-white">
                        <h2 className="">Cleanings and Exams</h2>
                    </div>
                    <p className="relative bottom-[20px] text-gray-500">Bi-annual dental defense: Plaque removal, cavity patrol.</p>
                </div>
            </div>
        </div>
>>>>>>> f60fc4621fbe89f51209d24b3f259c339dbd9f8a
     );
}
 
export default Services;