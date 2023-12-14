import logo from './logo.svg';
import './Reg.css';
import { useNavigate } from "react-router-dom";
function Reg() {
  const navigate = useNavigate();
  return (
    <body>
  <div class="container">
    <div class="form">
      <div class="btn">
        <button class="loginBtn">SIGN UP</button>
      </div>
      <form class="signUp" action="" method="get">
      <div class="formGroup">
          <input type="text" placeholder="UserName" name="uname" required></input>
        </div>
       <div class="formGroup">
          <input type="email" placeholder="Email ID" name="email" required></input>
        </div>
        <div class="formGroup">
          <input type="password" id="password" placeholder="Password" required></input>
        </div>
        <div class="formGroup">
          <input type="password" id="password" placeholder="Confirm Password" required></input>
        </div><br></br>
        <center><div class="pass">Forgot Password?</div></center>
        <div class="checkBox">
          <input type="checkbox" name="checkbox" id="checkbox"></input>
          <span class="text">I agree with term & conditions</span>
        </div>
        <div class="formGroup">
          <button type="button" class="btn2" onClick={()=>navigate("/App")}>SIGN UP</button>
        </div>
 
      </form>
        
      
      
    </div>
  </div>
 
  <script src="jQuery.js"></script>
</body>
  );
}

export default Reg;
