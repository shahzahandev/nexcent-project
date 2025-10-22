import design from "../../assets/design.png"
import Container from '../Layout/Container'

const Design = () => {
  return (
    <>
      <div className="font-primary pt-[100px] pb-[50px] md:pt-[160px] md:pb-[25px] bg-[#FFFFFF]">
        <Container>
            <div className="md:flex space-x-[50px] space-y-4 md:space-y-0">
                    <img src={design} alt="" className=" md:w-[100%]" />
                <div>
                    <h2 className="font-semibold text-[24px] md:text-[36px] leading-[30px] md:leading-[44px] text-gray-color w-[320px] md:w-[601px]">How to design your site footer like we did</h2>
                    <p className="font-normal text-[12px] md:text-[14px] md:leading-[20px] text-para-color mt-2 md:mt-[16px] w-[320px] md:w-[601px]">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <button className="font-medium text-[12px] md:text-[16px] md:leading-[24px] text-[#ffffff] py-[10px] md:py-[14px] px-[20px] md:px-[32px] mt-4 md:mt-[32px] bg-green-color rounded-[10px] transition-all duration-300 hover:text-black hover:bg-gray-300">Learn More</button>

                </div>
            </div>
        </Container>
    </div>
    </>
  
  )
}

export default Design