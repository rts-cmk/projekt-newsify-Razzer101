import Header from "./components/Header"
import Searchbar from "./components/Searchbar"
import Nav from "./components/Nav"

export default function Home(){
    return(
        <>
        <Header/>
        <Searchbar/>
        <section className="home-section"></section>
        <Nav/>
        </>
    )
}