import React from "react";

function Hero() {
  return (
    <div className="containe p-5">
      <div className="row text-center">
        <img
          className="mb-5"
          src="Images/homeHero.png"
          alt="Hero Image"
          srcset=""
        />
        <h1 className="mt-5">Invest In Everything</h1>
        <p>
          Online platform to invest in stocks, devivatives, mutual funds, and
          more
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "30%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
