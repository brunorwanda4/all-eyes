import UserLoginForm from "@/components/register/user-login-fom";

const LoginUser = () => {
    return ( 
        <div className=" flex flex-col text-center gap-4">
            <h2 className=" text-2xl text-sky-400 font-bold  ">Login</h2>
            <p className=" text-gray-500 ">
                Welcome on SOS Technical school student page <br /> 
                get Your Account
            </p>
            <UserLoginForm/>
        </div>
     );
}
 
export default LoginUser;