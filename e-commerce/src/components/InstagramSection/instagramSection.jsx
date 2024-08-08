import './instagramSection.css';

//////////////////////// import images ////////////////////////

import image1 from "../../assets/images/instagram-bg/insta-image-1.jpeg"
import image2 from "../../assets/images/instagram-bg/insta-image-2.jpeg"
import image3 from "../../assets/images/instagram-bg/insta-image-3.jpeg"
import image4 from "../../assets/images/instagram-bg/insta-image-4.jpeg"
import image5 from "../../assets/images/instagram-bg/insta-image-5.jpeg"
import image6 from "../../assets/images/instagram-bg/insta-image-6.jpeg"

//////////////////////// import images ////////////////////////

const InstagramSection = () => {
    return (
        <div className="instagram-section ">

            <h2>Follow us on Instagram</h2>
            <div className="instagram-images">
                <div className="instagram-image-dv">
                    <a href="#">
                        <img src={image1} alt="Instagram 1" />
                    </a>

                </div>
                <div className="instagram-image-dv">
                    <a href="#">
                        <img src={image2} alt="Instagram 2" />
                    </a>

                </div>
                <div className="instagram-image-dv">
                    <a href="#">
                        <img src={image3} alt="Instagram 3" />
                    </a>

                </div>
                <div className="instagram-image-dv">
                    <a href="#">
                        <img src={image4} alt="Instagram 4" />
                    </a>

                </div>
                <div className="instagram-image-dv">
                    <a href="#">
                        <img src={image5} alt="Instagram 5" />
                    </a>

                </div>
                <div className="instagram-image-dv">
                    <a href="#">
                        <img src={image6} alt="Instagram 6" />
                    </a>

                </div>
            </div>

        </div>
    );
};

export default InstagramSection;