import { useState, useEffect } from 'react';

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) {
            setData(null);
            setLoading(false);
            setError(null);
            return;
        }
        let isCurrent = true;
        setLoading(true);
        setError(null);

        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })


        return () => {
            isCurrent = false;
        };
    }, [url]);
}