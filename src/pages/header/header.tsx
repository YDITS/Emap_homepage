import { Navbar,
   Text,
   Switch,
   useTheme
     } from "@nextui-org/react";
import { useTheme as useNextTheme } from 'next-themes'
import Link from "next/link"
import User from "../../../types/user";

type Userlogin = { user : User | undefined }

export default function Header({ user }: Userlogin){

  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

    return (
       <div>
        <Navbar isBordered variant="sticky">
          <Navbar.Brand>
              <Text b color="inherit" hideIn="xs">
              EMap - いーまっぷ
              </Text>
            </Navbar.Brand>
          <Navbar.Content hideIn="xs">
            <Link href="/"> ホーム </Link>
            </Navbar.Content>
        </Navbar>
       </div>
    )
}

/**
            <Navbar.Content>
                <Link href={user == null ? "/login" : user?.logined ? `dashboard/index?id=${user.id}` : "/login"}>
                {user == null ? "YDITSアカウントでログイン" : user?.logined ? "元気してる？"+user?.name+"さん！" : "YDITSアカウントでログイン"}
                </Link>
            </Navbar.Content>
 */

/**
 *       <div>
          <Navbar isBordered variant="sticky">
          <Navbar.Brand>
            <Text b color="inherit" hideIn="xs">
             EMap - いーまっぷ
            </Text>
          </Navbar.Brand>
          <Navbar.Content hideIn="xs">
            <Navbar.Link href="#"></Navbar.Link>
          </Navbar.Content>
          <Navbar.Content>
            <Navbar.Link color="inherit">
              <Link href={user == null ? "/login" : user?.logined ? `dashboard/index?id=${user.id}` : "/login"}>
              {user == null ? "YDITSアカウントでログイン" : user?.logined ? "元気してる？"+user?.name+"さん！" : "YDITSアカウントでログイン"}
              </Link>
            </Navbar.Link>
          </Navbar.Content>
        </Navbar>
      </div>
 */