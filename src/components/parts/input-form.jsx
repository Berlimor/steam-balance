import React from "react";
import { useState, useContext } from "react";

import moneySum from "./amount.context";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function InputForm() {
  const [login, setLogin] = useState("");
  const [isActive, setIsActive] = useState(false);
  const { amount, setAmount } = useContext(moneySum)

  const handleLoginChange = (val) => {
    setLogin(val.target.value);
  };
  const handleAmountChange = (val) => {
    setAmount(val.target.value);
  };


  const handleRadioClick = e => {
    setAmount(e.target.value);
  };

  const handleCheckChange = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="form-holder">

      {/* ЛОГИН И СУММА ПОПОЛНЕНИЯ */}

      <input
        type="text"
        name="LOGIN"
        placeholder="Логин Вашего аккаунта"
        value={login}
        onChange={handleLoginChange}
        autoComplete="off"
        className="form-input"
      />
      <input
        type="text"
        name="CUR_AMOUNT"
        placeholder="Сумма пополнения"
        value={amount}
        onChange={handleAmountChange}
        autoComplete="off"
        className="form-input"
      />

      {/* ШАБЛОНЫ СУММЫ ПОПОЛНЕНИЯ */}

      <div className="form-radio">
        <span className={amount === "100" ? "active" : ""}>
          <input
            name="fixed-amount"
            type="radio"
            value="100"
            onChange={handleRadioClick}
          />
          100₽
        </span>

        <span className={amount === "200" ? "active" : ""}>
          <input
            name="fixed-amount"
            type="radio"
            value="200"
            onChange={handleRadioClick}
          />
          200₽
        </span>

        <span className={amount === "500" ? "active" : ""}>
          <input
            name="fixed-amount"
            type="radio"
            value="500"
            onChange={handleRadioClick}
          />
          500₽
        </span>

        <span className={amount === "1000" ? "active" : ""}>
          <input
            name="fixed-amount"
            type="radio"
            value="1000"
            onChange={handleRadioClick}
          />
          1000₽
        </span>
      </div>

      {/* ЧЕКБОКС СОГЛАСИЯ */}

      <div className={"form-agree " + (isActive ? "checked" : "")}>
        {/* <div className={"form-check" + (isActive ? "checked" : "")}> */}
          <input
            id="agree"
            type="checkbox"
            name="confirm"
            onChange={handleCheckChange}
          />
          {/* <FcCheckmark /> */}
        {/* </div> */}

        <label htmlFor="agree">Я указал логин аккаунта, а не никнейм</label>
      </div>

      {/* КНОПКА ПОПОЛНЕНИЯ */}

      <button className="form-button">
        Пополнить баланс <AiOutlineDoubleRight id="form-button-icon" />
      </button>
    </div>
  );
}
