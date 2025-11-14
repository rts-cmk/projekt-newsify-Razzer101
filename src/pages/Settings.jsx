import { useEffect, useState } from "react"
import CategoryToggle from "../components/CategoryToggle"
import Header from "../components/Header"
import Nav from "../components/Nav"

export default function Settings(){

    const StartCategoryOrder = ["world", "health", "sports", "business", "travel"]
    const [categories, setCategories] = useState(localStorage.getItem("categoryOrder") ? JSON.parse(localStorage.getItem("categoryOrder")) : StartCategoryOrder)
    const [currentDraggedItem, setCurrentDraggedItem] = useState(null)

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

    useEffect(() => {
        localStorage.setItem("categoryOrder", JSON.stringify(categories))
    },[categories])

    const handleDragStart = (e, index) => {
        setCurrentDraggedItem(index)
    }

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleDrop = (e, index) => {
        e.preventDefault()
        
        if(currentDraggedItem !== null || currentDraggedItem !== index){
            setCategories((current) => {
                const updatedList = [...current]
                const [currentCategory] = updatedList.splice(currentDraggedItem, 1)
                updatedList.splice(index, 0, currentCategory)
                return updatedList
            })
            setCurrentDraggedItem(null)
        }
    }

    return(
        <>
            <Header/>
            <section className="settings-section">
                <h2 className="settings-section__h2">Settings</h2>
                <h3 className="settings-section__h3">Categories</h3>
                {categories.map((itemCategory, index) => {
                    return(
                        <CategoryToggle  
                            category={itemCategory}
                            key={itemCategory}
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragOver={(e) => handleDragOver(e)}
                            onDrop={(e) => handleDrop(e, index)}
                        />
                    )
                })}
                <button onClick={() => handleDarkModeChange()} className="settings-section__darkmode">Toggle dark mode</button>
            </section>
            <Nav settings="#4D861F"/>
        </>
    )
}