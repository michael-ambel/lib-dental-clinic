const Aboutus
 = () => {
    return ( 
        <div className="bg-[#FFFFFF] pt-[60px]">
        <div className='flex flex-col pt-[80px] pb-[40px] pl-6 sm:pl-10 md:pl-16 pr-6 sm:pr-10 md:pr-16 bg-[#06B9E1]'>
            <div className="text-[40px] mb-8 font-bold text-[#062E76]">
                <h2>About Us</h2>
            </div>
            <div className="grid grid-cols-1 mdd:grid-cols-2 mb-14">
                <div className="flex flex-col items-center justify-center w-[100%]  sm:p-6 animate-slide-in-left">
                    <div className="flex flex-col md:flex-row items-center">
                        <h2 className="font-bold text-[#FFFFFF] py-[8px] text-[24px]">Creating a Smile You Love</h2>
                        <img className="mdd:hidden w-[440px] my-4 rounded-bl-[40px] rounded-br-[20px]" src="/home022.png" alt="" />
                    </div>
                    <p className="font-semibold text-[#062E76] py-[8px] text-[16px] ">At LIB Dental clinic, we're passionate about creating a positive dental experience for every patient. We understand that visiting the dentist can sometimes cause anxiety, which is why we strive to provide a welcoming and comfortable environment where your oral health needs are our top priority.</p>
                </div>
                <div className="hidden mdd:flex items-center justify-center w-[100%] ">
                    <img className="relative top-[-20px] rounded-b-[80px] " src="/home022.png" alt="" />
                </div>
            </div>
            <div className="mb-16">
                <div>
                    <h2 className="font-bold text-[#062E76] py-[24px] text-[24px]">What Makes Us Different</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                    <div className="flex w-[100%] p-8 rounded-[8px] bg-white hover:scale-105 transition-transform duration-500">
                        <div className="w-[70px] h-[70px] mr-6 my-2 bg-[#062E76] rounded-sm">
                            <img src="/Comfort.gif" alt="" />
                        </div>
                        <div className="w-[80%]">
                            <h3 className="text-[18px] mb-2 font-bold text-[#062E76]">Focus on Patient Comfort</h3>
                            <p className="text-[16px] font-light text-[#062E76]">We offer amenities like comfortable chairs, blankets, and headphones to make your visit as relaxing as possible. We also offer sedation dentistry for patients with dental anxiety.</p>
                        </div>
                    </div>
                    <div className="flex w-[100%] p-8 rounded-[8px] bg-white hover:scale-105 transition-transform duration-500">
                        <div className="w-[70px] h-[70px] mr-6 my-2 bg-[#062E76] rounded-sm">
                        <img src="/Detail.gif" alt="" />
                        </div>
                        <div className="w-[80%]">
                            <h3 className="text-[18px] mb-2 font-bold text-[#062E76]">Attention to Detail is Our Obsession</h3>
                            <p className="text-[16px] font-light text-[#062E76]">No spot left untouched. We take a meticulous approach to detailing, ensuring a flawless, showroom-worthy finish. Ensuring you looks absolute and best inside and out.</p>
                        </div>
                    </div>
                    <div className="flex w-[100%] p-8 rounded-[8px] bg-white hover:scale-105 transition-transform duration-500">
                        <div className="w-[70px] h-[70px] mr-6 my-2 bg-[#062E76] rounded-sm">
                        <img src="/Shine.gif" alt="" />
                        </div>
                        <div className="w-[80%]">
                            <h3 className="text-[18px] mb-2 font-bold text-[#062E76]">More Than Just a Shine</h3>
                            <p className="text-[16px] font-light text-[#062E76]">Our comprehensive detailing services go beyond a simple wash and wax. We use high-quality products and meticulous techniques to restore your car's original luster, protect it from future damage, and increase its resale value.</p>
                        </div>
                    </div>
                    <div className="flex w-[100%] p-8 rounded-[8px] bg-white hover:scale-105 transition-transform duration-500">
                        <div className="w-[70px] h-[70px] mr-6 my-2 bg-[#062E76] rounded-sm">
                        <img src="/Sparkle.gif" alt="" />
                        </div>
                        <div className="w-[80%]">
                            <h3 className="text-[18px] mb-2 font-bold text-[#062E76]">Unveiling Your Inner Sparkle</h3>
                            <p className="text-[16px] font-light text-[#062E76]">Experience the difference! We go beyond the surface, crafting details that highlight your unique beauty. Let our experts enhances your  shine and protects it for years to come.</p>
                        </div>
                    </div>

                    
                </div>
            </div>

            <div className=" text-[#062E76] lg:px-[100px]">
                <h2 className="font-bold my-6 py-[8px] text-[24px]">Meet the Dentists</h2>

                <div className="flex flex-col-reverse md:flex-row p-4">
                    <div className="z-10 mt-auto mb-[54px]">
                        {/* <h3 className="font-bold mb-2 text-[24px]" >Dr. Debrelibanos Gedamu</h3> */}
                        {/* <p className="text-[16px]" >Doctor of Dental Medicine with general dentistry experience, dedicated to enhancing oral health and creating beautiful smiles for patients of all ages through exceptional care.</p> */}
                        <p className="text-[16px]" >Hi, I am <span className="font-bold">Dr. Debrelibanos Gedamu</span>, Dental Medicine professional with extensive experience in general dentistry. Committed to optimizing oral health, I provide comprehensive care for patients of all ages. My focus is on creating aesthetically pleasing and functional smiles.</p>
                        <p className="text-[16px] mt-6">Maintain meticulous oral health, keep safe.</p>
                        <p className="text-[16px] mt-6">Thank you.</p>
                    </div>
                                 
                    <div className="z-10 h-[50%] lg:h-[80%] w-[100%] mb-[10px] lg:mb-[0px]">
                        <img  className="max-w-[300px] lg:max-w-[400px] rounded-b-[40px] " src="/Dr..png" alt="" />
                    </div>
                </div>

                <div className="relative top-[-450px] md:top-[-424px] lg:top-[-374px] h-[400px] lg:h-[360px]  border-2 border-[#062E76] rounded-[20px]  mb-[-240px]">

                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-950">
                <div className="p-8">
                    <div>
                        <h2 className="font-bold my-[6px] py-[8px] text-[24px]">Our Mission</h2>
                        <p className="">Empowering confident smiles through exceptional dental care.  We deliver comprehensive dental services that prioritize patient comfort and utilize the latest technology.</p>
                    </div>
                    <div>
                        <h2 className="font-bold my-[6px] py-[8px] text-[24px]">Our Vission</h2>
                        <p>To be the leading dental practice in [Your Area], recognized for our commitment to patient well-being, innovative treatments, and a compassionate approach.</p>
                    </div>
                </div>
                <div className="p-8">
                    <h2 className="font-bold my-[6px] py-[8px] text-[24px]">Our Core Values</h2>
                    <p className="my-2"><span className="font-bold">Patient-Centered Care:</span> We believe in building trusting relationships with our patients and tailoring treatment plans to their individual needs.</p>
                    <p className="my-2"><span className="font-bold">Excellence in Dentistry:</span> We are dedicated to continuous learning and staying at the forefront of dental advances to provide the most effective treatments.</p>
                    <p className="my-2"><span className="font-bold">Compassionate Approach:</span> We understand dental anxiety and strive to create a welcoming environment where patients feel comfortable and cared for.</p>
                    <p className="my-2"><span className="font-bold">Integrity and Trust:</span> We are committed to honesty, transparency, and ethical practices in everything we do.</p>
                </div>

            </div>
        </div>
        </div>
     );
}
 
export default Aboutus
;