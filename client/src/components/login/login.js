import {useState} from "react";
import axios from "axios";

const Login = () => {
    const [login,setLogin] = useState({username:"", password:""})

    const handleLogin = () =>{
        axios({
            url:"http://localhost:3001/user/login",
            method:"POST",
            headers :{

            },
            data: {username: login.username, password: login.password}
        }).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <>
      <div>
        <form>
          <div>

            <div>
              <label for="username">Username : </label>
            </div>
            <div>
              <input type="text" id="username" onChange={(e)=>{setLogin({...login, username: e.target.value})}}/>
            </div>
            <div>
              <label for="password">Password : </label>
            </div>
            <div>
              <input type="password" id="password" onChange={(e)=>{setLogin({...login, password: e.target.value})}}/>
            </div>

          </div>
        </form>
        <button type="button" onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};
export default Login;
