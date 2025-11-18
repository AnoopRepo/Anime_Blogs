import React from "react";
import "./FormScene.css";
import bgImg from "../assets/mast.jpg";            // background image
import fgSparkles from "../assets/Goku.png"; // transparent sparkles foreground

const FormScene = () => {
  return (
    <div className="scene">
      {/* Background */}
      <div className="bg" style={{ backgroundImage: `url(${bgImg})` }} />

      {/* Optional dark overlay */}
      <div className="overlay" />

      {/* Foreground Sparkles */}
      <img src={fgSparkles} className="foreground-sparkles" alt="" />

      {/* Floating Form */}
      <div className="card-wrap">
        <form className="card">
          <h2>Create Account</h2>

          <label>
            <span className="lbl">Email</span>
            <input type="email" required placeholder="you@example.com" />
          </label>

          <label>
            <span className="lbl">Password</span>
            <input type="password" required placeholder="••••••••" />
          </label>

          <button className="btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default FormScene;
