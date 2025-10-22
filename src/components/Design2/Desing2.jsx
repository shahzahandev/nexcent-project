import client1 from "../../assets/client1.png"
import client2 from "../../assets/client2.png"
import client3 from "../../assets/client3.png"
import client4 from "../../assets/client4.png"
import client5 from "../../assets/client5.png"
import client6 from "../../assets/client6.png"
import client7 from "../../assets/client7.png"
import design2 from "../../assets/design2.png"
import Container from '../Layout/Container'
import { FaLongArrowAltRight } from "react-icons/fa";

const Desing2 = () => {
    return (
       <>
        <div className=" pt-[120px] pb-[30px] md:py-[140px] md:pb-[50px] bg-[#F5F7FA] font-primary">
            <Container>
                <div className="md:flex space-x-[78px]">
                    <img src={design2} alt="" className="md:w-[100%] animate-pulse transition-all duration-500" />
                    <div className="flex flex-col">
                        <p className="font-medium text-[14px] md:text-[16px] md:leading-[24px] text-para-color w-[330px] md:w-[748px]">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                        <h3 className="font-semibold text-[16px] md:text-[20px] leading-[28px] text-green-color mt-[5px] md:mt-[16px]">Tim Smith</h3>
                        <p className="font-normal text-[12px] md:text-[16px] leading-[24px] text-[#89939E]">British Dragon Boat Racing Association</p>
                        <div className="md:flex items-center  mt-[10px] md:mt-[32px] ml-[150px] md:ml-0 space-x-5">
                            <div className="flex space-x-[-5px] md:space-x-[25px] ml-[-150px] md:ml-0">
                                <img src={client1} alt="" className="scale-70 md:scale-100"/>
                                <img src={client2} alt="" className="scale-70 md:scale-100"/>
                                <img src={client3} alt="" className="scale-70 md:scale-100"/>
                                <img src={client4} alt="" className="scale-70 md:scale-100"/>
                                <img src={client5} alt="" className="scale-70 md:scale-100"/>
                                <img src={client6} alt="" className="scale-70 md:scale-100"/>
                                <img src={client7} alt="" className="scale-70 md:scale-100"/>
                            </div>
                            <div className="flex items-center space-x-[8px] transition-all duration-300 group ml-[-110px] md:ml-0">
                                <h4 className="font-semibold text-[15px] md:text-[20px] leading-[28px] text-green-color ml-[-40px] md:ml-0 transition-all duration-300 group-hover:text-gray-500">Meet all customers</h4>
                                <FaLongArrowAltRight className="text-green-color transition-all duration-300 group-hover:text-gray-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
       </>
    )
}

export default Desing2