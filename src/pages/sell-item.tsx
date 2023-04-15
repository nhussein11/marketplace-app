import { NextPage } from "next";
import Head from "next/head";

const SellItem: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sell Item</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-700">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <p className="text-2xl text-white">
            Here is where you can sell your item
          </p>
        </div>
      </main>
    </>
  );
};

export default SellItem;
