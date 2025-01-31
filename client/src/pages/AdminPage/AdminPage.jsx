import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function AdminPage({ user }) {
  return (
    <>
      {user.roleId === 1 ? (
        <div
          className="hero is-flex is-justify-content-center is-align-items-center"
          style={{
            backgroundImage: `url('https://aws-tiqets-cdn.imgix.net/images/content/3dd2e3de44474186a1e480190e53a232.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=70&s=e3417bb6c35d91c841bf7a92cdb215e2)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          <div
            className="box"
            style={{
              backgroundColor: "rgba(44, 44, 44, 0.8)",
              padding: "70px",
              borderRadius: "30px",
            }}
          >
            <div className="columns is-centered">
              <div className="column ">
                <Link
                  to="/edit/animals"
                  className="button is-warning is-large is-fullwidth is-size-4 has-text-centered has-text-white"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Редактировать животных
                </Link>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column ">
                <Link
                  to="/updateTariffs"
                  className="button is-primary is-large is-fullwidth is-size-4 has-text-centered has-text-white"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Редактировать тарифы
                </Link>
              </div>
            </div>
          </div>
             <Link to="/" className="button is-warning" style={{ marginRight: "1%" }}>
                  На главную
                </Link>
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
