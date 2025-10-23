import CategoryToggle from "../components/CategoryToggle"
import Header from "../components/Header"
import Nav from "../components/Nav"

export default function Settings(){

    const app = document.documentElement

    const handleDarkModeChange = () => {
        app.setAttribute("data-theme", 
            app.getAttribute("data-theme") === "dark" ? "light" :
            app.getAttribute("data-theme") === "light" ? "dark" :
            window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark"
        )
    }

    return(
        <>
            <Header/>
            <section className="settings-section">
                <h2 className="settings-section__h2">Settings</h2>
                <h3 className="settings-section__h3">Categories</h3>
                <CategoryToggle category="world" title="world" />
                <CategoryToggle category="health" title="health" />
                <CategoryToggle category="sports" title="sports" />
                <CategoryToggle category="business" title="business" />
                <CategoryToggle category="travel" title="travel" />
                <button onClick={() => handleDarkModeChange()} className="settings-section__darkmode">Toggle dark mode</button>
            </section>
            <Nav settings="#4D861F"/>
        </>
    )
}