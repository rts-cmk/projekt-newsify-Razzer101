import { useEffect, useRef } from "react"
import gsap from "gsap"
import { useNavigate } from "react-router"

export default function StartupLogo(){

    const section = useRef()
    const img = useRef()
    const h1 = useRef()
    const navigateHome = useNavigate()

    const skipFunction = () => {
        if(localStorage.getItem("loginTrigger")){
            localStorage.setItem("loginTrigger", false);
            navigateHome("/home")
        } else{
            localStorage.setItem("loginTrigger", true);
        }
    }

    useEffect(() => {
        let startupTl = gsap.timeline({})

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
        .to(img.current, {
            delay: 1,
            opacity: 0
        })
        .to(h1.current, {
            opacity: 0,
            onComplete: skipFunction
        })
        .to(section.current, {
            opacity: 0,
            display: "none",
        })
    },[])

    return(
        <section ref={section} className="startup-logo-section">
            <img ref={img} className="startup-logo-section__img" src="newsifyLogo.png" alt="Newsify logo" />
            <h1 ref={h1} className="startup-logo-section__h1">Newsify</h1>
        </section>
    )
}