const Heading = ({ title = "Our Menu", align = "center", line = true }) => {
    return (
        <div className={`heading heading-${align}`}>
            <h4>{title}</h4>
            {line && <div className='line'></div>}
        </div>
    )
}

export default Heading
