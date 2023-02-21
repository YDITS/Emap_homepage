import Box from "./components/extenstions/box";
import User from "../../types/user";
import Header from "./header/header";
import { Text, Spacer, Container } from "@nextui-org/react"
import React from "react"; 
import UserLoginHooks from "../../hooks/login"
import LinkCard from "./components/card"
import Image from "next/image";
import Download from "./download";

const Login = new UserLoginHooks()


export default function About () {

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
      <div>
        <Box>
         <Header user={loading ? LoadingNow : user === undefined ? ReqLogin : user}></Header>
          <Container className="mt-50">
              <Spacer y={3} />
              <Text
              h1
              size={55}
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
              }}
              weight="bold"
              >自分で作る。</Text>    
              <Box>
                    <Text blockquote>
                      出来る限り見やすくしたUI
                    </Text>
                    <Spacer y={2} />
                    <Text className="lg:text-xl sm:px-40 xl:px-48 text-center">
                      イーマップではYDITS震度配列、KeeWカラースキームは初期搭載として<br />
                      +αで自分で設定できるスキーム<br />そして保存可能なアセットなど幅広い設定が可能です。
                    </Text>
                    <Spacer y={2} />
                 <Box className='grid bg-auto w-200 h-80 place-content-center'>
                   <div>
                     <Image className='rounded-lg' alt='settings' src={'/setting.gif'} width={490} height={90} />
                   </div>
                 </Box>
              </Box>     
              <Spacer y={3} />
              <Text
              h1
              size={55}
              css={{
                textGradient: "45deg, $red600 -20%, $black 50%",
              }}
              weight="bold"
              >素早い情報をこの手に。</Text>    
              <Box>
                    <Text blockquote>
                      WebSocket通信をモットーに
                    </Text>
                    <Spacer y={2} />
                    <Text className="lg:text-xl sm:px-40 xl:px-48 text-center">
                      イーマップではP2P地震情報様のWebsocketAPIを活用し<br />
                      地震情報をすぐにご覧にいただけます。<br />
                      また、遠地地震情報にも対応しています。
                    </Text>
              </Box>
              <Spacer y={3} />
              <Text
              h1
              size={55}
              css={{
                textGradient: "45deg, $cyan200 -20%, $blue600 50%",
              }}
              weight="bold"
              >どこでも、自分のマップ。</Text>    
              <Box>
                    <Text blockquote>
                      クラウドで同期されるデータ
                    </Text>
                    <Spacer y={2} />
                    <Text className="text-center lg:text-xl sm:px-40 xl:px-48">
                        YDITSアカウントを活用すれば、どんなデバイス間でも
                        <br />自分の設定が引き継がれます。<br />
                      <span className="font-bold">※2023年リリース時開始予定</span>
                    </Text>
              </Box>
              <Spacer y={3} />
              <Download />
          </Container>
        </Box>
      </div>  
    )
}