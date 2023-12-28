import Logo from "../logo";
import { ModeToggle } from "../mode-toggle";

const CreateFamilyNavbar = () => {
    return ( 
        <nav className=" flex w-full justify-between">
            <Logo/>
            <ModeToggle/>
        </nav>
     );
}
 
export default CreateFamilyNavbar;