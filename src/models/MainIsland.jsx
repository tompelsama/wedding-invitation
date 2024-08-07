/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function MainIsland(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/wedding-island-new-transformed.glb')
    const { actions } = useAnimations(animations, group)

    useFrame((state, delta) => {
        actions["PinAction"].play()
        actions["Animation"].play()
    })

    return (
    <group ref={group} {...props} dispose={null}>
        <group name="Scene">
            <group name="GLTF_SceneRootNode">
                <group name="Crossbow001_40" position={[-1.1, 3.021, 5.6]} scale={0.215} />
                <group name="Crossbow002_42" position={[3.3, 3.018, 5.6]} scale={0.215} />
                <group name="Crossbow003_44" position={[6.6, 3.019, -0.2]} scale={0.215} />
                <group name="Crossbow004_46" position={[-0.03, 4.998, -0.15]} scale={0.215} />
                <group name="Cylinder_167" position={[-2.086, 3.37, 1.85]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                <mesh name="Object_334" geometry={nodes.Object_334.geometry} material={materials.lpb_gradient} />
                </group>
                <group name="fan_48" position={[4.348, 3.716, 4.957]}>
                <mesh name="Object_96" geometry={nodes.Object_96.geometry} material={materials.lpb_gradient} />
                </group>
            </group>
            <group name="RootNode003" position={[11.416, 4.681, 7.778]} scale={0.074}>
                <group name="Mesh" position={[0, 0.05, -0.1]} />
            </group>
            <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials.PaletteMaterial001} position={[-4.208, 4.993, -4.765]} rotation={[0, 0.792, 0]} scale={[0.214, 0.261, 0.21]} />
            <mesh name="Object_2" geometry={nodes.Object_2.geometry} material={materials['material_0.003']} position={[-5.404, 5.337, -6.043]} rotation={[0.141, -1.319, -2.996]} scale={0.004} />
            <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['material_1.003']} position={[-5.404, 5.337, -6.043]} rotation={[0.141, -1.319, -2.996]} scale={0.004} />
            <mesh name="Object_4013" geometry={nodes.Object_4013.geometry} material={materials['material.003']} position={[9.935, 5.21, 6.38]} rotation={[0, 1.043, 0]} scale={[1.053, 0.975, 1.053]} />
            <mesh name="Pin" geometry={nodes.Pin.geometry} material={materials.PaletteMaterial001} position={[11.296, 5.233, 7.737]} scale={0.123} />
            <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.lpb_gradient} position={[2.143, 2.883, 3.779]} />
            <mesh name="Object_2001" geometry={nodes.Object_2001.geometry} material={materials.Vebena_Leaves} position={[-4.486, 4.974, -4.752]} rotation={[-Math.PI / 2, 0, 0.796]} scale={0.091} />
            <mesh name="Object_3" geometry={nodes.Object_3.geometry} material={materials.Verbena_Blue} position={[-4.486, 4.974, -4.752]} rotation={[-Math.PI / 2, 0, 0.796]} scale={0.091} />
            <mesh name="Object_4001" geometry={nodes.Object_4001.geometry} material={materials.Verbena_Red} position={[-4.486, 4.974, -4.752]} rotation={[-Math.PI / 2, 0, 0.796]} scale={0.091} />
            <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.Verbena_Violet} position={[-4.486, 4.974, -4.752]} rotation={[-Math.PI / 2, 0, 0.796]} scale={0.091} />
            <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Verbena_White} position={[-4.486, 4.974, -4.752]} rotation={[-Math.PI / 2, 0, 0.796]} scale={0.091} />
            <mesh name="banco_x_3_flat_Palette256_0" geometry={nodes.banco_x_3_flat_Palette256_0.geometry} material={materials.Palette256} position={[5.984, 5.402, -4.237]} rotation={[Math.PI, -1.019, -Math.PI / 2]} scale={0.635} />
            <mesh name="PhoneBooth_Atlas_0" geometry={nodes.PhoneBooth_Atlas_0.geometry} material={materials['Atlas.001']} position={[4.697, 5.056, -4.438]} rotation={[0, 0.777, 0]} scale={0.004} />
            <mesh name="Chest_bottom_Material_0" geometry={nodes.Chest_bottom_Material_0.geometry} material={materials['Material.001']} position={[-8.601, 4.981, 3.553]} rotation={[Math.PI, 0.076, -Math.PI]} scale={0.004} />
            <mesh name="Object_22002" geometry={nodes.Object_22002.geometry} material={materials.PaletteMaterial002} position={[2.262, 5.178, 13.357]} rotation={[0, 0.057, 0]} scale={2.356} />
        </group>
    </group>
  )
}

useGLTF.preload('/models/wedding-island-new-transformed.glb')
