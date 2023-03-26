import React, { useEffect } from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from "react-router-dom";

const Product = () =>{
    
    const [selectImg, setSelectedImg]= useState(0);
    const [quantity, setquantity]= useState(1);

    const images = [
        "https://res.cloudinary.com/gimg1/image/upload/w_489,h_734,c_fill,f_auto,q_auto/v1/Pinko/Style/LOOK/1G18CPZ350-O28-AA01",
        "https://cdna.lystit.com/photos/giglio/233e5718/pinko-Fuchsia-Mantel.jpeg"
    ];

   
    return (
        <div className="product">
            <div className="left">
                <div className="images">
                    <img src={images[0]} alt="" onClick={e => setSelectedImg(0)} />
                    <img src={images[1]} alt="" onClick={e => setSelectedImg(1)}/>
                </div>
                <div className="mainImg">
                    <img src={images[selectImg]} alt="" onClick={e => setSelectedImg(1)}/>
                </div>
            </div>
            <div className="right">
                <h1>Coat</h1>
                <span className="price">$500</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate magnam harum architecto asperiores commodi dolorum, esse optio, minima sapiente ut dolore consequatur minus nulla eius repellat eum molestias amet atque.</p>
                <div className="quantity">
                    <button onClick={()=> setquantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
                        {quantity}
                    <button onClick={()=> setquantity((prev) => prev + 1)}>+</button>
                </div>
                <button className="add">
                    <AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className="link">
                    <div className="item">
                        <FavoriteBorderIcon/> ADD TO WISH LIST
                    </div>
                    <div className="item">
                        <BalanceIcon/>ADD TO COMPARE
                    </div>
                    <div className="info">
                        <span>Vendor: Polo</span>
                        <span>Product Type: T-shirt</span>
                        <span>Tag: T-Shirt, Women, Top</span>
                    </div>
                    <div className="info">
                        <span>DESCRIPTION</span>
                        <hr />
                        <span>FAQ</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;

//second
// const Product = () =>{
//     const id= useParams().id;
//     const [selectImg, setSelectedImg]= useState("img");
//     const [quantity, setquantity]= useState(1);
//     const [products, setProducts] = useState([]);
//       useEffect(() => {
//         const fetchProducts = async () => {
//           try {
//             const url = `http://localhost:5000/api/products/${id}?populate=*`;
//             const response = await fetch(url);
//             const result = await response.json();
//             console.log(result)
//             setProducts(result.data);

//           } catch (error) {
//             console.error(error);
//           }
//         };
    
//         fetchProducts();
//       },[id]);
//     return (
//         <div className="product">
//             {<><div className="left">
//                 <div className="images">
//                     <img src={products[0]?.img?.data?.url} alt="" onClick={e => setSelectedImg("img")} />
//                     <img src={products[0]?.img?.data?.url} alt="" onClick={e => setSelectedImg("img2")} />
//                 </div>
//                 <div className="mainImg">
//                     <img src={products[0]?.[selectImg]?.data?.url} alt="" onClick={e => setSelectedImg(1)}/>
//                 </div>
//             </div>
//             <div className="right">
//                 <h1>Title</h1>
//                 <span className="price">$199</span>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate magnam harum architecto asperiores commodi dolorum, esse optio, minima sapiente ut dolore consequatur minus nulla eius repellat eum molestias amet atque.</p>
//                 <div className="quantity">
//                     <button onClick={()=> setquantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
//                         {quantity}
//                     <button onClick={()=> setquantity((prev) => prev + 1)}>+</button>
//                 </div>
//                 <button className="add">
//                     <AddShoppingCartIcon/> ADD TO CART
//                 </button>
//                 <div className="link">
//                     <div className="item">
//                         <FavoriteBorderIcon/> ADD TO WISH LIST
//                     </div>
//                     <div className="item">
//                         <BalanceIcon/>ADD TO COMPARE
//                     </div>
//                     <div className="info">
//                         <span>Vendor: Polo</span>
//                         <span>Product Type: T-shirt</span>
//                         <span>Tag: T-Shirt, Women, Top</span>
//                     </div>
//                     <div className="info">
//                         <span>DESCRIPTION</span>
//                         <hr />
//                         <span>FAQ</span>
//                     </div>
//                 </div>
//             </div></>}
//         </div>
//     )
//     }

// export default Product;

// const Product = () => {
//     const { id } = useParams();
//     const [selectedImg, setSelectedImg] = useState("img");
//     const [quantity, setQuantity] = useState(1);
//     const [product, setProduct] = useState(null);
  
//     useEffect(() => {
//       const fetchProduct = async () => {
//         try {
//           const response = await fetch(`http://localhost:5000/api/products/${id}`);
//           const result = await response.json();
//           console.log(result);
//           setProduct(result.data);
//         } catch (error) {
//           console.error(error);
//         }
//       };
  
//       fetchProduct();
//     }, [id]);
  
//     return (
//       <div className="product">
//         {product ? (
//           <>
//             <div className="left">
//               <div className="images">
//                 <img src={product?.data?.img?.url} alt="" onClick={(e) => setSelectedImg("img")} />
//                 <img src={product?.data?.img2?.url} alt="" onClick={(e) => setSelectedImg("img2")} />
//               </div>
//               <div className="mainImg">
//                 <img src={product[selectedImg]?.data?.url} alt="" onClick={(e) => setSelectedImg(1)} />
//               </div>
//             </div>
//             <div className="right">
//               <h1>{product.name}</h1>
//               <span className="price">${product.price}</span>
//               <p>{product.description}</p>
//               <div className="quantity">
//                 <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>-</button>
//                 {quantity}
//                 <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
//               </div>
//               <button className="add">
//                 <AddShoppingCartIcon /> ADD TO CART
//               </button>
//               <div className="link">
//                 <div className="item">
//                   <FavoriteBorderIcon /> ADD TO WISH LIST
//                 </div>
//                 <div className="item">
//                   <BalanceIcon />ADD TO COMPARE
//                 </div>
//                 <div className="info">
//                   <span>Vendor: {product.vendor}</span>
//                   <span>Product Type: {product.productType}</span>
//                   <span>Tag: {product.tag}</span>
//                 </div>
//                 <div className="info">
//                   <span>DESCRIPTION</span>
//                   <hr />
//                   <span>FAQ</span>
//                 </div>
//               </div>
//             </div>
//           </>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     );
//   };
  
//   export default Product;
  