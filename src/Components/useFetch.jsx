import { useState } from "react";
import { useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if(!res.ok) throw new Error("failed")
                return res.json()
        })
        .then((data) => {
            setData(data)
            setLoading(false)
        })
        .catch((err) => {
            setError(err.message)
            setLoading(false)
        })
    }, [url])
    return { data, loading, error}
};