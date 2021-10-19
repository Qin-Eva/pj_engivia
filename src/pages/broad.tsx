// import Header from "../components/Header";
import Head from "next/head";
import Link from "next/link";

const ITEMS = [
   {
    href: "/",
    title: "第4回エンジビアの泉",
    date: "2021年9月8日",
    status: "放送中",
    count: "エンジビア数"
  },{
    href: "/",
    title: "第3回エンジビアの泉",
    date: "2021年8月18日",
    status: "",
    count: "エンジビア数"
  }, {
    href: "/",
    title: "第2回エンジビアの泉",
    date: "2021年7月12日",
    status: "",
    count: "エンジビア数"
  }, {
    href: "/",
    title: "第1回エンジビアの泉",
    date: "2021年5月24日",
    status: "",
    count: "エンジビア数"
  }
];

const broadcastIndex = () =>
{
  return <>
  <Head>
      <title>放送一覧ページ</title>
    </Head>
    <div className="bg-gray-200 h-screen">
      {/* <Header /> */}
        <div className="text-4xl w-3/5 mx-auto mb-5">放送一覧</div>
        <div className="bg-white w-3/5 mx-auto">
        <div>
        {ITEMS.map(item => {
          return (
            <div className="flex border border-gray-100">
            <div className="h-24">
              <Link href={item.href}>
                <h1 className="text-blue-400 ml-5 mt-5">{item.title}</h1>
              </Link>
              <h2 className="text-gray-400 ml-5 mt-3">{item.date}</h2>
            </div>
            <div className="">
              <h3 className="mt-5">{item.status}</h3>
              <h4 className="text-gray-400 mt-3">{item.count}</h4>
            </div>
            </div>
          )
        })}
      </div>
        </div>
    </div>
  </>
};

export default broadcastIndex;