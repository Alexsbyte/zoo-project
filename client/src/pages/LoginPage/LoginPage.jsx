import React from "react";
import LoginForm from "../../widgets/LoginForm/LoginForm";

export default function LoginPage({ setUser }) {
  return (
    <section
      className="hero is-fullheight has-background"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/hd/really-cute-animal-a0t0h08qmlbuwmj9.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-body is-flex is-justify-content-center is-align-items-center">
        <div
          className="box has-text-centered"
          style={{
            maxWidth: "400px",
            width: "100%",
            marginRight: "40%",
            backgroundColor: "rgba(177, 88, 0, 0.42)",
          }}
        >
          <h1
            className="title"
            aria-label="Форма входа"
            style={{ color: "rgb(202, 202, 202)" }}
          >
            Вход
          </h1>
          <LoginForm setUser={setUser} />
        </div>
      </div>
    </section>
  );
}
