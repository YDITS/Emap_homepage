
import Layout from "./extenstions/boxs";
import Header from "../header/header";
import User from "../../../types/user";




export default function Body({ user } : { user : User}) {
    return (
        <Layout>
          <Header user={user}></Header>
        </Layout>
    )
}