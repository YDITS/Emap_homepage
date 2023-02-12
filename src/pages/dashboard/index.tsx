
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useUser } from "../components/hooks/login"

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

export default function index() {
    const router  = useRouter()
    const { loading, user } = useUser()


    const oauth = async () => {
        const data = {
            id: user?.id,
            pass: user?.password
          }
  
          const JSONdata = JSON.stringify(data)
  
          const endpoint = 'https://api.akikakisan.repl.co/v1/user'
      
  
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSONdata,
          }

        const res = await fetch(endpoint,options)
        const rawdata = await res.json()
        const userData = JSON.parse(rawdata) as LoginFormat

        console.log(userData.userSettingData)
    }

     useEffect( function (){
      if(!loading) {
        oauth()
      }
        
    })

    return (
        <div>Hello Wordl</div>
    )
}