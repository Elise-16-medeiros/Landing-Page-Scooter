"use client";

import React, { useState } from "react";
import Image from "next/image";
import { images } from "@/lib/constants";
import { Swiper as SwiperClass, SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.module.css";
export default function CarouselColors() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <section className="min-h-screen py-12">
      <div className="container">
        <Swiper
       /*    style={
            {
              "--swiper-navigation-color": "#42454a",
              "--swiper-pagination-color": "#42454a",
            } as React.CSSProperties
          } */
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-96 w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={350}
                  height={250}
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/*  THUMBNAIL */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={12}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mt-3 h-32 w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={150}
                  height={0}
                  className="block h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
