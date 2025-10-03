
import Container from '../Layout/Container'
import { FaLongArrowAltRight } from "react-icons/fa";

const Frin = () => {
  return (
    <div className='font-primary py-[20px] md:py-[32px] bg-[#F5F7FA]'>
        <Container>
            <div className='md:text-center'>
                <h2 className='font-semibold text-[28px] md:text-[64px] md:leading-[76px] text-[#263238] w-[320px] md:w-[650px] md:mx-auto'>Pellentesque suscipit fringilla libero eu.</h2>
                <button className='font-medium text-[16px] leading-[24px] text-[#ffffff] py-[8px] md:py-[14px] px-[18px] md:px-[32px] rounded-[10px] bg-green-color mt-[10px] md:mt-[32px] flex items-center space-x-[5px] md:mx-auto transition-all duration-300 hover:bg-gray-400 group'>
                    <a href="" className='text-[12px] md:text-[16px] transition-all duration-300 group-hover:text-black '>Get a Demo </a>
                     <FaLongArrowAltRight className="text-white md:mt-[5px] transition-all duration-300 group-hover:text-black" />
                    </button>
            </div>
        </Container>
    </div>
  )
}

export default Frin