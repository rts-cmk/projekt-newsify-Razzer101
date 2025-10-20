import StartupLogo from "../components/StartupLogo"
import Tutorial from "../components/Tutorial"
import Login from "../components/Login"
import Header from "../components/Header"
import Searchbar from "../components/Searchbar"
import Nav from "../components/Nav"

export default function Home(){


    return(
        <>
        <StartupLogo/>
        <Tutorial/>
        <Login/>
        <Header/>
        <Searchbar/>
        <section className="home-section"></section>
        <Nav/>
        </>
    )
}