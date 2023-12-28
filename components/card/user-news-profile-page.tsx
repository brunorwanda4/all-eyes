import { popularNews } from "@/constants";

const UserNewsProfilePage = () => {
    const PopularNews = popularNews.slice(0,1)
    return ( 
        <div>
            {PopularNews.map((news) => {
                return <div key={news.name}>
                    <div>
                        <span>{news.date}</span>
                        <h3>{news.name}</h3>
                    </div>
                </div>
            })}
        </div>
     );
}
 
export default UserNewsProfilePage;