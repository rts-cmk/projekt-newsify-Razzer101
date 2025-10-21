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
            <News category="health" title="health"/>
            <News category="sports" title="Sport"/>
            <News category="travel" title="Travel"/>
            {/* <News category="movies" title="movies"/>
            <News category="politics" title="politics"/>
            <News category="science" title="science"/>
            <News category="technology" title="technology"/>
            <News category="world" title="world"/> */}
        </section>
        <Nav/>
        </>
    )
}