import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-12 col-md-6 p-3 p-md-5 d-flex justify-content-center">
          <img
            src="Images/largestBroker.svg"
            className="img-fluid"
            alt="Largest Broker"
          />
        </div>

        {/* Right Side - Content */}
        <div className="col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-5 text-center text-md-start">
          <h1 className="mb-3">Largest stock broker in India</h1>
          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          {/* List Items */}
          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Press Logos Image */}
          <img
            src="Images/pressLogos.png"
            className="img-fluid mt-4"
            style={{ width: "90%" }}
            alt="Press Logos"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
