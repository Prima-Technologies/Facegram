import "./profileRightBar.css";

export default function ProfileRightBar() {


    return (
        <div className="profileContainer">
            <div className="profileContainerWrapper">
                    <h4 className="rightBarTitle">User Information</h4>
                <div className="rightBarInfo">
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">City:</span>
                        <span className="rightBarInfoValue">New York</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">From:</span>
                        <span className="rightBarInfoValue">Nigeria</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">Relationship:</span>
                        <span className="rightBarInfoValue">Single</span>
                    </div>
                    <button className="editProfile">Edit Profile</button>
                </div>
                <h4 className="rightBarTitle">User Friends</h4>
                <div className="rightBarFollowings">
                    <div className="rightBarFollowing">
                        <img src="assets/person/2.jpg" alt="" className="rightBarFollowingImg"/>
                        <span className="rightBarFollowingName">Prince Isaac Levi</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="assets/person/2.jpg" alt="" className="rightBarFollowingImg"/>
                        <span className="rightBarFollowingName">Prince Isaac Levi</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="assets/person/2.jpg" alt="" className="rightBarFollowingImg"/>
                        <span className="rightBarFollowingName">Prince Isaac emmanuel</span>
                    </div>
                    <button className="seeMoreFriends">See More</button>
                </div>
            </div>
        </div>
    );
}