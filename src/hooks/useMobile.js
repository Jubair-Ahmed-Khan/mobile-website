import { useEffect, useState } from "react";

const useMobile = () => {
    const [mobile, setMobile] = useState([]);
    const [isLoadingMobile, setIsLoadingMobile] = useState(true);

    useEffect(() => {
        fetch('https://mobile-hut.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setMobile(data);
                setIsLoadingMobile(false);
            })
    }, [])

    return { mobile, isLoadingMobile, setMobile };
}
export default useMobile;