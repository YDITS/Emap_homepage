
import HtmlBox from "./box"
import { Text  } from "@react-three/drei";
import { Canvas , useFrame  } from "@react-three/fiber";
import { Vector3 } from 'three';
import { Text as HtmlText } from "@nextui-org/react"
import About from "@/pages/components/extenstions/about";

export default function Content(){

  const Rig = ({ v = new Vector3() }) => {
    return useFrame((state) => {
      state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.3)
    })
  };
  


  return(
      <HtmlBox style={{ width: '100vw', height: '100vh' }}  css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
        <Canvas dpr={2}>
          <color attach="background" args={[0xffffff]} />
          <ambientLight intensity={3} />
          <directionalLight intensity={0.5} position={[-10, 0, -10]} />
           <Rig />
           <Text
                    position={[-2.5, 3, 5]}
                    font="/Roboto-Black.ttf"
                    fontSize={2}
                    color={'#222'}
            >
                EMap EMap EMap EMap
              </Text>
            <Text
                    position={[2.5, -2, 5]}
                    font="/Roboto-Black.ttf"
                    fontSize={2}
                    color={'#222'}
            >
                YDITS YDITS YDITS YDITS
            </Text>
            <Text
                    position={[-1, 0, 0]}
                    font="/Roboto-Black.ttf"
                    fontSize={1}
                    color={'#222'}
            >
             ScrollDown
            </Text>
        </Canvas>
        <About />
      </HtmlBox>
  )
} // <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>