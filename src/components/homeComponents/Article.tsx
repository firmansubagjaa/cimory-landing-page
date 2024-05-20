import Image from "next/image";
import React from "react";
import Container from "../layout/layout";
import { backgroundSection2, imgArticle } from "../img";

export default function Article() {
  return (
    <section className="py-32 relative">
      <Container>
        <div className="grid lg:grid-cols-2">
          <div className="col-span-1 relative top-32 w-96">
            <h3 className="text-3xl font-bold">
              Artikel Baru Dailyland & Minimania
            </h3>
          </div>
          <div className="col-span-1">
            <div className="flex flex-wrap gap-5 justify-between py-10">
              {imgArticle.map((item) => (
                <div
                  key={item.id}
                  className="w-80 h-[25rem] bg-white shadow-lg rounded-3xl p-2 flex flex-col justify-between"
                >
                  <div>
                    <figure>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        className="h-60 rounded-xl"
                      />
                    </figure>
                    <div className="flex flex-col h-full gap-2">
                      <div className="p-1">
                        <h3 className="text-xl font-medium">{item.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* button */}
                  <div className="flex gap-4">
                    <button className="h-12 p-2 font-bold ">
                      Lihat Lanjut
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute inset-0 top-96 -z-[1]">
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
