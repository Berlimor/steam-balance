import React from "react";
import { useState } from "react";

import CardHolder from "./parts/cards-holder";
import InputForm from "./parts/input-form";
import moneySum from "./parts/amount.context";
import PayInfo from "./parts/payment-info";

export default function Content() {
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <moneySum.Provider value={{ amount, setAmount }}>
      <form className="main-container" onSubmit={handleSubmit}>
        <InputForm />
        <div className="flex-col">
          <CardHolder />
          <PayInfo />
        </div>
      </form>
    </moneySum.Provider>
  );
}
