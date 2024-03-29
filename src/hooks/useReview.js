import { useEffect, useState } from "react";

const useReview = () => {
    const [review, setReview] = useState([]);
    const [isLoadingReview, setIsLoadingReview] = useState(true);
    //''
    useEffect(() => {
        fetch('https://mobile-hut.onrender.com/reviews')
            .then(resp => resp.json())
            .then(data => {
                setReview(data);
                setIsLoadingReview(false);
            })
    }, [])

    return { review, isLoadingReview, setReview };
}
export default useReview;
