
import React from 'react'
import Body from './components/body'
import User from "../../types/user"

import UserLoginHooks from "../../hooks/login"

const Login = new UserLoginHooks()

export default function Home(){

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
        <Body user={loading ? LoadingNow : user === undefined ? ReqLogin : user}></Body>
    </div>
  )
}



