"use client";
import { nav1, nav2 } from "@/utils";
import Image from "next/image";
import React from "react";
import Container from "../layout/layout";
import { cimoryLogo } from "../img";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleSidebar = (): void => setOpen(!open);
  return (
    <div className="relative z-[5]">
      <header className="fixed top-0  w-full bg-[#4A2C87] text-white py-4">
        <Container>
          <div className="flex items-center justify-between">
            <ul className="hidden lg:flex gap-4">
              {nav1.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
            <div>
              <Image
                src={cimoryLogo}
                alt="Cimory Logo"
                width={200}
                height={200}
                className="w-32 lg:w-40"
              />
            </div>
            <ul className="hidden lg:flex gap-4">
              {nav2.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
            {/* hamburger */}
            <div className="lg:hidden flex">
              <button
                onClick={handleSidebar}
                className="w-10 h-10 flex flex-col justify-around"
              >
                <div className="w-full h-1 bg-white" />
                <div className="w-full h-1 bg-white" />
                <div className="w-full h-1 bg-white" />
              </button>
            </div>
          </div>
        </Container>
      </header>
      <div
        className={`fixed top-0 text-white flex flex-col bg-[#4A2C87] h-screen inset-0 transition-all ease-in-out duration-500 ${
          open ? "translate-x-0" : "translate-x-[-100%]"
        }`}
      >
        <div className="absolute top-0 py-4 right-4 lg:right-10">
          <div
            onClick={handleSidebar}
            className="w-10 h-10 flex flex-col justify-around cursor-pointer"
          >
            <div className="w-full h-1 bg-white rotate-45 translate-y-5" />
            <div className="w-full h-1 bg-white opacity-0" />
            <div className="w-full h-1 bg-white -rotate-45 -translate-y-2" />
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          {/* <Container> */}
          <ul className="flex flex-col w-full h-full relative top-32 text sm:text-lg">
            {nav1.map((item) => (
              <li key={item.id} className="py-4 border-b-2 border-white px-4">
                {item.name}
              </li>
            ))}
            {nav2.map((item) => (
              <li key={item.id} className="py-4 border-b-2 border-white px-4">
                {item.name}
              </li>
            ))}
          </ul>
          {/* </Container> */}
        </div>
      </div>
    </div>
  );
}
