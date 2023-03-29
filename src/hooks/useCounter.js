import { useState } from 'react'

export const useCounter = (intialValue = 100) => {
    const [count, setCount] = useState(intialValue);

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count - 1)
    }

    return [count, inc, dec]
}
