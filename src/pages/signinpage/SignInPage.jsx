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
              <input
                type="text"
                id="password"
                placeholder="Enter a 4-pin password"
              />
            </div>
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default SignInPage;
