import Header from "../components/Header"
import Nav from "../components/Nav"
import ArchivedNews from "../components/ArchivedNews"

export default function Archive(){

    const categoryOrder = localStorage.getItem("categoryOrder") ? JSON.parse(localStorage.getItem("categoryOrder")) : ["world", "health", "sports", "business", "travel"]

    return(
        <>
            <Header/>
            <section className="archive-section">
                {categoryOrder.map((itemCategory) => {
                    return(
                        <ArchivedNews category={itemCategory} title={itemCategory} key={itemCategory}/>
                    )
                })}
            </section>
            <Nav archive="#4D861F"/>
        </>
    )
}