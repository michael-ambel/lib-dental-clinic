import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";


const Navbar = () => {
    const [nav, setNav] = useState(true)
    const handleNav = () =>{
        setNav(!nav)
    }
    return ( 
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center pl-6 md:pl-16 pr-6 md:pr-16 font-sans h-[100px] w-full max-w-[1280px] p-6 bg-gray-200">
                <img className="flex items-center justify-center h-[60px] md:h-[80px] aspect-square" src="/logo.png" alt="logo"/>
                <ul className="hidden md:flex justify-between items-center min-w-[520px] text-[18px] font-semibold text-gray-600">
                    <li className="p-4 text-sky-600"><a>Home</a></li>
                    <li className="p-4">Services</li>
                    <li className="p-4">About Us</li>
                    <li className="p-4">Contact Us</li>
                    <li className="p-4 flex justify-center items-center h-[40px] rounded-[16px] border-[2px] border-sky-500 text-gray-600">Appointment</li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {!nav ? <IoClose size={40}/>:<IoMenu size={40}/>}
                </div>
            </div>
            <div className= {!nav ? "fixed block md:hidden text-[18px] left-0 top-[100px] w-full h-auto text-gray-600 bg-gray-200 ease-in-out duration-1000" : "fixed left-0 top-[-100%] w-full h-auto text-gray-600 bg-gray-200 ease-in-out duration-1000"}>
                <ul className="flex flex-col items-center justify-center w-full font-semibold">
                    <li className="p-5 w-[134px]">Home</li>
                    <li className="p-5 w-[134px]">Services</li>
                    <li className="p-5 w-[134px]">About Us</li>
                    <li className="p-5 w-[134px]">Contact Us</li>
                    <li className="p-5 w-[134px] flex justify-center mb-14 mt-2 items-center h-[44px] rounded-[10px] border-[2px] border-sky-500 text-gray-600">Appointment</li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;