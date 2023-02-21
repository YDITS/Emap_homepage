import React from 'react';
import { Spacer, Text } from '@nextui-org/react'
import Box from './components/extenstions/box';
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


export default function Download(){
     return (
         <div className='items-center'>
            <Spacer y={3} />
            <Text h1 size={55} className='text-center' css={{
                textGradient: "45deg, $black -20%, $pink600 50%",
              }}
              weight="bold">
                さぁ、今すぐ始めよう。
              </Text>
            <Box>
              <div className='rounded-lg h-40 w-90 bg-stone-100'>
                <Spacer y={3} />
                <Text className='text-center mb-6 text-4xl font-extrabold'>
                  <Spacer y={2} />
                   Windows
                </Text>
                <div className='text-center'>
                  <Link href="/windows" className="text-lg  h-5 w-5 ml-2 -mr-1">
                   <FontAwesomeIcon icon={faDownload} />
                     Download
                  </Link>
                </div>
              </div>
            </Box>
            <Spacer y={2} />
         </div>
     )
}