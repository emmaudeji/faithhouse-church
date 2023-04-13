import React from 'react'
import Head from "next/head";
import Footer from './Footer/Footer'
import Header from './Header'
import Script from 'next/script';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';


const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Gogrene-faithhouse</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script src="https://js.paystack.co/v1/inline.js"/>
        {/* <script src="https://js.paystack.co/v1/inline.js"></script>  */}
      </Head>
      
        <Header/>
          <PayPalScriptProvider options={{ "client-id": 'AdO9G9kMGsqxZaGTg8zYAZ9jJaOAKEaEYC8TBHvvOC3yRUY7li2fbQXrWMoIHG35Ost68nPWuvtWWCGN'}}>
            {children}
            <WhatsAppWidget CompanyIcon={''} phoneNumber="2348032787601" 
            companyName="Faithhouse" replyTimeText='Typically replies in 1hr.'/>
          </PayPalScriptProvider>
        <Footer/>
    </>
  )
}

export default Layout