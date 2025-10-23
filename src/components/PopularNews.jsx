import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export default function PopularNews({ category, title }){

    const [popularNewsData, setPopularNewsData] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const newsDisplay = useRef()
    const arrow = useRef()

    if(!localStorage.getItem(`${category}Display`)){
        useEffect(()=>{
            const API_KEY = import.meta.env.VITE_API_KEY

            const fetchData = async () => {
                const url = new URL(`https://api.nytimes.com/svc/mostpopular/v2//emailed/7.json`)
                url.searchParams.set("api-key", API_KEY)

                const response = await fetch(url)
                const data = await response.json()
                    setPopularNewsData(data.results.filter((item) => item.nytdsection === `${category}`))
            }

            fetchData()
        },[])
    }
    
    const handleOpenClick = () => {
        gsap.to(newsDisplay.current, {
            height: "auto",
        })
        gsap.to(arrow.current, {
            rotateZ: 90
        })

        setIsOpen(true)
    }

        const handleCloseClick = () => {
        gsap.to(newsDisplay.current, {
            height: 0,
        })
        gsap.to(arrow.current, {
            rotateZ: 0
        })

        setIsOpen(false)
    }

    if(localStorage.getItem(`${category}Display`)){
        return
    } else{
        return(
            <>
                <button onClick={() => isOpen ? handleCloseClick() : handleOpenClick()} className="popular-section__btn">
                    <img src="newsifyLogo.png" alt="Newsify logo" />
                    <h2>{title}</h2>
                    <div ref={arrow}>&#8250;</div>
                </button>
                <div ref={newsDisplay} className="news-display">
                    { 
                    popularNewsData !== null &&
                        popularNewsData.map((elm) => {
                            return (
                                <a key={elm.uri} className="popular-news-box" href={elm.url}>
                                    <img className="popular-news-box__img" src="https://placehold.co/200?text=No%20Img" alt={`${elm.title.slice(0, 30)}...`} />
                                    <article className="popular-news-box__article">
                                        <h3>{elm.title.slice(0, 25)}...</h3>
                                        <p>{elm.abstract.slice(0, 60)}...</p>
                                    </article>
                                </a>
                            )
                        })
                    }
                </div>
            </>
        )
    }
    
}