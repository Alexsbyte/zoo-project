import React from "react";
import "bulma/css/bulma.css";

export default function Footer() {
  return (
    <footer
      className="footer has-background-dark has-text-centered"
      style={{ padding: "20px 0" }}
    >
      <div className="content">
        <p className="has-text-light">
          ©2024 Всеправа защищены. Условия использования | Контакты
        </p>
      </div>
    </footer>
  );
}
