import React, {useEffect, useState} from "react";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";

// const Home = () =>{
    
//     let [products, setProducts] = useState([]);
    
//     var requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//       };
      
//       fetch("http://localhost:5000/api/products", requestOptions)
//         .then(response => response.json())
//         .then(result => {setProducts(result.data) })
//         .catch(error => console.log('error', error));


//     return (
//         <div className="home">
//             <Slider/>
//             { products && <FeaturedProducts type="featured" products={products} />}
//             <Categories/>
//            { products && <FeaturedProducts type="trending" products={products}/>}
//             <Contact/>
//         </div>
//     )
// }

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch data from API and store it in the products state
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(result => {
        setProducts(result.data);
      })
      .catch(error => console.log('error', error));
  }, []);

    return (
        <div className="home">
            <Slider/>
            { products && <FeaturedProducts type="featured" products={products.filter(product => product.type === 'featured')} />}
            <Categories/>
           { products && <FeaturedProducts type="trending" products={products.filter(product => product.type === 'trending')}/>}
            <Contact/>
        </div>
    )
};




export default Home;