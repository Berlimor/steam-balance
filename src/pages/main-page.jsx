import React from "react";
import Header from "../components/header";
import Content from "../components/content";

import "./main-style.css";

export default function MainPage() {
  return (
    <>
      <Header />
      <h1>Пополнить баланс Steam</h1>
      <Content />
    </>
  );
}
