import "./feed.css";
import Share from "../share/Share";
import Stories from "../Stories/Stories";
import Post from "../post/Post";
import {Posts} from "../../dummyData"

export default function Feed() {
    return (
        <div className="feed">
           <div className="feedWrapper">
                <Share className="share"/> 
                <Stories />
                {Posts.map((p) => (      
                <Post key={p.id} post={p}/>
                ))}
            </div>  
        </div>
    );
}