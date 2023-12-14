import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <body>
  <div class="container">
    <div class="form">
      <div class="btn">
        <button class="loginBtn">LOG IN</button>
      </div>
      <form class="signUp" action="" method="get">
       <div class="formGroup">
          <input type="email" placeholder="Email ID" name="email" required></input>
        </div><br></br>
        <div class="formGroup">
          <input type="password" id="password" placeholder="Password" required></input>
        </div><br></br>
        <center><div class="pass">Forgot Password?</div></center>
        <div class="signup_link">
        Not a member?<a href="Reg.js">&nbsp;&nbsp;Signup</a>
      </div>
        <div class="formGroup">
          <button type="button" class="btn2">Login</button>
        </div>
      </form>
      </div>
  </div>
<script src="jQuery.js"></script>
</body>
  );
}
export default App;
