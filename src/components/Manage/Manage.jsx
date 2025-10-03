import manage1 from "../../assets/manage1.png"
import manage2 from "../../assets/manage2.png"
import manage3 from "../../assets/manage3.png"
import Container from '../Layout/Container'

const Manage = () => {
  return (
    <div className='font-primary py-[40px] bg-[#ffffff]'>
        <Container>
            <div className='md:text-center'>
                <h2 className='font-semibold text-[24px] md:text-[36px] text-gray-color md:leading-[44px] w-[350px] md:w-[542px] md:mx-auto'> Manage your entire community in a single system</h2>
                <p className='font-normal text-[14px] md:text-[16px] leading-[24px] text-para-color md:mt-[8px]'>Who is Nextcent suitable for?</p>
            </div>
            <div className="mt-[10px] md:mt-[26px] inline-block md:flex justify-between ml-[15px] md:ml-0">
                <div className="flex flex-col items-center text-center shadow-[0px_2px_4px_0px] shadow-[#ABBED1]/40 p-[24px]">
                    <img src={manage1} alt="" className="w-[25%]"/>
                    <h2 className="font-bold text-[22px] md:text-[28px] leading-[25px] md:leading-[36px] text-gray-color mt-[16px] w-[267px] mx-auto">Membership Organisations</h2>
                    <p className="font-normal text-[14px] leading-[20px] text-para-color mt-[8px] w-[251px]">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                 <div className="flex flex-col items-center text-center shadow-[0px_2px_4px_0px] shadow-[#ABBED1]/40 p-[24px]">
                    <img src={manage2} alt="" className="w-[25%]"/>
                    <h2 className="font-bold text-[22px] md:text-[28px] leading-[36px] text-gray-color mt-[16px] w-[267px] mx-auto">National Associations</h2>
                    <p className="font-normal text-[14px] leading-[20px] text-para-color mt-[8px] w-[251px]">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
                 <div className="flex flex-col items-center text-center shadow-[0px_2px_4px_0px] shadow-[#ABBED1]/40 p-[24px]">
                    <img src={manage3} alt="" className="w-[25%]"/>
                    <h2 className="font-bold text-[22px] md:text-[28px] leading-[36px] text-gray-color mt-[16px] w-[267px] mx-auto">Clubs And Groups</h2>
                    <p className="font-normal text-[14px] leading-[20px] text-para-color mt-[8px] w-[251px]">Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Manage