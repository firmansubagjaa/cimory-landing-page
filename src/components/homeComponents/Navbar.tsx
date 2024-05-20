import { nav1, nav2 } from "@/utils";
import Image from "next/image";
import React from "react";
import Container from "../layout/layout";
import { cimoryLogo } from "../img";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-[5] w-full bg-[#4A2C87] text-white py-4">
      <Container>
        <div className="flex items-center justify-between">
          <ul className="flex gap-4">
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
            />
          </div>
          <ul className="flex gap-4">
            {nav2.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
}
