import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../shared/lib/axiosInstance"; 

export default function TariffsPage() {
  const [tariffs, setTariffs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const response = await axiosInstance.get("/api/taxes");
        console.log("Ответ API:", response.data); 
        setTariffs(response.data);
      } catch (error) {
        console.error(error);
        setError("Ошибка при загрузке тарифов");
      } finally {
        setLoading(false);
      }
    };

    fetchTariffs();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div
      style={{
        backgroundImage: `url('https://aws-tiqets-cdn.imgix.net/images/content/3dd2e3de44474186a1e480190e53a232.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=70&s=e3417bb6c35d91c841bf7a92cdb215e2')`,
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
          backgroundColor: "#2c2c2c",
          borderRadius: "8px",
          padding: "10px 20px",
          marginBottom: "20px",
          border: "1px solid #444",
        }}
      >
        <h1 className="title has-text-centered" style={{ color: "white" }}>
          Тарифы
        </h1>
      </div>

      <div className="columns is-multiline">
        {Array.isArray(tariffs) && tariffs.length > 0 ? (
          tariffs.map((tariff) => (
            <div key={tariff.id} className="column is-half">
              <div
                className="card"
                style={{
                  backgroundColor: "#2c2c2c",
                  color: "white",
                  border: "1px solid #444",
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <div className="card-content">
                  <h2 className="title is-4" style={{ color: "white" }}>
                  </h2>
                  <p className="subtitle is-6" style={{ color: "white" }}>
                    Для взрослых (будни):{" "}
                    {tariff.dataValues?.Adult || "недоступно"} р
                  </p>
                  <p className="subtitle is-6" style={{ color: "white" }}>
                    Для детей (будни):{" "}
                    {tariff.dataValues?.Child || "недоступно"} р
                  </p>
                  <p className="subtitle is-6" style={{ color: "white" }}>
                    Для взрослых (выходные):{" "}
                    {tariff.dataValues?.weekendAdult || "недоступно"} р
                  </p>
                  <p className="subtitle is-6" style={{ color: "white" }}>
                    Для детей (выходные):{" "}
                    {tariff.dataValues?.weekendChild || "недоступно"} р
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Нет доступных тарифов.</div>
        )}
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "rgba(44, 44, 44, 0.8)",
          borderRadius: "8px",
          color: "white",
        }}
      >
        <h2 className="title is-5" style={{ color: "white" }}>
          Информация о билетах
        </h2>
        <p style={{ color: "white" }}>детский билет (от 3 до 10 лет)</p>
        <p style={{ color: "white" }}>до 3-х лет - бесплатно</p>
        <p style={{ color: "white" }}>При покупке на сайте — скидка 10%</p>
        <p style={{ color: "white" }}>Билет действует весь день</p>

        <h3 className="title is-6" style={{ color: "white" }}>
          Льготы:
        </h3>
        <ul>
          <li style={{ color: "white" }}>— Инвалиды 1, 2 группы - бесплатно</li>
          <li style={{ color: "white" }}>— Инвалиды 3 группы - 50% скидка</li>
          <li style={{ color: "white" }}>
            — Участники, ветераны боевых действий - бесплатно
          </li>
          <li style={{ color: "white" }}>
            — Многодетные семьи и пенсионеры - 20% скидка
          </li>
        </ul>
        <p style={{ color: "white" }}>
          Все льготы действуют при предоставлении документа на кассе.
        </p>
      </div>
    </div>
  );
}
