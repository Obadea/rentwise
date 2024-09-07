import React from "react";
import Logo from "../../components/Logo";

function SignInPage() {
  return (
    <div>
      <div>
        <Logo />
        <div>
          <h2>Create an account</h2>
          <p>Enter your email and password </p>
        </div>
        <div>
          <form action="#">
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="text" id="password" placeholder="****" />
              <button>Forgot passsword?</button>
            </div>
            <div>
              <button>Create</button>
              <p>
                Dont have an account? <span>Create an account</span>
              </p>
            </div>
          </form>
          <p>or</p>
          <div>
            <h4>Sign up Using Google</h4>
            <h4>Sign up Using Facebook</h4>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default SignInPage;
