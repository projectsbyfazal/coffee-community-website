import image from "../assets/images/about_us.png"
import Heading from './common/Heading'
import Button from './common/Button'
const AboutUs = () => {
    return (
        <section className='about-us section-margin' id='about-us'>
            <div className="container-box">
                <div className="row align-items-center flex-md-row flex-column-reverse">
                    <div className="col-md-6 text-md-start text-center mt-md-0 mt-5">
                        <Heading title='About us' align='left' />

                        <div className='sub-heading mt-4'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis vel quasi maxime fugiat quo sapiente, repudiandae eligendi deserunt.
                        </div>

                        <div className='text-heading mt-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quibusdam, aut consequatur tempore velit, fuga blanditiis itaque voluptatem corrupti minus impedit, explicabo cumque expedita cupiditate illo praesentium quas ea eius!
                        </div>

                        <div className='text-heading my-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quibusdam, aut consequatur tempore velit, fuga blanditiis itaque voluptatem corrupti minus impedit, explicabo cumque expedita cupiditate illo praesentium quas ea eius!
                            fuga blanditiis itaque voluptatem corrupti minus impedit, explicabo cumque expedita cupiditate illo praesentium quas ea eius!
                        </div>

                        <Button>know more</Button>
                    </div>
                    <div className="col-md-6">
                        <img src={image} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
