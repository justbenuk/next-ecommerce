import React from 'react'
import Head from 'next/head'

// components
import Header from '@/components/Header/Header'

export default function MainLayout( { title, description, children } ) {
  return (
    <>
      <Head>
        <title>{ title ? title + ' - ECommerce Store' : 'Simple ECommerce Store' }</title>
        <meta name="description" content={ description ? description : 'A NextJS and Starpi E-Commerce Store' } />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <div className='container mx-auto px-6'> { children }</div>
      </div>
    </>
  )
}
