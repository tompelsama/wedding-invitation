import tunnel from 'tunnel-rat'
import "./App.css"
import Scene from './components/Scene/Scene'
import axios from 'axios';
import anime from 'animejs/lib/anime.es.js';
import { useEffect, useState } from 'react';
const t = tunnel()

const getIdFromQuery = () => {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  
  if(urlParams.has('id')) {
    return urlParams.get('id').toLowerCase()
  }
  else {
    return false
  }
}

export default function App() {

  const [data, setData] = useState()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get('/invitation.json')
        const matchedData = response.data.find(item => item.uuid === getIdFromQuery())
  
        if(matchedData) {
          setData(matchedData)
        }
        else {
          setData({
            "name": "Stranger"
          })
        }
      } catch (error) {
        console.error(error);
      }
    }

    getUser()
  }, [])

  useEffect(() => {
    if(data) {
      const tiles = document.getElementById("tiles");
      const exploreBtn = document.getElementById("explore");
      const bgm = document.getElementById("bgm")

      let columns = 0,
          rows = 0,
          clicked = false
  
      const handleOnClick = (event, index) => {
          bgm.play()

          exploreBtn.classList.add('clicked')
          if(!clicked) {
              clicked = true
              document.body.classList.toggle("toggled");
  
              anime({
                  targets: ".tile",
                  opacity: 0,
                  delay: anime.stagger(50, {
                      grid: [columns, rows],
                      from: index
                  }),
                  complete: function(anim) {
                      tiles.style.zIndex = -1
                      finishedTask()
                  }
              });
          }
      }
  
      const finishedTask = () => {
          setIsLoaded(true)

          const imageScrollyImg = document.getElementById("imgScroll")

          setTimeout(() => {
            imageScrollyImg.classList.add('hidden')
          }, 2000);
      }
  
      const createTile = index => {
          const tile = document.createElement("div");
          
          tile.classList.add("tile");
          
          tile.style.opacity = 1;
          
          // tile.onclick = e => handleOnClick(e, index);
          
          return tile;
      }
  
      const createTiles = quantity => {
        Array.from(Array(quantity)).map((tile, index) => {
          tiles.appendChild(createTile(index));
        });
      }
  
      const createGrid = () => {
          if(!clicked) {
              tiles.innerHTML = "";
          
              const size = document.body.clientWidth > 800 ? 100 : 50;
              
              columns = Math.floor(document.body.clientWidth / size);
              rows = Math.floor(document.body.clientHeight / size);
              
              tiles.style.setProperty("--columns", columns);
              tiles.style.setProperty("--rows", rows);
              
              createTiles(columns * rows);   
          }
      }
  
      createGrid();
      window.onresize = () => createGrid();

      exploreBtn.onclick = e => handleOnClick(e, 1);
    }
  }, [data])

  return (
    <>
      {
        data && <>
          <div className={`loading ${isLoaded ? 'loaded' : ''}`}>
            <div id="tiles"></div>
            <div className="wrapper">
              <h1 className="title">Hello, <mark>{data.name}</mark>!</h1>
              {
                data.uuid && <>
                  <p className="subtitle">Love is not just about finding the right person, but creating a beautiful life together. <mark>We are</mark> thrilled to <mark>invite you to</mark> witness the union of two hearts, two souls, and two families as Tommy and Michell <mark>embark on</mark> their <mark>journey of love</mark>, <mark>laughter</mark>, and <mark>forever</mark>.</p>

                  <p className="subtitle">#the_aToMic_love</p>

                  <button id="explore">Explore more</button>
                </>
              }
            </div>
          </div>
          <img id="imgScroll" className="image-scrolly" src="/images/scrolling_mousewheel.gif" alt="" />
          <audio id="bgm" type="audio/mp3" src="/bgm-song.mp3" muted={isMuted} loop></audio>
          <button className="audio-btn" onClick={() => setIsMuted(!isMuted)}><img src={isMuted ? "/images/mute.png" : "/images/audio.png"} alt="Audio Icon" /></button>
          {
            data.uuid && <Scene />
          }
        </>
      }
    </>
  )
}