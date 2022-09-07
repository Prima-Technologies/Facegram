import "./post.css"
import {MoreVert, Favorite} from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";
export default function Post({post}) {
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)
    // const [color, setColor] =useState()

    const likeHandler =() => {
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
        // setColor()
    }
    return (
            <div className="post">
               <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img className="postProfileImg" src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt=""/>
                            <span className="postUsername">
                                {Users.filter((u) => u.id === post?.userId)[0].username}
                            </span>
                            <span className="postDate">{post.date}</span>
                        </div>
                        <div className="postTopRight">
                            <MoreVert />
                        </div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">{post?.desc}</span>
                        <img className="postImg" id="postImg" src={post.photo} alt=""/>
                        {/* <video className="postImg" id="postVideo" src={post.video} title="videoPost" type="video/mp4"/> */}
                    </div>
                    <div className="postBottom">
                        <div className="postBottomLeft">
                            <Favorite id="likeIcon" className="likeIcon" onClick={likeHandler}/>
                            <span className="postLikeCounter"> {like} likes</span>
                        </div>
                        <div className="postBottomRight">
                            <span className="postCommentText">{post.comment} comments</span>
                        </div>
                    </div>
               </div>
            </div>
                
    );
}

// function postsItems(props) {
//     return (
//         <>
//             <h1>Who lives in my garage?</h1>
//             <Car brand="Ford" />
//         </>
//       );
//     }   
// }

// function videoOrImg() {
//     var img = document.getElementById("postImg");
//     var vid = document.getElementById("postVideo");
//     if(img.tagName === "IMG") {
//         vid.style.display = "none";
//     } else {
//         vid.style.display = "block";
//     }
// }