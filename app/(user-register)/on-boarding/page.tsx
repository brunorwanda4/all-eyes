import OnboardingForm from "@/components/register/on-boarding-form";

const OnBoardingPage = () => {
    return ( 
        <div className=" flex flex-col items-center w-full justify-center h-full gap-2">
           <div className=" flex flex-col gap-1 text-center items-center">
                <h2 className=" text-2xl text-sky-500 font-semibold ">On boarding</h2>
                <p className=" text-gray-500 text-sm ">Create your profile now share us your social account and your profile image</p>
           </div>
           <OnboardingForm/>
        </div>
     );
}
 
export default OnBoardingPage;