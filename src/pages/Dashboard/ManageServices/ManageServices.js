import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router';
import swal from 'sweetalert';
import useMobile from '../../../hooks/useMobile';
import ServiceCard from '../../Service/ServiceCard/ServiceCard';

const ManageServices = () => {
    const { mobile, isLoadingMobile, setMobile } = useMobile();
    const loc = useLocation();
    function handleServiceDelete(id) {
        swal({
            title: "Are you sure to Delete?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((x) => {
                if (x) {
                    fetch(`https://mobile-hut.onrender.com/deleteService/${id}`, {
                        method: 'delete'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal({
                                    title: "Successfully Deleted!",
                                    icon: "success",
                                    button: "Ok",
                                });
                                const remainingMobile = mobile.filter(x => x.id !== id);
                                setMobile(remainingMobile);
                            }
                            else {
                                swal({
                                    title: "Failed to delete!",
                                    icon: "warning",
                                    button: "Ok",
                                });
                            }
                        })
                }
            });
    }
    return (
        <div>
            {
                !isLoadingMobile ?
                    <div>
                        <Container>
                            <Row md={2} lg={3} sm={2} xs={1} className="g-2 m-0 my-3">
                                {
                                    mobile.map(x => <ServiceCard key={x.id} data={x} from={loc.pathname.toLocaleLowerCase()} event={handleServiceDelete}></ServiceCard>)
                                }
                            </Row>
                        </Container>
                    </div>
                    :
                    <div className='mt-5 pt-5 text-center' style={{ height: '100vh' }}>
                        <Spinner animation='grow'></Spinner>
                    </div>

            }
        </div>
    );
};

export default ManageServices;