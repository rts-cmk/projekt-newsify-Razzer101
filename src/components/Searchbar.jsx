import { useState, useRef } from "react"
import gsap from "gsap"

export default function Searchbar(){

    const [searchData, setSearchData] = useState(null)
    const [inputValue, setInputValue] = useState("")
    const [closeAnimation, setCloseAnimation] = useState(false)
    const searchDisplay = useRef()
    const searchbar = useRef()

    const handleOpenClick = () => {
        gsap.to(searchDisplay.current, {
            height: "auto",
            marginTop: 20
        })
        gsap.to(searchbar.current, {
            marginBottom: 0
        })
    }

    const handleCloseClick = () => {
        gsap.to(searchDisplay.current, {
            height: 0,
            marginTop: 0
        })
        gsap.to(searchbar.current, {
            marginBottom: 24
        })
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter"){
            const API_KEY = import.meta.env.VITE_API_KEY

            const fetchData = async () => {
                const url = new URL(`https://api.nytimes.com/svc/search/v2/articlesearch.json`)
                url.searchParams.set("q", `"${inputValue}"`)
                url.searchParams.set("fq", 'typeOfMaterials:("News")')
                url.searchParams.set("api-key", API_KEY)
                const response = await fetch(url)
                const data = await response.json()
                setSearchData(data.response.docs)
                setCloseAnimation(true)
                handleOpenClick()
                console.log(data.response.docs)
            }
            fetchData()
        }
        if(e.key === "Backspace" && closeAnimation === true){
            handleCloseClick()
            setCloseAnimation(false)
        }
    }
    
    return(
        <section ref={searchbar} className="searchbar">
            <input onChange={(e) => {setInputValue(e.target.value)}} onKeyDown={(e) => handleKeyPress(e)} className="searchbar__input" type="text" placeholder="Search news"/>
            <div ref={searchDisplay} className="search-display">
                { 
                searchData !== null &&
                    searchData.map((elm) => {
                        return (
                            <a key={elm.uri} className="search-news-box" href={elm.web_url}>
                                <img className="search-news-box__img" src={`${elm.multimedia?.default?.url}`||`${elm.multimedia?.thumbnail?.url}`||`https://placehold.co/200?text=No%20Img`} alt={`${elm.headline.main.slice(0, 25)}...`} />
                                <article className="search-news-box__article">
                                    <h3>{elm.headline.main.slice(0, 25)}...</h3>
                                    <p>{elm.abstract.slice(0, 60)}...</p>
                                </article>
                            </a>
                        )
                    })
                }
            </div>
        </section>
    )
}