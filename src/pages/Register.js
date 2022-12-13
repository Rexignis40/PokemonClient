import Header from "../components/Header.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser }  from "../api/registerUser.js";

function Register(){
    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");
    function AddNewUser(e){
        registerUser(pseudo, password);
    }
    return(
        <>
        <Header />
        
        <div>
            <h2>Login</h2>
            <form onSubmit={e => AddNewUser()}>
                <div>
                    <label>pseudo</label>
                    <input type="text" onChange={e => setPseudo(e.targert.pseudo)}/>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" onChange={e => setPassword(e.targert.password)}/>
                </div>
                {/* <div>
                    <label>confirm password</label>
                    <input type="password" onChange={e => setPassword(e.targert.password)}/>
                </div> */}
                <button onClick={e => registerUser(e)}>Register</button>
            </form>
        </div>
        <li><Link to="/login">login</Link></li>
        
        </>
    )
}

export default Register;
