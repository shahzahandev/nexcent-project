import client1 from "../../assets/client1.png" 
import client2 from "../../assets/client2.png" 
import client3 from "../../assets/client3.png" 
import client4 from "../../assets/client4.png" 
import client5 from "../../assets/client5.png" 
import client6 from "../../assets/client6.png" 
import client7 from "../../assets/client7.png" 
import Container from '../Layout/Container'

const Client = () => {
  return (
    <div className="py-[20px] md:py-[40px] font-primary bg-[#FFFFFF]">
        <Container>
            <div className='md:text-center'>
                <h2 className=" text-[24px] md:text-[36px] font-semibold leading-[44px] text-gray-color">Our Clients</h2>
                <p className="text-[14px] md:text-[16px] leading-[24px] font-normal text-para-color mt-0 md:mt-[8px] w-[250px] md:w-auto">We have been working with some Fortune 500+ clients</p>
            </div>
            <div className="flex md:justify-between mt-[16px] py-[25px ml-[0px] md:ml-0 space-x-[2px] md:space-x-0">
                 <img src={client1} alt=""/>
                 <img src={client2} alt=""/>
                 <img src={client3} alt=""/>
                 <img src={client4} alt=""/>
                 <img src={client5} alt=""/>
                 <img src={client6} alt=""/>
                 <img src={client7} alt=""/>
            </div>
        </Container>
    </div>
  )
}

export default Client