import { Route, Routes } from "react-router"
import Settings from "./pages/Settings"
import Popular from "./pages/Popular"
import Archive from "./pages/Archive"
import Home from "./pages/Home"
import Error from "./pages/Error"

function App() {

  return (
    <>
      <Routes>
        <Route index element={ <Home/> }/>
        <Route path="/archive" element={<Archive/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
