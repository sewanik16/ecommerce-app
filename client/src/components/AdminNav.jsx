import React from "react";
import { Link, useNavigate} from "react-router-dom";

const AdminNav = () => {
  const auth = localStorage.getItem("user");
  console.log("auth data",auth)
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  }
React.useEffect(()=>{
if(auth)
navigate("/product")
},[])

  return (
    <div>
      <img
        alt="logo"
        className="logo"
        src="images/logo11.png"
      />
      {auth ? (
        <ul className="nav-ul">
        <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          <li>
            {" "}
            <Link onClick={logout} to="/signup">
              Logout ( {JSON.parse(auth).name} )
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            {" "}
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default AdminNav;
