
import Signup from "./Components/signup/signup";
import Login from "./Components/login/login";
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () =>{
  return (
    <>
        <h2>E-Commerce App</h2>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}
export default App;



//
{/* <h2 style={{textAlign:"center"}}>E-Commerce App</h2>
      <hr/>
      <div style={{display:"flex", justifyContent:"space-evenly"}}>
      <div>
      <h3>Signup Form</h3>
      <Signup/>
      </div>
      <div>
      <h3>Login Form</h3>
      <Login/>
      </div>
      </div>   */}