import "../components/newsCard.css"
import { Btn } from "./button"

export const NewsCard = () => {
    return (
        <div className="nc-wrapper">
            <div className="nc-container">
                <div className="nc-image">

                    <img src="news-image-1.png" alt="" />
                    <p>18 <small>NOV</small></p>
                </div>
                <div className="nc-txt">
                    <p>
                        <span>
                            <i class="ri-price-tag-3-line"></i> Food
                        </span>
                        <span>
                            <i class="ri-user-line"></i> By Admin
                        </span>
                        <span>
                            <i class="ri-chat-2-line"></i> 65 Comment
                        </span>
                    </p>
                    <strong>
                        Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
                    </strong>
                    <div>

                        <Btn>Read More  <i class="ri-arrow-right-line"></i></Btn>
                    </div>
                </div>
            </div>

            <div className="nc-container">
                <div className="nc-image">

                    <img src="news-image-2.png" alt="" />
                    <p>15<small>JAN</small></p>
                </div>
                <div className="nc-txt">
                    <p>
                        <span>
                            <i class="ri-price-tag-3-line"></i> Food
                        </span>
                        <span>
                            <i class="ri-user-line"></i> By Admin
                        </span>
                        <span>
                            <i class="ri-chat-2-line"></i> 65 Comment
                        </span>
                    </p>
                    <strong>
                        Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
                    </strong>
                    <div>

                        <Btn>Read More  <i class="ri-arrow-right-line"></i></Btn>
                    </div>
                </div>
            </div>

            <div className="nc-container">
                <div className="nc-image">

                    <img src="news-image-3.png" alt="" />
                    <p>28 <small>FAB</small></p>
                </div>
                <div className="nc-txt">
                    <p>
                        <span>
                            <i class="ri-price-tag-3-line"></i> Food
                        </span>
                        <span>
                            <i class="ri-user-line"></i> By Admin
                        </span>
                        <span>
                            <i class="ri-chat-2-line"></i> 65 Comment
                        </span>
                    </p>
                    <strong>
                        Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.
                    </strong>
                    <div>

                        <Btn>Read More  <i class="ri-arrow-right-line"></i></Btn>
                    </div>
                </div>
            </div>


        </div>
    )
}