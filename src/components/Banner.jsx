import "../assets/css/Banner.css"
import Button from "./common/Button";
const Banner = () => {
    return <header className="banner">
        <div className="container-box h-100 d-flex align-items-center justify-content-start">
            <div>
                <h1>Coffee Community Comfort</h1>

                <div>
                    <Button url="#our-menu" className="fw-semibold">View Menu</Button>
                </div>
            </div>
        </div>
    </header>;
};

export default Banner;
