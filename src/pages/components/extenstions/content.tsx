import { Text, Spacer, Container} from "@nextui-org/react"
import Link from "next/link"
import Box from "./box"

export default function Content (){


  return(
      <Box css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
        <Spacer y={10} />
          <div className="text-center">
           <Container className="mt-50">
             <Text className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black-100"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">自由</span>を追求しよう。</Text>
             <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">いーまっぷはいろいろな機能を備えた配信者向けソフトです。</p>
             <Link href="/about" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
               もっと知る
               <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
             </Link>
           </Container>
          </div>
        <Spacer y={1} />
      </Box>
  )
} // <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>