import type { NextPage } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Landing from '../components/Landing'
import type { Session } from "next-auth"

interface Props{
  session: Session | null; 
}

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Apple Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Landing />
      </main>
    </div>
  )
}

export default Home

// backend Code
export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const session = await getSession(context)

  return {
    props: {
      session,
    }
  };
};