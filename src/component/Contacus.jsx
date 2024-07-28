const Contactus = () => {
    return ( 
        <div className="bg-[#06B9E1] pt-[60px]">
        <div className="flex flex-col py-[60px] pl-6 sm:pl-10 md:pl-16 pr-6 sm:pr-10 md:pr-16 bg-[#062E76]">
            <h2 className="text-[40px] font-bold text-[#FFFFFF] my-3">Let's Get Connected!</h2>
            <p className="font-bold text-[18px] mb-8 text-[#06B9E1]">Have a question? Don't hesitate to contact us today! We look forward to hearing from you.</p>
    
            <div className="grid grid-cols-1 mdd:grid-cols-3 gap-2">
                <div>
                    <img className="w-[160px] hidden md:block" src="/logo.png" alt="" />
                    <h2 className="text-[16px] font-semibold text-[#FFFFFF] my-3">Your gentle dentist with state-of-the-art technology.</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 mdd:grid-cols-1">
                    <div className="text-[#06B9E1]">
                        <h2 className="text-[24px] font-bold text-[#FFFFFF] my-3">Contact us</h2>
                        <p><span className="font-bold">Phone:</span> +2519 41 88 88 89 </p>
                        <p><span className="font-bold">Email:</span> info@libdental.com</p>
                        {/* <p><span className="font-bold">Social Media</span>: [Facebook, Telegram, Twitter, etc.]</p> */}
                    </div>
                    <div className="text-[#06B9E1]">
                        <h2 className="text-[24px] font-bold text-[#FFFFFF] my-3">Working Hour</h2>
                        <p><span className="font-bold">Monday-Saturday:</span> 8:30 AM - 8:00 PM</p>
                        <p><span className="font-bold">Sunday:</span> 8:30 AM - 12:30 PM</p>
                    </div>
                </div>
                <div className="text-[#06B9E1]">
                    <h2 className="text-[24px] font-bold text-[#FFFFFF] my-3">Visit Us</h2>
                    <p><span className="font-bold">Address:</span> Roba Bakery, Gerji, Bole, Addis Ababa</p>
                    <p><span className="font-bold">Direction:</span></p>
                    <iframe className="h-[220px] w-[340px] my-[12px] rounded-[12px]" title="libmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d655.272947904009!2d38.813595805415105!3d8.994412855404779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8529104deb3f%3A0x5c21c9179739aebf!2zUm9iYSBCYWtlcnkgfCBHZXJqaSB8IOGIruGJoyDhi7PhiaYg4YiY4YyL4YyI4Yiq4YurIHwg4YyI4Yit4YyC!5e0!3m2!1sen!2set!4v1719148511765!5m2!1sen!2set" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>


            <h2 className="relative top-[20px] lg:top-[-40px] text-[20px] text-sky-500 font-bold">We look forward to hearing from you!</h2>
            <p className="relative top-[20px] lg:top-[-20px]">&copy;2024 Lib Specialty Dental Clinic</p>
        </div>
        </div>
     );
}
 
export default Contactus;