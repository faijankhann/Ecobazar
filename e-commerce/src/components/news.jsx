import "../components/news.css"
import { NewsCard } from "./newsCard"


export const News = () =>{
    return (
        <section className="news">
            <div className="news-heading">
                <h2>Latest News</h2>
            </div>
            <NewsCard/>
        </section>
    )
}
