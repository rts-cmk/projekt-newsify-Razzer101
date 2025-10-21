import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export default function StartupLogo(){

    const section = useRef()
    const img = useRef()
    const h1 = useRef()
    const [startupDisplay, setStartupDisplay] = useState("flex")

    let removeTl = gsap.timeline()
    const displayfunction = () => {
        removeTl.to(img.current, {
            delay: 3,
            opacity: 0
        })
        .to(h1.current, {
            opacity: 0,
        })
        .to(section.current, {
            opacity: 0,
            display: "none",
        })
    }

    let startupTl = gsap.timeline({
        onComplete: displayfunction
    })

    useEffect(() => {
        if(localStorage.getItem("startupTrigger")){
            setStartupDisplay("none");
            localStorage.setItem("startupTrigger", false);
        } else{
            setStartupDisplay("flex");
            localStorage.setItem("startupTrigger", true);

            startupTl.to(img.current, {
                delay: .3,
                width: 170,
                duration: .5
            })
            .to(h1.current, {
                delay: .3,
                opacity: 1,
                duration: .5
            })
        }
    },[])

    return(
        <section ref={section} className="startup-logo-section" style={{display: startupDisplay}}>
            <img ref={img} className="startup-logo-section__img" src="newsifyLogo.png" alt="Newsify logo" />
            <h1 ref={h1} className="startup-logo-section__h1">Newsify</h1>
        </section>
    )
}