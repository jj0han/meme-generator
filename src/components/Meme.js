import { useState } from "react"

export default function Meme(props) {
    const [inputs, setInputs] = useState({
        topText: props.topText,
        bottomText: props.bottomText
    })
    
    function handleChange(event) {
        const {name, value} = event.target
        setInputs(prevInputs => {
            return {
                ...prevInputs,
                [name]: value
            }
        })
    }

    return (
        <main className="main">
            <div className="main__inputs">
                <input
                    className="main__input"
                    placeholder="Primeira frase"
                    type="text"
                    name="topText"
                    value={inputs.topText}
                    onChange={handleChange}
                />
                <input
                    className="main__input"
                    placeholder="Segunda frase"
                    type="text"
                    name="bottomText"
                    value={inputs.bottomText}
                    onChange={handleChange}
                />
            </div>
            <button className="main__button" onClick={props.randomImage}>Nova imagem</button>
            <div className="main__meme">
                <p className="main__text">{inputs.topText}</p>
                <p className="main__text">{inputs.bottomText}</p>
                <img className="main__image" src={props.memeImage} alt="meme"/>
            </div>
            <footer>
                <small>Desenvolvido por João Bomfim</small>
            </footer>
        </main>
    )
}