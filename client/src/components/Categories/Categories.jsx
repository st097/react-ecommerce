import React from "react";
import "./Categories.scss";
import {Link} from "react-router-dom";
const Categories = () =>{
    return(
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://images.fastfashionnews.co.uk/wp-content/uploads/2020/04/fashion-sales.jpeg" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Sale</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://media.glamourmagazine.co.uk/photos/633eeedb7e1bb30bf7374d07/1:1/w_1920,h_1920,c_limit/KAIA%20GERBER%20X%20ZARA%20061022%20SQUARE.jpg" alt=""/>
                    <button>
                         <Link to="/products/1" className="link">
                             Women
                        </Link>
                     </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://wwd.com/wp-content/uploads/2021/04/mens-fashion-2021-awards-season-4-1.jpg?w=1024" alt="" />
                    <button>
                        <Link to="/products/1" className="link">
                        New Season
                        </Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://www.themanual.com/wp-content/uploads/sites/9/2020/09/will-smith-overalls-copy.jpg?fit=800%2C533&p=1" alt=""/>
                            <button>
                                <Link to="/products/1" className="link">
                                    Men
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://cdn.shopify.com/s/files/1/0259/4344/1457/collections/s22_q1_w_vday_accessories_cluster_4467-547936.jpg?v=1644355846" alt=""/>
                            <button>
                                <Link to="/products/1" className="link">
                                    Accessories
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                        <img src="https://i.pinimg.com/564x/a0/ad/f7/a0adf7d44be4fe48595ebbfce69d8e76.jpg" alt=""/>
                        <button>
                        <Link to="/products/1" className="link">
                            Shoes
                        </Link>
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Categories;