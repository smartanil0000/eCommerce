import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const user = true;

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />
  //   },
  //   {
  //     path: "/products/:category",
  //     element: <ProductList />
  //   },
  //   {
  //     path: "/product/:id",
  //     element: <Product />
  //   },
  //   {
  //     path: "/cart",
  //     element: <Cart />
  //   },
  //   {
  //     path: "/login",
  //     element: <Login /> ,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //     ],

  //   },
  //   {
  //     path: "/register",
  //     element: <Register />
  //   },
  // ]);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/cart" element={<Cart />} />
          <Route  path="/products" element={<Product />} />
          <Route  path="/products/:category" element={<ProductList />} />
          
          <Route  path="/login" element={<Login />} />
          
          <Route  path="/register" element={<Register />} />
        </Routes>
      </Router>

      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
