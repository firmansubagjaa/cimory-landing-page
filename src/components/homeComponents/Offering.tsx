import React from "react";
import Container from "../layout/layout";

export default function Offering() {
  return (
    <section className="z-[1] absolute inset-0 -top-28">
      <Container>
        <div className="bg-[#4A2C87] flex flex-col justify-center items-center h-full lg:h-52 w-full rounded-3xl p-10">
          <div className="grid grid-cols-3">
            <div className="col-span-2 flex flex-col items-start justify-center h-full text-white gap-5">
              <h3 className="text-xl lg:text-3xl font-bold">
                Dapatkan tiket liburan Anda!
              </h3>
              <h4 className="hidden lg:flex text-sm lg:text-2xl font-medium w-full">
                Berpetualang di Dairyland atau jelajahi Minimania. Temukan
                berbagai hewan ternak yang ramah atau landmark dunia yang
                memukau.
              </h4>
            </div>
            <div className="flex justify-center items-center h-full">
              <button className="h-20 rounded-3xl w-96 p-2 bg-[#FBC700] font-bold ">
                Lihat Sekarang
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
