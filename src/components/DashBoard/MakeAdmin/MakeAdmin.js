import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import SideBarComponent from '../SideBarComponent/SideBarComponent';

const MakeAdmin = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const adminEmail = {
            adminEmail: data.email
        };
        const url = `https://tranquil-lowlands-10989.herokuapp.com/addAdmin`;
        // console.log(adminEmail);

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminEmail)
        })
        .then(res => console.log('server side response', res))
    };

    return (
        <>
            <Row>
                <Col md={3}>
                    <SideBarComponent></SideBarComponent>
                </Col>
                <Col md={9}>
                    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                        <input type="email" defaultValue="" placeholder="email" {...register("email")} />
                        <br/>
                        <br/>

                        {/* <input {...register("exampleRequired", { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>} */}

                        <input type="submit" />
                    </form>
                </Col>
            </Row>
        </>
    );
};

export default MakeAdmin;