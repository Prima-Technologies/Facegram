import {RssFeed, Group, Chat, PlayCircleFilledOutlined} from "@material-ui/icons";
import "./profileSideBar.css";

export default function ProfileSideBar() {


    return (
        <div className="profileSideBar">
            <div className="profileSideBarWrapper">
                <ul className="profileSideBarList">
                    <li className="profileSidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="profileSidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="profileSidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="profileSidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}