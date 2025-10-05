import marketing1 from "../../assets/marketing1.png"
import marketing2 from "../../assets/marketing2.png"
import marketing3 from "../../assets/marketing3.png"
import Container from '../Layout/Container'
import { FaLongArrowAltRight } from "react-icons/fa";

const Caring = () => {
    return (
        <div className="pt-[20px] md:pt-[48px] pb-[96px] font-primary bg-[#ffffff]">
            <Container>
                <div className="z-[99] md:text-center">
                    <h2 className="font-semibold text-[24px] md;text-[36px] leading-[44px] text-gray-color">Caring is the new marketing</h2>
                    <p className="font-normal text-[12px] md:text-[16px] md;leading-[24px] text-para-color w-[320px] md:w-[628px] md:mx-auto md:mt-[8px]">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                </div>
                <div className="relative md:flex mt-[16px] space-x-[30px] space-y-[80px] md:space-y-0">
                    <img src={marketing1} alt="" className=" md:w-[100%] ml-[5px] md:ml-0 z-[1]" />
                    <img src={marketing2} alt="" className=" md:w-[100%] ml-[5px] md:ml-0 z-[1]"/>
                    <img src={marketing3} alt="" className=" md:w-[100%] ml-[5px] md:ml-0 mb-[80px] md:mb-0 z-[1]"/>
                </div>

                <div className="relative md:flex space-x-[75px] mt-[-80px] ml-5 md:ml-[25px]">
                    <div className="z-[22] bg-[#F5F7FA] p-[16px] rounded-[10px] text-center shadow-[0px_8px_16px_0] shadow-[#ABBED1]/40 absolute md:relative top-[-740px] md:top-[0%] left-2 md:left-0">
                        <h3 className="font-semibold text-[16px] md:text-[20px] md:leading-[28px] text-gray-color w-[270px] md:w-[285px] md:mx-auto">Creating Streamlined Safeguarding Processes with OneRen</h3>
                        <div className="flex items-center text-center ml-[90px] md:ml-[100px] space-x-[5px] mt-[-20px] md:mt-0 transition-all duration-300 group">
                            <h6 className="font-semibold text-[14px] md:text-[20px] leading-[28px] text-green-color mt-[24px] transition-all duration-300 group-hover:text-gray-500">Read More</h6>
                            <FaLongArrowAltRight className="text-green-color mt-[27px] transition-all duration-300 group-hover:text-gray-500" />
                        </div>
                    </div>
                    <div className="z-[22] bg-[#F5F7FA] p-[16px] rounded-[10px] md:ml-[6px] text-center shadow-[0px_8px_16px_0] shadow-[#ABBED1]/40 absolute md:relative top-[-420px] md:top-0 left-2 md:left-0">
                        <h3 className="font-semibold text-[16px] md:text-[20px] md:leading-[28px] text-gray-color w-[270px] md:w-[285px] md:mx-auto">What are your safeguarding responsibilities and how can you manage them?</h3>
                        <div className="flex items-center text-center ml-[90px] space-x-[5px] mt-[-20px] md:mt-0 transition-all duration-300 group">
                            <h6 className="font-semibold text-[14px] md:text-[20px] leading-[28px] text-green-color mt-[24px] transition-all duration-300 group-hover:text-gray-500">Read More</h6>
                            <FaLongArrowAltRight className="text-green-color mt-[27px]
                            transition-all duration-300 group-hover:text-gray-500" />
                        </div>
                    </div>
                    <div className="z-[22] bg-[#F5F7FA] p-[16px] rounded-[10px] md:ml-[10px] text-center shadow-[0px_8px_16px_0] shadow-[#ABBED1]/40 absolute md:relative top-[-50px] md:top-0 left-2 md:left-0">
                        <h3 className="font-semibold text-[16px] md:text-[20px] leading-[28px] text-gray-color w-[270px] md:w-[280px] md:mx-auto">Revamping the Membership Model with Triathlon Australia</h3>
                        <div className="flex items-center text-center ml-[100px] space-x-[5px] mt-[-20px] md:mt-0 transition-all duration-300 group">
                            <h6 className="font-semibold text-[14px] md:text-[20px] leading-[28px] text-green-color mt-[24px] transition-all duration-300 group-hover:text-gray-500">Read More</h6>
                            <FaLongArrowAltRight className="text-green-color mt-[27px] transition-all duration-300 group-hover:text-gray-500" />
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Caring