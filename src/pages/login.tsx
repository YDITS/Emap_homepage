import {
  Card,
  Spacer,
  Button,
  Text,
  Input,
  Container,
} from '@nextui-org/react';
import { useState } from 'react'
import User from '../../types/user';
import { useRouter } from 'next/router'

import UserLoginHooks from "../../hooks/login"

const LoginHooks = new UserLoginHooks()

type LOGIN = {
    "isError" : boolean 
}

      type LoginFormat = {
          user : string;
          "userSettingData" : {
              "sindo1" : string
              "sindo2" : string
              "sindo3" : string
              "sindo4" : string
              "sindo5" : string
              "sindo5p" : string
              "sindo6" : string
              "sindo6p" : string
              "sindo7" : string
          }
      }

export default function Login(){

    const [ login , loginRef ] = useState<LOGIN>({isError: false})
    const router  =  useRouter()

    const handleSubmit = async (event : any) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
    
        // Get data from the form.
        const data = {
          id: event.target.id.value,
          pass: event.target.pass.value,
        }

        const JSONdata = JSON.stringify(data)

        const endpoint = 'https://api.akikakisan.repl.co/v1/oauth'
    

        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSONdata,
        }
    
        // Send the form data to our forms API on Vercel and get a response.
        try{
        const response = await fetch(endpoint, options)
         if(response.status !== 200) {
             return loginRef({isError : true})
         }
         const resData = await response.json()
         const mainUserData = JSON.parse(resData) as LoginFormat
         console.log(mainUserData)
         const saveData = {"name" : mainUserData["user"], "password" : data.pass, "id" : data.id , "logined" : true} as User
         LoginHooks.setUser(saveData).then(() => {
          router.push('/')
         })
        } catch (err) {
           
        }
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
       <Container
        display="flex"
        alignItems="center"
        justify="center"
        css={{ minHeight: '100vh' }}
      >
        <Card css={{ mw: '420px', p: '20px' }}>
          <Text
            size={24}
            weight="bold"
            css={{
              as: 'center',
              mb: '20px',
            }}
          >
            {login.isError ? "指定されたユーザーが見つかりません。" : "YDTISアカウントでログイン"}
          </Text>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="ID"
            id="id"
          />
          <Spacer y={1} />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="パスワード"
            id="pass"
          />
          <Spacer y={1} />
          <Button className="bg-sky-400" type="submit">ログイン</Button>
        </Card>
       </Container>
      </form>
    </div>
  );
}

