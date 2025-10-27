import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

export default function Login(){

    const navigateHome = useNavigate()
     const [loginReturn, setLoginReturn] = useState(null)

    useEffect(() => {
        if(localStorage.getItem("loginTrigger")){
            localStorage.setItem("loginTrigger", "false");
            setLoginReturn(false)
        } else{
            localStorage.setItem("loginTrigger", "true");
            setLoginReturn(true)
        }
    },[])

    if(localStorage.getItem("loginTrigger") && loginReturn === null || localStorage.getItem("loginTrigger") === "false" && loginReturn === false){
        return
    } else if(!localStorage.getItem("loginTrigger") && loginReturn === null || localStorage.getItem("loginTrigger") === "true" && loginReturn === true){
        return(
            <>
                <section className="login-section">
                    <figure className="login-logo">
                        <img className="login-logo__img" src="newsifyLogo.png" alt="Newsify logo" />
                        <h3 className="login-logo__h3">Newsify</h3>
                    </figure>
                    <p className="login-section__p">Welcome! Let’s dive into your account!</p>
                    <div className="login-btns">
                        <button className="login-btns__facebook">Continue with Facebook</button>
                        <button className="login-btns__google">Continue with Google</button>
                    </div>
                    <div className="or-separator">
                        <span className="or-separator__line"></span>
                        <p className="or-separator__p">or</p>
                        <span className="or-separator__line"></span>
                    </div>
                    <button className="login-section__sign-in" onClick={() => navigateHome("/home")}>Sign in with password</button>
                    <div className="sign-up">
                        <p className="sign-up__p">Don't have an account?</p>
                        <button className="sign-up__btn">Sign up</button>
                    </div>
                </section>
            </>
        )
    }
}