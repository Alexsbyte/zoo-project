import React from "react";
import "bulma/css/bulma.css";
import apiAnimal from '../../entities/apiAnimal'
import { useEffect, useState } from 'react'
export default function MainPage(setToggle) {
 
  


  return (
    <div
      style={{
        backgroundImage: `url('https://sun9-18.userapi.com/impf/N5eeYWnxlW_Wti6x6AZZ2dSMHbpNzRUrCDGwUA/crQ5_1DZOyw.jpg?size=1920x768&quality=95&crop=17,0,1885,753&sign=dd727d4689bfc3bfa1643a616f20cd47&type=cover_group')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <h1 className="title" style={{ fontSize: "2rem", margin: "20px 0" }}>
        Добро пожаловать на наш сайт!
      </h1>
      <div style={{ margin: "20px 0" }}>
        <a
          href="/tariffs"
          className="button is-primary"
          style={{ margin: "10px" }}
        >
          Тарифы
        </a>
        <a onClick={()=> setToggle(prev=> !prev)}
          href="/animals"
          className="button is-info"
          style={{ margin: "10px" }}
        >
          Список животных
        </a>
      </div>
    </div>
  );
}
