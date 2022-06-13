import React from "react";
import style from "../Home/Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signinLinkstyle = {
    color: "#014a9c",
    fontweight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };

  const navigate = useNavigate();

  function startRegister() {
    navigate("/register");
    console.log("Button has been Clicked...");
  }

  return (
    <div className={style.cardwarpper}>
      <Card title="Welcome to webrtcGo!" icon="logo">
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora
          eos, laborum quidem aspernatur doloribus earum quos dolores
          dignissimos
        </p>

        <div>
          <Button onClick={startRegister} text="Get your username" />
        </div>

        <div className={style.signinwrapper}>
          <span className={style.hasinvite}>Have an invite text?</span>

          <Link style={signinLinkstyle} to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
