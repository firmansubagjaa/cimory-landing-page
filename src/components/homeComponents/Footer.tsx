import React from "react";
import { cimoryLogo } from "../img";
import Image from "next/image";
import Container from "../layout/layout";

export default function Footer() {
  return (
    <footer className="bg-[#D9D9D9] h-full -z-10 py-16 ">
      <Container>
        <div className="grid lg:grid-cols-4 lg:mt-36 space-y-16 lg:space-y-0">
          <div className="flex justify-center">
            <Image
              src={cimoryLogo}
              alt="Cimory Logo"
              width={100}
              height={100}
              className="w-80"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold">Perusahaan</h3>
            <ul className="flex flex-col gap-2">
              <li>Tentang</li>
              <li>Taman Wisata</li>
              <li>Artikel</li>
              <li>Kontak</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold">Bantuan</h3>
            <ul className="flex flex-col gap-2">
              <li>Privacy Policy</li>
              <li>Term & Condition</li>
              <li>Disclamer</li>
              <li>Customer Care</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p>
              Subscribe newsletter kami untuk informasi terbaru & terupdate dari
              Dairyland, dan dapatkan Yoghurt Stick GRATIS!!
            </p>
            <form action="" className="relative">
              <div className=" w-screen max-w-xs">
                <input
                  type="email"
                  id="email"
                  placeholder="Alamat Email Anda"
                  className="p-2 w-full h-12 rounded-3xl"
                />
                <button className="absolute inset-0 top-0 left-48 h-12 w-32 rounded-3xl bg-[#FBC700] font-bold ">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="py-4">
          <p className="text-center text-black/70 p-2">
            Copyright © 2022 Cimory
          </p>
        </div>
      </Container>
    </footer>
  );
}
