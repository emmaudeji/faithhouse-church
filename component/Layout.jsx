import React from 'react'
import Head from "next/head";
import Footer from './Footer/Footer'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Gogrene-faithhouse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header/>
        {children}
      <Footer/>
    </>
  )
}

export default Layout