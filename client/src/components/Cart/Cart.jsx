import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () =>{
    const data = [
        {
            id: 1,
            img: "https://images.asos-media.com/products/polo-ralph-lauren-lounge-long-sleeve-t-shirt-in-green-with-chest-text-logo/203446192-1-green?$n_750w$&wid=750&hei=750&fit=crop",
            img2: "https://images.asos-media.com/products/polo-ralph-lauren-lounge-t-shirt-in-olive-green-with-chest-text-logo/203445759-1-green?$n_750w$&wid=750&hei=750&fit=crop",
            title: "Polo T-Shirt",
            desc: "Long Sleeve T-shirt",
            isNew: true,
            oldPrice: 188,
            price: 161,
        },
        {
            id: 2,
            img: "https://res.cloudinary.com/gimg1/image/upload/w_489,h_734,c_fill,f_auto,q_auto/v1/Pinko/Style/LOOK/1G18CPZ350-O28-AA01",
            title: "Coat",
            desc: "Coat",
            isNew: true,
            oldPrice: 529,
            price: 500,
        }
    ];

    return(
        <div className="cart">
            <h1>Products in your chart</h1>
            {data?.map( (item) => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt=""/>
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className="price">
                            1 x ${item.price}
                        </div>
                    </div>
                    <DeleteOutlinedIcon className="delete"/>
                </div>
                ))}
                <div className="total">
                    <span>SUBTOTAL</span>
                    <span>$661</span>
                </div>
                <button>PROCEED TO CHECKOUT</button>
                <span className="reset">Reset Cart</span>
              
        </div>
    )
}

export default Cart;