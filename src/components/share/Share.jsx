import "./share.css";
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons";

export default function Share() {
    return (
       <div className="share">
           <div className="shareWrapper">
               <div className="shareTop">
                   <img src="/assets/person/fav.JPG" alt="" className="shareProfileImg"/>
                   <textarea type="text" className="shareInput" placeholder="Share your Thought's"/>
               </div>
               <hr className="shareHr"/>
               <div className="shareButton">
                   <div className="shareOptions">
                       <div className="shareOption">
                           <PermMedia htmlColor="tomato" className="shareIcon"/>
                           <span className="shareOptionText">Photo or Video</span>
                       </div>
                       <div className="shareOption">
                           <Label htmlColor="blue" className="shareIcon"/>
                           <span className="shareOptionText">Tag</span>
                       </div>
                       <div className="shareOption">
                           <Room htmlColor="green" className="shareIcon"/>
                           <span className="shareOptionText">Location</span>
                       </div>
                       <div className="shareOption">
                           <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                           <span className="shareOptionText">Feelings</span>
                       </div>
                   </div>
                   <button className="shareBtn">Post</button>
               </div>
           </div>
       </div>
    )
}