import React from "react";
import TariffCard from "../../widgets/TariffCard/TariffCard";

export default function TariffsPage() {
  const mockData = [
    {
      id: 1,
      title: "Basic Plan",
      price: "1000р/month",
      description: "Access to basic features",
    },
    {
      id: 2,
      title: "Standard Plan",
      price: "2000р/month",
      description: "Access to standard features",
    },
    {
      id: 3,
      title: "Premium Plan",
      price: "3000р/month",
      description: "Access to all features",
    },
    {
      id: 4,
      title: "Enterprise Plan",
      price: "5000р/month",
      description: "Custom solutions for businesses",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="title has-text-centered">Тарифы</h1>
      <div className="columns is-multiline">
        {mockData.map((tariff) => (
          <div key={tariff.id} className="column is-half">
            <TariffCard tariff={tariff} />
          </div>
        ))}
      </div>
    </div>
  );
}
