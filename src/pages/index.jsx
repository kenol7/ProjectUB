import React from "react";

import Navbar from "../component/landing/navbar";
import Footer from "../component/landing/footer";
import Hero from "../../public/Pattern.png";
import imgUp from "../assets/icons/graph-up.svg";
import imgBook from "../assets/icons/book.svg";
import imgEye from "../assets/icons/eye.svg";
import imgBook2 from "../assets/icons/book2.svg";
import imgLaptop from "../assets/icons/laptop.svg";
import imgBuildings from "../assets/icons/buildings.svg";
import imgMegaphone from "../assets/icons/megaphone.svg";
import imgAmplop from "../assets/icons/amplop.svg";
import imgPhone from "../assets/icons/telephone.svg";
import imgInstagram from "../assets/icons/instagram.svg";
import imgStar1 from "../assets/icons/Star 1.svg";
import { Link } from 'react-router-dom';

export default function Test() {
  return (
    <>
      <Navbar />
      <section id="hero" className="">
        <div className="relative w-full h-screen">
          {/* Background Layer */}
          <div className="absolute z-0 w-full h-full overflow-hidden">
            <div className="absolute z-10 -left-[100px] -top-[40px] w-[280px] h-[280px] rounded-full bg-gray-700 blur-[150px]"></div>
            <img
              src={Hero}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Foreground Content */}
          <div className="z-10 flex items-center h-screen xl:px-20 md:px-10 px-10 relative">
            <div className="grid grid-cols-12">
              {/* Left Content */}
              <div className="2xl:col-span-6 xl:col-span-6 md:col-span-6 col-span-12 flex justify-center md:justify-center xl:justify-start items-center text-center md:text-left">
                <div className="">
                  <div className="relative">
                    <div className="hidden md:block absolute 2xl:left-[420px] xl:left-[420px] md:left-[280px] top-[-30px]">
                      <img src={imgStar1} alt="" />
                    </div>
                    <h1 className="2xl:text-4xl xl:text-4xl lg:text-2xl md:text-xl text-xl font-bold text-gray-700 leading-snug">
                      MEMBAWA{" "}
                      <span className="text-blue-700 underline break-inside-avoid-column">
                        PERUBAHAN
                      </span>
                      <br />
                      MEWUJUDKAN MASA DEPAN.
                    </h1>
                    <p className="mt-4 2xl:text-base xl:text-base md:text-sm text-sm text-gray-700">
                      Dedikasi dan inovasi untuk masa depan kampus yang lebih
                      maju.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col md:flex-row gap-4 md:justify-start justify-center">
                    <a href="#programkerja">
                      <button className="bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition">
                        Program Kerja
                      </button>
                    </a>
                    <a href="#kontak">
                      <button className="border border-gray-400 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
                        Kontak
                      </button>
                    </a>
                  </div>
                </div>
              </div>


              {/* Right Content */}
              <div className="col-span-6 2xl:block xl:block lg:block md:block hidden">
                <div className="relative xl:mt-20 md:mt-10 mt-10">
                  <img
                    src="/public/PakIqbal.png"
                    alt="Foto"
                    className="2xl:w-[665px] 2xl:h-[677px] xl:w-[665px] xl:h-[677px] md:w-[358px] md:h-[350px]"
                  />
                  <div className="absolute 2xl:top-[480px] xl:top-[480px] lg:top-[300px] md:top-[250px] 2xl:right-[80px] xl:right-[40px] md:right-[20px] bg-gray-700 2xl:w-[600px] 2xl:h-[90px] xl:w-[550px] xl:h-[90px] lg:w-[380px] md:w-[330px] md:h-[70px] 2xl:rounded-3xl xl:rounded-3xl md:rounded-2xl">
                    <div className="flex justify-center h-full">
                      <div className="flex 2xl:gap-[100px] xl:gap-[60px] lg:gap-[20px] md:gap-[15px] text-center items-center text-white">
                        <div>
                          <div className="2xl:text-5xl xl:text-5xl font-normal pb-1">5+</div>
                          <div className="text-sm">Penelitian</div>
                        </div>
                        <div>
                          <div className="2xl:text-5xl xl:text-5xl font-normal pb-1">3+</div>
                          <div className="text-sm">Pengabdian Masyarakat</div>
                        </div>
                        <div>
                          <div className="2xl:text-5xl xl:text-5xl font-normal pb-1">5+</div>
                          <div className="text-sm">Publikasi</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </section>

      <section id="about" className="xl:my-20 md:my-10 my-10">
        <div className="">
          <div className="grid grid-cols-12">
            {/* foto kiri */}
            <div className="col-span-5 xl:block md:hidden hidden">
              <img
                src="public/PakIqbal2.png"
                alt="foto"
                className="w-[70%] object-cover mx-auto"
              />
            </div>
            <div className="xl:col-span-7 md:col-span-12 col-span-12">
              <div className="flex xl:justify-normal md:justify-center justify-center">
                <div className="xl:pr-20 md:pr-10 pr-10 xl:px-0 md:px-10 px-10">
                  <h1 className="xl:text-4xl md:text-2xl text-xl font-bold">
                    Lebih Dekat dengan Mohammad Iqbal.
                  </h1>
                  <h2 className="pt-2 xl:text-2xl md:text-xl text-lg font-semibold">
                    Visi, Kolaborasi, Inovasi untuk FIA UB Maju
                  </h2>
                  <div className="py-10">
                    <p className="xl:text-lg md:text-lg text-base text-justify">
                      Mohammad Iqbal adalah sosok pemimpin visioner yang memiliki
                      komitmen kuat dalam membawa perubahan positif. Dengan pengalaman
                      dan dedikasinya di dunia akademik serta manajerial, ia terus
                      berupaya menciptakan inovasi dalam sistem pendidikan, tata
                      kelola, dan pengembangan sumber daya manusia.
                    </p>
                    <p className="pt-5 xl:text-lg md:text-lg text-base text-justify">
                      Sebagai individu yang percaya pada kekuatan visi, kolaborasi,
                      dan inovasi, Mohammad Iqbal bertekad untuk menjadikan FIA UB
                      sebagai institusi yang unggul, adaptif, dan berdaya
                      saing.bertekad untuk menjadikan FIA UB sebagai institusi yang
                      unggul, adaptif, dan berdaya saing.
                    </p>
                  </div>
                  {/* Kotak tentang saya */}
                  <div className="max-w-6xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* <!-- Kartu 1 --> */}
                    <div className="bg-white border border-primary-50 hover:border-primary-700 rounded-xl p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        {/* <!-- Ikon --> */}
                        <img src={imgUp} alt="" className="w-6" />
                        <h3 className="text-lg font-semibold text-gray-800">
                          Rekam Jejak
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        Kisah Mohammad Iqbal untuk kemajuan FIA UB
                      </p>
                      <Link
                        to="/Tentang Saya/Rekam Jejak"
                        className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 transition border rounded-md border-primary-50 hover:bg-primary-700 hover:text-primary-50"
                      >
                        Selengkapnya
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
                        </svg>
                      </Link>
                    </div>

                    {/* <!-- Kartu 2 (Aktif) --> */}
                    <div className="bg-white border border-primary-50 hover:border-primary-700 rounded-xl p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        {/* <!-- Ikon --> */}
                        <img src={imgBook} alt="" className="w-6" />
                        <h3 className="text-lg font-semibold text-gray-800">
                          Pendidikan
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        Perjalanan singkat dari Mohammad Iqbal
                      </p>
                      <Link
                        to="/Tentang Saya/Pendidikan"
                        className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 transition border rounded-md border-primary-50 hover:bg-primary-700 hover:text-primary-50"
                      >
                        Selengkapnya
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
                        </svg>
                      </Link>
                    </div>

                    {/* <!-- Kartu 3 --> */}
                    <div className="bg-white border border-primary-50 hover:border-primary-700 rounded-xl p-6 shadow-sm">
                      <div className="flex items-center gap-3 mb-4">
                        {/* <!-- Ikon --> */}
                        <img src={imgEye} alt="" className="w-6" />
                        <h3 className="text-lg font-semibold text-gray-800">
                          Visi & Misi
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6">
                        Perjalanan singkat dari Mohammad Iqbal
                      </p>
                      <Link
                        to="/Tentang Saya/Visi Misi"
                        className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 transition border rounded-md border-primary-50 hover:bg-primary-700 hover:text-primary-50"
                      >
                        Selengkapnya
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programkerja" class="my-20">
        <div className="">
          <div class="text-center mb-12">
            <div class="mx-auto my-10 w-15 h-2 bg-primary-500 rounded"></div>
            <h2 class="xl:text-5xl md:text-4xl text-4xl font-bold text-gray-900">
              Program Kerja Nyata,{" "}
              <span class="text-primary">FIA UB Juara!</span>
            </h2>
            <p class="text-gray-600 mt-4 max-w-xl mx-auto xl:text-base md:text-base text-base">
              Mewujudkan FIA UB yang unggul melalui inovasi, kolaborasi, dan
              kepemimpinan berintegritas.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {/* <!-- Card 1 --> */}
            <div class="bg-white hover:bg-primary-700 hover:text-primary-50 rounded-xl p-6 shadow-2xl">
              <div class="bg-primary-200 hover:bg-primary-50 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                {/* <!-- Icon buku --> */}
                <img src={imgBook2} alt="" />
              </div>
              <h3 class="font-semibold text-lg mb-2">
                Digitalisasi Administrasi dan Pelayanan Akademik
              </h3>
              <p class="text-sm mb-4">
                Menyusun kurikulum berbasis outcome-based education (OBE) dan
                Merdeka Belajar Kampus Merdeka (MBKM).
              </p>
              <Link
                to="/digitalisasi"
                className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Selengkapnya
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* <!-- Card 2 - aktif --> */}
            <div class="bg-white hover:bg-primary-700 hover:text-primary-50 rounded-xl p-6 shadow-2xl">
              <div class="bg-primary-200 hover:bg-primary-50 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                {/* <!-- Icon global --> */}
                <img src={imgLaptop} alt="" className="w-6" />
              </div>
              <h3 class="font-semibold text-lg mb-2">
                Internasionalisasi Fakultas
              </h3>
              <p class="text-sm mb-4">
                Menyusun kurikulum berbasis outcome-based education (OBE) dan
                Merdeka Belajar Kampus Merdeka (MBKM). Menyusun kurikulum
                berbasis outcome-based.
              </p>
              <Link
                to="/internasionalisasi"
                className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Selengkapnya
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* <!-- Card 3 --> */}
            <div class="bg-white hover:bg-primary-700 hover:text-primary-50 rounded-xl p-6 shadow-2xl">
              <div class="bg-primary-200 hover:bg-primary-50 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                {/* <!-- Icon grafik --> */}
                <img src={imgBuildings} alt="" />
              </div>
              <h3 class="font-semibold text-lg mb-2">
                Penguatan Karakter dan Kesejahteraan Mahasiswa
              </h3>
              <p class=" text-sm mb-4">
                Menyusun kurikulum berbasis outcome-based education (OBE) dan
                Merdeka Belajar Kampus Merdeka (MBKM).
              </p>
              <Link
                to="/penguatan"
                className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Selengkapnya
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="dukungan" class="my-20">
        <div className="w-full">
          <div class="bg-[url('/public/UB.png')] bg-cover bg-center py-30 px-14">
            <div class=" mx-auto text-white">
              {/* <!-- Judul --> */}
              <div class="mb-10">
                <div class="flex items-center gap-2 text-2xl font-bold">
                  {/* <!-- Icon Speaker --> */}
                  <img src={imgMegaphone} alt="" />
                  <h2 className="ml-2 xl:text-5xl md:text-2xl text-2xl">Suarakan Dukunganmu!</h2>
                </div>
              </div>

              {/* <!-- Testimoni cards --> */}
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* <!-- Card --> */}
                <div class="rounded-xl border border-white/20 bg-white/5 p-6 ">
                  <h3 class="font-semibold text-white">Agus Setya Budi</h3>
                  <p class="text-sm text-gray-300 mb-3">agussetya@gmail.com</p>
                  <div class="flex items-center text-white mb-2">
                    {/* <!-- Kutipan Icon --> */}
                    <svg
                      class="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 17h2v-6H5v8h4v-2zm8 0h2v-6h-4v8h4v-2z" />
                    </svg>
                  </div>
                  <p class="text-sm text-white leading-relaxed">
                    Dengan pengalaman dan dedikasi beliau, saya yakin FIA UB
                    akan berkembang lebih inovatif dan kolaboratif di bawah
                    kepemimpinannya
                  </p>
                </div>

                {/* <!-- Card (duplikat untuk contoh) --> */}
                <div class="rounded-xl border border-white/20 bg-white/5 p-6 ">
                  <h3 class="font-semibold text-white">Agus Setya Budi</h3>
                  <p class="text-sm text-gray-300 mb-3">agussetya@gmail.com</p>
                  <div class="flex items-center text-white mb-2">
                    <svg
                      class="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 17h2v-6H5v8h4v-2zm8 0h2v-6h-4v8h4v-2z" />
                    </svg>
                  </div>
                  <p class="text-sm text-white leading-relaxed">
                    Dengan pengalaman dan dedikasi beliau, saya yakin FIA UB
                    akan berkembang lebih inovatif dan kolaboratif di bawah
                    kepemimpinannya
                  </p>
                </div>

                {/* <!-- Card 3 --> */}
                <div class="rounded-xl border border-white/20 bg-white/5 p-6 ">
                  <h3 class="font-semibold text-white">Agus Setya Budi</h3>
                  <p class="text-sm text-gray-300 mb-3">agussetya@gmail.com</p>
                  <div class="flex items-center text-white mb-2">
                    <svg
                      class="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 17h2v-6H5v8h4v-2zm8 0h2v-6h-4v8h4v-2z" />
                    </svg>
                  </div>
                  <p class="text-sm text-white leading-relaxed">
                    Dengan pengalaman dan dedikasi beliau, saya yakin FIA UB
                    akan berkembang lebih inovatif dan kolaboratif di bawah
                    kepemimpinannya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kontak" class="my-20">
        <div className="w-full px-10">
          <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* <!-- Kiri: Informasi --> */}
            <div>
              <h2 class="text-5xl font-bold text-gray-800 mb-4">
                Mari Bicara!
              </h2>
              <p class="text-gray-600 mb-8 text-xl">
                Berikan dukungan Anda, karena dukungan Anda sangat berarti bagi
                kemajuan, perubahan, dan masa depan yang lebih baik
              </p>

              {/* <!-- Kontak --> */}
              <ul class="space-y-4 text-gray-700 pt-10">
                <li class="flex items-center gap-2">
                  {/* <!-- Icon Email --> */}
                  <img src={imgAmplop} alt="" className="w-5 mr-2" />
                  <span>iqbaal.ee@gmail.com</span>
                </li>
                <li class="flex items-center gap-2">
                  {/* <!-- Icon Telepon --> */}
                  <img src={imgPhone} alt="" className="w-5 mr-2" />
                  <span>62 121-313-456</span>
                </li>
                <li class="flex items-center gap-2">
                  {/* <!-- Icon Instagram --> */}
                  <img src={imgInstagram} alt="" className="w-5 mr-2" />
                  <span>iqbaal.e</span>
                </li>
              </ul>
            </div>

            {/* <!-- Kanan: Formulir --> */}
            <form class="space-y-4">
              <input
                type="text"
                placeholder="Nama"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                rows="4"
                placeholder="Pesan"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                class="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
