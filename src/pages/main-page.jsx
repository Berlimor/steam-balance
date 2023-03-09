import React from "react";
import Header from "../components/header";
import Content from "../components/content";

import "./main-style.css";
import Contacts from "../components/contacts";
import Footer from "../components/footer";

export default function MainPage() {
  return (
    <>
      <Contacts />
      <Header />
      <div id="after-header">
        <h1>Пополнить баланс Steam</h1>
        <Content />
      </div>
      <Footer />
    </>
  );
}
