import Header from "../components/Header"
import Nav from "../components/Nav"
import PopularNews from "../components/PopularNews"

export default function Popular(){

    return(
        <>
            <Header/>
            <section className="popular-section">
                <PopularNews category="world" title="world" categoryOrder="1"/>
                <PopularNews category="health" title="health" categoryOrder="2"/>
                <PopularNews category="sports" title="sports" categoryOrder="3"/>
                <PopularNews category="business" title="business" categoryOrder="4"/>
                <PopularNews category="travel" title="travel" categoryOrder="5"/>
            </section>
            <Nav popular="#4D861F"/>
        </>
    )
}