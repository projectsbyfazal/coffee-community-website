import { useRef } from 'react'
import Heading from './common/Heading'
import image1 from "../assets/images/gallery/1.png"
import image2 from "../assets/images/gallery/2.png"
import image3 from "../assets/images/gallery/3.png"
import image4 from "../assets/images/gallery/4.png"
import image5 from "../assets/images/gallery/5.png"
import image6 from "../assets/images/gallery/6.png"
import image7 from "../assets/images/gallery/7.png"
import image8 from "../assets/images/gallery/8.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import "../assets/css/Gallery.css";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

const galleryImages = [
    { src: image5, className: "large-image" },

    { src: image1, className: "" },
    { src: image2, className: "" },
    { src: image3, className: "" },
    { src: image4, className: "" },

    { src: image6, className: "" },
    { src: image7, className: "" },

    { src: image8, className: "wide-image" },
];

const Gallery = () => {
    return (
        <section className='gallery section-margin' id='gallery'>
            <div className='container-box'>
                <Heading title='Gallery' />

                <div className='image-gallery pt-2 d-md-grid d-none'>
                    {galleryImages.map((item, index) => (
                        <div key={index} className={item.className}>
                            <img src={item.src} alt="gallery" />
                        </div>
                    ))}
                </div>

                <div className='pt-2 d-md-none d-block'>
                    <GallerySlider />
                </div>
            </div>
        </section>
    )
}

function GallerySlider() {

    const swiperRef = useRef(null);

    return (
        <div className='position-relative mx-2'>
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
                    300: { slidesPerView: 1 }
                }}
            >

                {
                    galleryImages.map((item) => {
                        return <SwiperSlide key={item.title}>
                            <div className={item.className}>
                                <img src={item.src} alt="gallery" className='mobile-gallery-img' />
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>

            <div>
                <button
                    className='gallery-slide-button'
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <FaAngleLeft />
                </button>

                <button
                    className='gallery-slide-button'
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <FaAngleRight />
                </button>
            </div>
        </div>
    )
}

export default Gallery
