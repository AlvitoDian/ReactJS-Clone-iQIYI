import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderExample() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 4,
    };

    const data = [
        { id: 1, content: "Slide 1" },
        { id: 2, content: "Slide 2" },
        { id: 3, content: "Slide 3" },
        { id: 4, content: "Slide 4" },
        { id: 5, content: "Slide 5" },
        { id: 6, content: "Slide 6" },
    ];

    return (
        <div className="slider-container w-">
            <Slider {...settings}>
                {data.map((slide) => (
                    <div key={slide.id} className="bg-white">
                        <h3>{slide.content}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderExample;
