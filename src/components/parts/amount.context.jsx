import { createContext } from "react";

const moneySum = createContext({
    amount: "",
    setAmount: (sum) => {}
})

export default moneySum