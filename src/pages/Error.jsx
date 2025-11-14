import { Link } from "react-router";

export default function Error(){
    return(
        <section className="error-section">
            <h1>Woops! You aren't on the correct page!</h1>
            <h2>Go back to main page? <Link to="/home">Click here</Link></h2>
        </section>
    )
}