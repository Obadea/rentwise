import React from "react";
import Logo from "../../components/Logo";

function SignInPage() {
  return (
    <div className="flex flex-col lg:flex-row h-screen min-h-[500px]  ">
      <div className="flex-1 my-4 mx-auto">
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
      <div
        style={{
          backgroundImage: `url(${require("../../../src/assets/swimpool.png")})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="hidden lg:block flex-1"
      >
        <div>
          <h4>Something to motivate</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Gravida id ut praesent nunc.
            Sed aliquam mi at urna. Condimentum mi lorem aliquam mattis.
            Consequat est phasellus velit nisl justo dui. Faucibus dictum
            habitasse sed vel at nisl non. Nisi placerat purus sed varius
            euismod. Risus etiam purus donec neque. Non id mi maecenas quam
            convallis ut varius feugiat iaculis. Quis porttitor urna malesuada
            mattis in quam. Quam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
