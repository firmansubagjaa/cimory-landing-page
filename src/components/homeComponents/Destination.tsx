import Image from "next/image";
import React from "react";
import { mountainView } from "../img";
import Container from "../layout/layout";

export default function Destination() {
  return (
    <section className="z-[2] py-16">
      <Container>
        <div className="text-center flex flex-col items-center gap-5">
          <h3 className="text-3xl font-bold">Destinasi Tujuan</h3>
          <h4 className="text-2xl font-medium w-[27rem]">
            Dairyland tersebar lebih dari 7 titik di seluruh Indonesia
          </h4>
        </div>
        <div className="flex justify-between py-10">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="w-96 h-96 bg-white shadow-lg rounded-3xl p-2 flex flex-col justify-between"
            >
              <div>
                <figure>
                  <Image
                    src={mountainView}
                    alt="Cimory Banner"
                    className="rounded-xl"
                  />
                </figure>
                <div className="flex flex-col h-full gap-2">
                  <div className="p-1">
                    <h3 className="text-3xl font-bold">Daily Mountain View</h3>
                    <h4 className="text-lg font-medium w-[27rem]">
                      Bogor, Jawa Barat
                    </h4>
                  </div>
                </div>
              </div>

              {/* button */}
              <div className="flex gap-4">
                <button className="h-12 w-full bg-[#FBC700] font-bold text-black/70 rounded-full text-white">
                  Beli Tiket
                </button>
                <button className="h-12 w-full font-bold ">Beli Tiket</button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
