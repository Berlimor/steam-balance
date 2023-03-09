import React from "react";
import { useContext } from "react";

import moneySum from "./amount.context";

export default function PayInfo() {
    const { amount } = useContext(moneySum)

    return (
        <div className="form-list">
            <section>
                <div className="list-txt">Заплатите:</div>
                <span className="list-line"></span>
                <div className="list-sum">{amount ? amount : "0"}₽</div>
            </section>
            <section>
                <div className="list-txt">Получите на баланс Steam:</div>
                <span className="list-line"></span>
                <div className="list-sum">~ {amount ? (amount * 0.75) : "0"}₽</div>
            </section>
            <section>
                <div className="list-txt">Процент сайта (6%):</div>
                <span className="list-line"></span>
                <div className="list-sum"> {amount ? (amount * 0.06) : "0"}₽</div>
            </section>
            <section>
                <div className="list-txt">Издержки банка:</div>
                <span className="list-line"></span>
                <div className="list-sum"> {amount ? (amount) : "0"}₽</div>
            </section>
        </div>
    )
}