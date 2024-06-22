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

export default function CarouselColors() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <section className="min-h-screen py-12">
      <div className="container mx-auto">
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#42454a",
              "--swiper-pagination-color": "#42454a",
            } as React.CSSProperties
          }
          //slidesPerView={1}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
        /*   breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }} */
          modules={[FreeMode, Navigation, Thumbs]}
          className="h-[450px] w-[650px] rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={350}
                  height={250}
                  className="block h-full w-full object-scale-down"
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
                  className="block h-full w-full cursor-pointer object-scale-down"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
