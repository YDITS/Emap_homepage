import { Text , useGLTF } from "@react-three/drei";
import { Canvas , useFrame  } from "@react-three/fiber";
import { Mesh, Vector3 } from 'three';
import * as THREE from "three"
import { useRef , useState} from "react"
import Header from "./header/header";
import UserLoginHooks from "hooks/login";
import User from "types/user";

const Login = new UserLoginHooks();

const Rig = ({ v = new Vector3() }) => {
    return useFrame((state) => {
      state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.3)
    })
  };

const Box = (props : any) => {
    const group = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const gltf = useGLTF('/404model.glb')

    useFrame((state) => {
        gltf.scene.rotation.x += -0.01
        gltf.scene.rotation.y +=  0.01 
      })
    
    return (
       <>
        <group ref={group} dispose={null}>
          <group scale={props.scale}>
            <primitive object={gltf.scene} position={props.position} rotation={props.rotation} scale={props.scale} />
          </group>
        </group>
      </>
    )
  };

  useGLTF.preload('/404model.glb')

export default function NotFound() {
    const { loading, user } = Login.useUser();

    const LoadingNow = {
      name : "読み込み中",
      id : "LOAD", 
      password : "LOADINF",
      logined : true
   } as User 
  
   const ReqLogin = {
    name : "読み込み中",
    id : "LOAD",
    password : "LOADINF",
    logined : false
  } as User 

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
             <Header user={loading ? LoadingNow : user === undefined ? ReqLogin : user} />
             <Canvas dpr={2}>
                <Rig />
                <color attach="background" args={[0xffffff]} />
                <ambientLight intensity={3} />
                <directionalLight intensity={0.5} position={[-10, 0, -10]} />
                <Box position={[0, -1.5, 0]} rotation={[0, 0, 0]} scale={0.3} />
                <Text
                    position={[0, 1, 0]}
                    font="/Roboto-Black.ttf"
                    fontSize={2}
                    color={'#222'}
                >
                    404 
                </Text>
                <Text
                    position={[0, -1, 2]}
                    font="/Roboto-Black.ttf"
                    fontSize={2}
                    color={'#222'}
                >
                    Not Found
                </Text>
            </Canvas>
        </div>
    )
}
