import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({type, products}) => {

    // const data = [
    //     {
    //         id: 1,
    //         img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Long Sleeve Graphic T-shirt",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 2,
    //         img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Long Sleeve Graphic T-shirt",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 3,
    //         img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Long Sleeve Graphic T-shirt",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    //     {
    //         id: 4,
    //         img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Long Sleeve Graphic T-shirt",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     }
    // ];

    // return (
    //     <div className="featuredProducts">
    //         <div className="top">
    //             <h1>{type} products</h1>
    //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusamus sequi atque in earum id omnis esse debitis, accusantium adipisci obcaecati optio! Culpa, similique voluptatem! Eveniet error quaerat facilis architecto eius dolore fuga consequatur ducimus pariatur aut tempora, aspernatur similique voluptas nostrum ea quam maxime adipisci reprehenderit laboriosam? Debitis, voluptates!</p>
    //         </div>
    //         <div className="bottom">
    //             {products.map(item=>(
    //                 <Card item={item} key={item.id}/>
    //             ))}
    //         </div>
    //     </div>
    // )
    const filteredProducts = products.filter(product => product.type === type);
    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta accusamus sequi atque in earum id omnis esse debitis, accusantium adipisci obcaecati optio! Culpa, similique voluptatem! Eveniet error quaerat facilis architecto eius dolore fuga consequatur ducimus pariatur aut tempora, aspernatur similique voluptas nostrum ea quam maxime adipisci reprehenderit laboriosam? Debitis, voluptates!</p>
            </div>
            <div className="bottom">
                {filteredProducts.map(item=>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts;