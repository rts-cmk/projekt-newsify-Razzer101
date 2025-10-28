import Header from "../components/Header"
import Nav from "../components/Nav"
import ArchivedNews from "../components/ArchivedNews"

export default function Archive(){
    return(
        <>
            <Header/>
            <section className="archive-section">
                <ArchivedNews category="world" title="world" categoryOrder="1"/>
                <ArchivedNews category="health" title="health" categoryOrder="2"/>
                <ArchivedNews category="sports" title="sports" categoryOrder="3"/>
                <ArchivedNews category="business" title="business" categoryOrder="4"/>
                <ArchivedNews category="travel" title="travel" categoryOrder="5"/>
            </section>
            <Nav archive="#4D861F"/>
        </>
    )
}