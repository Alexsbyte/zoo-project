import React from "react";
import Nav from "../shared/ui/Nav";
import Footer from "../shared/ui/Footer";
import { Outlet } from "react-router-dom";

export default function Layout({user}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Nav user={user}/>
      <main style={{ flex: "1" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
