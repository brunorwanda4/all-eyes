"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

import Image from "next/image";
import { newUser } from "../../constants";
import { BsInstagram, BsPerson } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";

const NewsUser: React.FC = () => {
  return (
    <>
      <h3 className="text-2xl text-sky-500 font-semibold ml-2 group-name">
        Website Members
      </h3>
      <Swiper
        spaceBetween={2}
        slidesPerView={6}
        loop={true}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1920: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        className=" mt-2"
      >
        {newUser.map((user) => (
          <SwiperSlide
            key={user.username}
            className="p-1 px-2 bg-white dark:bg-gray-900 rounded-sm"
          >
            <div className=" flex items-center w-full h-full justify-center">
              <Link href={`/profile/{user.username}`}>
                <Image
                  src={user.image}
                  height={150}
                  width={150}
                  alt={`profile image for ${user.fullName}`}
                  className="h-40 w-40 rounded-full object-cover"
                />
              </Link>
            </div>
            <div className=" flex flex-col gap-2">
              <h3 className=" text-base font-semibold group-name text-gray-500 text-center mt-2">
                {user.username}
              </h3>
              <Link
                href={`/profile/{user.username}`}
                className="text-sky-500 flex gap-2"
                >
                <span className=" text-gray-500 text-2xl">
                  <BsPerson/>
                </span>
                {user.fullName}
              </Link>
              <Link href={`https://www.instagram.com/${user.username}/?hl=en`} target="_blank" rel="noopener noreferrer" className=" flex gap-2">
                <BsInstagram className=" text-xl text-gray-500 "/>
                <span className=" text-sky-500">
                  {user.username}
                </span>
              </Link>
              <Link href={`/families/${user.family}`} className="text-sky-500 flex gap-2">
                <FaPeopleGroup className=" text-2xl text-gray-500 "/>
                <span className=" text-sky-500">{user.family}</span>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default NewsUser;
