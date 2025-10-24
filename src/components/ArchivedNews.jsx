import { useRef, useState } from "react"
import gsap from "gsap"
import { TbTrash } from "react-icons/tb"

export default function ArchivedNews({ category, title }){

    const [isOpen, setIsOpen] = useState(false)
    const newsDisplay = useRef()
    const arrow = useRef()

    const data = JSON.parse(localStorage.getItem(`${category}ArchivedData`))
    const [archivedData, setArchivedData] = useState(data)

    const handleRemoveClick = (elm) => {
        setArchivedData((currentList) => {
            const newData = currentList.filter(item => item !== elm)
            localStorage.setItem(`${category}ArchivedData`, JSON.stringify(newData))
            return newData
        })
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

    if(archivedData.length === 0){
        return
    } else{
        return(
            <>
                <button onClick={() => isOpen ? handleCloseClick() : handleOpenClick()} className="archive-section__btn">
                    <img src="newsifyLogo.png" alt="Newsify logo" />
                    <h2>{title}</h2>
                    <div ref={arrow}>&#8250;</div>
                </button>
                <div ref={newsDisplay} className="news-display">
                    { 
                        archivedData.map((elm) => {
                            return (
                                <div key={elm.uri} className="news-box-section">
                                    <a className="news-box" href={elm.url}>
                                        <img className="news-box__img" src="https://placehold.co/200?text=No%20Img" alt={`${elm.title.slice(0, 25)}...`} />
                                        <article className="news-box__article">
                                            <h3>{elm.title.slice(0, 25)}...</h3>
                                            <p>{elm.abstract.slice(0, 60)}...</p>
                                        </article>
                                    </a>
                                    <button onClick={() => handleRemoveClick(elm)} className="news-box-section__btn" style={{backgroundColor: "#FF5D5D"}}><TbTrash/></button>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }

}