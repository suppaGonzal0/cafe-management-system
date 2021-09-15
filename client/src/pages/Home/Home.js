import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import SideBar from '../../components/SideBar/SideBar'
import Feed from '../../components/Feed/Feed'
import Cart from '../../components/Cart/Cart'
import './Home.css'

function Home() {
    return (
        <>
            <TopBar/>
            <div className="homeContainer">
                <SideBar/>
                <Feed/>
                <Cart/>
            </div>
            
        </>
        
    )
}

export default Home
