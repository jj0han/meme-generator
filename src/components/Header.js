import logo from "../assets/troll-face.svg"

export default function Header() {
    return (
        <header className="header">
            <div className="header__divisor">
                <img src={logo} alt="logo"/>
                <h1 className="header__title">Meme Generator</h1>
            </div>
            <p className="header__project">React Course - Project 3</p>
        </header>
    )
}