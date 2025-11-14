import { Route, Routes } from "react-router"
import StartPage from "./pages/StartPage"
import Home from "./pages/Home"
import Archive from "./pages/Archive"
import Popular from "./pages/Popular"
import Settings from "./pages/Settings"
import Error from "./pages/Error"
import { useEffect } from "react"

function App() {

  const app = document.documentElement

  useEffect(() => {
    if(!localStorage.getItem("darkmode") || localStorage.getItem("darkmode") === "light"){
      localStorage.setItem("darkmode", "light")
      app.setAttribute("data-theme", "light")
    }
    if(localStorage.getItem("darkmode") === "dark"){
      app.setAttribute("data-theme", "dark")
    }

  },[])

  return (
    <>
      <Routes>
        <Route index element={ <StartPage/> }/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/archive" element={<Archive/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
