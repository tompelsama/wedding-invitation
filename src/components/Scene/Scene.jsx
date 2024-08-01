import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, Sky, useScroll } from '@react-three/drei'
import { easing } from 'maath'
import Player from '../Player'
import World from '../World'
import tunnel from 'tunnel-rat'
import './Scene.css'
const t = tunnel()

const Scene = () => {
  return <>
        <Canvas shadows camera={{ position: [0, 2, 16.5] }}>
            <ambientLight intensity={Math.PI / 2} />
            <spotLight position={[10, 3, 10]} angle={0.45} penumbra={1} decay={0} intensity={Math.PI * 1.25} castShadow shadow-bias={-0.00001} />
            <directionalLight position={[10, -20, 5]} intensity={Math.PI} />
            <ScrollControls pages={10} infinite damping={0.07} style={{
              overscrollBehavior: 'none'
            }}>
                <Player position={[0, 0.5, 14.5]} scale={0.3} />
                <World />
                <OurLoveStory />
                <Location />
                <Rvsp />
                <WhatToExpect />
                <Gift />
            </ScrollControls>
            <Sky />
        </Canvas>
        <t.Out />
    </>
}

const OurLoveStory = () => {
    const ref = useRef()
    const scroll = useScroll()
    
    useFrame((state, delta) => {
        easing.damp(ref.current.style, 'opacity', scroll.offset > 0 && scroll.offset < 0.1 ? 1 : 0, 0.2, delta)
    })

    return (
      <t.In>
        <div ref={ref} className="scrolly-note">
          <h2>Our love story</h2>
          <p>Our love story began 8 years ago, and it has been an incredible journey ever since. From our first date to this special moment, we have shared countless memories filled with love, laughter, and joy.</p>
        </div>
      </t.In>
    )
}

const Location = () => {
    const ref = useRef()
    const ceremonyLink = useRef()
    const receptionLink = useRef()
    const scroll = useScroll()
    
    useFrame((state, delta) => {
        easing.damp(ref.current.style, 'opacity', scroll.offset > 0.15 && scroll.offset < 0.30 ? 1 : 0, 0.2, delta)

        if(scroll.offset > 0.15 && scroll.offset < 0.30) {
          ref.current.style.zIndex = 10
          ceremonyLink.current.style.pointerEvents = "all" 
          receptionLink.current.style.pointerEvents = "all" 
        }
        else {
          ref.current.style.zIndex = 0
          ceremonyLink.current.style.pointerEvents = "none"
          receptionLink.current.style.pointerEvents = "none"
        }
    })

    return (
      <t.In>
        <div ref={ref} className="scrolly-note">
          <h2>Event Details</h2>
          <div className="event-detail">
            <div className="event-detail-col">
              <p><span className="event-detail-subtitle">Ceremony:</span><br/>
              Date: 16 September 2024 at 09:30 a.m.<br/>
              Location: Function Room, <a ref={ceremonyLink} href="https://www.google.com/maps/place/The+Ritz-Carlton+Jakarta,+Mega+Kuningan/@-6.2288702,106.8275731,17z/data=!4m15!1m5!3m4!2zNsKwMTMnNDMuOSJTIDEwNsKwNDknMzkuMyJF!8m2!3d-6.2288702!4d106.8275731!3m8!1s0x2e69f3e53dc5171b:0x27a868ad3cd40c7d!5m2!4m1!1i2!8m2!3d-6.2289029!4d106.827234!16s%2Fm%2F06zqqr1?hl=en&entry=ttu" target='_blank'>The Ritz-Carlton Jakarta, Mega Kuningan</a>.</p>
            </div>
            <div className="event-detail-col">
              <p><span className="event-detail-subtitle">Reception:</span><br/>
              Date: 16 September 2024 at 12:30 p.m.<br/>
              Location: Asia Restaurant, <a ref={receptionLink} href="https://www.google.com/maps/place/The+Ritz-Carlton+Jakarta,+Mega+Kuningan/@-6.2288702,106.8275731,17z/data=!4m15!1m5!3m4!2zNsKwMTMnNDMuOSJTIDEwNsKwNDknMzkuMyJF!8m2!3d-6.2288702!4d106.8275731!3m8!1s0x2e69f3e53dc5171b:0x27a868ad3cd40c7d!5m2!4m1!1i2!8m2!3d-6.2289029!4d106.827234!16s%2Fm%2F06zqqr1?hl=en&entry=ttu" target='_blank'>The Ritz-Carlton Jakarta, Mega Kuningan</a>.</p>
            </div>
          </div>
        </div>
      </t.In>
    )
}

const Rvsp = () => {
  const ref = useRef()
  const registerButton = useRef()
  const scroll = useScroll()
  
  useFrame((state, delta) => {
      
      easing.damp(ref.current.style, 'opacity', scroll.offset > 0.39 && scroll.offset < 0.52 ? 1 : 0, 0.2, delta)
      
      if(scroll.offset > 0.39 && scroll.offset < 0.52) {
        ref.current.style.zIndex = 10
        registerButton.current.style.pointerEvents = "all"
      } 
      else {
        ref.current.style.zIndex = 0
        registerButton.current.style.pointerEvents = "none"
      }
      
  })

  return (
    <t.In>
      <div ref={ref} className="scrolly-note">
        <h2>RSVP</h2>
        <p>Please let us know if you can attend by clicking the register button below. <br/>Your presence will mean the world to us.</p>
        <a ref={registerButton} href='https://forms.gle/4znmRpzygN8YXAPe8' target='_blank' className="rvsp-button">Register</a>
      </div>
    </t.In>
  )
}

const WhatToExpect = () => {
  const ref = useRef()
  const scroll = useScroll()
  
  useFrame((state, delta) => {
      
      easing.damp(ref.current.style, 'opacity', scroll.offset > 0.55 && scroll.offset < 0.65 ? 1 : 0, 0.2, delta)
  })

  return (
    <t.In>
      <div ref={ref} className="scrolly-note">
        <h2>What to expect</h2>
        <p>Our wedding will be an intimate celebration of love, laughter, and cherished memories. Expect delightful moments, heartfelt vows, and a day filled with dancing and joy.</p>
        <p>Your presence at our wedding is the greatest gift we could ask for.</p>
      </div>
    </t.In>
  )
}

const Gift = () => {
  const ref = useRef()
  const scroll = useScroll()
  
  useFrame((state, delta) => {
      
      easing.damp(ref.current.style, 'opacity', scroll.offset > 0.7 && scroll.offset < 0.81 ? 1 : 0, 0.2, delta)
  })

  return (
    <t.In>
      <div ref={ref} className="scrolly-note">
        <h2>Gift Idea</h2>
        <p>If you wish to honor us with a gift, we would be overjoyed to receive honeymoon fund or cash gift. Your generosity will help us create unforgettable memories as we embark on this new chapter together.</p>
        <div className="b-account">
          <div className="b-account-container">
            <span>Tommy Saputra</span>
            <span>BSB: 923100</span>
            <span>Account Number: 308973222</span>
            <p>If you prefer to add an element of surprise, we also welcome surprise gifts!</p>
          </div>
        </div>
      </div>
    </t.In>
  )
}

export default Scene