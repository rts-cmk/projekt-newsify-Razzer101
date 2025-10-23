import CategoryToggle from "../components/CategoryToggle"
import Header from "../components/Header"
import Nav from "../components/Nav"

export default function Settings(){

    const app = document.documentElement

    const handleDarkModeChange = () => {
        if(localStorage.getItem("darkmode") === "light"){
            app.setAttribute("data-theme", "dark")
            localStorage.setItem("darkmode", "dark")
        } else {
            app.setAttribute("data-theme", "light")
            localStorage.setItem("darkmode", "light")
        }
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