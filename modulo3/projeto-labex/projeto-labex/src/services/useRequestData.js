import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (url, headers) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false) 
    const [error, setError] = useState("")

    useEffect(() => {
        setIsLoading(true)
        axios.get(url, headers)
        .then((res) => {
            setIsLoading(false)
            setData(res.data)
        })
        .catch((err) => {
            setIsLoading(false)
            setError(err)
        })
    }, [url])

    return [data, isLoading, error]
}