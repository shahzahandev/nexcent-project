import unseen from "../../assets/unseen.png"
import Footer from "../Footer/Footer"
import Container from '../Layout/Container'


const Unseen = () => {
  return (
    <>
      <div className="font-primary pt-[70px] pb-[20px] md:pt-[132px] md:pb-[50px] bg-[#ffffff]">
        <Container>
            <div className="md:flex space-x-[70px] items-center">
                    <img src={unseen} alt="" className=""/>
                <div>
                    <h2 className="font-semibold text-[24px] md:text-[36px] leading-[30px] md:leading-[44px] text-gray-color  w-[320px] md:w-[601px]">The unseen of spending three years at Pixelgrade</h2>
                    <p className="font-normal text-[14px] leading-[20px] text-para-color mt-[10px] md:mt-[16px] w-[320px] md:w-[601px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    <button className="font-medium text-[12px] md:text-[16px] leading-[24px] text-[#ffffff] py-[8px] md:py-[14px] px-[24px] md:px-[32px] mt-[10px] md:mt-[32px] bg-green-color rounded-[10px] transition-all duration-300 hover:text-black hover:bg-gray-300">Learn More</button>
                </div>
            </div>
        </Container>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Unseen