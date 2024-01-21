import { Button } from "@/components/ui/button";
import { IconType } from "react-icons"

interface socialProps {
    icon : IconType;
    onClick : () => void ;
}

const FamilyRegisterSocialButton : React.FC<socialProps> = ({
    icon : Icon , onClick,
}) => {
    return ( 
        <Button
         type="button"
         onClick={onClick}
         className=" btn text-2xl hover:bg-sky-500 duration-300 items-center border-none bg-white text-slate-500 hover:text-white dark:bg-gray-900  shadow-sky-200 dark:shadow-gray-950 "
         >
            <Icon/>
        </Button>
     );
}
 
export default FamilyRegisterSocialButton;