import React from "react";
import Container from "../layout/layout";
import Image from "next/image";
import { backgroundSection4 } from "../img";

export default function Explorer() {
  return (
    <section className="relative py-16 lg:py-32">
      <div className="bg-[#4A2C87] hidden lg:block h-full w-full lg:w-[55vw] absolute inset-0 lg:rounded-r-3xl -z-[1]">
        <div className="h-full relative top-[34rem] lg:top-[32rem]">
          <Image
            src={backgroundSection4}
            alt="Cimory Banner"
            className="w-full"
          />
        </div>
      </div>
      <Container>
        <div className="flex flex-col gap-10 justify-center items-center">
          <div className="grid lg:grid-cols-4 bg-[#4A2C87] lg:bg-transparent py-10 rounded-3xl justify-center h-full">
            <div className="col-span-2  flex justify-center items-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/_g0EAQafWEE?si=wXZMGLxj3wMn4dAO"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-3xl w-96 h-64 lg:w-full lg:h-96 p-10"
              ></iframe>
            </div>
            <div className=" px-10 col-span-2 flex justify-end items-center h-full">
              <div className="text-right text-white lg:text-black flex flex-col gap-5 px-0 lg:pl-10">
                <h3 className="text-3xl font-bold">Jelajahi Dairyland</h3>
                <h4 className="text-2xl font-medium w-full ">
                  Tonton video keseruan di Dairyland dan temukan ide untuk
                  liburan keluarga Anda!
                </h4>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
