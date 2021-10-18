// import Header from "../components/Header";
import Head from "next/head";
// import Link from "next/link";

const broadIndex = () =>
{
  return <>
  <Head>
      <title>放送一覧ページ</title>
    </Head>
    <div className="bg-gray-200 h-screen">
      {/* <Header /> */}
        <div className="text-4xl w-1/2 mx-auto">放送一覧</div>
    </div>
  </>
};

export default broadIndex;