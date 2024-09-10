import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import BannerCard from '../banner/BannerCard';
import { Link } from 'react-router-dom';
import MoviesCard from "../banner/MoviesCard";

interface props {
    items: any,
    type: String
}

const SampleNextArrow = (props: any) => {
    const { onClick } = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    )
}

const SamplePrevArrow = (props: any) => {
    const { onClick } = props
    return (
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
        </div>
    )
}

const SliderComponent = ({ items, type }: props) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: type === "Home" || type === "trending" ? 1 : 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };
    const path = (type === "Upcoming Movies" ? "upcomming" : type === "Latest Movies" ? "latest" : "recommeded")
    return (
        <>
            <Slider {...settings}>
                {items.map((item: any) => (
                    type === "Home" || type === "trending" ?
                        <BannerCard key={item.id} item={item} path={type} />
                        :
                        <div>
                            <Link to={`${path}/movieDetails/${item.id}`}>
                                <MoviesCard key={item.id} item={item} />
                            </Link>
                        </div>
                ))
                }
            </Slider>
        </>
    )
}

export default SliderComponent;
