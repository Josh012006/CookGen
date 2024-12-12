"use client"

import Image from "next/image";

import { Playwrite_US_Modern } from "next/font/google";
import { normalize } from "path";


const playwrite_us = Playwrite_US_Modern({
  style: "normal",
  weight: "400"
});

export default function SplashPage() {
  return (
    <div className="text-center flex flex-col items-center justify-around h-screen w-full bg-orange-100 py-9">
      <h1>CookGen</h1>
      <img src="/icon.png" alt="app's icon" className="max-w-44"/>
      <p className={`${playwrite_us.className} `}>The App where you will find your next meal😋</p>
    </div>
  );
}
