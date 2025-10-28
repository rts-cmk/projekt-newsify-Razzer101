import Header from "../components/Header"
import Searchbar from "../components/Searchbar"
import Nav from "../components/Nav"
import News from "../components/News"

export default function Home(){

    return(
        <>
            <Header/>
            <Searchbar/>
            <section className="news-section">
                <News category="world" title="world" categoryOrder="1"/>
                <News category="health" title="health" categoryOrder="2"/>
                <News category="sports" title="sports" categoryOrder="3"/>
                <News category="business" title="business" categoryOrder="4"/>
                <News category="travel" title="travel" categoryOrder="5"/>
            </section>
            <Nav home="#4D861F"/>
        </>
    )
}