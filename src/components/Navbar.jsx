import { useState } from 'react'
import logo from "../assets/images/logo_black.png"
import "../assets/css/Navbar.css"
import { NavLink } from 'react-router-dom'
import Button from './common/Button'
import { FaBars, FaCaretDown } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    return (
        <nav className='position-sticky top-0 left-0 right-0 bg-white w-100 border-bottom' style={{zIndex: 15}}>
            <div className='navibar container-box'>
                <div>
                    <img src={logo} alt="" />
                </div>

                <ul className={`navLinks ps-md-0 mb-0 ${menu && 'd-flex'}`}>
                    <li> <a href={"#"} >Home</a> </li>
                    <li> <a href={"#our-menu"} >Menu<FaCaretDown /> </a> </li>
                    <li> <a href={"#about-us"} >About Us</a> </li>
                    <li> <NavLink to={"/"} >Events</NavLink> </li>
                    <li> <a href={"#gallery"} >Gallery</a> </li>
                    <li> <NavLink to={"/"} >Blog</NavLink> </li>
                    <li> <NavLink to={"/"} >Contact</NavLink> </li>
                </ul>

                <div>
                    <Button url="#location">Location</Button>
                </div>

                <div className='d-md-none d-block' onClick={() => setMenu(prev => !prev)}>
                    {
                        menu ?
                            <FaTimes className='hamburger-btn' /> :
                            <FaBars className='hamburger-btn' />
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
