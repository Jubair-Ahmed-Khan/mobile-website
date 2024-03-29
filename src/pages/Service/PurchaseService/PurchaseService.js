import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const PurchaseService = () => {

    const { serviceId } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        data.product = serviceId;
        data.status = 'Pending';

        axios.post('https://mobile-hut.onrender.com/placeOrder', data)
            .then(res => {
                if (res.data.insertedId) {
                    //alert('Your Order is placed successfully. We will contact with you soon');
                    swal({
                        title: "Your Order is Placed. Check Dashboard/My-Order",
                        icon: "success",
                        button: "Ok",
                    });
                    reset();
                }
            })
    };
    //console.log(errors)
    const visibile = {
        visibility: 'visible'
    }
    const invisibile = {
        visibility: 'hidden'
    }
    return (
        <div className='mt-4 pt-5'>
            <div className='row m-0 g-0 justify-content-center my-4'>
                <div className=" col-10 s shadow-lg rounded-3 p-3 p-sm-4 header-bg ">
                    <h3 className="text-center text-primary pb-4 ">Billing Info</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingName" placeholder="Enter your name"
                                value={user.displayName} readOnly
                                {...register("name", { required: true })} />
                            <label htmlFor="floatingName">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput"
                                placeholder="name@example.com" value={user.email} readOnly
                                {...register("email", { required: true })} />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input type="telephone" className="form-control" id="floatingPhone"
                                placeholder="Enter Phone Number"
                                {...register("phone", { required: true })} />
                            <label htmlFor="floatingPhone">Phone</label>
                            <span style={errors.phone ? visibile : invisibile} className='text-danger ps-2' >* Enter a valid Contact number</span>
                        </div>
                        <div className="form-floating mb-2">
                            <input className="form-control" list="datalistOptions" id="detailsAddress"
                                placeholder="Enter Your Address" type="text"
                                {...register("address", { required: true })} />
                            <label htmlFor="detailsAddress">Area</label>
                            <span style={errors.address ? visibile : invisibile} className='text-danger ps-2' >* Enter your address</span>
                        </div>
                        <fieldset>
                            <legend>Payment Options</legend>
                            <p>
                                <label htmlFor="bkash" className='px-2'>
                                    <input type="radio" name="payment" value="bkash"
                                        id="bkash"
                                        {...register("payment", { required: true })} />
                                    <span className='ps-1' >bKash</span>
                                </label>

                                <label htmlFor="rocket" className='px-2'>
                                    <input type="radio" name="payment" value="rocket"
                                        id="rocket"
                                        {...register("payment", { required: true })} />
                                    <span className='ps-1' >Rocket</span>
                                </label>

                                <label htmlFor="nagad" className='px-2'>
                                    <input type="radio" name="payment" value="nagad"
                                        id="card"
                                        {...register("payment", { required: true })} />
                                    <span className='ps-1' >Nagad</span>
                                </label>

                                <label htmlFor="other" className='px-2'>
                                    <input type="radio" name="payment" value="other"
                                        id="other"
                                        {...register("payment", { required: true })} />
                                    <span className='ps-1' >Others</span>
                                </label>
                            </p>
                            <span style={errors.payment ? visibile : invisibile} className='text-danger ps-2' >* Chose a payment method</span>
                        </fieldset>
                        <div className="form-floating mb-2">
                            <input className="form-control" list="datalistOptions" id="transaction"
                                placeholder="Enter Your transaction id" type="text"
                                {...register("transaction", { required: true })} />
                            <label htmlFor="transaction">Transaction ID</label>
                            <span style={errors.transaction ? visibile : invisibile} className='text-danger ps-2' >* Enter transaction id </span>
                        </div>
                        <div className="form-floating mb-2">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                                    checked readOnly />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    I accept to the terms
                                </label>
                            </div>
                        </div>
                        <div className='text-center'>
                            <input className="btn btn-danger" type="submit" value='Confirm Order' />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default PurchaseService;