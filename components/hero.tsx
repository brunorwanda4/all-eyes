"use client";

import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Slider from "react-slick";
import { heroNew } from "@/constants";
import { Button } from "./ui/button";
import { BsArrowLeft,BsArrowRight } from "react-icons/bs";

const HeroUser = () => {

    const sliderRef = useRef<Slider | null>(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
    }

    const next = () => {
    if (sliderRef.current) {
        sliderRef.current.slickNext();
    }
    };

    const previous = () => {
    if (sliderRef.current) {
        sliderRef.current.slickPrev();
    }
    };

    return ( 
        <section className=" clear-start  pt-20 relative">
            <div className=" flex absolute z-30 justify-between w-full px-2 items-center place-content-center mt-[40vh]">
                <Button onClick={previous} className=" btn btn-outline bg-transparent rounded-full "><BsArrowLeft/></Button>
                <Button onClick={next} className="btn btn-outline bg-transparent rounded-full "><BsArrowRight/></Button>
            </div>
            <Slider {...settings} ref={sliderRef}>
                {heroNew.map((heros) => {
                    return <div key="heros.title" className="relative h-screen w-full">
                        <Link href="/news/1234">
                            <div>
                                <Image src={heros.image} alt={heros.title} fill className="object-cover" />
                            </div>
                            <div className=" absolute z-20 px-2 mt-[50vh] w-80 md:w-96  flex flex-col gap-2">
                                <span className=" text-sm font-extralight text-end text-gray-400">{heros.date}</span>
                                <span className=" text-sky-400 text-2xl font-bold ">{heros.title}</span>
                                <p className=" text-sm font-light">{heros.description.split(" ").slice(0, 35).join(" ")} ...</p>
                                <Link href={"/profile/1234"} className=" flex gap-4  backdrop-blur p-4 w-60  rounded-md ">
                                    <Image src={heros.logo} alt={heros.title} width={52} height={52} className=" rounded-full object-cover cursor-pointer"/>
                                    <span className=" text-lg font-bold mt-4 cursor-pointer text-sky-400">{heros.name}</span>
                                </Link>
                            </div>
                        </Link>
                    </div>
                })}
            </Slider>
        </section>
     );
}
 
export default HeroUser;