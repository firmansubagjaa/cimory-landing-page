import React from "react";
import Container from "../layout/layout";
import Image from "next/image";
import { backgroundSection4 } from "../img";

export default function Explorer() {
  return (
    <section className="relative py-32">
      <div className="bg-[#4A2C87] h-full w-[55vw] absolute inset-0 rounded-r-3xl -z-[1]">
        <div className="h-full relative top-96">
          <Image
            src={backgroundSection4}
            alt="Cimory Banner"
            className="w-full"
          />
        </div>
      </div>
      <Container>
        <div className="grid lg:grid-cols-4 justify-center h-full">
          <div className="col-span-2 flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_g0EAQafWEE?si=wXZMGLxj3wMn4dAO"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-3xl"
            ></iframe>
          </div>
          <div className="col-span-2 flex justify-end items-center h-full">
            <div className="text-right flex flex-col gap-5">
              <h3 className="text-3xl font-bold">Jelajahi Dairyland</h3>
              <h4 className="text-2xl font-medium w-[27rem]">
                Tonton video keseruan di Dairyland dan temukan ide untuk liburan
                keluarga Anda!
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
