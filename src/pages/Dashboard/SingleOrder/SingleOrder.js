
const SingleOrder = (props) => {

    console.log(props)
    const { _id, name, transaction, address, email, status } = props.data;
    const onSubmit = data => {
        props?.event(data, _id)
    }
    return (

        <div className="border shadow-lg mb-3 p-3">
            <div className="text-center">
                <img src={props?.data?.items?.[0]?.img} className="w-25 mb-5" alt="mobile-photo" />
            </div>
            <p>
                <span className="fw-bold">Order Id: </span><br />
                {_id}
            </p>
            <p>
                <span className="fw-bold">Model: </span><br />
                {props?.data?.items?.[0]?.name}
            </p>
            <p>
                <span className="fw-bold">Name: </span><br />
                {name}
            </p>
            <p>
                <span className="fw-bold">Email: </span><br />
                {email}
            </p>
            <p>
                <span className="fw-bold">Address: </span><br />
                {address}
            </p>
            <p>
                <span className="fw-bold">Transaction ID: </span><br />
                {transaction}
            </p>
            <h5 className="my-3">
                Status:
                <span className={status === 'Pending' ? 'text-danger' : 'text-success'}> {status}</span>
            </h5>
            <h5 className="my-3">
                {
                    props.from !== '/dashboard/my-order' &&

                    <button className="btn btn-success mt-3 me-2" onClick={() => { onSubmit({ status: 'Approved' }) }}>Approve</button>
                }
                <button className="btn btn-danger mt-3" onClick={() => { onSubmit({ status: 'Delete' }) }}>Delete</button>

            </h5>

        </div>
    );
};

export default SingleOrder;