import React, { useEffect, useState } from "react";
import apiTaxes from "../../entities/apiTaxes";
import { Link } from "react-router-dom";

export default function TariffsPage() {
  const [taxes, setTariffs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const data = await apiTaxes.getAllTaxes();
        setTariffs(data);
      } catch (error) {
        console.error(error);
        setError("Ошибка при загрузке тарифов");
      } finally {
        setLoading(false);
      }
    };

    fetchTariffs();
  }, []);

  if (loading) return <div style={{ color: "white" }}>Загрузка...</div>;
  if (error) return <div style={{ color: "white" }}>{error}</div>;

  return (
    <div
      style={{
        backgroundImage: `url('https://i.pinimg.com/originals/24/11/31/241131b8c99d0cd9e40cfa89ae9a0f19.jpg')`,
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
          backgroundColor: "rgba(44, 44, 44, 0.8)",
          borderRadius: "8px",
          padding: "20px",
          marginBottom: "20px",
          border: "1px solid #444",
          textAlign: "center",
          marginTop: 25,
          marginRight: 50,
        }}
      >
        <h1 className="title" style={{ color: "white", fontSize: "2.5rem" }}>
          Тарифы
        </h1>
      </div>

      <div
        className="columns is-multiline"
        style={{ justifyContent: "center" }}
      >
        {taxes.map((tariff) => (
          <div key={tariff.id} className="column is-half">
            <div
              className="card"
              style={{
                backgroundColor: "rgba(44, 44, 44, 0.8)",
                color: "white",
                border: "1px solid #444",
                borderRadius: "8px",
                padding: "20px",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: 50,
                marginTop: 25,
              }}
            >
              <table
                style={{
                  width: "100%",
                  textAlign: "center",
                  tableLayout: "fixed",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        width: "50%",
                        wordWrap: "break-word",
                        color: "white",
                        fontSize: "1.2rem",
                      }}
                    >
                      Для взрослых (будни):
                    </td>
                    <td
                      style={{
                        width: "50%",
                        wordWrap: "break-word",
                        color: "white",
                        fontSize: "1.2rem",
                      }}
                    >
                      {tariff.Adult} р
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        width: "50%",
                        wordWrap: "break-word",
                        color: "white",
                        fontSize: "1.2rem",
                      }}
                    >
                      Для детей (будни):
                    </td>
                    <td
                      style={{
                        width: "50%",
                        wordWrap: "break-word",
                        color: "white",
                        fontSize: "1.2rem",
                      }}
                    >
                      {tariff.Child} р
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        width: "50%",
                        wordWrap: "break-word",
                        color: "white",
                        fontSize: "1.2rem",
                      }}
                    >
                      Для взрослых (выходные):
                    </td>
                    <td
                      style={{
                        width: "50%",
                        wordWrap: "break-word",
                        color: "white",
                        fontSize: "1.2rem",
                      }}
                    >
                      {tariff.weekendAdult} р
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        width: "50%",
                        wordWrap: "break-word",
                        color: "white",
                        fontSize: "1.2rem",
                      }}
                    >
                      Для детей (выходные):
                    </td>
                    <td
                      style={{
                        width: "50%",
                        wordWrap: "break-word",
                        color: "white",
                        fontSize: "1.2rem",
                      }}
                    >
                      {tariff.weekendChild} р
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <Link to="/" className="button is-warning" style={{ marginRight: 50 }}>
        На главную
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "20px",
        }}
      >
        <div
          style={{
            flex: "1",
            marginRight: "10%",
            backgroundColor: "rgba(44, 44, 44, 0.8)",
            borderRadius: "8px",
            padding: "20px",
            color: "white",
          }}
        >
          <h3
            className="title is-6"
            style={{ fontSize: "1.3rem", color: "white" }}
          >
            Льготы:
          </h3>
          <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
            <li>— Илье - вход бесплатно (навсегда)</li>
            <li>— Участники, ветераны боевых действий - бесплатно</li>
            <li>— Инвалиды 1, 2 группы - бесплатно</li>
            <li>— Инвалиды 3 группы - 50% скидка</li>
            <li>— Многодетные семьи и пенсионеры - 20% скидка</li>
          </ul>
          <p>Все льготы действуют при предоставлении документа на кассе.</p>
        </div>
        
        <div
          style={{
            flex: "1",
            marginLeft: "10%",
            backgroundColor: "rgba(44, 44, 44, 0.8)",
            borderRadius: "8px",
            padding: "20px",
            color: "white",
          }}
        >
          <h2 className="title is-5" style={{ color: "white" }}>
            Информация о билетах
          </h2>

          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li>Детский билет (от 3 до 10 лет)</li>
            <li>До 3-х лет - бесплатно</li>
            <li>Билет действует весь день</li>
          </ul>

          <p style={{ marginTop: "15px", fontWeight: "bold" }}>Важно:</p>

          <p style={{ marginTop: "15px" }}>
            Если у вас есть вопросы или требуется помощь, не стесняйтесь
            обращаться к нашим сотрудникам.
          </p>
        </div>
      </div>
    </div>
  );
}
