import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import "./Products.scss";

// const Products = () =>{

//     const catId = parseInt(useParams().id);
//     const [maxPrice, setmaxPrice] = useState(1000);
//     const [sort, setSort] = useState(null);

//     return (
//         <div className="products">
//             <div className="left">
//                 <div className="filterItem">
//                     <h2>Product Category</h2>
//                     <div className="inputItem">
//                         <input type="checkbox"  id="1" value={1} />
//                         <label htmlFor="1">Shoes</label>
//                     </div>
//                     <div className="inputItem">
//                         <input type="checkbox"  id="2" value={2} />
//                         <label htmlFor="2">Skirts</label>
//                     </div>
//                     <div className="inputItem">
//                         <input type="checkbox"  id="3" value={3} />
//                         <label htmlFor="3">Coats</label>
//                     </div>
//                     <div className="inputItem">
//                         <input type="checkbox"  id="4" value={4} />
//                         <label htmlFor="4">Coats</label>
//                     </div>
//                 </div>
//                 <div className="filterItem">
//                     <h2>Filter by price</h2>
//                     <div className="inputItem">
//                         <span>0</span>
//                         <input type="range" min={0} max={1000} onChange={(e)=>setmaxPrice(e.target.value)}/>
//                         <span>{maxPrice}</span>
//                     </div>
//                 </div>
//                 <div className="filterItem">
//                     <h2>Sort by </h2>
//                     <div className="inputItem">
//                         <input type="radio" id="asc" value="asc" name="price" onChange={(e)=>setSort("asc")}/>
//                         <label htmlFor="asc">Price (Lowest first)</label>
//                     </div>
//                     <div className="inputItem">
//                         <input type="radio" id="desc" value="desc" name="price" onChange={(e)=>setSort("desc")}/>
//                         <label htmlFor="desc">Price (Highest first)</label>
//                     </div>
//                 </div>
//             </div>
//             <div className="right">
//                 <img className="catImage" src="https://media.glamour.com/photos/5cc75373eac2c387e594085a/master/w_2609,h_1020,c_limit/04-shanel.jpg" alt="" />
//                 <List catId={catId} maxPrice={maxPrice} sort={sort}/>
//             </div>
//         </div>
//     )
// }

//bellow is the right one
const Products = () =>{

    const catId = parseInt(useParams().id);
    const [maxPrice, setmaxPrice] = useState(1000);
    const [sort, setSort] = useState(null);

    const [subCategories, setSubCategories] = useState([]);
    
    const [selectedSubCats, setSelectedSubCats] = useState([]);

    useEffect(() => {
        const fetchSubCategories = async () => {
          try {
            const response = await fetch('http://localhost:5000/api/subCategories');
            const result = await response.json();
            //it filters all subCategories which have the categoryId = 1
            const filteredSubCategories = result.data.filter(subCat => subCat?.categoryId == catId);
            // console.log(filteredSubCategories);
            setSubCategories(filteredSubCategories);
            
          } catch (error) {
            console.error(error);
          }
        };

        fetchSubCategories();
      }, [catId]);
      
      const handleChange =(e)=>{
        const value = e.target.value;
        const isChecked = e.target.checked;
       
        setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item != value));
      };
    //   console.log(selectedSubCats);

    return (
        <div className="products">
            <div className="left">
                <div className="filterItem">
                    <h2>Product Category</h2>
                    {subCategories.map((item) => {
                        return (
                            <div className="inputItem" key={item.id}>
                            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
                            <label htmlFor={item.id}>{item.title}</label>
                            </div>
                        );
                        })}
                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(e)=>setmaxPrice(e.target.value)}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by </h2>
                    <div className="inputItem">
                        <input type="radio" id="asc" value="asc" name="price" onChange={(e)=>setSort("asc")}/>
                        <label htmlFor="asc">Price (Lowest first)</label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id="desc" value="desc" name="price" onChange={(e)=>setSort("desc")}/>
                        <label htmlFor="desc">Price (Highest first)</label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img className="catImage" src="https://media.glamour.com/photos/5cc75373eac2c387e594085a/master/w_2609,h_1020,c_limit/04-shanel.jpg" alt="" />
                <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
            </div>
        </div>
    )
}

  
  export default Products;