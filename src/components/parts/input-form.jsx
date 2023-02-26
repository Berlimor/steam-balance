import React from "react";
import { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

export default function InputForm() {
  const [login, setLogin] = useState("");
  const [amount, setAmount] = useState("");
  const [isActive, setIsActive] = useState(0);

  const handleLoginChange = (val) => {
    setLogin(val.target.value);
  };
  const handleAmountChange = (val) => {
    setAmount(val.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <span className={isActive === 1 ? "active" : ""}>
          <input id="rad-100" name="fixed-amount" type="radio" value="100" />
          100₽
        </span>

        <span className={isActive === 2 ? "active" : ""}>
          <input id="rad-200" name="fixed-amount" type="radio" value="200" />
          200₽
        </span>

        <span className={isActive === 3 ? "active" : ""}>
          <input id="rad-500" name="fixed-amount" type="radio" value="500" />
          500₽
        </span>

        <span className={isActive === 4 ? "active" : ""}>
          <input id="rad-1000" name="fixed-amount" type="radio" value="1000" />
          1000₽
        </span>
      </div>

      {/* ЧЕКБОКС СОГЛАСИЯ */}

      <div className="form-agree">
        <input id="agree" type="checkbox" name="confirm" />
        <label htmlFor="agree">Я указал логин аккаунта, а не никнейм</label>
      </div>

      {/* КНОПКА ПОПОЛНЕНИЯ */}

      <button className="form-button">
        Пополнить баланс <AiOutlineDoubleRight id="form-button-icon" />
      </button>
    </form>
  );
}
