import Header from "../components/Header.js";
import { loginUser } from "../api/loginUser";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.js";

function Login(){
    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");
    function OnLogin(e){
        loginUser(pseudo, password);
    }
    return(
        <>
        <Header />
        <div>
        <div>
            <h1>Login</h1>
            <form onSubmit={e => OnLogin()}>
                <div>
                    <label>pseudo</label>
                    <input type="text" onChange={e => setPseudo(e.targert.pseudo)}/>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" onChange={e => setPassword(e.targert.password)}/>
                </div>
                <button onClick={e => loginUser(e)}>Login</button>
            </form>
        </div>
        <li><Link to="/register">register</Link></li>
        </div>
        <Footer />
        </>
    )
}

export default Login;


