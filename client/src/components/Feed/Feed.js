import OrderCard from '../OrderCard/OrderCard'
import Promotions from '../Promotions/Promotions'
import './Feed.css'

function Feed() {
    
    return (
        <div className="feed">
           <div className="promotions">
               <Promotions/>
           </div>
           <div className="menuTitle">
              <h1>Menu</h1>
           </div>
           <div className="menuItems">
            <div className="breakfast">
                <h1>Breakfast</h1>
                <hr/>
                <div className="items">
                    <OrderCard title="Coffee" price=" ৳40.00" photo = "https://cdn-icons-png.flaticon.com/512/2872/2872362.png"/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    <OrderCard/>
                    
                </div>
                
            </div>
            <div className="lunch">
                <h1>Lunch</h1>
                <hr/>
                <div className="items">
                    <OrderCard/>
                </div>                
            </div>
            <div className="snacks">
                <h1>Snacks</h1>
                <hr/>
                <div className="items">
                    <OrderCard/>
                </div>                
            </div>
            <div className="beverages">
                <h1>Beverages</h1>
                <hr/>
                <div className="items">
                    <OrderCard/>
                </div>                
            </div>
           </div>           
        </div>
    )
}

export default Feed
