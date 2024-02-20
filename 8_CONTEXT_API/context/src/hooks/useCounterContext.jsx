import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCounterContext = () => {
    const context = useContext(CounterContext)

    if (!context) {
        console.log("ERRO")
        return
    }

    console.log(context)

    return context
}