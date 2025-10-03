import footer from '../../assets/footer.png'
import Container from '../Layout/Container'
import { CiLocationArrow1 } from "react-icons/ci";
import { LiaBasketballBallSolid } from "react-icons/lia";
import { FaInstagram, FaTwitter  } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <div className='font-primary py-[30px] md:py-[64px] bg-[#263238]'>
        <Container>
            <div className='md:flex justify-between space-y-[40px] md:space-y-0'>
                <div>
                    <img src={footer} alt="" />
                    <p className=' mt-[20px] md:mt-[40px] font-normal text-[14px] leading-[24px] text-[#F5F7FA] '>Copyright © 2025 Nexcent ltd.</p>
                    <p className='mt-[8px] font-normal text-[14px] leading-[24px] text-[#F5F7FA] '>All rights reserved</p>
                    <div className='flex mt-[20px] md:mt-[40px] space-x-[16px]'>
                       <FaInstagram className='text-white bg-gray-800 p-[5px] rounded-[50%] text-[30px] transition-all drop-shadow-amber-300 hover:text-green-color hover:bg-gray-700 animate-bounce'/>
                       <LiaBasketballBallSolid className='text-white bg-gray-800 p-[5px] rounded-[50%] text-[30px] transition-all drop-shadow-amber-300 hover:text-green-color hover:bg-gray-700 animate-bounce'/>
                       <FaTwitter className='text-white bg-gray-800 p-[5px] rounded-[50%] text-[30px] transition-all drop-shadow-amber-300 hover:text-green-color hover:bg-gray-700 animate-bounce'/>
                       <CiYoutube className='text-white bg-gray-800 p-[5px] rounded-[50%] text-[30px] transition-all drop-shadow-amber-300 hover:text-green-color hover:bg-gray-700 animate-bounce'/>
                    </div>
                </div>
                <div className='md:flex space-x-[100px] space-y-[50px] md:space-y-0'>
                    <div>
                        <h3 className='font-semibold text-[20px] leading-[28px] text-[#ffffff]'>Company</h3>
                        <ul className='flex flex-col mt-[24px] space-y-[12px]'>
                            <li className='font-normal text-[14px] leading-[20px] text-[#F5F7FA] transition-all duration-300 hover:text-green-color'><a href="">About us</a></li>
                            <li className='font-normal text-[14px] leading-[20px] text-[#F5F7FA] transition-all duration-300 hover:text-green-color'><a href="">Blog</a></li>
                            <li className='font-normal text-[14px] leading-[20px] text-[#F5F7FA] transition-all duration-300 hover:text-green-color'><a href="">Contact us</a></li>
                            <li className='font-normal text-[14px] leading-[20px] text-[#F5F7FA] transition-all duration-300 hover:text-green-color'><a href="">Pricing</a></li>
                            <li className='font-normal text-[14px] leading-[20px] text-[#F5F7FA] transition-all duration-300 hover:text-green-color'><a href="">Testimonials</a></li>
                        </ul>
                    </div>
                     <div>
                        <h3 className='font-semibold text-[20px] leading-[28px] text-[#ffffff]'>Support</h3>
                        <ul className='flex flex-col mt-[24px] space-y-[12px]'>
                            <li className='font-normal text-[14px] leading-[20px] text-[#F5F7FA] transition-all duration-300 hover:text-green-color'><a href="">Help center</a></li>
                            <li className='font-normal text-[14px] leading-[20px] text-[#F5F7FA] transition-all duration-300 hover:text-green-color'><a href="">Terms of service</a></li>
                            <li className='font-normal text-[14px] leading-[20px] text-[#F5F7FA] transition-all duration-300 hover:text-green-color'><a href="">Legal</a></li>
                            <li className='font-normal text-[14px] leading-[20px] text-[#F5F7FA] transition-all duration-300 hover:text-green-color'><a href="">Privacy policy</a></li>
                            <li className='font-normal text-[14px] leading-[20px] text-[#F5F7FA] transition-all duration-300 hover:text-green-color'><a href="">Status</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold text-[20px] leading-[28px] text-[#ffffff]'>Stay up to date</h3>
                        <div className='flex justify-between items-center mt-[10px] md:mt-[24px] py-[10px] px-[12px] bg-gray-600 rounded-[10px] w-[350px] md:w-[100%]'>
                              <input type="text" placeholder='Your email address' className='font-normal text-[12px] md:text-[14px] leading-[20px] text-gray-300 border-none outline-0'
                         />
                            <CiLocationArrow1 className='text-white'/>
                        </div>
                      
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Footer