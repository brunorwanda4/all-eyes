import Image from "next/image";
import Link from "next/link";

const HeroUser = () => {
    return ( 
        <section className=" clear-start h-screen">
            <Link href={"/news/123"} className=" flex flex-col justify-between">
                <Image
                 src={"/004.jpg"}
                 alt="background hero  image"
                 layout="fill"
                 className=" object-cover"
                />
                <div className=" absolute flex flex-col justify-start items-end font-serif mt-80 px-2 w-96">
                    <h2 className=" text-white font-semibold text-3xl lg:text-4xl">
                        What happen in sos school 
                    </h2>
                    <p className="  text-start text-slate-300">
                        What happen in sos school 
                        What happen in sos school 
                        What happen in sos school 
                        What happen in sos school 
                        What happen in sos school 
                        What happen in sos school !!!
                    </p>
                </div>
            </Link>
        </section>
     );
}
 
export default HeroUser;