import Topbar from "../../components/topbar/Topbar";
import Timeline from "../../components/timeline/Timeline";
import ProfileRightBar from "../../components/profileRightBar/ProfileRightBar";
import "./profile.css"

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                 <Timeline />
                <ProfileRightBar/>
            </div>
        </>
    );
}