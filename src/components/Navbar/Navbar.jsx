import { useState } from "react"
import navlogo from "../../assets/nav-logo.png"
import Container from '../Layout/Container'
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router";

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="fixed z-[9999999] mx-auto w-full font-primary py-[30px] bg-gray-400 md:bg-[#F5F7FA]">
            <Container>
                {/* for big device */}
                <div className="hidden md:flex justify-between items-center" >
                    <div>
                        <img src={navlogo} alt="" />
                    </div>
                    <ul className="hidden md:flex space-x-[50px]">
                        <NavLink to="/" className={(e) => { return e.isActive ? "active" : "" }}><li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-100 hover:text-green-color">Home</li></NavLink>
                        <NavLink to="/desi" className={(e) => { return e.isActive ? "active" : "" }}><li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-100 hover:text-green-color">Service</li></NavLink>
                        <NavLink to="/manage" className={(e) => { return e.isActive ? "active" : "" }}> <li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-100 hover:text-green-color">Product</li></NavLink>
                        <NavLink to="/unseen" className={(e) => { return e.isActive ? "active" : "" }}> <li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-100 hover:text-green-color">Feature</li></NavLink>
                        <NavLink to="/design" className={(e) => { return e.isActive ? "active" : "" }}> <li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-100 hover:text-green-color">Testimonial</li></NavLink>
                        <NavLink to="/caring" className={(e) => { return e.isActive ? "active" : "" }}> <li className="font-medium text-[16px] leading-[24px] text-[#18191f] transition-all duration-100 hover:text-green-color">FAQ</li></NavLink>
                    </ul>
                    <div className="flex space-x-[14px]">
                        <NavLink to="/nav" className={(e) => { return e.isActive ? "active" : "" }}><button className="py-[10px] px-[20px] rounded-[8px] text-[14px] leading-[20px] font-medium text-green-color bg-primary transition-all duration-300 hover:text-white hover:bg-green-color">Login</button></NavLink>
                        <NavLink to="/" className={(e) => { return e.isActive ? "active" : "" }}> <button className="py-[10px] px-[20px] rounded-[8px] text-[14px] leading-[20px] font-medium text-[#FFFFFF] bg-green-color transition-all duration-300 hover:text-green-color hover:bg-transparent ">Sign up</button></NavLink>
                    </div>
                </div>
                {/* for small device */}
                <div className="md:hidden flex justify-between items-center transition-all duration-900 ease-in-out" >
                    <div>
                        <img src={navlogo} alt="" />
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="flex text-center space-x-2">
                            <NavLink to="/nav" className={(e) => { return e.isActive ? "active" : "" }}> <button className="py-[6px] px-[15px] rounded-[8px] text-[12px] leading-[20px] ml-4 font-medium text-white bg-green-color transition-all duration-300  hover:text-black hover:bg-transparent">Login</button></NavLink>
                            <NavLink to="/" className={(e) => { return e.isActive ? "active" : "" }}>   <button className="py-[6px] px-[15px]  rounded-[8px] text-[12px] leading-[20px] font-medium text-[#FFFFFF] bg-green-color transition-all duration-300  hover:text-black hover:bg-transparent">SignUp</button></NavLink>
                        </div>
                        <div>
                            {
                                show ? (
                                    <div className="transition-all duration-500  text-center py-[25px] absolute  top-[92px] right-0 bg-gray-500/80 w-1/4 z-[99999] rounded-bl-2xl ">
                                        <div className="">
                                            <ul className="flex flex-col space-y-[30px]">

                                                <NavLink to="/" className={(e) => { return e.isActive ? "active" : "" }}><li className="font-medium text-[14px] leading-[24px] text-white transition-all duration-100 hover:text-green-color">Home</li></NavLink>
                                                <NavLink to="/desi" className={(e) => { return e.isActive ? "active" : "" }}><li className="font-medium text-[14px] leading-[24px] text-white transition-all duration-100 hover:text-green-color">Service</li></NavLink>
                                                <NavLink to="/manage" className={(e) => { return e.isActive ? "active" : "" }}><li className="font-medium text-[14px] leading-[24px] text-white transition-all duration-100 hover:text-green-color">Product</li></NavLink>
                                                <NavLink to="/unseen" className={(e) => { return e.isActive ? "active" : "" }}><li className="font-medium text-[14px] leading-[24px] text-white transition-all duration-100 hover:text-green-color">Feature</li></NavLink>
                                                <NavLink to="/design" className={(e) => { return e.isActive ? "active" : "" }}><li className="font-medium text-[14px] leading-[24px] text-white transition-all duration-100 hover:text-green-color">Testimonial</li></NavLink>
                                                <NavLink to="/caring" className={(e) => { return e.isActive ? "active" : "" }}><li className="font-medium text-[14px] leading-[24px] text-white transition-all duration-100 hover:text-green-color">FAQ</li></NavLink>
                                            </ul>

                                        </div>

                                    </div>
                                ) : ("")
                            }
                            <div className="transition-all duration-300">
                                {
                                    show ? (<ImCross onClick={() => setShow(!show)} className="text-red-500  text-[20px] animate-pulse" />
                                    ) : (<FaBars onClick={() => setShow(!show)} className="text-black text-[20px] animate-bounce" />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar