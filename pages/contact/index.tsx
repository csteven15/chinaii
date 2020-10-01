import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const GoogleMaps = dynamic(() => import('../../components/google_maps'), {
  ssr: false
})

export default function Contact() {
  return (
    <>
      <Head>
        <title>China II - Contact</title>
      </Head>
      <GoogleMaps />
    </>
  )
}
