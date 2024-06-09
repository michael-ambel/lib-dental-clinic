import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";


const Navbar = () => {
    const [nav, setNav] = useState(true)
    const handleNav = () =>{
        setNav(!nav)
    }
    return ( 
        <header>
            <div className="flex justify-between pl-6 md:pl-16 pr-6 md:pr-16 font-sans items-center h-28 max-w-[1280px] p-6 bg-gray-200 z-1000">
                <img className="w-[80px] md:w-[100px]" src="/logo.png" alt="logo"/>
                <ul className="hidden md:flex justify-between min-w-[520px] text-l font-semibold text-gray-600">
                    <li className="p-4">Home</li>
                    <li className="p-4">Services</li>
                    <li className="p-4">About Us</li>
                    <li className="p-4">Contact Us</li>
                    <li className="p-4">Appointments</li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {!nav ? <IoClose size={40}/>:<IoMenu size={40}/>}
                </div>
            </div>
            <div className= {!nav ? "z-[-1000] fixed block md:hidden text-l left-0 top-28 w-full h-[50%] text-gray-600 bg-gray-200 ease-in-out duration-1000" : "fixed left-0 top-[-100%] w-full h-[50%] z-[-1000]  text-gray-600 bg-gray-200 ease-in-out duration-1000"}>
                <ul className="grid w-full place-content-center font-semibold">
                    <li className="p-5">Home</li>
                    <li className="p-5">Services</li>
                    <li className="p-5">About Us</li>
                    <li className="p-5">Contact Us</li>
                    <li className="p-5">Appointments</li>
                </ul>
            </div>
        </header>
     );
}
 
export default Navbar;