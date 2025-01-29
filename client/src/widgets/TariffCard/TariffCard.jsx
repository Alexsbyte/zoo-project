import React from "react";

export default function TariffCard({ tariff }) {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="title is-4">{tariff.title}</h2>
        <p className="subtitle is-6">{tariff.price}</p>
        <p>{tariff.description}</p>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item">
          Подписаться
        </a>
      </footer>
    </div>
  );
}
