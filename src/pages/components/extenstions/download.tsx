import React from 'react';
import { Spacer, Text } from '@nextui-org/react'
import Box from './box';
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Text as ThreeText } from "@react-three/drei";
import { Canvas , useFrame  } from "@react-three/fiber";
import { Vector3 } from 'three';

export default function Download(){

  const Rig = ({ v = new Vector3() }) => {
    return useFrame((state) => {
      state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.3)
    })
  };                

  
     return (
         <div className='items-center'>
            <Spacer y={3} />
            <Canvas>
                 <Rig />
                 <ThreeText
                    position={[0, 0, 8]}
                    font="/Roboto-Black.ttf"
                    fontSize={2}
                    strokeColor={"#222"}
                    strokeWidth={0.03}
                    color={'#FFF'}
                 >
                Lets Start With me
              </ThreeText>
              <ThreeText
                position={[10, 0, 8]}
                font="/NotoEmojis.ttf"
                fontSize={2}
                color={'#FDD700'}>
                  ✨
              </ThreeText>
              </Canvas>
            <Box>
              <div className='rounded-lg h-40 w-90 bg-stone-100'>
                <Spacer y={3} />
                <Text className='text-center mb-6 text-4xl font-extrabold'>
                  <Spacer y={2} />
                   Windows
                </Text>
                <Link href="https://drive.google.com/file/d/1rne3Ns4woBd8gRwuB2xTtAEyAvZBGv-h/view?usp=share_link" className="text-center">
                   ここからダウンロードできます。
                </Link>
              </div>
            </Box>
            <Spacer y={2} />
         </div>
     )
}

//<Link href="/windows" className="text-lg  h-5 w-5 ml-2 -mr-1">
//<FontAwesomeIcon icon={faDownload} />
//Download
//</Link>