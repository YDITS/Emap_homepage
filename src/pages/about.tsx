import Box from "./components/extenstions/box";
import User from "../../types/user";
import Header from "./header/header";
import { Text, Spacer, Container } from "@nextui-org/react"
import React from "react"; 
import UserLoginHooks from "../../hooks/login"
import LinkCard from "./components/card"

const Login = new UserLoginHooks()


export default function About(){

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

const text = "nube"

    return (
      <div>
        <Box>
         <Header user={loading ? LoadingNow : user === undefined ? ReqLogin : user}></Header>
          <Container className="mt-50">
              <Spacer y={3} />
              <Text
              h1
              size={60}
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
              }}
              weight="bold"
              >見やすいUI</Text>    
              <Box>
                    <Text blockquote>
                      自分で決めるカラースキーム
                    </Text>
                    <Spacer y={2} />
                    <Text className="lg:text-xl sm:px-40 xl:px-48">
                      イーマップではYDITS震度配列、KeeWカラースキームは初期搭載として<br />
                      +αで自分で決めるスキームや、保存可能なアセットなど幅広い設定が可能です。
                    </Text>
              </Box>     
              <Spacer y={3} />
              <Text
              h1
              size={60}
              css={{
                textGradient: "45deg, $red600 -20%, $black 50%",
              }}
              weight="bold"
              >早い伝達</Text>    
              <Box>
                    <Text blockquote>
                      WebSocket通信をモットーに
                    </Text>
                    <Spacer y={2} />
                    <Text className="lg:text-xl sm:px-40 xl:px-48">
                      イーマップではP2P地震情報様のWebsocketAPIを活用し<br />
                      地震情報をすぐにご覧にいただけます。
                    </Text>
              </Box>
          </Container>
        </Box>
      </div>  
    )
}