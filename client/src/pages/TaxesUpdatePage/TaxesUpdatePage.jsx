import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import apiTaxes from "../../entities/apiTaxes";

export default function TaxesUpdatePage({ user }) {
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
  const [inputError, setInputError] = useState("");

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

    if (value.length <= 4) {
      setTariff((prevState) => ({
        ...prevState,
        [name]: value,
      }));
      setInputError("");
    } else {
      setInputError("Должно быть не более 4 символов");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputError && inputError !== "Должно быть не более 4 символов") {
      return;
    }

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
      {user.roleId === 1 ? (
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
              backgroundColor: "rgba(129,253,141,0.8)",
              borderRadius: "8px",
              color: "white",
              width: "400px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
            }}
          >
            <h1 className="title has-text-centered">Обновить тариф</h1>
            {successMessage && (
              <div style={{ color: "green" }}>{successMessage}</div>
            )}
            {inputError && <div style={{ color: "red" }}>{inputError}</div>}

            <form onSubmit={handleSubmit} className="box">
              {["Adult", "Child", "weekendAdult", "weekendChild"].map(
                (fieldName) => (
                  <div className="field" key={fieldName}>
                    <label className="label">
                      Для{" "}
                      {fieldName === "Adult"
                        ? "взрослых"
                        : fieldName === "Child"
                        ? "детей"
                        : fieldName === "weekendAdult"
                        ? "взрослых (ВЫХОДНЫЕ)"
                        : "детей (ВЫХОДНЫЕ)"}
                      :
                    </label>
                    <div className="control">
                      <input
                        maxLength="4"
                        className="input"
                        type="number"
                        name={fieldName}
                        value={tariff[fieldName]}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                )
              )}

              <button type="submit" className="button is-primary is-fullwidth">
                Сохранить изменения
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundImage: `url('https://images.wallpaperscraft.com/image/single/beaver_tail_waving_76276_1280x720.jpg')`,
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
            style={{
              fontSize: "15rem",
              marginBottom: "20px",
              color: "orange",
              marginRight: "20%",
            }}
          >
            404
          </h1>
          <h1
            className="title"
            style={{
              fontSize: "3rem",
              marginBottom: "20px",
              color: "orange",
              marginRight: "20%",
            }}
          >
            Здесь только Бобэр, курва!
          </h1>
          <p
            className="subtitle"
            style={{
              fontSize: "1.5rem",
              marginBottom: "20px",
              color: "orange",
              marginRight: "20%",
            }}
          >
            У вас нет прав доступа к этой странице.
          </p>
          <NavLink
            to="/"
            className="button is-warning"
            style={{ marginTop: "20px", marginRight: "20%" }}
          >
            На главную
          </NavLink>
        </div>
      )}
    </>
  );
}
