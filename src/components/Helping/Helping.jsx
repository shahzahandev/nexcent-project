import help1 from "../../assets/help1.png"
import help2 from "../../assets/help2.png"
import help3 from "../../assets/help3.png"
import help4 from "../../assets/help4.png"
import Container from '../Layout/Container'

const Helping = () => {
  return (
    <div className="font-primary py-[30px] md:py-[64px] bg-[#F5F7FA]">
        <Container>
            <div className="md:flex space-x-[204px] space-y-5 md:space-y-0">
                <div>
                    <h2 className="font-semibold text-[24px] md:text-[36px] md:leading-[44px] text-gray-color w-[260px] md:w-[380px]">Helping a local <span className="text-green-color">business reinvent itself</span></h2>
                    <p className="font-normal text-[12px] md:text-[16px] leading-[24px] md:mt-[16px] text-[#18191F]">We reached here with our hard work and dedication</p>
                </div>
                <div>
                    <div className="flex space-x-[30px]">
                         <div className="flex items-center space-x-[16px]"> 
                             <img src={help1} alt="" className="w-[25%] animate-bounce"/>
                             <div>
                                <h2 className=" text-[16px] md:text-[28px] font-bold leading-[36px]">2,245,341</h2>
                                <p className="font-normal text-[12px] md:text-[16px] leading-[24px]">Members</p>
                             </div>
                        </div>
                        <div className="flex items-center space-x-[16px]"> 
                             <img src={help2} alt="" className="w-[30%] animate-bounce"/>
                             <div>
                                <h2 className=" text-[16px] md:text-[28px] font-bold leading-[36px]">46,328</h2>
                                <p className="font-normal text-[12px] md:text-[16px] leading-[24px]">Clubs</p>
                             </div>
                        </div>
                    </div>
                      <div className="flex space-x-[30px] mt-[10px] md:mt-[40px]">
                         <div className="flex items-center space-x-[16px]"> 
                             <img src={help3} alt="" className="w-[25%] animate-bounce"/>
                             <div>
                                <h2 className=" text-[16px] md:text-[28px] font-bold leading-[36px]">828,867</h2>
                                <p className="font-normal text-[12px] md:text-[16px] leading-[24px]">Event Bookings</p>
                             </div>
                        </div>
                        <div className="flex items-center space-x-[16px] ml-[-10px] md:ml-[20px]"> 
                             <img src={help4} alt="" className="w-[25%] animate-bounce"/>
                             <div>
                                <h2 className="text-[16px] md:text-[28px] font-bold leading-[36px]">1,926,436</h2>
                                <p className="font-normal text-[12px]  md:text-[16px] leading-[24px]">Payments</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Helping