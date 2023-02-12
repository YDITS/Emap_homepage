export type UserLoginComponent = {
   user : User
}

export type IsUserLogin = boolean

export type User = {
    voidData : any,
    name : string,
    id : string,
    password: string
    logined : IsUserLogin
}

type Loading = boolean