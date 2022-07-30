import './App.css'
import Header from './components/Header'
import Meme from './components/Meme'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App() {
  const [allImages, setAllImages] = useState([])

  const [memes, setMemes] = useState({
    topText: "Então a Terra não é plana?",
    bottomText: "Nunca foi",
    memeImage: "https://i.imgflip.com/46e43q.png"
  })

  useEffect(function() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllImages(data.data.memes))
  }, [])

  console.log(allImages)

  function randomImage() {
    const num = Math.floor(Math.random()*100)
    setMemes(
      {
        ...memes,
        memeImage: allImages[num].url
      }
    )
  }

  return (
    <div className='page'>
      <Header/>
      <Meme
        topText={memes.topText}
        bottomText={memes.bottomText}
        memeImage={memes.memeImage}
        randomImage={randomImage}
      />
    </div>
  )
}