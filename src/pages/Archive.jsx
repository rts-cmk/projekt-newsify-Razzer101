import Header from "../components/Header"
import Nav from "../components/Nav"
import ArchivedNews from "../components/ArchivedNews"

export default function Archive(){
    return(
        <>
            <Header/>
            <section className="archive-section">
                <ArchivedNews category="world" title="world"/>
                <ArchivedNews category="health" title="health"/>
                <ArchivedNews category="sports" title="sports"/>
                <ArchivedNews category="business" title="business"/>
                <ArchivedNews category="travel" title="travel"/>
            </section>
            <Nav archive="#4D861F"/>
        </>
    )
}