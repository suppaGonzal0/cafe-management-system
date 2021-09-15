import './SideBar.css'
import {RestaurantMenu, Person, History} from '@material-ui/icons'

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem" id={window.location.pathname === "/home" ? "active" : ""} onClick={() => window.location.pathname = "/home"}>
                        <RestaurantMenu className="sidebarIcon"/>
                        <div className="sidebarListItemText">Menu</div>
                        
                    </li>
                    <li className="sidebarListItem" id={window.location.pathname === "/profile" ? "active" : ""} onClick={() => window.location.pathname = "/profile"}>
                        <Person className="sidebarIcon"/>
                        <div className="sidebarListItemText">Profile</div>
                        
                    </li>
                    <li className="sidebarListItem" id={window.location.pathname === "/orders" ? "active" : ""} onClick={() => window.location.pathname = "/orders"}>
                        <History className="sidebarIcon"/>
                        <div className="sidebarListItemText">My Orders</div>
                        
                    </li>
                </ul>
            </div>
            
        </div>
    )
}

export default SideBar
