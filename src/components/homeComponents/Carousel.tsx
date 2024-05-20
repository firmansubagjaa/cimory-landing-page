import React from "react";
import Container from "../layout/layout";
import Image from "next/image";
import { banner1 } from "../img";

export default function Carousel() {
  return (
    <section className="pt-32 py-16 bg-[#4A2C87]">
      <Container>
        <div className="rounded-3xl">
          <Image
            src={banner1}
            alt="Cimory Banner"
            width={1000}
            height={1000}
            className="w-full rounded-3xl"
          />
        </div>
      </Container>
    </section>
  );
}
