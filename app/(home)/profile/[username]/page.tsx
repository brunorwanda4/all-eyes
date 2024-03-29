import UserInfProfilePage from "@/components/card/user-inf-profile-page";
import UserNewsProfilePage from "@/components/card/user-news-profile-page";
import UserUploadNews from "@/components/card/user-upload-news";

const ProfileUserPage = () => {
    return ( 
        <section className="w-full pt-20 flex gap-3 justify-between flex-col ">
            <UserInfProfilePage/>
            <UserNewsProfilePage/>
        </section>
     );
}
 
export default ProfileUserPage;