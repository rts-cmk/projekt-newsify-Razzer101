import Header from "../components/Header"
import Searchbar from "../components/Searchbar"
import Nav from "../components/Nav"
import News from "../components/News"

export default function Home(){

    const categoryOrder = localStorage.getItem("categoryOrder") ? JSON.parse(localStorage.getItem("categoryOrder")) : ["world", "health", "sports", "business", "travel"]

    return(
        <>
            <Header/>
            <Searchbar/>
            <section className="news-section">
                {categoryOrder.map((itemCategory) => {
                    return(
                        <News category={itemCategory} title={itemCategory}/>
                    )
                })}
            </section>
            <Nav home="#4D861F"/>
        </>
    )
}