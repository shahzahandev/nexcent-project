import { useState } from "react"
import navlogo from "../../assets/nav-logo.png"
import Container from '../Layout/Container'
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="font-primary py-[30px] bg-gray-300 md:bg-[#F5F7FA]">
            <Container>
                {/* for big device */}
                <div className="hidden md:flex justify-between items-center" >
                    <div>
                        <img src={navlogo} alt="" />
                    </div>
                    <ul className="hidden md:flex space-x-[50px]">
                        <li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-300 hover:text-green-color"><a href="">Home</a></li>
                        <li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-300 hover:text-green-color"><a href="">Service</a></li>
                        <li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-300 hover:text-green-color"><a href="">Product</a></li>
                        <li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-300 hover:text-green-color"><a href="">Feature</a></li>
                        <li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-300 hover:text-green-color"><a href="">Testimonial</a></li>
                        <li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-300 hover:text-green-color"><a href="">FAQ</a></li>
                    </ul>
                    <div className="flex space-x-[14px]">
                        <button className="py-[10px] px-[20px] rounded-[8px] text-[14px] leading-[20px] font-medium text-green-color bg-primary transition-all duration-300 hover:text-white hover:bg-green-color">Login</button>
                        <button className="py-[10px] px-[20px] rounded-[8px] text-[14px] leading-[20px] font-medium text-[#FFFFFF] bg-green-color transition-all duration-300 hover:text-green-color hover:bg-transparent ">Sign up</button>
                    </div>
                </div>

                {/* for small device */}
                <div className="md:hidden flex space-x-[150px] transition-all duration-900 ease-in-out" >
                    <div>
                        <img src={navlogo} alt="" />
                    </div>
                    <div>
                        {
                            show ? (
                                <div className="transition-all duration-500  text-center py-[20px] absolute  top-[80px] left-0 bg-gray-300 w-full z-[99999] ">
                                    <ul className="flex flex-col space-y-[30px]">
                                        <li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-300 hover:text-green-color"><a href="">Home</a></li>
                                        <li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-300 hover:text-green-color"><a href="">Service</a></li>
                                        <li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-300 hover:text-green-color"><a href="">Product</a></li>
                                        <li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-300 hover:text-green-color"><a href="">Feature</a></li>
                                        <li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-300 hover:text-green-color"><a href="">Testimonial</a></li>
                                        <li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-300 hover:text-green-color"><a href="">FAQ</a></li>
                                    </ul>
                                    <div className="mt-[20px] text-center space-x-5">
                                        <button className="py-[10px] px-[20px] rounded-[8px] text-[14px] leading-[20px] font-medium text-white bg-green-color transition-all duration-300 hover:text-green-color hover:bg-transparent">Login</button>
                                        <button className="py-[10px] px-[20px] rounded-[8px] text-[14px] leading-[20px] font-medium text-[#FFFFFF] bg-green-color transition-all duration-300 hover:text-green-color hover:bg-transparent">Sign up</button>
                                    </div>
                                </div>
                            ) : ("")
                        }
                        <div className="transition-all duration-900">
                            {
                                show ? (<ImCross onClick={() => setShow(!show)} className="text-red-500 text-2xl animate-pulse"/>
                                ) : (<FaBars onClick={() => setShow(!show)} className="text-black text-2xl animate-bounce"/>
                                )
                            }
                        </div>
                    </div>

                </div>





            </Container>
        </div>
    )
}

export default Navbar