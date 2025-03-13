import React from "react";

function Team() {
  return (
    <div>
      <div className="container">
        <div className="row p-3 mt-5 border-top">
          <h1 className="text-center ">People</h1>
        </div>

        <div
          className="row p-3 text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <div className="col-6 p-3 text-center">
            <img
              src="Images/nithinKamath.jpg"
              style={{ borderRadius: "100%", width: "50%" }}
            />
            <h4 className="mt-5">Nithin Kamath</h4>
            <h6>Founder, CEO</h6>
          </div>
          <div className="col-6 p-3">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
          </div>
        </div>
        <div
          className="row p-3 text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.2em" }}
        >
          <div className="col-6 p-3 text-center">
            <img
              src="Images/nitkhilKamath.jpg"
              style={{ borderRadius: "100%", width: "50%" }}
            />
            <h4 className="mt-5">Nithin Kamath</h4>
            <h6>Co-Founder</h6>
          </div>
          <div className="col-6 p-3">
            <p>
              Nikhil Kamath co-founded Zerodha in 2010 alongside his brother,
              Nithin Kamath, with the vision of simplifying stock trading in
              India. With a strong background in trading since his teenage
              years, he played a crucial role in shaping Zerodha’s risk
              management and investment strategies, making it India’s largest
              brokerage firm.
            </p>
            <p>
              He is also the co-founder of True Beacon, an asset management firm
              focused on ultra-high-net-worth investors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
