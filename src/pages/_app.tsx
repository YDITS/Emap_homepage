import '@/styles/globals.css'

import type { AppProps } from 'next/app'

import { createTheme , NextUIProvider } from '@nextui-org/react'

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';



Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#F9CB80',
      error: '#FCC5D8',
    },
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
