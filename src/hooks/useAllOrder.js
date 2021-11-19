import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";
const useAllOrder = () => {

    const { token, user, isLoading } = useAuth();
    const [allOrders, setAllOrders] = useState([]);
    const [isLoadingAllOrder, setIsLoadingAllOrder] = useState(true);

    useEffect(() => {
        if (!isLoading && token) {

            fetch(`http://localhost:5000/orders`, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    let newArr = [];
                    for (const iterator of data) {

                        const ids = [iterator.product];

                        axios.post('http://localhost:5000/service/byId', ids)
                            .then(res => {
                                iterator.items = res.data;
                            })
                        newArr.push(iterator)
                    }

                    setAllOrders(newArr);
                    setIsLoadingAllOrder(false);
                });
        }
    }, [user.email, token, isLoading])
    return { isLoadingAllOrder, allOrders, setAllOrders }
}
export default useAllOrder;