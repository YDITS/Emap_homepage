
import { Layout } from "./extenstions/boxs";
import Header from "../header/header";
import { UserLoginComponent } from "./types/user";

type UserLogin = {
   user : UserLoginComponent | undefined 
}


export default function Body({ user } : UserLoginComponent) {
    return (
        <Layout>
          <Header user={user}></Header>
        </Layout>
    )
}