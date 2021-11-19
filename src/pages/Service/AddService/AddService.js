import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://mobile-hut.herokuapp.com/addService', data)
            .then(res => {
                if (res?.data === 'already have this id') {
                    swal({
                        title: 'A entry is already inserted with this ID in the Database!',
                        icon: "error",
                        buttons: true,
                        dangerMode: true,
                    })
                }
                else if (res?.data?.insertedId) {
                    swal({
                        title: "The Service is successfully added",
                        icon: "success",
                        button: "Ok",
                    });
                    reset();
                }
            })
    };
    const [mobiles, setMobiles] = useState([]);
    const id = mobiles.length + 1;


    // load mobiles 

    useEffect(() => {
        fetch('https://mobile-hut.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setMobiles(data));
    }, [])
    return (

        <div>
            <div className="container my-5">
                <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center border border-1 shadow-lg">
                    <h2 className="text-primary my-5">Add a Package</h2>
                    <h5>Id: {id}</h5>
                    <input {...register("id")} className="mb-3 w-50" placeholder="Enter the above id here" />
                    <input {...register("name")} className="mb-3 w-50" placeholder="Enter Mobile Name" />
                    <input {...register("launch")} className="mb-3 w-50" placeholder="Enter Launching Date" />
                    <input {...register("display")} className="mb-3 w-50" placeholder="Enter Display Size" />
                    <input {...register("camera")} className="mb-3 w-50" placeholder="Enter Camera Megapixel" />
                    <input {...register("os")} className="mb-3 w-50" placeholder="Enter Operating System" />
                    <input {...register("ram")} className="mb-3 w-50" placeholder="Enter Ram Size" />
                    <input {...register("battery")} className="mb-3 w-50" placeholder="Enter Battery Info" />
                    <input {...register("img")} className="mb-3 w-50" placeholder="Enter Image URL" />
                    <input {...register("price")} className="mb-3 w-50" placeholder="Enter Mobile Price" />
                    <input type="submit" className="btn btn-success mb-5" />
                </form>
            </div>
        </div>
    );
};

export default AddService;