import { IoMenu, IoClose } 
from "react-icons/io5";
import { useState, useEffect } from "react";
import Popup from 'reactjs-popup';



const Navbar = () => {
    const [nav, setNav] = useState(true)
    const handleNav = () =>{
        setNav(!nav)
    }

    const handleScrollClick = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
      };


      //active nave color 

    const [activeNav, setActiveNav] = useState(1);

    const naveClick = (index) => {
        setActiveNav(index);
    }
   
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
        <nav className="fixed top-0  w-full z-50 overflow-auto">
            <div className="flex justify-between items-center pl-6 md:pl-16 pr-6 md:pr-16 h-[80px]  p-6 bg-[#FFFFFF]">
                <img className="flex items-center justify-center h-[60px] aspect-square" src="/logo.png" alt="logo"/>
                <ul className="hidden mdd:flex justify-between items-center min-w-[520px] text-[14px] lg:text-[19.2px] font-[700] text-[#062E76]">
                    <li className = {`p-5 ${activeNav === 1? 'text-[#06B9E1]': 'text-[#062E76]' } hover:scale-110 transition-transform duration-300`} onClick={() => naveClick(1)}><a href="#home">Home</a></li>
                    <li className = {`p-5 ${activeNav === 2? 'text-[#06B9E1]': 'text-[#062E76]' } hover:scale-110 transition-transform duration-300`} onClick={() => naveClick(2)}><a href="#services">Services</a></li>
                    <li className = {`p-5 ${activeNav === 3? 'text-[#06B9E1]': 'text-[#062E76]' } hover:scale-110 transition-transform duration-300`} onClick={() => naveClick(3)}><a href="#aboutus">About</a></li>
                    <li className = {`p-5 ${activeNav === 4? 'text-[#06B9E1]': 'text-[#062E76]' } hover:scale-110 transition-transform duration-300`} onClick={() => naveClick(4)}><a href="#contactus">Contact</a></li>
                    <li className="p-4 flex justify-center items-center h-[40px] rounded-[16px] border-[2px] border-[#06B9E1] text-[#062E76]" onClick={() => setIsOpen(true)}> 
                    <button className="hover:scale-110 transition-transform duration-300">Appointment</button>
                    <Popup open={isOpen} closeOnDocumentClick>
                        <div className="modal">
                            <button className="close" onClick={() => setIsOpen(false)}>
                                &times;
                            </button>
                            <div className="p-[10px] bg-[#06B9E1]  h-[200px] w-[200px] text-[16px] text-[#062E76] font-bold fixed right-[30px] top-[60px] rounded-md flex flex-col  items-start justify-center">
                                Online appointments will be available soon!
                                <p className="text-[12px] text-[#062E76] font-normal">
                                For the time being please ontact us on:
                                </p>
                                <p className="text-[12px] text-[#062E76] font-bold">
                                Phone: +2519 41 88 88 89
                                </p>
                                <p className="text-[12px] text-[#062E76] font-bold">
                                Email: info@libdental.com
                                </p>
                            </div>
                        </div>
                    </Popup>                      
                        
                    </li>
                    

                </ul>
                <div onClick={handleNav} className="block mdd:hidden">
                    {!nav ? <IoClose size={40}/>:<IoMenu size={40}/>}
                </div>
            </div>
            <div onClick={handleNav}  className= {!nav ? "fixed block mdd:hidden text-[20px] left-0 top-[80px] w-full h-auto bg-[#FFFFFF] ease-in-out duration-1000" : "fixed left-0 top-[-100%] w-full h-auto text-gray-600 bg-gray-200 ease-in-out duration-1000"}>
                <ul className="flex flex-col items-center justify-center w-full font-bold text-[#062E76]">
                    <li className = {`p-5 w-[160px]" ${activeNav === 1? 'text-[#06B9E1]': 'text-[#062E76]' }`} onClick={() => naveClick(1)}><a href="#home">Home</a></li>
                    <li className = {`p-5 w-[160px]" ${activeNav === 2? 'text-[#06B9E1]': 'text-[#062E76]' }`} onClick={() => naveClick(2)}><a href="#services">Services</a></li>
                    <li className = {`p-5 w-[160px]" ${activeNav === 3? 'text-[#06B9E1]': 'text-[#062E76]' }`} onClick={() => naveClick(3)}><a href="#aboutus">About</a></li>
                    <li className = {`p-5 w-[160px]" ${activeNav === 4? 'text-[#06B9E1]': 'text-[#062E76]' }`} onClick={() => naveClick(4)}><a href="#contactus">Contact</a></li>
                    <li className="p-4 mb-14 flex justify-center items-center h-[40px] rounded-[16px] border-[2px] border-[#06B9E1] text-[#062E76]" onClick={() => setIsOpen(true)}> 
                    <button className="hover:scale-110 transition-transform duration-300">Appointment</button>
                    <Popup open={isOpen} closeOnDocumentClick>
                        <div className="modal">
                            <button className="close" onClick={() => setIsOpen(false)}>
                                &times;
                            </button>
                            <div className="p-[10px] bg-[#06B9E1]  h-[200px] w-[200px] text-[16px] text-[#062E76] font-bold fixed right-[30px] top-[60px] rounded-md flex flex-col  items-start justify-center">
                                Online appointments will be available soon!
                                <p className="text-[12px] text-[#062E76] font-normal">
                                For the time being please ontact us on:
                                </p>
                                <p className="text-[12px] text-[#062E76] font-bold">
                                Phone: +2519 41 88 88 89
                                </p>
                                <p className="text-[12px] text-[#062E76] font-bold">
                                Email: info@libdental.com
                                </p>
                            </div>
                        </div>
                    </Popup>                      
                        
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;