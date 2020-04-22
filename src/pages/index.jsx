import React from "react";
import Head from "next/head";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="App">
        <Navigation />
        <p className="bg-blue-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          sunt id nobis, ut, quibusdam voluptas culpa sed fuga perferendis
          quaerat deleniti doloribus harum facere, consectetur perspiciatis
          possimus vero repellat facilis.
        </p>
        <p className="bg-blue-100">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          sunt id nobis, ut, quibusdam voluptas culpa sed fuga perferendis
          quaerat deleniti doloribus harum facere, consectetur perspiciatis
          possimus vero repellat facilis.
        </p>
        <p className="bg-blue-200">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          sunt id nobis, ut, quibusdam voluptas culpa sed fuga perferendis
          quaerat deleniti doloribus harum facere, consectetur perspiciatis
          possimus vero repellat facilis.
        </p>
      </div>
    </>
  );
}
