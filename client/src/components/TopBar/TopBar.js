import './TopBar.css'
import {Search, FilterList, Sort, ExitToApp} from '@material-ui/icons'

function TopBar() {
    return (
        <div className="topBarContainer">
            <div className="topBarLeft">
                <div className="logo">Cafe BinMin</div>
            </div>
            <div className="topBarCenter">
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input type="text" placeholder="Search" className="searchInput" />
                </div>
                <div className="options">
                    <div className="option"><FilterList/></div>
                    <div className="option"><Sort/></div>    
                </div>             
            </div>
            <div className="topBarRight">
                <div className="account">Account</div>
                <div className="login"><ExitToApp/></div>                
            </div>            
        </div>
    )
}

export default TopBar
