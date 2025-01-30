import React from "react";
import "bulma/css/bulma.css";

export default function MainPage() {
  const isLightTheme = true;

  return (
    <div
      style={{
        backgroundImage: `url('https://sun9-18.userapi.com/impf/N5eeYWnxlW_Wti6x6AZZ2dSMHbpNzRUrCDGwUA/crQ5_1DZOyw.jpg?size=1920x768&quality=95&crop=17,0,1885,753&sign=dd727d4689bfc3bfa1643a616f20cd47&type=cover_group')`,
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
