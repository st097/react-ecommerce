// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet
// } from "react-router-dom";
// import Footer from "./components/Footer/Footer";
// import Navbar from "./components/Navbar/Navbar";
// import Home from "./pages/Home/Home";
// import Product from "./pages/Product/Product";
// import Products from "./pages/Products/Products";
// import "./app.scss";


// const Layout = () =>{
//   return(
//     <div className="app">
//       <Navbar/>
//       <Outlet/>
//       <Footer/>
//     </div>
//   )
// }

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "/",
//         element: <Home/>
//       },
//       {
//         path: "/products/:id",
//         element: <Products/>
//       },
//       {
//         path: "/product/:id",
//         element: <Product/>
//       }
//     ]
//   },
 
// ]);
// function App() {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import "./app.scss";
import Registration from "./components/Registration/Registration";
import LogIn from "./components/LogIn/LogIn";
import Profile from "./pages/Profile/Profile";

const Layout = () =>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/register",
    element: <Registration/>
  },
  {
    path: "/login",
    element: <LogIn/>
  },
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/profile",
        element: <Profile/>
      },
      {
        path: "/products/:id",
        element: <Products/>
      },
      {
        path: "/product/:id",
        element: <Product/>
      }
    ]
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;