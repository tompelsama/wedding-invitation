import { Clouds, Cloud, useScroll, Float } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { MainIsland } from '../models/MainIsland'
import { FloatingIslandWater } from '../models/FloatingIslandWater'
import { FloatingChest } from '../models/FloatingChest'
import { FloatingSteps } from '../models/FloatingSteps'
import { SkyIsland } from '../models/SkyIsland'

const World = () => {
    const ref = useRef()
    const scroll = useScroll()
    
    useFrame((state, delta) => {
        // console.log(scroll.offset)
        // console.log(scroll.offset)
        // console.log(scroll)
        // console.log(scroll.scroll.current)

        
        // console.log(delta)
        // if(scroll.offset >= 0 && scroll.offset <= 1)
            ref.current.rotation.y = -Math.PI * 2 * scroll.offset
    })

    return (
        <group ref={ref}>
            <MainIsland position={[-2, -5, -4]} />
            <Float speed={0.3}>
                <FloatingIslandWater position={[-20, -2, 40]} scale={0.3} rotation={[0, 2, 6]} />
                <SkyIsland position={[10, 7, -38]} scale={0.2} rotation={[0, 10, 0]} />
                <FloatingChest position={[-15, 3, -12]} scale={0.08} />
                <FloatingSteps position={[55, -20, 30]} rotation={[0, 5, 32]} scale={0.8} />
            </Float>
            <Clouds texture="/images/cloud.png">
                <Cloud speed={0.1} seed={1} opacity={1} volume={100} bounds={[90, 20, 90]} position={[0, 10, 0]} />
            </Clouds>
        </group>
    )
}

export default World