import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useOrder = () => {
    const { token, user, isLoading } = useAuth();
    const [orders, setOrders] = useState([]);
    const [isLoadingOrder, setIsLoadingOrder] = useState(true);

    useEffect(() => {

        if (!isLoading && token) {
            //console.log(isLoading, token);
            fetch(`https://mobile-hut.onrender.com/myOrder?email=${user.email}`, {
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    //data holds all orders of a user [array]
                    let newArr = [];
                    for (const iterator of data) {
                        //iterator holds single order of a user [obj]
                        const ids = [iterator.product];

                        axios.post('https://mobile-hut.onrender.com/service/byId', ids)
                            .then(res => {

                                iterator.items = res.data;
                                console.log(res);
                            })
                        newArr.push(iterator)
                    }

                    setOrders(newArr);
                    setIsLoadingOrder(false);
                });
        }
    }, [user.email, token, isLoading])

    return { isLoadingOrder, orders, setOrders }
}
export default useOrder;