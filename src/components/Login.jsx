import { useState } from "react"

export default function Login(){

    const [loginDisplay, setLoginDisplay] = useState("block")

    return(
        <>
            <section className="login-section" style={{display: loginDisplay}}>
                <figure className="login-logo">
                    <img className="login-logo__img" src="newsifyLogo.png" alt="Newsify logo" />
                    <h1 className="login-logo__h1">Newsify</h1>
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
                <button className="login-section__sign-in" onClick={() => setLoginDisplay("none")}>Sign in with password</button>
                <div className="sign-up">
                    <p className="sign-up__p">Don't have an account?</p>
                    <button className="sign-up__btn">Sign up</button>
                </div>
            </section>
        </>
    )
}