import React from "react";
import { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";

export default function InputForm() {
  const [login, setLogin] = useState("");
  const [amount, setAmount] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleLoginChange = (val) => {
    setLogin(val.target.value);
  };
  const handleAmountChange = (val) => {
    setAmount(val.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleRadioClick100 = () => {
    setAmount("100");
  };
  const handleRadioClick200 = () => {
    setAmount("200");
  };
  const handleRadioClick500 = () => {
    setAmount("500");
  };
  const handleRadioClick1000 = () => {
    setAmount("1000");
  };

  const handleCheckChange = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <form className="form-holder" onSubmit={handleSubmit}>
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
        placeholder="500₽"
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
            onChange={handleRadioClick100}
          />
          100₽
        </span>

        <span className={amount === "200" ? "active" : ""}>
          <input
            name="fixed-amount"
            type="radio"
            value="200"
            onChange={handleRadioClick200}
          />
          200₽
        </span>

        <span className={amount === "500" ? "active" : ""}>
          <input
            name="fixed-amount"
            type="radio"
            value="500"
            onChange={handleRadioClick500}
          />
          500₽
        </span>

        <span className={amount === "1000" ? "active" : ""}>
          <input
            name="fixed-amount"
            type="radio"
            value="1000"
            onChange={handleRadioClick1000}
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
    </form>
  );
}
