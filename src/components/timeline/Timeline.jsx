import Share from "../../components/share/Share";
import "./timeline.css";


export default function Timeline() {
    return(
        <div className="timelineContainer">
            <div className="timelineWrapper">
                <div className="profileRightTop">
                    <div className="profileCover">   
                     <img className="profileUserImg" src="assets/person/fav.JPG" alt=""/>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Levi John Favour</h4>
                        <span className="profileInfoDesc">hello my friends</span>
                    </div>
                </div>
                <Share className="timelineShare"/>
                <div className="gallaryContainer">
                    <div className="gallary">
                        <img src="assets/post/piano1.jpeg"  alt="" className="gallaryImg"/>
                        <img src="assets/post/piano2.jpeg"  alt="" className="gallaryImg"/>
                        <img src="assets/post/piano3.jpeg"  alt="" className="gallaryImg"/>         
                        <img src="assets/person/2.jpg"  alt="" className="gallaryImg"/>                          
                        <img src="assets/person/3.jpg"  alt="" className="gallaryImg"/>                       
                        <img src="assets/person/fav.JPG"  alt="" className="gallaryImg"/>  
                    </div>
                </div>
            </div>
        </div>
    );
}