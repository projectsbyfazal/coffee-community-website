import logo from "../assets/images/logo_white.png"
import instagram from "../assets/images/instagram.png"
import facebook from "../assets/images/facebook.png"
import twitter from "../assets/images/twitter.png"
import { FaEnvelope, FaMapLocation, FaPhone } from 'react-icons/fa6'
import "../assets/css/Footer.css"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container-box'>
                <div className="row mb-5">
                    <div className="col-md-5">
                        <div className='pe-md-5'>
                            <img src={logo} alt="" />
                            <div className='text-heading text-white my-md-3 my-4 fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla possimus, harum suscipit libero saepe eum itaque iure iusto vitae voluptates, vel fuga. A odit consequuntur nobis tempora est.</div>
                            <div className='d-flex gap-3'>
                                <div><img src={instagram} alt="" /></div>
                                <div><img src={facebook} alt="" /></div>
                                <div><img src={twitter} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mt-md-0 mt-2">
                        <div className='footer-text pe-5 ps-md-2'>
                            <h4 className='mb-3'>Time</h4>

                            <div>
                                <div className='d-flex justify-content-between'>
                                    <span>Monday</span>
                                    <span>10AM - 10PM</span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span>Tuesday</span>
                                    <span>10AM - 10PM</span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span>Wednesday</span>
                                    <span>10AM - 10PM</span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span>Thursday</span>
                                    <span>10AM - 10PM</span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span>Friday</span>
                                    <span>10AM - 10PM</span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span>Saturday</span>
                                    <span>10AM - 10PM</span>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <span>Sunday</span>
                                    <span>10AM - 10PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className='footer-text ps-md-3 pe-md-0 pe-5'>
                            <h4 className='mb-3'>Useful Links</h4>

                            <div className='footer-links'>
                                <div>
                                    <div className='mb-md-1 mb-2'> <a href="#">Home</a> </div>
                                    <div className='mb-md-1 mb-2'> <a href="#our-menu">Menu</a> </div>
                                    <div className='mb-md-1 mb-2'> <a href="#about-us">About us</a> </div>
                                    <div className='mb-md-1'> <a href="#">Events</a> </div>
                                </div>
                                <div>
                                    <div className='mb-md-1 mb-2'> <a href="#gallery">Gallery</a> </div>
                                    <div className='mb-md-1 mb-2'> <a href="#">Blog</a> </div>
                                    <div> <a href="#">Contact</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 pe-md-0">
                        <div className='footer-text ps-md-3'>
                            <h4 className='mb-3'>Contact us</h4>

                            <div className='contact-details'>
                                <div> <a href="tel:+91 12345 67890" className='d-flex gap-2 align-items-center'> <FaPhone /> +91 12345 67890</a> </div>
                                <div> <a href="mailto:dummy@gmail.com" className='d-flex gap-2 align-items-center'> <FaEnvelope /> dummy@gmail.com</a> </div>
                                <div> <span className='d-flex gap-2'> <span><FaMapLocation /></span> 1234 Design Street, Suite 567, City, FC 89012</span> </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-heading text-md-center text-copyright'>@ 2024 dummyname All right reserved.</div>
            </div>
        </footer>
    )
}

export default Footer
