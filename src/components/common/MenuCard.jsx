const MenuCard = ({item}) => {
    return (
        <div className='menu-card text-center'>
            <div>
                <img src={item.image} alt="" />
            </div>

            <div>
                <h6 className='mt-4 mb-3'>{item.title}</h6>

                <div className='text-heading'>{item.desc}</div>
            </div>
        </div>
    )
}

export default MenuCard