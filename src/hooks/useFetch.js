import { useEffect, useState } from "react"

export const useFecth = (url, method = 'get') => {
    const [response, setResponse] = useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        fetch(url, { method })
            .then(resp => resp.json())
            .then(json => setResponse({
                data: json,
                loading: false
            }))
    }, [url, method])

    return response
}

// fetch("http://files.cod3r.com.br/curso-react/estados.json")
//   .then((res) => res.json())
//   .then((json) => console.log(json));
