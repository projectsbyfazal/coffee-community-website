import { useRef } from 'react'
import "../assets/css/our-menu.css"
import Heading from './common/Heading'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import MenuCard from './common/MenuCard'

import menu1 from "../assets/images/menu/2.png"
import menu2 from "../assets/images/menu/3.png"
import menu3 from "../assets/images/menu/1.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const menu = [
    {
        title: 'Product One',
        image: menu1,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero voluptas suscipit porro ratione est illum.',
    },
    {
        title: 'Product Two',
        image: menu2,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero voluptas suscipit porro ratione est illum.',
    },
    {
        title: 'Product Three',
        image: menu3,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero voluptas suscipit porro ratione est illum.',
    },
    {
        title: 'Product Four',
        image: menu2,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero voluptas suscipit porro ratione est illum.',
    },
]

const OurMenu = () => {

    const swiperRef = useRef(null);

    return (
        <section className='our-menu section-margin' id='our-menu'>
            <div className='container-box '>
                <div className="row align-items-center">
                    <div className="col-md-3 text-md-start text-center">
                        <Heading title='Our Menu' align='left' />
                        <div className='sub-heading mb-md-4 mb-1'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ipsam suscipit.
                        </div>

                        <div className='d-md-flex gap-4 d-none'>
                            <button
                                className='button menu-btn shadow w-auto'
                                onClick={() => swiperRef.current?.slidePrev()}
                            >
                                <FaArrowLeft />
                            </button>

                            <button
                                className='button menu-btn shadow w-auto'
                                onClick={() => swiperRef.current?.slideNext()}
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className="col-md-9">

                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            slidesPerView={3}
                            spaceBetween={32}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                300: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="px-md-3 pt-3 pb-4"
                        >

                            {
                                menu.map((item) => {
                                    return <SwiperSlide key={item.title}>
                                        <MenuCard item={item} />
                                    </SwiperSlide>
                                })
                            }
                        </Swiper>

                        <div className='d-md-none gap-4 d-flex justify-content-center'>
                            <button
                                className='button menu-btn shadow shadow-md w-auto'
                                onClick={() => swiperRef.current?.slidePrev()}
                            >
                                <FaArrowLeft />
                            </button>

                            <button
                                className='button menu-btn shadow shadow-md w-auto'
                                onClick={() => swiperRef.current?.slideNext()}
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurMenu
