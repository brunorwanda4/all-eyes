import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import {Button} from "../ui/button"

const ContactFormUser = () => {
    return ( 
        <form className=" w-80 clear-start flex flex-col gap-4">
            <Input 
                type="text" 
                placeholder=" Your name or email"
                className=" w-full"
                autoFocus
            />
            <Textarea
             className=" w-full h-60"
             placeholder=" Your problem or description here"
            />
            <Button className=" bg-sky-400 btn-active">
                Send
            </Button>
        </form>
     );
}
 
export default ContactFormUser;