import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import clsx from "clsx";
interface TextareaProps {
    label : string;
    errors: FieldErrors;
    disabled?: boolean;
    required ?: boolean;
    id : string; 
    register : UseFormRegister<FieldValues>,
}

const FamilyRegisterTextarea: React.FC<TextareaProps> = ({
    label , errors , disabled , register , id , required
}) => {
    return ( 
        <div>
            <Label id={id} htmlFor={id} className="text-sm block leading-6 label text-gray-500">
                {label}
            </Label>

            <Textarea
             {...register(id, { required })}  
             className={clsx("textarea textarea-info border-sky-500 dark:border-gray-500" , errors && "")}
             disabled={disabled}
             autoComplete={id}
            />
        </div>
     );
}
 
export default FamilyRegisterTextarea;