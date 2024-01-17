import {currentUser} from "@clerk/nextjs"
import OnBoardingCard from "../../../components/card/on-boarding-card";
const OnBoardingPage = async () => {
    const user = await currentUser();

    const userInfo = {};

    const userData = {
        id : user?.id,
        image : userInfo?._id ,
        username : userInfo.userInfo?.username || user?.username,
        name : userInfo?.name || user?.firstName || "",
        socialAccounts : userInfo?.socialAccounts || "" ,
        avatar : userInfo?.avatar || user?.imageUrl,
    }
    return ( 
        <main>
            <OnBoardingCard 
             User={userData} 
             btnTitle="Continue"
             />
        </main>
     );
}
 
export default OnBoardingPage;