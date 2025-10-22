import CategoryToggle from "../components/CategoryToggle"
import Header from "../components/Header"
import Nav from "../components/Nav"

export default function Settings(){

    return(
        <>
            <Header/>
            <section className="settings-section">
                <h2 className="settings-section__h2">Settings</h2>
                <h3 className="settings-section__h3">Categories</h3>
                <CategoryToggle category="world" title="world" />
                <button className="settings-section__darkmode">Toggle dark mode</button>
            </section>
            <Nav settings="#4D861F"/>
        </>
    )
}