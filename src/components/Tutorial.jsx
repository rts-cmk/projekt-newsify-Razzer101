import { useEffect, useState } from "react"
import gsap from "gsap"

export default function Tutorial(){

    const [tutorialDisplay, setTutorialDisplay] = useState("block")
    const [slideDisplay, setSlideDisplay] = useState(1)

    // useEffect(() => {
    //     if(localStorage.getItem("tutorialTrigger")){
    //         setTutorialDisplay("none");
    //         localStorage.setItem("tutorialTrigger", false);
    //     } else{
    //         setTutorialDisplay("block");
    //         localStorage.setItem("tutorialTrigger", true);
    //     }
    // },[])

    return(
        <section className="tutorial-section" style={{display: tutorialDisplay}}>
            <div className="slider">
                <figure className={`slider__figure ${slideDisplay === 1 ? "slider__figure--block" : "slider__figure--none"}`}>
                    <img className="slider__img" src="tutorialImg1.png" alt="Stay connected" />
                    <figcaption className="slider__figcaption">
                        <h1>Stay Conected, <br /> Everywhere, Anytime</h1>
                        <p>Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.</p>
                    </figcaption>
                </figure>
                <figure className={`slider__figure ${slideDisplay === 2 ? "slider__figure--block" : "slider__figure--none"}`}>
                    <img className="slider__img" src="tutorialImg2.png" alt="Become Savvy" />
                    <figcaption className="slider__figcaption">
                        <h1>Become a Savvy <br /> Global Citizen.</h1>
                        <p>Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!</p>
                    </figcaption>
                </figure>
                <figure className={`slider__figure ${slideDisplay === 3 ? "slider__figure--block" : "slider__figure--none"}`}>
                    <img className="slider__img" src="tutorialImg3.png" alt="Enhance you news" />
                    <figcaption className="slider__figcaption">
                        <h1>Enhance your News <br /> Journey Now!</h1>
                        <p>Be part of our dynamic community and contribute your insights and participate in enriching conversations.</p>
                    </figcaption>
                </figure>
            </div>
            <div className="slider-dots">
                <span className="slider-dots__span"></span>
                <span className="slider-dots__span"></span>
                <span className="slider-dots__span"></span>
                <span className="slider-dots__span"></span>
            </div>
            <div className="slider-btns">
                <button onClick={() => {setTutorialDisplay("none")}} className="slider-btns__skip">Skip</button>
                <button onClick={() => {slideDisplay === 3 ? setTutorialDisplay("none") : setSlideDisplay(slideDisplay + 1)}} className="slider-btns__continue">Continue</button>
            </div>
        </section>
    )
}