import StartupLogo from "../components/StartupLogo"
import Tutorial from "../components/Tutorial"
import Login from "../components/Login"
import Header from "../components/Header"
import Searchbar from "../components/Searchbar"
import Nav from "../components/Nav"
import News from "../components/News"

export default function Home(){

    return(
        <>
        <StartupLogo/>
        <Tutorial/>
        <Login/>
        <Header/>
        <Searchbar/>
        <section className="news-section">
            {/* <News category="world" title="world"/> */}
            <News category="health" title="health"/>
            <News category="sports" title="Sport"/>
            {/* <News category="business" title="business"/> */}
            <News category="travel" title="Travel"/>
        </section>
        <Nav home="#4D861F"/>
        </>
    )
}