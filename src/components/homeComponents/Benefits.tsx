import React from "react";
import { backgroundSection2, benefits } from "../img";
import Image from "next/image";
import Container from "../layout/layout";

export default function Benefits() {
  return (
    <section className="relative py-16">
      <Container>
        <div className="py-16 grid lg:grid-cols-3">
          <div className="col-span-1 flex flex-col gap-4">
            <div>
              <h4 className="text-xl font-medium">Bawa pulang</h4>
              <h3 className="text-3xl font-bold">Kenangan mengesankan</h3>
            </div>
            <h4 className="text-xl font-medium">
              Berwisata, Berkuliner, dan Berbelanja untuk Momen Terbaikmu di
              Sini
            </h4>
          </div>
          <div className="col-span-2">
            <figure className="flex justify-end gap-4">
              {benefits.map((item) => (
                <Image
                  key={item.id}
                  src={item.src}
                  alt={item.alt}
                  width={200}
                  height={200}
                  className="transition-all ease-in-out duration-500 hover:w-96 lg:w-60 lg:h-96 2xl:w-full rounded-3xl object-cover"
                />
              ))}
            </figure>
          </div>
        </div>
      </Container>
      <div className="absolute inset-0 top-60 -z-[1]">
        <Image
          src={backgroundSection2}
          alt="Cimory Banner"
          width={1000}
          height={1000}
          className="w-full"
        />
      </div>
    </section>
  );
}
