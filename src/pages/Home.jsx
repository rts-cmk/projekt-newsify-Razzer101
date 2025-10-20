import StartupLogo from "../components/StartupLogo"
import Tutorial from "../components/Tutorial"
import Login from "../components/Login"
import Header from "../components/Header"
import Searchbar from "../components/Searchbar"
import Nav from "../components/Nav"
import { useState } from "react"

export default function Home(){

    const [triggerTutorial, setTriggerTutorial] = useState(false)

    return(
        <>
        <StartupLogo tutorialTrigger= {setTriggerTutorial}/>
        <Tutorial tutorialTrigger={triggerTutorial}/>
        <Login/>
        <Header/>
        <Searchbar/>
        <section className="home-section"></section>
        <Nav/>
        </>
    )
}