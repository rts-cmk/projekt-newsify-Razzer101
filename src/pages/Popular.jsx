import Header from "../components/Header"
import Nav from "../components/Nav"
import PopularNews from "../components/PopularNews"

export default function Popular(){

    return(
        <>
            <Header/>
            <section className="popular-section">
                <PopularNews category="world" title="world"/>
                <PopularNews category="health" title="health"/>
                <PopularNews category="sports" title="sports"/>
                <PopularNews category="business" title="business"/>
                <PopularNews category="travel" title="travel"/>
            </section>
            <Nav popular="#4D861F"/>
        </>
    )
}