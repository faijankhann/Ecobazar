import "./testomonial.css"

import Slider from "react-slick";

export const Testomonial = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };


    return (
        <section className="testomonial">
            <div className="testmo-container">
                <h2>Testomonial</h2>

            </div>


            <Slider {...settings}>
                <div className="testmo-card">
                    <i class="ri-double-quotes-r"></i>
                    <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
                    <div className="clint-info">
                        <div className="clint-box">
                            <div className="clint-image">
                                <img src="clinte1.jpeg" alt="" />
                            </div>

                            <p>
                                Robert Fox
                                <small>
                                    Coustomer
                                </small>
                            </p>

                        </div>
                        <div className="rating">
                            <p>⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </div>

                <div className="testmo-card">
                    <i class="ri-double-quotes-r"></i>
                    <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
                    <div className="clint-info">
                        <div className="clint-box">
                            <div className="clint-image">
                                <img src="clinte2.jpeg" alt="" />
                            </div>

                            <p>
                                Dianne Russell
                                <small>
                                    Coustomer
                                </small>
                            </p>

                        </div>
                        <div className="rating">
                            <p>⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </div>

                <div className="testmo-card">
                    <i class="ri-double-quotes-r"></i>
                    <p>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
                    <div className="clint-info">
                        <div className="clint-box">
                            <div className="clint-image">
                                <img src="clinte3.jpeg" alt="" />
                            </div>

                            <p>
                                Eleanor Pena
                                <small>
                                    Coustomer
                                </small>
                            </p>

                        </div>
                        <div className="rating">
                            <p>⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </div>

            </Slider>
            
        </section>
    )
}