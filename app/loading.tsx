import Image from "next/image";

const Loading = () => {
    return ( 
        <div className=" w-full bg-white dark:bg-gray-950 h-full">
            <div className='body'>
                <span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <div className='base'>
                    <span></span>
                    <div className='face'></div>
                </div>
            </div>
            <div className='longfazers'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div>
            <h1 className=" h1 text-2xl">Loading.....</h1>

        </div>
     );
}
 
export default Loading;