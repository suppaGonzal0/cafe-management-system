import './OrderCard.css'

function OrderCard({title = "Item", price = " ৳00.00", photo}) {
    return (
        <div className = "card">
            <div className="cardCover">
                <img src={photo} alt={title} />
            </div>
            <div className="cardContent">
                <div className="itemTitle">
                    <h3>{title}</h3>
                </div>
                <div className="interactions">
                    <div className="price">
                        {price}
                    </div>
                    <div className="addButton">
                        <button>+</button>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default OrderCard
