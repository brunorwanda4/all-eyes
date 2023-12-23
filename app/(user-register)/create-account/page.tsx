import UserCreateAccount from "@/components/register/user-create-account";

const SignUpUser = () => {
    return ( 
        <section>
            <div className=" flex flex-col text-center gap-4">
                <h2 className=" text-sky-400 text-xl font-semibold">Create Account</h2>
                <p className=" text-gray-500 ">
                    Welcome on SOS Technical school student page <br /> 
                    Create Your Account
                </p>
            </div>
            <UserCreateAccount/>
        </section>
     );
}
 
export default SignUpUser;