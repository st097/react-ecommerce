import React, { useEffect, useState } from "react";
import "./List.scss";
import Card from "../Card/Card";

const List = ({subCats, maxPrice, sort, catId}) =>{
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

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          console.log(subCats);
          // const url = `http://localhost:5000/api/products?populate=*&[filters][categories][id]=${catId}`;
          // const url = `http://localhost:5000/api/products?populate=*&[filters][categories][id]=${catId}&[filters][price][&lte]=${maxPrice}&sort=price${sort}`;
          let url = `http://localhost:5000/api/products`
          if (subCats[0]) {
            url += `/${subCats[0]}`;
          }
          
          const response = await fetch(url);
          const result = await response.json();
          console.log(result)
          setProducts(result.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchProducts();
    }, [catId, subCats, maxPrice, sort]);

    return(
        // <div className="list">
        //     {data?.map(item=>(<Card item={item} key={item.id}/>))}
        // </div>
        // the right one bellow
     
            <div className="list">
                {(products && (products.length) > 0) && products.map((product) => (
                  <Card item={product} key={product.id} />
                ))}

            </div>
          
    )
}

export default List;








// const List = ({ selectedSubCats, maxPrice, sort, catId }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         console.log(selectedSubCats);
//         const subCatFilters = selectedSubCats.map((item) => `&[filters][subCategories][productId][$eq]=${item}`).join("");
        
//         const url = `http://localhost:5000/api/products?populate=*&[filters][categories][id]=${catId}${subCatFilters}`;
//         const response = await fetch(url);
//         const result = await response.json();
//         setProducts(result.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProducts();
//   }, [catId, selectedSubCats, maxPrice, sort]);

//   return (
//     <div className="list">
//       {products.map((product) => (
//         <Card item={product} key={product.id} />
//       ))}
//     </div>
//   );
// };
// export default List;
