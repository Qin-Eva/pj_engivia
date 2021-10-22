import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "components/Header";

const Login = () => {
  return (
    <div className="flex justify-content-between">
      <div className="w-5/12 flex justify-center items-center">
        Login
      </div>
      <figure className="w-7/12 h-screen relative">
        <Image
          src="/login/login_top_img.png"
          alt="泉"
          layout="fill"
          objectFit="fill"
        />
      </figure>
    </div>
  )
}

export default Login