
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import PrivateComponent from "./components/PrivateComponent";
import AdminNav from "./components/AdminNav";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateComponent";
import Product from "./components/Product";

const App = () =>{
  const auth = localStorage.getItem("user");
  

  return (
    <>
    <BrowserRouter>
 
      <NavBar/>
        {
          auth?<AdminNav/>:null
        }
      <Routes>
        <Route element={<PrivateComponent />}>
        <Route path="/product" element={<Product />} />
        
        <Route path="/add" element={<AddProduct />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
        </Route>
        <Route path="/contact" element={<Contact/>}></Route> 
        <Route path="/" element={<Home/>}></Route> 

        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>        

      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;



