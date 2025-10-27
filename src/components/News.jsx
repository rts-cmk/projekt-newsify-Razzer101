import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { TbBookmark } from "react-icons/tb"

export default function News({ category, title}){

    const [newsData, setNewsData] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const newsDisplay = useRef()
    const arrow = useRef()

    if(!localStorage.getItem(`${category}Display`)){
        useEffect(()=>{
            const API_KEY = import.meta.env.VITE_API_KEY

            const fetchData = async () => {
                const url = new URL(`https://api.nytimes.com/svc/topstories/v2/${category}.json`)
                url.searchParams.set("api-key", API_KEY)
                const response = await fetch(url)
                const data = await response.json()
                setNewsData(data.results.slice(0, 5))
            }

            fetchData()
        },[])
    }

    const [archivedData, setArchivedData] = useState(JSON.parse(localStorage.getItem(`${category}ArchivedData`)) || [])
    localStorage.setItem(`${category}ArchivedData`, JSON.stringify(archivedData))
    const handleSaveClick = (elm) => {
        setArchivedData(currentContent => currentContent.some(item => item.url === elm.url) ? currentContent : [...currentContent, elm])
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
                <button onClick={() => isOpen ? handleCloseClick() : handleOpenClick()} className="news-section__btn">
                    <img src="newsifyLogo.png" alt="Newsify logo" />
                    <h2>{title}</h2>
                    <div ref={arrow}>&#8250;</div>
                </button>
                <div ref={newsDisplay} className="news-display">
                    { 
                    newsData !== null &&
                        newsData.map((elm) => {
                            return (
                                <div key={elm.uri} className="news-box-section">
                                    <a className="news-box" href={elm.url}>
                                        <img className="news-box__img" src={`${elm.multimedia[0].url}`||`${elm.multimedia[1].url}`||`${elm.multimedia[2].url}`||`https://placehold.co/200?text=No%20Img`} alt={`${elm.title.slice(0, 25)}...`} />
                                        <article className="news-box__article">
                                            <h3>{elm.title.slice(0, 25)}...</h3>
                                            <p>{elm.abstract.slice(0, 60)}...</p>
                                        </article>
                                    </a>
                                    <button onClick={() => handleSaveClick(elm)} className="news-box-section__btn" style={{backgroundColor: "#46781b"}}><TbBookmark/></button>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
    
}