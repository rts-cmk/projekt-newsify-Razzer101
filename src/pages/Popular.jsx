import Header from "../components/Header"
import Nav from "../components/Nav"
import PopularNews from "../components/PopularNews"

export default function Popular(){

    const categoryOrder = localStorage.getItem("categoryOrder") ? JSON.parse(localStorage.getItem("categoryOrder")) : ["world", "health", "sports", "business", "travel"]
    
    return(
        <>
            <Header/>
            <section className="popular-section">
                {categoryOrder.map((itemCategory) => {
                    return(
                        <PopularNews category={itemCategory} title={itemCategory} key={itemCategory}/>
                    )
                })}
            </section>
            <Nav popular="#4D861F"/>
        </>
    )
}