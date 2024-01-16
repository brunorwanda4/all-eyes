import { family } from "../../constants";

const NewsUser: React.FC = () => {
    return ( 
        <div >
            {family.map((fam) => {
                return (
                    <div key={fam.username}></div>
                )
            })}
        </div>
     );
}
 
export default NewsUser;