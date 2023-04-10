import React from 'react'
import Head from "next/head";
import Footer from './Footer/Footer'
import Header from './Header'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Gogrene-faithhouse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://js.paystack.co/v1/inline.js"></script> 
      </Head>
      <PayPalScriptProvider options={{ "client-id": process.env.CLIENT_ID}}>
        <Header/>
          {children}
        <Footer/>
      </PayPalScriptProvider>
    </>
  )
}

export default Layout