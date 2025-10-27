import { useEffect, useState } from "react"

export default function Tutorial(){

    const [tutorialDisplay, setTutorialDisplay] = useState("block")
    const [slideDisplay, setSlideDisplay] = useState(1)
    const [dotsPos, setDotsPos] = useState("start")
    const [tutorialReturn, setTutorialReturn] = useState(null)

    useEffect(() => {
        if(localStorage.getItem("tutorialTrigger")){
            localStorage.setItem("tutorialTrigger", "false");
            setTutorialReturn(false)
        } else{
            localStorage.setItem("tutorialTrigger", "true");
            setTutorialReturn(true)
        }
    },[])

    if(localStorage.getItem("tutorialTrigger") && tutorialReturn === null || localStorage.getItem("tutorialTrigger") === "false" && tutorialReturn === false){
        return
    } else if(!localStorage.getItem("tutorialTrigger") && tutorialReturn === null || localStorage.getItem("tutorialTrigger") === "true" && tutorialReturn === true){
        return(
            <section className="tutorial-section" style={{display: tutorialDisplay}}>
                <div className="slider">
                    <figure className={`slider__figure ${slideDisplay === 1 ? "slider__figure--block" : "slider__figure--none"}`}>
                        <img className="slider__img" src="tutorialImg1.png" alt="Stay connected" />
                        <figcaption className="slider__figcaption">
                            <h2>Stay Conected, <br /> Everywhere, Anytime</h2>
                            <p>Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.</p>
                        </figcaption>
                    </figure>
                    <figure className={`slider__figure ${slideDisplay === 2 ? "slider__figure--block" : "slider__figure--none"}`}>
                        <img className="slider__img" src="tutorialImg2.png" alt="Become Savvy" />
                        <figcaption className="slider__figcaption">
                            <h2>Become a Savvy <br /> Global Citizen.</h2>
                            <p>Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!</p>
                        </figcaption>
                    </figure>
                    <figure className={`slider__figure ${slideDisplay === 3 ? "slider__figure--block" : "slider__figure--none"}`}>
                        <img className="slider__img" src="tutorialImg3.png" alt="Enhance you news" />
                        <figcaption className="slider__figcaption">
                            <h2>Enhance your News <br /> Journey Now!</h2>
                            <p>Be part of our dynamic community and contribute your insights and participate in enriching conversations.</p>
                        </figcaption>
                    </figure>
                </div>
                <div className="slider-dots">
                    <span className="slider-dots__span"></span>
                    <span className="slider-dots__span"></span>
                    <span className="slider-dots__span"></span>
                    <span className="slider-dots__span"></span>
                    <span className="slider-dots__span"></span>
                    <div className="slider-dots__slider-page">
                        <div style={{justifyContent: dotsPos}}>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="slider-btns">
                    <button onClick={() => {setTutorialDisplay("none")}} className="slider-btns__skip">Skip</button>
                    <button onClick={() => {slideDisplay === 3 ? setTutorialDisplay("none") : setSlideDisplay( (current) => {
                        const newdisplay = current + 1
                        if(newdisplay === 1){
                            setDotsPos("start")
                        } else if(newdisplay === 2){
                            setDotsPos("center")
                        } else {
                            setDotsPos("end")
                        }
                        return newdisplay
                    })}} className="slider-btns__continue">Continue</button>
                </div>
            </section>
        )
    }
}