
import Layout from "./extenstions/boxs";
import Header from "../header/header";
import User from "../../../types/user";



//<Header user={user}></Header>
export default function Body({ user } : { user : User}) {
    return (
        <Layout />
    )
}