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
                {/* <News category="world" title="world"/> */}
                {/* <News category="health" title="health"/> */}
                {/* <News category="sports" title="sports"/> */}
                {/* <News category="business" title="business"/> */}
                {/* <News category="travel" title="travel"/> */}
            </section>
            <Nav home="#4D861F"/>
        </>
    )
}