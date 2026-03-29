const Button = ({ children = 'Button', url = '/', className = '' }) => {
    return (
        <div>
            <a href={url} className={`button ${className}`} >{children}</a>
        </div>
    )
}

export default Button
