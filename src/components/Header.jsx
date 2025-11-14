export default function Header(){
    return(
        <>
            <aside className="nyt-logo">
                <a href="https://developer.nytimes.com">
                    <img src="NYTLogo.png" alt="New york times logo" />
                </a>
            </aside>
            <header className="header-section">
                <img className="header-section__img" src="newsifyLogo.png" alt="Newsify logo" />
                <h1 className="header-section__h1">Newsify</h1>
            </header>
        </>
    )
}