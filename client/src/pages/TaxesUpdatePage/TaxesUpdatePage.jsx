import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import apiTaxes from "../../entities/apiTaxes";

export default function TaxesUpdatePage({user}) {
  const navigate = useNavigate();

  const [tariff, setTariff] = useState({
    Adult: "",
    Child: "",
    weekendAdult: "",
    weekendChild: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchTariff = async () => {
      try {
        const data = await apiTaxes.getAllTaxes();
        if (data.length > 0) {
          setTariff(data[0]);
        } else {
          setError("Тариф не найден");
        }
      } catch (error) {
        console.error(error);
        setError("Ошибка при загрузке тарифа");
      } finally {
        setLoading(false);
      }
    };

    fetchTariff();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTariff((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await apiTaxes.updateTax(tariff);
      setSuccessMessage("Тариф успешно обновлен!");
      navigate("/taxes");
    } catch (error) {
      console.error(error);
      setError("Ошибка при обновлении тарифа");
    }
  };

  if (loading) return <div style={{ color: "white" }}>Загрузка...</div>;
  if (error) return <div style={{ color: "white" }}>{error}</div>;

  return (
    <>
      {(user.roleId === 1) ? (
        <div
          style={{
            backgroundImage: `url('https://a.d-cd.net/d95c9a5s-1920.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              padding: "20px",
              backgroundColor: "rgba(44, 44, 44, 0.8)",
              borderRadius: "8px",
              color: "white",
              width: "400px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <h1 className="title has-text-centered">Обновить тариф</h1>
            {successMessage && (
              <div style={{ color: "green" }}>{successMessage}</div>
            )}

            <form onSubmit={handleSubmit} className="box">
              <div className="field">
                <label className="label">Для взрослых (будни):</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    name="Adult"
                    value={tariff.Adult}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Для детей (будни):</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    name="Child"
                    value={tariff.Child}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Для взрослых (выходные):</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    name="weekendAdult"
                    value={tariff.weekendAdult}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Для детей (выходные):</label>
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    name="weekendChild"
                    value={tariff.weekendChild}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="button is-primary is-fullwidth">
                Сохранить изменения
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/zoo-concept-illustration_114360-6577.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            className="title"
            style={{ fontSize: "3rem", margin: "20px 0", color: "orange" }}
          >
            Доступ запрещен!
          </h1>
          <p
            className="subtitle"
            style={{ fontSize: "1.5rem", margin: "20px 0" }}
          >
            У вас нет прав доступа к этой странице.
          </p>
          <NavLink
            to="/"
            className="button is-warning"
            style={{ marginTop: "20px" }}
          >
            На главную
          </NavLink>
        </div>
      )}
    </>
  );
}
