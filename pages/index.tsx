import { TableCellsIcon } from "@heroicons/react/24/outline";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Landing from "../components/Landing";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth";

interface Props {
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
      <main className="relative h-[200vh] bg-[#E7ECEE]">
        <Landing />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1b1b1b]">
        <div className="space-y-10 py-16 ">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl ">
            New Promos
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Home;

// backend Code
export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
