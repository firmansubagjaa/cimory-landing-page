import React from "react";
import Container from "../layout/layout";

export default function Offering() {
  return (
    <section className="z-[1]">
      <Container>
        <div className="bg-[#4A2C87] h-52 w-full rounded-3xl">
          <div className="grid grid-cols-3">
            <div className="col-span-2 flex flex-col items-start p-10 justify-center h-full text-white gap-5">
              <h3 className="text-3xl font-bold">
                Dapatkan tiket liburan Anda!
              </h3>
              <h4 className="text-2xl font-medium w-full">
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
