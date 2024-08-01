import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import { easing } from 'maath'
import { FlyingCarpet } from '../models/FlyingCarpet'

const Player = (props) => {
    const ref = useRef()
    const scroll = useScroll()
    useFrame((state, delta) => {
        // console.log(scroll)
        // console.log(scroll.offset)
    //   easing.damp3(state.camera.position, [state.pointer.x, 2 + state.pointer.y, 15.5], 0.2, delta)
      state.camera.lookAt(0, -4, -10)
    //   ref.current.rotation.x = -Math.PI * 2 * scroll.offset
      ref.current.position.y = 1 + Math.sin(-Math.PI * 8 * scroll.offset)
    })
    return (
      <group {...props}>
        {/* <CartoonPlane ref={ref} /> */}
        <FlyingCarpet ref={ref} />
      </group>
    )
}

export default Player