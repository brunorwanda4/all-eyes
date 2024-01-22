import {currentUser} from "@clerk/nextjs"
import { redirect } from "next/navigation";
import OnBoardingCard from "../../../components/card/on-boarding-card";

const OnBoardingPage = async () => {
//     const user = await currentUser();
//   if (!user) return null; // to avoid typescript warnings


//   const userData = {
//     id: user.id,
//     objectId: userInfo?._id,
//     username: userInfo ? userInfo?.username : user.username,
//     name: userInfo ? userInfo?.name : user.firstName ?? "",
//     bio: userInfo ? userInfo?.bio : "",
//     image: userInfo ? userInfo?.image : user.imageUrl,
//   };
    return ( 
        <main>
            <div>
                <h2 className=" text-2xl  font-semibold">
                    Onboarding
                </h2>
                <p className=" text-gray-500 text-sm ">
                    Complete your profile now to use <span className=" text-sky-500 group-name">Space to gether</span>
                </p>
            </div>
            <OnBoardingCard
            //  User={userData}
            //  btnTitle="Continue"
             />
        </main>
     );
}
 
export default OnBoardingPage;