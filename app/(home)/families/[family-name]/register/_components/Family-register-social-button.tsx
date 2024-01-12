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
         className=" btn text-2xl hover:bg-sky-500 duration-300 items-center"
         >
            <Icon/>
        </Button>
     );
}
 
export default FamilyRegisterSocialButton;