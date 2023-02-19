import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { createTheme , NextUIProvider ,  } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes"

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';



Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#F9CB80',
      error: '#FCC5D8',
    },
  }
})

const darkTheme = createTheme({
  type: "dark",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
    defaultTheme="light"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
    </NextThemesProvider>
  )
}
