import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@headlessui/react";

type option = {
  readonly id: string;
  readonly value: string;
};

const HeaderMenuOption: option[] = [
  { id: "1", value: "Edit" },
  { id: "2", value: "Duplicate" },
  { id: "3", value: "Archive" },
  { id: "4", value: "Move" },
  { id: "5", value: "Delete" },
];

export const Header: React.FC = () => {
  return (
    <header className="h-16 px-8 bg-white shadow-sm flex justify-between items-center">
      <Link href="/" passHref>
        <div className="flex cursor-pointer">
          <span className="pr-2 inline-block">
            <Image src="/Logo.png" alt="アイコン" width="29px" height="30px" />
          </span>
          <span className="my-auto inline-block">
            <Image
              src="/Title.png"
              alt="エンジビアの泉"
              width="126px"
              height="22px"
            />
          </span>
        </div>
      </Link>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          <div className="rounded-full  w-8 h-8">
            <Image
              src="/Avatar.png"
              alt="ユーザー写真"
              width="32"
              height="32px"
            />
          </div>
        </Menu.Button>
        <Menu.Items className="absolute right-0 w-56 mt-2  origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            {HeaderMenuOption.map((option) => {
              return (
                <Menu.Item key={option.id}>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-purple-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      {option.value}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Menu>
    </header>
  );
};
