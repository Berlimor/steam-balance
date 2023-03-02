import React from "react";
import { useState } from "react";

import Card from "./card-template";

import visaMaster from "../../images/visa-mastercard-mir.png";
import qiwi from "../../images/qiwi.png";
import ioMoney from "../../images/iomoney.svg";

export default function CardHolder() {
  const [value, setValue] = useState("bank-card");

  const handleMethodClick = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="card-holder">
      <Card
        url={visaMaster}
        val="bank-card"
        value={value}
        onClick={handleMethodClick}
      />

      <Card url={qiwi} val="qiwi" value={value} onClick={handleMethodClick} />

      <Card
        url={ioMoney}
        val="io-money"
        value={value}
        onClick={handleMethodClick}
      />
    </div>
  );
}
