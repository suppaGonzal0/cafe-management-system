import './Cart.css'
import {ShoppingCartOutlined, ExpandLess, ExpandMore} from '@material-ui/icons'

function Cart() {
    return (
        <div className="cart">
            <div className="cartWrapper">
                <div className="cartTitle">
                    <div className="cartIcon">
                        <ShoppingCartOutlined fontSize = "large"/>
                    </div>
                    <div className="myCart">My Cart</div>
                </div>
                <ul className="cartItems">
                    <li className="cartItem" >
                        <div className="cartItemControl">
                            <button className="increment">
                                <ExpandLess/>
                            </button>
                            <div className="amount">
                                1
                            </div>
                            <button className="decrement">
                                <ExpandMore/>
                            </button>
                        </div>
                        <div className="cartItemPhoto">Photo</div>
                        <div className="cartItemName">Name</div>
                        <div className="cartItemPrice">Price</div>
                    </li>                    
                </ul>
            </div>
        </div>
    )
}

export default Cart
