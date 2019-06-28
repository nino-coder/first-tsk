import React, {Component} from 'react';
import './Style.css';

class Login extends Component{
render(){
    return(
        <div className="main">
            <div className="main-first">
                       <h1>Welcome back.</h1>
                    <div className="secondWrapper">
                        <div className="inputs">
                            <input type="text" placeholder="Your Email"/>
                            <br/>
                            <br/>
                            <input type="text" placeholder="Password"/>
                        </div>
                        <div className="check">
                            <div className="login" >
                                <div className="check1">
                                    <input type="checkbox" />
                                    <p>Keep me logged in</p>
                                </div>
                                <a href="url">Forgot password?</a>
                            </div>
                        <button>Sign in</button>
                        </div>
                        </div>
            </div>
             
            <div className="main-second">
              <img src={require("./Bitmap.jpg")}/>
            </div>
        </div>
    );
}
}

export default Login;