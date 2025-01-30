import React from "react";
import "bulma/css/bulma.css";

export default function MainPage() {
  const isLightTheme = true;

  return (
    <div
      style={{
        backgroundImage: `url('https://cdn.culture.ru/images/32079095-7c67-5856-a6d3-13c3021dcbf7')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          border: `2px solid ${isLightTheme ? "black" : "white"}`,
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: "rgba(44, 44, 44, 0.8)",
          color: "white",
          textAlign: "center",
          marginBottom: "20px",
          marginTop: 20,
        }}
      >
        <h1
          className="title"
          style={{ color: "white", fontSize: "2rem", margin: 0 }}
        >
          Добро пожаловать на наш сайт!
        </h1>
      </div>
      <div style={{ margin: "20px 0" }}>
        <a
          href="/taxes"
          className={`button ${isLightTheme ? "is-primary" : "is-light"}`}
          style={{ margin: "10px" }}
        >
          Тарифы
        </a>
        <a
          href="/animals"
          className={`button ${isLightTheme ? "is-info" : "is-light"}`}
          style={{ margin: "10px" }}
        >
          Список животных
        </a>
      </div>
    </div>
  );
}
