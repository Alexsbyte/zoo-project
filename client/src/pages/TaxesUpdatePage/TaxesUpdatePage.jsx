import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiTaxes from "../../entities/apiTaxes";

export default function TaxesUpdatePage() {
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
    <div
      style={{
        padding: "20px",
        backgroundColor: "rgba(44, 44, 44, 0.8)",
        borderRadius: "8px",
        color: "white",
      }}
    >
      <h1 className="title has-text-centered">Обновить тариф</h1>
      {successMessage && <div style={{ color: "green" }}>{successMessage}</div>}

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
  );
}
