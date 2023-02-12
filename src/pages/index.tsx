
import React from 'react'
import Body from './components/body'
import { useUser } from './components/hooks/login'
import { User } from "./components/types/user"

export default function Home(){

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
        <Body user={loading ? LoadingNow : user === undefined ? ReqLogin : user}></Body>
    </div>
  )
}



