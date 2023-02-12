import { Navbar, Text } from "@nextui-org/react";
import Link from "next/link"
import User from "../../../types/user";

type Userlogin = { user : User | undefined }

export default function Header({ user }: Userlogin){
  
    return (
        <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
           YDTIS EMap - いーまっぷ
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#"></Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit">
            <Link href={user == null ? "/login" : user?.logined ? `dashboard/index?id=${user.id}` : "/login"}>
            {user == null ? "YDTISアカウントでログイン" : user?.logined ? "元気してる？"+user?.name+"さん！" : "YDTISアカウントでログイン"}
            </Link>
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
    )
}