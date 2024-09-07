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
            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="" />
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default SignInPage;
