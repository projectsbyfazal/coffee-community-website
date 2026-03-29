import { useMemo, useState } from 'react'
import Heading from './common/Heading'
import image1 from "../assets/images/categories-of -menu/1.png"
import image2 from "../assets/images/categories-of -menu/2.png"
import image3 from "../assets/images/categories-of -menu/3.png"
import image4 from "../assets/images/categories-of -menu/4.png"
import image5 from "../assets/images/categories-of -menu/5.png"
import image6 from "../assets/images/categories-of -menu/6.png"
import image7 from "../assets/images/categories-of -menu/7.png"
import image8 from "../assets/images/categories-of -menu/8.png"

import "../assets/css/our-menu.css";

const TABS = ['all', 'drinks', 'dessert', 'appetizers']

const menus = [
    {
        id: 1,
        image: image1,
        type: 'drinks'
    },
    {
        id: 2,
        image: image2,
        type: 'drinks'
    }, ,
    {
        id: 3,
        image: image3,
        type: 'dessert'
    },
    {
        id: 4,
        image: image4,
        type: 'appetizers'
    },
    {
        id: 5,
        image: image5,
        type: 'appetizers'
    },
    {
        id: 6,
        image: image6,
        type: 'dessert'
    },
    {
        id: 7,
        image: image7,
        type: 'drinks'
    },
    {
        id: 8,
        image: image8,
        type: 'drinks'
    }
]

const CategoryMenu = () => {

    const [tab, setTab] = useState(TABS[0])

    const filtered = useMemo(() => {
        return tab === TABS[0] ? menus : menus.filter(item => item.type === tab)
    }, [tab])

    return (
        <section className='section-margin'>
            <div className='container-box'>
                <Heading title='Categories of Menu' />

                <div className='d-flex justify-content-center menu-tabs py-md-2 mb-4'>
                    {
                        TABS.map(item => {
                            return <button
                                className={`button tab-btn ${item === TABS[0] && 'w-auto'} ${item === tab && 'active'}`}
                                onClick={() => setTab(item)}
                                key={item}>{item}</button>
                        })
                    }
                </div>

                <div className='menu-gallery'>
                    {
                        filtered.map((item) => {
                            return (
                                <div key={item.id}>
                                    <img src={item.image} alt="gallery" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default CategoryMenu