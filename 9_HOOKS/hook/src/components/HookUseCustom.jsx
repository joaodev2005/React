import { useState } from "react"
import { usePrevious } from "../hooks/usePrevious"

const HookUseCustom = () => {

    const [number, setNumber] = useState(0)
    const previousValue = usePrevious(number)

    return (
        <div>
            HookUseCustom
        </div>
    )
}

export default HookUseCustom