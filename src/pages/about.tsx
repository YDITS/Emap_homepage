import { Box } from "./components/extenstions/box";
import { UserLoginComponent , User } from "./components/types/user";
import Header from "./header/header";
import { Text, Spacer, Container } from "@nextui-org/react"
import React from "react"; 
import { useUser } from "./components/hooks/login";


export default function About(){

  const { loading, user } = useUser();

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
        <Box
        css={{
          maxW: "100%"
        }}
      >
         <Header user={loading ? LoadingNow : user === undefined ? ReqLogin : user}></Header>
           <Container className="mt-50">
              <Text> Hey Guys! </Text>
           </Container>
        </Box>
      </div>  
    )
}