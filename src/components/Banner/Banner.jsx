import banner from "../../assets/banner.png"
import Container from '../Layout/Container'

const Banner = () => {
  return (
    <div className='py-[30px] md:py-[96px] bg-[#F5F7FA] font-primary'>
        <Container>
            <div className="md:flex space-x-[104px]">
                <div>
                    <h1 className="font-semibold text-[32px] md:text-[64px] leading-[50px] md:leading-[76px]  text-gray-color w-[360px] md:w-[657px]"> Lessons and insights <span className="text-green-color">from 8 years</span></h1>
                    <p className="font-normal text-[14px] md:text-[16px] leading-[24px] text-para-color mt-[5px] md:mt-[16px] w-[320px] md:w-auto">Where to grow your business as a photographer: site or social media?</p>
                    <button className="font-primary text-[12px] md:text-[16px] leading-[24px] text-[#ffffff] py-[6px] md:py-[14px] px-[20px] md:px-[32px] mt-[10px] md:mt-[32px] bg-green-color rounded-[8px] transition-all duration-300 hover:text-black hover:bg-gray-400">Register</button>
                </div>
                <div>
                    <img src={banner} alt="" className="w-[25%] md:w-auto"/>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Banner